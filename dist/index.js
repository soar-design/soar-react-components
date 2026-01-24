"use client";
import * as u from "react";
import P, { forwardRef as Lo, createElement as vn, useState as gt, createContext as dy, useContext as af, useCallback as Te, useRef as Ve, useLayoutEffect as yi, useEffect as vt, useMemo as Mn, isValidElement as h1, PureComponent as wi, useImperativeHandle as sf, cloneElement as g1 } from "react";
import { jsx as p, jsxs as se, Fragment as yt } from "react/jsx-runtime";
import * as zr from "react-dom";
import lf from "react-dom";
import './index.css';var fy = u.createContext(void 0), PY = (e) => {
  const { dir: t, children: n } = e;
  return /* @__PURE__ */ p(fy.Provider, { value: t, children: n });
};
function jt(e) {
  const t = u.useContext(fy);
  return e || t || "ltr";
}
function v1(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ p(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Fe(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i), l = n.length;
    n = [...n, i];
    const c = (d) => {
      var y;
      const { scope: m, children: h, ...v } = d, g = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(g.Provider, { value: b, children: h });
    };
    c.displayName = a + "Provider";
    function f(d, m) {
      var g;
      const h = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || s, v = u.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, b1(o, ...t)];
}
function b1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(a)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function dm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ye(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = dm(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : dm(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return u.useCallback(ye(...e), e);
}
// @__NO_SIDE_EFFECTS__
function fm(e) {
  const t = /* @__PURE__ */ y1(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(x1);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function y1(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = C1(o), s = S1(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var w1 = Symbol("radix.slottable");
function x1(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === w1;
}
function S1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function C1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function kn(e) {
  const t = e + "CollectionProvider", [n, r] = Fe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: b, children: y } = g, w = P.useRef(null), x = P.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: b, itemMap: x, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ fm(s), c = P.forwardRef(
    (g, b) => {
      const { scope: y, children: w } = g, x = a(s, y), S = ue(b, x.collectionRef);
      return /* @__PURE__ */ p(l, { ref: S, children: w });
    }
  );
  c.displayName = s;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", m = /* @__PURE__ */ fm(f), h = P.forwardRef(
    (g, b) => {
      const { scope: y, children: w, ...x } = g, S = P.useRef(null), E = ue(b, S), C = a(f, y);
      return P.useEffect(() => (C.itemMap.set(S, { ref: S, ...x }), () => void C.itemMap.delete(S))), /* @__PURE__ */ p(m, { [d]: "", ref: E, children: w });
    }
  );
  h.displayName = f;
  function v(g) {
    const b = a(e + "CollectionConsumer", g);
    return P.useCallback(() => {
      const w = b.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (C, _) => x.indexOf(C.ref.current) - x.indexOf(_.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: h },
    v,
    r
  ];
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Le = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, _1 = u[" useInsertionEffect ".trim().toString()] || Le;
function $e({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = E1({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const d = f.current;
      d !== s && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const c = u.useCallback(
    (f) => {
      var d;
      if (s) {
        const m = P1(f) ? f(e) : f;
        m !== e && ((d = i.current) == null || d.call(i, m));
      } else
        a(f);
    },
    [s, e, a, i]
  );
  return [l, c];
}
function E1({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return _1(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var i;
    o.current !== n && ((i = a.current) == null || i.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function P1(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function R1(e) {
  const t = /* @__PURE__ */ N1(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(M1);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function N1(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = A1(o), s = O1(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var T1 = Symbol("radix.slottable");
function M1(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === T1;
}
function O1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function A1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var D1 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], py = D1.reduce((e, t) => {
  const n = /* @__PURE__ */ R1(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
// @__NO_SIDE_EFFECTS__
function I1(e) {
  const t = /* @__PURE__ */ k1(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(L1);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function k1(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = B1(o), s = F1(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var $1 = Symbol("radix.slottable");
function L1(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $1;
}
function F1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function B1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var z1 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], cf = z1.reduce((e, t) => {
  const n = /* @__PURE__ */ I1(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function W1(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ie = (e) => {
  const { present: t, children: n } = e, r = j1(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = ue(r.ref, V1(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Ie.displayName = "Presence";
function j1(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = W1(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const c = ba(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), Le(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const m = a.current, h = ba(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Le(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, d = (h) => {
        const g = ba(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = ba(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function ba(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function V1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var H1 = u[" useId ".trim().toString()] || (() => {
}), q1 = 0;
function De(e) {
  const [t, n] = u.useState(H1());
  return Le(() => {
    n((r) => r ?? String(q1++));
  }, [e]), t ? `radix-${t}` : "";
}
var xi = "Collapsible", [G1, my] = Fe(xi), [U1, uf] = G1(xi), hy = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [l, c] = $e({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: xi
    });
    return /* @__PURE__ */ p(
      U1,
      {
        scope: n,
        disabled: a,
        contentId: De(),
        open: l,
        onOpenToggle: u.useCallback(() => c((f) => !f), [c]),
        children: /* @__PURE__ */ p(
          cf.div,
          {
            "data-state": mf(l),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
hy.displayName = xi;
var gy = "CollapsibleTrigger", df = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = uf(gy, n);
    return /* @__PURE__ */ p(
      cf.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": mf(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
df.displayName = gy;
var ff = "CollapsibleContent", pf = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = uf(ff, e.__scopeCollapsible);
    return /* @__PURE__ */ p(Ie, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ p(Y1, { ...r, ref: t, present: a }) });
  }
);
pf.displayName = ff;
var Y1 = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = uf(ff, n), [s, l] = u.useState(r), c = u.useRef(null), f = ue(t, c), d = u.useRef(0), m = d.current, h = u.useRef(0), v = h.current, g = i.open || s, b = u.useRef(g), y = u.useRef(void 0);
  return u.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Le(() => {
    const w = c.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      d.current = x.height, h.current = x.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ p(
    cf.div,
    {
      "data-state": mf(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !g,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: g && o
    }
  );
});
function mf(e) {
  return e ? "open" : "closed";
}
var vy = hy, K1 = df, X1 = pf, Vt = "Accordion", Z1 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [hf, Q1, J1] = kn(Vt), [Si] = Fe(Vt, [
  J1,
  my
]), gf = my(), by = P.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ p(hf.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ p(rR, { ...a, ref: t }) : /* @__PURE__ */ p(nR, { ...o, ref: t }) });
  }
);
by.displayName = Vt;
var [yy, eR] = Si(Vt), [wy, tR] = Si(
  Vt,
  { collapsible: !1 }
), nR = P.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, l] = $e({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Vt
    });
    return /* @__PURE__ */ p(
      yy,
      {
        scope: e.__scopeAccordion,
        value: P.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: l,
        onItemClose: P.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ p(wy, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ p(xy, { ...i, ref: t }) })
      }
    );
  }
), rR = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = $e({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Vt
  }), l = P.useCallback(
    (f) => s((d = []) => [...d, f]),
    [s]
  ), c = P.useCallback(
    (f) => s((d = []) => d.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ p(
    yy,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ p(wy, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ p(xy, { ...a, ref: t }) })
    }
  );
}), [oR, Ci] = Si(Vt), xy = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = P.useRef(null), l = ue(s, t), c = Q1(n), d = jt(o) === "ltr", m = q(e.onKeyDown, (h) => {
      var T;
      if (!Z1.includes(h.key)) return;
      const v = h.target, g = c().filter((N) => {
        var D;
        return !((D = N.ref.current) != null && D.disabled);
      }), b = g.findIndex((N) => N.ref.current === v), y = g.length;
      if (b === -1) return;
      h.preventDefault();
      let w = b;
      const x = 0, S = y - 1, E = () => {
        w = b + 1, w > S && (w = x);
      }, C = () => {
        w = b - 1, w < x && (w = S);
      };
      switch (h.key) {
        case "Home":
          w = x;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (d ? E() : C());
          break;
        case "ArrowDown":
          a === "vertical" && E();
          break;
        case "ArrowLeft":
          a === "horizontal" && (d ? C() : E());
          break;
        case "ArrowUp":
          a === "vertical" && C();
          break;
      }
      const _ = w % y;
      (T = g[_].ref.current) == null || T.focus();
    });
    return /* @__PURE__ */ p(
      oR,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ p(hf.Slot, { scope: n, children: /* @__PURE__ */ p(
          py.div,
          {
            ...i,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : m
          }
        ) })
      }
    );
  }
), Ha = "AccordionItem", [aR, vf] = Si(Ha), Sy = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Ci(Ha, n), i = eR(Ha, n), s = gf(n), l = De(), c = r && i.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ p(
      aR,
      {
        scope: n,
        open: c,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ p(
          vy,
          {
            "data-orientation": a.orientation,
            "data-state": Ny(c),
            ...s,
            ...o,
            ref: t,
            disabled: f,
            open: c,
            onOpenChange: (d) => {
              d ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Sy.displayName = Ha;
var Cy = "AccordionHeader", _y = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ci(Vt, n), a = vf(Cy, n);
    return /* @__PURE__ */ p(
      py.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Ny(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
_y.displayName = Cy;
var ld = "AccordionTrigger", Ey = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ci(Vt, n), a = vf(ld, n), i = tR(ld, n), s = gf(n);
    return /* @__PURE__ */ p(hf.ItemSlot, { scope: n, children: /* @__PURE__ */ p(
      K1,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
Ey.displayName = ld;
var Py = "AccordionContent", Ry = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ci(Vt, n), a = vf(Py, n), i = gf(n);
    return /* @__PURE__ */ p(
      X1,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
Ry.displayName = Py;
function Ny(e) {
  return e ? "open" : "closed";
}
var iR = by, sR = Sy, lR = _y, cR = Ey, uR = Ry;
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dR = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fR = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), pm = (e) => {
  const t = fR(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ty = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), pR = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mR = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hR = Lo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => vn(
    "svg",
    {
      ref: l,
      ...mR,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ty("lucide", o),
      ...!a && !pR(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([c, f]) => vn(c, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = (e, t) => {
  const n = Lo(
    ({ className: r, ...o }, a) => vn(hR, {
      ref: a,
      iconNode: t,
      className: Ty(
        `lucide-${dR(pm(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = pm(e), n;
};
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gR = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], vR = et("arrow-left", gR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bR = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], yR = et("arrow-right", bR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wR = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Fo = et("check", wR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xR = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Wr = et("chevron-down", xR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SR = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], jr = et("chevron-right", SR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CR = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], My = et("chevron-left", CR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _R = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ER = et("chevron-up", _R);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PR = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], RR = et("circle-check", PR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NR = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], _i = et("circle", NR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TR = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Oy = et("ellipsis", TR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MR = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], OR = et("grip-vertical", MR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AR = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], DR = et("info", AR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IR = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ay = et("loader-circle", IR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kR = [["path", { d: "M5 12h14", key: "1ays0h" }]], $R = et("minus", kR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LR = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], FR = et("octagon-x", LR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BR = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], zR = et("panel-left", BR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WR = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], jR = et("search", WR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VR = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], HR = et("triangle-alert", VR);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qR = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Dy = et("x", qR);
function Iy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Iy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function bn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Iy(e)) && (r && (r += " "), r += t);
  return r;
}
const bf = "-", GR = (e) => {
  const t = YR(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(bf);
      return s[0] === "" && s.length !== 1 && s.shift(), ky(s, t) || UR(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, ky = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? ky(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(bf);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, mm = /^\[(.+)\]$/, UR = (e) => {
  if (mm.test(e)) {
    const t = mm.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, YR = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return XR(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    cd(i, r, a, t);
  }), r;
}, cd = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : hm(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (KR(o)) {
        cd(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      cd(i, hm(t, a), n, r);
    });
  });
}, hm = (e, t) => {
  let n = e;
  return t.split(bf).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, KR = (e) => e.isThemeGetter, XR = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, o];
}) : e, ZR = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, $y = "!", QR = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let c = 0, f = 0, d;
    for (let b = 0; b < s.length; b++) {
      let y = s[b];
      if (c === 0) {
        if (y === o && (r || s.slice(b, b + a) === t)) {
          l.push(s.slice(f, b)), f = b + a;
          continue;
        }
        if (y === "/") {
          d = b;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const m = l.length === 0 ? s : s.substring(f), h = m.startsWith($y), v = h ? m.substring(1) : m, g = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, JR = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, eN = (e) => ({
  cache: ZR(e.cacheSize),
  parseClassName: QR(e),
  ...GR(e)
}), tN = /\s+/, nN = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(tN);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: f,
      hasImportantModifier: d,
      baseClassName: m,
      maybePostfixModifierPosition: h
    } = n(c);
    let v = !!h, g = r(v ? m.substring(0, h) : m);
    if (!g) {
      if (!v) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = r(m), !g) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      v = !1;
    }
    const b = JR(f).join(":"), y = d ? b + $y : b, w = y + g;
    if (a.includes(w))
      continue;
    a.push(w);
    const x = o(g, v);
    for (let S = 0; S < x.length; ++S) {
      const E = x[S];
      a.push(y + E);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function rN() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ly(t)) && (r && (r += " "), r += n);
  return r;
}
const Ly = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ly(e[r])) && (n && (n += " "), n += t);
  return n;
};
function oN(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((f, d) => d(f), e());
    return n = eN(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const f = nN(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(rN.apply(null, arguments));
  };
}
const ke = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Fy = /^\[(?:([a-z-]+):)?(.+)\]$/i, aN = /^\d+\/\d+$/, iN = /* @__PURE__ */ new Set(["px", "full", "screen"]), sN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, uN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fn = (e) => _r(e) || iN.has(e) || aN.test(e), _n = (e) => Vr(e, "length", yN), _r = (e) => !!e && !Number.isNaN(Number(e)), Es = (e) => Vr(e, "number", _r), Qr = (e) => !!e && Number.isInteger(Number(e)), fN = (e) => e.endsWith("%") && _r(e.slice(0, -1)), ve = (e) => Fy.test(e), En = (e) => sN.test(e), pN = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mN = (e) => Vr(e, pN, By), hN = (e) => Vr(e, "position", By), gN = /* @__PURE__ */ new Set(["image", "url"]), vN = (e) => Vr(e, gN, xN), bN = (e) => Vr(e, "", wN), Jr = () => !0, Vr = (e, t, n) => {
  const r = Fy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, yN = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lN.test(e) && !cN.test(e)
), By = () => !1, wN = (e) => uN.test(e), xN = (e) => dN.test(e), SN = () => {
  const e = ke("colors"), t = ke("spacing"), n = ke("blur"), r = ke("brightness"), o = ke("borderColor"), a = ke("borderRadius"), i = ke("borderSpacing"), s = ke("borderWidth"), l = ke("contrast"), c = ke("grayscale"), f = ke("hueRotate"), d = ke("invert"), m = ke("gap"), h = ke("gradientColorStops"), v = ke("gradientColorStopPositions"), g = ke("inset"), b = ke("margin"), y = ke("opacity"), w = ke("padding"), x = ke("saturate"), S = ke("scale"), E = ke("sepia"), C = ke("skew"), _ = ke("space"), T = ke("translate"), N = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", ve, t], k = () => [ve, t], M = () => ["", fn, _n], B = () => ["auto", _r, ve], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ve], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => [_r, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Jr],
      spacing: [fn, _n],
      blur: ["none", "", En, ve],
      brightness: Z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", En, ve],
      borderSpacing: k(),
      borderWidth: M(),
      contrast: Z(),
      grayscale: j(),
      hueRotate: Z(),
      invert: j(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [fN, _n],
      inset: O(),
      margin: O(),
      opacity: Z(),
      padding: k(),
      saturate: Z(),
      scale: Z(),
      sepia: j(),
      skew: Z(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ve]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [En]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), ve]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Qr, ve]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Qr, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Jr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qr, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Jr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qr, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...G()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...G(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ve, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ve, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [En]
        }, En]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ve, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", En, _n]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Es]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _r, Es]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", fn, ve]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", fn, _n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", fn, ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ve]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), hN]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", mN]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vN]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [fn, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [fn, _n]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [fn, _n]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", En, bN]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Jr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", En, ve]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Qr, ve]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ve]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [fn, _n, Es]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, CN = /* @__PURE__ */ oN(SN);
function R(...e) {
  return CN(bn(e));
}
function RY({
  ...e
}) {
  return /* @__PURE__ */ p(iR, { "data-slot": "accordion", ...e });
}
function NY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    sR,
    {
      "data-slot": "accordion-item",
      className: R("border-b last:border-b-0", e),
      ...t
    }
  );
}
function TY({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p(lR, { className: "flex", children: /* @__PURE__ */ se(
    cR,
    {
      "data-slot": "accordion-trigger",
      className: R(
        "focus-visible:border-ring focus-visible:ring-ring flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p(Wr, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function MY({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    uR,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ p("div", { className: R("pt-0 pb-4", e), children: t })
    }
  );
}
const gm = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, vm = bn, xt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return vm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const f = n == null ? void 0 : n[c], d = a == null ? void 0 : a[c];
    if (f === null) return null;
    const m = gm(f) || gm(d);
    return o[c][m];
  }), s = n && Object.entries(n).reduce((c, f) => {
    let [d, m] = f;
    return m === void 0 || (c[d] = m), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: d, className: m, ...h } = f;
    return Object.entries(h).every((v) => {
      let [g, b] = v;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === b;
    }) ? [
      ...c,
      d,
      m
    ] : c;
  }, []);
  return vm(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, _N = xt(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function OY({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: R(_N({ variant: t }), e),
      ...n
    }
  );
}
function AY({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "alert-title",
      className: R(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function DY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "alert-description",
      className: R(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
var EN = Symbol.for("react.lazy"), qa = u[" use ".trim().toString()];
function PN(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function zy(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === EN && "_payload" in e && PN(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Wy(e) {
  const t = /* @__PURE__ */ RN(e), n = u.forwardRef((r, o) => {
    let { children: a, ...i } = r;
    zy(a) && typeof qa == "function" && (a = qa(a._payload));
    const s = u.Children.toArray(a), l = s.find(TN);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ht = /* @__PURE__ */ Wy("Slot");
// @__NO_SIDE_EFFECTS__
function RN(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (zy(o) && typeof qa == "function" && (o = qa(o._payload)), u.isValidElement(o)) {
      const i = ON(o), s = MN(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var NN = Symbol("radix.slottable");
function TN(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === NN;
}
function MN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ON(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var AN = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], rt = AN.reduce((e, t) => {
  const n = /* @__PURE__ */ Wy(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), DN = "AspectRatio", jy = u.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ p(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ p(
          rt.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
jy.displayName = DN;
var IN = jy;
function IY({
  ...e
}) {
  return /* @__PURE__ */ p(IN, { "data-slot": "aspect-ratio", ...e });
}
// @__NO_SIDE_EFFECTS__
function kN(e) {
  const t = /* @__PURE__ */ $N(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(FN);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function $N(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = zN(o), s = BN(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var LN = Symbol("radix.slottable");
function FN(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === LN;
}
function BN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function zN(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var WN = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Vy = WN.reduce((e, t) => {
  const n = /* @__PURE__ */ kN(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function jN(e, t) {
  e && zr.flushSync(() => e.dispatchEvent(t));
}
function Ae(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function VN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var HN = "DismissableLayer", ud = "dismissableLayer.update", qN = "dismissableLayer.pointerDownOutside", GN = "dismissableLayer.focusOutside", bm, Hy = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $n = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = u.useContext(Hy), [f, d] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), v = ue(t, (_) => d(_)), g = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(b), w = f ? g.indexOf(f) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, E = KN((_) => {
      const T = _.target, N = [...c.branches].some((D) => D.contains(T));
      !S || N || (o == null || o(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, m), C = XN((_) => {
      const T = _.target;
      [...c.branches].some((D) => D.contains(T)) || (a == null || a(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, m);
    return VN((_) => {
      w === c.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && s && (_.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (bm = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), ym(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = bm);
        };
    }, [f, m, n, c]), u.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), ym());
    }, [f, c]), u.useEffect(() => {
      const _ = () => h({});
      return document.addEventListener(ud, _), () => document.removeEventListener(ud, _);
    }, []), /* @__PURE__ */ p(
      Vy.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
$n.displayName = HN;
var UN = "DismissableLayerBranch", YN = u.forwardRef((e, t) => {
  const n = u.useContext(Hy), r = u.useRef(null), o = ue(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p(Vy.div, { ...e, ref: o });
});
YN.displayName = UN;
function KN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          qy(
            qN,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function XN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && qy(GN, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ym() {
  const e = new CustomEvent(ud);
  document.dispatchEvent(e);
}
function qy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? jN(o, a) : o.dispatchEvent(a);
}
// @__NO_SIDE_EFFECTS__
function ZN(e) {
  const t = /* @__PURE__ */ QN(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(eT);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function QN(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = nT(o), s = tT(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var JN = Symbol("radix.slottable");
function eT(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === JN;
}
function tT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rT = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], oT = rT.reduce((e, t) => {
  const n = /* @__PURE__ */ ZN(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ps = "focusScope.autoFocusOnMount", Rs = "focusScope.autoFocusOnUnmount", wm = { bubbles: !1, cancelable: !0 }, aT = "FocusScope", Bo = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = u.useState(null), c = Ae(o), f = Ae(a), d = u.useRef(null), m = ue(t, (g) => l(g)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let g = function(x) {
        if (h.paused || !s) return;
        const S = x.target;
        s.contains(S) ? d.current = S : Rn(d.current, { select: !0 });
      }, b = function(x) {
        if (h.paused || !s) return;
        const S = x.relatedTarget;
        S !== null && (s.contains(S) || Rn(d.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && Rn(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, s, h.paused]), u.useEffect(() => {
    if (s) {
      Sm.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const y = new CustomEvent(Ps, wm);
        s.addEventListener(Ps, c), s.dispatchEvent(y), y.defaultPrevented || (iT(dT(Gy(s)), { select: !0 }), document.activeElement === g && Rn(s));
      }
      return () => {
        s.removeEventListener(Ps, c), setTimeout(() => {
          const y = new CustomEvent(Rs, wm);
          s.addEventListener(Rs, f), s.dispatchEvent(y), y.defaultPrevented || Rn(g ?? document.body, { select: !0 }), s.removeEventListener(Rs, f), Sm.remove(h);
        }, 0);
      };
    }
  }, [s, c, f, h]);
  const v = u.useCallback(
    (g) => {
      if (!n && !r || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (b && y) {
        const w = g.currentTarget, [x, S] = sT(w);
        x && S ? !g.shiftKey && y === S ? (g.preventDefault(), n && Rn(x, { select: !0 })) : g.shiftKey && y === x && (g.preventDefault(), n && Rn(S, { select: !0 })) : y === w && g.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p(oT.div, { tabIndex: -1, ...i, ref: m, onKeyDown: v });
});
Bo.displayName = aT;
function iT(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rn(r, { select: t }), document.activeElement !== n) return;
}
function sT(e) {
  const t = Gy(e), n = xm(t, e), r = xm(t.reverse(), e);
  return [n, r];
}
function Gy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xm(e, t) {
  for (const n of e)
    if (!lT(n, { upTo: t })) return n;
}
function lT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function cT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && cT(e) && t && e.select();
  }
}
var Sm = uT();
function uT() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Cm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Cm(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Cm(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function dT(e) {
  return e.filter((t) => t.tagName !== "A");
}
// @__NO_SIDE_EFFECTS__
function fT(e) {
  const t = /* @__PURE__ */ pT(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(hT);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function pT(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = vT(o), s = gT(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var mT = Symbol("radix.slottable");
function hT(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mT;
}
function gT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bT = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], yT = bT.reduce((e, t) => {
  const n = /* @__PURE__ */ fT(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), wT = "Portal", ar = u.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Le(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? lf.createPortal(/* @__PURE__ */ p(yT.div, { ...r, ref: t }), i) : null;
});
ar.displayName = wT;
// @__NO_SIDE_EFFECTS__
function Uy(e) {
  const t = /* @__PURE__ */ xT(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(CT);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function xT(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = ET(o), s = _T(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ST = Symbol("radix.slottable");
function CT(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ST;
}
function _T(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ET(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var PT = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], zo = PT.reduce((e, t) => {
  const n = /* @__PURE__ */ Uy(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ns = 0;
function Ei() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _m()), document.body.insertAdjacentElement("beforeend", e[1] ?? _m()), Ns++, () => {
      Ns === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ns--;
    };
  }, []);
}
function _m() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Zt = function() {
  return Zt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Zt.apply(this, arguments);
};
function Yy(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function RT(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var La = "right-scroll-bar-position", Fa = "width-before-scroll-bar", NT = "with-scroll-bars-hidden", TT = "--removed-body-scroll-bar-size";
function Ts(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function MT(e, t) {
  var n = gt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var OT = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Em = /* @__PURE__ */ new WeakMap();
function AT(e, t) {
  var n = MT(null, function(r) {
    return e.forEach(function(o) {
      return Ts(o, r);
    });
  });
  return OT(function() {
    var r = Em.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Ts(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Ts(s, i);
      });
    }
    Em.set(n, e);
  }, [e]), n;
}
function DT(e) {
  return e;
}
function IT(e, t) {
  t === void 0 && (t = DT);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          i.push(f), c();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return o;
}
function kT(e) {
  e === void 0 && (e = {});
  var t = IT(null);
  return t.options = Zt({ async: !0, ssr: !1 }, e), t;
}
var Ky = function(e) {
  var t = e.sideCar, n = Yy(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Zt({}, n));
};
Ky.isSideCarExport = !0;
function $T(e, t) {
  return e.useMedium(t), Ky;
}
var Xy = kT(), Ms = function() {
}, Pi = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Ms,
    onWheelCapture: Ms,
    onTouchMoveCapture: Ms
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, d = e.shards, m = e.sideCar, h = e.noRelative, v = e.noIsolation, g = e.inert, b = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = Yy(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = m, C = AT([n, t]), _ = Zt(Zt({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(E, { sideCar: Xy, removeScrollBar: c, shards: d, noRelative: h, noIsolation: v, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: x }),
    i ? u.cloneElement(u.Children.only(s), Zt(Zt({}, _), { ref: C })) : u.createElement(w, Zt({}, _, { className: l, ref: C }), s)
  );
});
Pi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pi.classNames = {
  fullWidth: Fa,
  zeroRight: La
};
var LT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function FT() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = LT();
  return t && e.setAttribute("nonce", t), e;
}
function BT(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var WT = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = FT()) && (BT(t, n), zT(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, jT = function() {
  var e = WT();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Zy = function() {
  var e = jT(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, VT = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Os = function(e) {
  return parseInt(e || "", 10) || 0;
}, HT = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Os(n), Os(r), Os(o)];
}, qT = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return VT;
  var t = HT(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, GT = Zy(), Er = "data-scroll-locked", UT = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(NT, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Er, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(La, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Fa, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Fa, " .").concat(Fa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Er, `] {
    `).concat(TT, ": ").concat(s, `px;
  }
`);
}, Pm = function() {
  var e = parseInt(document.body.getAttribute(Er) || "0", 10);
  return isFinite(e) ? e : 0;
}, YT = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Er, (Pm() + 1).toString()), function() {
      var e = Pm() - 1;
      e <= 0 ? document.body.removeAttribute(Er) : document.body.setAttribute(Er, e.toString());
    };
  }, []);
}, KT = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  YT();
  var a = u.useMemo(function() {
    return qT(o);
  }, [o]);
  return u.createElement(GT, { styles: UT(a, !t, o, n ? "" : "!important") });
}, dd = !1;
if (typeof window < "u")
  try {
    var ya = Object.defineProperty({}, "passive", {
      get: function() {
        return dd = !0, !0;
      }
    });
    window.addEventListener("test", ya, ya), window.removeEventListener("test", ya, ya);
  } catch {
    dd = !1;
  }
var pr = dd ? { passive: !1 } : !1, XT = function(e) {
  return e.tagName === "TEXTAREA";
}, Qy = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !XT(e) && n[t] === "visible")
  );
}, ZT = function(e) {
  return Qy(e, "overflowY");
}, QT = function(e) {
  return Qy(e, "overflowX");
}, Rm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Jy(e, r);
    if (o) {
      var a = ew(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, JT = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, eM = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Jy = function(e, t) {
  return e === "v" ? ZT(t) : QT(t);
}, ew = function(e, t) {
  return e === "v" ? JT(t) : eM(t);
}, tM = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nM = function(e, t, n, r, o) {
  var a = tM(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, f = i > 0, d = 0, m = 0;
  do {
    if (!s)
      break;
    var h = ew(e, s), v = h[0], g = h[1], b = h[2], y = g - b - a * v;
    (v || y) && Jy(e, s) && (d += y, m += v);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(m) < 1) && (c = !0), c;
}, wa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nm = function(e) {
  return [e.deltaX, e.deltaY];
}, Tm = function(e) {
  return e && "current" in e ? e.current : e;
}, rM = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oM = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aM = 0, mr = [];
function iM(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(aM++)[0], a = u.useState(Zy)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = RT([e.lockRef.current], (e.shards || []).map(Tm), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = wa(g), w = n.current, x = "deltaX" in g ? g.deltaX : w[0] - y[0], S = "deltaY" in g ? g.deltaY : w[1] - y[1], E, C = g.target, _ = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && _ === "h" && C.type === "range")
      return !1;
    var T = Rm(_, C);
    if (!T)
      return !0;
    if (T ? E = _ : (E = _ === "v" ? "h" : "v", T = Rm(_, C)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (x || S) && (r.current = E), !E)
      return !0;
    var N = r.current || E;
    return nM(N, b, g, N === "h" ? x : S);
  }, []), l = u.useCallback(function(g) {
    var b = g;
    if (!(!mr.length || mr[mr.length - 1] !== a)) {
      var y = "deltaY" in b ? Nm(b) : wa(b), w = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && rM(E.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(Tm).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), S = x.length > 0 ? s(b, x[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(g, b, y, w) {
    var x = { name: g, delta: b, target: y, should: w, shadowParent: sM(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), f = u.useCallback(function(g) {
    n.current = wa(g), r.current = void 0;
  }, []), d = u.useCallback(function(g) {
    c(g.type, Nm(g), g.target, s(g, e.lockRef.current));
  }, []), m = u.useCallback(function(g) {
    c(g.type, wa(g), g.target, s(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return mr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, pr), document.addEventListener("touchmove", l, pr), document.addEventListener("touchstart", f, pr), function() {
      mr = mr.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, pr), document.removeEventListener("touchmove", l, pr), document.removeEventListener("touchstart", f, pr);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(a, { styles: oM(o) }) : null,
    h ? u.createElement(KT, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function sM(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const lM = $T(Xy, iM);
var Wo = u.forwardRef(function(e, t) {
  return u.createElement(Pi, Zt({}, e, { ref: t, sideCar: lM }));
});
Wo.classNames = Pi.classNames;
var cM = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, hr = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap(), Sa = {}, As = 0, tw = function(e) {
  return e && (e.host || tw(e.parentNode));
}, uM = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = tw(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, dM = function(e, t, n, r) {
  var o = uM(t, Array.isArray(e) ? e : [e]);
  Sa[n] || (Sa[n] = /* @__PURE__ */ new WeakMap());
  var a = Sa[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var h = m.getAttribute(r), v = h !== null && h !== "false", g = (hr.get(m) || 0) + 1, b = (a.get(m) || 0) + 1;
          hr.set(m, g), a.set(m, b), i.push(m), g === 1 && v && xa.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return f(t), s.clear(), As++, function() {
    i.forEach(function(d) {
      var m = hr.get(d) - 1, h = a.get(d) - 1;
      hr.set(d, m), a.set(d, h), m || (xa.has(d) || d.removeAttribute(r), xa.delete(d)), h || d.removeAttribute(n);
    }), As--, As || (hr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap(), Sa = {});
  };
}, Ri = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = cM(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), dM(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ni = "Dialog", [nw, rw] = Fe(Ni), [fM, qt] = nw(Ni), ow = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [c, f] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ni
  });
  return /* @__PURE__ */ p(
    fM,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: De(),
      titleId: De(),
      descriptionId: De(),
      open: c,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((d) => !d), [f]),
      modal: i,
      children: n
    }
  );
};
ow.displayName = Ni;
var aw = "DialogTrigger", iw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qt(aw, n), a = ue(t, o.triggerRef);
    return /* @__PURE__ */ p(
      zo.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xf(o.open),
        ...r,
        ref: a,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
iw.displayName = aw;
var yf = "DialogPortal", [pM, sw] = nw(yf, {
  forceMount: void 0
}), lw = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = qt(yf, t);
  return /* @__PURE__ */ p(pM, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ p(Ie, { present: n || a.open, children: /* @__PURE__ */ p(ar, { asChild: !0, container: o, children: i }) })) });
};
lw.displayName = yf;
var Ga = "DialogOverlay", cw = u.forwardRef(
  (e, t) => {
    const n = sw(Ga, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = qt(Ga, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ p(Ie, { present: r || a.open, children: /* @__PURE__ */ p(hM, { ...o, ref: t }) }) : null;
  }
);
cw.displayName = Ga;
var mM = /* @__PURE__ */ Uy("DialogOverlay.RemoveScroll"), hM = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qt(Ga, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(Wo, { as: mM, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p(
        zo.div,
        {
          "data-state": xf(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Zn = "DialogContent", uw = u.forwardRef(
  (e, t) => {
    const n = sw(Zn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = qt(Zn, e.__scopeDialog);
    return /* @__PURE__ */ p(Ie, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p(gM, { ...o, ref: t }) : /* @__PURE__ */ p(vM, { ...o, ref: t }) });
  }
);
uw.displayName = Zn;
var gM = u.forwardRef(
  (e, t) => {
    const n = qt(Zn, e.__scopeDialog), r = u.useRef(null), o = ue(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Ri(a);
    }, []), /* @__PURE__ */ p(
      dw,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), vM = u.forwardRef(
  (e, t) => {
    const n = qt(Zn, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p(
      dw,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), dw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = qt(Zn, n), l = u.useRef(null), c = ue(t, l);
    return Ei(), /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(
        Bo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ p(
            $n,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": xf(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ se(yt, { children: [
        /* @__PURE__ */ p(yM, { titleId: s.titleId }),
        /* @__PURE__ */ p(xM, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), wf = "DialogTitle", fw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qt(wf, n);
    return /* @__PURE__ */ p(zo.h2, { id: o.titleId, ...r, ref: t });
  }
);
fw.displayName = wf;
var pw = "DialogDescription", mw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qt(pw, n);
    return /* @__PURE__ */ p(zo.p, { id: o.descriptionId, ...r, ref: t });
  }
);
mw.displayName = pw;
var hw = "DialogClose", gw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qt(hw, n);
    return /* @__PURE__ */ p(
      zo.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
gw.displayName = hw;
function xf(e) {
  return e ? "open" : "closed";
}
var vw = "DialogTitleWarning", [bM, bw] = v1(vw, {
  contentName: Zn,
  titleName: wf,
  docsSlug: "dialog"
}), yM = ({ titleId: e }) => {
  const t = bw(vw), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, wM = "DialogDescriptionWarning", xM = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bw(wM).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, jo = ow, Ti = iw, Vo = lw, Ho = cw, qo = uw, Mi = fw, Oi = mw, ir = gw, SM = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function CM(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p(yt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = SM, t;
}
var yw = "AlertDialog", [_M] = Fe(yw, [
  rw
]), xn = rw(), ww = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = xn(t);
  return /* @__PURE__ */ p(jo, { ...r, ...n, modal: !0 });
};
ww.displayName = yw;
var EM = "AlertDialogTrigger", xw = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = xn(n);
    return /* @__PURE__ */ p(Ti, { ...o, ...r, ref: t });
  }
);
xw.displayName = EM;
var PM = "AlertDialogPortal", Sw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = xn(t);
  return /* @__PURE__ */ p(Vo, { ...r, ...n });
};
Sw.displayName = PM;
var RM = "AlertDialogOverlay", Cw = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = xn(n);
    return /* @__PURE__ */ p(Ho, { ...o, ...r, ref: t });
  }
);
Cw.displayName = RM;
var Pr = "AlertDialogContent", [NM, TM] = _M(Pr), MM = /* @__PURE__ */ CM("AlertDialogContent"), _w = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = xn(n), i = u.useRef(null), s = ue(t, i), l = u.useRef(null);
    return /* @__PURE__ */ p(
      bM,
      {
        contentName: Pr,
        titleName: Ew,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ p(NM, { scope: n, cancelRef: l, children: /* @__PURE__ */ se(
          qo,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: q(o.onOpenAutoFocus, (c) => {
              var f;
              c.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ p(MM, { children: r }),
              /* @__PURE__ */ p(AM, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
_w.displayName = Pr;
var Ew = "AlertDialogTitle", Pw = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = xn(n);
    return /* @__PURE__ */ p(Mi, { ...o, ...r, ref: t });
  }
);
Pw.displayName = Ew;
var Rw = "AlertDialogDescription", Nw = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = xn(n);
  return /* @__PURE__ */ p(Oi, { ...o, ...r, ref: t });
});
Nw.displayName = Rw;
var OM = "AlertDialogAction", Tw = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = xn(n);
    return /* @__PURE__ */ p(ir, { ...o, ...r, ref: t });
  }
);
Tw.displayName = OM;
var Mw = "AlertDialogCancel", Ow = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = TM(Mw, n), a = xn(n), i = ue(t, o);
    return /* @__PURE__ */ p(ir, { ...a, ...r, ref: i });
  }
);
Ow.displayName = Mw;
var AM = ({ contentRef: e }) => {
  const t = `\`${Pr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Pr}\` by passing a \`${Rw}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Pr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, DM = ww, IM = xw, kM = Sw, $M = Cw, LM = _w, FM = Tw, BM = Ow, zM = Pw, WM = Nw;
const Tr = xt(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "border shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      },
      roundness: {
        default: "rounded-md",
        round: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "default"
    }
  }
);
function Go({
  className: e,
  variant: t = "default",
  size: n = "default",
  roundness: r = "default",
  asChild: o = !1,
  ...a
}) {
  return /* @__PURE__ */ p(
    o ? Ht : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      "data-roundness": r,
      className: R(Tr({ variant: t, size: n, roundness: r, className: e })),
      ...a
    }
  );
}
function kY({
  ...e
}) {
  return /* @__PURE__ */ p(DM, { "data-slot": "alert-dialog", ...e });
}
function $Y({
  ...e
}) {
  return /* @__PURE__ */ p(IM, { "data-slot": "alert-dialog-trigger", ...e });
}
function jM({
  ...e
}) {
  return /* @__PURE__ */ p(kM, { "data-slot": "alert-dialog-portal", ...e });
}
function VM({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    $M,
    {
      "data-slot": "alert-dialog-overlay",
      className: R(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function LY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(jM, { children: [
    /* @__PURE__ */ p(VM, {}),
    /* @__PURE__ */ p(
      LM,
      {
        "data-slot": "alert-dialog-content",
        className: R(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function FY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: R("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function BY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: R(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function zY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    zM,
    {
      "data-slot": "alert-dialog-title",
      className: R("text-lg font-semibold", e),
      ...t
    }
  );
}
function WY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    WM,
    {
      "data-slot": "alert-dialog-description",
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function jY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    FM,
    {
      className: R(Tr(), e),
      ...t
    }
  );
}
function VY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    BM,
    {
      className: R(Tr({ variant: "outline" }), e),
      ...t
    }
  );
}
function HM(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i);
    s.displayName = a + "Context";
    const l = n.length;
    n = [...n, i];
    const c = (d) => {
      var y;
      const { scope: m, children: h, ...v } = d, g = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(g.Provider, { value: b, children: h });
    };
    c.displayName = a + "Provider";
    function f(d, m) {
      var g;
      const h = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || s, v = u.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, qM(o, ...t)];
}
function qM(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(a)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _a = { exports: {} }, Ds = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function GM() {
  if (Mm) return Ds;
  Mm = 1;
  var e = P;
  function t(d, m) {
    return d === m && (d !== 0 || 1 / d === 1 / m) || d !== d && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(d, m) {
    var h = m(), v = r({ inst: { value: h, getSnapshot: m } }), g = v[0].inst, b = v[1];
    return a(
      function() {
        g.value = h, g.getSnapshot = m, l(g) && b({ inst: g });
      },
      [d, h, m]
    ), o(
      function() {
        return l(g) && b({ inst: g }), d(function() {
          l(g) && b({ inst: g });
        });
      },
      [d]
    ), i(h), h;
  }
  function l(d) {
    var m = d.getSnapshot;
    d = d.value;
    try {
      var h = m();
      return !n(d, h);
    } catch {
      return !0;
    }
  }
  function c(d, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Ds.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ds;
}
var Is = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om;
function UM() {
  return Om || (Om = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, v) {
      return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
    }
    function t(h, v) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = v();
      if (!d) {
        var b = v();
        a(g, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      b = i({
        inst: { value: g, getSnapshot: v }
      });
      var y = b[0].inst, w = b[1];
      return l(
        function() {
          y.value = g, y.getSnapshot = v, n(y) && w({ inst: y });
        },
        [h, g, v]
      ), s(
        function() {
          return n(y) && w({ inst: y }), h(function() {
            n(y) && w({ inst: y });
          });
        },
        [h]
      ), c(g), g;
    }
    function n(h) {
      var v = h.getSnapshot;
      h = h.value;
      try {
        var g = v();
        return !a(h, g);
      } catch {
        return !0;
      }
    }
    function r(h, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = P, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, l = o.useLayoutEffect, c = o.useDebugValue, f = !1, d = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Is.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Is;
}
var Am;
function YM() {
  return Am || (Am = 1, process.env.NODE_ENV === "production" ? _a.exports = GM() : _a.exports = UM()), _a.exports;
}
var KM = YM();
function XM() {
  return KM.useSyncExternalStore(
    ZM,
    () => !0,
    () => !1
  );
}
function ZM() {
  return () => {
  };
}
var Sf = "Avatar", [QM] = HM(Sf), [JM, Aw] = QM(Sf), Dw = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ p(
      JM,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ p(rt.span, { ...r, ref: t })
      }
    );
  }
);
Dw.displayName = Sf;
var Iw = "AvatarImage", kw = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Aw(Iw, n), s = eO(r, a), l = Ae((c) => {
      o(c), i.onImageLoadingStatusChange(c);
    });
    return Le(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ p(rt.img, { ...a, ref: t, src: r }) : null;
  }
);
kw.displayName = Iw;
var $w = "AvatarFallback", Lw = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Aw($w, n), [i, s] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ p(rt.span, { ...o, ref: t }) : null;
  }
);
Lw.displayName = $w;
function Dm(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function eO(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = XM(), o = u.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = u.useState(
    () => Dm(a, e)
  );
  return Le(() => {
    s(Dm(a, e));
  }, [a, e]), Le(() => {
    const l = (d) => () => {
      s(d);
    };
    if (!a) return;
    const c = l("loaded"), f = l("error");
    return a.addEventListener("load", c), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", c), a.removeEventListener("error", f);
    };
  }, [a, n, t]), i;
}
var tO = Dw, nO = kw, rO = Lw;
function HY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    tO,
    {
      "data-slot": "avatar",
      className: R(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function qY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    nO,
    {
      "data-slot": "avatar-image",
      className: R("aspect-square size-full", e),
      ...t
    }
  );
}
function GY({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    rO,
    {
      "data-slot": "avatar-fallback",
      className: R(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const oO = xt(
  "inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-4 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary-hover",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function UY({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ p(
    n ? Ht : "span",
    {
      "data-slot": "badge",
      className: R(oO({ variant: t }), e),
      ...r
    }
  );
}
function YY({ ...e }) {
  return /* @__PURE__ */ p("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function KY({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: R(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function XY({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: R("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function ZY({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    e ? Ht : "a",
    {
      "data-slot": "breadcrumb-link",
      className: R("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function QY({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: R("text-foreground font-normal", e),
      ...t
    }
  );
}
function JY({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: R("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ p(jr, {})
    }
  );
}
function eK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: R("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ p(Oy, { className: "size-4" }),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function aO(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ks = {}, so = {};
function Kn(e, t) {
  try {
    const r = (ks[e] || (ks[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in so ? so[r] : Im(r, r.split(":"));
  } catch {
    if (e in so) return so[e];
    const n = e == null ? void 0 : e.match(iO);
    return n ? Im(e, n.slice(1)) : NaN;
  }
}
const iO = /([+-]\d\d):?(\d\d)?/;
function Im(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return so[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Qt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Kn(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Fw(this), fd(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Qt(...n, t) : new Qt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Qt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Kn(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), fd(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Qt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const km = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!km.test(e)) return;
  const t = e.replace(km, "$1UTC");
  Qt.prototype[t] && (e.startsWith("get") ? Qt.prototype[e] = function() {
    return this.internal[t]();
  } : (Qt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), sO(this), +this;
  }, Qt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), fd(this), +this;
  }));
});
function fd(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Kn(e.timeZone, e) * 60));
}
function sO(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Fw(e);
}
function Fw(e) {
  const t = Kn(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - a, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const c = /* @__PURE__ */ new Date(+e);
  c.setUTCSeconds(0);
  const f = o > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, d = Math.round(-(Kn(e.timeZone, e) * 60)) % 60;
  (d || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + f));
  const m = Kn(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, b = h !== n, y = g - l;
  if (b && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const w = Kn(e.timeZone, e), x = w > 0 ? Math.floor(w) : Math.ceil(w), S = h - x;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class nt extends Qt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new nt(...n, t) : new nt(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${aO(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new nt(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new nt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Bw = 6048e5, lO = 864e5, $m = Symbol.for("constructDateFrom");
function Xe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && $m in e ? e[$m](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Me(e, t) {
  return Xe(t || e, e);
}
function zw(e, t, n) {
  const r = Me(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Xe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ww(e, t, n) {
  const r = Me(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Xe(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Xe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let cO = {};
function Uo() {
  return cO;
}
function Mr(e, t) {
  var s, l, c, f;
  const n = Uo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Me(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function yo(e, t) {
  return Mr(e, { ...t, weekStartsOn: 1 });
}
function jw(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Xe(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = yo(o), i = Xe(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = yo(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Lm(e) {
  const t = Me(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Hr(e, ...t) {
  const n = Xe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function wo(e, t) {
  const n = Me(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Cf(e, t, n) {
  const [r, o] = Hr(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = wo(r), i = wo(o), s = +a - Lm(a), l = +i - Lm(i);
  return Math.round((s - l) / lO);
}
function uO(e, t) {
  const n = jw(e, t), r = Xe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), yo(r);
}
function dO(e, t, n) {
  return zw(e, t * 7, n);
}
function fO(e, t, n) {
  return Ww(e, t * 12, n);
}
function pO(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Xe.bind(null, o));
    const a = Me(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Xe(r, n || NaN);
}
function mO(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Xe.bind(null, o));
    const a = Me(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Xe(r, n || NaN);
}
function hO(e, t, n) {
  const [r, o] = Hr(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +wo(r) == +wo(o);
}
function Vw(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function gO(e) {
  return !(!Vw(e) && typeof e != "number" || isNaN(+Me(e)));
}
function Hw(e, t, n) {
  const [r, o] = Hr(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return a * 12 + i;
}
function vO(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function qw(e, t) {
  const [n, r] = Hr(e, t.start, t.end);
  return { start: n, end: r };
}
function bO(e, t) {
  const { start: n, end: r } = qw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const l = [];
  for (; +i <= a; )
    l.push(Xe(n, i)), i.setMonth(i.getMonth() + s);
  return o ? l.reverse() : l;
}
function yO(e, t) {
  const n = Me(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function wO(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Gw(e, t) {
  const n = Me(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xO(e, t) {
  const { start: n, end: r } = qw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let s = 1;
  const l = [];
  for (; +i <= a; )
    l.push(Xe(n, i)), i.setFullYear(i.getFullYear() + s);
  return o ? l.reverse() : l;
}
function Uw(e, t) {
  var s, l, c, f;
  const n = Uo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Me(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function SO(e, t) {
  return Uw(e, { ...t, weekStartsOn: 1 });
}
const CO = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, _O = (e, t, n) => {
  let r;
  const o = CO[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function $s(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const EO = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, PO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, RO = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, NO = {
  date: $s({
    formats: EO,
    defaultWidth: "full"
  }),
  time: $s({
    formats: PO,
    defaultWidth: "full"
  }),
  dateTime: $s({
    formats: RO,
    defaultWidth: "full"
  })
}, TO = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, MO = (e, t, n, r) => TO[e];
function eo(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const OO = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, AO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, DO = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, IO = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, kO = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, $O = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, LO = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, FO = {
  ordinalNumber: LO,
  era: eo({
    values: OO,
    defaultWidth: "wide"
  }),
  quarter: eo({
    values: AO,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: eo({
    values: DO,
    defaultWidth: "wide"
  }),
  day: eo({
    values: IO,
    defaultWidth: "wide"
  }),
  dayPeriod: eo({
    values: kO,
    defaultWidth: "wide",
    formattingValues: $O,
    defaultFormattingWidth: "wide"
  })
};
function to(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? zO(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      BO(s, (d) => d.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const f = t.slice(i.length);
    return { value: c, rest: f };
  };
}
function BO(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function zO(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function WO(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const jO = /^(\d+)(th|st|nd|rd)?/i, VO = /\d+/i, HO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qO = {
  any: [/^b/i, /^(a|c)/i]
}, GO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, UO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, YO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, KO = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, XO = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ZO = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, QO = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, JO = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, eA = {
  ordinalNumber: WO({
    matchPattern: jO,
    parsePattern: VO,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: to({
    matchPatterns: HO,
    defaultMatchWidth: "wide",
    parsePatterns: qO,
    defaultParseWidth: "any"
  }),
  quarter: to({
    matchPatterns: GO,
    defaultMatchWidth: "wide",
    parsePatterns: UO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: to({
    matchPatterns: YO,
    defaultMatchWidth: "wide",
    parsePatterns: KO,
    defaultParseWidth: "any"
  }),
  day: to({
    matchPatterns: XO,
    defaultMatchWidth: "wide",
    parsePatterns: ZO,
    defaultParseWidth: "any"
  }),
  dayPeriod: to({
    matchPatterns: QO,
    defaultMatchWidth: "any",
    parsePatterns: JO,
    defaultParseWidth: "any"
  })
}, yr = {
  code: "en-US",
  formatDistance: _O,
  formatLong: NO,
  formatRelative: MO,
  localize: FO,
  match: eA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function tA(e, t) {
  const n = Me(e, t == null ? void 0 : t.in);
  return Cf(n, Gw(n)) + 1;
}
function _f(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = +yo(n) - +uO(n);
  return Math.round(r / Bw) + 1;
}
function Yw(e, t) {
  var f, d, m, h;
  const n = Me(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Uo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = Xe((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Mr(i, t), l = Xe((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = Mr(l, t);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function nA(e, t) {
  var s, l, c, f;
  const n = Uo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Yw(e, t), a = Xe((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Mr(a, t);
}
function Ef(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = +Mr(n, t) - +nA(n, t);
  return Math.round(r / Bw) + 1;
}
function Ne(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Pn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ne(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ne(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ne(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ne(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ne(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ne(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ne(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ne(o, t.length);
  }
}, gr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fm = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Pn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Yw(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return Ne(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ne(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = jw(e);
    return Ne(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ne(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ne(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ne(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Pn.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ne(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Ef(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ne(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = _f(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ne(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = tA(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ne(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return Ne(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return Ne(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ne(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = gr.noon : r === 0 ? o = gr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = gr.evening : r >= 12 ? o = gr.afternoon : r >= 4 ? o = gr.morning : o = gr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Pn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Pn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ne(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ne(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Pn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return zm(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Un(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Un(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return zm(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Un(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Un(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Bm(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Un(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Bm(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Un(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ne(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ne(+e, t.length);
  }
};
function Bm(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Ne(a, 2);
}
function zm(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ne(Math.abs(e) / 60, 2) : Un(e, t);
}
function Un(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ne(Math.trunc(r / 60), 2), a = Ne(r % 60, 2);
  return n + o + t + a;
}
const Wm = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Kw = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, rA = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Wm(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Wm(r, t)).replace("{{time}}", Kw(o, t));
}, oA = {
  p: Kw,
  P: rA
}, aA = /^D+$/, iA = /^Y+$/, sA = ["D", "DD", "YY", "YYYY"];
function lA(e) {
  return aA.test(e);
}
function cA(e) {
  return iA.test(e);
}
function uA(e, t, n) {
  const r = dA(e, t, n);
  if (console.warn(r), sA.includes(e)) throw new RangeError(r);
}
function dA(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const fA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, mA = /^'([^]*?)'?$/, hA = /''/g, gA = /[a-zA-Z]/;
function lo(e, t, n) {
  var f, d, m, h, v, g, b, y;
  const r = Uo(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? yr, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((y = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = Me(e, n == null ? void 0 : n.in);
  if (!gO(s))
    throw new RangeError("Invalid time value");
  let l = t.match(pA).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const S = oA[x];
      return S(w, o.formatLong);
    }
    return w;
  }).join("").match(fA).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: vA(w) };
    if (Fm[x])
      return { isToken: !0, value: w };
    if (x.match(gA))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && cA(x) || !(n != null && n.useAdditionalDayOfYearTokens) && lA(x)) && uA(x, t, String(e));
    const S = Fm[x[0]];
    return S(s, x, o.localize, c);
  }).join("");
}
function vA(e) {
  const t = e.match(mA);
  return t ? t[1].replace(hA, "'") : e;
}
function bA(e, t) {
  const n = Me(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Xe(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function yA(e, t) {
  return Me(e, t == null ? void 0 : t.in).getMonth();
}
function wA(e, t) {
  return Me(e, t == null ? void 0 : t.in).getFullYear();
}
function xA(e, t) {
  return +Me(e) > +Me(t);
}
function SA(e, t) {
  return +Me(e) < +Me(t);
}
function CA(e, t, n) {
  const [r, o] = Hr(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function _A(e, t, n) {
  const [r, o] = Hr(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function EA(e, t, n) {
  const r = Me(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), i = Xe(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = bA(i);
  return r.setMonth(t, Math.min(a, s)), r;
}
function PA(e, t, n) {
  const r = Me(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Xe(e, NaN) : (r.setFullYear(t), r);
}
const jm = 5, RA = 4;
function NA(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, jm * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? jm : RA;
}
function Xw(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function TA(e, t) {
  const n = Xw(e, t), r = NA(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Zw = {
  ...yr,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => lo(i, s, { locale: yr, ...n });
      let a = o(e, "PPPP");
      return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => lo(o, a, { locale: yr, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => lo(i, s, { locale: yr, ...n });
      let a = o(e, "PPPP");
      return t != null && t.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => lo(o, a, { locale: yr, ...t }), r(e, "cccc");
    }
  }
};
class wt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? nt.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new nt(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : zw(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Ww(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : dO(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : fO(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Cf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Hw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : bO(r);
    }, this.eachYearOfInterval = (r) => {
      var s;
      const o = (s = this.overrides) != null && s.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : xO(r), a = new Set(o.map((l) => this.getYear(l)));
      if (a.size === o.length)
        return o;
      const i = [];
      return a.forEach((l) => {
        i.push(new Date(l, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : TA(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : SO(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : vO(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Uw(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : wO(r);
    }, this.format = (r, o, a) => {
      var s;
      const i = (s = this.overrides) != null && s.format ? this.overrides.format(r, o, this.options) : lo(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : _f(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : yA(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : wA(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : Ef(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : xA(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : SA(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Vw(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : hO(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : CA(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : _A(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : pO(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : mO(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : EA(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : PA(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Xw(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : wo(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : yo(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : yO(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Mr(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Gw(r);
    }, this.options = { locale: Zw, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    var n;
    const t = (n = this.options.locale) == null ? void 0 : n.code;
    return t && wt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && wt.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
wt.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const rn = new wt();
class Qw {
  constructor(t, n, r = rn) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class MA {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class OA {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function AA(e) {
  return P.createElement("button", { ...e });
}
function DA(e) {
  return P.createElement("span", { ...e });
}
function IA(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    P.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && P.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && P.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && P.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && P.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function kA(e) {
  const { day: t, modifiers: n, ...r } = e;
  return P.createElement("td", { ...r });
}
function $A(e) {
  const { day: t, modifiers: n, ...r } = e, o = P.useRef(null);
  return P.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), P.createElement("button", { ref: o, ...r });
}
var fe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(fe || (fe = {}));
var We;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(We || (We = {}));
var $t;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})($t || ($t = {}));
var pt;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(pt || (pt = {}));
function LA(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, i = [o[fe.Dropdown], n].join(" "), s = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return P.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[fe.DropdownRoot] },
    P.createElement(r.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: l, label: c, disabled: f }) => P.createElement(r.Option, { key: l, value: l, disabled: f }, c))),
    P.createElement(
      "span",
      { className: o[fe.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      P.createElement(r.Chevron, { orientation: "down", size: 18, className: o[fe.Chevron] })
    )
  );
}
function FA(e) {
  return P.createElement("div", { ...e });
}
function BA(e) {
  return P.createElement("div", { ...e });
}
function zA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r }, e.children);
}
function WA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r });
}
function jA(e) {
  return P.createElement("table", { ...e });
}
function VA(e) {
  return P.createElement("div", { ...e });
}
const Jw = dy(void 0);
function Yo() {
  const e = af(Jw);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function HA(e) {
  const { components: t } = Yo();
  return P.createElement(t.Dropdown, { ...e });
}
function qA(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: l, labelNext: c } } = Yo(), f = Te((m) => {
    o && (n == null || n(m));
  }, [o, n]), d = Te((m) => {
    r && (t == null || t(m));
  }, [r, t]);
  return P.createElement(
    "nav",
    { ...a },
    P.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[fe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: d },
      P.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[fe.Chevron], orientation: "left" })
    ),
    P.createElement(
      i.NextMonthButton,
      { type: "button", className: s[fe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": c(o), onClick: f },
      P.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[fe.Chevron] })
    )
  );
}
function GA(e) {
  const { components: t } = Yo();
  return P.createElement(t.Button, { ...e });
}
function UA(e) {
  return P.createElement("option", { ...e });
}
function YA(e) {
  const { components: t } = Yo();
  return P.createElement(t.Button, { ...e });
}
function KA(e) {
  const { rootRef: t, ...n } = e;
  return P.createElement("div", { ...n, ref: t });
}
function XA(e) {
  return P.createElement("select", { ...e });
}
function ZA(e) {
  const { week: t, ...n } = e;
  return P.createElement("tr", { ...n });
}
function QA(e) {
  return P.createElement("th", { ...e });
}
function JA(e) {
  return P.createElement(
    "thead",
    { "aria-hidden": !0 },
    P.createElement("tr", { ...e })
  );
}
function eD(e) {
  const { week: t, ...n } = e;
  return P.createElement("th", { ...n });
}
function tD(e) {
  return P.createElement("th", { ...e });
}
function nD(e) {
  return P.createElement("tbody", { ...e });
}
function rD(e) {
  const { components: t } = Yo();
  return P.createElement(t.Dropdown, { ...e });
}
const oD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: AA,
  CaptionLabel: DA,
  Chevron: IA,
  Day: kA,
  DayButton: $A,
  Dropdown: LA,
  DropdownNav: FA,
  Footer: BA,
  Month: zA,
  MonthCaption: WA,
  MonthGrid: jA,
  Months: VA,
  MonthsDropdown: HA,
  Nav: qA,
  NextMonthButton: GA,
  Option: UA,
  PreviousMonthButton: YA,
  Root: KA,
  Select: XA,
  Week: ZA,
  WeekNumber: eD,
  WeekNumberHeader: tD,
  Weekday: QA,
  Weekdays: JA,
  Weeks: nD,
  YearsDropdown: rD
}, Symbol.toStringTag, { value: "Module" }));
function hn(e, t, n = !1, r = rn) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (n ? 1 : 0) && i(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && o ? s(o, t) : !1;
}
function Pf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Ai(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Rf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Nf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function ex(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function tx(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function gn(e, t, n = rn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return o(e, s);
    if (tx(s, n))
      return s.some((l) => o(e, l));
    if (Ai(s))
      return hn(s, e, !1, n);
    if (ex(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (Pf(s)) {
      const l = a(s.before, e), c = a(s.after, e), f = l > 0, d = c < 0;
      return i(s.before, s.after) ? d && f : f || d;
    }
    return Rf(s) ? a(e, s.after) > 0 : Nf(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function aD(e, t, n, r, o) {
  const { disabled: a, hidden: i, modifiers: s, showOutsideDays: l, broadcastCalendar: c, today: f = o.today() } = t, { isSameDay: d, isSameMonth: m, startOfMonth: h, isBefore: v, endOfMonth: g, isAfter: b } = o, y = n && h(n), w = r && g(r), x = {
    [We.focused]: [],
    [We.outside]: [],
    [We.disabled]: [],
    [We.hidden]: [],
    [We.today]: []
  }, S = {};
  for (const E of e) {
    const { date: C, displayMonth: _ } = E, T = !!(_ && !m(C, _)), N = !!(y && v(C, y)), D = !!(w && b(C, w)), O = !!(a && gn(C, a, o)), k = !!(i && gn(C, i, o)) || N || D || // Broadcast calendar will show outside days as default
    !c && !l && T || c && l === !1 && T, M = d(C, f);
    T && x.outside.push(E), O && x.disabled.push(E), k && x.hidden.push(E), M && x.today.push(E), s && Object.keys(s).forEach((B) => {
      const H = s == null ? void 0 : s[B];
      H && gn(C, H, o) && (S[B] ? S[B].push(E) : S[B] = [E]);
    });
  }
  return (E) => {
    const C = {
      [We.focused]: !1,
      [We.disabled]: !1,
      [We.hidden]: !1,
      [We.outside]: !1,
      [We.today]: !1
    }, _ = {};
    for (const T in x) {
      const N = x[T];
      C[T] = N.some((D) => D === E);
    }
    for (const T in S)
      _[T] = S[T].some((N) => N === E);
    return {
      ...C,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function iD(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[We[a]] ? o.push(t[We[a]]) : t[$t[a]] && o.push(t[$t[a]]), o), [t[fe.Day]]);
}
function sD(e) {
  return {
    ...oD,
    ...e
  };
}
function lD(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Tf() {
  const e = {};
  for (const t in fe)
    e[fe[t]] = `rdp-${fe[t]}`;
  for (const t in We)
    e[We[t]] = `rdp-${We[t]}`;
  for (const t in $t)
    e[$t[t]] = `rdp-${$t[t]}`;
  for (const t in pt)
    e[pt[t]] = `rdp-${pt[t]}`;
  return e;
}
function nx(e, t, n) {
  return (n ?? new wt(t)).formatMonthYear(e);
}
const cD = nx;
function uD(e, t, n) {
  return (n ?? new wt(t)).format(e, "d");
}
function dD(e, t = rn) {
  return t.format(e, "LLLL");
}
function fD(e, t, n) {
  return (n ?? new wt(t)).format(e, "cccccc");
}
function pD(e, t = rn) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function mD() {
  return "";
}
function rx(e, t = rn) {
  return t.format(e, "yyyy");
}
const hD = rx, gD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: nx,
  formatDay: uD,
  formatMonthCaption: cD,
  formatMonthDropdown: dD,
  formatWeekNumber: pD,
  formatWeekNumberHeader: mD,
  formatWeekdayName: fD,
  formatYearCaption: hD,
  formatYearDropdown: rx
}, Symbol.toStringTag, { value: "Module" }));
function vD(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...gD,
    ...e
  };
}
function Mf(e, t, n, r) {
  let o = (r ?? new wt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const bD = Mf;
function Of(e, t, n) {
  return (n ?? new wt(t)).formatMonthYear(e);
}
const yD = Of;
function ox(e, t, n, r) {
  let o = (r ?? new wt(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function ax(e) {
  return "Choose the Month";
}
function ix() {
  return "";
}
const wD = "Go to the Next Month";
function sx(e, t) {
  return wD;
}
function lx(e) {
  return "Go to the Previous Month";
}
function cx(e, t, n) {
  return (n ?? new wt(t)).format(e, "cccc");
}
function ux(e, t) {
  return `Week ${e}`;
}
function dx(e) {
  return "Week Number";
}
function fx(e) {
  return "Choose the Year";
}
const xD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: yD,
  labelDay: bD,
  labelDayButton: Mf,
  labelGrid: Of,
  labelGridcell: ox,
  labelMonthDropdown: ax,
  labelNav: ix,
  labelNext: sx,
  labelPrevious: lx,
  labelWeekNumber: ux,
  labelWeekNumberHeader: dx,
  labelWeekday: cx,
  labelYearDropdown: fx
}, Symbol.toStringTag, { value: "Module" })), Dt = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function SD(e, t) {
  var r;
  const n = ((r = t.locale) == null ? void 0 : r.labels) ?? {};
  return {
    ...xD,
    ...e ?? {},
    labelDayButton: Dt(Mf, e == null ? void 0 : e.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Dt(ax, e == null ? void 0 : e.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Dt(sx, e == null ? void 0 : e.labelNext, n.labelNext),
    labelPrevious: Dt(lx, e == null ? void 0 : e.labelPrevious, n.labelPrevious),
    labelWeekNumber: Dt(ux, e == null ? void 0 : e.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Dt(fx, e == null ? void 0 : e.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Dt(Of, e == null ? void 0 : e.labelGrid, n.labelGrid),
    labelGridcell: Dt(ox, e == null ? void 0 : e.labelGridcell, n.labelGridcell),
    labelNav: Dt(ix, e == null ? void 0 : e.labelNav, n.labelNav),
    labelWeekNumberHeader: Dt(dx, e == null ? void 0 : e.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Dt(cx, e == null ? void 0 : e.labelWeekday, n.labelWeekday)
  };
}
function CD(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: l, getMonth: c } = o;
  return l({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const h = r.formatMonthDropdown(m, o), v = c(m), g = t && m < a(t) || n && m > a(n) || !1;
    return { value: v, label: h, disabled: g };
  });
}
function _D(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[fe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function ED(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let s = 0; s < 7; s++) {
    const l = e.addDays(a, s);
    i.push(l);
  }
  return i;
}
function PD(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: i, eachYearOfInterval: s, getYear: l } = r, c = a(e), f = i(t), d = s({ start: c, end: f });
  return o && d.reverse(), d.map((m) => {
    const h = n.formatYearDropdown(m, r);
    return {
      value: l(m),
      label: h,
      disabled: !1
    };
  });
}
function RD(e, t = {}) {
  var s;
  const { weekStartsOn: n, locale: r } = t, o = n ?? ((s = r == null ? void 0 : r.options) == null ? void 0 : s.weekStartsOn) ?? 0, a = (l) => {
    const c = typeof l == "number" || typeof l == "string" ? new Date(l) : l;
    return new nt(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, i = (l) => {
    const c = a(l);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(nt.tz(e)),
    newDate: (l, c, f) => new nt(l, c, f, 12, 0, 0, e),
    startOfDay: (l) => a(l),
    startOfWeek: (l, c) => {
      const f = a(l), d = (c == null ? void 0 : c.weekStartsOn) ?? o, m = (f.getDay() - d + 7) % 7;
      return f.setDate(f.getDate() - m), f;
    },
    startOfISOWeek: (l) => {
      const c = a(l), f = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - f), c;
    },
    startOfMonth: (l) => {
      const c = a(l);
      return c.setDate(1), c;
    },
    startOfYear: (l) => {
      const c = a(l);
      return c.setMonth(0, 1), c;
    },
    endOfWeek: (l, c) => {
      const f = a(l), h = ((((c == null ? void 0 : c.weekStartsOn) ?? o) + 6) % 7 - f.getDay() + 7) % 7;
      return f.setDate(f.getDate() + h), f;
    },
    endOfISOWeek: (l) => {
      const c = a(l), f = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + f), c;
    },
    endOfMonth: (l) => {
      const c = a(l);
      return c.setMonth(c.getMonth() + 1, 0), c;
    },
    endOfYear: (l) => {
      const c = a(l);
      return c.setMonth(11, 31), c;
    },
    eachMonthOfInterval: (l) => {
      const c = a(l.start), f = a(l.end), d = [], m = new nt(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), h = f.getFullYear() * 12 + f.getMonth();
      for (; m.getFullYear() * 12 + m.getMonth() <= h; )
        d.push(new nt(m, e)), m.setMonth(m.getMonth() + 1, 1);
      return d;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (l, c) => {
      const f = a(l);
      return f.setDate(f.getDate() + c), f;
    },
    addWeeks: (l, c) => {
      const f = a(l);
      return f.setDate(f.getDate() + c * 7), f;
    },
    addMonths: (l, c) => {
      const f = a(l);
      return f.setMonth(f.getMonth() + c), f;
    },
    addYears: (l, c) => {
      const f = a(l);
      return f.setFullYear(f.getFullYear() + c), f;
    },
    eachYearOfInterval: (l) => {
      const c = a(l.start), f = a(l.end), d = [], m = new nt(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; m.getFullYear() <= f.getFullYear(); )
        d.push(new nt(m, e)), m.setFullYear(m.getFullYear() + 1, 0, 1);
      return d;
    },
    getWeek: (l, c) => {
      var d;
      const f = i(l);
      return Ef(f, {
        weekStartsOn: (c == null ? void 0 : c.weekStartsOn) ?? o,
        firstWeekContainsDate: (c == null ? void 0 : c.firstWeekContainsDate) ?? ((d = r == null ? void 0 : r.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
      });
    },
    getISOWeek: (l) => {
      const c = i(l);
      return _f(c);
    },
    differenceInCalendarDays: (l, c) => {
      const f = i(l), d = i(c);
      return Cf(f, d);
    },
    differenceInCalendarMonths: (l, c) => {
      const f = i(l), d = i(c);
      return Hw(f, d);
    }
  };
}
const Ko = (e) => e instanceof HTMLElement ? e : null, Ls = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], ND = (e) => Ko(e.querySelector("[data-animated-month]")), Fs = (e) => Ko(e.querySelector("[data-animated-caption]")), Bs = (e) => Ko(e.querySelector("[data-animated-weeks]")), TD = (e) => Ko(e.querySelector("[data-animated-nav]")), MD = (e) => Ko(e.querySelector("[data-animated-weekdays]"));
function OD(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const i = Ve(null), s = Ve(r), l = Ve(!1);
  yi(() => {
    const c = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || c.length === 0 || r.length !== c.length)
      return;
    const f = a.isSameMonth(r[0].date, c[0].date), d = a.isAfter(r[0].date, c[0].date), m = d ? n[pt.caption_after_enter] : n[pt.caption_before_enter], h = d ? n[pt.weeks_after_enter] : n[pt.weeks_before_enter], v = i.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Ls(g).forEach((x) => {
      if (!(x instanceof HTMLElement))
        return;
      const S = ND(x);
      S && x.contains(S) && x.removeChild(S);
      const E = Fs(x);
      E && E.classList.remove(m);
      const C = Bs(x);
      C && C.classList.remove(h);
    }), i.current = g) : i.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = v instanceof HTMLElement ? Ls(v) : [], y = Ls(e.current);
    if (y != null && y.every((w) => w instanceof HTMLElement) && b && b.every((w) => w instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const w = TD(e.current);
      w && (w.style.zIndex = "1"), y.forEach((x, S) => {
        const E = b[S];
        if (!E)
          return;
        x.style.position = "relative", x.style.overflow = "hidden";
        const C = Fs(x);
        C && C.classList.add(m);
        const _ = Bs(x);
        _ && _.classList.add(h);
        const T = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), w && (w.style.zIndex = ""), C && C.classList.remove(m), _ && _.classList.remove(h), x.style.position = "", x.style.overflow = "", x.contains(E) && x.removeChild(E);
        };
        E.style.pointerEvents = "none", E.style.position = "absolute", E.style.overflow = "hidden", E.setAttribute("aria-hidden", "true");
        const N = MD(E);
        N && (N.style.opacity = "0");
        const D = Fs(E);
        D && (D.classList.add(d ? n[pt.caption_before_exit] : n[pt.caption_after_exit]), D.addEventListener("animationend", T));
        const O = Bs(E);
        O && O.classList.add(d ? n[pt.weeks_before_exit] : n[pt.weeks_after_exit]), x.insertBefore(E, x.firstChild);
      });
    }
  });
}
function AD(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: l } = n ?? {}, { addDays: c, differenceInCalendarDays: f, differenceInCalendarMonths: d, endOfBroadcastWeek: m, endOfISOWeek: h, endOfMonth: v, endOfWeek: g, isAfter: b, startOfBroadcastWeek: y, startOfISOWeek: w, startOfWeek: x } = r, S = l ? y(o, r) : i ? w(o) : x(o), E = l ? m(a) : i ? h(v(a)) : g(v(a)), C = t && (l ? m(t) : i ? h(t) : g(t)), _ = C && b(E, C) ? C : E, T = f(_, S), N = d(a, o) + 1, D = [];
  for (let M = 0; M <= T; M++) {
    const B = c(S, M);
    D.push(B);
  }
  const k = (l ? 35 : 42) * N;
  if (s && D.length < k) {
    const M = k - D.length;
    for (let B = 0; B < M; B++) {
      const H = c(D[D.length - 1], 1);
      D.push(H);
    }
  }
  return D;
}
function DD(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, i) => a.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function ID(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let i = 0; i < o; i++) {
    const s = r.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function Vm(e, t, n, r) {
  const { month: o, defaultMonth: a, today: i = r.today(), numberOfMonths: s = 1 } = e;
  let l = o || a || i;
  const { differenceInCalendarMonths: c, addMonths: f, startOfMonth: d } = r;
  if (n && c(n, l) < s - 1) {
    const m = -1 * (s - 1);
    l = f(n, m);
  }
  return t && c(l, t) < 0 && (l = t), d(l);
}
function kD(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: l, getISOWeek: c, getWeek: f, startOfBroadcastWeek: d, startOfISOWeek: m, startOfWeek: h } = r, v = e.reduce((g, b) => {
    const y = n.broadcastCalendar ? d(b, r) : n.ISOWeek ? m(b) : h(b), w = n.broadcastCalendar ? a(b) : n.ISOWeek ? i(s(b)) : l(s(b)), x = t.filter((_) => _ >= y && _ <= w), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && x.length < S) {
      const _ = t.filter((T) => {
        const N = S - x.length;
        return T > w && T <= o(w, N);
      });
      x.push(..._);
    }
    const E = x.reduce((_, T) => {
      const N = n.ISOWeek ? c(T) : f(T), D = _.find((k) => k.weekNumber === N), O = new Qw(T, b, r);
      return D ? D.days.push(O) : _.push(new OA(N, [O])), _;
    }, []), C = new MA(b, E);
    return g.push(C), g;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function $D(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: l, endOfYear: c, newDate: f, today: d } = t, { fromYear: m, toYear: h, fromMonth: v, toMonth: g } = e;
  !n && v && (n = v), !n && m && (n = t.newDate(m, 0, 1)), !r && g && (r = g), !r && h && (r = f(h, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : m ? n = f(m, 0, 1) : !n && b && (n = o(l(e.today ?? d(), -100))), r ? r = s(r) : h ? r = f(h, 11, 31) : !r && b && (r = c(e.today ?? d())), [
    n && a(n),
    r && a(r)
  ];
}
function LD(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, c = o ? a : 1, f = i(e);
  if (!t)
    return s(f, c);
  if (!(l(t, e) < a))
    return s(f, c);
}
function FD(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, c = o ? a ?? 1 : 1, f = i(e);
  if (!t)
    return s(f, -c);
  if (!(l(f, t) <= 0))
    return s(f, -c);
}
function BD(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Di(e, t) {
  const [n, r] = gt(e);
  return [t === void 0 ? n : t, r];
}
function zD(e, t) {
  var S;
  const [n, r] = $D(e, t), { startOfMonth: o, endOfMonth: a } = t, i = Vm(e, n, r, t), [s, l] = Di(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  vt(() => {
    const E = Vm(e, n, r, t);
    l(E);
  }, [e.timeZone]);
  const { months: c, weeks: f, days: d, previousMonth: m, nextMonth: h } = Mn(() => {
    const E = ID(s, r, { numberOfMonths: e.numberOfMonths }, t), C = AD(E, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), _ = kD(E, C, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), T = BD(_), N = DD(_), D = FD(s, n, e, t), O = LD(s, r, e, t);
    return {
      months: _,
      weeks: T,
      days: N,
      previousMonth: D,
      nextMonth: O
    };
  }, [
    t,
    s.getTime(),
    r == null ? void 0 : r.getTime(),
    n == null ? void 0 : n.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    (S = e.endMonth) == null ? void 0 : S.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: v, onMonthChange: g } = e, b = (E) => f.some((C) => C.days.some((_) => _.isEqualTo(E))), y = (E) => {
    if (v)
      return;
    let C = o(E);
    n && C < o(n) && (C = o(n)), r && C > o(r) && (C = o(r)), l(C), g == null || g(C);
  };
  return {
    months: c,
    weeks: f,
    days: d,
    navStart: n,
    navEnd: r,
    previousMonth: m,
    nextMonth: h,
    goToMonth: y,
    goToDay: (E) => {
      b(E) || y(E.date);
    }
  };
}
var Xt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Xt || (Xt = {}));
function Hm(e) {
  return !e[We.disabled] && !e[We.hidden] && !e[We.outside];
}
function WD(e, t, n, r) {
  let o, a = -1;
  for (const i of e) {
    const s = t(i);
    Hm(s) && (s[We.focused] && a < Xt.FocusedModifier ? (o = i, a = Xt.FocusedModifier) : r != null && r.isEqualTo(i) && a < Xt.LastFocused ? (o = i, a = Xt.LastFocused) : n(i.date) && a < Xt.Selected ? (o = i, a = Xt.Selected) : s[We.today] && a < Xt.Today && (o = i, a = Xt.Today));
  }
  return o || (o = e.find((i) => Hm(t(i)))), o;
}
function jD(e, t, n, r, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: l } = a, { addDays: c, addMonths: f, addWeeks: d, addYears: m, endOfBroadcastWeek: h, endOfISOWeek: v, endOfWeek: g, max: b, min: y, startOfBroadcastWeek: w, startOfISOWeek: x, startOfWeek: S } = i;
  let C = {
    day: c,
    week: d,
    month: f,
    year: m,
    startOfWeek: (_) => l ? w(_, i) : s ? x(_) : S(_),
    endOfWeek: (_) => l ? h(_) : s ? v(_) : g(_)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? C = b([r, C]) : t === "after" && o && (C = y([o, C])), C;
}
function px(e, t, n, r, o, a, i, s = 0) {
  if (s > 365)
    return;
  const l = jD(e, t, n.date, r, o, a, i), c = !!(a.disabled && gn(l, a.disabled, i)), f = !!(a.hidden && gn(l, a.hidden, i)), d = l, m = new Qw(l, d, i);
  return !c && !f ? m : px(e, t, m, r, o, a, i, s + 1);
}
function VD(e, t, n, r, o) {
  const { autoFocus: a } = e, [i, s] = gt(), l = WD(t.days, n, r || (() => !1), i), [c, f] = gt(a ? l : void 0);
  return {
    isFocusTarget: (g) => !!(l != null && l.isEqualTo(g)),
    setFocused: f,
    focused: c,
    blur: () => {
      s(c), f(void 0);
    },
    moveFocus: (g, b) => {
      if (!c)
        return;
      const y = px(g, b, c, t.navStart, t.navEnd, e, o);
      y && (e.disableNavigation && !t.days.some((x) => x.isEqualTo(y)) || (t.goToDay(y), f(y)));
    }
  };
}
function HD(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = Di(n, o ? n : void 0), s = o ? n : a, { isSameDay: l } = t, c = (h) => (s == null ? void 0 : s.some((v) => l(v, h))) ?? !1, { min: f, max: d } = e;
  return {
    selected: s,
    select: (h, v, g) => {
      let b = [...s ?? []];
      if (c(h)) {
        if ((s == null ? void 0 : s.length) === f || r && (s == null ? void 0 : s.length) === 1)
          return;
        b = s == null ? void 0 : s.filter((y) => !l(y, h));
      } else
        (s == null ? void 0 : s.length) === d ? b = [h] : b = [...b, h];
      return o || i(b), o == null || o(b, h, v, g), b;
    },
    isSelected: c
  };
}
function qD(e, t, n = 0, r = 0, o = !1, a = rn) {
  const { from: i, to: s } = t || {}, { isSameDay: l, isAfter: c, isBefore: f } = a;
  let d;
  if (!i && !s)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !s)
    l(i, e) ? n === 0 ? d = { from: i, to: e } : o ? d = { from: i, to: void 0 } : d = void 0 : f(e, i) ? d = { from: e, to: i } : d = { from: i, to: e };
  else if (i && s)
    if (l(i, e) && l(s, e))
      o ? d = { from: i, to: s } : d = void 0;
    else if (l(i, e))
      d = { from: i, to: n > 0 ? void 0 : e };
    else if (l(s, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, i))
      d = { from: e, to: s };
    else if (c(e, i))
      d = { from: i, to: e };
    else if (c(e, s))
      d = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const m = a.differenceInCalendarDays(d.to, d.from);
    r > 0 && m > r ? d = { from: e, to: void 0 } : n > 1 && m < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function GD(e, t, n = rn) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function qm(e, t, n = rn) {
  return hn(e, t.from, !1, n) || hn(e, t.to, !1, n) || hn(t, e.from, !1, n) || hn(t, e.to, !1, n);
}
function UD(e, t, n = rn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? hn(e, s, !1, n) : tx(s, n) ? s.some((l) => hn(e, l, !1, n)) : Ai(s) ? s.from && s.to ? qm(e, { from: s.from, to: s.to }, n) : !1 : ex(s) ? GD(e, s.dayOfWeek, n) : Pf(s) ? n.isAfter(s.before, s.after) ? qm(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : gn(e.from, s, n) || gn(e.to, s, n) : Rf(s) || Nf(s) ? gn(e.from, s, n) || gn(e.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let c = 0; c <= l; c++) {
      if (i.some((f) => f(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function YD(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: i } = e, [s, l] = Di(o, i ? o : void 0), c = i ? o : s;
  return {
    selected: c,
    select: (m, h, v) => {
      const { min: g, max: b } = e, y = m ? qD(m, c, g, b, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && UD({ from: y.from, to: y.to }, n, t) && (y.from = m, y.to = void 0), i || l(y), i == null || i(y, m, h, v), y;
    },
    isSelected: (m) => c && hn(c, m, !1, t)
  };
}
function KD(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = Di(n, o ? n : void 0), s = o ? n : a, { isSameDay: l } = t;
  return {
    selected: s,
    select: (d, m, h) => {
      let v = d;
      return !r && s && s && l(d, s) && (v = void 0), o || i(v), o == null || o(v, d, m, h), v;
    },
    isSelected: (d) => s ? l(s, d) : !1
  };
}
function XD(e, t) {
  const n = KD(e, t), r = HD(e, t), o = YD(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Rt(e, t) {
  return e instanceof nt && e.timeZone === t ? e : new nt(e, t);
}
function vr(e, t, n) {
  return Rt(e, t);
}
function Gm(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? vr(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? vr(r, t) : r) : Ai(e) ? {
    ...e,
    from: e.from ? Rt(e.from, t) : e.from,
    to: e.to ? Rt(e.to, t) : e.to
  } : Pf(e) ? {
    before: vr(e.before, t),
    after: vr(e.after, t)
  } : Rf(e) ? {
    after: vr(e.after, t)
  } : Nf(e) ? {
    before: vr(e.before, t)
  } : e;
}
function zs(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Gm(r, t)) : Gm(e, t));
}
function ZD(e) {
  var le;
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Rt(t.today, n)), t.month && (t.month = Rt(t.month, n)), t.defaultMonth && (t.defaultMonth = Rt(t.defaultMonth, n)), t.startMonth && (t.startMonth = Rt(t.startMonth, n)), t.endMonth && (t.endMonth = Rt(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Rt(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = (le = t.selected) == null ? void 0 : le.map((re) => Rt(re, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Rt(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Rt(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = zs(t.disabled, n)), t.hidden !== void 0 && (t.hidden = zs(t.hidden, n)), t.modifiers)) {
    const re = {};
    Object.keys(t.modifiers).forEach((ce) => {
      var J;
      re[ce] = zs((J = t.modifiers) == null ? void 0 : J[ce], n);
    }), t.modifiers = re;
  }
  const { components: r, formatters: o, labels: a, dateLib: i, locale: s, classNames: l } = Mn(() => {
    const re = { ...Zw, ...t.locale }, ce = t.broadcastCalendar ? 1 : t.weekStartsOn, J = t.noonSafe && t.timeZone ? RD(t.timeZone, {
      weekStartsOn: ce,
      locale: re
    }) : void 0, de = t.dateLib && J ? { ...J, ...t.dateLib } : t.dateLib ?? J, ae = new wt({
      locale: re,
      weekStartsOn: ce,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, de);
    return {
      dateLib: ae,
      components: sD(t.components),
      formatters: vD(t.formatters),
      labels: SD(t.labels, ae.options),
      locale: re,
      classNames: { ...Tf(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: i.today() });
  const { captionLayout: c, mode: f, navLayout: d, numberOfMonths: m = 1, onDayBlur: h, onDayClick: v, onDayFocus: g, onDayKeyDown: b, onDayMouseEnter: y, onDayMouseLeave: w, onNextClick: x, onPrevClick: S, showWeekNumber: E, styles: C } = t, { formatCaption: _, formatDay: T, formatMonthDropdown: N, formatWeekNumber: D, formatWeekNumberHeader: O, formatWeekdayName: k, formatYearDropdown: M } = o, B = zD(t, i), { days: H, months: L, navStart: Y, navEnd: G, previousMonth: j, nextMonth: Q, goToMonth: Z } = B, z = aD(H, t, Y, G, i), { isSelected: I, select: W, selected: F } = XD(t, i) ?? {}, { blur: U, focused: $, isFocusTarget: V, moveFocus: X, setFocused: ee } = VD(t, B, z, I ?? (() => !1), i), { labelDayButton: te, labelGridcell: K, labelGrid: oe, labelMonthDropdown: A, labelNav: ne, labelPrevious: me, labelNext: he, labelWeekday: ge, labelWeekNumber: pe, labelWeekNumberHeader: xe, labelYearDropdown: Be } = a, we = Mn(() => ED(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), Pe = f !== void 0 || v !== void 0, qe = Te(() => {
    j && (Z(j), S == null || S(j));
  }, [j, Z, S]), Ge = Te(() => {
    Q && (Z(Q), x == null || x(Q));
  }, [Z, Q, x]), Ze = Te((re, ce) => (J) => {
    J.preventDefault(), J.stopPropagation(), ee(re), !ce.disabled && (W == null || W(re.date, ce, J), v == null || v(re.date, ce, J));
  }, [W, v, ee]), tt = Te((re, ce) => (J) => {
    ee(re), g == null || g(re.date, ce, J);
  }, [g, ee]), st = Te((re, ce) => (J) => {
    U(), h == null || h(re.date, ce, J);
  }, [U, h]), lt = Te((re, ce) => (J) => {
    const de = {
      ArrowLeft: [
        J.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        J.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [J.shiftKey ? "year" : "week", "after"],
      ArrowUp: [J.shiftKey ? "year" : "week", "before"],
      PageUp: [J.shiftKey ? "year" : "month", "before"],
      PageDown: [J.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (de[J.key]) {
      J.preventDefault(), J.stopPropagation();
      const [ae, ie] = de[J.key];
      X(ae, ie);
    }
    b == null || b(re.date, ce, J);
  }, [X, b, t.dir]), Ue = Te((re, ce) => (J) => {
    y == null || y(re.date, ce, J);
  }, [y]), Ct = Te((re, ce) => (J) => {
    w == null || w(re.date, ce, J);
  }, [w]), Ye = Te((re) => (ce) => {
    const J = Number(ce.target.value), de = i.setMonth(i.startOfMonth(re), J);
    Z(de);
  }, [i, Z]), Qe = Te((re) => (ce) => {
    const J = Number(ce.target.value), de = i.setYear(i.startOfMonth(re), J);
    Z(de);
  }, [i, Z]), { className: Ot, style: Yt } = Mn(() => ({
    className: [l[fe.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[fe.Root], ...t.style }
  }), [l, t.className, t.style, C]), Sn = lD(t), Cn = Ve(null);
  OD(Cn, !!t.animate, {
    classNames: l,
    months: L,
    focused: $,
    dateLib: i
  });
  const un = {
    dayPickerProps: t,
    selected: F,
    select: W,
    isSelected: I,
    months: L,
    nextMonth: Q,
    previousMonth: j,
    goToMonth: Z,
    getModifiers: z,
    components: r,
    classNames: l,
    styles: C,
    labels: a,
    formatters: o
  };
  return P.createElement(
    Jw.Provider,
    { value: un },
    P.createElement(
      r.Root,
      { rootRef: t.animate ? Cn : void 0, className: Ot, style: Yt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Sn },
      P.createElement(
        r.Months,
        { className: l[fe.Months], style: C == null ? void 0 : C[fe.Months] },
        !t.hideNavigation && !d && P.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[fe.Nav], style: C == null ? void 0 : C[fe.Nav], "aria-label": ne(), onPreviousClick: qe, onNextClick: Ge, previousMonth: j, nextMonth: Q }),
        L.map((re, ce) => P.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[fe.Month],
            style: C == null ? void 0 : C[fe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ce,
            displayIndex: ce,
            calendarMonth: re
          },
          d === "around" && !t.hideNavigation && ce === 0 && P.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[fe.PreviousMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": me(j), onClick: qe, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(r.Chevron, { disabled: j ? void 0 : !0, className: l[fe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          P.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[fe.MonthCaption], style: C == null ? void 0 : C[fe.MonthCaption], calendarMonth: re, displayIndex: ce }, c != null && c.startsWith("dropdown") ? P.createElement(
            r.DropdownNav,
            { className: l[fe.Dropdowns], style: C == null ? void 0 : C[fe.Dropdowns] },
            (() => {
              const J = c === "dropdown" || c === "dropdown-months" ? P.createElement(r.MonthsDropdown, { key: "month", className: l[fe.MonthsDropdown], "aria-label": A(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Ye(re.date), options: CD(re.date, Y, G, o, i), style: C == null ? void 0 : C[fe.Dropdown], value: i.getMonth(re.date) }) : P.createElement("span", { key: "month" }, N(re.date, i)), de = c === "dropdown" || c === "dropdown-years" ? P.createElement(r.YearsDropdown, { key: "year", className: l[fe.YearsDropdown], "aria-label": Be(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Qe(re.date), options: PD(Y, G, o, i, !!t.reverseYears), style: C == null ? void 0 : C[fe.Dropdown], value: i.getYear(re.date) }) : P.createElement("span", { key: "year" }, M(re.date, i));
              return i.getMonthYearOrder() === "year-first" ? [de, J] : [J, de];
            })(),
            P.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, _(re.date, i.options, i))
          ) : P.createElement(r.CaptionLabel, { className: l[fe.CaptionLabel], role: "status", "aria-live": "polite" }, _(re.date, i.options, i))),
          d === "around" && !t.hideNavigation && ce === m - 1 && P.createElement(
            r.NextMonthButton,
            { type: "button", className: l[fe.NextMonthButton], tabIndex: Q ? void 0 : -1, "aria-disabled": Q ? void 0 : !0, "aria-label": he(Q), onClick: Ge, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(r.Chevron, { disabled: Q ? void 0 : !0, className: l[fe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === m - 1 && d === "after" && !t.hideNavigation && P.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[fe.Nav], style: C == null ? void 0 : C[fe.Nav], "aria-label": ne(), onPreviousClick: qe, onNextClick: Ge, previousMonth: j, nextMonth: Q }),
          P.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": f === "multiple" || f === "range", "aria-label": oe(re.date, i.options, i) || void 0, className: l[fe.MonthGrid], style: C == null ? void 0 : C[fe.MonthGrid] },
            !t.hideWeekdays && P.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[fe.Weekdays], style: C == null ? void 0 : C[fe.Weekdays] },
              E && P.createElement(r.WeekNumberHeader, { "aria-label": xe(i.options), className: l[fe.WeekNumberHeader], style: C == null ? void 0 : C[fe.WeekNumberHeader], scope: "col" }, O()),
              we.map((J) => P.createElement(r.Weekday, { "aria-label": ge(J, i.options, i), className: l[fe.Weekday], key: String(J), style: C == null ? void 0 : C[fe.Weekday], scope: "col" }, k(J, i.options, i)))
            ),
            P.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[fe.Weeks], style: C == null ? void 0 : C[fe.Weeks] }, re.weeks.map((J) => P.createElement(
              r.Week,
              { className: l[fe.Week], key: J.weekNumber, style: C == null ? void 0 : C[fe.Week], week: J },
              E && P.createElement(r.WeekNumber, { week: J, style: C == null ? void 0 : C[fe.WeekNumber], "aria-label": pe(J.weekNumber, {
                locale: s
              }), className: l[fe.WeekNumber], scope: "row", role: "rowheader" }, D(J.weekNumber, i)),
              J.days.map((de) => {
                const { date: ae } = de, ie = z(de);
                if (ie[We.focused] = !ie.hidden && !!($ != null && $.isEqualTo(de)), ie[$t.selected] = (I == null ? void 0 : I(ae)) || ie.selected, Ai(F)) {
                  const { from: Ce, to: Oe } = F;
                  ie[$t.range_start] = !!(Ce && Oe && i.isSameDay(ae, Ce)), ie[$t.range_end] = !!(Ce && Oe && i.isSameDay(ae, Oe)), ie[$t.range_middle] = hn(F, ae, !0, i);
                }
                const Se = _D(ie, C, t.modifiersStyles), Re = iD(ie, l, t.modifiersClassNames), ct = !Pe && !ie.hidden ? K(ae, ie, i.options, i) : void 0;
                return P.createElement(r.Day, { key: `${de.isoDate}_${de.displayMonthId}`, day: de, modifiers: ie, className: Re.join(" "), style: Se, role: "gridcell", "aria-selected": ie.selected || void 0, "aria-label": ct, "data-day": de.isoDate, "data-month": de.outside ? de.dateMonthId : void 0, "data-selected": ie.selected || void 0, "data-disabled": ie.disabled || void 0, "data-hidden": ie.hidden || void 0, "data-outside": de.outside || void 0, "data-focused": ie.focused || void 0, "data-today": ie.today || void 0 }, !ie.hidden && Pe ? P.createElement(r.DayButton, { className: l[fe.DayButton], style: C == null ? void 0 : C[fe.DayButton], type: "button", day: de, modifiers: ie, disabled: !ie.focused && ie.disabled || void 0, "aria-disabled": ie.focused && ie.disabled || void 0, tabIndex: V(de) ? 0 : -1, "aria-label": te(ae, ie, i.options, i), onClick: Ze(de, ie), onBlur: st(de, ie), onFocus: tt(de, ie), onKeyDown: lt(de, ie), onMouseEnter: Ue(de, ie), onMouseLeave: Ct(de, ie) }, T(ae, i.options, i)) : !ie.hidden && T(de.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && P.createElement(r.Footer, { className: l[fe.Footer], style: C == null ? void 0 : C[fe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function tK({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: a,
  components: i,
  ...s
}) {
  const l = Tf();
  return /* @__PURE__ */ p(
    ZD,
    {
      showOutsideDays: n,
      className: R(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (c) => c.toLocaleString("default", { month: "short" }),
        ...a
      },
      classNames: {
        root: R("w-fit", l.root),
        months: R(
          "flex gap-4 flex-col md:flex-row relative",
          l.months
        ),
        month: R("flex flex-col w-full gap-4", l.month),
        nav: R(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          l.nav
        ),
        button_previous: R(
          Tr({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_previous
        ),
        button_next: R(
          Tr({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_next
        ),
        month_caption: R(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: R(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          l.dropdowns
        ),
        dropdown_root: R(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          l.dropdown_root
        ),
        dropdown: R(
          "absolute bg-popover inset-0 opacity-0",
          l.dropdown
        ),
        caption_label: R(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          l.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: R("flex", l.weekdays),
        weekday: R(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          l.weekday
        ),
        week: R("flex w-full mt-2", l.week),
        week_number_header: R(
          "select-none w-(--cell-size)",
          l.week_number_header
        ),
        week_number: R(
          "text-[0.8rem] select-none text-muted-foreground",
          l.week_number
        ),
        day: R(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          s.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          l.day
        ),
        range_start: R(
          "rounded-l-md bg-accent",
          l.range_start
        ),
        range_middle: R("rounded-none", l.range_middle),
        range_end: R("rounded-r-md bg-accent", l.range_end),
        today: R(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          l.today
        ),
        outside: R(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: R(
          "text-muted-foreground opacity-50",
          l.disabled
        ),
        hidden: R("invisible", l.hidden),
        ...t
      },
      components: {
        Root: ({ className: c, rootRef: f, ...d }) => /* @__PURE__ */ p(
          "div",
          {
            "data-slot": "calendar",
            ref: f,
            className: R(c),
            ...d
          }
        ),
        Chevron: ({ className: c, orientation: f, ...d }) => f === "left" ? /* @__PURE__ */ p(My, { className: R("size-4", c), ...d }) : f === "right" ? /* @__PURE__ */ p(
          jr,
          {
            className: R("size-4", c),
            ...d
          }
        ) : /* @__PURE__ */ p(Wr, { className: R("size-4", c), ...d }),
        DayButton: QD,
        WeekNumber: ({ children: c, ...f }) => /* @__PURE__ */ p("td", { ...f, children: /* @__PURE__ */ p("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: c }) }),
        ...i
      },
      ...s
    }
  );
}
function QD({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const o = Tf(), a = u.useRef(null);
  return u.useEffect(() => {
    var i;
    n.focused && ((i = a.current) == null || i.focus());
  }, [n.focused]), /* @__PURE__ */ p(
    Go,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: R(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        o.day,
        e
      ),
      ...r
    }
  );
}
function JD(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Um(e) {
  return JD(e) || Array.isArray(e);
}
function eI() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Af(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !Um(s) || !Um(l) ? s === l : Af(s, l);
  });
}
function Ym(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function tI(e, t) {
  if (e.length !== t.length) return !1;
  const n = Ym(e), r = Ym(t);
  return n.every((o, a) => {
    const i = r[a];
    return Af(o, i);
  });
}
function Df(e) {
  return typeof e == "number";
}
function pd(e) {
  return typeof e == "string";
}
function Ii(e) {
  return typeof e == "boolean";
}
function Km(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function je(e) {
  return Math.abs(e);
}
function If(e) {
  return Math.sign(e);
}
function bo(e, t) {
  return je(e - t);
}
function nI(e, t) {
  if (e === 0 || t === 0 || je(e) <= je(t)) return 0;
  const n = bo(je(e), je(t));
  return je(n / e);
}
function rI(e) {
  return Math.round(e * 100) / 100;
}
function xo(e) {
  return So(e).map(Number);
}
function Lt(e) {
  return e[Xo(e)];
}
function Xo(e) {
  return Math.max(0, e.length - 1);
}
function kf(e, t) {
  return t === Xo(e);
}
function Xm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function So(e) {
  return Object.keys(e);
}
function mx(e, t) {
  return [e, t].reduce((n, r) => (So(r).forEach((o) => {
    const a = n[o], i = r[o], s = Km(a) && Km(i);
    n[o] = s ? mx(a, i) : i;
  }), n), {});
}
function md(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function oI(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, c) {
    return pd(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function Co() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), l = () => o.removeEventListener(a, i, s);
    else {
      const c = o;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function aI(e, t, n, r) {
  const o = Co(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function f() {
    h(), o.clear();
  }
  function d(b) {
    if (!l) return;
    i || (i = b, n(), n());
    const y = b - i;
    for (i = b, s += y; s >= a; )
      n(), s -= a;
    const w = s / a;
    r(w), l && (l = t.requestAnimationFrame(d));
  }
  function m() {
    l || (l = t.requestAnimationFrame(d));
  }
  function h() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function v() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: f,
    start: m,
    stop: h,
    update: n,
    render: r
  };
}
function iI(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = f(), l = d();
  function c(v) {
    const {
      height: g,
      width: b
    } = v;
    return r ? g : b;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(v) {
    return v * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: m
  };
}
function Qn(e = 0, t = 0) {
  const n = je(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function a(c) {
    return r(c) || o(c);
  }
  function i(c) {
    return a(c) ? r(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function hx(e, t, n) {
  const {
    constrain: r
  } = Qn(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return n ? je((o + m) % o) : r(m);
  }
  function s() {
    return a;
  }
  function l(m) {
    return a = i(m), d;
  }
  function c(m) {
    return f().set(s() + m);
  }
  function f() {
    return hx(e, s(), n);
  }
  const d = {
    get: s,
    set: l,
    add: c,
    clone: f
  };
  return d;
}
function sI(e, t, n, r, o, a, i, s, l, c, f, d, m, h, v, g, b, y, w) {
  const {
    cross: x,
    direction: S
  } = e, E = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, _ = Co(), T = Co(), N = Qn(50, 225).constrain(h.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, O = {
    mouse: 500,
    touch: 600
  }, k = v ? 43 : 25;
  let M = !1, B = 0, H = 0, L = !1, Y = !1, G = !1, j = !1;
  function Q(K) {
    if (!w) return;
    function oe(ne) {
      (Ii(w) || w(K, ne)) && U(ne);
    }
    const A = t;
    _.add(A, "dragstart", (ne) => ne.preventDefault(), C).add(A, "touchmove", () => {
    }, C).add(A, "touchend", () => {
    }).add(A, "touchstart", oe).add(A, "mousedown", oe).add(A, "touchcancel", V).add(A, "contextmenu", V).add(A, "click", X, !0);
  }
  function Z() {
    _.clear(), T.clear();
  }
  function z() {
    const K = j ? n : t;
    T.add(K, "touchmove", $, C).add(K, "touchend", V).add(K, "mousemove", $, C).add(K, "mouseup", V);
  }
  function I(K) {
    const oe = K.nodeName || "";
    return E.includes(oe);
  }
  function W() {
    return (v ? O : D)[j ? "mouse" : "touch"];
  }
  function F(K, oe) {
    const A = d.add(If(K) * -1), ne = f.byDistance(K, !v).distance;
    return v || je(K) < N ? ne : b && oe ? ne * 0.5 : f.byIndex(A.get(), 0).distance;
  }
  function U(K) {
    const oe = md(K, r);
    j = oe, G = v && oe && !K.buttons && M, M = bo(o.get(), i.get()) >= 2, !(oe && K.button !== 0) && (I(K.target) || (L = !0, a.pointerDown(K), c.useFriction(0).useDuration(0), o.set(i), z(), B = a.readPoint(K), H = a.readPoint(K, x), m.emit("pointerDown")));
  }
  function $(K) {
    if (!md(K, r) && K.touches.length >= 2) return V(K);
    const A = a.readPoint(K), ne = a.readPoint(K, x), me = bo(A, B), he = bo(ne, H);
    if (!Y && !j && (!K.cancelable || (Y = me > he, !Y)))
      return V(K);
    const ge = a.pointerMove(K);
    me > g && (G = !0), c.useFriction(0.3).useDuration(0.75), s.start(), o.add(S(ge)), K.preventDefault();
  }
  function V(K) {
    const A = f.byDistance(0, !1).index !== d.get(), ne = a.pointerUp(K) * W(), me = F(S(ne), A), he = nI(ne, me), ge = k - 10 * he, pe = y + he / 50;
    Y = !1, L = !1, T.clear(), c.useDuration(ge).useFriction(pe), l.distance(me, !v), j = !1, m.emit("pointerUp");
  }
  function X(K) {
    G && (K.stopPropagation(), K.preventDefault(), G = !1);
  }
  function ee() {
    return L;
  }
  return {
    init: Q,
    destroy: Z,
    pointerDown: ee
  };
}
function lI(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function i(d, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (md(d, t) ? d : d.touches[0])[v];
  }
  function s(d) {
    return r = d, o = d, i(d);
  }
  function l(d) {
    const m = i(d) - i(o), h = a(d) - a(r) > 170;
    return o = d, h && (r = d), m;
  }
  function c(d) {
    if (!r || !o) return 0;
    const m = i(o) - i(r), h = a(d) - a(r), v = a(d) - a(o) > 170, g = m / h;
    return h && !v && je(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function cI() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function uI(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function dI(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let l, c, f = [], d = !1;
  function m(b) {
    return o.measureSize(i.measure(b));
  }
  function h(b) {
    if (!a) return;
    c = m(e), f = r.map(m);
    function y(w) {
      for (const x of w) {
        if (d) return;
        const S = x.target === e, E = r.indexOf(x.target), C = S ? c : f[E], _ = m(S ? e : r[E]);
        if (je(_ - C) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((w) => {
      (Ii(a) || a(b, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => l.observe(w));
    });
  }
  function v() {
    d = !0, l && l.disconnect();
  }
  return {
    init: h,
    destroy: v
  };
}
function fI(e, t, n, r, o, a) {
  let i = 0, s = 0, l = o, c = a, f = e.get(), d = 0;
  function m() {
    const C = r.get() - e.get(), _ = !l;
    let T = 0;
    return _ ? (i = 0, n.set(r), e.set(r), T = C) : (n.set(e), i += C / l, i *= c, f += i, e.add(i), T = f - d), s = If(T), d = f, E;
  }
  function h() {
    const C = r.get() - t.get();
    return je(C) < 1e-3;
  }
  function v() {
    return l;
  }
  function g() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return x(o);
  }
  function w() {
    return S(a);
  }
  function x(C) {
    return l = C, E;
  }
  function S(C) {
    return c = C, E;
  }
  const E = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: h,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: S,
    useDuration: x
  };
  return E;
}
function pI(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = Qn(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(h) {
    if (!c()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = je(e[v] - t.get()), b = n.get() - t.get(), y = s.constrain(g / i);
    n.subtract(b * y), !h && je(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(h) {
    l = !h;
  }
  return {
    shouldConstrain: c,
    constrain: f,
    toggleActive: d
  };
}
function mI(e, t, n, r, o) {
  const a = Qn(-t + e, 0), i = d(), s = f(), l = m();
  function c(v, g) {
    return bo(v, g) <= 1;
  }
  function f() {
    const v = i[0], g = Lt(i), b = i.lastIndexOf(v), y = i.indexOf(g) + 1;
    return Qn(b, y);
  }
  function d() {
    return n.map((v, g) => {
      const {
        min: b,
        max: y
      } = a, w = a.constrain(v), x = !g, S = kf(n, g);
      return x ? y : S || c(b, w) ? b : c(y, w) ? y : w;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: v,
      max: g
    } = s;
    return i.slice(v, g);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function hI(e, t, n) {
  const r = t[0], o = n ? r - e : Lt(t);
  return {
    limit: Qn(o, r)
  };
}
function gI(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = Qn(a, i);
  function c(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function f(m) {
    if (!c(m)) return;
    const h = e * (m * -1);
    r.forEach((v) => v.add(h));
  }
  return {
    loop: f
  };
}
function vI(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function bI(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, l = d().map(t.measure), c = m(), f = h();
  function d() {
    return s(r).map((g) => Lt(g)[i] - g[0][a]).map(je);
  }
  function m() {
    return r.map((g) => n[a] - g[a]).map((g) => -je(g));
  }
  function h() {
    return s(c).map((g) => g[0]).map((g, b) => g + l[b]);
  }
  return {
    snaps: c,
    snapsAligned: f
  };
}
function yI(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: l
  } = r, c = f();
  function f() {
    const m = i(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? m : m.slice(s, l).map((v, g, b) => {
      const y = !g, w = kf(b, g);
      if (y) {
        const x = Lt(b[0]) + 1;
        return Xm(x);
      }
      if (w) {
        const x = Xo(a) - Lt(b)[0] + 1;
        return Xm(x, Lt(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: c
  };
}
function wI(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function l(v) {
    return v.concat().sort((g, b) => je(g) - je(b))[0];
  }
  function c(v) {
    const g = e ? i(v) : s(v), b = t.map((w, x) => ({
      diff: f(w - g, 0),
      index: x
    })).sort((w, x) => je(w.diff) - je(x.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: g
    };
  }
  function f(v, g) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return l(b);
    const y = b.filter((w) => If(w) === g);
    return y.length ? l(y) : Lt(b) - n;
  }
  function d(v, g) {
    const b = t[v] - o.get(), y = f(b, g);
    return {
      index: v,
      distance: y
    };
  }
  function m(v, g) {
    const b = o.get() + v, {
      index: y,
      distance: w
    } = c(b), x = !e && a(b);
    if (!g || x) return {
      index: y,
      distance: v
    };
    const S = t[y] - w, E = v + f(S, 0);
    return {
      index: y,
      distance: E
    };
  }
  return {
    byDistance: m,
    byIndex: d,
    shortcut: f
  };
}
function xI(e, t, n, r, o, a, i) {
  function s(d) {
    const m = d.distance, h = d.index !== t.get();
    a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(d.index), i.emit("select"));
  }
  function l(d, m) {
    const h = o.byDistance(d, m);
    s(h);
  }
  function c(d, m) {
    const h = t.clone().set(d), v = o.byIndex(h.get(), m);
    s(v);
  }
  return {
    distance: l,
    index: c
  };
}
function SI(e, t, n, r, o, a, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function f(h) {
    if (!s) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((x) => x.includes(g));
      Df(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", d, !1), t.forEach((g, b) => {
      a.add(g, "focus", (y) => {
        (Ii(s) || s(h, y)) && v(b);
      }, l);
    });
  }
  function d(h) {
    h.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function co(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function o(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return Df(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function gx(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function l(m) {
    if (a) return;
    const h = rI(e.direction(m));
    h !== o && (r.transform = n(h), o = h);
  }
  function c(m) {
    a = !m;
  }
  function f() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: l,
    toggleActive: c
  };
}
function CI(e, t, n, r, o, a, i, s, l) {
  const f = xo(o), d = xo(o).reverse(), m = y().concat(w());
  function h(_, T) {
    return _.reduce((N, D) => N - o[D], T);
  }
  function v(_, T) {
    return _.reduce((N, D) => h(N, T) > 0 ? N.concat([D]) : N, []);
  }
  function g(_) {
    return a.map((T, N) => ({
      start: T - r[N] + 0.5 + _,
      end: T + t - 0.5 + _
    }));
  }
  function b(_, T, N) {
    const D = g(T);
    return _.map((O) => {
      const k = N ? 0 : -n, M = N ? n : 0, B = N ? "end" : "start", H = D[O][B];
      return {
        index: O,
        loopPoint: H,
        slideLocation: co(-1),
        translate: gx(e, l[O]),
        target: () => s.get() > H ? k : M
      };
    });
  }
  function y() {
    const _ = i[0], T = v(d, _);
    return b(T, n, !1);
  }
  function w() {
    const _ = t - i[0] - 1, T = v(f, _);
    return b(T, -n, !0);
  }
  function x() {
    return m.every(({
      index: _
    }) => {
      const T = f.filter((N) => N !== _);
      return h(T, t) <= 0.1;
    });
  }
  function S() {
    m.forEach((_) => {
      const {
        target: T,
        translate: N,
        slideLocation: D
      } = _, O = T();
      O !== D.get() && (N.to(O), D.set(O));
    });
  }
  function E() {
    m.forEach((_) => _.translate.clear());
  }
  return {
    canLoop: x,
    clear: E,
    loop: S,
    loopPoints: m
  };
}
function _I(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function c(f) {
      for (const d of f)
        if (d.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (Ii(n) || n(l, f)) && c(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function EI(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((v) => {
      l || (v.forEach((g) => {
        const b = t.indexOf(g.target);
        o[b] = g;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((v) => s.observe(v));
  }
  function f() {
    s && s.disconnect(), l = !0;
  }
  function d(v) {
    return So(o).reduce((g, b) => {
      const y = parseInt(b), {
        isIntersecting: w
      } = o[y];
      return (v && w || !v && !w) && g.push(y), g;
    }, []);
  }
  function m(v = !0) {
    if (v && a) return a;
    if (!v && i) return i;
    const g = d(v);
    return v && (a = g), v || (i = g), g;
  }
  return {
    init: c,
    destroy: f,
    get: m
  };
}
function PI(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && o, f = v(), d = g(), m = n.map(i), h = b();
  function v() {
    if (!c) return 0;
    const w = n[0];
    return je(t[s] - w[s]);
  }
  function g() {
    if (!c) return 0;
    const w = a.getComputedStyle(Lt(r));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function b() {
    return n.map((w, x, S) => {
      const E = !x, C = kf(S, x);
      return E ? m[x] + f : C ? m[x] + d : S[x + 1][s] - w[s];
    }).map(je);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: h,
    startGap: f,
    endGap: d
  };
}
function RI(e, t, n, r, o, a, i, s, l) {
  const {
    startEdge: c,
    endEdge: f,
    direction: d
  } = e, m = Df(n);
  function h(y, w) {
    return xo(y).filter((x) => x % w === 0).map((x) => y.slice(x, x + w));
  }
  function v(y) {
    return y.length ? xo(y).reduce((w, x, S) => {
      const E = Lt(w) || 0, C = E === 0, _ = x === Xo(y), T = o[c] - a[E][c], N = o[c] - a[x][f], D = !r && C ? d(i) : 0, O = !r && _ ? d(s) : 0, k = je(N - O - (T + D));
      return S && k > t + l && w.push(x), _ && w.push(y.length), w;
    }, []).map((w, x, S) => {
      const E = Math.max(S[x - 1] || 0);
      return y.slice(E, w);
    }) : [];
  }
  function g(y) {
    return m ? h(y, n) : v(y);
  }
  return {
    groupSlides: g
  };
}
function NI(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: f,
    loop: d,
    duration: m,
    dragFree: h,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: w,
    watchResize: x,
    watchSlides: S,
    watchDrag: E,
    watchFocus: C
  } = a, _ = 2, T = cI(), N = T.measure(t), D = n.map(T.measure), O = iI(l, c), k = O.measureSize(N), M = uI(k), B = oI(s, k), H = !d && !!w, L = d || !!w, {
    slideSizes: Y,
    slideSizesWithGaps: G,
    startGap: j,
    endGap: Q
  } = PI(O, N, D, n, L, o), Z = RI(O, k, b, d, N, D, j, Q, _), {
    snaps: z,
    snapsAligned: I
  } = bI(O, B, N, D, Z), W = -Lt(z) + Lt(G), {
    snapsContained: F,
    scrollContainLimit: U
  } = mI(k, W, I, w, _), $ = H ? F : I, {
    limit: V
  } = hI(W, $, d), X = hx(Xo($), f, d), ee = X.clone(), te = xo(n), K = ({
    dragHandler: Ue,
    scrollBody: Ct,
    scrollBounds: Ye,
    options: {
      loop: Qe
    }
  }) => {
    Qe || Ye.constrain(Ue.pointerDown()), Ct.seek();
  }, oe = ({
    scrollBody: Ue,
    translate: Ct,
    location: Ye,
    offsetLocation: Qe,
    previousLocation: Ot,
    scrollLooper: Yt,
    slideLooper: Sn,
    dragHandler: Cn,
    animation: un,
    eventHandler: le,
    scrollBounds: re,
    options: {
      loop: ce
    }
  }, J) => {
    const de = Ue.settled(), ae = !re.shouldConstrain(), ie = ce ? de : de && ae, Se = ie && !Cn.pointerDown();
    Se && un.stop();
    const Re = Ye.get() * J + Ot.get() * (1 - J);
    Qe.set(Re), ce && (Yt.loop(Ue.direction()), Sn.loop()), Ct.to(Qe.get()), Se && le.emit("settle"), ie || le.emit("scroll");
  }, A = aI(r, o, () => K(lt), (Ue) => oe(lt, Ue)), ne = 0.68, me = $[X.get()], he = co(me), ge = co(me), pe = co(me), xe = co(me), Be = fI(he, pe, ge, xe, m, ne), we = wI(d, $, W, V, xe), Pe = xI(A, X, ee, Be, we, xe, i), qe = vI(V), Ge = Co(), Ze = EI(t, n, i, g), {
    slideRegistry: tt
  } = yI(H, w, $, U, Z, te), st = SI(e, n, tt, Pe, Be, Ge, i, C), lt = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: N,
    slideRects: D,
    animation: A,
    axis: O,
    dragHandler: sI(O, e, r, o, xe, lI(O, o), he, A, Pe, Be, we, X, i, M, h, v, y, ne, E),
    eventStore: Ge,
    percentOfView: M,
    index: X,
    indexPrevious: ee,
    limit: V,
    location: he,
    offsetLocation: pe,
    previousLocation: ge,
    options: a,
    resizeHandler: dI(t, i, o, n, O, x, T),
    scrollBody: Be,
    scrollBounds: pI(V, pe, xe, Be, M),
    scrollLooper: gI(W, V, pe, [he, pe, ge, xe]),
    scrollProgress: qe,
    scrollSnapList: $.map(qe.get),
    scrollSnaps: $,
    scrollTarget: we,
    scrollTo: Pe,
    slideLooper: CI(O, k, W, Y, G, z, $, pe, n),
    slideFocus: st,
    slidesHandler: _I(t, i, S),
    slidesInView: Ze,
    slideIndexes: te,
    slideRegistry: tt,
    slidesToScroll: Z,
    target: xe,
    translate: gx(O, t)
  };
  return lt;
}
function TI() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((f) => f(t, c)), l;
  }
  function a(c, f) {
    return e[c] = r(c).concat([f]), l;
  }
  function i(c, f) {
    return e[c] = r(c).filter((d) => d !== f), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return l;
}
const MI = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function OI(e) {
  function t(a, i) {
    return mx(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = So(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => So(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function AI(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Ua(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = OI(o), i = AI(a), s = Co(), l = TI(), {
    mergeOptions: c,
    optionsAtMedia: f,
    optionsMediaQueries: d
  } = a, {
    on: m,
    off: h,
    emit: v
  } = l, g = O;
  let b = !1, y, w = c(MI, Ua.globalOptions), x = c(w), S = [], E, C, _;
  function T() {
    const {
      container: te,
      slides: K
    } = x;
    C = (pd(te) ? e.querySelector(te) : te) || e.children[0];
    const A = pd(K) ? C.querySelectorAll(K) : K;
    _ = [].slice.call(A || C.children);
  }
  function N(te) {
    const K = NI(e, C, _, r, o, te, l);
    if (te.loop && !K.slideLooper.canLoop()) {
      const oe = Object.assign({}, te, {
        loop: !1
      });
      return N(oe);
    }
    return K;
  }
  function D(te, K) {
    b || (w = c(w, te), x = f(w), S = K || S, T(), y = N(x), d([w, ...S.map(({
      options: oe
    }) => oe)]).forEach((oe) => s.add(oe, "change", O)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(ee), y.eventHandler.init(ee), y.resizeHandler.init(ee), y.slidesHandler.init(ee), y.options.loop && y.slideLooper.loop(), C.offsetParent && _.length && y.dragHandler.init(ee), E = i.init(ee, S)));
  }
  function O(te, K) {
    const oe = Z();
    k(), D(c({
      startIndex: oe
    }, te), K), l.emit("reInit");
  }
  function k() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function M() {
    b || (b = !0, s.clear(), k(), l.emit("destroy"), l.clear());
  }
  function B(te, K, oe) {
    !x.active || b || (y.scrollBody.useBaseFriction().useDuration(K === !0 ? 0 : x.duration), y.scrollTo.index(te, oe || 0));
  }
  function H(te) {
    const K = y.index.add(1).get();
    B(K, te, -1);
  }
  function L(te) {
    const K = y.index.add(-1).get();
    B(K, te, 1);
  }
  function Y() {
    return y.index.add(1).get() !== Z();
  }
  function G() {
    return y.index.add(-1).get() !== Z();
  }
  function j() {
    return y.scrollSnapList;
  }
  function Q() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function Z() {
    return y.index.get();
  }
  function z() {
    return y.indexPrevious.get();
  }
  function I() {
    return y.slidesInView.get();
  }
  function W() {
    return y.slidesInView.get(!1);
  }
  function F() {
    return E;
  }
  function U() {
    return y;
  }
  function $() {
    return e;
  }
  function V() {
    return C;
  }
  function X() {
    return _;
  }
  const ee = {
    canScrollNext: Y,
    canScrollPrev: G,
    containerNode: V,
    internalEngine: U,
    destroy: M,
    off: h,
    on: m,
    emit: v,
    plugins: F,
    previousScrollSnap: z,
    reInit: g,
    rootNode: $,
    scrollNext: H,
    scrollPrev: L,
    scrollProgress: Q,
    scrollSnapList: j,
    scrollTo: B,
    selectedScrollSnap: Z,
    slideNodes: X,
    slidesInView: I,
    slidesNotInView: W
  };
  return D(t, n), setTimeout(() => l.emit("init"), 0), ee;
}
Ua.globalOptions = void 0;
function $f(e = {}, t = []) {
  const n = Ve(e), r = Ve(t), [o, a] = gt(), [i, s] = gt(), l = Te(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return vt(() => {
    Af(n.current, e) || (n.current = e, l());
  }, [e, l]), vt(() => {
    tI(r.current, t) || (r.current = t, l());
  }, [t, l]), vt(() => {
    if (eI() && i) {
      Ua.globalOptions = $f.globalOptions;
      const c = Ua(i, n.current, r.current);
      return a(c), () => c.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
$f.globalOptions = void 0;
const vx = u.createContext(null);
function ki() {
  const e = u.useContext(vx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function nK({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: o,
  children: a,
  ...i
}) {
  const [s, l] = $f(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [c, f] = u.useState(!1), [d, m] = u.useState(!1), h = u.useCallback((y) => {
    y && (f(y.canScrollPrev()), m(y.canScrollNext()));
  }, []), v = u.useCallback(() => {
    l == null || l.scrollPrev();
  }, [l]), g = u.useCallback(() => {
    l == null || l.scrollNext();
  }, [l]), b = u.useCallback(
    (y) => {
      y.key === "ArrowLeft" ? (y.preventDefault(), v()) : y.key === "ArrowRight" && (y.preventDefault(), g());
    },
    [v, g]
  );
  return u.useEffect(() => {
    !l || !n || n(l);
  }, [l, n]), u.useEffect(() => {
    if (l)
      return h(l), l.on("reInit", h), l.on("select", h), () => {
        l == null || l.off("select", h);
      };
  }, [l, h]), /* @__PURE__ */ p(
    vx.Provider,
    {
      value: {
        carouselRef: s,
        api: l,
        opts: t,
        orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: v,
        scrollNext: g,
        canScrollPrev: c,
        canScrollNext: d
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          onKeyDownCapture: b,
          className: R("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: a
        }
      )
    }
  );
}
function rK({ className: e, ...t }) {
  const { carouselRef: n, orientation: r } = ki();
  return /* @__PURE__ */ p(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ p(
        "div",
        {
          className: R(
            "flex",
            r === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function oK({ className: e, ...t }) {
  const { orientation: n } = ki();
  return /* @__PURE__ */ p(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: R(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function aK({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollPrev: a, canScrollPrev: i } = ki();
  return /* @__PURE__ */ se(
    Go,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: R(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ p(vR, {}),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function iK({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollNext: a, canScrollNext: i } = ki();
  return /* @__PURE__ */ se(
    Go,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: R(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ p(yR, {}),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var Ws, Zm;
function Gt() {
  if (Zm) return Ws;
  Zm = 1;
  var e = Array.isArray;
  return Ws = e, Ws;
}
var js, Qm;
function bx() {
  if (Qm) return js;
  Qm = 1;
  var e = typeof Ca == "object" && Ca && Ca.Object === Object && Ca;
  return js = e, js;
}
var Vs, Jm;
function on() {
  if (Jm) return Vs;
  Jm = 1;
  var e = bx(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Vs = n, Vs;
}
var Hs, eh;
function Zo() {
  if (eh) return Hs;
  eh = 1;
  var e = on(), t = e.Symbol;
  return Hs = t, Hs;
}
var qs, th;
function DI() {
  if (th) return qs;
  th = 1;
  var e = Zo(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = n.call(i, o), l = i[o];
    try {
      i[o] = void 0;
      var c = !0;
    } catch {
    }
    var f = r.call(i);
    return c && (s ? i[o] = l : delete i[o]), f;
  }
  return qs = a, qs;
}
var Gs, nh;
function II() {
  if (nh) return Gs;
  nh = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Gs = n, Gs;
}
var Us, rh;
function sr() {
  if (rh) return Us;
  rh = 1;
  var e = Zo(), t = DI(), n = II(), r = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : r : a && a in Object(s) ? t(s) : n(s);
  }
  return Us = i, Us;
}
var Ys, oh;
function lr() {
  if (oh) return Ys;
  oh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ys = e, Ys;
}
var Ks, ah;
function Qo() {
  if (ah) return Ks;
  ah = 1;
  var e = sr(), t = lr(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || t(o) && e(o) == n;
  }
  return Ks = r, Ks;
}
var Xs, ih;
function Lf() {
  if (ih) return Xs;
  ih = 1;
  var e = Gt(), t = Qo(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : r.test(a) || !n.test(a) || i != null && a in Object(i);
  }
  return Xs = o, Xs;
}
var Zs, sh;
function Ln() {
  if (sh) return Zs;
  sh = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Zs = e, Zs;
}
var Qs, lh;
function Ff() {
  if (lh) return Qs;
  lh = 1;
  var e = sr(), t = Ln(), n = "[object AsyncFunction]", r = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == r || l == o || l == n || l == a;
  }
  return Qs = i, Qs;
}
var Js, ch;
function kI() {
  if (ch) return Js;
  ch = 1;
  var e = on(), t = e["__core-js_shared__"];
  return Js = t, Js;
}
var el, uh;
function $I() {
  if (uh) return el;
  uh = 1;
  var e = kI(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return el = n, el;
}
var tl, dh;
function yx() {
  if (dh) return tl;
  dh = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return tl = n, tl;
}
var nl, fh;
function LI() {
  if (fh) return nl;
  fh = 1;
  var e = Ff(), t = $I(), n = Ln(), r = yx(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, l = i.toString, c = s.hasOwnProperty, f = RegExp(
    "^" + l.call(c).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(m) {
    if (!n(m) || t(m))
      return !1;
    var h = e(m) ? f : a;
    return h.test(r(m));
  }
  return nl = d, nl;
}
var rl, ph;
function FI() {
  if (ph) return rl;
  ph = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return rl = e, rl;
}
var ol, mh;
function cr() {
  if (mh) return ol;
  mh = 1;
  var e = LI(), t = FI();
  function n(r, o) {
    var a = t(r, o);
    return e(a) ? a : void 0;
  }
  return ol = n, ol;
}
var al, hh;
function $i() {
  if (hh) return al;
  hh = 1;
  var e = cr(), t = e(Object, "create");
  return al = t, al;
}
var il, gh;
function BI() {
  if (gh) return il;
  gh = 1;
  var e = $i();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return il = t, il;
}
var sl, vh;
function zI() {
  if (vh) return sl;
  vh = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return sl = e, sl;
}
var ll, bh;
function WI() {
  if (bh) return ll;
  bh = 1;
  var e = $i(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return r.call(i, a) ? i[a] : void 0;
  }
  return ll = o, ll;
}
var cl, yh;
function jI() {
  if (yh) return cl;
  yh = 1;
  var e = $i(), t = Object.prototype, n = t.hasOwnProperty;
  function r(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : n.call(a, o);
  }
  return cl = r, cl;
}
var ul, wh;
function VI() {
  if (wh) return ul;
  wh = 1;
  var e = $i(), t = "__lodash_hash_undefined__";
  function n(r, o) {
    var a = this.__data__;
    return this.size += this.has(r) ? 0 : 1, a[r] = e && o === void 0 ? t : o, this;
  }
  return ul = n, ul;
}
var dl, xh;
function HI() {
  if (xh) return dl;
  xh = 1;
  var e = BI(), t = zI(), n = WI(), r = jI(), o = VI();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, dl = a, dl;
}
var fl, Sh;
function qI() {
  if (Sh) return fl;
  Sh = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return fl = e, fl;
}
var pl, Ch;
function Bf() {
  if (Ch) return pl;
  Ch = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return pl = e, pl;
}
var ml, _h;
function Li() {
  if (_h) return ml;
  _h = 1;
  var e = Bf();
  function t(n, r) {
    for (var o = n.length; o--; )
      if (e(n[o][0], r))
        return o;
    return -1;
  }
  return ml = t, ml;
}
var hl, Eh;
function GI() {
  if (Eh) return hl;
  Eh = 1;
  var e = Li(), t = Array.prototype, n = t.splice;
  function r(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : n.call(a, i, 1), --this.size, !0;
  }
  return hl = r, hl;
}
var gl, Ph;
function UI() {
  if (Ph) return gl;
  Ph = 1;
  var e = Li();
  function t(n) {
    var r = this.__data__, o = e(r, n);
    return o < 0 ? void 0 : r[o][1];
  }
  return gl = t, gl;
}
var vl, Rh;
function YI() {
  if (Rh) return vl;
  Rh = 1;
  var e = Li();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return vl = t, vl;
}
var bl, Nh;
function KI() {
  if (Nh) return bl;
  Nh = 1;
  var e = Li();
  function t(n, r) {
    var o = this.__data__, a = e(o, n);
    return a < 0 ? (++this.size, o.push([n, r])) : o[a][1] = r, this;
  }
  return bl = t, bl;
}
var yl, Th;
function Fi() {
  if (Th) return yl;
  Th = 1;
  var e = qI(), t = GI(), n = UI(), r = YI(), o = KI();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, yl = a, yl;
}
var wl, Mh;
function zf() {
  if (Mh) return wl;
  Mh = 1;
  var e = cr(), t = on(), n = e(t, "Map");
  return wl = n, wl;
}
var xl, Oh;
function XI() {
  if (Oh) return xl;
  Oh = 1;
  var e = HI(), t = Fi(), n = zf();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return xl = r, xl;
}
var Sl, Ah;
function ZI() {
  if (Ah) return Sl;
  Ah = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Sl = e, Sl;
}
var Cl, Dh;
function Bi() {
  if (Dh) return Cl;
  Dh = 1;
  var e = ZI();
  function t(n, r) {
    var o = n.__data__;
    return e(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
  }
  return Cl = t, Cl;
}
var _l, Ih;
function QI() {
  if (Ih) return _l;
  Ih = 1;
  var e = Bi();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return _l = t, _l;
}
var El, kh;
function JI() {
  if (kh) return El;
  kh = 1;
  var e = Bi();
  function t(n) {
    return e(this, n).get(n);
  }
  return El = t, El;
}
var Pl, $h;
function ek() {
  if ($h) return Pl;
  $h = 1;
  var e = Bi();
  function t(n) {
    return e(this, n).has(n);
  }
  return Pl = t, Pl;
}
var Rl, Lh;
function tk() {
  if (Lh) return Rl;
  Lh = 1;
  var e = Bi();
  function t(n, r) {
    var o = e(this, n), a = o.size;
    return o.set(n, r), this.size += o.size == a ? 0 : 1, this;
  }
  return Rl = t, Rl;
}
var Nl, Fh;
function Wf() {
  if (Fh) return Nl;
  Fh = 1;
  var e = XI(), t = QI(), n = JI(), r = ek(), o = tk();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, Nl = a, Nl;
}
var Tl, Bh;
function nk() {
  if (Bh) return Tl;
  Bh = 1;
  var e = Wf(), t = "Expected a function";
  function n(r, o) {
    if (typeof r != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var a = function() {
      var i = arguments, s = o ? o.apply(this, i) : i[0], l = a.cache;
      if (l.has(s))
        return l.get(s);
      var c = r.apply(this, i);
      return a.cache = l.set(s, c) || l, c;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, Tl = n, Tl;
}
var Ml, zh;
function rk() {
  if (zh) return Ml;
  zh = 1;
  var e = nk(), t = 500;
  function n(r) {
    var o = e(r, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Ml = n, Ml;
}
var Ol, Wh;
function ok() {
  if (Wh) return Ol;
  Wh = 1;
  var e = rk(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, l, c) {
      a.push(l ? c.replace(n, "$1") : s || i);
    }), a;
  });
  return Ol = r, Ol;
}
var Al, jh;
function wx() {
  if (jh) return Al;
  jh = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = Array(o); ++r < o; )
      a[r] = n(t[r], r, t);
    return a;
  }
  return Al = e, Al;
}
var Dl, Vh;
function ak() {
  if (Vh) return Dl;
  Vh = 1;
  var e = Zo(), t = wx(), n = Gt(), r = Qo(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
  function i(s) {
    if (typeof s == "string")
      return s;
    if (n(s))
      return t(s, i) + "";
    if (r(s))
      return a ? a.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return Dl = i, Dl;
}
var Il, Hh;
function xx() {
  if (Hh) return Il;
  Hh = 1;
  var e = ak();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Il = t, Il;
}
var kl, qh;
function Sx() {
  if (qh) return kl;
  qh = 1;
  var e = Gt(), t = Lf(), n = ok(), r = xx();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : n(r(a));
  }
  return kl = o, kl;
}
var $l, Gh;
function zi() {
  if (Gh) return $l;
  Gh = 1;
  var e = Qo();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return $l = t, $l;
}
var Ll, Uh;
function jf() {
  if (Uh) return Ll;
  Uh = 1;
  var e = Sx(), t = zi();
  function n(r, o) {
    o = e(o, r);
    for (var a = 0, i = o.length; r != null && a < i; )
      r = r[t(o[a++])];
    return a && a == i ? r : void 0;
  }
  return Ll = n, Ll;
}
var Fl, Yh;
function Cx() {
  if (Yh) return Fl;
  Yh = 1;
  var e = jf();
  function t(n, r, o) {
    var a = n == null ? void 0 : e(n, r);
    return a === void 0 ? o : a;
  }
  return Fl = t, Fl;
}
Cx();
var Bl, Kh;
function ik() {
  if (Kh) return Bl;
  Kh = 1;
  function e(t) {
    return t == null;
  }
  return Bl = e, Bl;
}
var sk = ik();
const lk = /* @__PURE__ */ nn(sk);
var zl, Xh;
function ck() {
  if (Xh) return zl;
  Xh = 1;
  var e = sr(), t = Gt(), n = lr(), r = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == r;
  }
  return zl = o, zl;
}
var uk = ck();
const _x = /* @__PURE__ */ nn(uk);
var dk = Ff();
const Ya = /* @__PURE__ */ nn(dk);
var fk = Ln();
const Ex = /* @__PURE__ */ nn(fk);
var Ea = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zh;
function pk() {
  if (Zh) return _e;
  Zh = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function g(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
        case e:
          switch (b = b.type, b) {
            case n:
            case o:
            case r:
            case c:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case i:
                case l:
                case m:
                case d:
                case a:
                  return b;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return _e.ContextConsumer = i, _e.ContextProvider = a, _e.Element = e, _e.ForwardRef = l, _e.Fragment = n, _e.Lazy = m, _e.Memo = d, _e.Portal = t, _e.Profiler = o, _e.StrictMode = r, _e.Suspense = c, _e.SuspenseList = f, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(b) {
    return g(b) === i;
  }, _e.isContextProvider = function(b) {
    return g(b) === a;
  }, _e.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, _e.isForwardRef = function(b) {
    return g(b) === l;
  }, _e.isFragment = function(b) {
    return g(b) === n;
  }, _e.isLazy = function(b) {
    return g(b) === m;
  }, _e.isMemo = function(b) {
    return g(b) === d;
  }, _e.isPortal = function(b) {
    return g(b) === t;
  }, _e.isProfiler = function(b) {
    return g(b) === o;
  }, _e.isStrictMode = function(b) {
    return g(b) === r;
  }, _e.isSuspense = function(b) {
    return g(b) === c;
  }, _e.isSuspenseList = function(b) {
    return g(b) === f;
  }, _e.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === o || b === r || b === c || b === f || b === h || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === d || b.$$typeof === a || b.$$typeof === i || b.$$typeof === l || b.$$typeof === v || b.getModuleId !== void 0);
  }, _e.typeOf = g, _e;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh;
function mk() {
  return Qh || (Qh = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, g = !1, b = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function S(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === o || w || A === r || A === c || A === f || y || A === h || v || g || b || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === d || A.$$typeof === a || A.$$typeof === i || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === x || A.getModuleId !== void 0));
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var ne = A.$$typeof;
        switch (ne) {
          case e:
            var me = A.type;
            switch (me) {
              case n:
              case o:
              case r:
              case c:
              case f:
                return me;
              default:
                var he = me && me.$$typeof;
                switch (he) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case d:
                  case a:
                    return he;
                  default:
                    return ne;
                }
            }
          case t:
            return ne;
        }
      }
    }
    var C = i, _ = a, T = e, N = l, D = n, O = m, k = d, M = t, B = o, H = r, L = c, Y = f, G = !1, j = !1;
    function Q(A) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(A) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(A) {
      return E(A) === i;
    }
    function I(A) {
      return E(A) === a;
    }
    function W(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function F(A) {
      return E(A) === l;
    }
    function U(A) {
      return E(A) === n;
    }
    function $(A) {
      return E(A) === m;
    }
    function V(A) {
      return E(A) === d;
    }
    function X(A) {
      return E(A) === t;
    }
    function ee(A) {
      return E(A) === o;
    }
    function te(A) {
      return E(A) === r;
    }
    function K(A) {
      return E(A) === c;
    }
    function oe(A) {
      return E(A) === f;
    }
    Ee.ContextConsumer = C, Ee.ContextProvider = _, Ee.Element = T, Ee.ForwardRef = N, Ee.Fragment = D, Ee.Lazy = O, Ee.Memo = k, Ee.Portal = M, Ee.Profiler = B, Ee.StrictMode = H, Ee.Suspense = L, Ee.SuspenseList = Y, Ee.isAsyncMode = Q, Ee.isConcurrentMode = Z, Ee.isContextConsumer = z, Ee.isContextProvider = I, Ee.isElement = W, Ee.isForwardRef = F, Ee.isFragment = U, Ee.isLazy = $, Ee.isMemo = V, Ee.isPortal = X, Ee.isProfiler = ee, Ee.isStrictMode = te, Ee.isSuspense = K, Ee.isSuspenseList = oe, Ee.isValidElementType = S, Ee.typeOf = E;
  })()), Ee;
}
var Jh;
function hk() {
  return Jh || (Jh = 1, process.env.NODE_ENV === "production" ? Ea.exports = pk() : Ea.exports = mk()), Ea.exports;
}
hk();
var Wl, eg;
function Px() {
  if (eg) return Wl;
  eg = 1;
  var e = sr(), t = lr(), n = "[object Number]";
  function r(o) {
    return typeof o == "number" || t(o) && e(o) == n;
  }
  return Wl = r, Wl;
}
var jl, tg;
function gk() {
  if (tg) return jl;
  tg = 1;
  var e = Px();
  function t(n) {
    return e(n) && n != +n;
  }
  return jl = t, jl;
}
var vk = gk();
const bk = /* @__PURE__ */ nn(vk);
var yk = Px();
const wk = /* @__PURE__ */ nn(yk);
var Pa = function(t) {
  return _x(t) && t.indexOf("%") === t.length - 1;
}, kt = function(t) {
  return wk(t) && !bk(t);
}, Ka = function(t) {
  return kt(t) || _x(t);
};
function hd(e) {
  "@babel/helpers - typeof";
  return hd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hd(e);
}
var xk = ["viewBox", "children"], Sk = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], ng = ["points", "pathLength"], Vl = {
  svg: xk,
  polygon: ng,
  polyline: ng
}, Rx = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ck = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, _k = function(t, n, r) {
  if (!Ex(t) || hd(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Rx.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = Ck(i, n, r));
  }), o;
}, Ek = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Pk = function(t, n, r, o) {
  var a, i = (a = Vl == null ? void 0 : Vl[o]) !== null && a !== void 0 ? a : [];
  return n.startsWith("data-") || !Ya(t) && (o && i.includes(n) || Sk.includes(n)) || Rx.includes(n);
}, Nx = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ h1(t) && (o = t.props), !Ex(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    Pk((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, Rk = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function gd() {
  return gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gd.apply(this, arguments);
}
function Nk(e, t) {
  if (e == null) return {};
  var n = Tk(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Tk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Mk(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, l = e.desc, c = Nk(e, Rk), f = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, d = bn("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", gd({}, Nx(c, !0, "svg"), {
    className: d,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, l), t);
}
var Ok = process.env.NODE_ENV !== "production", Ba = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (Ok && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, Hl, rg;
function Ak() {
  if (rg) return Hl;
  rg = 1;
  function e(t, n, r) {
    var o = -1, a = t.length;
    n < 0 && (n = -n > a ? 0 : a + n), r = r > a ? a : r, r < 0 && (r += a), a = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + n];
    return i;
  }
  return Hl = e, Hl;
}
var ql, og;
function Dk() {
  if (og) return ql;
  og = 1;
  var e = Ak();
  function t(n, r, o) {
    var a = n.length;
    return o = o === void 0 ? a : o, !r && o >= a ? n : e(n, r, o);
  }
  return ql = t, ql;
}
var Gl, ag;
function Tx() {
  if (ag) return Gl;
  ag = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function l(c) {
    return s.test(c);
  }
  return Gl = l, Gl;
}
var Ul, ig;
function Ik() {
  if (ig) return Ul;
  ig = 1;
  function e(t) {
    return t.split("");
  }
  return Ul = e, Ul;
}
var Yl, sg;
function kk() {
  if (sg) return Yl;
  sg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", l = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + l + ")", f = "[^" + e + "]", d = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", v = c + "?", g = "[" + a + "]?", b = "(?:" + h + "(?:" + [f, d, m].join("|") + ")" + g + v + ")*", y = g + v + b, w = "(?:" + [f + s + "?", s, d, m, i].join("|") + ")", x = RegExp(l + "(?=" + l + ")|" + w + y, "g");
  function S(E) {
    return E.match(x) || [];
  }
  return Yl = S, Yl;
}
var Kl, lg;
function $k() {
  if (lg) return Kl;
  lg = 1;
  var e = Ik(), t = Tx(), n = kk();
  function r(o) {
    return t(o) ? n(o) : e(o);
  }
  return Kl = r, Kl;
}
var Xl, cg;
function Lk() {
  if (cg) return Xl;
  cg = 1;
  var e = Dk(), t = Tx(), n = $k(), r = xx();
  function o(a) {
    return function(i) {
      i = r(i);
      var s = t(i) ? n(i) : void 0, l = s ? s[0] : i.charAt(0), c = s ? e(s, 1).join("") : i.slice(1);
      return l[a]() + c;
    };
  }
  return Xl = o, Xl;
}
var Zl, ug;
function Fk() {
  if (ug) return Zl;
  ug = 1;
  var e = Lk(), t = e("toUpperCase");
  return Zl = t, Zl;
}
var Bk = Fk();
const Mx = /* @__PURE__ */ nn(Bk);
function Ra(e) {
  return function() {
    return e;
  };
}
const Ox = Math.cos, Xa = Math.sin, Ut = Math.sqrt, Za = Math.PI, Wi = 2 * Za, vd = Math.PI, bd = 2 * vd, Yn = 1e-6, zk = bd - Yn;
function Ax(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Wk(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Ax;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class jk {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ax : Wk(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, l = r - t, c = o - n, f = i - t, d = s - n, m = f * f + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Yn) if (!(Math.abs(d * l - c * f) > Yn) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = r - i, v = o - s, g = l * l + c * c, b = h * h + v * v, y = Math.sqrt(g), w = Math.sqrt(m), x = a * Math.tan((vd - Math.acos((g + m - b) / (2 * y * w))) / 2), S = x / w, E = x / y;
      Math.abs(S - 1) > Yn && this._append`L${t + S * f},${n + S * d}`, this._append`A${a},${a},0,0,${+(d * h > f * v)},${this._x1 = t + E * l},${this._y1 = n + E * c}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), l = r * Math.sin(o), c = t + s, f = n + l, d = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Yn || Math.abs(this._y1 - f) > Yn) && this._append`L${c},${f}`, r && (m < 0 && (m = m % bd + bd), m > zk ? this._append`A${r},${r},0,1,${d},${t - s},${n - l}A${r},${r},0,1,${d},${this._x1 = c},${this._y1 = f}` : m > Yn && this._append`A${r},${r},0,${+(m >= vd)},${d},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Vk(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new jk(t);
}
const Vf = {
  draw(e, t) {
    const n = Ut(t / Za);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Wi);
  }
}, Hk = {
  draw(e, t) {
    const n = Ut(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Dx = Ut(1 / 3), qk = Dx * 2, Gk = {
  draw(e, t) {
    const n = Ut(t / qk), r = n * Dx;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, Uk = {
  draw(e, t) {
    const n = Ut(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, Yk = 0.8908130915292852, Ix = Xa(Za / 10) / Xa(7 * Za / 10), Kk = Xa(Wi / 10) * Ix, Xk = -Ox(Wi / 10) * Ix, Zk = {
  draw(e, t) {
    const n = Ut(t * Yk), r = Kk * n, o = Xk * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = Wi * a / 5, s = Ox(i), l = Xa(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * o, l * r + s * o);
    }
    e.closePath();
  }
}, Ql = Ut(3), Qk = {
  draw(e, t) {
    const n = -Ut(t / (Ql * 3));
    e.moveTo(0, n * 2), e.lineTo(-Ql * n, -n), e.lineTo(Ql * n, -n), e.closePath();
  }
}, _t = -0.5, Et = Ut(3) / 2, yd = 1 / Ut(12), Jk = (yd / 2 + 1) * 3, e$ = {
  draw(e, t) {
    const n = Ut(t / Jk), r = n / 2, o = n * yd, a = r, i = n * yd + n, s = -a, l = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, l), e.lineTo(_t * r - Et * o, Et * r + _t * o), e.lineTo(_t * a - Et * i, Et * a + _t * i), e.lineTo(_t * s - Et * l, Et * s + _t * l), e.lineTo(_t * r + Et * o, _t * o - Et * r), e.lineTo(_t * a + Et * i, _t * i - Et * a), e.lineTo(_t * s + Et * l, _t * l - Et * s), e.closePath();
  }
};
function t$(e, t) {
  let n = null, r = Vk(o);
  e = typeof e == "function" ? e : Ra(e || Vf), t = typeof t == "function" ? t : Ra(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Ra(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Ra(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function _o(e) {
  "@babel/helpers - typeof";
  return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _o(e);
}
var n$ = ["type", "size", "sizeType"];
function wd() {
  return wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wd.apply(this, arguments);
}
function dg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(n), !0).forEach(function(r) {
      r$(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function r$(e, t, n) {
  return t = o$(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function o$(e) {
  var t = a$(e, "string");
  return _o(t) == "symbol" ? t : t + "";
}
function a$(e, t) {
  if (_o(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function i$(e, t) {
  if (e == null) return {};
  var n = s$(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function s$(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var kx = {
  symbolCircle: Vf,
  symbolCross: Hk,
  symbolDiamond: Gk,
  symbolSquare: Uk,
  symbolStar: Zk,
  symbolTriangle: Qk,
  symbolWye: e$
}, l$ = Math.PI / 180, c$ = function(t) {
  var n = "symbol".concat(Mx(t));
  return kx[n] || Vf;
}, u$ = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * l$;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, d$ = function(t, n) {
  kx["symbol".concat(Mx(t))] = n;
}, $x = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, l = i$(t, n$), c = fg(fg({}, l), {}, {
    type: r,
    size: a,
    sizeType: s
  }), f = function() {
    var b = c$(r), y = t$().type(b).size(u$(a, s, r));
    return y();
  }, d = c.className, m = c.cx, h = c.cy, v = Nx(c, !0);
  return m === +m && h === +h && a === +a ? /* @__PURE__ */ P.createElement("path", wd({}, v, {
    className: bn("recharts-symbols", d),
    transform: "translate(".concat(m, ", ").concat(h, ")"),
    d: f()
  })) : null;
};
$x.registerSymbol = d$;
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function xd() {
  return xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xd.apply(this, arguments);
}
function pg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function f$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pg(Object(n), !0).forEach(function(r) {
      Eo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function p$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m$(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Fx(r.key), r);
  }
}
function h$(e, t, n) {
  return t && m$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g$(e, t, n) {
  return t = Qa(t), v$(e, Lx() ? Reflect.construct(t, n || [], Qa(e).constructor) : t.apply(e, n));
}
function v$(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b$(e);
}
function b$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lx = function() {
    return !!e;
  })();
}
function Qa(e) {
  return Qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qa(e);
}
function y$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sd(e, t);
}
function Sd(e, t) {
  return Sd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Sd(e, t);
}
function Eo(e, t, n) {
  return t = Fx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fx(e) {
  var t = w$(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function w$(e, t) {
  if (Or(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Or(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pt = 32, Hf = /* @__PURE__ */ (function(e) {
  function t() {
    return p$(this, t), g$(this, t, arguments);
  }
  return y$(t, e), h$(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = Pt / 2, i = Pt / 6, s = Pt / 3, l = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ P.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Pt,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ P.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Pt, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ P.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(Pt / 8, "h").concat(Pt, "v").concat(Pt * 3 / 4, "h").concat(-Pt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ P.isValidElement(r.legendIcon)) {
          var c = f$({}, r);
          return delete c.legendIcon, /* @__PURE__ */ P.cloneElement(r.legendIcon, c);
        }
        return /* @__PURE__ */ P.createElement($x, {
          fill: l,
          cx: a,
          cy: a,
          size: Pt,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, l = o.formatter, c = o.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Pt,
        height: Pt
      }, d = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, v) {
        var g = h.formatter || l, b = bn(Eo(Eo({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var y = Ya(h.value) ? null : h.value;
        Ba(
          !Ya(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? c : h.color;
        return /* @__PURE__ */ P.createElement("li", xd({
          className: b,
          style: d,
          key: "legend-item-".concat(v)
        }, _k(r.props, h, v)), /* @__PURE__ */ P.createElement(Mk, {
          width: i,
          height: i,
          viewBox: f,
          style: m
        }, r.renderIcon(h)), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, g ? g(y, h, v) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(wi);
Eo(Hf, "displayName", "Legend");
Eo(Hf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Jl, mg;
function x$() {
  if (mg) return Jl;
  mg = 1;
  var e = Fi();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Jl = t, Jl;
}
var ec, hg;
function S$() {
  if (hg) return ec;
  hg = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return ec = e, ec;
}
var tc, gg;
function C$() {
  if (gg) return tc;
  gg = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return tc = e, tc;
}
var nc, vg;
function _$() {
  if (vg) return nc;
  vg = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return nc = e, nc;
}
var rc, bg;
function E$() {
  if (bg) return rc;
  bg = 1;
  var e = Fi(), t = zf(), n = Wf(), r = 200;
  function o(a, i) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < r - 1)
        return l.push([a, i]), this.size = ++s.size, this;
      s = this.__data__ = new n(l);
    }
    return s.set(a, i), this.size = s.size, this;
  }
  return rc = o, rc;
}
var oc, yg;
function Bx() {
  if (yg) return oc;
  yg = 1;
  var e = Fi(), t = x$(), n = S$(), r = C$(), o = _$(), a = E$();
  function i(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = o, i.prototype.set = a, oc = i, oc;
}
var ac, wg;
function P$() {
  if (wg) return ac;
  wg = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return ac = t, ac;
}
var ic, xg;
function R$() {
  if (xg) return ic;
  xg = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ic = e, ic;
}
var sc, Sg;
function zx() {
  if (Sg) return sc;
  Sg = 1;
  var e = Wf(), t = P$(), n = R$();
  function r(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, sc = r, sc;
}
var lc, Cg;
function N$() {
  if (Cg) return lc;
  Cg = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length; ++r < o; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return lc = e, lc;
}
var cc, _g;
function Wx() {
  if (_g) return cc;
  _g = 1;
  function e(t, n) {
    return t.has(n);
  }
  return cc = e, cc;
}
var uc, Eg;
function jx() {
  if (Eg) return uc;
  Eg = 1;
  var e = zx(), t = N$(), n = Wx(), r = 1, o = 2;
  function a(i, s, l, c, f, d) {
    var m = l & r, h = i.length, v = s.length;
    if (h != v && !(m && v > h))
      return !1;
    var g = d.get(i), b = d.get(s);
    if (g && b)
      return g == s && b == i;
    var y = -1, w = !0, x = l & o ? new e() : void 0;
    for (d.set(i, s), d.set(s, i); ++y < h; ) {
      var S = i[y], E = s[y];
      if (c)
        var C = m ? c(E, S, y, s, i, d) : c(S, E, y, i, s, d);
      if (C !== void 0) {
        if (C)
          continue;
        w = !1;
        break;
      }
      if (x) {
        if (!t(s, function(_, T) {
          if (!n(x, T) && (S === _ || f(S, _, l, c, d)))
            return x.push(T);
        })) {
          w = !1;
          break;
        }
      } else if (!(S === E || f(S, E, l, c, d))) {
        w = !1;
        break;
      }
    }
    return d.delete(i), d.delete(s), w;
  }
  return uc = a, uc;
}
var dc, Pg;
function T$() {
  if (Pg) return dc;
  Pg = 1;
  var e = on(), t = e.Uint8Array;
  return dc = t, dc;
}
var fc, Rg;
function M$() {
  if (Rg) return fc;
  Rg = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o, a) {
      r[++n] = [a, o];
    }), r;
  }
  return fc = e, fc;
}
var pc, Ng;
function qf() {
  if (Ng) return pc;
  Ng = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o) {
      r[++n] = o;
    }), r;
  }
  return pc = e, pc;
}
var mc, Tg;
function O$() {
  if (Tg) return mc;
  Tg = 1;
  var e = Zo(), t = T$(), n = Bf(), r = jx(), o = M$(), a = qf(), i = 1, s = 2, l = "[object Boolean]", c = "[object Date]", f = "[object Error]", d = "[object Map]", m = "[object Number]", h = "[object RegExp]", v = "[object Set]", g = "[object String]", b = "[object Symbol]", y = "[object ArrayBuffer]", w = "[object DataView]", x = e ? e.prototype : void 0, S = x ? x.valueOf : void 0;
  function E(C, _, T, N, D, O, k) {
    switch (T) {
      case w:
        if (C.byteLength != _.byteLength || C.byteOffset != _.byteOffset)
          return !1;
        C = C.buffer, _ = _.buffer;
      case y:
        return !(C.byteLength != _.byteLength || !O(new t(C), new t(_)));
      case l:
      case c:
      case m:
        return n(+C, +_);
      case f:
        return C.name == _.name && C.message == _.message;
      case h:
      case g:
        return C == _ + "";
      case d:
        var M = o;
      case v:
        var B = N & i;
        if (M || (M = a), C.size != _.size && !B)
          return !1;
        var H = k.get(C);
        if (H)
          return H == _;
        N |= s, k.set(C, _);
        var L = r(M(C), M(_), N, D, O, k);
        return k.delete(C), L;
      case b:
        if (S)
          return S.call(C) == S.call(_);
    }
    return !1;
  }
  return mc = E, mc;
}
var hc, Mg;
function Vx() {
  if (Mg) return hc;
  Mg = 1;
  function e(t, n) {
    for (var r = -1, o = n.length, a = t.length; ++r < o; )
      t[a + r] = n[r];
    return t;
  }
  return hc = e, hc;
}
var gc, Og;
function A$() {
  if (Og) return gc;
  Og = 1;
  var e = Vx(), t = Gt();
  function n(r, o, a) {
    var i = o(r);
    return t(r) ? i : e(i, a(r));
  }
  return gc = n, gc;
}
var vc, Ag;
function D$() {
  if (Ag) return vc;
  Ag = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++r < o; ) {
      var s = t[r];
      n(s, r, t) && (i[a++] = s);
    }
    return i;
  }
  return vc = e, vc;
}
var bc, Dg;
function I$() {
  if (Dg) return bc;
  Dg = 1;
  function e() {
    return [];
  }
  return bc = e, bc;
}
var yc, Ig;
function k$() {
  if (Ig) return yc;
  Ig = 1;
  var e = D$(), t = I$(), n = Object.prototype, r = n.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return yc = a, yc;
}
var wc, kg;
function $$() {
  if (kg) return wc;
  kg = 1;
  function e(t, n) {
    for (var r = -1, o = Array(t); ++r < t; )
      o[r] = n(r);
    return o;
  }
  return wc = e, wc;
}
var xc, $g;
function L$() {
  if ($g) return xc;
  $g = 1;
  var e = sr(), t = lr(), n = "[object Arguments]";
  function r(o) {
    return t(o) && e(o) == n;
  }
  return xc = r, xc;
}
var Sc, Lg;
function Gf() {
  if (Lg) return Sc;
  Lg = 1;
  var e = L$(), t = lr(), n = Object.prototype, r = n.hasOwnProperty, o = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !o.call(i, "callee");
  };
  return Sc = a, Sc;
}
var uo = { exports: {} }, Cc, Fg;
function F$() {
  if (Fg) return Cc;
  Fg = 1;
  function e() {
    return !1;
  }
  return Cc = e, Cc;
}
uo.exports;
var Bg;
function Hx() {
  return Bg || (Bg = 1, (function(e, t) {
    var n = on(), r = F$(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
    e.exports = c;
  })(uo, uo.exports)), uo.exports;
}
var _c, zg;
function Uf() {
  if (zg) return _c;
  zg = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, o) {
    var a = typeof r;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < o;
  }
  return _c = n, _c;
}
var Ec, Wg;
function Yf() {
  if (Wg) return Ec;
  Wg = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Ec = t, Ec;
}
var Pc, jg;
function B$() {
  if (jg) return Pc;
  jg = 1;
  var e = sr(), t = Yf(), n = lr(), r = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", l = "[object Function]", c = "[object Map]", f = "[object Number]", d = "[object Object]", m = "[object RegExp]", h = "[object Set]", v = "[object String]", g = "[object WeakMap]", b = "[object ArrayBuffer]", y = "[object DataView]", w = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", E = "[object Int16Array]", C = "[object Int32Array]", _ = "[object Uint8Array]", T = "[object Uint8ClampedArray]", N = "[object Uint16Array]", D = "[object Uint32Array]", O = {};
  O[w] = O[x] = O[S] = O[E] = O[C] = O[_] = O[T] = O[N] = O[D] = !0, O[r] = O[o] = O[b] = O[a] = O[y] = O[i] = O[s] = O[l] = O[c] = O[f] = O[d] = O[m] = O[h] = O[v] = O[g] = !1;
  function k(M) {
    return n(M) && t(M.length) && !!O[e(M)];
  }
  return Pc = k, Pc;
}
var Rc, Vg;
function qx() {
  if (Vg) return Rc;
  Vg = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Rc = e, Rc;
}
var fo = { exports: {} };
fo.exports;
var Hg;
function z$() {
  return Hg || (Hg = 1, (function(e, t) {
    var n = bx(), r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = (function() {
      try {
        var l = o && o.require && o.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(fo, fo.exports)), fo.exports;
}
var Nc, qg;
function Gx() {
  if (qg) return Nc;
  qg = 1;
  var e = B$(), t = qx(), n = z$(), r = n && n.isTypedArray, o = r ? t(r) : e;
  return Nc = o, Nc;
}
var Tc, Gg;
function W$() {
  if (Gg) return Tc;
  Gg = 1;
  var e = $$(), t = Gf(), n = Gt(), r = Hx(), o = Uf(), a = Gx(), i = Object.prototype, s = i.hasOwnProperty;
  function l(c, f) {
    var d = n(c), m = !d && t(c), h = !d && !m && r(c), v = !d && !m && !h && a(c), g = d || m || h || v, b = g ? e(c.length, String) : [], y = b.length;
    for (var w in c)
      (f || s.call(c, w)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      v && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      o(w, y))) && b.push(w);
    return b;
  }
  return Tc = l, Tc;
}
var Mc, Ug;
function j$() {
  if (Ug) return Mc;
  Ug = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, o = typeof r == "function" && r.prototype || e;
    return n === o;
  }
  return Mc = t, Mc;
}
var Oc, Yg;
function V$() {
  if (Yg) return Oc;
  Yg = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return Oc = e, Oc;
}
var Ac, Kg;
function H$() {
  if (Kg) return Ac;
  Kg = 1;
  var e = V$(), t = e(Object.keys, Object);
  return Ac = t, Ac;
}
var Dc, Xg;
function q$() {
  if (Xg) return Dc;
  Xg = 1;
  var e = j$(), t = H$(), n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      r.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Dc = o, Dc;
}
var Ic, Zg;
function ji() {
  if (Zg) return Ic;
  Zg = 1;
  var e = Ff(), t = Yf();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Ic = n, Ic;
}
var kc, Qg;
function Kf() {
  if (Qg) return kc;
  Qg = 1;
  var e = W$(), t = q$(), n = ji();
  function r(o) {
    return n(o) ? e(o) : t(o);
  }
  return kc = r, kc;
}
var $c, Jg;
function G$() {
  if (Jg) return $c;
  Jg = 1;
  var e = A$(), t = k$(), n = Kf();
  function r(o) {
    return e(o, n, t);
  }
  return $c = r, $c;
}
var Lc, ev;
function U$() {
  if (ev) return Lc;
  ev = 1;
  var e = G$(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function o(a, i, s, l, c, f) {
    var d = s & t, m = e(a), h = m.length, v = e(i), g = v.length;
    if (h != g && !d)
      return !1;
    for (var b = h; b--; ) {
      var y = m[b];
      if (!(d ? y in i : r.call(i, y)))
        return !1;
    }
    var w = f.get(a), x = f.get(i);
    if (w && x)
      return w == i && x == a;
    var S = !0;
    f.set(a, i), f.set(i, a);
    for (var E = d; ++b < h; ) {
      y = m[b];
      var C = a[y], _ = i[y];
      if (l)
        var T = d ? l(_, C, y, i, a, f) : l(C, _, y, a, i, f);
      if (!(T === void 0 ? C === _ || c(C, _, s, l, f) : T)) {
        S = !1;
        break;
      }
      E || (E = y == "constructor");
    }
    if (S && !E) {
      var N = a.constructor, D = i.constructor;
      N != D && "constructor" in a && "constructor" in i && !(typeof N == "function" && N instanceof N && typeof D == "function" && D instanceof D) && (S = !1);
    }
    return f.delete(a), f.delete(i), S;
  }
  return Lc = o, Lc;
}
var Fc, tv;
function Y$() {
  if (tv) return Fc;
  tv = 1;
  var e = cr(), t = on(), n = e(t, "DataView");
  return Fc = n, Fc;
}
var Bc, nv;
function K$() {
  if (nv) return Bc;
  nv = 1;
  var e = cr(), t = on(), n = e(t, "Promise");
  return Bc = n, Bc;
}
var zc, rv;
function Ux() {
  if (rv) return zc;
  rv = 1;
  var e = cr(), t = on(), n = e(t, "Set");
  return zc = n, zc;
}
var Wc, ov;
function X$() {
  if (ov) return Wc;
  ov = 1;
  var e = cr(), t = on(), n = e(t, "WeakMap");
  return Wc = n, Wc;
}
var jc, av;
function Z$() {
  if (av) return jc;
  av = 1;
  var e = Y$(), t = zf(), n = K$(), r = Ux(), o = X$(), a = sr(), i = yx(), s = "[object Map]", l = "[object Object]", c = "[object Promise]", f = "[object Set]", d = "[object WeakMap]", m = "[object DataView]", h = i(e), v = i(t), g = i(n), b = i(r), y = i(o), w = a;
  return (e && w(new e(new ArrayBuffer(1))) != m || t && w(new t()) != s || n && w(n.resolve()) != c || r && w(new r()) != f || o && w(new o()) != d) && (w = function(x) {
    var S = a(x), E = S == l ? x.constructor : void 0, C = E ? i(E) : "";
    if (C)
      switch (C) {
        case h:
          return m;
        case v:
          return s;
        case g:
          return c;
        case b:
          return f;
        case y:
          return d;
      }
    return S;
  }), jc = w, jc;
}
var Vc, iv;
function Q$() {
  if (iv) return Vc;
  iv = 1;
  var e = Bx(), t = jx(), n = O$(), r = U$(), o = Z$(), a = Gt(), i = Hx(), s = Gx(), l = 1, c = "[object Arguments]", f = "[object Array]", d = "[object Object]", m = Object.prototype, h = m.hasOwnProperty;
  function v(g, b, y, w, x, S) {
    var E = a(g), C = a(b), _ = E ? f : o(g), T = C ? f : o(b);
    _ = _ == c ? d : _, T = T == c ? d : T;
    var N = _ == d, D = T == d, O = _ == T;
    if (O && i(g)) {
      if (!i(b))
        return !1;
      E = !0, N = !1;
    }
    if (O && !N)
      return S || (S = new e()), E || s(g) ? t(g, b, y, w, x, S) : n(g, b, _, y, w, x, S);
    if (!(y & l)) {
      var k = N && h.call(g, "__wrapped__"), M = D && h.call(b, "__wrapped__");
      if (k || M) {
        var B = k ? g.value() : g, H = M ? b.value() : b;
        return S || (S = new e()), x(B, H, y, w, S);
      }
    }
    return O ? (S || (S = new e()), r(g, b, y, w, x, S)) : !1;
  }
  return Vc = v, Vc;
}
var Hc, sv;
function Yx() {
  if (sv) return Hc;
  sv = 1;
  var e = Q$(), t = lr();
  function n(r, o, a, i, s) {
    return r === o ? !0 : r == null || o == null || !t(r) && !t(o) ? r !== r && o !== o : e(r, o, a, i, n, s);
  }
  return Hc = n, Hc;
}
var qc, lv;
function J$() {
  if (lv) return qc;
  lv = 1;
  var e = Bx(), t = Yx(), n = 1, r = 2;
  function o(a, i, s, l) {
    var c = s.length, f = c, d = !l;
    if (a == null)
      return !f;
    for (a = Object(a); c--; ) {
      var m = s[c];
      if (d && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++c < f; ) {
      m = s[c];
      var h = m[0], v = a[h], g = m[1];
      if (d && m[2]) {
        if (v === void 0 && !(h in a))
          return !1;
      } else {
        var b = new e();
        if (l)
          var y = l(v, g, h, a, i, b);
        if (!(y === void 0 ? t(g, v, n | r, l, b) : y))
          return !1;
      }
    }
    return !0;
  }
  return qc = o, qc;
}
var Gc, cv;
function Kx() {
  if (cv) return Gc;
  cv = 1;
  var e = Ln();
  function t(n) {
    return n === n && !e(n);
  }
  return Gc = t, Gc;
}
var Uc, uv;
function e2() {
  if (uv) return Uc;
  uv = 1;
  var e = Kx(), t = Kf();
  function n(r) {
    for (var o = t(r), a = o.length; a--; ) {
      var i = o[a], s = r[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return Uc = n, Uc;
}
var Yc, dv;
function Xx() {
  if (dv) return Yc;
  dv = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return Yc = e, Yc;
}
var Kc, fv;
function t2() {
  if (fv) return Kc;
  fv = 1;
  var e = J$(), t = e2(), n = Xx();
  function r(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return Kc = r, Kc;
}
var Xc, pv;
function n2() {
  if (pv) return Xc;
  pv = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Xc = e, Xc;
}
var Zc, mv;
function r2() {
  if (mv) return Zc;
  mv = 1;
  var e = Sx(), t = Gf(), n = Gt(), r = Uf(), o = Yf(), a = zi();
  function i(s, l, c) {
    l = e(l, s);
    for (var f = -1, d = l.length, m = !1; ++f < d; ) {
      var h = a(l[f]);
      if (!(m = s != null && c(s, h)))
        break;
      s = s[h];
    }
    return m || ++f != d ? m : (d = s == null ? 0 : s.length, !!d && o(d) && r(h, d) && (n(s) || t(s)));
  }
  return Zc = i, Zc;
}
var Qc, hv;
function o2() {
  if (hv) return Qc;
  hv = 1;
  var e = n2(), t = r2();
  function n(r, o) {
    return r != null && t(r, o, e);
  }
  return Qc = n, Qc;
}
var Jc, gv;
function a2() {
  if (gv) return Jc;
  gv = 1;
  var e = Yx(), t = Cx(), n = o2(), r = Lf(), o = Kx(), a = Xx(), i = zi(), s = 1, l = 2;
  function c(f, d) {
    return r(f) && o(d) ? a(i(f), d) : function(m) {
      var h = t(m, f);
      return h === void 0 && h === d ? n(m, f) : e(d, h, s | l);
    };
  }
  return Jc = c, Jc;
}
var eu, vv;
function Vi() {
  if (vv) return eu;
  vv = 1;
  function e(t) {
    return t;
  }
  return eu = e, eu;
}
var tu, bv;
function i2() {
  if (bv) return tu;
  bv = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return tu = e, tu;
}
var nu, yv;
function s2() {
  if (yv) return nu;
  yv = 1;
  var e = jf();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return nu = t, nu;
}
var ru, wv;
function l2() {
  if (wv) return ru;
  wv = 1;
  var e = i2(), t = s2(), n = Lf(), r = zi();
  function o(a) {
    return n(a) ? e(r(a)) : t(a);
  }
  return ru = o, ru;
}
var ou, xv;
function Zx() {
  if (xv) return ou;
  xv = 1;
  var e = t2(), t = a2(), n = Vi(), r = Gt(), o = l2();
  function a(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return ou = a, ou;
}
var au, Sv;
function c2() {
  if (Sv) return au;
  Sv = 1;
  function e(t, n, r, o) {
    for (var a = t.length, i = r + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return au = e, au;
}
var iu, Cv;
function u2() {
  if (Cv) return iu;
  Cv = 1;
  function e(t) {
    return t !== t;
  }
  return iu = e, iu;
}
var su, _v;
function d2() {
  if (_v) return su;
  _v = 1;
  function e(t, n, r) {
    for (var o = r - 1, a = t.length; ++o < a; )
      if (t[o] === n)
        return o;
    return -1;
  }
  return su = e, su;
}
var lu, Ev;
function f2() {
  if (Ev) return lu;
  Ev = 1;
  var e = c2(), t = u2(), n = d2();
  function r(o, a, i) {
    return a === a ? n(o, a, i) : e(o, t, i);
  }
  return lu = r, lu;
}
var cu, Pv;
function p2() {
  if (Pv) return cu;
  Pv = 1;
  var e = f2();
  function t(n, r) {
    var o = n == null ? 0 : n.length;
    return !!o && e(n, r, 0) > -1;
  }
  return cu = t, cu;
}
var uu, Rv;
function m2() {
  if (Rv) return uu;
  Rv = 1;
  function e(t, n, r) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (r(n, t[o]))
        return !0;
    return !1;
  }
  return uu = e, uu;
}
var du, Nv;
function h2() {
  if (Nv) return du;
  Nv = 1;
  function e() {
  }
  return du = e, du;
}
var fu, Tv;
function g2() {
  if (Tv) return fu;
  Tv = 1;
  var e = Ux(), t = h2(), n = qf(), r = 1 / 0, o = e && 1 / n(new e([, -0]))[1] == r ? function(a) {
    return new e(a);
  } : t;
  return fu = o, fu;
}
var pu, Mv;
function v2() {
  if (Mv) return pu;
  Mv = 1;
  var e = zx(), t = p2(), n = m2(), r = Wx(), o = g2(), a = qf(), i = 200;
  function s(l, c, f) {
    var d = -1, m = t, h = l.length, v = !0, g = [], b = g;
    if (f)
      v = !1, m = n;
    else if (h >= i) {
      var y = c ? null : o(l);
      if (y)
        return a(y);
      v = !1, m = r, b = new e();
    } else
      b = c ? [] : g;
    e:
      for (; ++d < h; ) {
        var w = l[d], x = c ? c(w) : w;
        if (w = f || w !== 0 ? w : 0, v && x === x) {
          for (var S = b.length; S--; )
            if (b[S] === x)
              continue e;
          c && b.push(x), g.push(w);
        } else m(b, x, f) || (b !== g && b.push(x), g.push(w));
      }
    return g;
  }
  return pu = s, pu;
}
var mu, Ov;
function b2() {
  if (Ov) return mu;
  Ov = 1;
  var e = Zx(), t = v2();
  function n(r, o) {
    return r && r.length ? t(r, e(o, 2)) : [];
  }
  return mu = n, mu;
}
var y2 = b2();
const Av = /* @__PURE__ */ nn(y2);
function Qx(e, t, n) {
  return t === !0 ? Av(e, n) : Ya(t) ? Av(e, t) : e;
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var w2 = ["ref"];
function Dv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(n), !0).forEach(function(r) {
      Hi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function x2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Iv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, eS(r.key), r);
  }
}
function S2(e, t, n) {
  return t && Iv(e.prototype, t), n && Iv(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C2(e, t, n) {
  return t = Ja(t), _2(e, Jx() ? Reflect.construct(t, n || [], Ja(e).constructor) : t.apply(e, n));
}
function _2(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return E2(e);
}
function E2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jx = function() {
    return !!e;
  })();
}
function Ja(e) {
  return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ja(e);
}
function P2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cd(e, t);
}
function Cd(e, t) {
  return Cd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Cd(e, t);
}
function Hi(e, t, n) {
  return t = eS(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eS(e) {
  var t = R2(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function R2(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ar(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function N2(e, t) {
  if (e == null) return {};
  var n = T2(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function T2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function M2(e) {
  return e.value;
}
function O2(e, t) {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ P.createElement(e, t);
  t.ref;
  var n = N2(t, w2);
  return /* @__PURE__ */ P.createElement(Hf, n);
}
var kv = 1, Xf = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    x2(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = C2(this, t, [].concat(o)), Hi(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return P2(t, e), S2(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > kv || Math.abs(o.height - this.lastBoundingBox.height) > kv) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? pn({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, l = o.margin, c = o.chartWidth, f = o.chartHeight, d, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          d = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          d = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var v = this.getBBoxSnapshot();
          m = {
            top: ((f || 0) - v.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return pn(pn({}, d), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, l = o.wrapperStyle, c = o.payloadUniqBy, f = o.payload, d = pn(pn({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ P.createElement("div", {
        className: "recharts-legend-wrapper",
        style: d,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, O2(a, pn(pn({}, this.props), {}, {
        payload: Qx(f, c, M2)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = pn(pn({}, this.defaultProps), r.props), i = a.layout;
      return i === "vertical" && kt(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
})(wi);
Hi(Xf, "displayName", "Legend");
Hi(Xf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var hu, $v;
function A2() {
  if ($v) return hu;
  $v = 1;
  var e = Zo(), t = Gf(), n = Gt(), r = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return n(a) || t(a) || !!(r && a && a[r]);
  }
  return hu = o, hu;
}
var gu, Lv;
function D2() {
  if (Lv) return gu;
  Lv = 1;
  var e = Vx(), t = A2();
  function n(r, o, a, i, s) {
    var l = -1, c = r.length;
    for (a || (a = t), s || (s = []); ++l < c; ) {
      var f = r[l];
      o > 0 && a(f) ? o > 1 ? n(f, o - 1, a, i, s) : e(s, f) : i || (s[s.length] = f);
    }
    return s;
  }
  return gu = n, gu;
}
var vu, Fv;
function I2() {
  if (Fv) return vu;
  Fv = 1;
  function e(t) {
    return function(n, r, o) {
      for (var a = -1, i = Object(n), s = o(n), l = s.length; l--; ) {
        var c = s[t ? l : ++a];
        if (r(i[c], c, i) === !1)
          break;
      }
      return n;
    };
  }
  return vu = e, vu;
}
var bu, Bv;
function k2() {
  if (Bv) return bu;
  Bv = 1;
  var e = I2(), t = e();
  return bu = t, bu;
}
var yu, zv;
function $2() {
  if (zv) return yu;
  zv = 1;
  var e = k2(), t = Kf();
  function n(r, o) {
    return r && e(r, o, t);
  }
  return yu = n, yu;
}
var wu, Wv;
function L2() {
  if (Wv) return wu;
  Wv = 1;
  var e = ji();
  function t(n, r) {
    return function(o, a) {
      if (o == null)
        return o;
      if (!e(o))
        return n(o, a);
      for (var i = o.length, s = r ? i : -1, l = Object(o); (r ? s-- : ++s < i) && a(l[s], s, l) !== !1; )
        ;
      return o;
    };
  }
  return wu = t, wu;
}
var xu, jv;
function F2() {
  if (jv) return xu;
  jv = 1;
  var e = $2(), t = L2(), n = t(e);
  return xu = n, xu;
}
var Su, Vv;
function B2() {
  if (Vv) return Su;
  Vv = 1;
  var e = F2(), t = ji();
  function n(r, o) {
    var a = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, l, c) {
      i[++a] = o(s, l, c);
    }), i;
  }
  return Su = n, Su;
}
var Cu, Hv;
function z2() {
  if (Hv) return Cu;
  Hv = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return Cu = e, Cu;
}
var _u, qv;
function W2() {
  if (qv) return _u;
  qv = 1;
  var e = Qo();
  function t(n, r) {
    if (n !== r) {
      var o = n !== void 0, a = n === null, i = n === n, s = e(n), l = r !== void 0, c = r === null, f = r === r, d = e(r);
      if (!c && !d && !s && n > r || s && l && f && !c && !d || a && l && f || !o && f || !i)
        return 1;
      if (!a && !s && !d && n < r || d && o && i && !a && !s || c && o && i || !l && i || !f)
        return -1;
    }
    return 0;
  }
  return _u = t, _u;
}
var Eu, Gv;
function j2() {
  if (Gv) return Eu;
  Gv = 1;
  var e = W2();
  function t(n, r, o) {
    for (var a = -1, i = n.criteria, s = r.criteria, l = i.length, c = o.length; ++a < l; ) {
      var f = e(i[a], s[a]);
      if (f) {
        if (a >= c)
          return f;
        var d = o[a];
        return f * (d == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return Eu = t, Eu;
}
var Pu, Uv;
function V2() {
  if (Uv) return Pu;
  Uv = 1;
  var e = wx(), t = jf(), n = Zx(), r = B2(), o = z2(), a = qx(), i = j2(), s = Vi(), l = Gt();
  function c(f, d, m) {
    d.length ? d = e(d, function(g) {
      return l(g) ? function(b) {
        return t(b, g.length === 1 ? g[0] : g);
      } : g;
    }) : d = [s];
    var h = -1;
    d = e(d, a(n));
    var v = r(f, function(g, b, y) {
      var w = e(d, function(x) {
        return x(g);
      });
      return { criteria: w, index: ++h, value: g };
    });
    return o(v, function(g, b) {
      return i(g, b, m);
    });
  }
  return Pu = c, Pu;
}
var Ru, Yv;
function H2() {
  if (Yv) return Ru;
  Yv = 1;
  function e(t, n, r) {
    switch (r.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, r[0]);
      case 2:
        return t.call(n, r[0], r[1]);
      case 3:
        return t.call(n, r[0], r[1], r[2]);
    }
    return t.apply(n, r);
  }
  return Ru = e, Ru;
}
var Nu, Kv;
function q2() {
  if (Kv) return Nu;
  Kv = 1;
  var e = H2(), t = Math.max;
  function n(r, o, a) {
    return o = t(o === void 0 ? r.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, l = t(i.length - o, 0), c = Array(l); ++s < l; )
        c[s] = i[o + s];
      s = -1;
      for (var f = Array(o + 1); ++s < o; )
        f[s] = i[s];
      return f[o] = a(c), e(r, this, f);
    };
  }
  return Nu = n, Nu;
}
var Tu, Xv;
function G2() {
  if (Xv) return Tu;
  Xv = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Tu = e, Tu;
}
var Mu, Zv;
function U2() {
  if (Zv) return Mu;
  Zv = 1;
  var e = cr(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Mu = t, Mu;
}
var Ou, Qv;
function Y2() {
  if (Qv) return Ou;
  Qv = 1;
  var e = G2(), t = U2(), n = Vi(), r = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Ou = r, Ou;
}
var Au, Jv;
function K2() {
  if (Jv) return Au;
  Jv = 1;
  var e = 800, t = 16, n = Date.now;
  function r(o) {
    var a = 0, i = 0;
    return function() {
      var s = n(), l = t - (s - i);
      if (i = s, l > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Au = r, Au;
}
var Du, eb;
function X2() {
  if (eb) return Du;
  eb = 1;
  var e = Y2(), t = K2(), n = t(e);
  return Du = n, Du;
}
var Iu, tb;
function Z2() {
  if (tb) return Iu;
  tb = 1;
  var e = Vi(), t = q2(), n = X2();
  function r(o, a) {
    return n(t(o, a, e), o + "");
  }
  return Iu = r, Iu;
}
var ku, nb;
function Q2() {
  if (nb) return ku;
  nb = 1;
  var e = Bf(), t = ji(), n = Uf(), r = Ln();
  function o(a, i, s) {
    if (!r(s))
      return !1;
    var l = typeof i;
    return (l == "number" ? t(s) && n(i, s.length) : l == "string" && i in s) ? e(s[i], a) : !1;
  }
  return ku = o, ku;
}
var $u, rb;
function J2() {
  if (rb) return $u;
  rb = 1;
  var e = D2(), t = V2(), n = Z2(), r = Q2(), o = n(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && r(a, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return $u = o, $u;
}
var eL = J2();
const tL = /* @__PURE__ */ nn(eL);
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
function _d() {
  return _d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _d.apply(this, arguments);
}
function nL(e, t) {
  return iL(e) || aL(e, t) || oL(e, t) || rL();
}
function rL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oL(e, t) {
  if (e) {
    if (typeof e == "string") return ob(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ob(e, t);
  }
}
function ob(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function aL(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function iL(e) {
  if (Array.isArray(e)) return e;
}
function ab(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ab(Object(n), !0).forEach(function(r) {
      sL(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ab(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sL(e, t, n) {
  return t = lL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function lL(e) {
  var t = cL(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function cL(e, t) {
  if (Po(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Po(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uL(e) {
  return Array.isArray(e) && Ka(e[0]) && Ka(e[1]) ? e.join(" ~ ") : e;
}
var dL = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, c = l === void 0 ? {} : l, f = t.payload, d = t.formatter, m = t.itemSorter, h = t.wrapperClassName, v = t.labelClassName, g = t.label, b = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, x = function() {
    if (f && f.length) {
      var k = {
        padding: 0,
        margin: 0
      }, M = (m ? tL(f, m) : f).map(function(B, H) {
        if (B.type === "none")
          return null;
        var L = Lu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: B.color || "#000"
        }, s), Y = B.formatter || d || uL, G = B.value, j = B.name, Q = G, Z = j;
        if (Y && Q != null && Z != null) {
          var z = Y(G, j, B, H, f);
          if (Array.isArray(z)) {
            var I = nL(z, 2);
            Q = I[0], Z = I[1];
          } else
            Q = z;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ P.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(H),
            style: L
          }, Ka(Z) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Z) : null, Ka(Z) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, Q), /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, B.unit || ""))
        );
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: k
      }, M);
    }
    return null;
  }, S = Lu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), E = Lu({
    margin: 0
  }, c), C = !lk(g), _ = C ? g : "", T = bn("recharts-default-tooltip", h), N = bn("recharts-tooltip-label", v);
  C && b && f !== void 0 && f !== null && (_ = b(g, f));
  var D = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", _d({
    className: T,
    style: S
  }, D), /* @__PURE__ */ P.createElement("p", {
    className: N,
    style: E
  }, /* @__PURE__ */ P.isValidElement(_) ? _ : "".concat(_)), x());
};
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
function Na(e, t, n) {
  return t = fL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fL(e) {
  var t = pL(e, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function pL(e, t) {
  if (Ro(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ro(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var no = "recharts-tooltip-wrapper", mL = {
  visibility: "hidden"
};
function hL(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return bn(no, Na(Na(Na(Na({}, "".concat(no, "-right"), kt(n) && t && kt(t.x) && n >= t.x), "".concat(no, "-left"), kt(n) && t && kt(t.x) && n < t.x), "".concat(no, "-bottom"), kt(r) && t && kt(t.y) && r >= t.y), "".concat(no, "-top"), kt(r) && t && kt(t.y) && r < t.y));
}
function ib(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, c = e.viewBoxDimension;
  if (a && kt(a[r]))
    return a[r];
  var f = n[r] - s - o, d = n[r] + o;
  if (t[r])
    return i[r] ? f : d;
  if (i[r]) {
    var m = f, h = l[r];
    return m < h ? Math.max(d, l[r]) : Math.max(f, l[r]);
  }
  var v = d + s, g = l[r] + c;
  return v > g ? Math.max(f, l[r]) : Math.max(d, l[r]);
}
function gL(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function vL(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, c, f, d;
  return i.height > 0 && i.width > 0 && n ? (f = ib({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), d = ib({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), c = gL({
    translateX: f,
    translateY: d,
    useTranslate3d: s
  })) : c = mL, {
    cssProperties: c,
    cssClasses: hL({
      translateX: f,
      translateY: d,
      coordinate: n
    })
  };
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function sb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sb(Object(n), !0).forEach(function(r) {
      Pd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sb(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yL(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, nS(r.key), r);
  }
}
function wL(e, t, n) {
  return t && yL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xL(e, t, n) {
  return t = ei(t), SL(e, tS() ? Reflect.construct(t, n || [], ei(e).constructor) : t.apply(e, n));
}
function SL(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CL(e);
}
function CL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tS = function() {
    return !!e;
  })();
}
function ei(e) {
  return ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ei(e);
}
function _L(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ed(e, t);
}
function Ed(e, t) {
  return Ed = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ed(e, t);
}
function Pd(e, t, n) {
  return t = nS(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function nS(e) {
  var t = EL(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function EL(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cb = 1, PL = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    bL(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = xL(this, t, [].concat(o)), Pd(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Pd(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, c, f;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (c = (f = n.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return _L(t, e), wL(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > cb || Math.abs(r.height - this.state.lastBoundingBox.height) > cb) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.children, f = o.coordinate, d = o.hasPayload, m = o.isAnimationActive, h = o.offset, v = o.position, g = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, x = vL({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: h,
        position: v,
        reverseDirection: g,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), S = x.cssClasses, E = x.cssProperties, C = lb(lb({
        transition: m && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, E), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && d ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ P.createElement("div", {
          tabIndex: -1,
          className: S,
          style: C,
          ref: function(T) {
            r.wrapperNode = T;
          }
        }, c)
      );
    }
  }]);
})(wi), RL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, NL = {
  isSsr: RL()
};
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function ub(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ub(Object(n), !0).forEach(function(r) {
      Zf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ub(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ML(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, oS(r.key), r);
  }
}
function OL(e, t, n) {
  return t && ML(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AL(e, t, n) {
  return t = ti(t), DL(e, rS() ? Reflect.construct(t, n || [], ti(e).constructor) : t.apply(e, n));
}
function DL(e, t) {
  if (t && (Ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IL(e);
}
function IL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rS = function() {
    return !!e;
  })();
}
function ti(e) {
  return ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ti(e);
}
function kL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rd(e, t);
}
function Rd(e, t) {
  return Rd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Rd(e, t);
}
function Zf(e, t, n) {
  return t = oS(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oS(e) {
  var t = $L(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function $L(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ir(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function LL(e) {
  return e.dataKey;
}
function FL(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(dL, t);
}
var Qf = /* @__PURE__ */ (function(e) {
  function t() {
    return TL(this, t), AL(this, t, arguments);
  }
  return kL(t, e), OL(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.content, f = o.coordinate, d = o.filterNull, m = o.isAnimationActive, h = o.offset, v = o.payload, g = o.payloadUniqBy, b = o.position, y = o.reverseDirection, w = o.useTranslate3d, x = o.viewBox, S = o.wrapperStyle, E = v ?? [];
      d && E.length && (E = Qx(v.filter(function(_) {
        return _.value != null && (_.hide !== !0 || r.props.includeHidden);
      }), g, LL));
      var C = E.length > 0;
      return /* @__PURE__ */ P.createElement(PL, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: a,
        coordinate: f,
        hasPayload: C,
        offset: h,
        position: b,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: S
      }, FL(c, db(db({}, this.props), {}, {
        payload: E
      })));
    }
  }]);
})(wi);
Zf(Qf, "displayName", "Tooltip");
Zf(Qf, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !NL.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Fu, fb;
function BL() {
  if (fb) return Fu;
  fb = 1;
  var e = on(), t = function() {
    return e.Date.now();
  };
  return Fu = t, Fu;
}
var Bu, pb;
function zL() {
  if (pb) return Bu;
  pb = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Bu = t, Bu;
}
var zu, mb;
function WL() {
  if (mb) return zu;
  mb = 1;
  var e = zL(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return zu = n, zu;
}
var Wu, hb;
function jL() {
  if (hb) return Wu;
  hb = 1;
  var e = WL(), t = Ln(), n = Qo(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (n(c))
      return r;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var d = a.test(c);
    return d || i.test(c) ? s(c.slice(2), d ? 2 : 8) : o.test(c) ? r : +c;
  }
  return Wu = l, Wu;
}
var ju, gb;
function VL() {
  if (gb) return ju;
  gb = 1;
  var e = Ln(), t = BL(), n = jL(), r = "Expected a function", o = Math.max, a = Math.min;
  function i(s, l, c) {
    var f, d, m, h, v, g, b = 0, y = !1, w = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (y = !!c.leading, w = "maxWait" in c, m = w ? o(n(c.maxWait) || 0, l) : m, x = "trailing" in c ? !!c.trailing : x);
    function S(M) {
      var B = f, H = d;
      return f = d = void 0, b = M, h = s.apply(H, B), h;
    }
    function E(M) {
      return b = M, v = setTimeout(T, l), y ? S(M) : h;
    }
    function C(M) {
      var B = M - g, H = M - b, L = l - B;
      return w ? a(L, m - H) : L;
    }
    function _(M) {
      var B = M - g, H = M - b;
      return g === void 0 || B >= l || B < 0 || w && H >= m;
    }
    function T() {
      var M = t();
      if (_(M))
        return N(M);
      v = setTimeout(T, C(M));
    }
    function N(M) {
      return v = void 0, x && f ? S(M) : (f = d = void 0, h);
    }
    function D() {
      v !== void 0 && clearTimeout(v), b = 0, f = g = d = v = void 0;
    }
    function O() {
      return v === void 0 ? h : N(t());
    }
    function k() {
      var M = t(), B = _(M);
      if (f = arguments, d = this, g = M, B) {
        if (v === void 0)
          return E(g);
        if (w)
          return clearTimeout(v), v = setTimeout(T, l), S(g);
      }
      return v === void 0 && (v = setTimeout(T, l)), h;
    }
    return k.cancel = D, k.flush = O, k;
  }
  return ju = i, ju;
}
var Vu, vb;
function HL() {
  if (vb) return Vu;
  vb = 1;
  var e = VL(), t = Ln(), n = "Expected a function";
  function r(o, a, i) {
    var s = !0, l = !0;
    if (typeof o != "function")
      throw new TypeError(n);
    return t(i) && (s = "leading" in i ? !!i.leading : s, l = "trailing" in i ? !!i.trailing : l), e(o, a, {
      leading: s,
      maxWait: a,
      trailing: l
    });
  }
  return Vu = r, Vu;
}
var qL = HL();
const GL = /* @__PURE__ */ nn(qL);
function No(e) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e);
}
function bb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bb(Object(n), !0).forEach(function(r) {
      UL(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bb(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function UL(e, t, n) {
  return t = YL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function YL(e) {
  var t = KL(e, "string");
  return No(t) == "symbol" ? t : t + "";
}
function KL(e, t) {
  if (No(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (No(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XL(e, t) {
  return eF(e) || JL(e, t) || QL(e, t) || ZL();
}
function ZL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QL(e, t) {
  if (e) {
    if (typeof e == "string") return yb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yb(e, t);
  }
}
function yb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function JL(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function eF(e) {
  if (Array.isArray(e)) return e;
}
var tF = /* @__PURE__ */ Lo(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, d = e.minHeight, m = e.maxHeight, h = e.children, v = e.debounce, g = v === void 0 ? 0 : v, b = e.id, y = e.className, w = e.onResize, x = e.style, S = x === void 0 ? {} : x, E = Ve(null), C = Ve();
  C.current = w, sf(t, function() {
    return Object.defineProperty(E.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), E.current;
      },
      configurable: !0
    });
  });
  var _ = gt({
    containerWidth: o.width,
    containerHeight: o.height
  }), T = XL(_, 2), N = T[0], D = T[1], O = Te(function(M, B) {
    D(function(H) {
      var L = Math.round(M), Y = Math.round(B);
      return H.containerWidth === L && H.containerHeight === Y ? H : {
        containerWidth: L,
        containerHeight: Y
      };
    });
  }, []);
  vt(function() {
    var M = function(j) {
      var Q, Z = j[0].contentRect, z = Z.width, I = Z.height;
      O(z, I), (Q = C.current) === null || Q === void 0 || Q.call(C, z, I);
    };
    g > 0 && (M = GL(M, g, {
      trailing: !0,
      leading: !1
    }));
    var B = new ResizeObserver(M), H = E.current.getBoundingClientRect(), L = H.width, Y = H.height;
    return O(L, Y), B.observe(E.current), function() {
      B.disconnect();
    };
  }, [O, g]);
  var k = Mn(function() {
    var M = N.containerWidth, B = N.containerHeight;
    if (M < 0 || B < 0)
      return null;
    Ba(Pa(i) || Pa(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Ba(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var H = Pa(i) ? M : i, L = Pa(l) ? B : l;
    n && n > 0 && (H ? L = H / n : L && (H = L * n), m && L > m && (L = m)), Ba(H > 0 || L > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, H, L, i, l, f, d, n);
    var Y = !Array.isArray(h) && Ek(h.type).endsWith("Chart");
    return P.Children.map(h, function(G) {
      return /* @__PURE__ */ P.isValidElement(G) ? /* @__PURE__ */ g1(G, Ta({
        width: H,
        height: L
      }, Y ? {
        style: Ta({
          height: "100%",
          width: "100%",
          maxHeight: L,
          maxWidth: H
        }, G.props.style)
      } : {})) : G;
    });
  }, [n, h, l, m, d, f, N, i]);
  return /* @__PURE__ */ P.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: bn("recharts-responsive-container", y),
    style: Ta(Ta({}, S), {}, {
      width: i,
      height: l,
      minWidth: f,
      minHeight: d,
      maxHeight: m
    }),
    ref: E
  }, k);
});
const nF = { light: "", dark: ".dark" }, aS = u.createContext(null);
function iS() {
  const e = u.useContext(aS);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function sK({
  id: e,
  className: t,
  children: n,
  config: r,
  ...o
}) {
  const a = u.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ p(aS.Provider, { value: { config: r }, children: /* @__PURE__ */ se(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: R(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ p(rF, { id: i, config: r }),
        /* @__PURE__ */ p(tF, { children: n })
      ]
    }
  ) });
}
const rF = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ p(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(nF).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, lK = Qf;
function cK({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: o = !1,
  hideIndicator: a = !1,
  label: i,
  labelFormatter: s,
  labelClassName: l,
  formatter: c,
  color: f,
  nameKey: d,
  labelKey: m
}) {
  const { config: h } = iS(), v = u.useMemo(() => {
    var S;
    if (o || !(t != null && t.length))
      return null;
    const [b] = t, y = `${m || (b == null ? void 0 : b.dataKey) || (b == null ? void 0 : b.name) || "value"}`, w = Nd(h, b, y), x = !m && typeof i == "string" ? ((S = h[i]) == null ? void 0 : S.label) || i : w == null ? void 0 : w.label;
    return s ? /* @__PURE__ */ p("div", { className: R("font-medium", l), children: s(x, t) }) : x ? /* @__PURE__ */ p("div", { className: R("font-medium", l), children: x }) : null;
  }, [
    i,
    s,
    t,
    o,
    l,
    h,
    m
  ]);
  if (!e || !(t != null && t.length))
    return null;
  const g = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ se(
    "div",
    {
      className: R(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        g ? null : v,
        /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: t.filter((b) => b.type !== "none").map((b, y) => {
          const w = `${d || b.name || b.dataKey || "value"}`, x = Nd(h, b, w), S = f || b.payload.fill || b.color;
          return /* @__PURE__ */ p(
            "div",
            {
              className: R(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: c && (b == null ? void 0 : b.value) !== void 0 && b.name ? c(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ se(yt, { children: [
                x != null && x.icon ? /* @__PURE__ */ p(x.icon, {}) : !a && /* @__PURE__ */ p(
                  "div",
                  {
                    className: R(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": g && r === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": S,
                      "--color-border": S
                    }
                  }
                ),
                /* @__PURE__ */ se(
                  "div",
                  {
                    className: R(
                      "flex flex-1 justify-between leading-none",
                      g ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ se("div", { className: "grid gap-1.5", children: [
                        g ? v : null,
                        /* @__PURE__ */ p("span", { className: "text-muted-foreground", children: (x == null ? void 0 : x.label) || b.name })
                      ] }),
                      b.value && /* @__PURE__ */ p("span", { className: "text-foreground font-mono font-medium tabular-nums", children: b.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            b.dataKey
          );
        }) })
      ]
    }
  );
}
const uK = Xf;
function dK({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: o
}) {
  const { config: a } = iS();
  return n != null && n.length ? /* @__PURE__ */ p(
    "div",
    {
      className: R(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.filter((i) => i.type !== "none").map((i) => {
        const s = `${o || i.dataKey || "value"}`, l = Nd(a, i, s);
        return /* @__PURE__ */ se(
          "div",
          {
            className: R(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              l != null && l.icon && !t ? /* @__PURE__ */ p(l.icon, {}) : /* @__PURE__ */ p(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: i.color
                  }
                }
              ),
              l == null ? void 0 : l.label
            ]
          },
          i.value
        );
      })
    }
  ) : null;
}
function Nd(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function qr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Jo(e) {
  const [t, n] = u.useState(void 0);
  return Le(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
// @__NO_SIDE_EFFECTS__
function oF(e) {
  const t = /* @__PURE__ */ aF(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(sF);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function aF(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = cF(o), s = lF(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var iF = Symbol("radix.slottable");
function sF(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iF;
}
function lF(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function cF(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var uF = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Jf = uF.reduce((e, t) => {
  const n = /* @__PURE__ */ oF(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), qi = "Checkbox", [dF] = Fe(qi), [fF, ep] = dF(qi);
function pF(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: l,
    required: c,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [m, h] = $e({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: qi
  }), [v, g] = u.useState(null), [b, y] = u.useState(null), w = u.useRef(!1), x = v ? !!i || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: m,
    disabled: a,
    setChecked: h,
    control: v,
    setControl: g,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: w,
    required: c,
    defaultChecked: On(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: b,
    setBubbleInput: y
  };
  return /* @__PURE__ */ p(
    fF,
    {
      scope: t,
      ...S,
      children: mF(d) ? d(S) : r
    }
  );
}
var sS = "CheckboxTrigger", lS = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: l,
      required: c,
      setControl: f,
      setChecked: d,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: h,
      bubbleInput: v
    } = ep(sS, e), g = ue(o, f), b = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const w = () => d(b.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, d]), /* @__PURE__ */ p(
      Jf.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": On(l) ? "mixed" : l,
        "aria-required": c,
        "data-state": mS(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: g,
        onKeyDown: q(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: q(n, (y) => {
          d((w) => On(w) ? !0 : !w), v && h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
lS.displayName = sS;
var cS = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l,
      onCheckedChange: c,
      form: f,
      ...d
    } = e;
    return /* @__PURE__ */ p(
      pF,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: c,
        name: r,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ se(yt, { children: [
          /* @__PURE__ */ p(
            lS,
            {
              ...d,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ p(
            pS,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
cS.displayName = qi;
var uS = "CheckboxIndicator", dS = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ep(uS, n);
    return /* @__PURE__ */ p(
      Ie,
      {
        present: r || On(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          Jf.span,
          {
            "data-state": mS(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
dS.displayName = uS;
var fS = "CheckboxBubbleInput", pS = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: l,
      name: c,
      value: f,
      form: d,
      bubbleInput: m,
      setBubbleInput: h
    } = ep(fS, e), v = ue(n, h), g = qr(a), b = Jo(r);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, C = !o.current;
      if (g !== a && E) {
        const _ = new Event("click", { bubbles: C });
        w.indeterminate = On(a), E.call(w, On(a) ? !1 : a), w.dispatchEvent(_);
      }
    }, [m, g, a, o]);
    const y = u.useRef(On(a) ? !1 : a);
    return /* @__PURE__ */ p(
      Jf.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: s,
        disabled: l,
        name: c,
        value: f,
        form: d,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...b,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
pS.displayName = fS;
function mF(e) {
  return typeof e == "function";
}
function On(e) {
  return e === "indeterminate";
}
function mS(e) {
  return On(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    cS,
    {
      "data-slot": "checkbox",
      className: R(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive aria-invalid:border-destructive size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(
        dS,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ p(Fo, { className: "size-3.5" })
        }
      )
    }
  );
}
function pK({
  ...e
}) {
  return /* @__PURE__ */ p(vy, { "data-slot": "collapsible", ...e });
}
function mK({
  ...e
}) {
  return /* @__PURE__ */ p(
    df,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function hK({
  ...e
}) {
  return /* @__PURE__ */ p(
    pf,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
var wb = 1, hF = 0.9, gF = 0.8, vF = 0.17, Hu = 0.1, qu = 0.999, bF = 0.9999, yF = 0.99, wF = /[\\\/_+.#"@\[\(\{&]/, xF = /[\\\/_+.#"@\[\(\{&]/g, SF = /[\s-]/, hS = /[\s-]/g;
function Td(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? wb : yF;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), c = n.indexOf(l, o), f = 0, d, m, h, v; c >= 0; ) d = Td(e, t, n, r, c + 1, a + 1, i), d > f && (c === o ? d *= wb : wF.test(e.charAt(c - 1)) ? (d *= gF, h = e.slice(o, c - 1).match(xF), h && o > 0 && (d *= Math.pow(qu, h.length))) : SF.test(e.charAt(c - 1)) ? (d *= hF, v = e.slice(o, c - 1).match(hS), v && o > 0 && (d *= Math.pow(qu, v.length))) : (d *= vF, o > 0 && (d *= Math.pow(qu, c - o))), e.charAt(c) !== t.charAt(a) && (d *= bF)), (d < Hu && n.charAt(c - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(c - 1) !== r.charAt(a)) && (m = Td(e, t, n, r, c + 1, a + 2, i), m * Hu > d && (d = m * Hu)), d > f && (f = d), c = n.indexOf(l, c + 1);
  return i[s] = f, f;
}
function xb(e) {
  return e.toLowerCase().replace(hS, " ");
}
function CF(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Td(e, t, xb(e), xb(t), 0, 0, {});
}
var ro = '[cmdk-group=""]', Gu = '[cmdk-group-items=""]', _F = '[cmdk-group-heading=""]', gS = '[cmdk-item=""]', Sb = `${gS}:not([aria-disabled="true"])`, Md = "cmdk-item-select", wr = "data-value", EF = (e, t, n) => CF(e, t, n), vS = u.createContext(void 0), ea = () => u.useContext(vS), bS = u.createContext(void 0), tp = () => u.useContext(bS), yS = u.createContext(void 0), wS = u.forwardRef((e, t) => {
  let n = xr(() => {
    var z, I;
    return { search: "", value: (I = (z = e.value) != null ? z : e.defaultValue) != null ? I : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = xr(() => /* @__PURE__ */ new Set()), o = xr(() => /* @__PURE__ */ new Map()), a = xr(() => /* @__PURE__ */ new Map()), i = xr(() => /* @__PURE__ */ new Set()), s = xS(e), { label: l, children: c, value: f, onValueChange: d, filter: m, shouldFilter: h, loop: v, disablePointerSelection: g = !1, vimBindings: b = !0, ...y } = e, w = De(), x = De(), S = De(), E = u.useRef(null), C = $F();
  Jn(() => {
    if (f !== void 0) {
      let z = f.trim();
      n.current.value = z, _.emit();
    }
  }, [f]), Jn(() => {
    C(6, M);
  }, []);
  let _ = u.useMemo(() => ({ subscribe: (z) => (i.current.add(z), () => i.current.delete(z)), snapshot: () => n.current, setState: (z, I, W) => {
    var F, U, $, V;
    if (!Object.is(n.current[z], I)) {
      if (n.current[z] = I, z === "search") k(), D(), C(1, O);
      else if (z === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let X = document.getElementById(S);
          X ? X.focus() : (F = document.getElementById(w)) == null || F.focus();
        }
        if (C(7, () => {
          var X;
          n.current.selectedItemId = (X = B()) == null ? void 0 : X.id, _.emit();
        }), W || C(5, M), ((U = s.current) == null ? void 0 : U.value) !== void 0) {
          let X = I ?? "";
          (V = ($ = s.current).onValueChange) == null || V.call($, X);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((z) => z());
  } }), []), T = u.useMemo(() => ({ value: (z, I, W) => {
    var F;
    I !== ((F = a.current.get(z)) == null ? void 0 : F.value) && (a.current.set(z, { value: I, keywords: W }), n.current.filtered.items.set(z, N(I, W)), C(2, () => {
      D(), _.emit();
    }));
  }, item: (z, I) => (r.current.add(z), I && (o.current.has(I) ? o.current.get(I).add(z) : o.current.set(I, /* @__PURE__ */ new Set([z]))), C(3, () => {
    k(), D(), n.current.value || O(), _.emit();
  }), () => {
    a.current.delete(z), r.current.delete(z), n.current.filtered.items.delete(z);
    let W = B();
    C(4, () => {
      k(), (W == null ? void 0 : W.getAttribute("id")) === z && O(), _.emit();
    });
  }), group: (z) => (o.current.has(z) || o.current.set(z, /* @__PURE__ */ new Set()), () => {
    a.current.delete(z), o.current.delete(z);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: w, inputId: S, labelId: x, listInnerRef: E }), []);
  function N(z, I) {
    var W, F;
    let U = (F = (W = s.current) == null ? void 0 : W.filter) != null ? F : EF;
    return z ? U(z, n.current.search, I) : 0;
  }
  function D() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let z = n.current.filtered.items, I = [];
    n.current.filtered.groups.forEach((F) => {
      let U = o.current.get(F), $ = 0;
      U.forEach((V) => {
        let X = z.get(V);
        $ = Math.max(X, $);
      }), I.push([F, $]);
    });
    let W = E.current;
    H().sort((F, U) => {
      var $, V;
      let X = F.getAttribute("id"), ee = U.getAttribute("id");
      return (($ = z.get(ee)) != null ? $ : 0) - ((V = z.get(X)) != null ? V : 0);
    }).forEach((F) => {
      let U = F.closest(Gu);
      U ? U.appendChild(F.parentElement === U ? F : F.closest(`${Gu} > *`)) : W.appendChild(F.parentElement === W ? F : F.closest(`${Gu} > *`));
    }), I.sort((F, U) => U[1] - F[1]).forEach((F) => {
      var U;
      let $ = (U = E.current) == null ? void 0 : U.querySelector(`${ro}[${wr}="${encodeURIComponent(F[0])}"]`);
      $ == null || $.parentElement.appendChild($);
    });
  }
  function O() {
    let z = H().find((W) => W.getAttribute("aria-disabled") !== "true"), I = z == null ? void 0 : z.getAttribute(wr);
    _.setState("value", I || void 0);
  }
  function k() {
    var z, I, W, F;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (let $ of r.current) {
      let V = (I = (z = a.current.get($)) == null ? void 0 : z.value) != null ? I : "", X = (F = (W = a.current.get($)) == null ? void 0 : W.keywords) != null ? F : [], ee = N(V, X);
      n.current.filtered.items.set($, ee), ee > 0 && U++;
    }
    for (let [$, V] of o.current) for (let X of V) if (n.current.filtered.items.get(X) > 0) {
      n.current.filtered.groups.add($);
      break;
    }
    n.current.filtered.count = U;
  }
  function M() {
    var z, I, W;
    let F = B();
    F && (((z = F.parentElement) == null ? void 0 : z.firstChild) === F && ((W = (I = F.closest(ro)) == null ? void 0 : I.querySelector(_F)) == null || W.scrollIntoView({ block: "nearest" })), F.scrollIntoView({ block: "nearest" }));
  }
  function B() {
    var z;
    return (z = E.current) == null ? void 0 : z.querySelector(`${gS}[aria-selected="true"]`);
  }
  function H() {
    var z;
    return Array.from(((z = E.current) == null ? void 0 : z.querySelectorAll(Sb)) || []);
  }
  function L(z) {
    let I = H()[z];
    I && _.setState("value", I.getAttribute(wr));
  }
  function Y(z) {
    var I;
    let W = B(), F = H(), U = F.findIndex((V) => V === W), $ = F[U + z];
    (I = s.current) != null && I.loop && ($ = U + z < 0 ? F[F.length - 1] : U + z === F.length ? F[0] : F[U + z]), $ && _.setState("value", $.getAttribute(wr));
  }
  function G(z) {
    let I = B(), W = I == null ? void 0 : I.closest(ro), F;
    for (; W && !F; ) W = z > 0 ? IF(W, ro) : kF(W, ro), F = W == null ? void 0 : W.querySelector(Sb);
    F ? _.setState("value", F.getAttribute(wr)) : Y(z);
  }
  let j = () => L(H().length - 1), Q = (z) => {
    z.preventDefault(), z.metaKey ? j() : z.altKey ? G(1) : Y(1);
  }, Z = (z) => {
    z.preventDefault(), z.metaKey ? L(0) : z.altKey ? G(-1) : Y(-1);
  };
  return u.createElement(rt.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (z) => {
    var I;
    (I = y.onKeyDown) == null || I.call(y, z);
    let W = z.nativeEvent.isComposing || z.keyCode === 229;
    if (!(z.defaultPrevented || W)) switch (z.key) {
      case "n":
      case "j": {
        b && z.ctrlKey && Q(z);
        break;
      }
      case "ArrowDown": {
        Q(z);
        break;
      }
      case "p":
      case "k": {
        b && z.ctrlKey && Z(z);
        break;
      }
      case "ArrowUp": {
        Z(z);
        break;
      }
      case "Home": {
        z.preventDefault(), L(0);
        break;
      }
      case "End": {
        z.preventDefault(), j();
        break;
      }
      case "Enter": {
        z.preventDefault();
        let F = B();
        if (F) {
          let U = new Event(Md);
          F.dispatchEvent(U);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: T.inputId, id: T.labelId, style: FF }, l), Gi(e, (z) => u.createElement(bS.Provider, { value: _ }, u.createElement(vS.Provider, { value: T }, z))));
}), PF = u.forwardRef((e, t) => {
  var n, r;
  let o = De(), a = u.useRef(null), i = u.useContext(yS), s = ea(), l = xS(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  Jn(() => {
    if (!c) return s.item(o, i == null ? void 0 : i.id);
  }, [c]);
  let f = SS(o, a, [e.value, e.children, a], e.keywords), d = tp(), m = An((C) => C.value && C.value === f.current), h = An((C) => c || s.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let C = a.current;
    if (!(!C || e.disabled)) return C.addEventListener(Md, v), () => C.removeEventListener(Md, v);
  }, [h, e.onSelect, e.disabled]);
  function v() {
    var C, _;
    g(), (_ = (C = l.current).onSelect) == null || _.call(C, f.current);
  }
  function g() {
    d.setState("value", f.current, !0);
  }
  if (!h) return null;
  let { disabled: b, value: y, onSelect: w, forceMount: x, keywords: S, ...E } = e;
  return u.createElement(rt.div, { ref: ye(a, t), ...E, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!m, "data-disabled": !!b, "data-selected": !!m, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : g, onClick: b ? void 0 : v }, e.children);
}), RF = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = De(), s = u.useRef(null), l = u.useRef(null), c = De(), f = ea(), d = An((h) => o || f.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  Jn(() => f.group(i), []), SS(i, s, [e.value, e.heading, l]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(rt.div, { ref: ye(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), Gi(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u.createElement(yS.Provider, { value: m }, h))));
}), NF = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = An((i) => !i.search);
  return !n && !a ? null : u.createElement(rt.div, { ref: ye(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), TF = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = tp(), i = An((c) => c.search), s = An((c) => c.selectedItemId), l = ea();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(rt.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), MF = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = An((c) => c.selectedItemId), l = ea();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, f = a.current, d, m = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          f.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(d), m.unobserve(c);
      };
    }
  }, []), u.createElement(rt.div, { ref: ye(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, Gi(e, (c) => u.createElement("div", { ref: ye(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), OF = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(jo, { open: n, onOpenChange: r }, u.createElement(Vo, { container: i }, u.createElement(Ho, { "cmdk-overlay": "", className: o }), u.createElement(qo, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(wS, { ref: t, ...s }))));
}), AF = u.forwardRef((e, t) => An((n) => n.filtered.count === 0) ? u.createElement(rt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), DF = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(rt.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Gi(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), ur = Object.assign(wS, { List: MF, Item: PF, Input: TF, Group: RF, Separator: NF, Dialog: OF, Empty: AF, Loading: DF });
function IF(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function kF(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function xS(e) {
  let t = u.useRef(e);
  return Jn(() => {
    t.current = e;
  }), t;
}
var Jn = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function xr(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function An(e) {
  let t = tp(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function SS(e, t, n, r = []) {
  let o = u.useRef(), a = ea();
  return Jn(() => {
    var i;
    let s = (() => {
      var c;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (c = f.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(wr, s), o.current = s;
  }), o;
}
var $F = () => {
  let [e, t] = u.useState(), n = xr(() => /* @__PURE__ */ new Map());
  return Jn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function LF(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Gi({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(LF(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var FF = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function BF({
  ...e
}) {
  return /* @__PURE__ */ p(jo, { "data-slot": "dialog", ...e });
}
function gK({
  ...e
}) {
  return /* @__PURE__ */ p(Ti, { "data-slot": "dialog-trigger", ...e });
}
function zF({
  ...e
}) {
  return /* @__PURE__ */ p(Vo, { "data-slot": "dialog-portal", ...e });
}
function vK({
  ...e
}) {
  return /* @__PURE__ */ p(ir, { "data-slot": "dialog-close", ...e });
}
function WF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Ho,
    {
      "data-slot": "dialog-overlay",
      className: R(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function jF({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ se(zF, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ p(WF, {}),
    /* @__PURE__ */ se(
      qo,
      {
        "data-slot": "dialog-content",
        className: R(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ se(
            ir,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ p(Dy, {}),
                /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function VF({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "dialog-header",
      className: R("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function bK({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "dialog-footer",
      className: R(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function HF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Mi,
    {
      "data-slot": "dialog-title",
      className: R("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function qF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Oi,
    {
      "data-slot": "dialog-description",
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function GF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ur,
    {
      "data-slot": "command",
      className: R(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function yK({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: r,
  showCloseButton: o = !0,
  ...a
}) {
  return /* @__PURE__ */ se(BF, { ...a, children: [
    /* @__PURE__ */ se(VF, { className: "sr-only", children: [
      /* @__PURE__ */ p(HF, { children: e }),
      /* @__PURE__ */ p(qF, { children: t })
    ] }),
    /* @__PURE__ */ p(
      jF,
      {
        className: R("overflow-hidden p-0", r),
        showCloseButton: o,
        children: /* @__PURE__ */ p(GF, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function wK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ p(jR, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ p(
          ur.Input,
          {
            "data-slot": "command-input",
            className: R(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function xK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ur.List,
    {
      "data-slot": "command-list",
      className: R(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function SK({
  ...e
}) {
  return /* @__PURE__ */ p(
    ur.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function CK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ur.Group,
    {
      "data-slot": "command-group",
      className: R(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function _K({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ur.Separator,
    {
      "data-slot": "command-separator",
      className: R("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function EK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ur.Item,
    {
      "data-slot": "command-item",
      className: R(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function PK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "command-shortcut",
      className: R(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function UF(e) {
  const t = /* @__PURE__ */ YF(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(XF);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function YF(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = QF(o), s = ZF(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var KF = Symbol("radix.slottable");
function XF(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === KF;
}
function ZF(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function QF(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var JF = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], eB = JF.reduce((e, t) => {
  const n = /* @__PURE__ */ UF(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
const tB = ["top", "right", "bottom", "left"], Dn = Math.min, ht = Math.max, ni = Math.round, Ma = Math.floor, en = (e) => ({
  x: e,
  y: e
}), nB = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rB = {
  start: "end",
  end: "start"
};
function Od(e, t, n) {
  return ht(e, Dn(t, n));
}
function yn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wn(e) {
  return e.split("-")[0];
}
function Gr(e) {
  return e.split("-")[1];
}
function np(e) {
  return e === "x" ? "y" : "x";
}
function rp(e) {
  return e === "y" ? "height" : "width";
}
const oB = /* @__PURE__ */ new Set(["top", "bottom"]);
function Jt(e) {
  return oB.has(wn(e)) ? "y" : "x";
}
function op(e) {
  return np(Jt(e));
}
function aB(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gr(e), o = op(e), a = rp(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ri(i)), [i, ri(i)];
}
function iB(e) {
  const t = ri(e);
  return [Ad(e), t, Ad(t)];
}
function Ad(e) {
  return e.replace(/start|end/g, (t) => rB[t]);
}
const Cb = ["left", "right"], _b = ["right", "left"], sB = ["top", "bottom"], lB = ["bottom", "top"];
function cB(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? _b : Cb : t ? Cb : _b;
    case "left":
    case "right":
      return t ? sB : lB;
    default:
      return [];
  }
}
function uB(e, t, n, r) {
  const o = Gr(e);
  let a = cB(wn(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ad)))), a;
}
function ri(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nB[t]);
}
function dB(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function CS(e) {
  return typeof e != "number" ? dB(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function oi(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Eb(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Jt(t), i = op(t), s = rp(i), l = wn(t), c = a === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gr(t)) {
    case "start":
      h[i] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += m * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const fB = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Eb(c, r, l), m = r, h = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: y
    } = s[g], {
      x: w,
      y: x,
      data: S,
      reset: E
    } = await y({
      x: f,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, d = x ?? d, h = {
      ...h,
      [b]: {
        ...h[b],
        ...S
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (c = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: f,
      y: d
    } = Eb(c, m, l)), g = -1);
  }
  return {
    x: f,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function To(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = yn(t, e), v = CS(h), b = s[m ? d === "floating" ? "reference" : "floating" : d], y = oi(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = oi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (y.top - E.top + v.top) / S.y,
    bottom: (E.bottom - y.bottom + v.bottom) / S.y,
    left: (y.left - E.left + v.left) / S.x,
    right: (E.right - y.right + v.right) / S.x
  };
}
const pB = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = yn(e, t) || {};
    if (c == null)
      return {};
    const d = CS(f), m = {
      x: n,
      y: r
    }, h = op(o), v = rp(h), g = await i.getDimensions(c), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", S = a.reference[v] + a.reference[h] - m[h] - a.floating[v], E = m[h] - a.reference[h], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let _ = C ? C[x] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(C))) && (_ = s.floating[x] || a.floating[v]);
    const T = S / 2 - E / 2, N = _ / 2 - g[v] / 2 - 1, D = Dn(d[y], N), O = Dn(d[w], N), k = D, M = _ - g[v] - O, B = _ / 2 - g[v] / 2 + T, H = Od(k, B, M), L = !l.arrow && Gr(o) != null && B !== H && a.reference[v] / 2 - (B < k ? D : O) - g[v] / 2 < 0, Y = L ? B < k ? B - k : B - M : 0;
    return {
      [h]: m[h] + Y,
      data: {
        [h]: H,
        centerOffset: B - H - Y,
        ...L && {
          alignmentOffset: Y
        }
      },
      reset: L
    };
  }
}), mB = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = yn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = wn(o), w = Jt(s), x = wn(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), E = m || (x || !g ? [ri(s)] : iB(s)), C = v !== "none";
      !m && C && E.push(...uB(s, g, v, S));
      const _ = [s, ...E], T = await To(t, b), N = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && N.push(T[y]), d) {
        const B = aB(o, i, S);
        N.push(T[B[0]], T[B[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: N
      }], !N.every((B) => B <= 0)) {
        var O, k;
        const B = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, H = _[B];
        if (H && (!(d === "alignment" ? w !== Jt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((G) => Jt(G.placement) === w ? G.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: D
            },
            reset: {
              placement: H
            }
          };
        let L = (k = D.filter((Y) => Y.overflows[0] <= 0).sort((Y, G) => Y.overflows[1] - G.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var M;
              const Y = (M = D.filter((G) => {
                if (C) {
                  const j = Jt(G.placement);
                  return j === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((j) => j > 0).reduce((j, Q) => j + Q, 0)]).sort((G, j) => G[1] - j[1])[0]) == null ? void 0 : M[0];
              Y && (L = Y);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Pb(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rb(e) {
  return tB.some((t) => e[t] >= 0);
}
const hB = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = yn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await To(t, {
            ...o,
            elementContext: "reference"
          }), i = Pb(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Rb(i)
            }
          };
        }
        case "escaped": {
          const a = await To(t, {
            ...o,
            altBoundary: !0
          }), i = Pb(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Rb(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, _S = /* @__PURE__ */ new Set(["left", "top"]);
async function gB(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = wn(n), s = Gr(n), l = Jt(n) === "y", c = _S.has(i) ? -1 : 1, f = a && l ? -1 : 1, d = yn(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), l ? {
    x: h * f,
    y: m * c
  } : {
    x: m * c,
    y: h * f
  };
}
const vB = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await gB(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, bB = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = yn(e, t), c = {
        x: n,
        y: r
      }, f = await To(t, l), d = Jt(wn(o)), m = np(d);
      let h = c[m], v = c[d];
      if (a) {
        const b = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = h + f[b], x = h - f[y];
        h = Od(w, h, x);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = v + f[b], x = v - f[y];
        v = Od(w, v, x);
      }
      const g = s.fn({
        ...t,
        [m]: h,
        [d]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [m]: a,
            [d]: i
          }
        }
      };
    }
  };
}, yB = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = yn(e, t), f = {
        x: n,
        y: r
      }, d = Jt(o), m = np(d);
      let h = f[m], v = f[d];
      const g = yn(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const x = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[x] + b.mainAxis, E = a.reference[m] + a.reference[x] - b.mainAxis;
        h < S ? h = S : h > E && (h = E);
      }
      if (c) {
        var y, w;
        const x = m === "y" ? "width" : "height", S = _S.has(wn(o)), E = a.reference[d] - a.floating[x] + (S && ((y = i.offset) == null ? void 0 : y[d]) || 0) + (S ? 0 : b.crossAxis), C = a.reference[d] + a.reference[x] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (S ? b.crossAxis : 0);
        v < E ? v = E : v > C && (v = C);
      }
      return {
        [m]: h,
        [d]: v
      };
    }
  };
}, wB = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = yn(e, t), f = await To(t, c), d = wn(o), m = Gr(o), h = Jt(o) === "y", {
        width: v,
        height: g
      } = a.floating;
      let b, y;
      d === "top" || d === "bottom" ? (b = d, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, b = m === "end" ? "top" : "bottom");
      const w = g - f.top - f.bottom, x = v - f.left - f.right, S = Dn(g - f[b], w), E = Dn(v - f[y], x), C = !t.middlewareData.shift;
      let _ = S, T = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = w), C && !m) {
        const D = ht(f.left, 0), O = ht(f.right, 0), k = ht(f.top, 0), M = ht(f.bottom, 0);
        h ? T = v - 2 * (D !== 0 || O !== 0 ? D + O : ht(f.left, f.right)) : _ = g - 2 * (k !== 0 || M !== 0 ? k + M : ht(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: _
      });
      const N = await i.getDimensions(s.floating);
      return v !== N.width || g !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ui() {
  return typeof window < "u";
}
function Ur(e) {
  return ES(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function an(e) {
  var t;
  return (t = (ES(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ES(e) {
  return Ui() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function Bt(e) {
  return Ui() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function tn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function Nb(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
const xB = /* @__PURE__ */ new Set(["inline", "contents"]);
function ta(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !xB.has(o);
}
const SB = /* @__PURE__ */ new Set(["table", "td", "th"]);
function CB(e) {
  return SB.has(Ur(e));
}
const _B = [":popover-open", ":modal"];
function Yi(e) {
  return _B.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const EB = ["transform", "translate", "scale", "rotate", "perspective"], PB = ["transform", "translate", "scale", "rotate", "perspective", "filter"], RB = ["paint", "layout", "strict", "content"];
function ap(e) {
  const t = ip(), n = Bt(e) ? zt(e) : e;
  return EB.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || PB.some((r) => (n.willChange || "").includes(r)) || RB.some((r) => (n.contain || "").includes(r));
}
function NB(e) {
  let t = In(e);
  for (; tn(t) && !kr(t); ) {
    if (ap(t))
      return t;
    if (Yi(t))
      return null;
    t = In(t);
  }
  return null;
}
function ip() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const TB = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function kr(e) {
  return TB.has(Ur(e));
}
function zt(e) {
  return bt(e).getComputedStyle(e);
}
function Ki(e) {
  return Bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (Ur(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nb(e) && e.host || // Fallback.
    an(e)
  );
  return Nb(t) ? t.host : t;
}
function PS(e) {
  const t = In(e);
  return kr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && ta(t) ? t : PS(t);
}
function Mo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = PS(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bt(o);
  if (a) {
    const s = Dd(i);
    return t.concat(i, i.visualViewport || [], ta(o) ? o : [], s && n ? Mo(s) : []);
  }
  return t.concat(o, Mo(o, [], n));
}
function Dd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function RS(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = ni(n) !== a || ni(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function sp(e) {
  return Bt(e) ? e : e.contextElement;
}
function Rr(e) {
  const t = sp(e);
  if (!tn(t))
    return en(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = RS(t);
  let i = (a ? ni(n.width) : n.width) / r, s = (a ? ni(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const MB = /* @__PURE__ */ en(0);
function NS(e) {
  const t = bt(e);
  return !ip() || !t.visualViewport ? MB : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function OB(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = sp(e);
  let i = en(1);
  t && (r ? Bt(r) && (i = Rr(r)) : i = Rr(e));
  const s = OB(a, n, r) ? NS(a) : en(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, f = o.width / i.x, d = o.height / i.y;
  if (a) {
    const m = bt(a), h = r && Bt(r) ? bt(r) : r;
    let v = m, g = Dd(v);
    for (; g && r && h !== v; ) {
      const b = Rr(g), y = g.getBoundingClientRect(), w = zt(g), x = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = y.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, f *= b.x, d *= b.y, l += x, c += S, v = bt(g), g = Dd(v);
    }
  }
  return oi({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function Xi(e, t) {
  const n = Ki(e).scrollLeft;
  return t ? t.left + n : er(an(e)).left + n;
}
function TS(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Xi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function AB(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = an(r), s = t ? Yi(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = en(1);
  const f = en(0), d = tn(r);
  if ((d || !d && !a) && ((Ur(r) !== "body" || ta(i)) && (l = Ki(r)), tn(r))) {
    const h = er(r);
    c = Rr(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const m = i && !d && !a ? TS(i, l) : en(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + m.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + m.y
  };
}
function DB(e) {
  return Array.from(e.getClientRects());
}
function IB(e) {
  const t = an(e), n = Ki(e), r = e.ownerDocument.body, o = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Xi(e);
  const s = -n.scrollTop;
  return zt(r).direction === "rtl" && (i += ht(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const Tb = 25;
function kB(e, t) {
  const n = bt(e), r = an(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const f = ip();
    (!f || f && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const c = Xi(r);
  if (c <= 0) {
    const f = r.ownerDocument, d = f.body, m = getComputedStyle(d), h = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, v = Math.abs(r.clientWidth - d.clientWidth - h);
    v <= Tb && (a -= v);
  } else c <= Tb && (a += c);
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const $B = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function LB(e, t) {
  const n = er(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = tn(e) ? Rr(e) : en(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Mb(e, t, n) {
  let r;
  if (t === "viewport")
    r = kB(e, n);
  else if (t === "document")
    r = IB(an(e));
  else if (Bt(t))
    r = LB(t, n);
  else {
    const o = NS(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return oi(r);
}
function MS(e, t) {
  const n = In(e);
  return n === t || !Bt(n) || kr(n) ? !1 : zt(n).position === "fixed" || MS(n, t);
}
function FB(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Mo(e, [], !1).filter((s) => Bt(s) && Ur(s) !== "body"), o = null;
  const a = zt(e).position === "fixed";
  let i = a ? In(e) : e;
  for (; Bt(i) && !kr(i); ) {
    const s = zt(i), l = ap(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && $B.has(o.position) || ta(i) && !l && MS(e, i)) ? r = r.filter((f) => f !== i) : o = s, i = In(i);
  }
  return t.set(e, r), r;
}
function BB(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Yi(t) ? [] : FB(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, f) => {
    const d = Mb(t, f, o);
    return c.top = ht(d.top, c.top), c.right = Dn(d.right, c.right), c.bottom = Dn(d.bottom, c.bottom), c.left = ht(d.left, c.left), c;
  }, Mb(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function zB(e) {
  const {
    width: t,
    height: n
  } = RS(e);
  return {
    width: t,
    height: n
  };
}
function WB(e, t, n) {
  const r = tn(t), o = an(t), a = n === "fixed", i = er(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = en(0);
  function c() {
    l.x = Xi(o);
  }
  if (r || !r && !a)
    if ((Ur(t) !== "body" || ta(o)) && (s = Ki(t)), r) {
      const h = er(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  a && !r && o && c();
  const f = o && !r && !a ? TS(o, s) : en(0), d = i.left + s.scrollLeft - l.x - f.x, m = i.top + s.scrollTop - l.y - f.y;
  return {
    x: d,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Uu(e) {
  return zt(e).position === "static";
}
function Ob(e, t) {
  if (!tn(e) || zt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return an(e) === n && (n = n.ownerDocument.body), n;
}
function OS(e, t) {
  const n = bt(e);
  if (Yi(e))
    return n;
  if (!tn(e)) {
    let o = In(e);
    for (; o && !kr(o); ) {
      if (Bt(o) && !Uu(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = Ob(e, t);
  for (; r && CB(r) && Uu(r); )
    r = Ob(r, t);
  return r && kr(r) && Uu(r) && !ap(r) ? n : r || NB(e) || n;
}
const jB = async function(e) {
  const t = this.getOffsetParent || OS, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: WB(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function VB(e) {
  return zt(e).direction === "rtl";
}
const HB = {
  convertOffsetParentRelativeRectToViewportRelativeRect: AB,
  getDocumentElement: an,
  getClippingRect: BB,
  getOffsetParent: OS,
  getElementRects: jB,
  getClientRects: DB,
  getDimensions: zB,
  getScale: Rr,
  isElement: Bt,
  isRTL: VB
};
function AS(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qB(e, t) {
  let n = null, r;
  const o = an(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: m,
      height: h
    } = c;
    if (s || t(), !m || !h)
      return;
    const v = Ma(d), g = Ma(o.clientWidth - (f + m)), b = Ma(o.clientHeight - (d + h)), y = Ma(f), x = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: ht(0, Dn(1, l)) || 1
    };
    let S = !0;
    function E(C) {
      const _ = C[0].intersectionRatio;
      if (_ !== l) {
        if (!S)
          return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !AS(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function GB(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = sp(e), f = o || a ? [...c ? Mo(c) : [], ...Mo(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = c && s ? qB(c, n) : null;
  let m = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let v, g = l ? er(e) : null;
  l && b();
  function b() {
    const y = er(e);
    g && !AS(g, y) && n(), g = y, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const UB = vB, YB = bB, KB = mB, XB = wB, ZB = hB, Ab = pB, QB = yB, JB = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: HB,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return fB(e, t, {
    ...o,
    platform: a
  });
};
var ez = typeof document < "u", tz = function() {
}, za = ez ? yi : tz;
function ai(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!ai(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !ai(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function DS(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Db(e, t) {
  const n = DS(e);
  return Math.round(t * n) / n;
}
function Yu(e) {
  const t = u.useRef(e);
  return za(() => {
    t.current = e;
  }), t;
}
function nz(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, d] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = u.useState(r);
  ai(m, r) || h(r);
  const [v, g] = u.useState(null), [b, y] = u.useState(null), w = u.useCallback((G) => {
    G !== C.current && (C.current = G, g(G));
  }, []), x = u.useCallback((G) => {
    G !== _.current && (_.current = G, y(G));
  }, []), S = a || v, E = i || b, C = u.useRef(null), _ = u.useRef(null), T = u.useRef(f), N = l != null, D = Yu(l), O = Yu(o), k = Yu(c), M = u.useCallback(() => {
    if (!C.current || !_.current)
      return;
    const G = {
      placement: t,
      strategy: n,
      middleware: m
    };
    O.current && (G.platform = O.current), JB(C.current, _.current, G).then((j) => {
      const Q = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      B.current && !ai(T.current, Q) && (T.current = Q, zr.flushSync(() => {
        d(Q);
      }));
    });
  }, [m, t, n, O, k]);
  za(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [c]);
  const B = u.useRef(!1);
  za(() => (B.current = !0, () => {
    B.current = !1;
  }), []), za(() => {
    if (S && (C.current = S), E && (_.current = E), S && E) {
      if (D.current)
        return D.current(S, E, M);
      M();
    }
  }, [S, E, M, D, N]);
  const H = u.useMemo(() => ({
    reference: C,
    floating: _,
    setReference: w,
    setFloating: x
  }), [w, x]), L = u.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), Y = u.useMemo(() => {
    const G = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return G;
    const j = Db(L.floating, f.x), Q = Db(L.floating, f.y);
    return s ? {
      ...G,
      transform: "translate(" + j + "px, " + Q + "px)",
      ...DS(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: Q
    };
  }, [n, s, L.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: M,
    refs: H,
    elements: L,
    floatingStyles: Y
  }), [f, M, H, L, Y]);
}
const rz = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ab({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ab({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, oz = (e, t) => ({
  ...UB(e),
  options: [e, t]
}), az = (e, t) => ({
  ...YB(e),
  options: [e, t]
}), iz = (e, t) => ({
  ...QB(e),
  options: [e, t]
}), sz = (e, t) => ({
  ...KB(e),
  options: [e, t]
}), lz = (e, t) => ({
  ...XB(e),
  options: [e, t]
}), cz = (e, t) => ({
  ...ZB(e),
  options: [e, t]
}), uz = (e, t) => ({
  ...rz(e),
  options: [e, t]
});
// @__NO_SIDE_EFFECTS__
function dz(e) {
  const t = /* @__PURE__ */ fz(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(mz);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function fz(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = gz(o), s = hz(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pz = Symbol("radix.slottable");
function mz(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pz;
}
function hz(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function gz(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vz = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], bz = vz.reduce((e, t) => {
  const n = /* @__PURE__ */ dz(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), yz = "Arrow", IS = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p(
    bz.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
IS.displayName = yz;
var wz = IS;
// @__NO_SIDE_EFFECTS__
function xz(e) {
  const t = /* @__PURE__ */ Sz(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(_z);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Sz(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Pz(o), s = Ez(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Cz = Symbol("radix.slottable");
function _z(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cz;
}
function Ez(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Pz(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Rz = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], kS = Rz.reduce((e, t) => {
  const n = /* @__PURE__ */ xz(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), lp = "Popper", [$S, sn] = Fe(lp), [Nz, LS] = $S(lp), FS = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ p(Nz, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
FS.displayName = lp;
var BS = "PopperAnchor", zS = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = LS(BS, n), i = u.useRef(null), s = ue(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p(kS.div, { ...o, ref: s });
  }
);
zS.displayName = BS;
var cp = "PopperContent", [Tz, Mz] = $S(cp), WS = u.forwardRef(
  (e, t) => {
    var $, V, X, ee, te, K;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...g
    } = e, b = LS(cp, n), [y, w] = u.useState(null), x = ue(t, (oe) => w(oe)), [S, E] = u.useState(null), C = Jo(S), _ = (C == null ? void 0 : C.width) ?? 0, T = (C == null ? void 0 : C.height) ?? 0, N = r + (a !== "center" ? "-" + a : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(c) ? c : [c], k = O.length > 0, M = {
      padding: D,
      boundary: O.filter(Az),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: B, floatingStyles: H, placement: L, isPositioned: Y, middlewareData: G } = nz({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...oe) => GB(...oe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        oz({ mainAxis: o + T, alignmentAxis: i }),
        l && az({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? iz() : void 0,
          ...M
        }),
        l && sz({ ...M }),
        lz({
          ...M,
          apply: ({ elements: oe, rects: A, availableWidth: ne, availableHeight: me }) => {
            const { width: he, height: ge } = A.reference, pe = oe.floating.style;
            pe.setProperty("--radix-popper-available-width", `${ne}px`), pe.setProperty("--radix-popper-available-height", `${me}px`), pe.setProperty("--radix-popper-anchor-width", `${he}px`), pe.setProperty("--radix-popper-anchor-height", `${ge}px`);
          }
        }),
        S && uz({ element: S, padding: s }),
        Dz({ arrowWidth: _, arrowHeight: T }),
        m && cz({ strategy: "referenceHidden", ...M })
      ]
    }), [j, Q] = HS(L), Z = Ae(v);
    Le(() => {
      Y && (Z == null || Z());
    }, [Y, Z]);
    const z = ($ = G.arrow) == null ? void 0 : $.x, I = (V = G.arrow) == null ? void 0 : V.y, W = ((X = G.arrow) == null ? void 0 : X.centerOffset) !== 0, [F, U] = u.useState();
    return Le(() => {
      y && U(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: Y ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: F,
          "--radix-popper-transform-origin": [
            (ee = G.transformOrigin) == null ? void 0 : ee.x,
            (te = G.transformOrigin) == null ? void 0 : te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = G.hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p(
          Tz,
          {
            scope: n,
            placedSide: j,
            onArrowChange: E,
            arrowX: z,
            arrowY: I,
            shouldHideArrow: W,
            children: /* @__PURE__ */ p(
              kS.div,
              {
                "data-side": j,
                "data-align": Q,
                ...g,
                ref: x,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
WS.displayName = cp;
var jS = "PopperArrow", Oz = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, VS = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Mz(jS, r), i = Oz[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p(
          wz,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
VS.displayName = jS;
function Az(e) {
  return e !== null;
}
var Dz = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, f] = HS(n), d = { start: "0%", center: "50%", end: "100%" }[f], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let v = "", g = "";
    return c === "bottom" ? (v = i ? d : `${m}px`, g = `${-l}px`) : c === "top" ? (v = i ? d : `${m}px`, g = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, g = i ? d : `${h}px`) : c === "left" && (v = `${r.floating.width + l}px`, g = i ? d : `${h}px`), { data: { x: v, y: g } };
  }
});
function HS(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Yr = FS, Kr = zS, na = WS, ra = VS;
// @__NO_SIDE_EFFECTS__
function qS(e) {
  const t = /* @__PURE__ */ Iz(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find($z);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Iz(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Fz(o), s = Lz(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kz = Symbol("radix.slottable");
function $z(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kz;
}
function Lz(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fz(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Bz = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], oa = Bz.reduce((e, t) => {
  const n = /* @__PURE__ */ qS(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function zz(e, t) {
  e && zr.flushSync(() => e.dispatchEvent(t));
}
// @__NO_SIDE_EFFECTS__
function Wz(e) {
  const t = /* @__PURE__ */ jz(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Hz);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function jz(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Gz(o), s = qz(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Vz = Symbol("radix.slottable");
function Hz(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vz;
}
function qz(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gz(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Uz = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], GS = Uz.reduce((e, t) => {
  const n = /* @__PURE__ */ Wz(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ku = "rovingFocusGroup.onEntryFocus", Yz = { bubbles: !1, cancelable: !0 }, aa = "RovingFocusGroup", [Id, US, Kz] = kn(aa), [Xz, ln] = Fe(
  aa,
  [Kz]
), [Zz, Qz] = Xz(aa), YS = u.forwardRef(
  (e, t) => /* @__PURE__ */ p(Id.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Id.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Jz, { ...e, ref: t }) }) })
);
YS.displayName = aa;
var Jz = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, m = u.useRef(null), h = ue(t, m), v = jt(a), [g, b] = $e({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: aa
  }), [y, w] = u.useState(!1), x = Ae(c), S = US(n), E = u.useRef(!1), [C, _] = u.useState(0);
  return u.useEffect(() => {
    const T = m.current;
    if (T)
      return T.addEventListener(Ku, x), () => T.removeEventListener(Ku, x);
  }, [x]), /* @__PURE__ */ p(
    Zz,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: u.useCallback(
        (T) => b(T),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => w(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => _((T) => T + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => _((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        GS.div,
        {
          tabIndex: y || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: q(e.onFocus, (T) => {
            const N = !E.current;
            if (T.target === T.currentTarget && N && !y) {
              const D = new CustomEvent(Ku, Yz);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const O = S().filter((L) => L.focusable), k = O.find((L) => L.active), M = O.find((L) => L.id === g), H = [k, M, ...O].filter(
                  Boolean
                ).map((L) => L.ref.current);
                ZS(H, f);
              }
            }
            E.current = !1;
          }),
          onBlur: q(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), KS = "RovingFocusGroupItem", XS = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = De(), c = a || l, f = Qz(KS, n), d = f.currentTabStopId === c, m = US(n), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: g } = f;
    return u.useEffect(() => {
      if (r)
        return h(), () => v();
    }, [r, h, v]), /* @__PURE__ */ p(
      Id.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p(
          GS.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: q(e.onMouseDown, (b) => {
              r ? f.onItemFocus(c) : b.preventDefault();
            }),
            onFocus: q(e.onFocus, () => f.onItemFocus(c)),
            onKeyDown: q(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const y = nW(b, f.orientation, f.dir);
              if (y !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let x = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const S = x.indexOf(b.currentTarget);
                  x = f.loop ? rW(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => ZS(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
XS.displayName = KS;
var eW = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tW(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function nW(e, t, n) {
  const r = tW(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return eW[r];
}
function ZS(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rW(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ia = YS, sa = XS, kd = ["Enter", " "], oW = ["ArrowDown", "PageUp", "Home"], QS = ["ArrowUp", "PageDown", "End"], aW = [...oW, ...QS], iW = {
  ltr: [...kd, "ArrowRight"],
  rtl: [...kd, "ArrowLeft"]
}, sW = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, la = "Menu", [Oo, lW, cW] = kn(la), [dr, ca] = Fe(la, [
  cW,
  sn,
  ln
]), ua = sn(), JS = ln(), [e0, Fn] = dr(la), [uW, da] = dr(la), t0 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ua(t), [l, c] = u.useState(null), f = u.useRef(!1), d = Ae(a), m = jt(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p(Yr, { ...s, children: /* @__PURE__ */ p(
    e0,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ p(
        uW,
        {
          scope: t,
          onClose: u.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
t0.displayName = la;
var dW = "MenuAnchor", up = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ua(n);
    return /* @__PURE__ */ p(Kr, { ...o, ...r, ref: t });
  }
);
up.displayName = dW;
var dp = "MenuPortal", [fW, n0] = dr(dp, {
  forceMount: void 0
}), r0 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Fn(dp, t);
  return /* @__PURE__ */ p(fW, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Ie, { present: n || a.open, children: /* @__PURE__ */ p(ar, { asChild: !0, container: o, children: r }) }) });
};
r0.displayName = dp;
var Nt = "MenuContent", [pW, fp] = dr(Nt), o0 = u.forwardRef(
  (e, t) => {
    const n = n0(Nt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Fn(Nt, e.__scopeMenu), i = da(Nt, e.__scopeMenu);
    return /* @__PURE__ */ p(Oo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Ie, { present: r || a.open, children: /* @__PURE__ */ p(Oo.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ p(mW, { ...o, ref: t }) : /* @__PURE__ */ p(hW, { ...o, ref: t }) }) }) });
  }
), mW = u.forwardRef(
  (e, t) => {
    const n = Fn(Nt, e.__scopeMenu), r = u.useRef(null), o = ue(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Ri(a);
    }, []), /* @__PURE__ */ p(
      pp,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), hW = u.forwardRef((e, t) => {
  const n = Fn(Nt, e.__scopeMenu);
  return /* @__PURE__ */ p(
    pp,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), gW = /* @__PURE__ */ qS("MenuContent.ScrollLock"), pp = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: v,
      ...g
    } = e, b = Fn(Nt, n), y = da(Nt, n), w = ua(n), x = JS(n), S = lW(n), [E, C] = u.useState(null), _ = u.useRef(null), T = ue(t, _, b.onContentChange), N = u.useRef(0), D = u.useRef(""), O = u.useRef(0), k = u.useRef(null), M = u.useRef("right"), B = u.useRef(0), H = v ? Wo : u.Fragment, L = v ? { as: gW, allowPinchZoom: !0 } : void 0, Y = (j) => {
      var $, V;
      const Q = D.current + j, Z = S().filter((X) => !X.disabled), z = document.activeElement, I = ($ = Z.find((X) => X.ref.current === z)) == null ? void 0 : $.textValue, W = Z.map((X) => X.textValue), F = NW(W, Q, I), U = (V = Z.find((X) => X.textValue === F)) == null ? void 0 : V.ref.current;
      (function X(ee) {
        D.current = ee, window.clearTimeout(N.current), ee !== "" && (N.current = window.setTimeout(() => X(""), 1e3));
      })(Q), U && setTimeout(() => U.focus());
    };
    u.useEffect(() => () => window.clearTimeout(N.current), []), Ei();
    const G = u.useCallback((j) => {
      var Z, z;
      return M.current === ((Z = k.current) == null ? void 0 : Z.side) && MW(j, (z = k.current) == null ? void 0 : z.area);
    }, []);
    return /* @__PURE__ */ p(
      pW,
      {
        scope: n,
        searchRef: D,
        onItemEnter: u.useCallback(
          (j) => {
            G(j) && j.preventDefault();
          },
          [G]
        ),
        onItemLeave: u.useCallback(
          (j) => {
            var Q;
            G(j) || ((Q = _.current) == null || Q.focus(), C(null));
          },
          [G]
        ),
        onTriggerLeave: u.useCallback(
          (j) => {
            G(j) && j.preventDefault();
          },
          [G]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: u.useCallback((j) => {
          k.current = j;
        }, []),
        children: /* @__PURE__ */ p(H, { ...L, children: /* @__PURE__ */ p(
          Bo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(a, (j) => {
              var Q;
              j.preventDefault(), (Q = _.current) == null || Q.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ p(
              $n,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ p(
                  ia,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: q(l, (j) => {
                      y.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      na,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": x0(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...g,
                        ref: T,
                        style: { outline: "none", ...g.style },
                        onKeyDown: q(g.onKeyDown, (j) => {
                          const Z = j.target.closest("[data-radix-menu-content]") === j.currentTarget, z = j.ctrlKey || j.altKey || j.metaKey, I = j.key.length === 1;
                          Z && (j.key === "Tab" && j.preventDefault(), !z && I && Y(j.key));
                          const W = _.current;
                          if (j.target !== W || !aW.includes(j.key)) return;
                          j.preventDefault();
                          const U = S().filter(($) => !$.disabled).map(($) => $.ref.current);
                          QS.includes(j.key) && U.reverse(), PW(U);
                        }),
                        onBlur: q(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(N.current), D.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          Ao((j) => {
                            const Q = j.target, Z = B.current !== j.clientX;
                            if (j.currentTarget.contains(Q) && Z) {
                              const z = j.clientX > B.current ? "right" : "left";
                              M.current = z, B.current = j.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
o0.displayName = Nt;
var vW = "MenuGroup", mp = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(oa.div, { role: "group", ...r, ref: t });
  }
);
mp.displayName = vW;
var bW = "MenuLabel", a0 = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(oa.div, { ...r, ref: t });
  }
);
a0.displayName = bW;
var ii = "MenuItem", Ib = "menu.itemSelect", Zi = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = da(ii, e.__scopeMenu), s = fp(ii, e.__scopeMenu), l = ue(t, a), c = u.useRef(!1), f = () => {
      const d = a.current;
      if (!n && d) {
        const m = new CustomEvent(Ib, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Ib, (h) => r == null ? void 0 : r(h), { once: !0 }), zz(d, m), m.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ p(
      i0,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: q(e.onClick, f),
        onPointerDown: (d) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, d), c.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (d) => {
          var m;
          c.current || (m = d.currentTarget) == null || m.click();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          const m = s.searchRef.current !== "";
          n || m && d.key === " " || kd.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Zi.displayName = ii;
var i0 = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = fp(ii, n), s = JS(n), l = u.useRef(null), c = ue(t, l), [f, d] = u.useState(!1), [m, h] = u.useState("");
    return u.useEffect(() => {
      const v = l.current;
      v && h((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p(
      Oo.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ p(sa, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ p(
          oa.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: c,
            onPointerMove: q(
              e.onPointerMove,
              Ao((v) => {
                r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              Ao((v) => i.onItemLeave(v))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), yW = "MenuCheckboxItem", s0 = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p(f0, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p(
      Zi,
      {
        role: "menuitemcheckbox",
        "aria-checked": si(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": vp(n),
        onSelect: q(
          o.onSelect,
          () => r == null ? void 0 : r(si(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
s0.displayName = yW;
var l0 = "MenuRadioGroup", [wW, xW] = dr(
  l0,
  { value: void 0, onValueChange: () => {
  } }
), c0 = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Ae(r);
    return /* @__PURE__ */ p(wW, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p(mp, { ...o, ref: t }) });
  }
);
c0.displayName = l0;
var u0 = "MenuRadioItem", d0 = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = xW(u0, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p(f0, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p(
      Zi,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": vp(a),
        onSelect: q(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
d0.displayName = u0;
var hp = "MenuItemIndicator", [f0, SW] = dr(
  hp,
  { checked: !1 }
), p0 = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = SW(hp, n);
    return /* @__PURE__ */ p(
      Ie,
      {
        present: r || si(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          oa.span,
          {
            ...o,
            ref: t,
            "data-state": vp(a.checked)
          }
        )
      }
    );
  }
);
p0.displayName = hp;
var CW = "MenuSeparator", m0 = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(
      oa.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
m0.displayName = CW;
var _W = "MenuArrow", h0 = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ua(n);
    return /* @__PURE__ */ p(ra, { ...o, ...r, ref: t });
  }
);
h0.displayName = _W;
var gp = "MenuSub", [EW, g0] = dr(gp), v0 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Fn(gp, t), i = ua(t), [s, l] = u.useState(null), [c, f] = u.useState(null), d = Ae(o);
  return u.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ p(Yr, { ...i, children: /* @__PURE__ */ p(
    e0,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ p(
        EW,
        {
          scope: t,
          contentId: De(),
          triggerId: De(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
v0.displayName = gp;
var po = "MenuSubTrigger", b0 = u.forwardRef(
  (e, t) => {
    const n = Fn(po, e.__scopeMenu), r = da(po, e.__scopeMenu), o = g0(po, e.__scopeMenu), a = fp(po, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, c = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [s, l]), /* @__PURE__ */ p(up, { asChild: !0, ...c, children: /* @__PURE__ */ p(
      i0,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": x0(n.open),
        ...e,
        ref: ye(t, o.onTriggerChange),
        onClick: (d) => {
          var m;
          (m = e.onClick) == null || m.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          Ao((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Ao((d) => {
            var h, v;
            f();
            const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const g = (v = n.content) == null ? void 0 : v.dataset.side, b = g === "right", y = b ? -5 : 5, w = m[b ? "left" : "right"], x = m[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + y, y: d.clientY },
                  { x: w, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: w, y: m.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (d) => {
          var h;
          const m = a.searchRef.current !== "";
          e.disabled || m && d.key === " " || iW[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
b0.displayName = po;
var y0 = "MenuSubContent", w0 = u.forwardRef(
  (e, t) => {
    const n = n0(Nt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Fn(Nt, e.__scopeMenu), i = da(Nt, e.__scopeMenu), s = g0(y0, e.__scopeMenu), l = u.useRef(null), c = ue(t, l);
    return /* @__PURE__ */ p(Oo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Ie, { present: r || a.open, children: /* @__PURE__ */ p(Oo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(
      pp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var d;
          i.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (f) => {
          var h;
          const d = f.currentTarget.contains(f.target), m = sW[i.dir].includes(f.key);
          d && m && (a.onOpenChange(!1), (h = s.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
w0.displayName = y0;
function x0(e) {
  return e ? "open" : "closed";
}
function si(e) {
  return e === "indeterminate";
}
function vp(e) {
  return si(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function PW(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function RW(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function NW(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = RW(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function TW(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, f = s.y, d = l.x, m = l.y;
    f > r != m > r && n < (d - c) * (r - f) / (m - f) + c && (o = !o);
  }
  return o;
}
function MW(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return TW(n, t);
}
function Ao(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var bp = t0, yp = up, wp = r0, xp = o0, Sp = mp, Cp = a0, _p = Zi, Ep = s0, Pp = c0, Rp = d0, Np = p0, Tp = m0, Mp = h0, Op = v0, Ap = b0, Dp = w0, Ip = "ContextMenu", [OW] = Fe(Ip, [
  ca
]), ot = ca(), [AW, S0] = OW(Ip), C0 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = u.useState(!1), l = ot(t), c = Ae(r), f = u.useCallback(
    (d) => {
      s(d), c(d);
    },
    [c]
  );
  return /* @__PURE__ */ p(
    AW,
    {
      scope: t,
      open: i,
      onOpenChange: f,
      modal: a,
      children: /* @__PURE__ */ p(
        bp,
        {
          ...l,
          dir: o,
          open: i,
          onOpenChange: f,
          modal: a,
          children: n
        }
      )
    }
  );
};
C0.displayName = Ip;
var _0 = "ContextMenuTrigger", E0 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = S0(_0, n), i = ot(n), s = u.useRef({ x: 0, y: 0 }), l = u.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), c = u.useRef(0), f = u.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), d = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return u.useEffect(() => f, [f]), u.useEffect(() => void (r && f()), [r, f]), /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(yp, { ...i, virtualRef: l }),
      /* @__PURE__ */ p(
        eB.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : q(e.onContextMenu, (m) => {
            f(), d(m), m.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : q(
            e.onPointerDown,
            Oa((m) => {
              f(), c.current = window.setTimeout(() => d(m), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : q(e.onPointerMove, Oa(f)),
          onPointerCancel: r ? e.onPointerCancel : q(e.onPointerCancel, Oa(f)),
          onPointerUp: r ? e.onPointerUp : q(e.onPointerUp, Oa(f))
        }
      )
    ] });
  }
);
E0.displayName = _0;
var DW = "ContextMenuPortal", P0 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = ot(t);
  return /* @__PURE__ */ p(wp, { ...r, ...n });
};
P0.displayName = DW;
var R0 = "ContextMenuContent", N0 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = S0(R0, n), a = ot(n), i = u.useRef(!1);
    return /* @__PURE__ */ p(
      xp,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
N0.displayName = R0;
var IW = "ContextMenuGroup", T0 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ p(Sp, { ...o, ...r, ref: t });
  }
);
T0.displayName = IW;
var kW = "ContextMenuLabel", M0 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ p(Cp, { ...o, ...r, ref: t });
  }
);
M0.displayName = kW;
var $W = "ContextMenuItem", O0 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ p(_p, { ...o, ...r, ref: t });
  }
);
O0.displayName = $W;
var LW = "ContextMenuCheckboxItem", A0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Ep, { ...o, ...r, ref: t });
});
A0.displayName = LW;
var FW = "ContextMenuRadioGroup", D0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Pp, { ...o, ...r, ref: t });
});
D0.displayName = FW;
var BW = "ContextMenuRadioItem", I0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Rp, { ...o, ...r, ref: t });
});
I0.displayName = BW;
var zW = "ContextMenuItemIndicator", k0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Np, { ...o, ...r, ref: t });
});
k0.displayName = zW;
var WW = "ContextMenuSeparator", $0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Tp, { ...o, ...r, ref: t });
});
$0.displayName = WW;
var jW = "ContextMenuArrow", VW = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ p(Mp, { ...o, ...r, ref: t });
  }
);
VW.displayName = jW;
var L0 = "ContextMenuSub", F0 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = ot(t), [s, l] = $e({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: L0
  });
  return /* @__PURE__ */ p(Op, { ...i, open: s, onOpenChange: l, children: n });
};
F0.displayName = L0;
var HW = "ContextMenuSubTrigger", B0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(Ap, { ...o, ...r, ref: t });
});
B0.displayName = HW;
var qW = "ContextMenuSubContent", z0 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ p(
    Dp,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
z0.displayName = qW;
function Oa(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var GW = C0, UW = E0, W0 = P0, YW = N0, KW = T0, XW = M0, ZW = O0, QW = A0, JW = D0, ej = I0, j0 = k0, tj = $0, nj = F0, rj = B0, oj = z0;
function RK({
  ...e
}) {
  return /* @__PURE__ */ p(GW, { "data-slot": "context-menu", ...e });
}
function NK({
  ...e
}) {
  return /* @__PURE__ */ p(UW, { "data-slot": "context-menu-trigger", ...e });
}
function TK({
  ...e
}) {
  return /* @__PURE__ */ p(KW, { "data-slot": "context-menu-group", ...e });
}
function MK({
  ...e
}) {
  return /* @__PURE__ */ p(W0, { "data-slot": "context-menu-portal", ...e });
}
function OK({
  ...e
}) {
  return /* @__PURE__ */ p(nj, { "data-slot": "context-menu-sub", ...e });
}
function AK({
  ...e
}) {
  return /* @__PURE__ */ p(
    JW,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function DK({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    rj,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p(jr, { className: "ml-auto" })
      ]
    }
  );
}
function IK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    oj,
    {
      "data-slot": "context-menu-sub-content",
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function kK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(W0, { children: /* @__PURE__ */ p(
    YW,
    {
      "data-slot": "context-menu-content",
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function $K({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p(
    ZW,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function LK({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    QW,
    {
      "data-slot": "context-menu-checkbox-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(j0, { children: /* @__PURE__ */ p(Fo, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function FK({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    ej,
    {
      "data-slot": "context-menu-radio-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(j0, { children: /* @__PURE__ */ p(_i, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function BK({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    XW,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: R(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function zK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    tj,
    {
      "data-slot": "context-menu-separator",
      className: R("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function WK({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: R(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
var aj = (e) => e.type === "checkbox", mo = (e) => e instanceof Date, kp = (e) => e == null;
const V0 = (e) => typeof e == "object";
var tr = (e) => !kp(e) && !Array.isArray(e) && V0(e) && !mo(e), ij = (e) => tr(e) && e.target ? aj(e.target) ? e.target.checked : e.target.value : e, sj = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, lj = (e, t) => e.has(sj(t)), cj = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return tr(t) && t.hasOwnProperty("isPrototypeOf");
}, uj = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function H0(e) {
  if (e instanceof Date)
    return new Date(e);
  const t = typeof FileList < "u" && e instanceof FileList;
  if (uj && (e instanceof Blob || t))
    return e;
  const n = Array.isArray(e);
  if (!n && !(tr(e) && cj(e)))
    return e;
  const r = n ? [] : Object.create(Object.getPrototypeOf(e));
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (r[o] = H0(e[o]));
  return r;
}
var q0 = (e) => /^\w*$/.test(e), $d = (e) => e === void 0, dj = (e) => Array.isArray(e) ? e.filter(Boolean) : [], G0 = (e) => dj(e.replace(/["|']|\]/g, "").split(/\.|\[/)), dt = (e, t, n) => {
  if (!t || !tr(e))
    return n;
  const r = (q0(t) ? [t] : G0(t)).reduce((o, a) => kp(o) ? o : o[a], e);
  return $d(r) || r === e ? $d(e[t]) ? n : e[t] : r;
}, Xu = (e) => typeof e == "boolean", Aa = (e) => typeof e == "function", kb = (e, t, n) => {
  let r = -1;
  const o = q0(t) ? [t] : G0(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let l = n;
    if (r !== i) {
      const c = e[s];
      l = tr(c) || Array.isArray(c) ? c : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const $b = {
  BLUR: "blur",
  CHANGE: "change"
}, Lb = {
  all: "all"
}, $p = P.createContext(null);
$p.displayName = "HookFormContext";
const Qi = () => P.useContext($p), fj = (e) => {
  const { children: t, ...n } = e;
  return P.createElement($p.Provider, { value: n }, t);
};
var pj = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Lb.all && (t._proxyFormState[i] = !r || Lb.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
const U0 = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function Y0(e) {
  const t = Qi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = P.useState(n._formState), l = P.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return U0(() => n._subscribe({
    name: o,
    formState: l.current,
    exact: a,
    callback: (c) => {
      !r && s({
        ...n._formState,
        ...c
      });
    }
  }), [o, r, a]), P.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), P.useMemo(() => pj(i, n, l.current, !1), [i, n]);
}
var mj = (e) => typeof e == "string", Fb = (e, t, n, r, o) => mj(e) ? dt(n, e, o) : Array.isArray(e) ? e.map((a) => dt(n, a)) : n, Bb = (e) => kp(e) || !V0(e);
function Wa(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (Bb(e) || Bb(t))
    return Object.is(e, t);
  if (mo(e) && mo(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  if (n.has(e) || n.has(t))
    return !0;
  n.add(e), n.add(t);
  for (const a of r) {
    const i = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const s = t[a];
      if (mo(i) && mo(s) || tr(i) && tr(s) || Array.isArray(i) && Array.isArray(s) ? !Wa(i, s, n) : !Object.is(i, s))
        return !1;
    }
  }
  return !0;
}
function hj(e) {
  const t = Qi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, l = P.useRef(o), c = P.useRef(s), f = P.useRef(void 0), d = P.useRef(n), m = P.useRef(r);
  c.current = s;
  const [h, v] = P.useState(() => {
    const S = n._getWatch(r, l.current);
    return c.current ? c.current(S) : S;
  }), g = P.useCallback((S) => {
    const E = Fb(r, n._names, S || n._formValues, !1, l.current);
    return c.current ? c.current(E) : E;
  }, [n._formValues, n._names, r]), b = P.useCallback((S) => {
    if (!a) {
      const E = Fb(r, n._names, S || n._formValues, !1, l.current);
      if (c.current) {
        const C = c.current(E);
        Wa(C, f.current) || (v(C), f.current = C);
      } else
        v(E);
    }
  }, [n._formValues, n._names, a, r]);
  U0(() => ((d.current !== n || !Wa(m.current, r)) && (d.current = n, m.current = r, b()), n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (S) => {
      b(S.values);
    }
  })), [n, i, r, b]), P.useEffect(() => n._removeUnmounted());
  const y = d.current !== n, w = m.current, x = P.useMemo(() => {
    if (a)
      return null;
    const S = !y && !Wa(w, r);
    return y || S ? g() : null;
  }, [a, y, r, w, g]);
  return x !== null ? x : h;
}
function gj(e) {
  const t = Qi(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a, defaultValue: i, exact: s = !0 } = e, l = lj(o._names.array, n), c = P.useMemo(() => dt(o._formValues, n, dt(o._defaultValues, n, i)), [o, n, i]), f = hj({
    control: o,
    name: n,
    defaultValue: c,
    exact: s
  }), d = Y0({
    control: o,
    name: n,
    exact: s
  }), m = P.useRef(e), h = P.useRef(void 0), v = P.useRef(o.register(n, {
    ...e.rules,
    value: f,
    ...Xu(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const g = P.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!dt(d.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!dt(d.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!dt(d.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!dt(d.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => dt(d.errors, n)
    }
  }), [d, n]), b = P.useCallback((S) => v.current.onChange({
    target: {
      value: ij(S),
      name: n
    },
    type: $b.CHANGE
  }), [n]), y = P.useCallback(() => v.current.onBlur({
    target: {
      value: dt(o._formValues, n),
      name: n
    },
    type: $b.BLUR
  }), [n, o._formValues]), w = P.useCallback((S) => {
    const E = dt(o._fields, n);
    E && E._f && S && (E._f.ref = {
      focus: () => Aa(S.focus) && S.focus(),
      select: () => Aa(S.select) && S.select(),
      setCustomValidity: (C) => Aa(S.setCustomValidity) && S.setCustomValidity(C),
      reportValidity: () => Aa(S.reportValidity) && S.reportValidity()
    });
  }, [o._fields, n]), x = P.useMemo(() => ({
    name: n,
    value: f,
    ...Xu(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: b,
    onBlur: y,
    ref: w
  }), [n, r, d.disabled, b, y, w, f]);
  return P.useEffect(() => {
    const S = o._options.shouldUnregister || a, E = h.current;
    E && E !== n && !l && o.unregister(E), o.register(n, {
      ...m.current.rules,
      ...Xu(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const C = (_, T) => {
      const N = dt(o._fields, _);
      N && N._f && (N._f.mount = T);
    };
    if (C(n, !0), S) {
      const _ = H0(dt(o._options.defaultValues, n, m.current.defaultValue));
      kb(o._defaultValues, n, _), $d(dt(o._formValues, n)) && kb(o._formValues, n, _);
    }
    return !l && o.register(n), h.current = n, () => {
      (l ? S && !o._state.action : S) ? o.unregister(n) : C(n, !1);
    };
  }, [n, o, l, a]), P.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), P.useMemo(() => ({
    field: x,
    formState: d,
    fieldState: g
  }), [x, d, g]);
}
const vj = (e) => e.render(gj(e));
var bj = "Label", K0 = u.forwardRef((e, t) => /* @__PURE__ */ p(
  rt.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
K0.displayName = bj;
var yj = K0;
function X0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    yj,
    {
      "data-slot": "label",
      className: R(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const jK = fj, Z0 = u.createContext(
  {}
), VK = ({
  ...e
}) => /* @__PURE__ */ p(Z0.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p(vj, { ...e }) }), Ji = () => {
  const e = u.useContext(Z0), t = u.useContext(Q0), { getFieldState: n } = Qi(), r = Y0({ name: e.name }), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Q0 = u.createContext(
  {}
);
function HK({ className: e, ...t }) {
  const n = u.useId();
  return /* @__PURE__ */ p(Q0.Provider, { value: { id: n }, children: /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "form-item",
      className: R("grid gap-2", e),
      ...t
    }
  ) });
}
function qK({
  className: e,
  ...t
}) {
  const { error: n, formItemId: r } = Ji();
  return /* @__PURE__ */ p(
    X0,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: R("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function GK({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: o } = Ji();
  return /* @__PURE__ */ p(
    Ht,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function UK({ className: e, ...t }) {
  const { formDescriptionId: n } = Ji();
  return /* @__PURE__ */ p(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function YK({ className: e, ...t }) {
  const { error: n, formMessageId: r } = Ji(), o = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return o ? /* @__PURE__ */ p(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: R("text-destructive text-sm", e),
      ...t,
      children: o
    }
  ) : null;
}
// @__NO_SIDE_EFFECTS__
function wj(e) {
  const t = /* @__PURE__ */ xj(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Cj);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function xj(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Ej(o), s = _j(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sj = Symbol("radix.slottable");
function Cj(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sj;
}
function _j(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ej(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Pj = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Rj = Pj.reduce((e, t) => {
  const n = /* @__PURE__ */ wj(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Zu, es = "HoverCard", [J0] = Fe(es, [
  sn
]), ts = sn(), [Nj, ns] = J0(es), eC = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, l = ts(t), c = u.useRef(0), f = u.useRef(0), d = u.useRef(!1), m = u.useRef(!1), [h, v] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: es
  }), g = u.useCallback(() => {
    clearTimeout(f.current), c.current = window.setTimeout(() => v(!0), i);
  }, [i, v]), b = u.useCallback(() => {
    clearTimeout(c.current), !d.current && !m.current && (f.current = window.setTimeout(() => v(!1), s));
  }, [s, v]), y = u.useCallback(() => v(!1), [v]);
  return u.useEffect(() => () => {
    clearTimeout(c.current), clearTimeout(f.current);
  }, []), /* @__PURE__ */ p(
    Nj,
    {
      scope: t,
      open: h,
      onOpenChange: v,
      onOpen: g,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: d,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ p(Yr, { ...l, children: n })
    }
  );
};
eC.displayName = es;
var tC = "HoverCardTrigger", nC = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = ns(tC, n), a = ts(n);
    return /* @__PURE__ */ p(Kr, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      Rj.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: q(e.onPointerEnter, ci(o.onOpen)),
        onPointerLeave: q(e.onPointerLeave, ci(o.onClose)),
        onFocus: q(e.onFocus, o.onOpen),
        onBlur: q(e.onBlur, o.onClose),
        onTouchStart: q(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
nC.displayName = tC;
var Lp = "HoverCardPortal", [Tj, Mj] = J0(Lp, {
  forceMount: void 0
}), rC = (e) => {
  const { __scopeHoverCard: t, forceMount: n, children: r, container: o } = e, a = ns(Lp, t);
  return /* @__PURE__ */ p(Tj, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Ie, { present: n || a.open, children: /* @__PURE__ */ p(ar, { asChild: !0, container: o, children: r }) }) });
};
rC.displayName = Lp;
var li = "HoverCardContent", oC = u.forwardRef(
  (e, t) => {
    const n = Mj(li, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = ns(li, e.__scopeHoverCard);
    return /* @__PURE__ */ p(Ie, { present: r || a.open, children: /* @__PURE__ */ p(
      Oj,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: q(e.onPointerEnter, ci(a.onOpen)),
        onPointerLeave: q(e.onPointerLeave, ci(a.onClose)),
        ref: t
      }
    ) });
  }
);
oC.displayName = li;
var Oj = u.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, l = ns(li, n), c = ts(n), f = u.useRef(null), d = ue(t, f), [m, h] = u.useState(!1);
  return u.useEffect(() => {
    if (m) {
      const v = document.body;
      return Zu = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = Zu, v.style.webkitUserSelect = Zu;
      };
    }
  }, [m]), u.useEffect(() => {
    if (f.current) {
      const v = () => {
        h(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", v), () => {
        document.removeEventListener("pointerup", v), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), u.useEffect(() => {
    f.current && Ij(f.current).forEach((g) => g.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ p(
    $n,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: q(a, (v) => {
        v.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ p(
        na,
        {
          ...c,
          ...s,
          onPointerDown: q(s.onPointerDown, (v) => {
            v.currentTarget.contains(v.target) && h(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: d,
          style: {
            ...s.style,
            userSelect: m ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: m ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), Aj = "HoverCardArrow", Dj = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = ts(n);
    return /* @__PURE__ */ p(ra, { ...o, ...r, ref: t });
  }
);
Dj.displayName = Aj;
function ci(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Ij(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var kj = eC, $j = nC, Lj = rC, Fj = oC;
function KK({
  ...e
}) {
  return /* @__PURE__ */ p(kj, { "data-slot": "hover-card", ...e });
}
function XK({
  ...e
}) {
  return /* @__PURE__ */ p($j, { "data-slot": "hover-card-trigger", ...e });
}
function ZK({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ p(Lj, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ p(
    Fj,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function QK({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "kbd",
    {
      "data-slot": "kbd",
      className: R(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function JK({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: R("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function Bj(e) {
  const t = /* @__PURE__ */ zj(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(jj);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function zj(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Hj(o), s = Vj(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wj = Symbol("radix.slottable");
function jj(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wj;
}
function Vj(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Hj(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qj = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], aC = qj.reduce((e, t) => {
  const n = /* @__PURE__ */ Bj(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), fa = "Menubar", [Ld, Gj, Uj] = kn(fa), [iC] = Fe(fa, [
  Uj,
  ln
]), at = ca(), sC = ln(), [Yj, Fp] = iC(fa), lC = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...l
    } = e, c = jt(s), f = sC(n), [d, m] = $e({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: fa
    }), [h, v] = u.useState(null);
    return /* @__PURE__ */ p(
      Yj,
      {
        scope: n,
        value: d,
        onMenuOpen: u.useCallback(
          (g) => {
            m(g), v(g);
          },
          [m]
        ),
        onMenuClose: u.useCallback(() => m(""), [m]),
        onMenuToggle: u.useCallback(
          (g) => {
            m((b) => b ? "" : g), v(g);
          },
          [m]
        ),
        dir: c,
        loop: i,
        children: /* @__PURE__ */ p(Ld.Provider, { scope: n, children: /* @__PURE__ */ p(Ld.Slot, { scope: n, children: /* @__PURE__ */ p(
          ia,
          {
            asChild: !0,
            ...f,
            orientation: "horizontal",
            loop: i,
            dir: c,
            currentTabStopId: h,
            onCurrentTabStopIdChange: v,
            children: /* @__PURE__ */ p(aC.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
lC.displayName = fa;
var Bp = "MenubarMenu", [Kj, cC] = iC(Bp), uC = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = De(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = Fp(Bp, t), s = at(t), l = u.useRef(null), c = u.useRef(!1), f = i.value === a;
  return u.useEffect(() => {
    f || (c.current = !1);
  }, [f]), /* @__PURE__ */ p(
    Kj,
    {
      scope: t,
      value: a,
      triggerId: De(),
      triggerRef: l,
      contentId: De(),
      wasKeyboardTriggerOpenRef: c,
      children: /* @__PURE__ */ p(
        bp,
        {
          ...s,
          open: f,
          onOpenChange: (d) => {
            d || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
uC.displayName = Bp;
var Fd = "MenubarTrigger", dC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = sC(n), i = at(n), s = Fp(Fd, n), l = cC(Fd, n), c = u.useRef(null), f = ue(t, c, l.triggerRef), [d, m] = u.useState(!1), h = s.value === l.value;
    return /* @__PURE__ */ p(Ld.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ p(
      sa,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ p(yp, { asChild: !0, ...i, children: /* @__PURE__ */ p(
          aC.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": h ? l.contentId : void 0,
            "data-highlighted": d ? "" : void 0,
            "data-state": h ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: f,
            onPointerDown: q(e.onPointerDown, (v) => {
              !r && v.button === 0 && v.ctrlKey === !1 && (s.onMenuOpen(l.value), h || v.preventDefault());
            }),
            onPointerEnter: q(e.onPointerEnter, () => {
              var g;
              !!s.value && !h && (s.onMenuOpen(l.value), (g = c.current) == null || g.focus());
            }),
            onKeyDown: q(e.onKeyDown, (v) => {
              r || (["Enter", " "].includes(v.key) && s.onMenuToggle(l.value), v.key === "ArrowDown" && s.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(v.key) && (l.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
            }),
            onFocus: q(e.onFocus, () => m(!0)),
            onBlur: q(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
dC.displayName = Fd;
var Xj = "MenubarPortal", fC = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = at(t);
  return /* @__PURE__ */ p(wp, { ...r, ...n });
};
fC.displayName = Xj;
var Bd = "MenubarContent", pC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = at(n), i = Fp(Bd, n), s = cC(Bd, n), l = Gj(n), c = u.useRef(!1);
    return /* @__PURE__ */ p(
      xp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (f) => {
          var m;
          !!!i.value && !c.current && ((m = s.triggerRef.current) == null || m.focus()), c.current = !1, f.preventDefault();
        }),
        onFocusOutside: q(e.onFocusOutside, (f) => {
          const d = f.target;
          l().some((h) => {
            var v;
            return (v = h.ref.current) == null ? void 0 : v.contains(d);
          }) && f.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, () => {
          c.current = !0;
        }),
        onEntryFocus: (f) => {
          s.wasKeyboardTriggerOpenRef.current || f.preventDefault();
        },
        onKeyDown: q(
          e.onKeyDown,
          (f) => {
            if (["ArrowRight", "ArrowLeft"].includes(f.key)) {
              const d = f.target, m = d.hasAttribute("data-radix-menubar-subtrigger"), h = d.closest("[data-radix-menubar-content]") !== f.currentTarget, g = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
              if (!g && m || h && g) return;
              let w = l().filter((E) => !E.disabled).map((E) => E.value);
              g && w.reverse();
              const x = w.indexOf(s.value);
              w = i.loop ? cV(w, x + 1) : w.slice(x + 1);
              const [S] = w;
              S && i.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
pC.displayName = Bd;
var Zj = "MenubarGroup", mC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Sp, { ...o, ...r, ref: t });
  }
);
mC.displayName = Zj;
var Qj = "MenubarLabel", hC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Cp, { ...o, ...r, ref: t });
  }
);
hC.displayName = Qj;
var Jj = "MenubarItem", gC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(_p, { ...o, ...r, ref: t });
  }
);
gC.displayName = Jj;
var eV = "MenubarCheckboxItem", vC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Ep, { ...o, ...r, ref: t });
  }
);
vC.displayName = eV;
var tV = "MenubarRadioGroup", bC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Pp, { ...o, ...r, ref: t });
  }
);
bC.displayName = tV;
var nV = "MenubarRadioItem", yC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Rp, { ...o, ...r, ref: t });
  }
);
yC.displayName = nV;
var rV = "MenubarItemIndicator", wC = u.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ p(Np, { ...o, ...r, ref: t });
});
wC.displayName = rV;
var oV = "MenubarSeparator", xC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Tp, { ...o, ...r, ref: t });
  }
);
xC.displayName = oV;
var aV = "MenubarArrow", iV = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(Mp, { ...o, ...r, ref: t });
  }
);
iV.displayName = aV;
var SC = "MenubarSub", CC = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = at(t), [s, l] = $e({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: SC
  });
  return /* @__PURE__ */ p(Op, { ...i, open: s, onOpenChange: l, children: n });
};
CC.displayName = SC;
var sV = "MenubarSubTrigger", _C = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(
      Ap,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
_C.displayName = sV;
var lV = "MenubarSubContent", EC = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ p(
      Dp,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
EC.displayName = lV;
function cV(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var uV = lC, dV = uC, fV = dC, pV = fC, mV = pC, hV = mC, gV = hC, vV = gC, bV = vC, yV = bC, wV = yC, PC = wC, xV = xC, SV = CC, CV = _C, _V = EC;
function e8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    uV,
    {
      "data-slot": "menubar",
      className: R(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function t8({
  ...e
}) {
  return /* @__PURE__ */ p(dV, { "data-slot": "menubar-menu", ...e });
}
function n8({
  ...e
}) {
  return /* @__PURE__ */ p(hV, { "data-slot": "menubar-group", ...e });
}
function EV({
  ...e
}) {
  return /* @__PURE__ */ p(pV, { "data-slot": "menubar-portal", ...e });
}
function r8({
  ...e
}) {
  return /* @__PURE__ */ p(yV, { "data-slot": "menubar-radio-group", ...e });
}
function o8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    fV,
    {
      "data-slot": "menubar-trigger",
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function a8({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...o
}) {
  return /* @__PURE__ */ p(EV, { children: /* @__PURE__ */ p(
    mV,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...o
    }
  ) });
}
function i8({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p(
    vV,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function s8({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    bV,
    {
      "data-slot": "menubar-checkbox-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(PC, { children: /* @__PURE__ */ p(Fo, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function l8({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    wV,
    {
      "data-slot": "menubar-radio-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(PC, { children: /* @__PURE__ */ p(_i, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function c8({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    gV,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: R(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function u8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    xV,
    {
      "data-slot": "menubar-separator",
      className: R("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function d8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: R(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function f8({
  ...e
}) {
  return /* @__PURE__ */ p(SV, { "data-slot": "menubar-sub", ...e });
}
function p8({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    CV,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p(jr, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function m8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    _V,
    {
      "data-slot": "menubar-sub-content",
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function h8({
  className: e,
  size: t = "default",
  ...n
}) {
  return /* @__PURE__ */ se(
    "div",
    {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      "data-slot": "native-select-wrapper",
      children: [
        /* @__PURE__ */ p(
          "select",
          {
            "data-slot": "native-select",
            "data-size": t,
            className: R(
              "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1",
              "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive aria-invalid:border-destructive",
              e
            ),
            ...n
          }
        ),
        /* @__PURE__ */ p(
          Wr,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none",
            "aria-hidden": "true",
            "data-slot": "native-select-icon"
          }
        )
      ]
    }
  );
}
function g8({ ...e }) {
  return /* @__PURE__ */ p("option", { "data-slot": "native-select-option", ...e });
}
function v8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: R(e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function PV(e) {
  const t = /* @__PURE__ */ RV(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(TV);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function RV(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = OV(o), s = MV(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var NV = Symbol("radix.slottable");
function TV(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === NV;
}
function MV(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function OV(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var AV = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Wt = AV.reduce((e, t) => {
  const n = /* @__PURE__ */ PV(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function zb(e, t) {
  e && zr.flushSync(() => e.dispatchEvent(t));
}
// @__NO_SIDE_EFFECTS__
function DV(e) {
  const t = /* @__PURE__ */ IV(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find($V);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function IV(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = FV(o), s = LV(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kV = Symbol("radix.slottable");
function $V(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kV;
}
function LV(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function FV(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var BV = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], zV = BV.reduce((e, t) => {
  const n = /* @__PURE__ */ DV(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), RC = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), WV = "VisuallyHidden", NC = u.forwardRef(
  (e, t) => /* @__PURE__ */ p(
    zV.span,
    {
      ...e,
      ref: t,
      style: { ...RC, ...e.style }
    }
  )
);
NC.displayName = WV;
var TC = NC, fr = "NavigationMenu", [zp, MC, jV] = kn(fr), [zd, VV, HV] = kn(fr), [Wp] = Fe(
  fr,
  [jV, HV]
), [qV, Tt] = Wp(fr), [GV, UV] = Wp(fr), OC = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: c,
      ...f
    } = e, [d, m] = u.useState(null), h = ue(t, (N) => m(N)), v = jt(c), g = u.useRef(0), b = u.useRef(0), y = u.useRef(0), [w, x] = u.useState(!0), [S, E] = $e({
      prop: r,
      onChange: (N) => {
        const D = N !== "", O = s > 0;
        D ? (window.clearTimeout(y.current), O && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(N);
      },
      defaultProp: a ?? "",
      caller: fr
    }), C = u.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => E(""), 150);
    }, [E]), _ = u.useCallback(
      (N) => {
        window.clearTimeout(b.current), E(N);
      },
      [E]
    ), T = u.useCallback(
      (N) => {
        S === N ? window.clearTimeout(b.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(b.current), E(N);
        }, i);
      },
      [S, E, i]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ p(
      AC,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: v,
        orientation: l,
        rootNavigationMenu: d,
        onTriggerEnter: (N) => {
          window.clearTimeout(g.current), w ? T(N) : _(N);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), C();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: C,
        onItemSelect: (N) => {
          E((D) => D === N ? "" : N);
        },
        onItemDismiss: () => E(""),
        children: /* @__PURE__ */ p(
          Wt.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: v,
            ...f,
            ref: h
          }
        )
      }
    );
  }
);
OC.displayName = fr;
var Wd = "NavigationMenuSub", YV = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, l = Tt(Wd, n), [c, f] = $e({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Wd
    });
    return /* @__PURE__ */ p(
      AC,
      {
        scope: n,
        isRootMenu: !1,
        value: c,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (d) => f(d),
        onItemSelect: (d) => f(d),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ p(Wt.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
YV.displayName = Wd;
var AC = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: l,
    onItemDismiss: c,
    onTriggerEnter: f,
    onTriggerLeave: d,
    onContentEnter: m,
    onContentLeave: h
  } = e, [v, g] = u.useState(null), [b, y] = u.useState(/* @__PURE__ */ new Map()), [w, x] = u.useState(null);
  return /* @__PURE__ */ p(
    qV,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: qr(s),
      baseId: De(),
      dir: o,
      orientation: a,
      viewport: v,
      onViewportChange: g,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: Ae(f),
      onTriggerLeave: Ae(d),
      onContentEnter: Ae(m),
      onContentLeave: Ae(h),
      onItemSelect: Ae(l),
      onItemDismiss: Ae(c),
      onViewportContentChange: u.useCallback((S, E) => {
        y((C) => (C.set(S, E), new Map(C)));
      }, []),
      onViewportContentRemove: u.useCallback((S) => {
        y((E) => E.has(S) ? (E.delete(S), new Map(E)) : E);
      }, []),
      children: /* @__PURE__ */ p(zp.Provider, { scope: t, children: /* @__PURE__ */ p(GV, { scope: t, items: b, children: i }) })
    }
  );
}, DC = "NavigationMenuList", IC = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Tt(DC, n), a = /* @__PURE__ */ p(Wt.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ p(Wt.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ p(zp.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ p(HC, { asChild: !0, children: a }) : a }) });
  }
);
IC.displayName = DC;
var kC = "NavigationMenuItem", [KV, $C] = Wp(kC), LC = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = De(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), l = u.useRef(null), c = u.useRef(null), f = u.useRef(() => {
    }), d = u.useRef(!1), m = u.useCallback((v = "start") => {
      if (s.current) {
        f.current();
        const g = Vd(s.current);
        g.length && Hp(v === "start" ? g : g.reverse());
      }
    }, []), h = u.useCallback(() => {
      if (s.current) {
        const v = Vd(s.current);
        v.length && (f.current = nH(v));
      }
    }, []);
    return /* @__PURE__ */ p(
      KV,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: c,
        wasEscapeCloseRef: d,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: h,
        onContentFocusOutside: h,
        children: /* @__PURE__ */ p(Wt.li, { ...o, ref: t })
      }
    );
  }
);
LC.displayName = kC;
var jd = "NavigationMenuTrigger", FC = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Tt(jd, e.__scopeNavigationMenu), i = $C(jd, e.__scopeNavigationMenu), s = u.useRef(null), l = ue(s, i.triggerRef, t), c = GC(a.baseId, i.value), f = UC(a.baseId, i.value), d = u.useRef(!1), m = u.useRef(!1), h = i.value === a.value;
  return /* @__PURE__ */ se(yt, { children: [
    /* @__PURE__ */ p(zp.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ p(qC, { asChild: !0, children: /* @__PURE__ */ p(
      Wt.button,
      {
        id: c,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": qp(h),
        "aria-expanded": h,
        "aria-controls": f,
        ...o,
        ref: l,
        onPointerEnter: q(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: q(
          e.onPointerMove,
          ui(() => {
            r || m.current || i.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(i.value), d.current = !0);
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          ui(() => {
            r || (a.onTriggerLeave(), d.current = !1);
          })
        ),
        onClick: q(e.onClick, () => {
          a.onItemSelect(i.value), m.current = h;
        }),
        onKeyDown: q(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          h && v.key === b && (i.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    h && /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(
        TC,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (v) => {
            const g = i.contentRef.current, b = v.relatedTarget, y = b === s.current, w = g == null ? void 0 : g.contains(b);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ p("span", { "aria-owns": f })
    ] })
  ] });
});
FC.displayName = jd;
var XV = "NavigationMenuLink", Wb = "navigationMenu.linkSelect", BC = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ p(qC, { asChild: !0, children: /* @__PURE__ */ p(
      Wt.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: q(
          e.onClick,
          (i) => {
            const s = i.target, l = new CustomEvent(Wb, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Wb, (c) => o == null ? void 0 : o(c), { once: !0 }), zb(s, l), !l.defaultPrevented && !i.metaKey) {
              const c = new CustomEvent(ja, {
                bubbles: !0,
                cancelable: !0
              });
              zb(s, c);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
BC.displayName = XV;
var jp = "NavigationMenuIndicator", zC = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(jp, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? lf.createPortal(
    /* @__PURE__ */ p(Ie, { present: n || a, children: /* @__PURE__ */ p(ZV, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
zC.displayName = jp;
var ZV = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Tt(jp, n), a = MC(n), [i, s] = u.useState(
    null
  ), [l, c] = u.useState(null), f = o.orientation === "horizontal", d = !!o.value;
  u.useEffect(() => {
    var g;
    const v = (g = a().find((b) => b.value === o.value)) == null ? void 0 : g.ref.current;
    v && s(v);
  }, [a, o.value]);
  const m = () => {
    i && c({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return Hd(i, m), Hd(o.indicatorTrack, m), l ? /* @__PURE__ */ p(
    Wt.div,
    {
      "aria-hidden": !0,
      "data-state": d ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), $r = "NavigationMenuContent", WC = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt($r, e.__scopeNavigationMenu), a = $C($r, e.__scopeNavigationMenu), i = ue(a.contentRef, t), s = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ p(QV, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ p(Ie, { present: n || s, children: /* @__PURE__ */ p(
    jC,
    {
      "data-state": qp(s),
      ...l,
      ref: i,
      onPointerEnter: q(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: q(
        e.onPointerLeave,
        ui(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
WC.displayName = $r;
var QV = u.forwardRef((e, t) => {
  const n = Tt($r, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Le(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Le(() => () => o(e.value), [e.value, o]), null;
}), ja = "navigationMenu.rootContentDismiss", jC = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...c
  } = e, f = Tt($r, n), d = u.useRef(null), m = ue(d, t), h = GC(f.baseId, r), v = UC(f.baseId, r), g = MC(n), b = u.useRef(null), { onItemDismiss: y } = f;
  u.useEffect(() => {
    const x = d.current;
    if (f.isRootMenu && x) {
      const S = () => {
        var E;
        y(), s(), x.contains(document.activeElement) && ((E = o.current) == null || E.focus());
      };
      return x.addEventListener(ja, S), () => x.removeEventListener(ja, S);
    }
  }, [f.isRootMenu, e.value, o, y, s]);
  const w = u.useMemo(() => {
    const S = g().map((D) => D.value);
    f.dir === "rtl" && S.reverse();
    const E = S.indexOf(f.value), C = S.indexOf(f.previousValue), _ = r === f.value, T = C === S.indexOf(r);
    if (!_ && !T) return b.current;
    const N = (() => {
      if (E !== C) {
        if (_ && C !== -1) return E > C ? "from-end" : "from-start";
        if (T && E !== -1) return E > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = N, N;
  }, [f.previousValue, f.value, f.dir, g, r]);
  return /* @__PURE__ */ p(HC, { asChild: !0, children: /* @__PURE__ */ p(
    $n,
    {
      id: v,
      "aria-labelledby": h,
      "data-motion": w,
      "data-orientation": f.orientation,
      ...c,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const x = new Event(ja, {
          bubbles: !0,
          cancelable: !0
        });
        (S = d.current) == null || S.dispatchEvent(x);
      },
      onFocusOutside: q(e.onFocusOutside, (x) => {
        var E;
        l();
        const S = x.target;
        (E = f.rootNavigationMenu) != null && E.contains(S) && x.preventDefault();
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, (x) => {
        var _;
        const S = x.target, E = g().some((T) => {
          var N;
          return (N = T.ref.current) == null ? void 0 : N.contains(S);
        }), C = f.isRootMenu && ((_ = f.viewport) == null ? void 0 : _.contains(S));
        (E || C || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: q(e.onKeyDown, (x) => {
        var C;
        const S = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !S) {
          const _ = Vd(x.currentTarget), T = document.activeElement, N = _.findIndex((k) => k === T), O = x.shiftKey ? _.slice(0, N).reverse() : _.slice(N + 1, _.length);
          Hp(O) ? x.preventDefault() : (C = a.current) == null || C.focus();
        }
      }),
      onEscapeKeyDown: q(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), Vp = "NavigationMenuViewport", VC = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!Tt(Vp, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ p(Ie, { present: n || a, children: /* @__PURE__ */ p(JV, { ...r, ref: t }) });
});
VC.displayName = Vp;
var JV = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Tt(Vp, n), i = ue(t, a.onViewportChange), s = UV(
    $r,
    e.__scopeNavigationMenu
  ), [l, c] = u.useState(null), [f, d] = u.useState(null), m = l ? (l == null ? void 0 : l.width) + "px" : void 0, h = l ? (l == null ? void 0 : l.height) + "px" : void 0, v = !!a.value, g = v ? a.value : a.previousValue;
  return Hd(f, () => {
    f && c({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ p(
    Wt.div,
    {
      "data-state": qp(v),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": h,
        ...o.style
      },
      onPointerEnter: q(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: q(e.onPointerLeave, ui(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: x, ...S }]) => {
        const E = g === y;
        return /* @__PURE__ */ p(Ie, { present: x || E, children: /* @__PURE__ */ p(
          jC,
          {
            ...S,
            ref: ye(w, (C) => {
              E && C && d(C);
            })
          }
        ) }, y);
      })
    }
  );
}), eH = "FocusGroup", HC = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Tt(eH, n);
    return /* @__PURE__ */ p(zd.Provider, { scope: n, children: /* @__PURE__ */ p(zd.Slot, { scope: n, children: /* @__PURE__ */ p(Wt.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), jb = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], tH = "FocusGroupItem", qC = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = VV(n), a = Tt(tH, n);
    return /* @__PURE__ */ p(zd.ItemSlot, { scope: n, children: /* @__PURE__ */ p(
      Wt.button,
      {
        ...r,
        ref: t,
        onKeyDown: q(e.onKeyDown, (i) => {
          if (["Home", "End", ...jb].includes(i.key)) {
            let l = o().map((d) => d.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), jb.includes(i.key)) {
              const d = l.indexOf(i.currentTarget);
              l = l.slice(d + 1);
            }
            setTimeout(() => Hp(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Vd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hp(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function nH(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Hd(e, t) {
  const n = Ae(t);
  Le(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function qp(e) {
  return e ? "open" : "closed";
}
function GC(e, t) {
  return `${e}-trigger-${t}`;
}
function UC(e, t) {
  return `${e}-content-${t}`;
}
function ui(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var rH = OC, oH = IC, aH = LC, iH = FC, sH = BC, lH = zC, cH = WC, uH = VC;
function b8({
  className: e,
  children: t,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ se(
    rH,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: R(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ p(fH, {})
      ]
    }
  );
}
function y8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    oH,
    {
      "data-slot": "navigation-menu-list",
      className: R(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function w8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    aH,
    {
      "data-slot": "navigation-menu-item",
      className: R("relative", e),
      ...t
    }
  );
}
const dH = xt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function x8({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    iH,
    {
      "data-slot": "navigation-menu-trigger",
      className: R(dH(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ p(
          Wr,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function S8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    cH,
    {
      "data-slot": "navigation-menu-content",
      className: R(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function fH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      className: R(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ p(
        uH,
        {
          "data-slot": "navigation-menu-viewport",
          className: R(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function C8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    sH,
    {
      "data-slot": "navigation-menu-link",
      className: R(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function _8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    lH,
    {
      "data-slot": "navigation-menu-indicator",
      className: R(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function E8({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: R("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function P8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "ul",
    {
      "data-slot": "pagination-content",
      className: R("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function R8({ ...e }) {
  return /* @__PURE__ */ p("li", { "data-slot": "pagination-item", ...e });
}
function YC({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) {
  return /* @__PURE__ */ p(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: R(
        Tr({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function N8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(
    YC,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: R("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ p(My, {}),
        /* @__PURE__ */ p("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function T8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(
    YC,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: R("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ p("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ p(jr, {})
      ]
    }
  );
}
function M8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ se(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: R("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ p(Oy, { className: "size-4" }),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
// @__NO_SIDE_EFFECTS__
function KC(e) {
  const t = /* @__PURE__ */ pH(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(hH);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function pH(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = vH(o), s = gH(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var mH = Symbol("radix.slottable");
function hH(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mH;
}
function gH(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vH(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bH = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], XC = bH.reduce((e, t) => {
  const n = /* @__PURE__ */ KC(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), rs = "Popover", [ZC] = Fe(rs, [
  sn
]), pa = sn(), [yH, Bn] = ZC(rs), QC = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = pa(t), l = u.useRef(null), [c, f] = u.useState(!1), [d, m] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: rs
  });
  return /* @__PURE__ */ p(Yr, { ...s, children: /* @__PURE__ */ p(
    yH,
    {
      scope: t,
      contentId: De(),
      triggerRef: l,
      open: d,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((h) => !h), [m]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: i,
      children: n
    }
  ) });
};
QC.displayName = rs;
var JC = "PopoverAnchor", e_ = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(JC, n), a = pa(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ p(Kr, { ...a, ...r, ref: t });
  }
);
e_.displayName = JC;
var t_ = "PopoverTrigger", n_ = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(t_, n), a = pa(n), i = ue(t, o.triggerRef), s = /* @__PURE__ */ p(
      XC.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": s_(o.open),
        ...r,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ p(Kr, { asChild: !0, ...a, children: s });
  }
);
n_.displayName = t_;
var Gp = "PopoverPortal", [wH, xH] = ZC(Gp, {
  forceMount: void 0
}), r_ = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Bn(Gp, t);
  return /* @__PURE__ */ p(wH, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Ie, { present: n || a.open, children: /* @__PURE__ */ p(ar, { asChild: !0, container: o, children: r }) }) });
};
r_.displayName = Gp;
var Lr = "PopoverContent", o_ = u.forwardRef(
  (e, t) => {
    const n = xH(Lr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Bn(Lr, e.__scopePopover);
    return /* @__PURE__ */ p(Ie, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p(CH, { ...o, ref: t }) : /* @__PURE__ */ p(_H, { ...o, ref: t }) });
  }
);
o_.displayName = Lr;
var SH = /* @__PURE__ */ KC("PopoverContent.RemoveScroll"), CH = u.forwardRef(
  (e, t) => {
    const n = Bn(Lr, e.__scopePopover), r = u.useRef(null), o = ue(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Ri(i);
    }, []), /* @__PURE__ */ p(Wo, { as: SH, allowPinchZoom: !0, children: /* @__PURE__ */ p(
      a_,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
            a.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), _H = u.forwardRef(
  (e, t) => {
    const n = Bn(Lr, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p(
      a_,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), a_ = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: f,
      ...d
    } = e, m = Bn(Lr, n), h = pa(n);
    return Ei(), /* @__PURE__ */ p(
      Bo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p(
          $n,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ p(
              na,
              {
                "data-state": s_(m.open),
                role: "dialog",
                id: m.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), i_ = "PopoverClose", EH = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(i_, n);
    return /* @__PURE__ */ p(
      XC.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
EH.displayName = i_;
var PH = "PopoverArrow", RH = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pa(n);
    return /* @__PURE__ */ p(ra, { ...o, ...r, ref: t });
  }
);
RH.displayName = PH;
function s_(e) {
  return e ? "open" : "closed";
}
var NH = QC, TH = e_, MH = n_, OH = r_, AH = o_;
function O8({
  ...e
}) {
  return /* @__PURE__ */ p(NH, { "data-slot": "popover", ...e });
}
function A8({
  ...e
}) {
  return /* @__PURE__ */ p(MH, { "data-slot": "popover-trigger", ...e });
}
function D8({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ p(OH, { children: /* @__PURE__ */ p(
    AH,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function I8({
  ...e
}) {
  return /* @__PURE__ */ p(TH, { "data-slot": "popover-anchor", ...e });
}
function DH(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i);
    s.displayName = a + "Context";
    const l = n.length;
    n = [...n, i];
    const c = (d) => {
      var y;
      const { scope: m, children: h, ...v } = d, g = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(g.Provider, { value: b, children: h });
    };
    c.displayName = a + "Provider";
    function f(d, m) {
      var g;
      const h = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || s, v = u.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, IH(o, ...t)];
}
function IH(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(a)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Up = "Progress", Yp = 100, [kH] = DH(Up), [$H, LH] = kH(Up), l_ = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = FH,
      ...i
    } = e;
    (o || o === 0) && !Vb(o) && console.error(BH(`${o}`, "Progress"));
    const s = Vb(o) ? o : Yp;
    r !== null && !Hb(r, s) && console.error(zH(`${r}`, "Progress"));
    const l = Hb(r, s) ? r : null, c = di(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ p($H, { scope: n, value: l, max: s, children: /* @__PURE__ */ p(
      rt.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": di(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": d_(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
l_.displayName = Up;
var c_ = "ProgressIndicator", u_ = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = LH(c_, n);
    return /* @__PURE__ */ p(
      rt.div,
      {
        "data-state": d_(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
u_.displayName = c_;
function FH(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function d_(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function di(e) {
  return typeof e == "number";
}
function Vb(e) {
  return di(e) && !isNaN(e) && e > 0;
}
function Hb(e, t) {
  return di(e) && !isNaN(e) && e <= t && e >= 0;
}
function BH(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yp}\`.`;
}
function zH(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yp} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var WH = l_, jH = u_;
function k8({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    WH,
    {
      "data-slot": "progress",
      className: R(
        "bg-accent relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ p(
        jH,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
// @__NO_SIDE_EFFECTS__
function VH(e) {
  const t = /* @__PURE__ */ HH(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(GH);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function HH(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = YH(o), s = UH(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qH = Symbol("radix.slottable");
function GH(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qH;
}
function UH(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function YH(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var KH = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], os = KH.reduce((e, t) => {
  const n = /* @__PURE__ */ VH(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Kp = "Radio", [XH, f_] = Fe(Kp), [ZH, QH] = XH(Kp), p_ = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      form: c,
      ...f
    } = e, [d, m] = u.useState(null), h = ue(t, (b) => m(b)), v = u.useRef(!1), g = d ? c || !!d.closest("form") : !0;
    return /* @__PURE__ */ se(ZH, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ p(
        os.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": v_(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: h,
          onClick: q(e.onClick, (b) => {
            o || l == null || l(), g && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ p(
        g_,
        {
          control: d,
          bubbles: !v.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
p_.displayName = Kp;
var m_ = "RadioIndicator", h_ = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = QH(m_, n);
    return /* @__PURE__ */ p(Ie, { present: r || a.checked, children: /* @__PURE__ */ p(
      os.span,
      {
        "data-state": v_(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
h_.displayName = m_;
var JH = "RadioBubbleInput", g_ = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ue(i, a), l = qr(n), c = Jo(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== n && h) {
        const v = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ p(
      os.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
g_.displayName = JH;
function v_(e) {
  return e ? "checked" : "unchecked";
}
var eq = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], as = "RadioGroup", [tq] = Fe(as, [
  ln,
  f_
]), b_ = ln(), y_ = f_(), [nq, rq] = tq(as), w_ = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: c,
      loop: f = !0,
      onValueChange: d,
      ...m
    } = e, h = b_(n), v = jt(c), [g, b] = $e({
      prop: a,
      defaultProp: o ?? null,
      onChange: d,
      caller: as
    });
    return /* @__PURE__ */ p(
      nq,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: g,
        onValueChange: b,
        children: /* @__PURE__ */ p(
          ia,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ p(
              os.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
                dir: v,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
w_.displayName = as;
var x_ = "RadioGroupItem", S_ = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = rq(x_, n), i = a.disabled || r, s = b_(n), l = y_(n), c = u.useRef(null), f = ue(t, c), d = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const h = (g) => {
        eq.includes(g.key) && (m.current = !0);
      }, v = () => m.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ p(
      sa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: d,
        children: /* @__PURE__ */ p(
          p_,
          {
            disabled: i,
            required: a.required,
            checked: d,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: q((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: q(o.onFocus, () => {
              var h;
              m.current && ((h = c.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
S_.displayName = x_;
var oq = "RadioGroupIndicator", C_ = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = y_(n);
    return /* @__PURE__ */ p(h_, { ...o, ...r, ref: t });
  }
);
C_.displayName = oq;
var aq = w_, iq = S_, sq = C_;
function $8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    aq,
    {
      "data-slot": "radio-group",
      className: R("grid gap-3", e),
      ...t
    }
  );
}
function L8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    iq,
    {
      "data-slot": "radio-group-item",
      className: R(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(
        sq,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ p(_i, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const is = dy(null);
is.displayName = "PanelGroupContext";
const He = {
  group: "data-panel-group",
  groupDirection: "data-panel-group-direction",
  groupId: "data-panel-group-id",
  panel: "data-panel",
  panelCollapsible: "data-panel-collapsible",
  panelId: "data-panel-id",
  panelSize: "data-panel-size",
  resizeHandle: "data-resize-handle",
  resizeHandleActive: "data-resize-handle-active",
  resizeHandleEnabled: "data-panel-resize-handle-enabled",
  resizeHandleId: "data-panel-resize-handle-id",
  resizeHandleState: "data-resize-handle-state"
}, Xp = 10, Xn = yi, qb = u.useId, lq = typeof qb == "function" ? qb : () => null;
let cq = 0;
function Zp(e = null) {
  const t = lq(), n = Ve(e || t || null);
  return n.current === null && (n.current = "" + cq++), e ?? n.current;
}
function __({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: f,
  onResize: d,
  order: m,
  style: h,
  tagName: v = "div",
  ...g
}) {
  const b = af(is);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: x,
    getPanelStyle: S,
    groupId: E,
    isPanelCollapsed: C,
    reevaluatePanelConstraints: _,
    registerPanel: T,
    resizePanel: N,
    unregisterPanel: D
  } = b, O = Zp(i), k = Ve({
    callbacks: {
      onCollapse: c,
      onExpand: f,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: l
    },
    id: O,
    idIsFromProps: i !== void 0,
    order: m
  });
  Ve({
    didLogMissingDefaultSizeWarning: !1
  }), Xn(() => {
    const {
      callbacks: B,
      constraints: H
    } = k.current, L = {
      ...H
    };
    k.current.id = O, k.current.idIsFromProps = i !== void 0, k.current.order = m, B.onCollapse = c, B.onExpand = f, B.onResize = d, H.collapsedSize = n, H.collapsible = r, H.defaultSize = o, H.maxSize = s, H.minSize = l, (L.collapsedSize !== H.collapsedSize || L.collapsible !== H.collapsible || L.maxSize !== H.maxSize || L.minSize !== H.minSize) && _(k.current, L);
  }), Xn(() => {
    const B = k.current;
    return T(B), () => {
      D(B);
    };
  }, [m, O, T, D]), sf(a, () => ({
    collapse: () => {
      y(k.current);
    },
    expand: (B) => {
      w(k.current, B);
    },
    getId() {
      return O;
    },
    getSize() {
      return x(k.current);
    },
    isCollapsed() {
      return C(k.current);
    },
    isExpanded() {
      return !C(k.current);
    },
    resize: (B) => {
      N(k.current, B);
    }
  }), [y, w, x, C, O, N]);
  const M = S(k.current, o);
  return vn(v, {
    ...g,
    children: e,
    className: t,
    id: O,
    style: {
      ...M,
      ...h
    },
    // CSS selectors
    [He.groupId]: E,
    [He.panel]: "",
    [He.panelCollapsible]: r || void 0,
    [He.panelId]: O,
    [He.panelSize]: parseFloat("" + M.flexGrow).toFixed(1)
  });
}
const E_ = Lo((e, t) => vn(__, {
  ...e,
  forwardedRef: t
}));
__.displayName = "Panel";
E_.displayName = "forwardRef(Panel)";
let qd = null, Va = -1, Nn = null;
function uq(e, t, n) {
  const r = (t & M_) !== 0, o = (t & O_) !== 0, a = (t & A_) !== 0, i = (t & D_) !== 0;
  if (t) {
    if (r)
      return a ? "se-resize" : i ? "ne-resize" : "e-resize";
    if (o)
      return a ? "sw-resize" : i ? "nw-resize" : "w-resize";
    if (a)
      return "s-resize";
    if (i)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function dq() {
  Nn !== null && (document.head.removeChild(Nn), qd = null, Nn = null, Va = -1);
}
function Qu(e, t, n) {
  var r, o;
  const a = uq(e, t);
  if (qd !== a) {
    if (qd = a, Nn === null && (Nn = document.createElement("style"), document.head.appendChild(Nn)), Va >= 0) {
      var i;
      (i = Nn.sheet) === null || i === void 0 || i.removeRule(Va);
    }
    Va = (r = (o = Nn.sheet) === null || o === void 0 ? void 0 : o.insertRule(`*{cursor: ${a} !important;}`)) !== null && r !== void 0 ? r : -1;
  }
}
function P_(e) {
  return e.type === "keydown";
}
function R_(e) {
  return e.type.startsWith("pointer");
}
function N_(e) {
  return e.type.startsWith("mouse");
}
function ss(e) {
  if (R_(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (N_(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function fq() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function pq(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function mq(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: Yb(e),
    b: Yb(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  be(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: Ub(Gb(n.a)),
    b: Ub(Gb(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const hq = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function gq(e) {
  var t;
  const n = getComputedStyle((t = T_(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function vq(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || gq(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || hq.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Gb(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (be(n, "Missing node"), vq(n)) return n;
  }
  return null;
}
function Ub(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Yb(e) {
  const t = [];
  for (; e; )
    t.push(e), e = T_(e);
  return t;
}
function T_(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const M_ = 1, O_ = 2, A_ = 4, D_ = 8, bq = fq() === "coarse";
let Ft = [], Nr = !1, Tn = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map();
const Do = /* @__PURE__ */ new Set();
function yq(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = Tn.get(i)) !== null && a !== void 0 ? a : 0;
  return Tn.set(i, l + 1), Do.add(s), fi(), function() {
    var f;
    ls.delete(e), Do.delete(s);
    const d = (f = Tn.get(i)) !== null && f !== void 0 ? f : 1;
    if (Tn.set(i, d - 1), fi(), d === 1 && Tn.delete(i), Ft.includes(s)) {
      const m = Ft.indexOf(s);
      m >= 0 && Ft.splice(m, 1), cs(), o("up", !0, null);
    }
  };
}
function wq(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ss(e);
  Nr = !0, Qp({
    target: t,
    x: n,
    y: r
  }), fi(), Ft.length > 0 && (pi("down", e), cs(), e.preventDefault(), I_(t) || e.stopImmediatePropagation());
}
function Ju(e) {
  const {
    x: t,
    y: n
  } = ss(e);
  if (Nr && // Skip this check for "pointerleave" events, else Firefox triggers a false positive (see #514)
  e.type !== "pointerleave" && e.buttons === 0 && (Nr = !1, pi("up", e)), !Nr) {
    const {
      target: r
    } = e;
    Qp({
      target: r,
      x: t,
      y: n
    });
  }
  pi("move", e), cs(), Ft.length > 0 && e.preventDefault();
}
function ed(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ss(e);
  ls.clear(), Nr = !1, Ft.length > 0 && (e.preventDefault(), I_(t) || e.stopImmediatePropagation()), pi("up", e), Qp({
    target: t,
    x: n,
    y: r
  }), cs(), fi();
}
function I_(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(He.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Qp({
  target: e,
  x: t,
  y: n
}) {
  Ft.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), Do.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: f,
      top: d
    } = s, m = bq ? i.coarse : i.fine;
    if (t >= c - m && t <= f + m && n >= d - m && n <= l + m) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      mq(r, a) > 0) {
        let v = r, g = !1;
        for (; v && !v.contains(a); ) {
          if (pq(v.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          v = v.parentElement;
        }
        if (g)
          return;
      }
      Ft.push(o);
    }
  });
}
function td(e, t) {
  ls.set(e, t);
}
function cs() {
  let e = !1, t = !1;
  Ft.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  ls.forEach((r) => {
    n |= r;
  }), e && t ? Qu("intersection", n) : e ? Qu("horizontal", n) : t ? Qu("vertical", n) : dq();
}
let nd;
function fi() {
  var e;
  (e = nd) === null || e === void 0 || e.abort(), nd = new AbortController();
  const t = {
    capture: !0,
    signal: nd.signal
  };
  Do.size && (Nr ? (Ft.length > 0 && Tn.forEach((n, r) => {
    const {
      body: o
    } = r;
    n > 0 && (o.addEventListener("contextmenu", ed, t), o.addEventListener("pointerleave", Ju, t), o.addEventListener("pointermove", Ju, t));
  }), Tn.forEach((n, r) => {
    const {
      body: o
    } = r;
    o.addEventListener("pointerup", ed, t), o.addEventListener("pointercancel", ed, t);
  })) : Tn.forEach((n, r) => {
    const {
      body: o
    } = r;
    n > 0 && (o.addEventListener("pointerdown", wq, t), o.addEventListener("pointermove", Ju, t));
  }));
}
function pi(e, t) {
  Do.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Ft.includes(n);
    r(e, o, t);
  });
}
function xq() {
  const [e, t] = gt(0);
  return Te(() => t((n) => n + 1), []);
}
function be(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function nr(e, t, n = Xp) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function mn(e, t, n = Xp) {
  return nr(e, t, n) === 0;
}
function mt(e, t, n) {
  return nr(e, t, n) === 0;
}
function Sq(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!mt(o, a, n))
      return !1;
  }
  return !0;
}
function Cr({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  be(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (nr(n, s) < 0)
    if (a) {
      const l = (o + s) / 2;
      nr(n, l) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(Xp)), n;
}
function ho({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (mt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  be(s != null, "Invalid first pivot index"), be(l != null, "Invalid second pivot index");
  let c = 0;
  if (a === "keyboard") {
    {
      const d = e < 0 ? l : s, m = n[d];
      be(m, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: v,
        minSize: g = 0
      } = m;
      if (v) {
        const b = t[d];
        if (be(b != null, `Previous layout not found for panel index ${d}`), mt(b, h)) {
          const y = g - b;
          nr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const d = e < 0 ? s : l, m = n[d];
      be(m, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: v,
        minSize: g = 0
      } = m;
      if (v) {
        const b = t[d];
        if (be(b != null, `Previous layout not found for panel index ${d}`), mt(b, g)) {
          const y = b - h;
          nr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let m = e < 0 ? l : s, h = 0;
    for (; ; ) {
      const g = t[m];
      be(g != null, `Previous layout not found for panel index ${m}`);
      const y = Cr({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - g;
      if (h += y, m += d, m < 0 || m >= n.length)
        break;
    }
    const v = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - v : v;
  }
  {
    let m = e < 0 ? s : l;
    for (; m >= 0 && m < n.length; ) {
      const h = Math.abs(e) - Math.abs(c), v = t[m];
      be(v != null, `Previous layout not found for panel index ${m}`);
      const g = v - h, b = Cr({
        panelConstraints: n,
        panelIndex: m,
        size: g
      });
      if (!mt(v, b) && (c += v - b, i[m] = b, c.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (Sq(o, i))
    return o;
  {
    const d = e < 0 ? l : s, m = t[d];
    be(m != null, `Previous layout not found for panel index ${d}`);
    const h = m + c, v = Cr({
      panelConstraints: n,
      panelIndex: d,
      size: h
    });
    if (i[d] = v, !mt(v, h)) {
      let g = h - v, y = e < 0 ? l : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        be(w != null, `Previous layout not found for panel index ${y}`);
        const x = w + g, S = Cr({
          panelConstraints: n,
          panelIndex: y,
          size: x
        });
        if (mt(w, S) || (g -= S - w, i[y] = S), mt(g, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const f = i.reduce((d, m) => m + d, 0);
  return mt(f, 100) ? i : o;
}
function Cq({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  be(s != null, "No pivot index found"), t.forEach((d, m) => {
    const {
      constraints: h
    } = d, {
      maxSize: v = 100,
      minSize: g = 0
    } = h;
    m === s ? (r = g, o = v) : (a += g, i += v);
  });
  const l = Math.min(o, 100 - a), c = Math.max(r, 100 - i), f = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: f
  };
}
function Io(e, t = document) {
  return Array.from(t.querySelectorAll(`[${He.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function k_(e, t, n = document) {
  const o = Io(e, n).findIndex((a) => a.getAttribute(He.resizeHandleId) === t);
  return o ?? null;
}
function $_(e, t, n) {
  const r = k_(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function _q(e) {
  return e instanceof HTMLElement ? !0 : typeof e == "object" && e !== null && "tagName" in e && "getAttribute" in e;
}
function L_(e, t = document) {
  if (_q(t) && t.dataset.panelGroupId == e)
    return t;
  const n = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return n || null;
}
function us(e, t = document) {
  const n = t.querySelector(`[${He.resizeHandleId}="${e}"]`);
  return n || null;
}
function Eq(e, t, n, r = document) {
  var o, a, i, s;
  const l = us(t, r), c = Io(e, r), f = l ? c.indexOf(l) : -1, d = (o = (a = n[f]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = n[f + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [d, m];
}
function Pq({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  Ve({
    didWarnAboutMissingResizeHandle: !1
  }), Xn(() => {
    if (!a)
      return;
    const s = Io(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: f,
        valueNow: d
      } = Cq({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const h = o[l];
        be(h, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", h.id), m.setAttribute("aria-valuemax", "" + Math.round(c)), m.setAttribute("aria-valuemin", "" + Math.round(f)), m.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), vt(() => {
    if (!a)
      return;
    const s = t.current;
    be(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = L_(n, a);
    be(c != null, `No group found for id "${n}"`);
    const f = Io(n, a);
    be(f, `No resize handles found for group id "${n}"`);
    const d = f.map((m) => {
      const h = m.getAttribute(He.resizeHandleId);
      be(h, "Resize handle element has no handle id attribute");
      const [v, g] = Eq(n, h, l, a);
      if (v == null || g == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = l.findIndex((x) => x.id === v);
              if (w >= 0) {
                const x = l[w];
                be(x, `No panel data found for index ${w}`);
                const S = r[w], {
                  collapsedSize: E = 0,
                  collapsible: C,
                  minSize: _ = 0
                } = x.constraints;
                if (S != null && C) {
                  const T = ho({
                    delta: mt(S, E) ? _ - E : E - S,
                    initialLayout: r,
                    panelConstraints: l.map((N) => N.constraints),
                    pivotIndices: $_(n, h, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== T && i(T);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", b), () => {
        m.removeEventListener("keydown", b);
      };
    });
    return () => {
      d.forEach((m) => m());
    };
  }, [a, e, t, n, r, o, i]);
}
function Kb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function F_(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = ss(t);
  return n ? r : o;
}
function Rq(e, t, n, r, o) {
  const a = n === "horizontal", i = us(t, o);
  be(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute(He.groupId);
  be(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = F_(n, e), f = L_(s, o);
  be(f, `No group element found for id "${s}"`);
  const d = f.getBoundingClientRect(), m = a ? d.width : d.height;
  return (c - l) / m * 100;
}
function Nq(e, t, n, r, o, a) {
  if (P_(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : Rq(e, t, n, r, a);
}
function Tq({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    be(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    be(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, c = o / l;
    r++, t[a] = c, o -= c;
  }
  return t;
}
function br(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    be(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: c = 0,
      collapsible: f
    } = s, d = n[l];
    if (d == null || r !== d) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: h,
        onResize: v
      } = i;
      v && v(r, d), f && (m || h) && (h && (d == null || mn(d, c)) && !mn(r, c) && h(), m && (d == null || !mn(d, c)) && mn(r, c) && m());
    }
  });
}
function Da(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function Mq({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toFixed(a) : "1" : r.length === 1 ? s = "1" : s = i.toFixed(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Oq(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Xb(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function B_(e) {
  return `react-resizable-panels:${e}`;
}
function z_(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function W_(e, t) {
  try {
    const n = B_(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function Aq(e, t, n) {
  var r, o;
  const a = (r = W_(e, n)) !== null && r !== void 0 ? r : {}, i = z_(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function Dq(e, t, n, r, o) {
  var a;
  const i = B_(e), s = z_(t), l = (a = W_(e, o)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function Zb({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!mt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      be(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    be(i != null, `No layout data found for index ${a}`);
    const s = Cr({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!mt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      be(i != null, `No layout data found for index ${a}`);
      const s = i + o, l = Cr({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (o -= l - i, n[a] = l, mt(o, 0)))
        break;
    }
  return n;
}
const Iq = 100, go = {
  getItem: (e) => (Xb(go), go.getItem(e)),
  setItem: (e, t) => {
    Xb(go), go.setItem(e, t);
  }
}, Qb = {};
function j_({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = go,
  style: c,
  tagName: f = "div",
  ...d
}) {
  const m = Zp(a), h = Ve(null), [v, g] = gt(null), [b, y] = gt([]), w = xq(), x = Ve({}), S = Ve(/* @__PURE__ */ new Map()), E = Ve(0), C = Ve({
    autoSaveId: e,
    direction: r,
    dragState: v,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), _ = Ve({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Ve({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), sf(o, () => ({
    getId: () => C.current.id,
    getLayout: () => {
      const {
        layout: I
      } = _.current;
      return I;
    },
    setLayout: (I) => {
      const {
        onLayout: W
      } = C.current, {
        layout: F,
        panelDataArray: U
      } = _.current, $ = Zb({
        layout: I,
        panelConstraints: U.map((V) => V.constraints)
      });
      Kb(F, $) || (y($), _.current.layout = $, W && W($), br(U, $, x.current));
    }
  }), []), Xn(() => {
    C.current.autoSaveId = e, C.current.direction = r, C.current.dragState = v, C.current.id = m, C.current.onLayout = i, C.current.storage = l;
  }), Pq({
    committedValuesRef: C,
    eagerValuesRef: _,
    groupId: m,
    layout: b,
    panelDataArray: _.current.panelDataArray,
    setLayout: y,
    panelGroupElement: h.current
  }), vt(() => {
    const {
      panelDataArray: I
    } = _.current;
    if (e) {
      if (b.length === 0 || b.length !== I.length)
        return;
      let W = Qb[e];
      W == null && (W = Oq(Dq, Iq), Qb[e] = W);
      const F = [...I], U = new Map(S.current);
      W(e, F, U, b, l);
    }
  }, [e, b, l]), vt(() => {
  });
  const T = Te((I) => {
    const {
      onLayout: W
    } = C.current, {
      layout: F,
      panelDataArray: U
    } = _.current;
    if (I.constraints.collapsible) {
      const $ = U.map((te) => te.constraints), {
        collapsedSize: V = 0,
        panelSize: X,
        pivotIndices: ee
      } = qn(U, I, F);
      if (be(X != null, `Panel size not found for panel "${I.id}"`), !mn(X, V)) {
        S.current.set(I.id, X);
        const K = Sr(U, I) === U.length - 1 ? X - V : V - X, oe = ho({
          delta: K,
          initialLayout: F,
          panelConstraints: $,
          pivotIndices: ee,
          prevLayout: F,
          trigger: "imperative-api"
        });
        Da(F, oe) || (y(oe), _.current.layout = oe, W && W(oe), br(U, oe, x.current));
      }
    }
  }, []), N = Te((I, W) => {
    const {
      onLayout: F
    } = C.current, {
      layout: U,
      panelDataArray: $
    } = _.current;
    if (I.constraints.collapsible) {
      const V = $.map((A) => A.constraints), {
        collapsedSize: X = 0,
        panelSize: ee = 0,
        minSize: te = 0,
        pivotIndices: K
      } = qn($, I, U), oe = W ?? te;
      if (mn(ee, X)) {
        const A = S.current.get(I.id), ne = A != null && A >= oe ? A : oe, he = Sr($, I) === $.length - 1 ? ee - ne : ne - ee, ge = ho({
          delta: he,
          initialLayout: U,
          panelConstraints: V,
          pivotIndices: K,
          prevLayout: U,
          trigger: "imperative-api"
        });
        Da(U, ge) || (y(ge), _.current.layout = ge, F && F(ge), br($, ge, x.current));
      }
    }
  }, []), D = Te((I) => {
    const {
      layout: W,
      panelDataArray: F
    } = _.current, {
      panelSize: U
    } = qn(F, I, W);
    return be(U != null, `Panel size not found for panel "${I.id}"`), U;
  }, []), O = Te((I, W) => {
    const {
      panelDataArray: F
    } = _.current, U = Sr(F, I);
    return Mq({
      defaultSize: W,
      dragState: v,
      layout: b,
      panelData: F,
      panelIndex: U
    });
  }, [v, b]), k = Te((I) => {
    const {
      layout: W,
      panelDataArray: F
    } = _.current, {
      collapsedSize: U = 0,
      collapsible: $,
      panelSize: V
    } = qn(F, I, W);
    return be(V != null, `Panel size not found for panel "${I.id}"`), $ === !0 && mn(V, U);
  }, []), M = Te((I) => {
    const {
      layout: W,
      panelDataArray: F
    } = _.current, {
      collapsedSize: U = 0,
      collapsible: $,
      panelSize: V
    } = qn(F, I, W);
    return be(V != null, `Panel size not found for panel "${I.id}"`), !$ || nr(V, U) > 0;
  }, []), B = Te((I) => {
    const {
      panelDataArray: W
    } = _.current;
    W.push(I), W.sort((F, U) => {
      const $ = F.order, V = U.order;
      return $ == null && V == null ? 0 : $ == null ? -1 : V == null ? 1 : $ - V;
    }), _.current.panelDataArrayChanged = !0, w();
  }, [w]);
  Xn(() => {
    if (_.current.panelDataArrayChanged) {
      _.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: I,
        onLayout: W,
        storage: F
      } = C.current, {
        layout: U,
        panelDataArray: $
      } = _.current;
      let V = null;
      if (I) {
        const ee = Aq(I, $, F);
        ee && (S.current = new Map(Object.entries(ee.expandToSizes)), V = ee.layout);
      }
      V == null && (V = Tq({
        panelDataArray: $
      }));
      const X = Zb({
        layout: V,
        panelConstraints: $.map((ee) => ee.constraints)
      });
      Kb(U, X) || (y(X), _.current.layout = X, W && W(X), br($, X, x.current));
    }
  }), Xn(() => {
    const I = _.current;
    return () => {
      I.layout = [];
    };
  }, []);
  const H = Te((I) => {
    let W = !1;
    const F = h.current;
    return F && window.getComputedStyle(F, null).getPropertyValue("direction") === "rtl" && (W = !0), function($) {
      $.preventDefault();
      const V = h.current;
      if (!V)
        return () => null;
      const {
        direction: X,
        dragState: ee,
        id: te,
        keyboardResizeBy: K,
        onLayout: oe
      } = C.current, {
        layout: A,
        panelDataArray: ne
      } = _.current, {
        initialLayout: me
      } = ee ?? {}, he = $_(te, I, V);
      let ge = Nq($, I, X, ee, K, V);
      const pe = X === "horizontal";
      pe && W && (ge = -ge);
      const xe = ne.map((Pe) => Pe.constraints), Be = ho({
        delta: ge,
        initialLayout: me ?? A,
        panelConstraints: xe,
        pivotIndices: he,
        prevLayout: A,
        trigger: P_($) ? "keyboard" : "mouse-or-touch"
      }), we = !Da(A, Be);
      (R_($) || N_($)) && E.current != ge && (E.current = ge, !we && ge !== 0 ? pe ? td(I, ge < 0 ? M_ : O_) : td(I, ge < 0 ? A_ : D_) : td(I, 0)), we && (y(Be), _.current.layout = Be, oe && oe(Be), br(ne, Be, x.current));
    };
  }, []), L = Te((I, W) => {
    const {
      onLayout: F
    } = C.current, {
      layout: U,
      panelDataArray: $
    } = _.current, V = $.map((A) => A.constraints), {
      panelSize: X,
      pivotIndices: ee
    } = qn($, I, U);
    be(X != null, `Panel size not found for panel "${I.id}"`);
    const K = Sr($, I) === $.length - 1 ? X - W : W - X, oe = ho({
      delta: K,
      initialLayout: U,
      panelConstraints: V,
      pivotIndices: ee,
      prevLayout: U,
      trigger: "imperative-api"
    });
    Da(U, oe) || (y(oe), _.current.layout = oe, F && F(oe), br($, oe, x.current));
  }, []), Y = Te((I, W) => {
    const {
      layout: F,
      panelDataArray: U
    } = _.current, {
      collapsedSize: $ = 0,
      collapsible: V
    } = W, {
      collapsedSize: X = 0,
      collapsible: ee,
      maxSize: te = 100,
      minSize: K = 0
    } = I.constraints, {
      panelSize: oe
    } = qn(U, I, F);
    oe != null && (V && ee && mn(oe, $) ? mn($, X) || L(I, X) : oe < K ? L(I, K) : oe > te && L(I, te));
  }, [L]), G = Te((I, W) => {
    const {
      direction: F
    } = C.current, {
      layout: U
    } = _.current;
    if (!h.current)
      return;
    const $ = us(I, h.current);
    be($, `Drag handle element not found for id "${I}"`);
    const V = F_(F, W);
    g({
      dragHandleId: I,
      dragHandleRect: $.getBoundingClientRect(),
      initialCursorPosition: V,
      initialLayout: U
    });
  }, []), j = Te(() => {
    g(null);
  }, []), Q = Te((I) => {
    const {
      panelDataArray: W
    } = _.current, F = Sr(W, I);
    F >= 0 && (W.splice(F, 1), delete x.current[I.id], _.current.panelDataArrayChanged = !0, w());
  }, [w]), Z = Mn(() => ({
    collapsePanel: T,
    direction: r,
    dragState: v,
    expandPanel: N,
    getPanelSize: D,
    getPanelStyle: O,
    groupId: m,
    isPanelCollapsed: k,
    isPanelExpanded: M,
    reevaluatePanelConstraints: Y,
    registerPanel: B,
    registerResizeHandle: H,
    resizePanel: L,
    startDragging: G,
    stopDragging: j,
    unregisterPanel: Q,
    panelGroupElement: h.current
  }), [T, v, r, N, D, O, m, k, M, Y, B, H, L, G, j, Q]), z = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return vn(is.Provider, {
    value: Z
  }, vn(f, {
    ...d,
    children: t,
    className: n,
    id: a,
    ref: h,
    style: {
      ...z,
      ...c
    },
    // CSS selectors
    [He.group]: "",
    [He.groupDirection]: r,
    [He.groupId]: m
  }));
}
const V_ = Lo((e, t) => vn(j_, {
  ...e,
  forwardedRef: t
}));
j_.displayName = "PanelGroup";
V_.displayName = "forwardRef(PanelGroup)";
function Sr(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function qn(e, t, n) {
  const r = Sr(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function kq({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  vt(() => {
    if (e || n == null || r == null)
      return;
    const o = us(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute(He.groupId);
            be(s, `No group element found for id "${s}"`);
            const l = Io(s, r), c = k_(s, t, r);
            be(c !== null, `No resize element found for id "${t}"`);
            const f = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[f].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function H_({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onClick: i,
  onDragging: s,
  onFocus: l,
  onPointerDown: c,
  onPointerUp: f,
  style: d = {},
  tabIndex: m = 0,
  tagName: h = "div",
  ...v
}) {
  var g, b;
  const y = Ve(null), w = Ve({
    onClick: i,
    onDragging: s,
    onPointerDown: c,
    onPointerUp: f
  });
  vt(() => {
    w.current.onClick = i, w.current.onDragging = s, w.current.onPointerDown = c, w.current.onPointerUp = f;
  });
  const x = af(is);
  if (x === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: S,
    groupId: E,
    registerResizeHandle: C,
    startDragging: _,
    stopDragging: T,
    panelGroupElement: N
  } = x, D = Zp(o), [O, k] = gt("inactive"), [M, B] = gt(!1), [H, L] = gt(null), Y = Ve({
    state: O
  });
  Xn(() => {
    Y.current.state = O;
  }), vt(() => {
    if (n)
      L(null);
    else {
      const Z = C(D);
      L(() => Z);
    }
  }, [n, D, C]);
  const G = (g = r == null ? void 0 : r.coarse) !== null && g !== void 0 ? g : 15, j = (b = r == null ? void 0 : r.fine) !== null && b !== void 0 ? b : 5;
  return vt(() => {
    if (n || H == null)
      return;
    const Z = y.current;
    be(Z, "Element ref not attached");
    let z = !1;
    return yq(D, Z, S, {
      coarse: G,
      fine: j
    }, (W, F, U) => {
      if (!F) {
        k("inactive");
        return;
      }
      switch (W) {
        case "down": {
          k("drag"), z = !1, be(U, 'Expected event to be defined for "down" action'), _(D, U);
          const {
            onDragging: $,
            onPointerDown: V
          } = w.current;
          $ == null || $(!0), V == null || V();
          break;
        }
        case "move": {
          const {
            state: $
          } = Y.current;
          z = !0, $ !== "drag" && k("hover"), be(U, 'Expected event to be defined for "move" action'), H(U);
          break;
        }
        case "up": {
          k("hover"), T();
          const {
            onClick: $,
            onDragging: V,
            onPointerUp: X
          } = w.current;
          V == null || V(!1), X == null || X(), z || $ == null || $();
          break;
        }
      }
    });
  }, [G, S, n, j, C, D, H, _, T]), kq({
    disabled: n,
    handleId: D,
    resizeHandler: H,
    panelGroupElement: N
  }), vn(h, {
    ...v,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      B(!1), a == null || a();
    },
    onFocus: () => {
      B(!0), l == null || l();
    },
    ref: y,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...d
    },
    tabIndex: m,
    // CSS selectors
    [He.groupDirection]: S,
    [He.groupId]: E,
    [He.resizeHandle]: "",
    [He.resizeHandleActive]: O === "drag" ? "pointer" : M ? "keyboard" : void 0,
    [He.resizeHandleEnabled]: !n,
    [He.resizeHandleId]: D,
    [He.resizeHandleState]: O
  });
}
H_.displayName = "PanelResizeHandle";
function F8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    V_,
    {
      "data-slot": "resizable-panel-group",
      className: R(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function B8({
  ...e
}) {
  return /* @__PURE__ */ p(E_, { "data-slot": "resizable-panel", ...e });
}
function z8({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    H_,
    {
      "data-slot": "resizable-handle",
      className: R(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ p("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ p(OR, { className: "size-2.5" }) })
    }
  );
}
// @__NO_SIDE_EFFECTS__
function $q(e) {
  const t = /* @__PURE__ */ Lq(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Bq);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Lq(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Wq(o), s = zq(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fq = Symbol("radix.slottable");
function Bq(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fq;
}
function zq(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Wq(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var jq = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ma = jq.reduce((e, t) => {
  const n = /* @__PURE__ */ $q(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ko(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Vq(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Jp = "ScrollArea", [q_] = Fe(Jp), [Hq, Mt] = q_(Jp), G_ = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = u.useState(null), [c, f] = u.useState(null), [d, m] = u.useState(null), [h, v] = u.useState(null), [g, b] = u.useState(null), [y, w] = u.useState(0), [x, S] = u.useState(0), [E, C] = u.useState(!1), [_, T] = u.useState(!1), N = ue(t, (O) => l(O)), D = jt(o);
    return /* @__PURE__ */ p(
      Hq,
      {
        scope: n,
        type: r,
        dir: D,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: f,
        content: d,
        onContentChange: m,
        scrollbarX: h,
        onScrollbarXChange: v,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: C,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: w,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ p(
          ma.div,
          {
            dir: D,
            ...i,
            ref: N,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
G_.displayName = Jp;
var U_ = "ScrollAreaViewport", Y_ = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = Mt(U_, n), s = u.useRef(null), l = ue(t, s, i.onViewportChange);
    return /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ p(
        ma.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ p("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Y_.displayName = U_;
var cn = "ScrollAreaScrollbar", K_ = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Mt(cn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ p(qq, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ p(Gq, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ p(X_, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ p(em, { ...r, ref: t }) : null;
  }
);
K_.displayName = cn;
var qq = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Mt(cn, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, f = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ p(Ie, { present: n || a, children: /* @__PURE__ */ p(
    X_,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Gq = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Mt(cn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = fs(() => l("SCROLL_END"), 100), [s, l] = Vq("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return u.useEffect(() => {
    if (s === "idle") {
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [s, o.scrollHideDelay, l]), u.useEffect(() => {
    const c = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let d = c[f];
      const m = () => {
        const h = c[f];
        d !== h && (l("SCROLL"), i()), d = h;
      };
      return c.addEventListener("scroll", m), () => c.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ p(Ie, { present: n || s !== "hidden", children: /* @__PURE__ */ p(
    em,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), X_ = u.forwardRef((e, t) => {
  const n = Mt(cn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", l = fs(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : f);
    }
  }, 10);
  return Fr(n.viewport, l), Fr(n.content, l), /* @__PURE__ */ p(Ie, { present: r || a, children: /* @__PURE__ */ p(
    em,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), em = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Mt(cn, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, l] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = tE(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function d(m, h) {
    return Qq(m, i.current, s, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ p(
    Uq,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, h = Jb(m, s, o.dir);
          a.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = d(m, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ p(
    Yq,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, h = Jb(m, s);
          a.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = d(m));
      }
    }
  ) : null;
}), Uq = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Mt(cn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = ue(t, l, a.onScrollbarXChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ p(
    Q_,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ds(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, d) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), rE(m, d) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: hi(i.paddingLeft),
            paddingEnd: hi(i.paddingRight)
          }
        });
      }
    }
  );
}), Yq = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Mt(cn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = ue(t, l, a.onScrollbarYChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ p(
    Q_,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ds(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, d) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), rE(m, d) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: hi(i.paddingTop),
            paddingEnd: hi(i.paddingBottom)
          }
        });
      }
    }
  );
}), [Kq, Z_] = q_(cn), Q_ = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: f,
    onResize: d,
    ...m
  } = e, h = Mt(cn, n), [v, g] = u.useState(null), b = ue(t, (N) => g(N)), y = u.useRef(null), w = u.useRef(""), x = h.viewport, S = r.content - r.viewport, E = Ae(f), C = Ae(l), _ = fs(d, 10);
  function T(N) {
    if (y.current) {
      const D = N.clientX - y.current.left, O = N.clientY - y.current.top;
      c({ x: D, y: O });
    }
  }
  return u.useEffect(() => {
    const N = (D) => {
      const O = D.target;
      (v == null ? void 0 : v.contains(O)) && E(D, S);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [x, v, S, E]), u.useEffect(C, [r, C]), Fr(v, _), Fr(h.content, _), /* @__PURE__ */ p(
    Kq,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: Ae(a),
      onThumbPointerUp: Ae(i),
      onThumbPositionChange: C,
      onThumbPointerDown: Ae(s),
      children: /* @__PURE__ */ p(
        ma.div,
        {
          ...m,
          ref: b,
          style: { position: "absolute", ...m.style },
          onPointerDown: q(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), y.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), T(N));
          }),
          onPointerMove: q(e.onPointerMove, T),
          onPointerUp: q(e.onPointerUp, (N) => {
            const D = N.target;
            D.hasPointerCapture(N.pointerId) && D.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = w.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), mi = "ScrollAreaThumb", J_ = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Z_(mi, e.__scopeScrollArea);
    return /* @__PURE__ */ p(Ie, { present: n || o.hasThumb, children: /* @__PURE__ */ p(Xq, { ref: t, ...r }) });
  }
), Xq = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Mt(mi, n), i = Z_(mi, n), { onThumbPositionChange: s } = i, l = ue(
      t,
      (d) => i.onThumbChange(d)
    ), c = u.useRef(void 0), f = fs(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const d = a.viewport;
      if (d) {
        const m = () => {
          if (f(), !c.current) {
            const h = Jq(d, s);
            c.current = h, s();
          }
        };
        return s(), d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ p(
      ma.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: q(e.onPointerDownCapture, (d) => {
          const h = d.target.getBoundingClientRect(), v = d.clientX - h.left, g = d.clientY - h.top;
          i.onThumbPointerDown({ x: v, y: g });
        }),
        onPointerUp: q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
J_.displayName = mi;
var tm = "ScrollAreaCorner", eE = u.forwardRef(
  (e, t) => {
    const n = Mt(tm, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ p(Zq, { ...e, ref: t }) : null;
  }
);
eE.displayName = tm;
var Zq = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Mt(tm, n), [a, i] = u.useState(0), [s, l] = u.useState(0), c = !!(a && s);
  return Fr(o.scrollbarX, () => {
    var d;
    const f = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(f), l(f);
  }), Fr(o.scrollbarY, () => {
    var d;
    const f = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), c ? /* @__PURE__ */ p(
    ma.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function hi(e) {
  return e ? parseInt(e, 10) : 0;
}
function tE(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ds(e) {
  const t = tE(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Qq(e, t, n, r = "ltr") {
  const o = ds(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, d = r === "ltr" ? [0, f] : [f * -1, 0];
  return nE([l, c], d)(e);
}
function Jb(e, t, n = "ltr") {
  const r = ds(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = ko(e, l);
  return nE([0, i], [0, s])(c);
}
function nE(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function rE(e, t) {
  return e > 0 && e < t;
}
var Jq = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function fs(e, t) {
  const n = Ae(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Fr(e, t) {
  const n = Ae(t);
  Le(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var e5 = G_, t5 = Y_, n5 = eE;
function W8({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    e5,
    {
      "data-slot": "scroll-area",
      className: R("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ p(
          t5,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ p(r5, {}),
        /* @__PURE__ */ p(n5, {})
      ]
    }
  );
}
function r5({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ p(
    K_,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: R(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ p(
        J_,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
// @__NO_SIDE_EFFECTS__
function oE(e) {
  const t = /* @__PURE__ */ o5(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(i5);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function o5(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = l5(o), s = s5(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var a5 = Symbol("radix.slottable");
function i5(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === a5;
}
function s5(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function l5(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var c5 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], St = c5.reduce((e, t) => {
  const n = /* @__PURE__ */ oE(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), u5 = [" ", "Enter", "ArrowUp", "ArrowDown"], d5 = [" ", "Enter"], rr = "Select", [ps, ms, f5] = kn(rr), [Xr] = Fe(rr, [
  f5,
  sn
]), hs = sn(), [p5, zn] = Xr(rr), [m5, h5] = Xr(rr), aE = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: d,
    disabled: m,
    required: h,
    form: v
  } = e, g = hs(t), [b, y] = u.useState(null), [w, x] = u.useState(null), [S, E] = u.useState(!1), C = jt(c), [_, T] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: rr
  }), [N, D] = $e({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: rr
  }), O = u.useRef(null), k = b ? v || !!b.closest("form") : !0, [M, B] = u.useState(/* @__PURE__ */ new Set()), H = Array.from(M).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ p(Yr, { ...g, children: /* @__PURE__ */ se(
    p5,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: De(),
      value: N,
      onValueChange: D,
      open: _,
      onOpenChange: T,
      dir: C,
      triggerPointerDownPosRef: O,
      disabled: m,
      children: [
        /* @__PURE__ */ p(ps.Provider, { scope: t, children: /* @__PURE__ */ p(
          m5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((L) => {
              B((Y) => new Set(Y).add(L));
            }, []),
            onNativeOptionRemove: u.useCallback((L) => {
              B((Y) => {
                const G = new Set(Y);
                return G.delete(L), G;
              });
            }, []),
            children: n
          }
        ) }),
        k ? /* @__PURE__ */ se(
          ME,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: N,
            onChange: (L) => D(L.target.value),
            disabled: m,
            form: v,
            children: [
              N === void 0 ? /* @__PURE__ */ p("option", { value: "" }) : null,
              Array.from(M)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
aE.displayName = rr;
var iE = "SelectTrigger", sE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = hs(n), i = zn(iE, n), s = i.disabled || r, l = ue(t, i.onTriggerChange), c = ms(n), f = u.useRef("touch"), [d, m, h] = AE((g) => {
      const b = c().filter((x) => !x.disabled), y = b.find((x) => x.value === i.value), w = DE(b, g, y);
      w !== void 0 && i.onValueChange(w.value);
    }), v = (g) => {
      s || (i.onOpenChange(!0), h()), g && (i.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ p(Kr, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      St.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": OE(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: q(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && v(g);
        }),
        onPointerDown: q(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (v(g), g.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (g) => {
          const b = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && m(g.key), !(b && g.key === " ") && u5.includes(g.key) && (v(), g.preventDefault());
        })
      }
    ) });
  }
);
sE.displayName = iE;
var lE = "SelectValue", cE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = zn(lE, n), { onValueNodeHasChildrenChange: c } = l, f = a !== void 0, d = ue(t, l.onValueNodeChange);
    return Le(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ p(
      St.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: OE(l.value) ? /* @__PURE__ */ p(yt, { children: i }) : a
      }
    );
  }
);
cE.displayName = lE;
var g5 = "SelectIcon", uE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p(St.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
uE.displayName = g5;
var v5 = "SelectPortal", dE = (e) => /* @__PURE__ */ p(ar, { asChild: !0, ...e });
dE.displayName = v5;
var or = "SelectContent", fE = u.forwardRef(
  (e, t) => {
    const n = zn(or, e.__scopeSelect), [r, o] = u.useState();
    if (Le(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? zr.createPortal(
        /* @__PURE__ */ p(pE, { scope: e.__scopeSelect, children: /* @__PURE__ */ p(ps.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ p(mE, { ...e, ref: t });
  }
);
fE.displayName = or;
var It = 10, [pE, Wn] = Xr(or), b5 = "SelectContentImpl", y5 = /* @__PURE__ */ oE("SelectContent.RemoveScroll"), mE = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...y
    } = e, w = zn(or, n), [x, S] = u.useState(null), [E, C] = u.useState(null), _ = ue(t, ($) => S($)), [T, N] = u.useState(null), [D, O] = u.useState(
      null
    ), k = ms(n), [M, B] = u.useState(!1), H = u.useRef(!1);
    u.useEffect(() => {
      if (x) return Ri(x);
    }, [x]), Ei();
    const L = u.useCallback(
      ($) => {
        const [V, ...X] = k().map((K) => K.ref.current), [ee] = X.slice(-1), te = document.activeElement;
        for (const K of $)
          if (K === te || (K == null || K.scrollIntoView({ block: "nearest" }), K === V && E && (E.scrollTop = 0), K === ee && E && (E.scrollTop = E.scrollHeight), K == null || K.focus(), document.activeElement !== te)) return;
      },
      [k, E]
    ), Y = u.useCallback(
      () => L([T, x]),
      [L, T, x]
    );
    u.useEffect(() => {
      M && Y();
    }, [M, Y]);
    const { onOpenChange: G, triggerPointerDownPosRef: j } = w;
    u.useEffect(() => {
      if (x) {
        let $ = { x: 0, y: 0 };
        const V = (ee) => {
          var te, K;
          $ = {
            x: Math.abs(Math.round(ee.pageX) - (((te = j.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((K = j.current) == null ? void 0 : K.y) ?? 0))
          };
        }, X = (ee) => {
          $.x <= 10 && $.y <= 10 ? ee.preventDefault() : x.contains(ee.target) || G(!1), document.removeEventListener("pointermove", V), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", X, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", X, { capture: !0 });
        };
      }
    }, [x, G, j]), u.useEffect(() => {
      const $ = () => G(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [G]);
    const [Q, Z] = AE(($) => {
      const V = k().filter((te) => !te.disabled), X = V.find((te) => te.ref.current === document.activeElement), ee = DE(V, $, X);
      ee && setTimeout(() => ee.ref.current.focus());
    }), z = u.useCallback(
      ($, V, X) => {
        const ee = !H.current && !X;
        (w.value !== void 0 && w.value === V || ee) && (N($), ee && (H.current = !0));
      },
      [w.value]
    ), I = u.useCallback(() => x == null ? void 0 : x.focus(), [x]), W = u.useCallback(
      ($, V, X) => {
        const ee = !H.current && !X;
        (w.value !== void 0 && w.value === V || ee) && O($);
      },
      [w.value]
    ), F = r === "popper" ? Gd : hE, U = F === Gd ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ p(
      pE,
      {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: C,
        itemRefCallback: z,
        selectedItem: T,
        onItemLeave: I,
        itemTextRefCallback: W,
        focusSelectedItem: Y,
        selectedItemText: D,
        position: r,
        isPositioned: M,
        searchRef: Q,
        children: /* @__PURE__ */ p(Wo, { as: y5, allowPinchZoom: !0, children: /* @__PURE__ */ p(
          Bo,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: q(o, ($) => {
              var V;
              (V = w.trigger) == null || V.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ p(
              $n,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p(
                  F,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => B(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: q(y.onKeyDown, ($) => {
                      const V = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !V && $.key.length === 1 && Z($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let ee = k().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const te = $.target, K = ee.indexOf(te);
                          ee = ee.slice(K + 1);
                        }
                        setTimeout(() => L(ee)), $.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
mE.displayName = b5;
var w5 = "SelectItemAlignedPosition", hE = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = zn(or, n), i = Wn(or, n), [s, l] = u.useState(null), [c, f] = u.useState(null), d = ue(t, (_) => f(_)), m = ms(n), h = u.useRef(!1), v = u.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && g && b && y) {
      const _ = a.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = D.left - T.left, K = N.left - te, oe = _.left - K, A = _.width + oe, ne = Math.max(A, T.width), me = window.innerWidth - It, he = ko(K, [
          It,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(It, me - ne)
        ]);
        s.style.minWidth = A + "px", s.style.left = he + "px";
      } else {
        const te = T.right - D.right, K = window.innerWidth - N.right - te, oe = window.innerWidth - _.right - K, A = _.width + oe, ne = Math.max(A, T.width), me = window.innerWidth - It, he = ko(K, [
          It,
          Math.max(It, me - ne)
        ]);
        s.style.minWidth = A + "px", s.style.right = he + "px";
      }
      const O = m(), k = window.innerHeight - It * 2, M = g.scrollHeight, B = window.getComputedStyle(c), H = parseInt(B.borderTopWidth, 10), L = parseInt(B.paddingTop, 10), Y = parseInt(B.borderBottomWidth, 10), G = parseInt(B.paddingBottom, 10), j = H + L + M + G + Y, Q = Math.min(b.offsetHeight * 5, j), Z = window.getComputedStyle(g), z = parseInt(Z.paddingTop, 10), I = parseInt(Z.paddingBottom, 10), W = _.top + _.height / 2 - It, F = k - W, U = b.offsetHeight / 2, $ = b.offsetTop + U, V = H + L + $, X = j - V;
      if (V <= W) {
        const te = O.length > 0 && b === O[O.length - 1].ref.current;
        s.style.bottom = "0px";
        const K = c.clientHeight - g.offsetTop - g.offsetHeight, oe = Math.max(
          F,
          U + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? I : 0) + K + Y
        ), A = V + oe;
        s.style.height = A + "px";
      } else {
        const te = O.length > 0 && b === O[0].ref.current;
        s.style.top = "0px";
        const oe = Math.max(
          W,
          H + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? z : 0) + U
        ) + X;
        s.style.height = oe + "px", g.scrollTop = V - W + g.offsetTop;
      }
      s.style.margin = `${It}px 0`, s.style.minHeight = Q + "px", s.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    c,
    g,
    b,
    y,
    a.dir,
    r
  ]);
  Le(() => x(), [x]);
  const [S, E] = u.useState();
  Le(() => {
    c && E(window.getComputedStyle(c).zIndex);
  }, [c]);
  const C = u.useCallback(
    (_) => {
      _ && v.current === !0 && (x(), w == null || w(), v.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ p(
    S5,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: C,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ p(
            St.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
hE.displayName = w5;
var x5 = "SelectPopperPosition", Gd = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = It,
    ...a
  } = e, i = hs(n);
  return /* @__PURE__ */ p(
    na,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Gd.displayName = x5;
var [S5, nm] = Xr(or, {}), Ud = "SelectViewport", gE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Wn(Ud, n), i = nm(Ud, n), s = ue(t, a.onViewportChange), l = u.useRef(0);
    return /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p(ps.Slot, { scope: n, children: /* @__PURE__ */ p(
        St.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: q(o.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && d) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - It * 2, g = parseFloat(d.style.minHeight), b = parseFloat(d.style.height), y = Math.max(g, b);
                if (y < v) {
                  const w = y + h, x = Math.min(v, w), S = w - x;
                  d.style.height = x + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
gE.displayName = Ud;
var vE = "SelectGroup", [C5, _5] = Xr(vE), bE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = De();
    return /* @__PURE__ */ p(C5, { scope: n, id: o, children: /* @__PURE__ */ p(St.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
bE.displayName = vE;
var yE = "SelectLabel", wE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = _5(yE, n);
    return /* @__PURE__ */ p(St.div, { id: o.id, ...r, ref: t });
  }
);
wE.displayName = yE;
var gi = "SelectItem", [E5, xE] = Xr(gi), SE = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = zn(gi, n), l = Wn(gi, n), c = s.value === r, [f, d] = u.useState(a ?? ""), [m, h] = u.useState(!1), v = ue(
      t,
      (w) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, w, r, o);
      }
    ), g = De(), b = u.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p(
      E5,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: u.useCallback((w) => {
          d((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p(
          ps.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ p(
              St.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": c && m,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: q(i.onFocus, () => h(!0)),
                onBlur: q(i.onBlur, () => h(!1)),
                onClick: q(i.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: q(i.onPointerDown, (w) => {
                  b.current = w.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (w) => {
                  var x;
                  b.current = w.pointerType, o ? (x = l.onItemLeave) == null || x.call(l) : b.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (w) => {
                  var x;
                  w.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: q(i.onKeyDown, (w) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && w.key === " " || (d5.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
SE.displayName = gi;
var vo = "SelectItemText", CE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = zn(vo, n), s = Wn(vo, n), l = xE(vo, n), c = h5(vo, n), [f, d] = u.useState(null), m = ue(
      t,
      (y) => d(y),
      l.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, v = u.useMemo(
      () => /* @__PURE__ */ p("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = c;
    return Le(() => (g(v), () => b(v)), [g, b, v]), /* @__PURE__ */ se(yt, { children: [
      /* @__PURE__ */ p(St.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? zr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
CE.displayName = vo;
var _E = "SelectItemIndicator", EE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return xE(_E, n).isSelected ? /* @__PURE__ */ p(St.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
EE.displayName = _E;
var Yd = "SelectScrollUpButton", PE = u.forwardRef((e, t) => {
  const n = Wn(Yd, e.__scopeSelect), r = nm(Yd, e.__scopeSelect), [o, a] = u.useState(!1), i = ue(t, r.onScrollButtonChange);
  return Le(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    NE,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
PE.displayName = Yd;
var Kd = "SelectScrollDownButton", RE = u.forwardRef((e, t) => {
  const n = Wn(Kd, e.__scopeSelect), r = nm(Kd, e.__scopeSelect), [o, a] = u.useState(!1), i = ue(t, r.onScrollButtonChange);
  return Le(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        a(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    NE,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
RE.displayName = Kd;
var NE = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Wn("SelectScrollButton", n), i = u.useRef(null), s = ms(n), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Le(() => {
    var f;
    const c = s().find((d) => d.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ p(
    St.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        var c;
        (c = a.onItemLeave) == null || c.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), P5 = "SelectSeparator", TE = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p(St.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
TE.displayName = P5;
var Xd = "SelectArrow", R5 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hs(n), a = zn(Xd, n), i = Wn(Xd, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ p(ra, { ...o, ...r, ref: t }) : null;
  }
);
R5.displayName = Xd;
var N5 = "SelectBubbleInput", ME = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ue(r, o), i = qr(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ p(
      St.select,
      {
        ...n,
        style: { ...RC, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
ME.displayName = N5;
function OE(e) {
  return e === "" || e === void 0;
}
function AE(e) {
  const t = Ae(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), (function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function DE(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = T5(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function T5(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var M5 = aE, O5 = sE, A5 = cE, D5 = uE, I5 = dE, k5 = fE, $5 = gE, L5 = bE, F5 = wE, B5 = SE, z5 = CE, W5 = EE, j5 = PE, V5 = RE, H5 = TE;
function j8({
  ...e
}) {
  return /* @__PURE__ */ p(M5, { "data-slot": "select", ...e });
}
function V8({
  ...e
}) {
  return /* @__PURE__ */ p(L5, { "data-slot": "select-group", ...e });
}
function H8({
  ...e
}) {
  return /* @__PURE__ */ p(A5, { "data-slot": "select-value", ...e });
}
function q8({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    O5,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: R(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p(D5, { asChild: !0, children: /* @__PURE__ */ p(Wr, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function G8({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ p(I5, { children: /* @__PURE__ */ se(
    k5,
    {
      "data-slot": "select-content",
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ p(q5, {}),
        /* @__PURE__ */ p(
          $5,
          {
            className: R(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p(G5, {})
      ]
    }
  ) });
}
function U8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    F5,
    {
      "data-slot": "select-label",
      className: R("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function Y8({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    B5,
    {
      "data-slot": "select-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ p(W5, { children: /* @__PURE__ */ p(Fo, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ p(z5, { children: t })
      ]
    }
  );
}
function K8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    H5,
    {
      "data-slot": "select-separator",
      className: R("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function q5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    j5,
    {
      "data-slot": "select-scroll-up-button",
      className: R(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(ER, { className: "size-4" })
    }
  );
}
function G5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    V5,
    {
      "data-slot": "select-scroll-down-button",
      className: R(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(Wr, { className: "size-4" })
    }
  );
}
var U5 = "Separator", ey = "horizontal", Y5 = ["horizontal", "vertical"], IE = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = ey, ...o } = e, a = K5(r) ? r : ey, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ p(
    rt.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
IE.displayName = U5;
function K5(e) {
  return Y5.includes(e);
}
var X5 = IE;
function gs({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ p(
    X5,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: R(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function Z5({ ...e }) {
  return /* @__PURE__ */ p(jo, { "data-slot": "sheet", ...e });
}
function X8({
  ...e
}) {
  return /* @__PURE__ */ p(Ti, { "data-slot": "sheet-trigger", ...e });
}
function Z8({
  ...e
}) {
  return /* @__PURE__ */ p(ir, { "data-slot": "sheet-close", ...e });
}
function Q5({
  ...e
}) {
  return /* @__PURE__ */ p(Vo, { "data-slot": "sheet-portal", ...e });
}
function J5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Ho,
    {
      "data-slot": "sheet-overlay",
      className: R(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function e3({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ se(Q5, { children: [
    /* @__PURE__ */ p(J5, {}),
    /* @__PURE__ */ se(
      qo,
      {
        "data-slot": "sheet-content",
        className: R(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ se(ir, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ p(Dy, { className: "size-4" }),
            /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function t3({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sheet-header",
      className: R("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Q8({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sheet-footer",
      className: R("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function n3({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Mi,
    {
      "data-slot": "sheet-title",
      className: R("text-foreground font-semibold", e),
      ...t
    }
  );
}
function r3({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Oi,
    {
      "data-slot": "sheet-description",
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const rd = 768;
function o3() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${rd - 1}px)`), r = () => {
      t(window.innerWidth < rd);
    };
    return n.addEventListener("change", r), t(window.innerWidth < rd), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function kE({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ p(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: R(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-12 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base transition-[color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
function ty({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "skeleton",
      className: R("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function a3(e) {
  const t = /* @__PURE__ */ i3(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(l3);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function i3(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = u3(o), s = c3(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var $E = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function s3(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p(yt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = $E, t;
}
function l3(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $E;
}
function c3(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function u3(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var d3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], f3 = d3.reduce((e, t) => {
  const n = /* @__PURE__ */ a3(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), [vs] = Fe("Tooltip", [
  sn
]), bs = sn(), LE = "TooltipProvider", p3 = 700, Zd = "tooltip.open", [m3, rm] = vs(LE), FE = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = p3,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ p(
    m3,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((c) => {
        s.current = c;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
FE.displayName = LE;
var $o = "Tooltip", [h3, ha] = vs($o), BE = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = rm($o, e.__scopeTooltip), c = bs(t), [f, d] = u.useState(null), m = De(), h = u.useRef(0), v = i ?? l.disableHoverableContent, g = s ?? l.delayDuration, b = u.useRef(!1), [y, w] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Zd))) : l.onClose(), a == null || a(_);
    },
    caller: $o
  }), x = u.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), S = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, w(!0);
  }, [w]), E = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, w(!0), h.current = 0;
    }, g);
  }, [g, w]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ p(Yr, { ...c, children: /* @__PURE__ */ p(
    h3,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? C() : S();
      }, [l.isOpenDelayedRef, C, S]),
      onTriggerLeave: u.useCallback(() => {
        v ? E() : (window.clearTimeout(h.current), h.current = 0);
      }, [E, v]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
BE.displayName = $o;
var Qd = "TooltipTrigger", zE = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ha(Qd, n), a = rm(Qd, n), i = bs(n), s = u.useRef(null), l = ue(t, s, o.onTriggerChange), c = u.useRef(!1), f = u.useRef(!1), d = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ p(Kr, { asChild: !0, ...i, children: /* @__PURE__ */ p(
      f3.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: q(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
zE.displayName = Qd;
var om = "TooltipPortal", [g3, v3] = vs(om, {
  forceMount: void 0
}), WE = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = ha(om, t);
  return /* @__PURE__ */ p(g3, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Ie, { present: n || a.open, children: /* @__PURE__ */ p(ar, { asChild: !0, container: o, children: r }) }) });
};
WE.displayName = om;
var Br = "TooltipContent", jE = u.forwardRef(
  (e, t) => {
    const n = v3(Br, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = ha(Br, e.__scopeTooltip);
    return /* @__PURE__ */ p(Ie, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p(VE, { side: o, ...a, ref: t }) : /* @__PURE__ */ p(b3, { side: o, ...a, ref: t }) });
  }
), b3 = u.forwardRef((e, t) => {
  const n = ha(Br, e.__scopeTooltip), r = rm(Br, e.__scopeTooltip), o = u.useRef(null), a = ue(t, o), [i, s] = u.useState(null), { trigger: l, onClose: c } = n, f = o.current, { onPointerInTransitChange: d } = r, m = u.useCallback(() => {
    s(null), d(!1);
  }, [d]), h = u.useCallback(
    (v, g) => {
      const b = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = S3(y, b.getBoundingClientRect()), x = C3(y, w), S = _3(g.getBoundingClientRect()), E = P3([...x, ...S]);
      s(E), d(!0);
    },
    [d]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (l && f) {
      const v = (b) => h(b, f), g = (b) => h(b, l);
      return l.addEventListener("pointerleave", v), f.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", g);
      };
    }
  }, [l, f, h, m]), u.useEffect(() => {
    if (i) {
      const v = (g) => {
        const b = g.target, y = { x: g.clientX, y: g.clientY }, w = (l == null ? void 0 : l.contains(b)) || (f == null ? void 0 : f.contains(b)), x = !E3(y, i);
        w ? m() : x && (m(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, f, i, c, m]), /* @__PURE__ */ p(VE, { ...e, ref: a });
}), [y3, w3] = vs($o, { isInside: !1 }), x3 = /* @__PURE__ */ s3("TooltipContent"), VE = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = ha(Br, n), c = bs(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(Zd, f), () => document.removeEventListener(Zd, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const d = (m) => {
          const h = m.target;
          h != null && h.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ p(
      $n,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ se(
          na,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p(x3, { children: r }),
              /* @__PURE__ */ p(y3, { scope: n, isInside: !0, children: /* @__PURE__ */ p(TC, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
jE.displayName = Br;
var HE = "TooltipArrow", qE = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = bs(n);
    return w3(
      HE,
      n
    ).isInside ? null : /* @__PURE__ */ p(ra, { ...o, ...r, ref: t });
  }
);
qE.displayName = HE;
function S3(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function C3(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function _3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function E3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, f = s.y, d = l.x, m = l.y;
    f > r != m > r && n < (d - c) * (r - f) / (m - f) + c && (o = !o);
  }
  return o;
}
function P3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), R3(t);
}
function R3(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var N3 = FE, T3 = BE, M3 = zE, O3 = WE, A3 = jE, D3 = qE;
function GE({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ p(
    N3,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function I3({
  ...e
}) {
  return /* @__PURE__ */ p(GE, { children: /* @__PURE__ */ p(T3, { "data-slot": "tooltip", ...e }) });
}
function k3({
  ...e
}) {
  return /* @__PURE__ */ p(M3, { "data-slot": "tooltip-trigger", ...e });
}
function $3({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p(O3, { children: /* @__PURE__ */ se(
    A3,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: R(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p(D3, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const L3 = "sidebar_state", F3 = 3600 * 24 * 7, B3 = "16rem", z3 = "18rem", W3 = "3rem", j3 = "b", UE = u.createContext(null);
function ys() {
  const e = u.useContext(UE);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function J8({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: a,
  ...i
}) {
  const s = o3(), [l, c] = u.useState(!1), [f, d] = u.useState(e), m = t ?? f, h = u.useCallback(
    (y) => {
      const w = typeof y == "function" ? y(m) : y;
      n ? n(w) : d(w), document.cookie = `${L3}=${w}; path=/; max-age=${F3}`;
    },
    [n, m]
  ), v = u.useCallback(() => s ? c((y) => !y) : h((y) => !y), [s, h, c]);
  u.useEffect(() => {
    const y = (w) => {
      w.key === j3 && (w.metaKey || w.ctrlKey) && (w.preventDefault(), v());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [v]);
  const g = m ? "expanded" : "collapsed", b = u.useMemo(
    () => ({
      state: g,
      open: m,
      setOpen: h,
      isMobile: s,
      openMobile: l,
      setOpenMobile: c,
      toggleSidebar: v
    }),
    [g, m, h, s, l, c, v]
  );
  return /* @__PURE__ */ p(UE.Provider, { value: b, children: /* @__PURE__ */ p(GE, { delayDuration: 0, children: /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": B3,
        "--sidebar-width-icon": W3,
        ...o
      },
      className: R(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: a
    }
  ) }) });
}
function e6({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  ...a
}) {
  const { isMobile: i, state: s, openMobile: l, setOpenMobile: c } = ys();
  return n === "none" ? /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar",
      className: R(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...a,
      children: o
    }
  ) : i ? /* @__PURE__ */ p(Z5, { open: l, onOpenChange: c, ...a, children: /* @__PURE__ */ se(
    e3,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": z3
      },
      side: e,
      children: [
        /* @__PURE__ */ se(t3, { className: "sr-only", children: [
          /* @__PURE__ */ p(n3, { children: "Sidebar" }),
          /* @__PURE__ */ p(r3, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ p("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ se(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: R(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-slot": "sidebar-container",
            className: R(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...a,
            children: /* @__PURE__ */ p(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function t6({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = ys();
  return /* @__PURE__ */ se(
    Go,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: R("size-7", e),
      onClick: (o) => {
        t == null || t(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ p(zR, {}),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function n6({ className: e, ...t }) {
  const { toggleSidebar: n } = ys();
  return /* @__PURE__ */ p(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: R(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function r6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: R(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function o6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    kE,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: R("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function a6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: R("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function i6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: R("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function s6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    gs,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: R("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function l6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: R(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function c6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: R("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function u6({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ p(
    t ? Ht : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: R(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function d6({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ p(
    t ? Ht : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: R(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...n
    }
  );
}
function f6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: R("w-full text-sm", e),
      ...t
    }
  );
}
function p6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: R("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function m6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: R("group/menu-item relative", e),
      ...t
    }
  );
}
const V3 = xt(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function h6({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: a,
  ...i
}) {
  const s = e ? Ht : "button", { isMobile: l, state: c } = ys(), f = /* @__PURE__ */ p(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: R(V3({ variant: n, size: r }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ se(I3, { children: [
    /* @__PURE__ */ p(k3, { asChild: !0, children: f }),
    /* @__PURE__ */ p(
      $3,
      {
        side: "right",
        align: "center",
        hidden: c !== "collapsed" || l,
        ...o
      }
    )
  ] })) : f;
}
function g6({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...r
}) {
  return /* @__PURE__ */ p(
    t ? Ht : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: R(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...r
    }
  );
}
function v6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: R(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function b6({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const r = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ se(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: R("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ p(
          ty,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ p(
          ty,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": r
            }
          }
        )
      ]
    }
  );
}
function y6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: R(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function w6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: R("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function x6({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ p(
    e ? Ht : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: R(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...o
    }
  );
}
// @__NO_SIDE_EFFECTS__
function H3(e) {
  const t = /* @__PURE__ */ q3(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(U3);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function q3(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = K3(o), s = Y3(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var G3 = Symbol("radix.slottable");
function U3(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === G3;
}
function Y3(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function K3(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var X3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ga = X3.reduce((e, t) => {
  const n = /* @__PURE__ */ H3(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), YE = ["PageUp", "PageDown"], KE = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], XE = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Zr = "Slider", [Jd, Z3, Q3] = kn(Zr), [ZE] = Fe(Zr, [
  Q3
]), [J3, ws] = ZE(Zr), QE = u.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: f,
      onValueChange: d = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: h = !1,
      form: v,
      ...g
    } = e, b = u.useRef(/* @__PURE__ */ new Set()), y = u.useRef(0), x = i === "horizontal" ? eG : tG, [S = [], E] = $e({
      prop: f,
      defaultProp: c,
      onChange: (O) => {
        var M;
        (M = [...b.current][y.current]) == null || M.focus(), d(O);
      }
    }), C = u.useRef(S);
    function _(O) {
      const k = iG(S, O);
      D(O, k);
    }
    function T(O) {
      D(O, y.current);
    }
    function N() {
      const O = C.current[y.current];
      S[y.current] !== O && m(S);
    }
    function D(O, k, { commit: M } = { commit: !1 }) {
      const B = uG(a), H = dG(Math.round((O - r) / a) * a + r, B), L = ko(H, [r, o]);
      E((Y = []) => {
        const G = oG(Y, L, k);
        if (cG(G, l * a)) {
          y.current = G.indexOf(L);
          const j = String(G) !== String(Y);
          return j && M && m(G), j ? G : Y;
        } else
          return Y;
      });
    }
    return /* @__PURE__ */ p(
      J3,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: b.current,
        values: S,
        orientation: i,
        form: v,
        children: /* @__PURE__ */ p(Jd.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(Jd.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...g,
            ref: t,
            onPointerDown: q(g.onPointerDown, () => {
              s || (C.current = S);
            }),
            min: r,
            max: o,
            inverted: h,
            onSlideStart: s ? void 0 : _,
            onSlideMove: s ? void 0 : T,
            onSlideEnd: s ? void 0 : N,
            onHomeKeyDown: () => !s && D(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && D(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: O, direction: k }) => {
              if (!s) {
                const H = YE.includes(O.key) || O.shiftKey && KE.includes(O.key) ? 10 : 1, L = y.current, Y = S[L], G = a * H * k;
                D(Y + G, L, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
QE.displayName = Zr;
var [JE, eP] = ZE(Zr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), eG = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...f
    } = e, [d, m] = u.useState(null), h = ue(t, (x) => m(x)), v = u.useRef(void 0), g = jt(o), b = g === "ltr", y = b && !a || !b && a;
    function w(x) {
      const S = v.current || d.getBoundingClientRect(), E = [0, S.width], _ = am(E, y ? [n, r] : [r, n]);
      return v.current = S, _(x - S.left);
    }
    return /* @__PURE__ */ p(
      JE,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p(
          tP,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...f,
            ref: h,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const S = w(x.clientX);
              i == null || i(S);
            },
            onSlideMove: (x) => {
              const S = w(x.clientX);
              s == null || s(S);
            },
            onSlideEnd: () => {
              v.current = void 0, l == null || l();
            },
            onStepKeyDown: (x) => {
              const E = XE[y ? "from-left" : "from-right"].includes(x.key);
              c == null || c({ event: x, direction: E ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), tG = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...c
    } = e, f = u.useRef(null), d = ue(t, f), m = u.useRef(void 0), h = !o;
    function v(g) {
      const b = m.current || f.current.getBoundingClientRect(), y = [0, b.height], x = am(y, h ? [r, n] : [n, r]);
      return m.current = b, x(g - b.top);
    }
    return /* @__PURE__ */ p(
      JE,
      {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: /* @__PURE__ */ p(
          tP,
          {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const b = v(g.clientY);
              a == null || a(b);
            },
            onSlideMove: (g) => {
              const b = v(g.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              m.current = void 0, s == null || s();
            },
            onStepKeyDown: (g) => {
              const y = XE[h ? "from-bottom" : "from-top"].includes(g.key);
              l == null || l({ event: g, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), tP = u.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...c
    } = e, f = ws(Zr, n);
    return /* @__PURE__ */ p(
      ga.span,
      {
        ...c,
        ref: t,
        onKeyDown: q(e.onKeyDown, (d) => {
          d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : YE.concat(KE).includes(d.key) && (l(d), d.preventDefault());
        }),
        onPointerDown: q(e.onPointerDown, (d) => {
          const m = d.target;
          m.setPointerCapture(d.pointerId), d.preventDefault(), f.thumbs.has(m) ? m.focus() : r(d);
        }),
        onPointerMove: q(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && o(d);
        }),
        onPointerUp: q(e.onPointerUp, (d) => {
          const m = d.target;
          m.hasPointerCapture(d.pointerId) && (m.releasePointerCapture(d.pointerId), a(d));
        })
      }
    );
  }
), nP = "SliderTrack", rP = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ws(nP, n);
    return /* @__PURE__ */ p(
      ga.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
rP.displayName = nP;
var ef = "SliderRange", oP = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ws(ef, n), a = eP(ef, n), i = u.useRef(null), s = ue(t, i), l = o.values.length, c = o.values.map(
      (m) => sP(m, o.min, o.max)
    ), f = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
    return /* @__PURE__ */ p(
      ga.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: f + "%",
          [a.endEdge]: d + "%"
        }
      }
    );
  }
);
oP.displayName = ef;
var tf = "SliderThumb", aP = u.forwardRef(
  (e, t) => {
    const n = Z3(e.__scopeSlider), [r, o] = u.useState(null), a = ue(t, (s) => o(s)), i = u.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ p(nG, { ...e, ref: a, index: i });
  }
), nG = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = ws(tf, n), s = eP(tf, n), [l, c] = u.useState(null), f = ue(t, (w) => c(w)), d = l ? i.form || !!l.closest("form") : !0, m = Jo(l), h = i.values[r], v = h === void 0 ? 0 : sP(h, i.min, i.max), g = aG(r, i.values.length), b = m == null ? void 0 : m[s.size], y = b ? sG(b, v, s.direction) : 0;
    return u.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ se(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${v}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ p(Jd.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(
            ga.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || g,
              "aria-valuemin": i.min,
              "aria-valuenow": h,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: f,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: q(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          d && /* @__PURE__ */ p(
            iP,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            },
            r
          )
        ]
      }
    );
  }
);
aP.displayName = tf;
var rG = "RadioBubbleInput", iP = u.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ue(o, r), i = qr(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== t && f) {
        const d = new Event("input", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ p(
      ga.input,
      {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t
      }
    );
  }
);
iP.displayName = rG;
function oG(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function sP(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ko(a, [0, 100]);
}
function aG(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function iG(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function sG(e, t, n) {
  const r = e / 2, a = am([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function lG(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function cG(e, t) {
  if (t > 0) {
    const n = lG(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function am(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function uG(e) {
  return (String(e).split(".")[1] || "").length;
}
function dG(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var fG = QE, pG = rP, mG = oP, hG = aP;
function S6({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: o = 100,
  ...a
}) {
  const i = u.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [r, o],
    [n, t, r, o]
  );
  return /* @__PURE__ */ se(
    fG,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: r,
      max: o,
      className: R(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ p(
          pG,
          {
            "data-slot": "slider-track",
            className: R(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ p(
              mG,
              {
                "data-slot": "slider-range",
                className: R(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, l) => /* @__PURE__ */ p(
          hG,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          l
        ))
      ]
    }
  );
}
function C6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    Ay,
    {
      role: "status",
      "aria-label": "Loading",
      className: R("size-4 animate-spin", e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function gG(e) {
  const t = /* @__PURE__ */ vG(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(yG);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function vG(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = xG(o), s = wG(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var bG = Symbol("radix.slottable");
function yG(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bG;
}
function wG(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function xG(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var SG = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], lP = SG.reduce((e, t) => {
  const n = /* @__PURE__ */ gG(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), xs = "Switch", [CG] = Fe(xs), [_G, EG] = CG(xs), cP = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: f,
      ...d
    } = e, [m, h] = u.useState(null), v = ue(t, (x) => h(x)), g = u.useRef(!1), b = m ? f || !!m.closest("form") : !0, [y, w] = $e({
      prop: o,
      defaultProp: a ?? !1,
      onChange: c,
      caller: xs
    });
    return /* @__PURE__ */ se(_G, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ p(
        lP.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": pP(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: v,
          onClick: q(e.onClick, (x) => {
            w((S) => !S), b && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ p(
        fP,
        {
          control: m,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cP.displayName = xs;
var uP = "SwitchThumb", dP = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = EG(uP, n);
    return /* @__PURE__ */ p(
      lP.span,
      {
        "data-state": pP(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
dP.displayName = uP;
var PG = "SwitchBubbleInput", fP = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ue(i, a), l = qr(n), c = Jo(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== n && h) {
        const v = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ p(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
fP.displayName = PG;
function pP(e) {
  return e ? "checked" : "unchecked";
}
var RG = cP, NG = dP;
function _6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    RG,
    {
      "data-slot": "switch",
      className: R(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(
        NG,
        {
          "data-slot": "switch-thumb",
          className: R(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function E6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ p(
        "table",
        {
          "data-slot": "table",
          className: R("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function P6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "thead",
    {
      "data-slot": "table-header",
      className: R("[&_tr]:border-b", e),
      ...t
    }
  );
}
function R6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "tbody",
    {
      "data-slot": "table-body",
      className: R("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function N6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: R(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function T6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "tr",
    {
      "data-slot": "table-row",
      className: R(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function M6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "th",
    {
      "data-slot": "table-head",
      className: R(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function O6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "td",
    {
      "data-slot": "table-cell",
      className: R(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function A6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "caption",
    {
      "data-slot": "table-caption",
      className: R("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function TG(e) {
  const t = /* @__PURE__ */ MG(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(AG);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function MG(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = IG(o), s = DG(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var OG = Symbol("radix.slottable");
function AG(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === OG;
}
function DG(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function IG(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var kG = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ss = kG.reduce((e, t) => {
  const n = /* @__PURE__ */ TG(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Cs = "Tabs", [$G] = Fe(Cs, [
  ln
]), mP = ln(), [LG, im] = $G(Cs), hP = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...c
    } = e, f = jt(s), [d, m] = $e({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Cs
    });
    return /* @__PURE__ */ p(
      LG,
      {
        scope: n,
        baseId: De(),
        value: d,
        onValueChange: m,
        orientation: i,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ p(
          Ss.div,
          {
            dir: f,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
hP.displayName = Cs;
var gP = "TabsList", vP = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = im(gP, n), i = mP(n);
    return /* @__PURE__ */ p(
      ia,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ p(
          Ss.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
vP.displayName = gP;
var bP = "TabsTrigger", yP = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = im(bP, n), s = mP(n), l = SP(i.baseId, r), c = CP(i.baseId, r), f = r === i.value;
    return /* @__PURE__ */ p(
      sa,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ p(
          Ss.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: q(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !f && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
yP.displayName = bP;
var wP = "TabsContent", xP = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = im(wP, n), l = SP(s.baseId, r), c = CP(s.baseId, r), f = r === s.value, d = u.useRef(f);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ p(Ie, { present: o || f, children: ({ present: m }) => /* @__PURE__ */ p(
      Ss.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !m,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
xP.displayName = wP;
function SP(e, t) {
  return `${e}-trigger-${t}`;
}
function CP(e, t) {
  return `${e}-content-${t}`;
}
var FG = hP, BG = vP, zG = yP, WG = xP;
const _P = u.createContext({
  listRef: u.createRef(),
  updateIndicator: () => {
  }
});
function D6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    FG,
    {
      "data-slot": "tabs",
      className: R("flex flex-col gap-2", e),
      ...t
    }
  );
}
function I6({
  className: e,
  children: t,
  ...n
}) {
  const [r, o] = u.useState({
    opacity: 0
  }), a = u.useRef(null), i = u.useCallback(() => {
    if (!a.current) return;
    const s = a.current.querySelector(
      '[data-state="active"]'
    );
    if (!s) {
      o({ opacity: 0 });
      return;
    }
    const l = a.current.getBoundingClientRect(), c = s.getBoundingClientRect();
    o({
      left: `${c.left - l.left}px`,
      width: `${c.width}px`,
      opacity: 1
    });
  }, []);
  return u.useEffect(() => {
    i();
    const s = new MutationObserver(i);
    return a.current && s.observe(a.current, {
      attributes: !0,
      attributeFilter: ["data-state"],
      subtree: !0
    }), window.addEventListener("resize", i), () => {
      s.disconnect(), window.removeEventListener("resize", i);
    };
  }, [i]), /* @__PURE__ */ p(_P.Provider, { value: { listRef: a, updateIndicator: i }, children: /* @__PURE__ */ se(
    BG,
    {
      ref: a,
      "data-slot": "tabs-list",
      className: R(
        "bg-accent text-muted-foreground relative inline-flex h-12 w-fit items-center justify-center rounded-full p-[3px]",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: "bg-background dark:bg-input/30 absolute h-[calc(100%-6px)] rounded-full transition-all duration-200 ease-out shadow-sm",
            style: r,
            "aria-hidden": "true"
          }
        ),
        t
      ]
    }
  ) });
}
const jG = u.forwardRef(({ className: e, ...t }, n) => {
  const { updateIndicator: r } = u.useContext(_P);
  return u.useEffect(() => {
    const o = () => {
      setTimeout(r, 0);
    }, a = n && typeof n != "function" ? n.current : null;
    if (a)
      return a.addEventListener("click", o), () => a.removeEventListener("click", o);
  }, [n, r]), /* @__PURE__ */ p(
    zG,
    {
      ref: n,
      "data-slot": "tabs-trigger",
      className: R(
        "relative z-10 dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring focus-visible:outline-ring text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-full border border-transparent px-4 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
});
jG.displayName = "TabsTrigger";
function k6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    WG,
    {
      "data-slot": "tabs-content",
      className: R("flex-1 outline-none", e),
      ...t
    }
  );
}
function VG({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "textarea",
    {
      "data-slot": "textarea",
      className: R(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function HG(e) {
  const t = /* @__PURE__ */ qG(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(UG);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function qG(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = KG(o), s = YG(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var GG = Symbol("radix.slottable");
function UG(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === GG;
}
function YG(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function KG(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var XG = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ZG = XG.reduce((e, t) => {
  const n = /* @__PURE__ */ HG(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), EP = "Toggle", sm = u.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [i, s] = $e({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: EP
  });
  return /* @__PURE__ */ p(
    ZG.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: q(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
sm.displayName = EP;
var QG = sm;
const PP = xt(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function $6({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ p(
    QG,
    {
      "data-slot": "toggle",
      className: R(PP({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
// @__NO_SIDE_EFFECTS__
function JG(e) {
  const t = /* @__PURE__ */ eU(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(nU);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function eU(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = oU(o), s = rU(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var tU = Symbol("radix.slottable");
function nU(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === tU;
}
function rU(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function oU(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var aU = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ny = aU.reduce((e, t) => {
  const n = /* @__PURE__ */ JG(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), jn = "ToggleGroup", [RP] = Fe(jn, [
  ln
]), NP = ln(), lm = P.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ p(iU, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ p(sU, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${jn}\``);
});
lm.displayName = jn;
var [TP, MP] = RP(jn), iU = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = $e({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: jn
  });
  return /* @__PURE__ */ p(
    TP,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: P.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: P.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ p(OP, { ...a, ref: t })
    }
  );
}), sU = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = $e({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: jn
  }), l = P.useCallback(
    (f) => s((d = []) => [...d, f]),
    [s]
  ), c = P.useCallback(
    (f) => s((d = []) => d.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ p(
    TP,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: /* @__PURE__ */ p(OP, { ...a, ref: t })
    }
  );
});
lm.displayName = jn;
var [lU, cU] = RP(jn), OP = P.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...l
    } = e, c = NP(n), f = jt(i), d = { role: "group", dir: f, ...l };
    return /* @__PURE__ */ p(lU, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ p(
      ia,
      {
        asChild: !0,
        ...c,
        orientation: a,
        dir: f,
        loop: s,
        children: /* @__PURE__ */ p(ny.div, { ...d, ref: t })
      }
    ) : /* @__PURE__ */ p(ny.div, { ...d, ref: t }) });
  }
), vi = "ToggleGroupItem", AP = P.forwardRef(
  (e, t) => {
    const n = MP(vi, e.__scopeToggleGroup), r = cU(vi, e.__scopeToggleGroup), o = NP(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, l = P.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ p(
      sa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: l,
        children: /* @__PURE__ */ p(ry, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ p(ry, { ...s, ref: t });
  }
);
AP.displayName = vi;
var ry = P.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = MP(vi, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ p(
      sm,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), uU = lm, dU = AP;
const DP = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function L6({
  className: e,
  variant: t,
  size: n,
  spacing: r = 0,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ p(
    uU,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      "data-spacing": r,
      style: { "--gap": r },
      className: R(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...a,
      children: /* @__PURE__ */ p(DP.Provider, { value: { variant: t, size: n, spacing: r }, children: o })
    }
  );
}
function F6({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...o
}) {
  const a = u.useContext(DP);
  return /* @__PURE__ */ p(
    dU,
    {
      "data-slot": "toggle-group-item",
      "data-variant": a.variant || n,
      "data-size": a.size || r,
      "data-spacing": a.spacing,
      className: R(
        PP({
          variant: a.variant || n,
          size: a.size || r
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...o,
      children: t
    }
  );
}
var fU = (e, t, n, r, o, a, i, s) => {
  let l = document.documentElement, c = ["light", "dark"];
  function f(h) {
    (Array.isArray(e) ? e : [e]).forEach((v) => {
      let g = v === "class", b = g && a ? o.map((y) => a[y] || y) : o;
      g ? (l.classList.remove(...b), l.classList.add(a && a[h] ? a[h] : h)) : l.setAttribute(v, h);
    }), d(h);
  }
  function d(h) {
    s && c.includes(h) && (l.style.colorScheme = h);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) f(r);
  else try {
    let h = localStorage.getItem(t) || n, v = i && h === "system" ? m() : h;
    f(v);
  } catch {
  }
}, pU = u.createContext(void 0), mU = { setTheme: (e) => {
}, themes: [] }, hU = () => {
  var e;
  return (e = u.useContext(pU)) != null ? e : mU;
};
u.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, themes: s, nonce: l, scriptProps: c }) => {
  let f = JSON.stringify([n, t, a, e, s, i, r, o]).slice(1, -1);
  return u.createElement("script", { ...c, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${fU.toString()})(${f})` } });
});
function gU(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const vU = (e) => {
  switch (e) {
    case "success":
      return wU;
    case "info":
      return SU;
    case "warning":
      return xU;
    case "error":
      return CU;
    default:
      return null;
  }
}, bU = Array(12).fill(0), yU = ({ visible: e, className: t }) => /* @__PURE__ */ P.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ P.createElement("div", {
  className: "sonner-spinner"
}, bU.map((n, r) => /* @__PURE__ */ P.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), wU = /* @__PURE__ */ P.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ P.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), xU = /* @__PURE__ */ P.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ P.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), SU = /* @__PURE__ */ P.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ P.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), CU = /* @__PURE__ */ P.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ P.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), _U = /* @__PURE__ */ P.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ P.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ P.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), EU = () => {
  const [e, t] = P.useState(document.hidden);
  return P.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let nf = 1;
class PU {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: r, ...o } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : nf++, i = this.toasts.find((l) => l.id === a), s = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), i ? this.toasts = this.toasts.map((l) => l.id === a ? (this.publish({
        ...l,
        ...t,
        id: a,
        title: r
      }), {
        ...l,
        ...t,
        id: a,
        dismissible: s,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...o,
        dismissible: s,
        id: a
      }), a;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let a = r !== void 0, i;
      const s = o.then(async (c) => {
        if (i = [
          "resolve",
          c
        ], P.isValidElement(c))
          a = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (NU(c) && !c.ok) {
          a = !1;
          const d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, v = typeof d == "object" && !P.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...v
          });
        } else if (c instanceof Error) {
          a = !1;
          const d = typeof n.error == "function" ? await n.error(c) : n.error, m = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof d == "object" && !P.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...v
          });
        } else if (n.success !== void 0) {
          a = !1;
          const d = typeof n.success == "function" ? await n.success(c) : n.success, m = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof d == "object" && !P.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "success",
            description: m,
            ...v
          });
        }
      }).catch(async (c) => {
        if (i = [
          "reject",
          c
        ], n.error !== void 0) {
          a = !1;
          const f = typeof n.error == "function" ? await n.error(c) : n.error, d = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof f == "object" && !P.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: d,
            ...h
          });
        }
      }).finally(() => {
        a && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, f) => s.then(() => i[0] === "reject" ? f(i[1]) : c(i[1])).catch(f));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || nf++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const ft = new PU(), RU = (e, t) => {
  const n = (t == null ? void 0 : t.id) || nf++;
  return ft.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, NU = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", TU = RU, MU = () => ft.toasts, OU = () => ft.getActiveToasts(), B6 = Object.assign(TU, {
  success: ft.success,
  info: ft.info,
  warning: ft.warning,
  error: ft.error,
  custom: ft.custom,
  message: ft.message,
  promise: ft.promise,
  dismiss: ft.dismiss,
  loading: ft.loading
}, {
  getHistory: MU,
  getToasts: OU
});
gU("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Ia(e) {
  return e.label !== void 0;
}
const AU = 3, DU = "24px", IU = "16px", oy = 4e3, kU = 356, $U = 14, LU = 45, FU = 200;
function Kt(...e) {
  return e.filter(Boolean).join(" ");
}
function BU(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const zU = (e) => {
  var t, n, r, o, a, i, s, l, c;
  const { invert: f, toast: d, unstyled: m, interacting: h, setHeights: v, visibleToasts: g, heights: b, index: y, toasts: w, expanded: x, removeToast: S, defaultRichColors: E, closeButton: C, style: _, cancelButtonStyle: T, actionButtonStyle: N, className: D = "", descriptionClassName: O = "", duration: k, position: M, gap: B, expandByDefault: H, classNames: L, icons: Y, closeButtonAriaLabel: G = "Close toast" } = e, [j, Q] = P.useState(null), [Z, z] = P.useState(null), [I, W] = P.useState(!1), [F, U] = P.useState(!1), [$, V] = P.useState(!1), [X, ee] = P.useState(!1), [te, K] = P.useState(!1), [oe, A] = P.useState(0), [ne, me] = P.useState(0), he = P.useRef(d.duration || k || oy), ge = P.useRef(null), pe = P.useRef(null), xe = y === 0, Be = y + 1 <= g, we = d.type, Pe = d.dismissible !== !1, qe = d.className || "", Ge = d.descriptionClassName || "", Ze = P.useMemo(() => b.findIndex((ae) => ae.toastId === d.id) || 0, [
    b,
    d.id
  ]), tt = P.useMemo(() => {
    var ae;
    return (ae = d.closeButton) != null ? ae : C;
  }, [
    d.closeButton,
    C
  ]), st = P.useMemo(() => d.duration || k || oy, [
    d.duration,
    k
  ]), lt = P.useRef(0), Ue = P.useRef(0), Ct = P.useRef(0), Ye = P.useRef(null), [Qe, Ot] = M.split("-"), Yt = P.useMemo(() => b.reduce((ae, ie, Se) => Se >= Ze ? ae : ae + ie.height, 0), [
    b,
    Ze
  ]), Sn = EU(), Cn = d.invert || f, un = we === "loading";
  Ue.current = P.useMemo(() => Ze * B + Yt, [
    Ze,
    Yt
  ]), P.useEffect(() => {
    he.current = st;
  }, [
    st
  ]), P.useEffect(() => {
    W(!0);
  }, []), P.useEffect(() => {
    const ae = pe.current;
    if (ae) {
      const ie = ae.getBoundingClientRect().height;
      return me(ie), v((Se) => [
        {
          toastId: d.id,
          height: ie,
          position: d.position
        },
        ...Se
      ]), () => v((Se) => Se.filter((Re) => Re.toastId !== d.id));
    }
  }, [
    v,
    d.id
  ]), P.useLayoutEffect(() => {
    if (!I) return;
    const ae = pe.current, ie = ae.style.height;
    ae.style.height = "auto";
    const Se = ae.getBoundingClientRect().height;
    ae.style.height = ie, me(Se), v((Re) => Re.find((Ce) => Ce.toastId === d.id) ? Re.map((Ce) => Ce.toastId === d.id ? {
      ...Ce,
      height: Se
    } : Ce) : [
      {
        toastId: d.id,
        height: Se,
        position: d.position
      },
      ...Re
    ]);
  }, [
    I,
    d.title,
    d.description,
    v,
    d.id,
    d.jsx,
    d.action,
    d.cancel
  ]);
  const le = P.useCallback(() => {
    U(!0), A(Ue.current), v((ae) => ae.filter((ie) => ie.toastId !== d.id)), setTimeout(() => {
      S(d);
    }, FU);
  }, [
    d,
    S,
    v,
    Ue
  ]);
  P.useEffect(() => {
    if (d.promise && we === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let ae;
    return x || h || Sn ? (() => {
      if (Ct.current < lt.current) {
        const Re = (/* @__PURE__ */ new Date()).getTime() - lt.current;
        he.current = he.current - Re;
      }
      Ct.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      he.current !== 1 / 0 && (lt.current = (/* @__PURE__ */ new Date()).getTime(), ae = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), le();
      }, he.current));
    })(), () => clearTimeout(ae);
  }, [
    x,
    h,
    d,
    we,
    Sn,
    le
  ]), P.useEffect(() => {
    d.delete && (le(), d.onDismiss == null || d.onDismiss.call(d, d));
  }, [
    le,
    d.delete
  ]);
  function re() {
    var ae;
    if (Y != null && Y.loading) {
      var ie;
      return /* @__PURE__ */ P.createElement("div", {
        className: Kt(L == null ? void 0 : L.loader, d == null || (ie = d.classNames) == null ? void 0 : ie.loader, "sonner-loader"),
        "data-visible": we === "loading"
      }, Y.loading);
    }
    return /* @__PURE__ */ P.createElement(yU, {
      className: Kt(L == null ? void 0 : L.loader, d == null || (ae = d.classNames) == null ? void 0 : ae.loader),
      visible: we === "loading"
    });
  }
  const ce = d.icon || (Y == null ? void 0 : Y[we]) || vU(we);
  var J, de;
  return /* @__PURE__ */ P.createElement("li", {
    tabIndex: 0,
    ref: pe,
    className: Kt(D, qe, L == null ? void 0 : L.toast, d == null || (t = d.classNames) == null ? void 0 : t.toast, L == null ? void 0 : L.default, L == null ? void 0 : L[we], d == null || (n = d.classNames) == null ? void 0 : n[we]),
    "data-sonner-toast": "",
    "data-rich-colors": (J = d.richColors) != null ? J : E,
    "data-styled": !(d.jsx || d.unstyled || m),
    "data-mounted": I,
    "data-promise": !!d.promise,
    "data-swiped": te,
    "data-removed": F,
    "data-visible": Be,
    "data-y-position": Qe,
    "data-x-position": Ot,
    "data-index": y,
    "data-front": xe,
    "data-swiping": $,
    "data-dismissible": Pe,
    "data-type": we,
    "data-invert": Cn,
    "data-swipe-out": X,
    "data-swipe-direction": Z,
    "data-expanded": !!(x || H && I),
    "data-testid": d.testId,
    style: {
      "--index": y,
      "--toasts-before": y,
      "--z-index": w.length - y,
      "--offset": `${F ? oe : Ue.current}px`,
      "--initial-height": H ? "auto" : `${ne}px`,
      ..._,
      ...d.style
    },
    onDragEnd: () => {
      V(!1), Q(null), Ye.current = null;
    },
    onPointerDown: (ae) => {
      ae.button !== 2 && (un || !Pe || (ge.current = /* @__PURE__ */ new Date(), A(Ue.current), ae.target.setPointerCapture(ae.pointerId), ae.target.tagName !== "BUTTON" && (V(!0), Ye.current = {
        x: ae.clientX,
        y: ae.clientY
      })));
    },
    onPointerUp: () => {
      var ae, ie, Se;
      if (X || !Pe) return;
      Ye.current = null;
      const Re = Number(((ae = pe.current) == null ? void 0 : ae.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ct = Number(((ie = pe.current) == null ? void 0 : ie.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ce = (/* @__PURE__ */ new Date()).getTime() - ((Se = ge.current) == null ? void 0 : Se.getTime()), Oe = j === "x" ? Re : ct, dn = Math.abs(Oe) / Ce;
      if (Math.abs(Oe) >= LU || dn > 0.11) {
        A(Ue.current), d.onDismiss == null || d.onDismiss.call(d, d), z(j === "x" ? Re > 0 ? "right" : "left" : ct > 0 ? "down" : "up"), le(), ee(!0);
        return;
      } else {
        var ut, At;
        (ut = pe.current) == null || ut.style.setProperty("--swipe-amount-x", "0px"), (At = pe.current) == null || At.style.setProperty("--swipe-amount-y", "0px");
      }
      K(!1), V(!1), Q(null);
    },
    onPointerMove: (ae) => {
      var ie, Se, Re;
      if (!Ye.current || !Pe || ((ie = window.getSelection()) == null ? void 0 : ie.toString().length) > 0) return;
      const Ce = ae.clientY - Ye.current.y, Oe = ae.clientX - Ye.current.x;
      var dn;
      const ut = (dn = e.swipeDirections) != null ? dn : BU(M);
      !j && (Math.abs(Oe) > 1 || Math.abs(Ce) > 1) && Q(Math.abs(Oe) > Math.abs(Ce) ? "x" : "y");
      let At = {
        x: 0,
        y: 0
      };
      const um = (Hn) => 1 / (1.5 + Math.abs(Hn) / 20);
      if (j === "y") {
        if (ut.includes("top") || ut.includes("bottom"))
          if (ut.includes("top") && Ce < 0 || ut.includes("bottom") && Ce > 0)
            At.y = Ce;
          else {
            const Hn = Ce * um(Ce);
            At.y = Math.abs(Hn) < Math.abs(Ce) ? Hn : Ce;
          }
      } else if (j === "x" && (ut.includes("left") || ut.includes("right")))
        if (ut.includes("left") && Oe < 0 || ut.includes("right") && Oe > 0)
          At.x = Oe;
        else {
          const Hn = Oe * um(Oe);
          At.x = Math.abs(Hn) < Math.abs(Oe) ? Hn : Oe;
        }
      (Math.abs(At.x) > 0 || Math.abs(At.y) > 0) && K(!0), (Se = pe.current) == null || Se.style.setProperty("--swipe-amount-x", `${At.x}px`), (Re = pe.current) == null || Re.style.setProperty("--swipe-amount-y", `${At.y}px`);
    }
  }, tt && !d.jsx && we !== "loading" ? /* @__PURE__ */ P.createElement("button", {
    "aria-label": G,
    "data-disabled": un,
    "data-close-button": !0,
    onClick: un || !Pe ? () => {
    } : () => {
      le(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: Kt(L == null ? void 0 : L.closeButton, d == null || (r = d.classNames) == null ? void 0 : r.closeButton)
  }, (de = Y == null ? void 0 : Y.close) != null ? de : _U) : null, (we || d.icon || d.promise) && d.icon !== null && ((Y == null ? void 0 : Y[we]) !== null || d.icon) ? /* @__PURE__ */ P.createElement("div", {
    "data-icon": "",
    className: Kt(L == null ? void 0 : L.icon, d == null || (o = d.classNames) == null ? void 0 : o.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || re() : null, d.type !== "loading" ? ce : null) : null, /* @__PURE__ */ P.createElement("div", {
    "data-content": "",
    className: Kt(L == null ? void 0 : L.content, d == null || (a = d.classNames) == null ? void 0 : a.content)
  }, /* @__PURE__ */ P.createElement("div", {
    "data-title": "",
    className: Kt(L == null ? void 0 : L.title, d == null || (i = d.classNames) == null ? void 0 : i.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ P.createElement("div", {
    "data-description": "",
    className: Kt(O, Ge, L == null ? void 0 : L.description, d == null || (s = d.classNames) == null ? void 0 : s.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ P.isValidElement(d.cancel) ? d.cancel : d.cancel && Ia(d.cancel) ? /* @__PURE__ */ P.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || T,
    onClick: (ae) => {
      Ia(d.cancel) && Pe && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, ae), le());
    },
    className: Kt(L == null ? void 0 : L.cancelButton, d == null || (l = d.classNames) == null ? void 0 : l.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ P.isValidElement(d.action) ? d.action : d.action && Ia(d.action) ? /* @__PURE__ */ P.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || N,
    onClick: (ae) => {
      Ia(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, ae), !ae.defaultPrevented && le());
    },
    className: Kt(L == null ? void 0 : L.actionButton, d == null || (c = d.classNames) == null ? void 0 : c.actionButton)
  }, d.action.label) : null);
};
function ay() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function WU(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const a = o === 1, i = a ? "--mobile-offset" : "--offset", s = a ? IU : DU;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        n[`${i}-${f}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${i}-${c}`] = s : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(s);
  }), n;
}
const jU = /* @__PURE__ */ P.forwardRef(function(t, n) {
  const { id: r, invert: o, position: a = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: s, closeButton: l, className: c, offset: f, mobileOffset: d, theme: m = "light", richColors: h, duration: v, style: g, visibleToasts: b = AU, toastOptions: y, dir: w = ay(), gap: x = $U, icons: S, containerAriaLabel: E = "Notifications" } = t, [C, _] = P.useState([]), T = P.useMemo(() => r ? C.filter((I) => I.toasterId === r) : C.filter((I) => !I.toasterId), [
    C,
    r
  ]), N = P.useMemo(() => Array.from(new Set([
    a
  ].concat(T.filter((I) => I.position).map((I) => I.position)))), [
    T,
    a
  ]), [D, O] = P.useState([]), [k, M] = P.useState(!1), [B, H] = P.useState(!1), [L, Y] = P.useState(m !== "system" ? m : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), G = P.useRef(null), j = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Q = P.useRef(null), Z = P.useRef(!1), z = P.useCallback((I) => {
    _((W) => {
      var F;
      return (F = W.find((U) => U.id === I.id)) != null && F.delete || ft.dismiss(I.id), W.filter(({ id: U }) => U !== I.id);
    });
  }, []);
  return P.useEffect(() => ft.subscribe((I) => {
    if (I.dismiss) {
      requestAnimationFrame(() => {
        _((W) => W.map((F) => F.id === I.id ? {
          ...F,
          delete: !0
        } : F));
      });
      return;
    }
    setTimeout(() => {
      lf.flushSync(() => {
        _((W) => {
          const F = W.findIndex((U) => U.id === I.id);
          return F !== -1 ? [
            ...W.slice(0, F),
            {
              ...W[F],
              ...I
            },
            ...W.slice(F + 1)
          ] : [
            I,
            ...W
          ];
        });
      });
    });
  }), [
    C
  ]), P.useEffect(() => {
    if (m !== "system") {
      Y(m);
      return;
    }
    if (m === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Y("dark") : Y("light")), typeof window > "u") return;
    const I = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      I.addEventListener("change", ({ matches: W }) => {
        Y(W ? "dark" : "light");
      });
    } catch {
      I.addListener(({ matches: F }) => {
        try {
          Y(F ? "dark" : "light");
        } catch (U) {
          console.error(U);
        }
      });
    }
  }, [
    m
  ]), P.useEffect(() => {
    C.length <= 1 && M(!1);
  }, [
    C
  ]), P.useEffect(() => {
    const I = (W) => {
      var F;
      if (i.every((V) => W[V] || W.code === V)) {
        var $;
        M(!0), ($ = G.current) == null || $.focus();
      }
      W.code === "Escape" && (document.activeElement === G.current || (F = G.current) != null && F.contains(document.activeElement)) && M(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [
    i
  ]), P.useEffect(() => {
    if (G.current)
      return () => {
        Q.current && (Q.current.focus({
          preventScroll: !0
        }), Q.current = null, Z.current = !1);
      };
  }, [
    G.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ P.createElement("section", {
    ref: n,
    "aria-label": `${E} ${j}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, N.map((I, W) => {
    var F;
    const [U, $] = I.split("-");
    return T.length ? /* @__PURE__ */ P.createElement("ol", {
      key: I,
      dir: w === "auto" ? ay() : w,
      tabIndex: -1,
      ref: G,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": L,
      "data-y-position": U,
      "data-x-position": $,
      style: {
        "--front-toast-height": `${((F = D[0]) == null ? void 0 : F.height) || 0}px`,
        "--width": `${kU}px`,
        "--gap": `${x}px`,
        ...g,
        ...WU(f, d)
      },
      onBlur: (V) => {
        Z.current && !V.currentTarget.contains(V.relatedTarget) && (Z.current = !1, Q.current && (Q.current.focus({
          preventScroll: !0
        }), Q.current = null));
      },
      onFocus: (V) => {
        V.target instanceof HTMLElement && V.target.dataset.dismissible === "false" || Z.current || (Z.current = !0, Q.current = V.relatedTarget);
      },
      onMouseEnter: () => M(!0),
      onMouseMove: () => M(!0),
      onMouseLeave: () => {
        B || M(!1);
      },
      onDragEnd: () => M(!1),
      onPointerDown: (V) => {
        V.target instanceof HTMLElement && V.target.dataset.dismissible === "false" || H(!0);
      },
      onPointerUp: () => H(!1)
    }, T.filter((V) => !V.position && W === 0 || V.position === I).map((V, X) => {
      var ee, te;
      return /* @__PURE__ */ P.createElement(zU, {
        key: V.id,
        icons: S,
        index: X,
        toast: V,
        defaultRichColors: h,
        duration: (ee = y == null ? void 0 : y.duration) != null ? ee : v,
        className: y == null ? void 0 : y.className,
        descriptionClassName: y == null ? void 0 : y.descriptionClassName,
        invert: o,
        visibleToasts: b,
        closeButton: (te = y == null ? void 0 : y.closeButton) != null ? te : l,
        interacting: B,
        position: I,
        style: y == null ? void 0 : y.style,
        unstyled: y == null ? void 0 : y.unstyled,
        classNames: y == null ? void 0 : y.classNames,
        cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
        actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
        closeButtonAriaLabel: y == null ? void 0 : y.closeButtonAriaLabel,
        removeToast: z,
        toasts: T.filter((K) => K.position == V.position),
        heights: D.filter((K) => K.position == V.position),
        setHeights: O,
        expandByDefault: s,
        gap: x,
        expanded: k,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), z6 = ({ ...e }) => {
  const { theme: t = "system" } = hU();
  return /* @__PURE__ */ p(
    jU,
    {
      theme: t,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ p(RR, { className: "size-4" }),
        info: /* @__PURE__ */ p(DR, { className: "size-4" }),
        warning: /* @__PURE__ */ p(HR, { className: "size-4" }),
        error: /* @__PURE__ */ p(FR, { className: "size-4" }),
        loading: /* @__PURE__ */ p(Ay, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...e
    }
  );
};
function VU(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const IP = P.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), va = () => {
  const e = P.useContext(IP);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
VU(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function HU() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function qU() {
  return cm(/^Mac/);
}
function GU() {
  return cm(/^iPhone/);
}
function iy() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function UU() {
  return cm(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  qU() && navigator.maxTouchPoints > 1;
}
function kP() {
  return GU() || UU();
}
function cm(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const YU = 24, KU = typeof window < "u" ? yi : vt;
function sy(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const od = typeof document < "u" && window.visualViewport;
function ly(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function $P(e) {
  for (ly(e) && (e = e.parentElement); e && !ly(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const XU = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let ka = 0, ad;
function ZU(e = {}) {
  let { isDisabled: t } = e;
  KU(() => {
    if (!t)
      return ka++, ka === 1 && kP() && (ad = QU()), () => {
        ka--, ka === 0 && (ad == null || ad());
      };
  }, [
    t
  ]);
}
function QU() {
  let e, t = 0, n = (d) => {
    e = $P(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let m = d.changedTouches[0].pageY, h = e.scrollTop, v = e.scrollHeight - e.clientHeight;
    v !== 0 && ((h <= 0 && m > t || h >= v && m < t) && d.preventDefault(), t = m);
  }, o = (d) => {
    let m = d.target;
    rf(m) && m !== document.activeElement && (d.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (d) => {
    let m = d.target;
    rf(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", od && (od.height < window.innerHeight ? requestAnimationFrame(() => {
        cy(m);
      }) : od.addEventListener("resize", () => cy(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = sy(JU(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = sy(oo(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), oo(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), oo(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), oo(document, "focus", a, !0), oo(window, "scroll", i));
  return () => {
    c(), f(), window.scrollTo(s, l);
  };
}
function JU(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function oo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function cy(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = $P(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + YU;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function rf(e) {
  return e instanceof HTMLInputElement && !XU.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function e4(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function t4(...e) {
  return (t) => e.forEach((n) => e4(n, t));
}
function LP(...e) {
  return u.useCallback(t4(...e), e);
}
const FP = /* @__PURE__ */ new WeakMap();
function Je(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && FP.set(e, r);
}
function n4(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = FP.get(e);
  n && (e.style[t] = n[t]);
}
const Ke = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function $a(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[Ke(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Ke(t) ? 5 : 4]) : null);
}
function r4(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function id(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function o4(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const ze = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, BP = 0.4, a4 = 0.25, i4 = 100, zP = 8, Gn = 16, of = 26, sd = "vaul-dragging";
function WP(e) {
  const t = P.useRef(e);
  return P.useEffect(() => {
    t.current = e;
  }), P.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function s4({ defaultProp: e, onChange: t }) {
  const n = P.useState(e), [r] = n, o = P.useRef(r), a = WP(t);
  return P.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function jP({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = s4({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = WP(n), l = P.useCallback((c) => {
    if (a) {
      const d = typeof c == "function" ? c(e) : c;
      d !== e && s(d);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function l4({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: c }) {
  const [f, d] = jP({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, h] = P.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  P.useEffect(() => {
    function _() {
      h({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const v = P.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), g = P.useMemo(() => {
    var _;
    return (_ = n == null ? void 0 : n.findIndex((T) => T === f)) != null ? _ : null;
  }, [
    n,
    f
  ]), b = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === f || !n, y = P.useMemo(() => {
    const _ = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var T;
    return (T = n == null ? void 0 : n.map((N) => {
      const D = typeof N == "string";
      let O = 0;
      if (D && (O = parseInt(N, 10)), Ke(s)) {
        const M = D ? O : m ? N * _.height : 0;
        return m ? s === "bottom" ? _.height - M : -_.height + M : M;
      }
      const k = D ? O : m ? N * _.width : 0;
      return m ? s === "right" ? _.width - k : -_.width + k : k;
    })) != null ? T : [];
  }, [
    n,
    m,
    l
  ]), w = P.useMemo(() => g !== null ? y == null ? void 0 : y[g] : null, [
    y,
    g
  ]), x = P.useCallback((_) => {
    var T;
    const N = (T = y == null ? void 0 : y.findIndex((D) => D === _)) != null ? T : null;
    i(N), Je(r.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: Ke(s) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), y && N !== y.length - 1 && a !== void 0 && N !== a && N < a ? Je(o.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "0"
    }) : Je(o.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), d(n == null ? void 0 : n[Math.max(N, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    d
  ]);
  P.useEffect(() => {
    if (f || e) {
      var _;
      const T = (_ = n == null ? void 0 : n.findIndex((N) => N === e || N === f)) != null ? _ : -1;
      y && T !== -1 && typeof y[T] == "number" && x(y[T]);
    }
  }, [
    f,
    e,
    n,
    y,
    x
  ]);
  function S({ draggedDistance: _, closeDrawer: T, velocity: N, dismissible: D }) {
    if (a === void 0) return;
    const O = s === "bottom" || s === "right" ? (w ?? 0) - _ : (w ?? 0) + _, k = g === a - 1, M = g === 0, B = _ > 0;
    if (k && Je(o.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), !c && N > 2 && !B) {
      D ? T() : x(y[0]);
      return;
    }
    if (!c && N > 2 && B && y && n) {
      x(y[n.length - 1]);
      return;
    }
    const H = y == null ? void 0 : y.reduce((Y, G) => typeof Y != "number" || typeof G != "number" ? Y : Math.abs(G - O) < Math.abs(Y - O) ? G : Y), L = Ke(s) ? window.innerHeight : window.innerWidth;
    if (N > BP && Math.abs(_) < L * 0.4) {
      const Y = B ? 1 : -1;
      if (Y > 0 && v && n) {
        x(y[n.length - 1]);
        return;
      }
      if (M && Y < 0 && D && T(), g === null) return;
      x(y[g + Y]);
      return;
    }
    x(H);
  }
  function E({ draggedDistance: _ }) {
    if (w === null) return;
    const T = s === "bottom" || s === "right" ? w - _ : w + _;
    (s === "bottom" || s === "right") && T < y[y.length - 1] || (s === "top" || s === "left") && T > y[y.length - 1] || Je(r.current, {
      transform: Ke(s) ? `translate3d(0, ${T}px, 0)` : `translate3d(${T}px, 0, 0)`
    });
  }
  function C(_, T) {
    if (!n || typeof g != "number" || !y || a === void 0) return null;
    const N = g === a - 1;
    if (g >= a && T)
      return 0;
    if (N && !T) return 1;
    if (!b && !N) return null;
    const O = N ? g + 1 : g - 1, k = N ? y[O] - y[O - 1] : y[O + 1] - y[O], M = _ / Math.abs(k);
    return N ? 1 - M : M;
  }
  return {
    isLastSnapPoint: v,
    activeSnapPoint: f,
    shouldFade: b,
    getPercentageDragged: C,
    setActiveSnapPoint: d,
    activeSnapPointIndex: g,
    onRelease: S,
    onDrag: E,
    snapPointsOffset: y
  };
}
const c4 = () => () => {
};
function u4() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = va(), a = P.useRef(null), i = Mn(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - of) / window.innerWidth;
  }
  P.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      o4(r && !o ? id(document.body, {
        background: "black"
      }) : c4, id(l, {
        transformOrigin: Ke(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${ze.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
      }));
      const c = id(l, {
        borderRadius: `${zP}px`,
        overflow: "hidden",
        ...Ke(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, ze.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let ao = null;
function d4({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = P.useState(() => typeof window < "u" ? window.location.href : ""), l = P.useRef(0), c = P.useCallback(() => {
    if (iy() && ao === null && e && !a) {
      ao = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: d, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const h = m - window.innerHeight;
        h && l.current >= m && (document.body.style.top = `${-(l.current + h)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = P.useCallback(() => {
    if (iy() && ao !== null && !a) {
      const d = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ao), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, d);
      }), ao = null;
    }
  }, [
    i
  ]);
  return P.useEffect(() => {
    function d() {
      l.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), P.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), P.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    f
  ]), {
    restorePositionSetting: f
  };
}
function f4({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = a4, scrollLockTimeout: c = i4, dismissible: f = !0, handleOnly: d = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: h, setActiveSnapPoint: v, fixed: g, modal: b = !0, onClose: y, nested: w, noBodyStyles: x = !1, direction: S = "bottom", defaultOpen: E = !1, disablePreventScroll: C = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: T = !1, repositionInputs: N = !0, onAnimationEnd: D, container: O, autoFocus: k = !1 }) {
  var M, B;
  const [H = !1, L] = jP({
    defaultProp: E,
    prop: e,
    onChange: (le) => {
      t == null || t(le), !le && !w && tt(), setTimeout(() => {
        D == null || D(le);
      }, ze.DURATION * 1e3), le && !b && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), le || (document.body.style.pointerEvents = "auto");
    }
  }), [Y, G] = P.useState(!1), [j, Q] = P.useState(!1), [Z, z] = P.useState(!1), I = P.useRef(null), W = P.useRef(null), F = P.useRef(null), U = P.useRef(null), $ = P.useRef(null), V = P.useRef(!1), X = P.useRef(null), ee = P.useRef(0), te = P.useRef(!1), K = P.useRef(!E), oe = P.useRef(0), A = P.useRef(null), ne = P.useRef(((M = A.current) == null ? void 0 : M.getBoundingClientRect().height) || 0), me = P.useRef(((B = A.current) == null ? void 0 : B.getBoundingClientRect().width) || 0), he = P.useRef(0), ge = P.useCallback((le) => {
    a && le === Pe.length - 1 && (W.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: pe, activeSnapPointIndex: xe, setActiveSnapPoint: Be, onRelease: we, snapPointsOffset: Pe, onDrag: qe, shouldFade: Ge, getPercentageDragged: Ze } = l4({
    snapPoints: a,
    activeSnapPointProp: h,
    setActiveSnapPointProp: v,
    drawerRef: A,
    fadeFromIndex: m,
    overlayRef: I,
    onSnapPointChange: ge,
    direction: S,
    container: O,
    snapToSequentialPoint: _
  });
  ZU({
    isDisabled: !H || j || !b || Z || !Y || !N || !C
  });
  const { restorePositionSetting: tt } = d4({
    isOpen: H,
    modal: b,
    nested: w ?? !1,
    hasBeenOpened: Y,
    preventScrollRestoration: T,
    noBodyStyles: x
  });
  function st() {
    return (window.innerWidth - of) / window.innerWidth;
  }
  function lt(le) {
    var re, ce;
    !f && !a || A.current && !A.current.contains(le.target) || (ne.current = ((re = A.current) == null ? void 0 : re.getBoundingClientRect().height) || 0, me.current = ((ce = A.current) == null ? void 0 : ce.getBoundingClientRect().width) || 0, Q(!0), F.current = /* @__PURE__ */ new Date(), kP() && window.addEventListener("touchend", () => V.current = !1, {
      once: !0
    }), le.target.setPointerCapture(le.pointerId), ee.current = Ke(S) ? le.pageY : le.pageX);
  }
  function Ue(le, re) {
    var ce;
    let J = le;
    const de = (ce = window.getSelection()) == null ? void 0 : ce.toString(), ae = A.current ? $a(A.current, S) : null, ie = /* @__PURE__ */ new Date();
    if (J.tagName === "SELECT" || J.hasAttribute("data-vaul-no-drag") || J.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (W.current && ie.getTime() - W.current.getTime() < 500)
      return !1;
    if (ae !== null && (S === "bottom" ? ae > 0 : ae < 0))
      return !0;
    if (de && de.length > 0)
      return !1;
    if ($.current && ie.getTime() - $.current.getTime() < c && ae === 0 || re)
      return $.current = ie, !1;
    for (; J; ) {
      if (J.scrollHeight > J.clientHeight) {
        if (J.scrollTop !== 0)
          return $.current = /* @__PURE__ */ new Date(), !1;
        if (J.getAttribute("role") === "dialog")
          return !0;
      }
      J = J.parentNode;
    }
    return !0;
  }
  function Ct(le) {
    if (A.current && j) {
      const re = S === "bottom" || S === "right" ? 1 : -1, ce = (ee.current - (Ke(S) ? le.pageY : le.pageX)) * re, J = ce > 0, de = a && !f && !J;
      if (de && xe === 0) return;
      const ae = Math.abs(ce), ie = document.querySelector("[data-vaul-drawer-wrapper]"), Se = S === "bottom" || S === "top" ? ne.current : me.current;
      let Re = ae / Se;
      const ct = Ze(ae, J);
      if (ct !== null && (Re = ct), de && Re >= 1 || !V.current && !Ue(le.target, J)) return;
      if (A.current.classList.add(sd), V.current = !0, Je(A.current, {
        transition: "none"
      }), Je(I.current, {
        transition: "none"
      }), a && qe({
        draggedDistance: ce
      }), J && !a) {
        const Oe = r4(ce), dn = Math.min(Oe * -1, 0) * re;
        Je(A.current, {
          transform: Ke(S) ? `translate3d(0, ${dn}px, 0)` : `translate3d(${dn}px, 0, 0)`
        });
        return;
      }
      const Ce = 1 - Re;
      if ((Ge || m && xe === m - 1) && (r == null || r(le, Re), Je(I.current, {
        opacity: `${Ce}`,
        transition: "none"
      }, !0)), ie && I.current && i) {
        const Oe = Math.min(st() + Re * (1 - st()), 1), dn = 8 - Re * 8, ut = Math.max(0, 14 - Re * 14);
        Je(ie, {
          borderRadius: `${dn}px`,
          transform: Ke(S) ? `scale(${Oe}) translate3d(0, ${ut}px, 0)` : `scale(${Oe}) translate3d(${ut}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Oe = ae * re;
        Je(A.current, {
          transform: Ke(S) ? `translate3d(0, ${Oe}px, 0)` : `translate3d(${Oe}px, 0, 0)`
        });
      }
    }
  }
  P.useEffect(() => {
    window.requestAnimationFrame(() => {
      K.current = !0;
    });
  }, []), P.useEffect(() => {
    var le;
    function re() {
      if (!A.current || !N) return;
      const ce = document.activeElement;
      if (rf(ce) || te.current) {
        var J;
        const de = ((J = window.visualViewport) == null ? void 0 : J.height) || 0, ae = window.innerHeight;
        let ie = ae - de;
        const Se = A.current.getBoundingClientRect().height || 0, Re = Se > ae * 0.8;
        he.current || (he.current = Se);
        const ct = A.current.getBoundingClientRect().top;
        if (Math.abs(oe.current - ie) > 60 && (te.current = !te.current), a && a.length > 0 && Pe && xe) {
          const Ce = Pe[xe] || 0;
          ie += Ce;
        }
        if (oe.current = ie, Se > de || te.current) {
          const Ce = A.current.getBoundingClientRect().height;
          let Oe = Ce;
          Ce > de && (Oe = de - (Re ? ct : of)), g ? A.current.style.height = `${Ce - Math.max(ie, 0)}px` : A.current.style.height = `${Math.max(Oe, de - ct)}px`;
        } else HU() || (A.current.style.height = `${he.current}px`);
        a && a.length > 0 && !te.current ? A.current.style.bottom = "0px" : A.current.style.bottom = `${Math.max(ie, 0)}px`;
      }
    }
    return (le = window.visualViewport) == null || le.addEventListener("resize", re), () => {
      var ce;
      return (ce = window.visualViewport) == null ? void 0 : ce.removeEventListener("resize", re);
    };
  }, [
    xe,
    a,
    Pe
  ]);
  function Ye(le) {
    Ot(), y == null || y(), le || L(!1), setTimeout(() => {
      a && Be(a[0]);
    }, ze.DURATION * 1e3);
  }
  function Qe() {
    if (!A.current) return;
    const le = document.querySelector("[data-vaul-drawer-wrapper]"), re = $a(A.current, S);
    Je(A.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), Je(I.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), i && re && re > 0 && H && Je(le, {
      borderRadius: `${zP}px`,
      overflow: "hidden",
      ...Ke(S) ? {
        transform: `scale(${st()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${st()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ze.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
    }, !0);
  }
  function Ot() {
    !j || !A.current || (A.current.classList.remove(sd), V.current = !1, Q(!1), U.current = /* @__PURE__ */ new Date());
  }
  function Yt(le) {
    if (!j || !A.current) return;
    A.current.classList.remove(sd), V.current = !1, Q(!1), U.current = /* @__PURE__ */ new Date();
    const re = $a(A.current, S);
    if (!le || !Ue(le.target, !1) || !re || Number.isNaN(re) || F.current === null) return;
    const ce = U.current.getTime() - F.current.getTime(), J = ee.current - (Ke(S) ? le.pageY : le.pageX), de = Math.abs(J) / ce;
    if (de > 0.05 && (z(!0), setTimeout(() => {
      z(!1);
    }, 200)), a) {
      we({
        draggedDistance: J * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: Ye,
        velocity: de,
        dismissible: f
      }), o == null || o(le, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? J > 0 : J < 0) {
      Qe(), o == null || o(le, !0);
      return;
    }
    if (de > BP) {
      Ye(), o == null || o(le, !1);
      return;
    }
    var ae;
    const ie = Math.min((ae = A.current.getBoundingClientRect().height) != null ? ae : 0, window.innerHeight);
    var Se;
    const Re = Math.min((Se = A.current.getBoundingClientRect().width) != null ? Se : 0, window.innerWidth), ct = S === "left" || S === "right";
    if (Math.abs(re) >= (ct ? Re : ie) * l) {
      Ye(), o == null || o(le, !1);
      return;
    }
    o == null || o(le, !0), Qe();
  }
  P.useEffect(() => (H && (Je(document.documentElement, {
    scrollBehavior: "auto"
  }), W.current = /* @__PURE__ */ new Date()), () => {
    n4(document.documentElement, "scrollBehavior");
  }), [
    H
  ]);
  function Sn(le) {
    const re = le ? (window.innerWidth - Gn) / window.innerWidth : 1, ce = le ? -Gn : 0;
    X.current && window.clearTimeout(X.current), Je(A.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: Ke(S) ? `scale(${re}) translate3d(0, ${ce}px, 0)` : `scale(${re}) translate3d(${ce}px, 0, 0)`
    }), !le && A.current && (X.current = setTimeout(() => {
      const J = $a(A.current, S);
      Je(A.current, {
        transition: "none",
        transform: Ke(S) ? `translate3d(0, ${J}px, 0)` : `translate3d(${J}px, 0, 0)`
      });
    }, 500));
  }
  function Cn(le, re) {
    if (re < 0) return;
    const ce = (window.innerWidth - Gn) / window.innerWidth, J = ce + re * (1 - ce), de = -Gn + re * Gn;
    Je(A.current, {
      transform: Ke(S) ? `scale(${J}) translate3d(0, ${de}px, 0)` : `scale(${J}) translate3d(${de}px, 0, 0)`,
      transition: "none"
    });
  }
  function un(le, re) {
    const ce = Ke(S) ? window.innerHeight : window.innerWidth, J = re ? (ce - Gn) / ce : 1, de = re ? -Gn : 0;
    re && Je(A.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: Ke(S) ? `scale(${J}) translate3d(0, ${de}px, 0)` : `scale(${J}) translate3d(${de}px, 0, 0)`
    });
  }
  return P.useEffect(() => {
    b || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    b
  ]), /* @__PURE__ */ P.createElement(jo, {
    defaultOpen: E,
    onOpenChange: (le) => {
      !f && !le || (le ? G(!0) : Ye(!0), L(le));
    },
    open: H
  }, /* @__PURE__ */ P.createElement(IP.Provider, {
    value: {
      activeSnapPoint: pe,
      snapPoints: a,
      setActiveSnapPoint: Be,
      drawerRef: A,
      overlayRef: I,
      onOpenChange: t,
      onPress: lt,
      onRelease: Yt,
      onDrag: Ct,
      dismissible: f,
      shouldAnimate: K,
      handleOnly: d,
      isOpen: H,
      isDragging: j,
      shouldFade: Ge,
      closeDrawer: Ye,
      onNestedDrag: Cn,
      onNestedOpenChange: Sn,
      onNestedRelease: un,
      keyboardIsOpen: te,
      modal: b,
      snapPointsOffset: Pe,
      activeSnapPointIndex: xe,
      direction: S,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: O,
      autoFocus: k
    }
  }, n));
}
const VP = /* @__PURE__ */ P.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s, shouldAnimate: l } = va(), c = LP(t, n), f = r && r.length > 0;
  if (!s)
    return null;
  const d = P.useCallback((m) => o(m), [
    o
  ]);
  return /* @__PURE__ */ P.createElement(Ho, {
    onMouseUp: d,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && f ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
VP.displayName = "Drawer.Overlay";
const HP = /* @__PURE__ */ P.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: c, snapPointsOffset: f, activeSnapPointIndex: d, modal: m, isOpen: h, direction: v, snapPoints: g, container: b, handleOnly: y, shouldAnimate: w, autoFocus: x } = va(), [S, E] = P.useState(!1), C = LP(o, a), _ = P.useRef(null), T = P.useRef(null), N = P.useRef(!1), D = g && g.length > 0;
  u4();
  const O = (M, B, H = 0) => {
    if (N.current) return !0;
    const L = Math.abs(M.y), Y = Math.abs(M.x), G = Y > L, j = [
      "bottom",
      "right"
    ].includes(B) ? 1 : -1;
    if (B === "left" || B === "right") {
      if (!(M.x * j < 0) && Y >= 0 && Y <= H)
        return G;
    } else if (!(M.y * j < 0) && L >= 0 && L <= H)
      return !G;
    return N.current = !0, !0;
  };
  P.useEffect(() => {
    D && window.requestAnimationFrame(() => {
      E(!0);
    });
  }, []);
  function k(M) {
    _.current = null, N.current = !1, s(M);
  }
  return /* @__PURE__ */ P.createElement(qo, {
    "data-vaul-drawer-direction": v,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": S ? "true" : "false",
    "data-vaul-snap-points": h && D ? "true" : "false",
    "data-vaul-custom-container": b ? "true" : "false",
    "data-vaul-animate": w != null && w.current ? "true" : "false",
    ...r,
    ref: C,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[d ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (M) => {
      y || (r.onPointerDown == null || r.onPointerDown.call(r, M), _.current = {
        x: M.pageX,
        y: M.pageY
      }, i(M));
    },
    onOpenAutoFocus: (M) => {
      n == null || n(M), x || M.preventDefault();
    },
    onPointerDownOutside: (M) => {
      if (e == null || e(M), !m || M.defaultPrevented) {
        M.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (M) => {
      if (!m) {
        M.preventDefault();
        return;
      }
    },
    onPointerMove: (M) => {
      if (T.current = M, y || (r.onPointerMove == null || r.onPointerMove.call(r, M), !_.current)) return;
      const B = M.pageY - _.current.y, H = M.pageX - _.current.x, L = M.pointerType === "touch" ? 10 : 2;
      O({
        x: H,
        y: B
      }, v, L) ? l(M) : (Math.abs(H) > L || Math.abs(B) > L) && (_.current = null);
    },
    onPointerUp: (M) => {
      r.onPointerUp == null || r.onPointerUp.call(r, M), _.current = null, N.current = !1, s(M);
    },
    onPointerOut: (M) => {
      r.onPointerOut == null || r.onPointerOut.call(r, M), k(T.current);
    },
    onContextMenu: (M) => {
      r.onContextMenu == null || r.onContextMenu.call(r, M), T.current && k(T.current);
    }
  });
});
HP.displayName = "Drawer.Content";
const p4 = 250, m4 = 120, h4 = /* @__PURE__ */ P.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: c, handleOnly: f, isOpen: d, onPress: m, onDrag: h } = va(), v = P.useRef(null), g = P.useRef(!1);
  function b() {
    if (g.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      y();
    }, m4);
  }
  function y() {
    if (a || e || g.current) {
      x();
      return;
    }
    if (x(), !i || i.length === 0) {
      c || o();
      return;
    }
    if (s === i[i.length - 1] && c) {
      o();
      return;
    }
    const E = i.findIndex((_) => _ === s);
    if (E === -1) return;
    const C = i[E + 1];
    l(C);
  }
  function w() {
    v.current = window.setTimeout(() => {
      g.current = !0;
    }, p4);
  }
  function x() {
    v.current && window.clearTimeout(v.current), g.current = !1;
  }
  return /* @__PURE__ */ P.createElement("div", {
    onClick: b,
    onPointerCancel: x,
    onPointerDown: (S) => {
      f && m(S), w();
    },
    onPointerMove: (S) => {
      f && h(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": d ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ P.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
h4.displayName = "Drawer.Handle";
function g4(e) {
  const t = va(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ P.createElement(Vo, {
    container: n,
    ...r
  });
}
const Vn = {
  Root: f4,
  Content: HP,
  Overlay: VP,
  Trigger: Ti,
  Portal: g4,
  Close: ir,
  Title: Mi,
  Description: Oi
};
function W6({
  ...e
}) {
  return /* @__PURE__ */ p(Vn.Root, { "data-slot": "drawer", ...e });
}
function j6({
  ...e
}) {
  return /* @__PURE__ */ p(Vn.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function v4({
  ...e
}) {
  return /* @__PURE__ */ p(Vn.Portal, { "data-slot": "drawer-portal", ...e });
}
function V6({
  ...e
}) {
  return /* @__PURE__ */ p(Vn.Close, { "data-slot": "drawer-close", ...e });
}
function b4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Vn.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: R(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function H6({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(v4, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ p(b4, {}),
    /* @__PURE__ */ se(
      Vn.Content,
      {
        "data-slot": "drawer-content",
        className: R(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ p("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function q6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "drawer-header",
      className: R(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function G6({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "drawer-footer",
      className: R("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function U6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Vn.Title,
    {
      "data-slot": "drawer-title",
      className: R("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Y6({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Vn.Description,
    {
      "data-slot": "drawer-description",
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function y4(e) {
  const t = /* @__PURE__ */ w4(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(S4);
    if (l) {
      const c = l.props.children, f = s.map((d) => d === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function w4(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = _4(o), s = C4(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? ye(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var x4 = Symbol("radix.slottable");
function S4(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === x4;
}
function C4(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _4(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var E4 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], P4 = E4.reduce((e, t) => {
  const n = /* @__PURE__ */ y4(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), _s = "DropdownMenu", [R4] = Fe(
  _s,
  [ca]
), it = ca(), [N4, qP] = R4(_s), GP = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = it(t), c = u.useRef(null), [f, d] = $e({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: _s
  });
  return /* @__PURE__ */ p(
    N4,
    {
      scope: t,
      triggerId: De(),
      triggerRef: c,
      contentId: De(),
      open: f,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((m) => !m), [d]),
      modal: s,
      children: /* @__PURE__ */ p(bp, { ...l, open: f, onOpenChange: d, dir: r, modal: s, children: n })
    }
  );
};
GP.displayName = _s;
var UP = "DropdownMenuTrigger", YP = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = qP(UP, n), i = it(n);
    return /* @__PURE__ */ p(yp, { asChild: !0, ...i, children: /* @__PURE__ */ p(
      P4.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: ye(t, a.triggerRef),
        onPointerDown: q(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
YP.displayName = UP;
var T4 = "DropdownMenuPortal", KP = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = it(t);
  return /* @__PURE__ */ p(wp, { ...r, ...n });
};
KP.displayName = T4;
var XP = "DropdownMenuContent", ZP = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = qP(XP, n), a = it(n), i = u.useRef(!1);
    return /* @__PURE__ */ p(
      xp,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
          (!o.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
ZP.displayName = XP;
var M4 = "DropdownMenuGroup", QP = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
    return /* @__PURE__ */ p(Sp, { ...o, ...r, ref: t });
  }
);
QP.displayName = M4;
var O4 = "DropdownMenuLabel", JP = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
    return /* @__PURE__ */ p(Cp, { ...o, ...r, ref: t });
  }
);
JP.displayName = O4;
var A4 = "DropdownMenuItem", e1 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
    return /* @__PURE__ */ p(_p, { ...o, ...r, ref: t });
  }
);
e1.displayName = A4;
var D4 = "DropdownMenuCheckboxItem", t1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Ep, { ...o, ...r, ref: t });
});
t1.displayName = D4;
var I4 = "DropdownMenuRadioGroup", n1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Pp, { ...o, ...r, ref: t });
});
n1.displayName = I4;
var k4 = "DropdownMenuRadioItem", r1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Rp, { ...o, ...r, ref: t });
});
r1.displayName = k4;
var $4 = "DropdownMenuItemIndicator", o1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Np, { ...o, ...r, ref: t });
});
o1.displayName = $4;
var L4 = "DropdownMenuSeparator", a1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Tp, { ...o, ...r, ref: t });
});
a1.displayName = L4;
var F4 = "DropdownMenuArrow", B4 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
    return /* @__PURE__ */ p(Mp, { ...o, ...r, ref: t });
  }
);
B4.displayName = F4;
var z4 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = it(t), [s, l] = $e({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ p(Op, { ...i, open: s, onOpenChange: l, children: n });
}, W4 = "DropdownMenuSubTrigger", i1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(Ap, { ...o, ...r, ref: t });
});
i1.displayName = W4;
var j4 = "DropdownMenuSubContent", s1 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = it(n);
  return /* @__PURE__ */ p(
    Dp,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
s1.displayName = j4;
var V4 = GP, H4 = YP, l1 = KP, q4 = ZP, G4 = QP, U4 = JP, Y4 = e1, K4 = t1, X4 = n1, Z4 = r1, c1 = o1, Q4 = a1, J4 = z4, eY = i1, tY = s1;
function K6({
  ...e
}) {
  return /* @__PURE__ */ p(V4, { "data-slot": "dropdown-menu", ...e });
}
function X6({
  ...e
}) {
  return /* @__PURE__ */ p(l1, { "data-slot": "dropdown-menu-portal", ...e });
}
function Z6({
  ...e
}) {
  return /* @__PURE__ */ p(
    H4,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Q6({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ p(l1, { children: /* @__PURE__ */ p(
    q4,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function J6({
  ...e
}) {
  return /* @__PURE__ */ p(G4, { "data-slot": "dropdown-menu-group", ...e });
}
function e9({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p(
    Y4,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function t9({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    K4,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(c1, { children: /* @__PURE__ */ p(Fo, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function n9({
  ...e
}) {
  return /* @__PURE__ */ p(
    X4,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function r9({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    Z4,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: R(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p(c1, { children: /* @__PURE__ */ p(_i, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function o9({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    U4,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: R(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function a9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Q4,
    {
      "data-slot": "dropdown-menu-separator",
      className: R("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function i9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: R(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function s9({
  ...e
}) {
  return /* @__PURE__ */ p(J4, { "data-slot": "dropdown-menu-sub", ...e });
}
function l9({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ se(
    eY,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: R(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p(jr, { className: "ml-auto size-4" })
      ]
    }
  );
}
function c9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    tY,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: R(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function u9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty",
      className: R(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function d9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty-header",
      className: R(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        e
      ),
      ...t
    }
  );
}
const nY = xt(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function f9({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: R(nY({ variant: t, className: e })),
      ...n
    }
  );
}
function p9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty-title",
      className: R("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function m9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty-description",
      className: R(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function h9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "empty-content",
      className: R(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function g9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "fieldset",
    {
      "data-slot": "field-set",
      className: R(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function v9({
  className: e,
  variant: t = "legend",
  ...n
}) {
  return /* @__PURE__ */ p(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: R(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...n
    }
  );
}
function b9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "field-group",
      className: R(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const rY = xt(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function y9({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: R(rY({ orientation: t }), e),
      ...n
    }
  );
}
function w9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "field-content",
      className: R(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      ...t
    }
  );
}
function x9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    X0,
    {
      "data-slot": "field-label",
      className: R(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-accent has-data-[state=checked]:border-primary",
        e
      ),
      ...t
    }
  );
}
function S9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "field-label",
      className: R(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function C9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "p",
    {
      "data-slot": "field-description",
      className: R(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function _9({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ se(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: R(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...n,
      children: [
        /* @__PURE__ */ p(gs, { className: "absolute inset-0 top-1/2" }),
        e && /* @__PURE__ */ p(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children: e
          }
        )
      ]
    }
  );
}
function E9({
  className: e,
  children: t,
  errors: n,
  ...r
}) {
  const o = Mn(() => {
    var i;
    if (t)
      return t;
    if (!(n != null && n.length))
      return null;
    const a = [
      ...new Map(n.map((s) => [s == null ? void 0 : s.message, s])).values()
    ];
    return (a == null ? void 0 : a.length) == 1 ? (i = a[0]) == null ? void 0 : i.message : /* @__PURE__ */ p("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: a.map(
      (s, l) => (s == null ? void 0 : s.message) && /* @__PURE__ */ p("li", { children: s.message }, l)
    ) });
  }, [t, n]);
  return o ? /* @__PURE__ */ p(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: R("text-destructive text-sm font-normal", e),
      ...r,
      children: o
    }
  ) : null;
}
const oY = xt(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function P9({
  className: e,
  orientation: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: R(oY({ orientation: t }), e),
      ...n
    }
  );
}
function R9({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ p(
    t ? Ht : "div",
    {
      className: R(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function N9({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ p(
    gs,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: R(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...n
    }
  );
}
function T9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card",
      className: R(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        e
      ),
      ...t
    }
  );
}
function M9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-header",
      className: R(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function O9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-title",
      className: R("leading-none font-semibold", e),
      ...t
    }
  );
}
function A9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-description",
      className: R("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function D9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-action",
      className: R(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function I9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-content",
      className: R("px-6", e),
      ...t
    }
  );
}
function k9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "card-footer",
      className: R("flex items-center px-6 [.border-t]:py-6", e),
      ...t
    }
  );
}
function $9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: R(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-lg border transition-[color] outline-none",
        "h-12 min-w-0 py-2 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive",
        e
      ),
      ...t
    }
  );
}
const aY = xt(
  "text-muted-foreground flex h-full cursor-text items-center justify-center gap-2 px-3 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function L9({
  className: e,
  align: t = "inline-start",
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: R(aY({ align: t }), e),
      onClick: (r) => {
        var o, a;
        r.target.closest("button") || (a = (o = r.currentTarget.parentElement) == null ? void 0 : o.querySelector("input")) == null || a.focus();
      },
      ...n
    }
  );
}
const iY = xt(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        md: "h-full px-3 gap-1.5 rounded-lg has-[>svg]:px-3",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
        "icon-md": "h-full w-12 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function F9({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: r = "md",
  ...o
}) {
  return /* @__PURE__ */ p(
    Go,
    {
      type: t,
      "data-size": r,
      variant: n,
      className: R(iY({ size: r }), e),
      ...o
    }
  );
}
function B9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "span",
    {
      className: R(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function z9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    kE,
    {
      "data-slot": "input-group-control",
      className: R(
        "flex-1 h-full rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent py-0",
        e
      ),
      ...t
    }
  );
}
function W9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    VG,
    {
      "data-slot": "input-group-control",
      className: R(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
var sY = Object.defineProperty, lY = Object.defineProperties, cY = Object.getOwnPropertyDescriptors, bi = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, uy = (e, t, n) => t in e ? sY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, uY = (e, t) => {
  for (var n in t || (t = {})) u1.call(t, n) && uy(e, n, t[n]);
  if (bi) for (var n of bi(t)) d1.call(t, n) && uy(e, n, t[n]);
  return e;
}, dY = (e, t) => lY(e, cY(t)), fY = (e, t) => {
  var n = {};
  for (var r in e) u1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && bi) for (var r of bi(e)) t.indexOf(r) < 0 && d1.call(e, r) && (n[r] = e[r]);
  return n;
};
function pY(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function mY(e) {
  let t = u.useRef();
  return u.useEffect(() => {
    t.current = e;
  }), t.current;
}
var hY = 18, f1 = 40, gY = `${f1}px`, vY = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function bY({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [l, c] = u.useState(!1), f = u.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), d = u.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || l || n === "none") return;
    let v = m, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - hY, w = b;
    document.querySelectorAll(vY).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), c(!0));
  }, [e, t, l, n]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function h() {
      let g = window.innerWidth - m.getBoundingClientRect().right;
      s(g >= f1);
    }
    h();
    let v = setInterval(h, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), u.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let h = setTimeout(d, 0), v = setTimeout(d, 2e3), g = setTimeout(d, 5e3), b = setTimeout(() => {
      c(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, d]), { hasPWMBadge: o, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: gY };
}
var p1 = u.createContext({}), m1 = u.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: c = "numeric", onComplete: f, pushPasswordManagerStrategy: d = "increase-width", pasteTransformer: m, containerClassName: h, noScriptCSSFallback: v = yY, render: g, children: b } = n, y = fY(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, x, S, E, C;
  let [_, T] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), N = r ?? _, D = mY(N), O = u.useCallback((A) => {
    o == null || o(A), T(A);
  }, [o]), k = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), M = u.useRef(null), B = u.useRef(null), H = u.useRef({ value: N, onChange: O, isIOS: typeof window < "u" && ((x = (w = window == null ? void 0 : window.CSS) == null ? void 0 : w.supports) == null ? void 0 : x.call(w, "-webkit-touch-callout", "none")) }), L = u.useRef({ prev: [(S = M.current) == null ? void 0 : S.selectionStart, (E = M.current) == null ? void 0 : E.selectionEnd, (C = M.current) == null ? void 0 : C.selectionDirection] });
  u.useImperativeHandle(t, () => M.current, []), u.useEffect(() => {
    let A = M.current, ne = B.current;
    if (!A || !ne) return;
    H.current.value !== A.value && H.current.onChange(A.value), L.current.prev = [A.selectionStart, A.selectionEnd, A.selectionDirection];
    function me() {
      if (document.activeElement !== A) {
        z(null), W(null);
        return;
      }
      let pe = A.selectionStart, xe = A.selectionEnd, Be = A.selectionDirection, we = A.maxLength, Pe = A.value, qe = L.current.prev, Ge = -1, Ze = -1, tt;
      if (Pe.length !== 0 && pe !== null && xe !== null) {
        let Ct = pe === xe, Ye = pe === Pe.length && Pe.length < we;
        if (Ct && !Ye) {
          let Qe = pe;
          if (Qe === 0) Ge = 0, Ze = 1, tt = "forward";
          else if (Qe === we) Ge = Qe - 1, Ze = Qe, tt = "backward";
          else if (we > 1 && Pe.length > 1) {
            let Ot = 0;
            if (qe[0] !== null && qe[1] !== null) {
              tt = Qe < qe[1] ? "backward" : "forward";
              let Yt = qe[0] === qe[1] && qe[0] < we;
              tt === "backward" && !Yt && (Ot = -1);
            }
            Ge = Ot + Qe, Ze = Ot + Qe + 1;
          }
        }
        Ge !== -1 && Ze !== -1 && Ge !== Ze && M.current.setSelectionRange(Ge, Ze, tt);
      }
      let st = Ge !== -1 ? Ge : pe, lt = Ze !== -1 ? Ze : xe, Ue = tt ?? Be;
      z(st), W(lt), L.current.prev = [st, lt, Ue];
    }
    if (document.addEventListener("selectionchange", me, { capture: !0 }), me(), document.activeElement === A && Q(!0), !document.getElementById("input-otp-style")) {
      let pe = document.createElement("style");
      if (pe.id = "input-otp-style", document.head.appendChild(pe), pe.sheet) {
        let xe = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        io(pe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), io(pe.sheet, `[data-input-otp]:autofill { ${xe} }`), io(pe.sheet, `[data-input-otp]:-webkit-autofill { ${xe} }`), io(pe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), io(pe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let he = () => {
      ne && ne.style.setProperty("--root-height", `${A.clientHeight}px`);
    };
    he();
    let ge = new ResizeObserver(he);
    return ge.observe(A), () => {
      document.removeEventListener("selectionchange", me, { capture: !0 }), ge.disconnect();
    };
  }, []);
  let [Y, G] = u.useState(!1), [j, Q] = u.useState(!1), [Z, z] = u.useState(null), [I, W] = u.useState(null);
  u.useEffect(() => {
    pY(() => {
      var A, ne, me, he;
      (A = M.current) == null || A.dispatchEvent(new Event("input"));
      let ge = (ne = M.current) == null ? void 0 : ne.selectionStart, pe = (me = M.current) == null ? void 0 : me.selectionEnd, xe = (he = M.current) == null ? void 0 : he.selectionDirection;
      ge !== null && pe !== null && (z(ge), W(pe), L.current.prev = [ge, pe, xe]);
    });
  }, [N, j]), u.useEffect(() => {
    D !== void 0 && N !== D && D.length < a && N.length === a && (f == null || f(N));
  }, [a, f, D, N]);
  let F = bY({ containerRef: B, inputRef: M, pushPasswordManagerStrategy: d, isFocused: j }), U = u.useCallback((A) => {
    let ne = A.currentTarget.value.slice(0, a);
    if (ne.length > 0 && k && !k.test(ne)) {
      A.preventDefault();
      return;
    }
    typeof D == "string" && ne.length < D.length && document.dispatchEvent(new Event("selectionchange")), O(ne);
  }, [a, O, D, k]), $ = u.useCallback(() => {
    var A;
    if (M.current) {
      let ne = Math.min(M.current.value.length, a - 1), me = M.current.value.length;
      (A = M.current) == null || A.setSelectionRange(ne, me), z(ne), W(me);
    }
    Q(!0);
  }, [a]), V = u.useCallback((A) => {
    var ne, me;
    let he = M.current;
    if (!m && (!H.current.isIOS || !A.clipboardData || !he)) return;
    let ge = A.clipboardData.getData("text/plain"), pe = m ? m(ge) : ge;
    A.preventDefault();
    let xe = (ne = M.current) == null ? void 0 : ne.selectionStart, Be = (me = M.current) == null ? void 0 : me.selectionEnd, we = (xe !== Be ? N.slice(0, xe) + pe + N.slice(Be) : N.slice(0, xe) + pe + N.slice(xe)).slice(0, a);
    if (we.length > 0 && k && !k.test(we)) return;
    he.value = we, O(we);
    let Pe = Math.min(we.length, a - 1), qe = we.length;
    he.setSelectionRange(Pe, qe), z(Pe), W(qe);
  }, [a, O, k, N]), X = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), ee = u.useMemo(() => ({ position: "absolute", inset: 0, width: F.willPushPWMBadge ? `calc(100% + ${F.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: F.willPushPWMBadge ? `inset(0 ${F.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [F.PWM_BADGE_SPACE_WIDTH, F.willPushPWMBadge, i]), te = u.useMemo(() => u.createElement("input", dY(uY({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": N.length === 0 || void 0, "data-input-otp-mss": Z, "data-input-otp-mse": I, inputMode: c, pattern: k == null ? void 0 : k.source, "aria-placeholder": l, style: ee, maxLength: a, value: N, ref: M, onPaste: (A) => {
    var ne;
    V(A), (ne = y.onPaste) == null || ne.call(y, A);
  }, onChange: U, onMouseOver: (A) => {
    var ne;
    G(!0), (ne = y.onMouseOver) == null || ne.call(y, A);
  }, onMouseLeave: (A) => {
    var ne;
    G(!1), (ne = y.onMouseLeave) == null || ne.call(y, A);
  }, onFocus: (A) => {
    var ne;
    $(), (ne = y.onFocus) == null || ne.call(y, A);
  }, onBlur: (A) => {
    var ne;
    Q(!1), (ne = y.onBlur) == null || ne.call(y, A);
  } })), [U, $, V, c, ee, a, I, Z, y, k == null ? void 0 : k.source, N]), K = u.useMemo(() => ({ slots: Array.from({ length: a }).map((A, ne) => {
    var me;
    let he = j && Z !== null && I !== null && (Z === I && ne === Z || ne >= Z && ne < I), ge = N[ne] !== void 0 ? N[ne] : null, pe = N[0] !== void 0 ? null : (me = l == null ? void 0 : l[ne]) != null ? me : null;
    return { char: ge, placeholderChar: pe, isActive: he, hasFakeCaret: he && ge === null };
  }), isFocused: j, isHovering: !y.disabled && Y }), [j, Y, a, I, Z, y.disabled, N]), oe = u.useMemo(() => g ? g(K) : u.createElement(p1.Provider, { value: K }, b), [b, K, g]);
  return u.createElement(u.Fragment, null, v !== null && u.createElement("noscript", null, u.createElement("style", null, v)), u.createElement("div", { ref: B, "data-input-otp-container": !0, style: X, className: h }, oe, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, te)));
});
m1.displayName = "Input";
function io(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var yY = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
function j9({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    m1,
    {
      "data-slot": "input-otp",
      containerClassName: R(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: R("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function V9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "input-otp-group",
      className: R("flex items-center", e),
      ...t
    }
  );
}
function H9({
  index: e,
  className: t,
  ...n
}) {
  const r = u.useContext(p1), { char: o, hasFakeCaret: a, isActive: i } = (r == null ? void 0 : r.slots[e]) ?? {};
  return /* @__PURE__ */ se(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: R(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        o,
        a && /* @__PURE__ */ p("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ p("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function q9({ ...e }) {
  return /* @__PURE__ */ p("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ p($R, {}) });
}
function G9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: R("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function U9({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    gs,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: R("my-0", e),
      ...t
    }
  );
}
const wY = xt(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Y9({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  ...o
}) {
  return /* @__PURE__ */ p(
    r ? Ht : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": n,
      className: R(wY({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
const xY = xt(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function K9({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: R(xY({ variant: t, className: e })),
      ...n
    }
  );
}
function X9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-content",
      className: R(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      ...t
    }
  );
}
function Z9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-title",
      className: R(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      ...t
    }
  );
}
function Q9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "p",
    {
      "data-slot": "item-description",
      className: R(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function J9({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-actions",
      className: R("flex items-center gap-2", e),
      ...t
    }
  );
}
function e7({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-header",
      className: R(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function t7({ className: e, ...t }) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "item-footer",
      className: R(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
export {
  RY as Accordion,
  MY as AccordionContent,
  NY as AccordionItem,
  TY as AccordionTrigger,
  OY as Alert,
  DY as AlertDescription,
  kY as AlertDialog,
  jY as AlertDialogAction,
  VY as AlertDialogCancel,
  LY as AlertDialogContent,
  WY as AlertDialogDescription,
  BY as AlertDialogFooter,
  FY as AlertDialogHeader,
  VM as AlertDialogOverlay,
  jM as AlertDialogPortal,
  zY as AlertDialogTitle,
  $Y as AlertDialogTrigger,
  AY as AlertTitle,
  IY as AspectRatio,
  HY as Avatar,
  GY as AvatarFallback,
  qY as AvatarImage,
  UY as Badge,
  YY as Breadcrumb,
  eK as BreadcrumbEllipsis,
  XY as BreadcrumbItem,
  ZY as BreadcrumbLink,
  KY as BreadcrumbList,
  QY as BreadcrumbPage,
  JY as BreadcrumbSeparator,
  Go as Button,
  P9 as ButtonGroup,
  N9 as ButtonGroupSeparator,
  R9 as ButtonGroupText,
  tK as Calendar,
  T9 as Card,
  D9 as CardAction,
  I9 as CardContent,
  A9 as CardDescription,
  k9 as CardFooter,
  M9 as CardHeader,
  O9 as CardTitle,
  nK as Carousel,
  rK as CarouselContent,
  oK as CarouselItem,
  iK as CarouselNext,
  aK as CarouselPrevious,
  sK as ChartContainer,
  uK as ChartLegend,
  dK as ChartLegendContent,
  rF as ChartStyle,
  lK as ChartTooltip,
  cK as ChartTooltipContent,
  fK as Checkbox,
  pK as Collapsible,
  hK as CollapsibleContent,
  mK as CollapsibleTrigger,
  GF as Command,
  yK as CommandDialog,
  SK as CommandEmpty,
  CK as CommandGroup,
  wK as CommandInput,
  EK as CommandItem,
  xK as CommandList,
  _K as CommandSeparator,
  PK as CommandShortcut,
  RK as ContextMenu,
  LK as ContextMenuCheckboxItem,
  kK as ContextMenuContent,
  TK as ContextMenuGroup,
  $K as ContextMenuItem,
  BK as ContextMenuLabel,
  MK as ContextMenuPortal,
  AK as ContextMenuRadioGroup,
  FK as ContextMenuRadioItem,
  zK as ContextMenuSeparator,
  WK as ContextMenuShortcut,
  OK as ContextMenuSub,
  IK as ContextMenuSubContent,
  DK as ContextMenuSubTrigger,
  NK as ContextMenuTrigger,
  BF as Dialog,
  vK as DialogClose,
  jF as DialogContent,
  qF as DialogDescription,
  bK as DialogFooter,
  VF as DialogHeader,
  WF as DialogOverlay,
  zF as DialogPortal,
  HF as DialogTitle,
  gK as DialogTrigger,
  PY as DirectionProvider,
  W6 as Drawer,
  V6 as DrawerClose,
  H6 as DrawerContent,
  Y6 as DrawerDescription,
  G6 as DrawerFooter,
  q6 as DrawerHeader,
  b4 as DrawerOverlay,
  v4 as DrawerPortal,
  U6 as DrawerTitle,
  j6 as DrawerTrigger,
  K6 as DropdownMenu,
  t9 as DropdownMenuCheckboxItem,
  Q6 as DropdownMenuContent,
  J6 as DropdownMenuGroup,
  e9 as DropdownMenuItem,
  o9 as DropdownMenuLabel,
  X6 as DropdownMenuPortal,
  n9 as DropdownMenuRadioGroup,
  r9 as DropdownMenuRadioItem,
  a9 as DropdownMenuSeparator,
  i9 as DropdownMenuShortcut,
  s9 as DropdownMenuSub,
  c9 as DropdownMenuSubContent,
  l9 as DropdownMenuSubTrigger,
  Z6 as DropdownMenuTrigger,
  u9 as Empty,
  h9 as EmptyContent,
  m9 as EmptyDescription,
  d9 as EmptyHeader,
  f9 as EmptyMedia,
  p9 as EmptyTitle,
  y9 as Field,
  w9 as FieldContent,
  C9 as FieldDescription,
  E9 as FieldError,
  b9 as FieldGroup,
  x9 as FieldLabel,
  v9 as FieldLegend,
  _9 as FieldSeparator,
  g9 as FieldSet,
  S9 as FieldTitle,
  jK as Form,
  GK as FormControl,
  UK as FormDescription,
  VK as FormField,
  HK as FormItem,
  qK as FormLabel,
  YK as FormMessage,
  KK as HoverCard,
  ZK as HoverCardContent,
  XK as HoverCardTrigger,
  kE as Input,
  $9 as InputGroup,
  L9 as InputGroupAddon,
  F9 as InputGroupButton,
  z9 as InputGroupInput,
  B9 as InputGroupText,
  W9 as InputGroupTextarea,
  j9 as InputOTP,
  V9 as InputOTPGroup,
  q9 as InputOTPSeparator,
  H9 as InputOTPSlot,
  Y9 as Item,
  J9 as ItemActions,
  X9 as ItemContent,
  Q9 as ItemDescription,
  t7 as ItemFooter,
  G9 as ItemGroup,
  e7 as ItemHeader,
  K9 as ItemMedia,
  U9 as ItemSeparator,
  Z9 as ItemTitle,
  QK as Kbd,
  JK as KbdGroup,
  X0 as Label,
  e8 as Menubar,
  s8 as MenubarCheckboxItem,
  a8 as MenubarContent,
  n8 as MenubarGroup,
  i8 as MenubarItem,
  c8 as MenubarLabel,
  t8 as MenubarMenu,
  EV as MenubarPortal,
  r8 as MenubarRadioGroup,
  l8 as MenubarRadioItem,
  u8 as MenubarSeparator,
  d8 as MenubarShortcut,
  f8 as MenubarSub,
  m8 as MenubarSubContent,
  p8 as MenubarSubTrigger,
  o8 as MenubarTrigger,
  h8 as NativeSelect,
  v8 as NativeSelectOptGroup,
  g8 as NativeSelectOption,
  b8 as NavigationMenu,
  S8 as NavigationMenuContent,
  _8 as NavigationMenuIndicator,
  w8 as NavigationMenuItem,
  C8 as NavigationMenuLink,
  y8 as NavigationMenuList,
  x8 as NavigationMenuTrigger,
  fH as NavigationMenuViewport,
  E8 as Pagination,
  P8 as PaginationContent,
  M8 as PaginationEllipsis,
  R8 as PaginationItem,
  YC as PaginationLink,
  T8 as PaginationNext,
  N8 as PaginationPrevious,
  O8 as Popover,
  I8 as PopoverAnchor,
  D8 as PopoverContent,
  A8 as PopoverTrigger,
  k8 as Progress,
  $8 as RadioGroup,
  L8 as RadioGroupItem,
  z8 as ResizableHandle,
  B8 as ResizablePanel,
  F8 as ResizablePanelGroup,
  W8 as ScrollArea,
  r5 as ScrollBar,
  j8 as Select,
  G8 as SelectContent,
  V8 as SelectGroup,
  Y8 as SelectItem,
  U8 as SelectLabel,
  G5 as SelectScrollDownButton,
  q5 as SelectScrollUpButton,
  K8 as SelectSeparator,
  q8 as SelectTrigger,
  H8 as SelectValue,
  gs as Separator,
  Z5 as Sheet,
  Z8 as SheetClose,
  e3 as SheetContent,
  r3 as SheetDescription,
  Q8 as SheetFooter,
  t3 as SheetHeader,
  n3 as SheetTitle,
  X8 as SheetTrigger,
  e6 as Sidebar,
  l6 as SidebarContent,
  i6 as SidebarFooter,
  c6 as SidebarGroup,
  d6 as SidebarGroupAction,
  f6 as SidebarGroupContent,
  u6 as SidebarGroupLabel,
  a6 as SidebarHeader,
  o6 as SidebarInput,
  r6 as SidebarInset,
  p6 as SidebarMenu,
  g6 as SidebarMenuAction,
  v6 as SidebarMenuBadge,
  h6 as SidebarMenuButton,
  m6 as SidebarMenuItem,
  b6 as SidebarMenuSkeleton,
  y6 as SidebarMenuSub,
  x6 as SidebarMenuSubButton,
  w6 as SidebarMenuSubItem,
  J8 as SidebarProvider,
  n6 as SidebarRail,
  s6 as SidebarSeparator,
  t6 as SidebarTrigger,
  ty as Skeleton,
  S6 as Slider,
  C6 as Spinner,
  _6 as Switch,
  E6 as Table,
  R6 as TableBody,
  A6 as TableCaption,
  O6 as TableCell,
  N6 as TableFooter,
  M6 as TableHead,
  P6 as TableHeader,
  T6 as TableRow,
  D6 as Tabs,
  k6 as TabsContent,
  I6 as TabsList,
  jG as TabsTrigger,
  VG as Textarea,
  z6 as Toaster,
  $6 as Toggle,
  L6 as ToggleGroup,
  F6 as ToggleGroupItem,
  I3 as Tooltip,
  $3 as TooltipContent,
  GE as TooltipProvider,
  k3 as TooltipTrigger,
  oO as badgeVariants,
  oY as buttonGroupVariants,
  Tr as buttonVariants,
  R as cn,
  dH as navigationMenuTriggerStyle,
  B6 as toast,
  PP as toggleVariants,
  Ji as useFormField,
  ys as useSidebar
};
