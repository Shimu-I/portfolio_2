import "./chunk-7D4SUZUM.js";

// node_modules/@splinetool/runtime/build/gaussian-splat-compression.js
var Re = Object.create;
var fr = Object.defineProperty;
var Be = Object.getOwnPropertyDescriptor;
var Ue = Object.getOwnPropertyNames;
var Ye = Object.getPrototypeOf;
var Ge = Object.prototype.hasOwnProperty;
var Qe = (r, e, n) => e in r ? fr(r, e, { enumerable: true, configurable: true, writable: true, value: n }) : r[e] = n;
var K = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var ur = (r, e) => {
  for (var n in e) fr(r, n, { get: e[n], enumerable: true });
};
var $e = (r, e, n, a) => {
  if (e && typeof e == "object" || typeof e == "function") for (let t of Ue(e)) !Ge.call(r, t) && t !== n && fr(r, t, { get: () => e[t], enumerable: !(a = Be(e, t)) || a.enumerable });
  return r;
};
var Q = (r, e, n) => (n = r != null ? Re(Ye(r)) : {}, $e(e || !r || !r.__esModule ? fr(n, "default", { value: r, enumerable: true }) : n, r));
var $ = (r, e, n) => (Qe(r, typeof e != "symbol" ? e + "" : e, n), n);
var Lr = K((gt, Cr) => {
  "use strict";
  function He(r) {
    for (var e = new Array(r), n = 0; n < r; ++n) e[n] = n;
    return e;
  }
  Cr.exports = He;
});
var Tr = K((Mt, Er) => {
  Er.exports = function(r) {
    return r != null && (Dr(r) || We(r) || !!r._isBuffer);
  };
  function Dr(r) {
    return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
  }
  function We(r) {
    return typeof r.readFloatLE == "function" && typeof r.slice == "function" && Dr(r.slice(0, 0));
  }
});
var tr = K((_t, Pr) => {
  var Ze = Lr(), Xe = Tr(), Ke = typeof Float64Array < "u";
  function Je(r, e) {
    return r[0] - e[0];
  }
  function rn() {
    var r = this.stride, e = new Array(r.length), n;
    for (n = 0; n < e.length; ++n) e[n] = [Math.abs(r[n]), n];
    e.sort(Je);
    var a = new Array(e.length);
    for (n = 0; n < a.length; ++n) a[n] = e[n][1];
    return a;
  }
  function en(r, e) {
    var n = ["View", e, "d", r].join("");
    e < 0 && (n = "View_Nil" + r);
    var a = r === "generic";
    if (e === -1) {
      var t = "function " + n + "(a){this.data=a;};var proto=" + n + ".prototype;proto.dtype='" + r + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + n + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + n + "(a){return new " + n + "(a);}", d = new Function(t);
      return d();
    } else if (e === 0) {
      var t = "function " + n + "(a,d) {this.data = a;this.offset = d};var proto=" + n + ".prototype;proto.dtype='" + r + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + n + "_copy() {return new " + n + "(this.data,this.offset)};proto.pick=function " + n + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + n + "_get(){return " + (a ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + n + "_set(v){return " + (a ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + n + "(a,b,c,d){return new " + n + "(a,d)}", d = new Function("TrivialArray", t);
      return d(yr[r][0]);
    }
    var t = ["'use strict'"], s = Ze(e), i = s.map(function(y) {
      return "i" + y;
    }), h = "this.offset+" + s.map(function(y) {
      return "this.stride[" + y + "]*i" + y;
    }).join("+"), o = s.map(function(y) {
      return "b" + y;
    }).join(","), c = s.map(function(y) {
      return "c" + y;
    }).join(",");
    t.push("function " + n + "(a," + o + "," + c + ",d){this.data=a", "this.shape=[" + o + "]", "this.stride=[" + c + "]", "this.offset=d|0}", "var proto=" + n + ".prototype", "proto.dtype='" + r + "'", "proto.dimension=" + e), t.push("Object.defineProperty(proto,'size',{get:function " + n + "_size(){return " + s.map(function(y) {
      return "this.shape[" + y + "]";
    }).join("*"), "}})"), e === 1 ? t.push("proto.order=[0]") : (t.push("Object.defineProperty(proto,'order',{get:"), e < 4 ? (t.push("function " + n + "_order(){"), e === 2 ? t.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : e === 3 && t.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : t.push("ORDER})")), t.push("proto.set=function " + n + "_set(" + i.join(",") + ",v){"), a ? t.push("return this.data.set(" + h + ",v)}") : t.push("return this.data[" + h + "]=v}"), t.push("proto.get=function " + n + "_get(" + i.join(",") + "){"), a ? t.push("return this.data.get(" + h + ")}") : t.push("return this.data[" + h + "]}"), t.push("proto.index=function " + n + "_index(", i.join(), "){return " + h + "}"), t.push("proto.hi=function " + n + "_hi(" + i.join(",") + "){return new " + n + "(this.data," + s.map(function(y) {
      return ["(typeof i", y, "!=='number'||i", y, "<0)?this.shape[", y, "]:i", y, "|0"].join("");
    }).join(",") + "," + s.map(function(y) {
      return "this.stride[" + y + "]";
    }).join(",") + ",this.offset)}");
    var l = s.map(function(y) {
      return "a" + y + "=this.shape[" + y + "]";
    }), f = s.map(function(y) {
      return "c" + y + "=this.stride[" + y + "]";
    });
    t.push("proto.lo=function " + n + "_lo(" + i.join(",") + "){var b=this.offset,d=0," + l.join(",") + "," + f.join(","));
    for (var p = 0; p < e; ++p) t.push("if(typeof i" + p + "==='number'&&i" + p + ">=0){d=i" + p + "|0;b+=c" + p + "*d;a" + p + "-=d}");
    t.push("return new " + n + "(this.data," + s.map(function(y) {
      return "a" + y;
    }).join(",") + "," + s.map(function(y) {
      return "c" + y;
    }).join(",") + ",b)}"), t.push("proto.step=function " + n + "_step(" + i.join(",") + "){var " + s.map(function(y) {
      return "a" + y + "=this.shape[" + y + "]";
    }).join(",") + "," + s.map(function(y) {
      return "b" + y + "=this.stride[" + y + "]";
    }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
    for (var p = 0; p < e; ++p) t.push("if(typeof i" + p + "==='number'){d=i" + p + "|0;if(d<0){c+=b" + p + "*(a" + p + "-1);a" + p + "=ceil(-a" + p + "/d)}else{a" + p + "=ceil(a" + p + "/d)}b" + p + "*=d}");
    t.push("return new " + n + "(this.data," + s.map(function(y) {
      return "a" + y;
    }).join(",") + "," + s.map(function(y) {
      return "b" + y;
    }).join(",") + ",c)}");
    for (var v = new Array(e), m = new Array(e), p = 0; p < e; ++p) v[p] = "a[i" + p + "]", m[p] = "b[i" + p + "]";
    t.push("proto.transpose=function " + n + "_transpose(" + i + "){" + i.map(function(y, u) {
      return y + "=(" + y + "===undefined?" + u + ":" + y + "|0)";
    }).join(";"), "var a=this.shape,b=this.stride;return new " + n + "(this.data," + v.join(",") + "," + m.join(",") + ",this.offset)}"), t.push("proto.pick=function " + n + "_pick(" + i + "){var a=[],b=[],c=this.offset");
    for (var p = 0; p < e; ++p) t.push("if(typeof i" + p + "==='number'&&i" + p + ">=0){c=(c+this.stride[" + p + "]*i" + p + ")|0}else{a.push(this.shape[" + p + "]);b.push(this.stride[" + p + "])}");
    t.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), t.push("return function construct_" + n + "(data,shape,stride,offset){return new " + n + "(data," + s.map(function(y) {
      return "shape[" + y + "]";
    }).join(",") + "," + s.map(function(y) {
      return "stride[" + y + "]";
    }).join(",") + ",offset)}");
    var d = new Function("CTOR_LIST", "ORDER", t.join(`
`));
    return d(yr[r], rn);
  }
  function nn(r) {
    if (Xe(r)) return "buffer";
    if (Ke) switch (Object.prototype.toString.call(r)) {
      case "[object Float64Array]":
        return "float64";
      case "[object Float32Array]":
        return "float32";
      case "[object Int8Array]":
        return "int8";
      case "[object Int16Array]":
        return "int16";
      case "[object Int32Array]":
        return "int32";
      case "[object Uint8Array]":
        return "uint8";
      case "[object Uint16Array]":
        return "uint16";
      case "[object Uint32Array]":
        return "uint32";
      case "[object Uint8ClampedArray]":
        return "uint8_clamped";
      case "[object BigInt64Array]":
        return "bigint64";
      case "[object BigUint64Array]":
        return "biguint64";
    }
    return Array.isArray(r) ? "array" : "generic";
  }
  var yr = { float32: [], float64: [], int8: [], int16: [], int32: [], uint8: [], uint16: [], uint32: [], array: [], uint8_clamped: [], bigint64: [], biguint64: [], buffer: [], generic: [] };
  function an(r, e, n, a) {
    if (r === void 0) {
      var c = yr.array[0];
      return c([]);
    } else typeof r == "number" && (r = [r]);
    e === void 0 && (e = [r.length]);
    var t = e.length;
    if (n === void 0) {
      n = new Array(t);
      for (var s = t - 1, i = 1; s >= 0; --s) n[s] = i, i *= e[s];
    }
    if (a === void 0) {
      a = 0;
      for (var s = 0; s < t; ++s) n[s] < 0 && (a -= (e[s] - 1) * n[s]);
    }
    for (var h = nn(r), o = yr[h]; o.length <= t + 1; ) o.push(en(h, o.length - 1));
    var c = o[t + 1];
    return c(r, e, n, a);
  }
  Pr.exports = an;
});
var Or = K((bt, Vr) => {
  "use strict";
  function tn(r, e) {
    for (var n = 1, a = r.length, t = r[0], s = r[0], i = 1; i < a; ++i) if (s = t, t = r[i], e(t, s)) {
      if (i === n) {
        n++;
        continue;
      }
      r[n++] = t;
    }
    return r.length = n, r;
  }
  function sn(r) {
    for (var e = 1, n = r.length, a = r[0], t = r[0], s = 1; s < n; ++s, t = a) if (t = a, a = r[s], a !== t) {
      if (s === e) {
        e++;
        continue;
      }
      r[e++] = a;
    }
    return r.length = e, r;
  }
  function on(r, e, n) {
    return r.length === 0 ? r : e ? (n || r.sort(e), tn(r, e)) : (n || r.sort(), sn(r));
  }
  Vr.exports = on;
});
var Br = K((At, Rr) => {
  "use strict";
  var hn = Or();
  function jr(r, e, n) {
    var a = r.length, t = e.arrayArgs.length, s = e.indexArgs.length > 0, i = [], h = [], o = 0, c = 0, l, f;
    for (l = 0; l < a; ++l) h.push(["i", l, "=0"].join(""));
    for (f = 0; f < t; ++f) for (l = 0; l < a; ++l) c = o, o = r[l], l === 0 ? h.push(["d", f, "s", l, "=t", f, "p", o].join("")) : h.push(["d", f, "s", l, "=(t", f, "p", o, "-s", c, "*t", f, "p", c, ")"].join(""));
    for (h.length > 0 && i.push("var " + h.join(",")), l = a - 1; l >= 0; --l) o = r[l], i.push(["for(i", l, "=0;i", l, "<s", o, ";++i", l, "){"].join(""));
    for (i.push(n), l = 0; l < a; ++l) {
      for (c = o, o = r[l], f = 0; f < t; ++f) i.push(["p", f, "+=d", f, "s", l].join(""));
      s && (l > 0 && i.push(["index[", c, "]-=s", c].join("")), i.push(["++index[", o, "]"].join(""))), i.push("}");
    }
    return i.join(`
`);
  }
  function cn(r, e, n, a) {
    for (var t = e.length, s = n.arrayArgs.length, i = n.blockSize, h = n.indexArgs.length > 0, o = [], c = 0; c < s; ++c) o.push(["var offset", c, "=p", c].join(""));
    for (var c = r; c < t; ++c) o.push(["for(var j" + c + "=SS[", e[c], "]|0;j", c, ">0;){"].join("")), o.push(["if(j", c, "<", i, "){"].join("")), o.push(["s", e[c], "=j", c].join("")), o.push(["j", c, "=0"].join("")), o.push(["}else{s", e[c], "=", i].join("")), o.push(["j", c, "-=", i, "}"].join("")), h && o.push(["index[", e[c], "]=j", c].join(""));
    for (var c = 0; c < s; ++c) {
      for (var l = ["offset" + c], f = r; f < t; ++f) l.push(["j", f, "*t", c, "p", e[f]].join(""));
      o.push(["p", c, "=(", l.join("+"), ")"].join(""));
    }
    o.push(jr(e, n, a));
    for (var c = r; c < t; ++c) o.push("}");
    return o.join(`
`);
  }
  function ln(r) {
    for (var e = 0, n = r[0].length; e < n; ) {
      for (var a = 1; a < r.length; ++a) if (r[a][e] !== r[0][e]) return e;
      ++e;
    }
    return e;
  }
  function xr(r, e, n) {
    for (var a = r.body, t = [], s = [], i = 0; i < r.args.length; ++i) {
      var h = r.args[i];
      if (!(h.count <= 0)) {
        var o = new RegExp(h.name, "g"), c = "", l = e.arrayArgs.indexOf(i);
        switch (e.argTypes[i]) {
          case "offset":
            var f = e.offsetArgIndex.indexOf(i), p = e.offsetArgs[f];
            l = p.array, c = "+q" + f;
          case "array":
            c = "p" + l + c;
            var v = "l" + i, m = "a" + l;
            if (e.arrayBlockIndices[l] === 0) h.count === 1 ? n[l] === "generic" ? h.lvalue ? (t.push(["var ", v, "=", m, ".get(", c, ")"].join("")), a = a.replace(o, v), s.push([m, ".set(", c, ",", v, ")"].join(""))) : a = a.replace(o, [m, ".get(", c, ")"].join("")) : a = a.replace(o, [m, "[", c, "]"].join("")) : n[l] === "generic" ? (t.push(["var ", v, "=", m, ".get(", c, ")"].join("")), a = a.replace(o, v), h.lvalue && s.push([m, ".set(", c, ",", v, ")"].join(""))) : (t.push(["var ", v, "=", m, "[", c, "]"].join("")), a = a.replace(o, v), h.lvalue && s.push([m, "[", c, "]=", v].join("")));
            else {
              for (var d = [h.name], y = [c], u = 0; u < Math.abs(e.arrayBlockIndices[l]); u++) d.push("\\s*\\[([^\\]]+)\\]"), y.push("$" + (u + 1) + "*t" + l + "b" + u);
              if (o = new RegExp(d.join(""), "g"), c = y.join("+"), n[l] === "generic") throw new Error("cwise: Generic arrays not supported in combination with blocks!");
              a = a.replace(o, [m, "[", c, "]"].join(""));
            }
            break;
          case "scalar":
            a = a.replace(o, "Y" + e.scalarArgs.indexOf(i));
            break;
          case "index":
            a = a.replace(o, "index");
            break;
          case "shape":
            a = a.replace(o, "shape");
            break;
        }
      }
    }
    return [t.join(`
`), a, s.join(`
`)].join(`
`).trim();
  }
  function pn(r) {
    for (var e = new Array(r.length), n = true, a = 0; a < r.length; ++a) {
      var t = r[a], s = t.match(/\d+/);
      s ? s = s[0] : s = "", t.charAt(0) === 0 ? e[a] = "u" + t.charAt(1) + s : e[a] = t.charAt(0) + s, a > 0 && (n = n && e[a] === e[a - 1]);
    }
    return n ? e[0] : e.join("");
  }
  function fn(r, e) {
    for (var n = e[1].length - Math.abs(r.arrayBlockIndices[0]) | 0, a = new Array(r.arrayArgs.length), t = new Array(r.arrayArgs.length), s = 0; s < r.arrayArgs.length; ++s) t[s] = e[2 * s], a[s] = e[2 * s + 1];
    for (var i = [], h = [], o = [], c = [], l = [], s = 0; s < r.arrayArgs.length; ++s) {
      r.arrayBlockIndices[s] < 0 ? (o.push(0), c.push(n), i.push(n), h.push(n + r.arrayBlockIndices[s])) : (o.push(r.arrayBlockIndices[s]), c.push(r.arrayBlockIndices[s] + n), i.push(0), h.push(r.arrayBlockIndices[s]));
      for (var f = [], p = 0; p < a[s].length; p++) o[s] <= a[s][p] && a[s][p] < c[s] && f.push(a[s][p] - o[s]);
      l.push(f);
    }
    for (var v = ["SS"], m = ["'use strict'"], d = [], p = 0; p < n; ++p) d.push(["s", p, "=SS[", p, "]"].join(""));
    for (var s = 0; s < r.arrayArgs.length; ++s) {
      v.push("a" + s), v.push("t" + s), v.push("p" + s);
      for (var p = 0; p < n; ++p) d.push(["t", s, "p", p, "=t", s, "[", o[s] + p, "]"].join(""));
      for (var p = 0; p < Math.abs(r.arrayBlockIndices[s]); ++p) d.push(["t", s, "b", p, "=t", s, "[", i[s] + p, "]"].join(""));
    }
    for (var s = 0; s < r.scalarArgs.length; ++s) v.push("Y" + s);
    if (r.shapeArgs.length > 0 && d.push("shape=SS.slice(0)"), r.indexArgs.length > 0) {
      for (var y = new Array(n), s = 0; s < n; ++s) y[s] = "0";
      d.push(["index=[", y.join(","), "]"].join(""));
    }
    for (var s = 0; s < r.offsetArgs.length; ++s) {
      for (var u = r.offsetArgs[s], x = [], p = 0; p < u.offset.length; ++p) u.offset[p] !== 0 && (u.offset[p] === 1 ? x.push(["t", u.array, "p", p].join("")) : x.push([u.offset[p], "*t", u.array, "p", p].join("")));
      x.length === 0 ? d.push("q" + s + "=0") : d.push(["q", s, "=", x.join("+")].join(""));
    }
    var M = hn([].concat(r.pre.thisVars).concat(r.body.thisVars).concat(r.post.thisVars));
    d = d.concat(M), d.length > 0 && m.push("var " + d.join(","));
    for (var s = 0; s < r.arrayArgs.length; ++s) m.push("p" + s + "|=0");
    r.pre.body.length > 3 && m.push(xr(r.pre, r, t));
    var b = xr(r.body, r, t), _ = ln(l);
    _ < n ? m.push(cn(_, l[0], r, b)) : m.push(jr(l[0], r, b)), r.post.body.length > 3 && m.push(xr(r.post, r, t)), r.debug && console.log("-----Generated cwise routine for ", e, `:
` + m.join(`
`) + `
----------`);
    var g = [r.funcName || "unnamed", "_cwise_loop_", a[0].join("s"), "m", _, pn(t)].join(""), N = new Function(["function ", g, "(", v.join(","), "){", m.join(`
`), "} return ", g].join(""));
    return N();
  }
  Rr.exports = fn;
});
var Yr = K((wt, Ur) => {
  "use strict";
  var yn = Br();
  function dn(r) {
    var e = ["'use strict'", "var CACHED={}"], n = [], a = r.funcName + "_cwise_thunk";
    e.push(["return function ", a, "(", r.shimArgs.join(","), "){"].join(""));
    for (var t = [], s = [], i = [["array", r.arrayArgs[0], ".shape.slice(", Math.max(0, r.arrayBlockIndices[0]), r.arrayBlockIndices[0] < 0 ? "," + r.arrayBlockIndices[0] + ")" : ")"].join("")], h = [], o = [], c = 0; c < r.arrayArgs.length; ++c) {
      var l = r.arrayArgs[c];
      n.push(["t", l, "=array", l, ".dtype,", "r", l, "=array", l, ".order"].join("")), t.push("t" + l), t.push("r" + l), s.push("t" + l), s.push("r" + l + ".join()"), i.push("array" + l + ".data"), i.push("array" + l + ".stride"), i.push("array" + l + ".offset|0"), c > 0 && (h.push("array" + r.arrayArgs[0] + ".shape.length===array" + l + ".shape.length+" + (Math.abs(r.arrayBlockIndices[0]) - Math.abs(r.arrayBlockIndices[c]))), o.push("array" + r.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, r.arrayBlockIndices[0]) + "]===array" + l + ".shape[shapeIndex+" + Math.max(0, r.arrayBlockIndices[c]) + "]"));
    }
    r.arrayArgs.length > 1 && (e.push("if (!(" + h.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), e.push("for(var shapeIndex=array" + r.arrayArgs[0] + ".shape.length-" + Math.abs(r.arrayBlockIndices[0]) + "; shapeIndex-->0;) {"), e.push("if (!(" + o.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), e.push("}"));
    for (var c = 0; c < r.scalarArgs.length; ++c) i.push("scalar" + r.scalarArgs[c]);
    n.push(["type=[", s.join(","), "].join()"].join("")), n.push("proc=CACHED[type]"), e.push("var " + n.join(",")), e.push(["if(!proc){", "CACHED[type]=proc=compile([", t.join(","), "])}", "return proc(", i.join(","), ")}"].join("")), r.debug && console.log(`-----Generated thunk:
` + e.join(`
`) + `
----------`);
    var f = new Function("compile", e.join(`
`));
    return f(yn.bind(void 0, r));
  }
  Ur.exports = dn;
});
var Qr = K((kt, Gr) => {
  "use strict";
  var vn = Yr();
  function mn() {
    this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = false;
  }
  function un(r) {
    var e = new mn();
    e.pre = r.pre, e.body = r.body, e.post = r.post;
    var n = r.args.slice(0);
    e.argTypes = n;
    for (var a = 0; a < n.length; ++a) {
      var t = n[a];
      if (t === "array" || typeof t == "object" && t.blockIndices) {
        if (e.argTypes[a] = "array", e.arrayArgs.push(a), e.arrayBlockIndices.push(t.blockIndices ? t.blockIndices : 0), e.shimArgs.push("array" + a), a < e.pre.args.length && e.pre.args[a].count > 0) throw new Error("cwise: pre() block may not reference array args");
        if (a < e.post.args.length && e.post.args[a].count > 0) throw new Error("cwise: post() block may not reference array args");
      } else if (t === "scalar") e.scalarArgs.push(a), e.shimArgs.push("scalar" + a);
      else if (t === "index") {
        if (e.indexArgs.push(a), a < e.pre.args.length && e.pre.args[a].count > 0) throw new Error("cwise: pre() block may not reference array index");
        if (a < e.body.args.length && e.body.args[a].lvalue) throw new Error("cwise: body() block may not write to array index");
        if (a < e.post.args.length && e.post.args[a].count > 0) throw new Error("cwise: post() block may not reference array index");
      } else if (t === "shape") {
        if (e.shapeArgs.push(a), a < e.pre.args.length && e.pre.args[a].lvalue) throw new Error("cwise: pre() block may not write to array shape");
        if (a < e.body.args.length && e.body.args[a].lvalue) throw new Error("cwise: body() block may not write to array shape");
        if (a < e.post.args.length && e.post.args[a].lvalue) throw new Error("cwise: post() block may not write to array shape");
      } else if (typeof t == "object" && t.offset) e.argTypes[a] = "offset", e.offsetArgs.push({ array: t.array, offset: t.offset }), e.offsetArgIndex.push(a);
      else throw new Error("cwise: Unknown argument type " + n[a]);
    }
    if (e.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
    if (e.pre.args.length > n.length) throw new Error("cwise: Too many arguments in pre() block");
    if (e.body.args.length > n.length) throw new Error("cwise: Too many arguments in body() block");
    if (e.post.args.length > n.length) throw new Error("cwise: Too many arguments in post() block");
    return e.debug = !!r.printCode || !!r.debug, e.funcName = r.funcName || "cwise", e.blockSize = r.blockSize || 64, vn(e);
  }
  Gr.exports = un;
});
var sr = K((I) => {
  "use strict";
  var B = Qr(), dr = { body: "", args: [], thisVars: [], localVars: [] };
  function gr(r) {
    if (!r) return dr;
    for (var e = 0; e < r.args.length; ++e) {
      var n = r.args[e];
      e === 0 ? r.args[e] = { name: n, lvalue: true, rvalue: !!r.rvalue, count: r.count || 1 } : r.args[e] = { name: n, lvalue: false, rvalue: true, count: 1 };
    }
    return r.thisVars || (r.thisVars = []), r.localVars || (r.localVars = []), r;
  }
  function xn(r) {
    return B({ args: r.args, pre: gr(r.pre), body: gr(r.body), post: gr(r.proc), funcName: r.funcName });
  }
  function O(r) {
    for (var e = [], n = 0; n < r.args.length; ++n) e.push("a" + n);
    var a = new Function("P", ["return function ", r.funcName, "_ndarrayops(", e.join(","), ") {P(", e.join(","), ");return a0}"].join(""));
    return a(xn(r));
  }
  var $r = { add: "+", sub: "-", mul: "*", div: "/", mod: "%", band: "&", bor: "|", bxor: "^", lshift: "<<", rshift: ">>", rrshift: ">>>" };
  (function() {
    for (var r in $r) {
      var e = $r[r];
      I[r] = O({ args: ["array", "array", "array"], body: { args: ["a", "b", "c"], body: "a=b" + e + "c" }, funcName: r }), I[r + "eq"] = O({ args: ["array", "array"], body: { args: ["a", "b"], body: "a" + e + "=b" }, rvalue: true, funcName: r + "eq" }), I[r + "s"] = O({ args: ["array", "array", "scalar"], body: { args: ["a", "b", "s"], body: "a=b" + e + "s" }, funcName: r + "s" }), I[r + "seq"] = O({ args: ["array", "scalar"], body: { args: ["a", "s"], body: "a" + e + "=s" }, rvalue: true, funcName: r + "seq" });
    }
  })();
  var Hr = { not: "!", bnot: "~", neg: "-", recip: "1.0/" };
  (function() {
    for (var r in Hr) {
      var e = Hr[r];
      I[r] = O({ args: ["array", "array"], body: { args: ["a", "b"], body: "a=" + e + "b" }, funcName: r }), I[r + "eq"] = O({ args: ["array"], body: { args: ["a"], body: "a=" + e + "a" }, rvalue: true, count: 2, funcName: r + "eq" });
    }
  })();
  var Wr = { and: "&&", or: "||", eq: "===", neq: "!==", lt: "<", gt: ">", leq: "<=", geq: ">=" };
  (function() {
    for (var r in Wr) {
      var e = Wr[r];
      I[r] = O({ args: ["array", "array", "array"], body: { args: ["a", "b", "c"], body: "a=b" + e + "c" }, funcName: r }), I[r + "s"] = O({ args: ["array", "array", "scalar"], body: { args: ["a", "b", "s"], body: "a=b" + e + "s" }, funcName: r + "s" }), I[r + "eq"] = O({ args: ["array", "array"], body: { args: ["a", "b"], body: "a=a" + e + "b" }, rvalue: true, count: 2, funcName: r + "eq" }), I[r + "seq"] = O({ args: ["array", "scalar"], body: { args: ["a", "s"], body: "a=a" + e + "s" }, rvalue: true, count: 2, funcName: r + "seq" });
    }
  })();
  var Zr = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
  (function() {
    for (var r = 0; r < Zr.length; ++r) {
      var e = Zr[r];
      I[e] = O({ args: ["array", "array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b"], body: "a=this_f(b)", thisVars: ["this_f"] }, funcName: e }), I[e + "eq"] = O({ args: ["array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a"], body: "a=this_f(a)", thisVars: ["this_f"] }, rvalue: true, count: 2, funcName: e + "eq" });
    }
  })();
  var Xr = ["max", "min", "atan2", "pow"];
  (function() {
    for (var r = 0; r < Xr.length; ++r) {
      var e = Xr[r];
      I[e] = O({ args: ["array", "array", "array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b", "c"], body: "a=this_f(b,c)", thisVars: ["this_f"] }, funcName: e }), I[e + "s"] = O({ args: ["array", "array", "scalar"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b", "c"], body: "a=this_f(b,c)", thisVars: ["this_f"] }, funcName: e + "s" }), I[e + "eq"] = O({ args: ["array", "array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b"], body: "a=this_f(a,b)", thisVars: ["this_f"] }, rvalue: true, count: 2, funcName: e + "eq" }), I[e + "seq"] = O({ args: ["array", "scalar"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b"], body: "a=this_f(a,b)", thisVars: ["this_f"] }, rvalue: true, count: 2, funcName: e + "seq" });
    }
  })();
  var Kr = ["atan2", "pow"];
  (function() {
    for (var r = 0; r < Kr.length; ++r) {
      var e = Kr[r];
      I[e + "op"] = O({ args: ["array", "array", "array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b", "c"], body: "a=this_f(c,b)", thisVars: ["this_f"] }, funcName: e + "op" }), I[e + "ops"] = O({ args: ["array", "array", "scalar"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b", "c"], body: "a=this_f(c,b)", thisVars: ["this_f"] }, funcName: e + "ops" }), I[e + "opeq"] = O({ args: ["array", "array"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b"], body: "a=this_f(b,a)", thisVars: ["this_f"] }, rvalue: true, count: 2, funcName: e + "opeq" }), I[e + "opseq"] = O({ args: ["array", "scalar"], pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] }, body: { args: ["a", "b"], body: "a=this_f(b,a)", thisVars: ["this_f"] }, rvalue: true, count: 2, funcName: e + "opseq" });
    }
  })();
  I.any = B({ args: ["array"], pre: dr, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 1 }], body: "if(a){return true}", localVars: [], thisVars: [] }, post: { args: [], localVars: [], thisVars: [], body: "return false" }, funcName: "any" });
  I.all = B({ args: ["array"], pre: dr, body: { args: [{ name: "x", lvalue: false, rvalue: true, count: 1 }], body: "if(!x){return false}", localVars: [], thisVars: [] }, post: { args: [], localVars: [], thisVars: [], body: "return true" }, funcName: "all" });
  I.sum = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 1 }], body: "this_s+=a", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" }, funcName: "sum" });
  I.prod = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=1" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 1 }], body: "this_s*=a", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" }, funcName: "prod" });
  I.norm2squared = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 2 }], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" }, funcName: "norm2squared" });
  I.norm2 = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 2 }], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return Math.sqrt(this_s)" }, funcName: "norm2" });
  I.norminf = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 4 }], body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" }, funcName: "norminf" });
  I.norm1 = B({ args: ["array"], pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" }, body: { args: [{ name: "a", lvalue: false, rvalue: true, count: 3 }], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"] }, post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" }, funcName: "norm1" });
  I.sup = B({ args: ["array"], pre: { body: "this_h=-Infinity", args: [], thisVars: ["this_h"], localVars: [] }, body: { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_", args: [{ name: "_inline_1_arg0_", lvalue: false, rvalue: true, count: 2 }], thisVars: ["this_h"], localVars: [] }, post: { body: "return this_h", args: [], thisVars: ["this_h"], localVars: [] } });
  I.inf = B({ args: ["array"], pre: { body: "this_h=Infinity", args: [], thisVars: ["this_h"], localVars: [] }, body: { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_", args: [{ name: "_inline_1_arg0_", lvalue: false, rvalue: true, count: 2 }], thisVars: ["this_h"], localVars: [] }, post: { body: "return this_h", args: [], thisVars: ["this_h"], localVars: [] } });
  I.argmin = B({ args: ["index", "array", "shape"], pre: { body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}", args: [{ name: "_inline_0_arg0_", lvalue: false, rvalue: false, count: 0 }, { name: "_inline_0_arg1_", lvalue: false, rvalue: false, count: 0 }, { name: "_inline_0_arg2_", lvalue: false, rvalue: true, count: 1 }], thisVars: ["this_i", "this_v"], localVars: [] }, body: { body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}", args: [{ name: "_inline_1_arg0_", lvalue: false, rvalue: true, count: 2 }, { name: "_inline_1_arg1_", lvalue: false, rvalue: true, count: 2 }], thisVars: ["this_i", "this_v"], localVars: ["_inline_1_k"] }, post: { body: "{return this_i}", args: [], thisVars: ["this_i"], localVars: [] } });
  I.argmax = B({ args: ["index", "array", "shape"], pre: { body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}", args: [{ name: "_inline_0_arg0_", lvalue: false, rvalue: false, count: 0 }, { name: "_inline_0_arg1_", lvalue: false, rvalue: false, count: 0 }, { name: "_inline_0_arg2_", lvalue: false, rvalue: true, count: 1 }], thisVars: ["this_i", "this_v"], localVars: [] }, body: { body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}", args: [{ name: "_inline_1_arg0_", lvalue: false, rvalue: true, count: 2 }, { name: "_inline_1_arg1_", lvalue: false, rvalue: true, count: 2 }], thisVars: ["this_i", "this_v"], localVars: ["_inline_1_k"] }, post: { body: "{return this_i}", args: [], thisVars: ["this_i"], localVars: [] } });
  I.random = O({ args: ["array"], pre: { args: [], body: "this_f=Math.random", thisVars: ["this_f"] }, body: { args: ["a"], body: "a=this_f()", thisVars: ["this_f"] }, funcName: "random" });
  I.assign = O({ args: ["array", "array"], body: { args: ["a", "b"], body: "a=b" }, funcName: "assign" });
  I.assigns = O({ args: ["array", "scalar"], body: { args: ["a", "b"], body: "a=b" }, funcName: "assigns" });
  I.equals = B({ args: ["array", "array"], pre: dr, body: { args: [{ name: "x", lvalue: false, rvalue: true, count: 1 }, { name: "y", lvalue: false, rvalue: true, count: 1 }], body: "if(x!==y){return false}", localVars: [], thisVars: [] }, post: { args: [], localVars: [], thisVars: [], body: "return true" }, funcName: "equals" });
});
var G = Q(tr(), 1);
var H = Q(sr(), 1);
var j = Q(tr(), 1);
var A = Q(sr(), 1);
var J = class {
  constructor(e, n, a) {
    this._dataNormalized = e, this._minD = n, this._maxD = a;
  }
  static createFromUnnormalized(e) {
    let n = A.sup(e), a = A.inf(e), t = (0, j.default)(new Float32Array(e.size), e.shape), s = n - a;
    return s < 1e-4 ? A.assigns(t, 0) : (A.subs(t, e, a), A.divs(t, t, s)), new J(t, a, n);
  }
  get data() {
    return this._dataNormalized;
  }
  get minD() {
    return this._minD;
  }
  get maxD() {
    return this._maxD;
  }
  denormalize() {
    let e = (0, j.default)(new Float32Array(this._dataNormalized.size), this._dataNormalized.shape);
    return A.muls(e, this._dataNormalized, this._maxD - this._minD), A.adds(e, e, this._minD), e;
  }
};
var D = class {
  constructor(e, n) {
    this._quantized = e, this._method = n;
  }
  get quantized() {
    return this._quantized;
  }
  static maxIntBits(e) {
    return 2 ** e - 1;
  }
  static fromNormalized(e, n) {
    let a = e.data, t;
    if (n === "norm8x") {
      let s = D.maxIntBits(8), i = (0, j.default)(new Float32Array(a.size), a.shape);
      A.muls(i, a, s), A.roundeq(i), t = (0, j.default)(new Uint8Array(i.data), a.shape);
    } else if (n === "norm565") {
      let s = (0, j.default)(new Float32Array(a.size), a.shape);
      A.assign(s, a), A.mulseq(s.pick(null, 0), D.maxIntBits(5)), A.mulseq(s.pick(null, 1), D.maxIntBits(6)), A.mulseq(s.pick(null, 2), D.maxIntBits(5)), A.roundeq(s);
      let i = (0, j.default)(new Uint16Array(s.data), a.shape), h = (0, j.default)(new Uint16Array(a.shape[0]), [a.shape[0]]), o = (0, j.default)(new Uint16Array(a.shape[0]), [a.shape[0]]);
      A.lshifts(h, i.pick(null, 0), 11), A.lshifts(o, i.pick(null, 1), 5), A.boreq(h, o), A.boreq(h, i.pick(null, 2)), t = h;
    } else {
      let s = (0, j.default)(new Float32Array(a.size), a.shape);
      A.assign(s, a), A.mulseq(s.pick(null, 0), D.maxIntBits(11)), A.mulseq(s.pick(null, 1), D.maxIntBits(10)), A.mulseq(s.pick(null, 2), D.maxIntBits(11)), A.roundeq(s);
      let i = (0, j.default)(new Uint32Array(s.data), a.shape), h = (0, j.default)(new Uint32Array(a.shape[0]), [a.shape[0]]), o = (0, j.default)(new Uint32Array(a.shape[0]), [a.shape[0]]);
      A.lshifts(h, i.pick(null, 0), 21), A.lshifts(o, i.pick(null, 1), 11), A.boreq(h, o), A.boreq(h, i.pick(null, 2)), t = h;
    }
    return new D(t, n);
  }
  dequantize(e, n) {
    let a = this._method, t, s = this._quantized;
    if (a === "norm8x") {
      let i = D.maxIntBits(8);
      t = (0, j.default)(new Float32Array(s.size), s.shape), A.muls(t, s, 1 / i);
    } else if (a === "norm565") {
      let i = (0, j.default)(new Uint8Array(s.shape[0]), [s.shape[0]]), h = (0, j.default)(new Uint8Array(s.shape[0]), [s.shape[0]]), o = (0, j.default)(new Uint8Array(s.shape[0]), [s.shape[0]]);
      A.rrshifts(i, s, 11), A.rrshifts(h, s, 5), A.bandseq(h, D.maxIntBits(6)), A.bands(o, s, D.maxIntBits(5)), t = (0, j.default)(new Float32Array(s.shape[0] * 3), [s.shape[0], 3]), A.muls(t.pick(null, 0), i, 1 / D.maxIntBits(5)), A.muls(t.pick(null, 1), h, 1 / D.maxIntBits(6)), A.muls(t.pick(null, 2), o, 1 / D.maxIntBits(5));
    } else {
      let i = (0, j.default)(new Uint16Array(s.shape[0]), [s.shape[0]]), h = (0, j.default)(new Uint16Array(s.shape[0]), [s.shape[0]]), o = (0, j.default)(new Uint16Array(s.shape[0]), [s.shape[0]]);
      A.rrshifts(i, s, 21), A.rrshifts(h, s, 11), A.bandseq(h, D.maxIntBits(10)), A.bands(o, s, D.maxIntBits(11)), t = (0, j.default)(new Float32Array(s.shape[0] * 3), [s.shape[0], 3]), A.muls(t.pick(null, 0), i, 1 / D.maxIntBits(11)), A.muls(t.pick(null, 1), h, 1 / D.maxIntBits(10)), A.muls(t.pick(null, 2), o, 1 / D.maxIntBits(11));
    }
    return new J(t, e, n);
  }
};
var E = class {
  constructor(e, n, a, t, s, i = false) {
    this._quantized = e, this._minMaxMatrix = n, this._chunkSize = a, this._quantizationMethod = t, this._variableChunkSize = s, this._isDynamicChunks = i;
  }
  get length() {
    return this._quantized.shape[0];
  }
  get nchunks() {
    return this._minMaxMatrix.shape[0];
  }
  get quantized() {
    return this._quantized;
  }
  get method() {
    return this._quantizationMethod;
  }
  get minmaxMatrix() {
    return this._minMaxMatrix;
  }
  _createPrunedMinMax(e) {
    let n = e.length, a = this.minmaxMatrix.shape[0] - n, t = (0, G.default)(new Float32Array(a * 2), [a, 2]), s = 0, i = a, h = 0, o = this.minmaxMatrix.shape[0];
    for (let c = 0; c < e.length; c++) o = e[c], i = o - h + s, i > s && H.assign(t.hi(i, 2).lo(s, 0), this.minmaxMatrix.hi(o, 2).lo(h, 0)), s = i, h = o + 1;
    return s < a && H.assign(t.lo(s, 0), this.minmaxMatrix.lo(h, 0)), t;
  }
  _createPrunedQuantized(e) {
    let n = e.length, a = this.quantized.shape[0] - n, t = this._quantizationMethod, s, i;
    if (t === "norm8x") {
      i = this._quantized.shape[1];
      let f = i ? a * i : a;
      s = (0, G.default)(new Uint8Array(f), i ? [a, i] : [a, 1]);
    } else t === "norm565" ? s = (0, G.default)(new Uint16Array(a), [a]) : s = (0, G.default)(new Uint32Array(a), [a]);
    let h = 0, o = a, c = 0, l = s.shape[0];
    for (let f = 0; f < e.length; f++) l = e[f], o = l - c + h, o > h && (i ? H.assign(s.hi(o, i).lo(h, 0), this._quantized.hi(l, i).lo(c, 0)) : H.assign(s.hi(o).lo(h), this._quantized.hi(l).lo(c))), h = o, c = l + 1;
    return h < a && (i ? H.assign(s.lo(h, 0), this._quantized.lo(c, 0)) : H.assign(s.lo(h), this._quantized.lo(c))), s;
  }
  pruneFeature(e, n, a) {
    let t = this._createPrunedQuantized(e), s = this._createPrunedMinMax(n);
    return new E(t, s, this._chunkSize, this._quantizationMethod, a, true);
  }
  static getRequiredNChunks(e, n) {
    return Math.floor(e / n);
  }
  static fromArray(e, n, a) {
    let t = e.shape[0], s = Math.floor(t / a), i = (0, G.default)(new Float32Array(s * 2), [s, 2], [2, 1]), h;
    n === "norm8x" ? h = (0, G.default)(new Uint8Array(e.size), e.shape) : n === "norm565" ? h = (0, G.default)(new Uint16Array(e.shape[0]), [e.shape[0]]) : h = (0, G.default)(new Uint32Array(e.shape[0]), [e.shape[0]]);
    for (let o = 0; o < s; o++) {
      let c = o * a, l = o + 1 < s ? (o + 1) * a : t, f;
      e.shape.length > 1 ? f = J.createFromUnnormalized(e.hi(l, e.shape[1]).lo(c, 0)) : f = J.createFromUnnormalized(e.hi(l).lo(c)), i.set(o, 0, f.minD), i.set(o, 1, f.maxD), h.shape.length > 1 ? H.assign(h.hi(l, h.shape[1]).lo(c, 0), D.fromNormalized(f, n).quantized) : H.assign(h.hi(l).lo(c), D.fromNormalized(f, n).quantized);
    }
    return new E(h, i, a, n);
  }
  denormDequant() {
    let e = this._minMaxMatrix.shape[0], n = this._quantized, a = n.shape[0], t = this._quantizationMethod, s = this._chunkSize, i;
    if (this._isDynamicChunks) {
      if (!this._variableChunkSize) throw new Error("variable chunk must exists if chunkSize isDynamic");
      i = this._variableChunkSize;
    }
    let h;
    t === "norm8x" ? h = (0, G.default)(new Float32Array(n.size), n.shape) : h = (0, G.default)(new Float32Array(a * 3), [a, 3]);
    let o = 0, c = s;
    for (let l = 0; l < e; l++) {
      let [f, p] = [this._minMaxMatrix.get(l, 0), this._minMaxMatrix.get(l, 1)];
      this._isDynamicChunks && (c = i[l]);
      let v = l + 1 < e ? o + c : a, m;
      n.shape.length > 1 ? m = new D(n.hi(v, n.shape[1]).lo(o, 0), t) : m = new D(n.hi(v).lo(o), t), H.assign(h.hi(v, h.shape[1]).lo(o, 0), m.dequantize(f, p).denormalize()), o = v;
    }
    return h;
  }
  static async fetchArrayBuffer(e) {
    return await (await fetch(e, { mode: "cors" })).arrayBuffer();
  }
};
var Z = Q(tr(), 1);
var k = Q(sr(), 1);
var Jr = "http://127.0.0.1:8000";
var er = Q(tr(), 1);
var C = Q(sr(), 1);
var re = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];
function ee(r) {
  return r < 1e5 ? r < 100 ? r < 10 ? 0 : 1 : r < 1e4 ? r < 1e3 ? 2 : 3 : 4 : r < 1e7 ? r < 1e6 ? 5 : 6 : r < 1e9 ? r < 1e8 ? 7 : 8 : 9;
}
function ne(r, e) {
  if (r === e) return 0;
  if (~~r === r && ~~e === e) {
    if (r === 0 || e === 0) return r < e ? -1 : 1;
    if (r < 0 || e < 0) {
      if (e >= 0) return -1;
      if (r >= 0) return 1;
      r = -r, e = -e;
    }
    let t = ee(r), s = ee(e), i = 0;
    return t < s ? (r *= re[s - t - 1], e /= 10, i = -1) : t > s && (e *= re[t - s - 1], r /= 10, i = 1), r === e ? i : r < e ? -1 : 1;
  }
  let n = String(r), a = String(e);
  return n === a ? 0 : n < a ? -1 : 1;
}
function gn(r) {
  let e = 0;
  for (; r >= 32; ) e |= r & 1, r >>= 1;
  return r + e;
}
function ae(r, e, n, a) {
  let t = e + 1;
  if (t === n) return 1;
  if (a(r[t++], r[e]) < 0) {
    for (; t < n && a(r[t], r[t - 1]) < 0; ) t++;
    Mn(r, e, t);
  } else for (; t < n && a(r[t], r[t - 1]) >= 0; ) t++;
  return t - e;
}
function Mn(r, e, n) {
  for (n--; e < n; ) {
    let a = r[e];
    r[e++] = r[n], r[n--] = a;
  }
}
function te(r, e, n, a, t) {
  for (a === e && a++; a < n; a++) {
    let s = r[a], i = e, h = a;
    for (; i < h; ) {
      let c = i + h >>> 1;
      t(s, r[c]) < 0 ? h = c : i = c + 1;
    }
    let o = a - i;
    switch (o) {
      case 3:
        r[i + 3] = r[i + 2];
      case 2:
        r[i + 2] = r[i + 1];
      case 1:
        r[i + 1] = r[i];
        break;
      default:
        for (; o > 0; ) r[i + o] = r[i + o - 1], o--;
    }
    r[i] = s;
  }
}
function Mr(r, e, n, a, t, s) {
  let i = 0, h = 0, o = 1;
  if (s(r, e[n + t]) > 0) {
    for (h = a - t; o < h && s(r, e[n + t + o]) > 0; ) i = o, o = (o << 1) + 1, o <= 0 && (o = h);
    o > h && (o = h), i += t, o += t;
  } else {
    for (h = t + 1; o < h && s(r, e[n + t - o]) <= 0; ) i = o, o = (o << 1) + 1, o <= 0 && (o = h);
    o > h && (o = h);
    let c = i;
    i = t - o, o = t - c;
  }
  for (i++; i < o; ) {
    let c = i + (o - i >>> 1);
    s(r, e[n + c]) > 0 ? i = c + 1 : o = c;
  }
  return o;
}
function _r(r, e, n, a, t, s) {
  let i = 0, h = 0, o = 1;
  if (s(r, e[n + t]) < 0) {
    for (h = t + 1; o < h && s(r, e[n + t - o]) < 0; ) i = o, o = (o << 1) + 1, o <= 0 && (o = h);
    o > h && (o = h);
    let c = i;
    i = t - o, o = t - c;
  } else {
    for (h = a - t; o < h && s(r, e[n + t + o]) >= 0; ) i = o, o = (o << 1) + 1, o <= 0 && (o = h);
    o > h && (o = h), i += t, o += t;
  }
  for (i++; i < o; ) {
    let c = i + (o - i >>> 1);
    s(r, e[n + c]) < 0 ? o = c : i = c + 1;
  }
  return o;
}
var br = class {
  constructor(e, n) {
    $(this, "array", null);
    $(this, "compare", null);
    $(this, "minGallop", 7);
    $(this, "length", 0);
    $(this, "tmpStorageLength", 256);
    $(this, "stackLength", 0);
    $(this, "runStart", null);
    $(this, "runLength", null);
    $(this, "stackSize", 0);
    this.array = e, this.compare = n, this.length = e.length, this.length < 2 * 256 && (this.tmpStorageLength = this.length >>> 1), this.tmp = new Array(this.tmpStorageLength), this.stackLength = this.length < 120 ? 5 : this.length < 1542 ? 10 : this.length < 119151 ? 19 : 40, this.runStart = new Array(this.stackLength), this.runLength = new Array(this.stackLength);
  }
  pushRun(e, n) {
    this.runStart[this.stackSize] = e, this.runLength[this.stackSize] = n, this.stackSize += 1;
  }
  mergeRuns() {
    for (; this.stackSize > 1; ) {
      let e = this.stackSize - 2;
      if (e >= 1 && this.runLength[e - 1] <= this.runLength[e] + this.runLength[e + 1] || e >= 2 && this.runLength[e - 2] <= this.runLength[e] + this.runLength[e - 1]) this.runLength[e - 1] < this.runLength[e + 1] && e--;
      else if (this.runLength[e] > this.runLength[e + 1]) break;
      this.mergeAt(e);
    }
  }
  forceMergeRuns() {
    for (; this.stackSize > 1; ) {
      let e = this.stackSize - 2;
      e > 0 && this.runLength[e - 1] < this.runLength[e + 1] && e--, this.mergeAt(e);
    }
  }
  mergeAt(e) {
    let n = this.compare, a = this.array, t = this.runStart[e], s = this.runLength[e], i = this.runStart[e + 1], h = this.runLength[e + 1];
    this.runLength[e] = s + h, e === this.stackSize - 3 && (this.runStart[e + 1] = this.runStart[e + 2], this.runLength[e + 1] = this.runLength[e + 2]), this.stackSize--;
    let o = _r(a[i], a, t, s, 0, n);
    t += o, s -= o, s !== 0 && (h = Mr(a[t + s - 1], a, i, h, h - 1, n), h !== 0 && (s <= h ? this.mergeLow(t, s, i, h) : this.mergeHigh(t, s, i, h)));
  }
  mergeLow(e, n, a, t) {
    let s = this.compare, i = this.array, h = this.tmp, o = 0;
    for (o = 0; o < n; o++) h[o] = i[e + o];
    let c = 0, l = a, f = e;
    if (i[f++] = i[l++], --t === 0) {
      for (o = 0; o < n; o++) i[f + o] = h[c + o];
      return;
    }
    if (n === 1) {
      for (o = 0; o < t; o++) i[f + o] = i[l + o];
      i[f + t] = h[c];
      return;
    }
    let p = this.minGallop;
    for (; ; ) {
      let v = 0, m = 0, d = false;
      do
        if (s(i[l], h[c]) < 0) {
          if (i[f++] = i[l++], m++, v = 0, --t === 0) {
            d = true;
            break;
          }
        } else if (i[f++] = h[c++], v++, m = 0, --n === 1) {
          d = true;
          break;
        }
      while ((v | m) < p);
      if (d) break;
      do {
        if (v = _r(i[l], h, c, n, 0, s), v !== 0) {
          for (o = 0; o < v; o++) i[f + o] = h[c + o];
          if (f += v, c += v, n -= v, n <= 1) {
            d = true;
            break;
          }
        }
        if (i[f++] = i[l++], --t === 0) {
          d = true;
          break;
        }
        if (m = Mr(h[c], i, l, t, 0, s), m !== 0) {
          for (o = 0; o < m; o++) i[f + o] = i[l + o];
          if (f += m, l += m, t -= m, t === 0) {
            d = true;
            break;
          }
        }
        if (i[f++] = h[c++], --n === 1) {
          d = true;
          break;
        }
        p--;
      } while (v >= 7 || m >= 7);
      if (d) break;
      p < 0 && (p = 0), p += 2;
    }
    if (this.minGallop = p, p < 1 && (this.minGallop = 1), n === 1) {
      for (o = 0; o < t; o++) i[f + o] = i[l + o];
      i[f + t] = h[c];
    } else {
      if (n === 0) throw new Error("mergeLow preconditions were not respected");
      for (o = 0; o < n; o++) i[f + o] = h[c + o];
    }
  }
  mergeHigh(e, n, a, t) {
    let s = this.compare, i = this.array, h = this.tmp, o = 0;
    for (o = 0; o < t; o++) h[o] = i[a + o];
    let c = e + n - 1, l = t - 1, f = a + t - 1, p = 0, v = 0;
    if (i[f--] = i[c--], --n === 0) {
      for (p = f - (t - 1), o = 0; o < t; o++) i[p + o] = h[o];
      return;
    }
    if (t === 1) {
      for (f -= n, c -= n, v = f + 1, p = c + 1, o = n - 1; o >= 0; o--) i[v + o] = i[p + o];
      i[f] = h[l];
      return;
    }
    let m = this.minGallop;
    for (; ; ) {
      let d = 0, y = 0, u = false;
      do
        if (s(h[l], i[c]) < 0) {
          if (i[f--] = i[c--], d++, y = 0, --n === 0) {
            u = true;
            break;
          }
        } else if (i[f--] = h[l--], y++, d = 0, --t === 1) {
          u = true;
          break;
        }
      while ((d | y) < m);
      if (u) break;
      do {
        if (d = n - _r(h[l], i, e, n, n - 1, s), d !== 0) {
          for (f -= d, c -= d, n -= d, v = f + 1, p = c + 1, o = d - 1; o >= 0; o--) i[v + o] = i[p + o];
          if (n === 0) {
            u = true;
            break;
          }
        }
        if (i[f--] = h[l--], --t === 1) {
          u = true;
          break;
        }
        if (y = t - Mr(i[c], h, 0, t, t - 1, s), y !== 0) {
          for (f -= y, l -= y, t -= y, v = f + 1, p = l + 1, o = 0; o < y; o++) i[v + o] = h[p + o];
          if (t <= 1) {
            u = true;
            break;
          }
        }
        if (i[f--] = i[c--], --n === 0) {
          u = true;
          break;
        }
        m--;
      } while (d >= 7 || y >= 7);
      if (u) break;
      m < 0 && (m = 0), m += 2;
    }
    if (this.minGallop = m, m < 1 && (this.minGallop = 1), t === 1) {
      for (f -= n, c -= n, v = f + 1, p = c + 1, o = n - 1; o >= 0; o--) i[v + o] = i[p + o];
      i[f] = h[l];
    } else {
      if (t === 0) throw new Error("mergeHigh preconditions were not respected");
      for (p = f - (t - 1), o = 0; o < t; o++) i[p + o] = h[o];
    }
  }
};
function se(r, e, n, a) {
  if (!Array.isArray(r)) throw new TypeError("Can only sort arrays");
  e ? typeof e != "function" && (a = n, n = e, e = ne) : e = ne, n || (n = 0), a || (a = r.length);
  let t = a - n;
  if (t < 2) return;
  let s = 0;
  if (t < 32) {
    s = ae(r, n, a, e), te(r, n, a, n + s, e);
    return;
  }
  let i = new br(r, e), h = gn(t);
  do {
    if (s = ae(r, n, a, e), s < h) {
      let o = t;
      o > h && (o = h), te(r, n, n + o, n + s, e), s = o;
    }
    i.pushRun(n, s), i.mergeRuns(), t -= s, n += s;
  } while (t !== 0);
  i.forceMergeRuns();
}
function Ar(r) {
  let e = (0, er.default)(new Int32Array(r.shape[0]), [r.shape[0]]), n = (0, er.default)(new Int32Array(r.shape[0]), [r.shape[0]]);
  return C.bands(e, r, 1023), C.lshifts(n, e, 16), C.bxoreq(e, n), C.bandseq(e, 4278190335), C.lshifts(n, e, 8), C.bxoreq(e, n), C.bandseq(e, 50393103), C.lshifts(n, e, 4), C.bxoreq(e, n), C.bandseq(e, 51130563), C.lshifts(n, e, 2), C.bxoreq(e, n), C.bandseq(e, 153391689), e;
}
function _n(r) {
  let e = Ar(r.pick(null, 0)), n = Ar(r.pick(null, 1));
  C.lshiftseq(n, 1);
  let a = Ar(r.pick(null, 2));
  return C.lshiftseq(a, 2), C.boreq(e, n), C.boreq(e, a), e;
}
function rr(r, e) {
  if (r.shape[0] !== e.shape[0]) throw new Error("wrong length");
  let n = (0, er.default)(new Float32Array(r.size), r.shape, r.stride, r.offset);
  for (let a = 0; a < e.shape[0]; a++) {
    let t = e.get(a);
    if (r.shape.length > 1) for (let s = 0; s < r.shape[1]; s++) n.set(a, s, r.get(t, s));
    else n.set(a, r.get(t));
  }
  return n;
}
function wr(r) {
  let e = C.sup(r), n = C.inf(r), a = 1e3 / Math.min(1e3, e - n), t = (0, er.default)(new Float32Array(r.data), r.shape);
  C.mulseq(t, a);
  let s = (0, er.default)(new Int32Array(t.data), r.shape), i = _n(s), o = Array.from(i.data).map((f, p) => [f, p]);
  se(o, (f, p) => f[0] - p[0]);
  let c = o.map(([f, p]) => p);
  return (0, er.default)(Uint32Array.from(c));
}
var U = class {
  constructor(e, n, a, t, s, i, h, o, c, l) {
    this.propertyDescs = e, this.format = n, this.nsplats = a, this.xyz = t, this.colors = s, this.harmonics = i, this.opacity = h, this.scaling = o, this.rotation = c, this.maxSHDegree = l;
  }
  getPlyBinary() {
    let e = U._generateHeaderString(this.propertyDescs, this.format, this.nsplats), n = new TextEncoder().encode(e), a = Object.keys(this.propertyDescs).length, t = (0, Z.default)(new Float32Array(this.nsplats * a), [this.nsplats, a]);
    if (k.assign(t.pick(null, this.propertyDescs.x.index), this.xyz.pick(null, 0)), k.assign(t.pick(null, this.propertyDescs.y.index), this.xyz.pick(null, 1)), k.assign(t.pick(null, this.propertyDescs.z.index), this.xyz.pick(null, 2)), k.assign(t.pick(null, this.propertyDescs.f_dc_0.index), this.colors.pick(null, 0)), k.assign(t.pick(null, this.propertyDescs.f_dc_1.index), this.colors.pick(null, 1)), k.assign(t.pick(null, this.propertyDescs.f_dc_2.index), this.colors.pick(null, 2)), k.assign(t.pick(null, this.propertyDescs.opacity.index), this.opacity.pick(null, 0)), k.assign(t.pick(null, this.propertyDescs.scale_0.index), this.scaling.pick(null, 0)), k.assign(t.pick(null, this.propertyDescs.scale_1.index), this.scaling.pick(null, 1)), k.assign(t.pick(null, this.propertyDescs.scale_2.index), this.scaling.pick(null, 2)), k.assign(t.pick(null, this.propertyDescs.rot_0.index), this.rotation.pick(null, 0)), k.assign(t.pick(null, this.propertyDescs.rot_1.index), this.rotation.pick(null, 1)), k.assign(t.pick(null, this.propertyDescs.rot_2.index), this.rotation.pick(null, 2)), k.assign(t.pick(null, this.propertyDescs.rot_3.index), this.rotation.pick(null, 3)), this.harmonics && this.harmonics.length > 0) for (let h = 0; h < this.harmonics.length; h++) {
      let o = h * 3;
      k.assign(t.pick(null, this.propertyDescs[`f_rest_${o}`].index), this.harmonics[h].pick(null, 0)), k.assign(t.pick(null, this.propertyDescs[`f_rest_${o + 1}`].index), this.harmonics[h].pick(null, 1)), k.assign(t.pick(null, this.propertyDescs[`f_rest_${o + 2}`].index), this.harmonics[h].pick(null, 2));
    }
    let s = new Uint8Array(t.data.buffer), i = new Uint8Array(s.length + n.length);
    return i.set(n), i.set(s, n.length), i.buffer;
  }
  save(e, n) {
    let a = this.getPlyBinary(), t = new Blob([a], { type: "application/octet-stream" }), s = new File([t], e), i = new FormData();
    i.append("file", s), i.append("filename", e), i.append("basedir", n), fetch(`${Jr}/push_file`, { method: "POST", body: i });
  }
  static async loadFile(e) {
    return await (await fetch(e)).arrayBuffer();
  }
  mortonPositionSplatsSort() {
    let e = wr(this.xyz), n = rr(this.xyz, e), a = rr(this.colors, e), t = rr(this.opacity, e), s = rr(this.scaling, e), i = rr(this.rotation, e), h = [];
    for (let o = 0; o < this.harmonics.length; o++) h.push(rr(this.harmonics[o], e));
    return new U(this.propertyDescs, this.format, this.nsplats, n, a, h, t, s, i, this.maxSHDegree);
  }
  static _generateHeaderString(e, n, a) {
    let t = `ply
format ${n.format} ${n.version}
element vertex ${a}`, s = Object.keys(e).length, i = Array(s);
    for (let h in e) {
      let o = e[h];
      i[o.index] = { name: h, dtype: o.dtype };
    }
    for (let h = 0; h < i.length; h++) t = `${t}
property ${i[h].dtype} ${i[h].name}`;
    return `${t}
end_header
`;
  }
  static fromArrayBuffer(e, n = 3) {
    let { splatCount: a, vertexData: t, propertiesDesc: s, format: i } = U.decodeHeader(e), h = t.buffer.slice(t.byteOffset), o = Object.keys(s).length, c = (0, Z.default)(new Float32Array(h), [a, o]), l = 0, f = {}, p = { double: 8, int: 4, uint: 4, float: 4, short: 2, ushort: 2, uchar: 1, char: 1 };
    for (let _ in s) if (s.hasOwnProperty(_)) {
      let g = s[_].dtype;
      f[_] = l, l += p[g];
    }
    let v = (0, Z.default)(new Float32Array(a * 3), [a, 3]);
    k.assign(v.pick(null, 0), c.pick(null, f.x / 4)), k.assign(v.pick(null, 1), c.pick(null, f.y / 4)), k.assign(v.pick(null, 2), c.pick(null, f.z / 4));
    let m = (0, Z.default)(new Float32Array(a * 3), [a, 3]);
    k.assign(m.pick(null, 0), c.pick(null, f.scale_0 / 4)), k.assign(m.pick(null, 1), c.pick(null, f.scale_1 / 4)), k.assign(m.pick(null, 2), c.pick(null, f.scale_2 / 4));
    let d = (0, Z.default)(new Float32Array(a * 3), [a, 3]);
    k.assign(d.pick(null, 0), c.pick(null, f.f_dc_0 / 4)), k.assign(d.pick(null, 1), c.pick(null, f.f_dc_1 / 4)), k.assign(d.pick(null, 2), c.pick(null, f.f_dc_2 / 4));
    let y = (0, Z.default)(new Float32Array(a * 4), [a, 4]);
    k.assign(y.pick(null, 0), c.pick(null, f.rot_1 / 4)), k.assign(y.pick(null, 1), c.pick(null, f.rot_2 / 4)), k.assign(y.pick(null, 2), c.pick(null, f.rot_3 / 4)), k.assign(y.pick(null, 3), c.pick(null, f.rot_0 / 4));
    for (let _ = 0; _ < a; _++) {
      let g = y.pick(_, null), N = Math.sqrt(g.get(0) ** 2 + g.get(1) ** 2 + g.get(2) ** 2 + g.get(3) ** 2);
      k.divseq(g, N);
    }
    let u = (0, Z.default)(new Float32Array(a * 1), [a, 1]);
    k.assign(u.pick(null, 0), c.pick(null, f.opacity / 4)), k.negeq(u), k.expeq(u), k.addseq(u, 1), k.recipeq(u), k.mulseq(u, 255);
    let M = (Math.min(Math.max(n, 0), 3) + 1) ** 2 - 1, b = [];
    for (let _ = 0; _ < M; _++) {
      let g = (0, Z.default)(new Float32Array(a * 3), [a, 3]), N = _ * 3;
      k.assign(g.pick(null, 0), c.pick(null, f[`f_rest_${N}`] / 4)), k.assign(g.pick(null, 1), c.pick(null, f[`f_rest_${N + 1}`] / 4)), k.assign(g.pick(null, 2), c.pick(null, f[`f_rest_${N + 2}`] / 4)), b.push(g);
    }
    return new U(s, i, a, v, d, b, u, m, y, n);
  }
  static async fromPLYFile(e, n = 3) {
    let a = await U.loadFile(e);
    return U.fromArrayBuffer(a, n);
  }
  static decodeHeader(e) {
    let n = new TextDecoder(), a = 0, t = "", s = 100;
    for (; ; ) {
      if (a + s >= e.byteLength) throw new Error("End of file reached while searching for end of header");
      let m = new Uint8Array(e, a, s);
      t += n.decode(m), a += s;
      let d = a - s * 2, y = new Uint8Array(e, Math.max(0, d), d > 0 ? s * 2 : s);
      if (n.decode(y).includes("end_header")) break;
    }
    let i = t.split(`
`), h = 0, o = {}, c = {}, l = 0, f;
    for (let m = 0; m < i.length; m++) {
      let d = i[m].trim();
      if (d.startsWith("element vertex")) {
        let y = d.match(/\d+/);
        y && (h = parseInt(y[0]));
      } else if (d.startsWith("property")) {
        let y = d.match(/(\w+)\s+(\w+)\s+(\w+)/);
        if (y) {
          let u = y[2], x = y[3];
          o[x] = l, c[x] = { dtype: u, index: l }, l++;
        }
      } else if (d.startsWith("format")) {
        let y = d.match(/(\w+)\s+(\w+)\s+(\d+\.?\d*)/);
        y && (f = { format: y[2], version: y[3] });
      } else if (d === "end_header") break;
    }
    let p = t.indexOf("end_header") + 10 + 1, v = new DataView(e, p);
    return { splatCount: h, vertexData: v, headerOffset: a, propertiesDesc: c, format: f };
  }
};
var X = class {
  constructor(e, n, a, t, s, i, h, o) {
    this.config = e, this.xyz = n, this.scaling = a, this.color = t, this.opacity = s, this.harmonics = h, this.quaternion = i, this.variableChunkSize = o;
  }
  get isDynamicChunks() {
    return this.variableChunkSize && this.variableChunkSize.length > 0;
  }
  get nchunks() {
    return this.xyz.nchunks;
  }
  get nsplats() {
    return this.xyz.length;
  }
  get chunkSize() {
    return this.config.chunkSize;
  }
  static compressFromGaussianData(e, n) {
    let a = E.fromArray(e.xyz, n.xyz, n.chunkSize), t = E.fromArray(e.scaling, n.scaling, n.chunkSize), s = E.fromArray(e.colors, n.color, n.chunkSize), i = E.fromArray(e.opacity, n.opacity, n.chunkSize), h = E.fromArray(e.rotation, n.quaternion, n.chunkSize), o = e.harmonics, c = [];
    if (n.harmonics) for (let l = 0; l < o.length; l++) {
      let f = E.fromArray(o[l], n.harmonics, n.chunkSize);
      c.push(f);
    }
    return new X(n, a, t, s, i, h, c);
  }
  _countIndexesInChunks(e) {
    let n = [], a = this.nchunks, t = this.chunkSize, s = this.nsplats, i = E.getRequiredNChunks(s, t);
    if (a === i) for (let h = 0; h < e.length; h++) {
      let o = e[h], c = Math.floor(o / this.chunkSize);
      c in n ? n[c].push(o) : n[c] = [o];
    }
    else {
      let h = this.variableChunkSize, o = {}, c = 0;
      for (let l = 0; l < a; l++) o[l] = c, c += h[l];
      for (let l = 0; l < e.length; l++) {
        let f = e[l], p = Math.min(Math.floor(f / t), a - 1);
        for (; f >= o[p] + h[p]; ) p++;
        p in n ? n[p].push(f) : n[p] = [f];
      }
    }
    return n;
  }
  pruneSplats(e) {
    let n = this._countIndexesInChunks(e), a, t = [];
    return n.length > 0 && (a = this.variableChunkSize ? [...this.variableChunkSize] : Array(this.nchunks).fill(this.chunkSize), n.forEach((s, i) => {
      a[i] -= s.length, a[i] <= 0 && t.push(i);
    }), a = a.filter((s) => s > 0)), new X(this.config, this.xyz.pruneFeature(e, t, a), this.scaling.pruneFeature(e, t, a), this.color.pruneFeature(e, t, a), this.opacity.pruneFeature(e, t, a), this.quaternion.pruneFeature(e, t, a), this.harmonics ? this.harmonics.map((s) => s.pruneFeature(e, t, this.variableChunkSize)) : void 0, a);
  }
  static async loadConfig(e) {
    return await (await fetch(e, { method: "GET", mode: "cors", headers: { Accept: "application/json" } })).json();
  }
  toGaussians() {
    let e = { format: "binary_little_endian", version: "1.0" }, n = {}, a = 0;
    if (n.x = { dtype: "float", index: a }, a++, n.y = { dtype: "float", index: a }, a++, n.z = { dtype: "float", index: a }, a++, n.f_dc_0 = { dtype: "float", index: a }, a++, n.f_dc_1 = { dtype: "float", index: a }, a++, n.f_dc_2 = { dtype: "float", index: a }, a++, this.harmonics && this.harmonics.length > 0) for (let i = 0; i < this.harmonics.length; i++) n[`f_rest_${i}`] = { dtype: "float", index: a }, a++, n[`f_rest_${i + 1}`] = { dtype: "float", index: a }, a++, n[`f_rest_${i + 2}`] = { dtype: "float", index: a }, a++;
    n.opacity = { dtype: "float", index: a }, a++, n.scale_0 = { dtype: "float", index: a }, a++, n.scale_1 = { dtype: "float", index: a }, a++, n.scale_2 = { dtype: "float", index: a }, a++, n.rot_0 = { dtype: "float", index: a }, a++, n.rot_1 = { dtype: "float", index: a }, a++, n.rot_2 = { dtype: "float", index: a }, a++, n.rot_3 = { dtype: "float", index: a }, a++;
    let t = this.harmonics?.map((i) => i.denormDequant());
    return new U(n, e, this.xyz.length, this.xyz.denormDequant(), this.color.denormDequant(), t || [], this.opacity.denormDequant(), this.scaling.denormDequant(), this.quaternion.denormDequant(), 3);
  }
};
var nr = Q(tr(), 1);
var R = Q(sr(), 1);
var S = 1e-6;
var P = typeof Float32Array < "u" ? Float32Array : Array;
var ir = Math.random;
var Wt = Math.PI / 180;
Math.hypot || (Math.hypot = function() {
  for (var r = 0, e = arguments.length; e--; ) r += arguments[e] * arguments[e];
  return Math.sqrt(r);
});
var W = {};
ur(W, { add: () => Yn, adjoint: () => Sn, clone: () => An, copy: () => wn, create: () => kr, determinant: () => In, equals: () => Hn, exactEquals: () => $n, frob: () => Un, fromMat2d: () => Vn, fromMat4: () => bn, fromQuat: () => On, fromRotation: () => Tn, fromScaling: () => Pn, fromTranslation: () => En, fromValues: () => kn, identity: () => qn, invert: () => Fn, mul: () => Wn, multiply: () => ie, multiplyScalar: () => Gn, multiplyScalarAndAdd: () => Qn, normalFromMat4: () => jn, projection: () => Rn, rotate: () => Ln, scale: () => Dn, set: () => zn, str: () => Bn, sub: () => Zn, subtract: () => oe, translate: () => Cn, transpose: () => Nn });
function kr() {
  var r = new P(9);
  return P != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[0] = 1, r[4] = 1, r[8] = 1, r;
}
function bn(r, e) {
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[4], r[4] = e[5], r[5] = e[6], r[6] = e[8], r[7] = e[9], r[8] = e[10], r;
}
function An(r) {
  var e = new P(9);
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], e;
}
function wn(r, e) {
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r;
}
function kn(r, e, n, a, t, s, i, h, o) {
  var c = new P(9);
  return c[0] = r, c[1] = e, c[2] = n, c[3] = a, c[4] = t, c[5] = s, c[6] = i, c[7] = h, c[8] = o, c;
}
function zn(r, e, n, a, t, s, i, h, o, c) {
  return r[0] = e, r[1] = n, r[2] = a, r[3] = t, r[4] = s, r[5] = i, r[6] = h, r[7] = o, r[8] = c, r;
}
function qn(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function Nn(r, e) {
  if (r === e) {
    var n = e[1], a = e[2], t = e[5];
    r[1] = e[3], r[2] = e[6], r[3] = n, r[5] = e[7], r[6] = a, r[7] = t;
  } else r[0] = e[0], r[1] = e[3], r[2] = e[6], r[3] = e[1], r[4] = e[4], r[5] = e[7], r[6] = e[2], r[7] = e[5], r[8] = e[8];
  return r;
}
function Fn(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = e[4], h = e[5], o = e[6], c = e[7], l = e[8], f = l * i - h * c, p = -l * s + h * o, v = c * s - i * o, m = n * f + a * p + t * v;
  return m ? (m = 1 / m, r[0] = f * m, r[1] = (-l * a + t * c) * m, r[2] = (h * a - t * i) * m, r[3] = p * m, r[4] = (l * n - t * o) * m, r[5] = (-h * n + t * s) * m, r[6] = v * m, r[7] = (-c * n + a * o) * m, r[8] = (i * n - a * s) * m, r) : null;
}
function Sn(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = e[4], h = e[5], o = e[6], c = e[7], l = e[8];
  return r[0] = i * l - h * c, r[1] = t * c - a * l, r[2] = a * h - t * i, r[3] = h * o - s * l, r[4] = n * l - t * o, r[5] = t * s - n * h, r[6] = s * c - i * o, r[7] = a * o - n * c, r[8] = n * i - a * s, r;
}
function In(r) {
  var e = r[0], n = r[1], a = r[2], t = r[3], s = r[4], i = r[5], h = r[6], o = r[7], c = r[8];
  return e * (c * s - i * o) + n * (-c * t + i * h) + a * (o * t - s * h);
}
function ie(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = n[0], v = n[1], m = n[2], d = n[3], y = n[4], u = n[5], x = n[6], M = n[7], b = n[8];
  return r[0] = p * a + v * i + m * c, r[1] = p * t + v * h + m * l, r[2] = p * s + v * o + m * f, r[3] = d * a + y * i + u * c, r[4] = d * t + y * h + u * l, r[5] = d * s + y * o + u * f, r[6] = x * a + M * i + b * c, r[7] = x * t + M * h + b * l, r[8] = x * s + M * o + b * f, r;
}
function Cn(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = n[0], v = n[1];
  return r[0] = a, r[1] = t, r[2] = s, r[3] = i, r[4] = h, r[5] = o, r[6] = p * a + v * i + c, r[7] = p * t + v * h + l, r[8] = p * s + v * o + f, r;
}
function Ln(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = Math.sin(n), v = Math.cos(n);
  return r[0] = v * a + p * i, r[1] = v * t + p * h, r[2] = v * s + p * o, r[3] = v * i - p * a, r[4] = v * h - p * t, r[5] = v * o - p * s, r[6] = c, r[7] = l, r[8] = f, r;
}
function Dn(r, e, n) {
  var a = n[0], t = n[1];
  return r[0] = a * e[0], r[1] = a * e[1], r[2] = a * e[2], r[3] = t * e[3], r[4] = t * e[4], r[5] = t * e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r;
}
function En(r, e) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = e[0], r[7] = e[1], r[8] = 1, r;
}
function Tn(r, e) {
  var n = Math.sin(e), a = Math.cos(e);
  return r[0] = a, r[1] = n, r[2] = 0, r[3] = -n, r[4] = a, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function Pn(r, e) {
  return r[0] = e[0], r[1] = 0, r[2] = 0, r[3] = 0, r[4] = e[1], r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function Vn(r, e) {
  return r[0] = e[0], r[1] = e[1], r[2] = 0, r[3] = e[2], r[4] = e[3], r[5] = 0, r[6] = e[4], r[7] = e[5], r[8] = 1, r;
}
function On(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = n + n, h = a + a, o = t + t, c = n * i, l = a * i, f = a * h, p = t * i, v = t * h, m = t * o, d = s * i, y = s * h, u = s * o;
  return r[0] = 1 - f - m, r[3] = l - u, r[6] = p + y, r[1] = l + u, r[4] = 1 - c - m, r[7] = v - d, r[2] = p - y, r[5] = v + d, r[8] = 1 - c - f, r;
}
function jn(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = e[4], h = e[5], o = e[6], c = e[7], l = e[8], f = e[9], p = e[10], v = e[11], m = e[12], d = e[13], y = e[14], u = e[15], x = n * h - a * i, M = n * o - t * i, b = n * c - s * i, _ = a * o - t * h, g = a * c - s * h, N = t * c - s * o, q = l * d - f * m, w = l * y - p * m, F = l * u - v * m, L = f * y - p * d, T = f * u - v * d, V = p * u - v * y, z = x * V - M * T + b * L + _ * F - g * w + N * q;
  return z ? (z = 1 / z, r[0] = (h * V - o * T + c * L) * z, r[1] = (o * F - i * V - c * w) * z, r[2] = (i * T - h * F + c * q) * z, r[3] = (t * T - a * V - s * L) * z, r[4] = (n * V - t * F + s * w) * z, r[5] = (a * F - n * T - s * q) * z, r[6] = (d * N - y * g + u * _) * z, r[7] = (y * b - m * N - u * M) * z, r[8] = (m * g - d * b + u * x) * z, r) : null;
}
function Rn(r, e, n) {
  return r[0] = 2 / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = -2 / n, r[5] = 0, r[6] = -1, r[7] = 1, r[8] = 1, r;
}
function Bn(r) {
  return "mat3(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ", " + r[4] + ", " + r[5] + ", " + r[6] + ", " + r[7] + ", " + r[8] + ")";
}
function Un(r) {
  return Math.hypot(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
}
function Yn(r, e, n) {
  return r[0] = e[0] + n[0], r[1] = e[1] + n[1], r[2] = e[2] + n[2], r[3] = e[3] + n[3], r[4] = e[4] + n[4], r[5] = e[5] + n[5], r[6] = e[6] + n[6], r[7] = e[7] + n[7], r[8] = e[8] + n[8], r;
}
function oe(r, e, n) {
  return r[0] = e[0] - n[0], r[1] = e[1] - n[1], r[2] = e[2] - n[2], r[3] = e[3] - n[3], r[4] = e[4] - n[4], r[5] = e[5] - n[5], r[6] = e[6] - n[6], r[7] = e[7] - n[7], r[8] = e[8] - n[8], r;
}
function Gn(r, e, n) {
  return r[0] = e[0] * n, r[1] = e[1] * n, r[2] = e[2] * n, r[3] = e[3] * n, r[4] = e[4] * n, r[5] = e[5] * n, r[6] = e[6] * n, r[7] = e[7] * n, r[8] = e[8] * n, r;
}
function Qn(r, e, n, a) {
  return r[0] = e[0] + n[0] * a, r[1] = e[1] + n[1] * a, r[2] = e[2] + n[2] * a, r[3] = e[3] + n[3] * a, r[4] = e[4] + n[4] * a, r[5] = e[5] + n[5] * a, r[6] = e[6] + n[6] * a, r[7] = e[7] + n[7] * a, r[8] = e[8] + n[8] * a, r;
}
function $n(r, e) {
  return r[0] === e[0] && r[1] === e[1] && r[2] === e[2] && r[3] === e[3] && r[4] === e[4] && r[5] === e[5] && r[6] === e[6] && r[7] === e[7] && r[8] === e[8];
}
function Hn(r, e) {
  var n = r[0], a = r[1], t = r[2], s = r[3], i = r[4], h = r[5], o = r[6], c = r[7], l = r[8], f = e[0], p = e[1], v = e[2], m = e[3], d = e[4], y = e[5], u = e[6], x = e[7], M = e[8];
  return Math.abs(n - f) <= S * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(a - p) <= S * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(t - v) <= S * Math.max(1, Math.abs(t), Math.abs(v)) && Math.abs(s - m) <= S * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(i - d) <= S * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(h - y) <= S * Math.max(1, Math.abs(h), Math.abs(y)) && Math.abs(o - u) <= S * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(c - x) <= S * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(l - M) <= S * Math.max(1, Math.abs(l), Math.abs(M));
}
var Wn = ie;
var Zn = oe;
var lr = {};
ur(lr, { add: () => Da, adjoint: () => ta, clone: () => Kn, copy: () => Jn, create: () => Xn, determinant: () => sa, equals: () => Va, exactEquals: () => Pa, frob: () => La, fromQuat: () => Aa, fromQuat2: () => xa, fromRotation: () => da, fromRotationTranslation: () => le, fromRotationTranslationScale: () => _a, fromRotationTranslationScaleOrigin: () => ba, fromScaling: () => ya, fromTranslation: () => fa, fromValues: () => ra, fromXRotation: () => va, fromYRotation: () => ma, fromZRotation: () => ua, frustum: () => wa, getRotation: () => Ma, getScaling: () => pe, getTranslation: () => ga, identity: () => he, invert: () => aa, lookAt: () => Sa, mul: () => Oa, multiply: () => ce, multiplyScalar: () => Ea, multiplyScalarAndAdd: () => Ta, ortho: () => Na, orthoNO: () => ye, orthoZO: () => Fa, perspective: () => ka, perspectiveFromFieldOfView: () => qa, perspectiveNO: () => fe, perspectiveZO: () => za, rotate: () => ha, rotateX: () => ca, rotateY: () => la, rotateZ: () => pa, scale: () => oa, set: () => ea, str: () => Ca, sub: () => ja, subtract: () => de, targetTo: () => Ia, translate: () => ia, transpose: () => na });
function Xn() {
  var r = new P(16);
  return P != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0), r[0] = 1, r[5] = 1, r[10] = 1, r[15] = 1, r;
}
function Kn(r) {
  var e = new P(16);
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15], e;
}
function Jn(r, e) {
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r;
}
function ra(r, e, n, a, t, s, i, h, o, c, l, f, p, v, m, d) {
  var y = new P(16);
  return y[0] = r, y[1] = e, y[2] = n, y[3] = a, y[4] = t, y[5] = s, y[6] = i, y[7] = h, y[8] = o, y[9] = c, y[10] = l, y[11] = f, y[12] = p, y[13] = v, y[14] = m, y[15] = d, y;
}
function ea(r, e, n, a, t, s, i, h, o, c, l, f, p, v, m, d, y) {
  return r[0] = e, r[1] = n, r[2] = a, r[3] = t, r[4] = s, r[5] = i, r[6] = h, r[7] = o, r[8] = c, r[9] = l, r[10] = f, r[11] = p, r[12] = v, r[13] = m, r[14] = d, r[15] = y, r;
}
function he(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function na(r, e) {
  if (r === e) {
    var n = e[1], a = e[2], t = e[3], s = e[6], i = e[7], h = e[11];
    r[1] = e[4], r[2] = e[8], r[3] = e[12], r[4] = n, r[6] = e[9], r[7] = e[13], r[8] = a, r[9] = s, r[11] = e[14], r[12] = t, r[13] = i, r[14] = h;
  } else r[0] = e[0], r[1] = e[4], r[2] = e[8], r[3] = e[12], r[4] = e[1], r[5] = e[5], r[6] = e[9], r[7] = e[13], r[8] = e[2], r[9] = e[6], r[10] = e[10], r[11] = e[14], r[12] = e[3], r[13] = e[7], r[14] = e[11], r[15] = e[15];
  return r;
}
function aa(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = e[4], h = e[5], o = e[6], c = e[7], l = e[8], f = e[9], p = e[10], v = e[11], m = e[12], d = e[13], y = e[14], u = e[15], x = n * h - a * i, M = n * o - t * i, b = n * c - s * i, _ = a * o - t * h, g = a * c - s * h, N = t * c - s * o, q = l * d - f * m, w = l * y - p * m, F = l * u - v * m, L = f * y - p * d, T = f * u - v * d, V = p * u - v * y, z = x * V - M * T + b * L + _ * F - g * w + N * q;
  return z ? (z = 1 / z, r[0] = (h * V - o * T + c * L) * z, r[1] = (t * T - a * V - s * L) * z, r[2] = (d * N - y * g + u * _) * z, r[3] = (p * g - f * N - v * _) * z, r[4] = (o * F - i * V - c * w) * z, r[5] = (n * V - t * F + s * w) * z, r[6] = (y * b - m * N - u * M) * z, r[7] = (l * N - p * b + v * M) * z, r[8] = (i * T - h * F + c * q) * z, r[9] = (a * F - n * T - s * q) * z, r[10] = (m * g - d * b + u * x) * z, r[11] = (f * b - l * g - v * x) * z, r[12] = (h * w - i * L - o * q) * z, r[13] = (n * L - a * w + t * q) * z, r[14] = (d * M - m * _ - y * x) * z, r[15] = (l * _ - f * M + p * x) * z, r) : null;
}
function ta(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = e[4], h = e[5], o = e[6], c = e[7], l = e[8], f = e[9], p = e[10], v = e[11], m = e[12], d = e[13], y = e[14], u = e[15];
  return r[0] = h * (p * u - v * y) - f * (o * u - c * y) + d * (o * v - c * p), r[1] = -(a * (p * u - v * y) - f * (t * u - s * y) + d * (t * v - s * p)), r[2] = a * (o * u - c * y) - h * (t * u - s * y) + d * (t * c - s * o), r[3] = -(a * (o * v - c * p) - h * (t * v - s * p) + f * (t * c - s * o)), r[4] = -(i * (p * u - v * y) - l * (o * u - c * y) + m * (o * v - c * p)), r[5] = n * (p * u - v * y) - l * (t * u - s * y) + m * (t * v - s * p), r[6] = -(n * (o * u - c * y) - i * (t * u - s * y) + m * (t * c - s * o)), r[7] = n * (o * v - c * p) - i * (t * v - s * p) + l * (t * c - s * o), r[8] = i * (f * u - v * d) - l * (h * u - c * d) + m * (h * v - c * f), r[9] = -(n * (f * u - v * d) - l * (a * u - s * d) + m * (a * v - s * f)), r[10] = n * (h * u - c * d) - i * (a * u - s * d) + m * (a * c - s * h), r[11] = -(n * (h * v - c * f) - i * (a * v - s * f) + l * (a * c - s * h)), r[12] = -(i * (f * y - p * d) - l * (h * y - o * d) + m * (h * p - o * f)), r[13] = n * (f * y - p * d) - l * (a * y - t * d) + m * (a * p - t * f), r[14] = -(n * (h * y - o * d) - i * (a * y - t * d) + m * (a * o - t * h)), r[15] = n * (h * p - o * f) - i * (a * p - t * f) + l * (a * o - t * h), r;
}
function sa(r) {
  var e = r[0], n = r[1], a = r[2], t = r[3], s = r[4], i = r[5], h = r[6], o = r[7], c = r[8], l = r[9], f = r[10], p = r[11], v = r[12], m = r[13], d = r[14], y = r[15], u = e * i - n * s, x = e * h - a * s, M = e * o - t * s, b = n * h - a * i, _ = n * o - t * i, g = a * o - t * h, N = c * m - l * v, q = c * d - f * v, w = c * y - p * v, F = l * d - f * m, L = l * y - p * m, T = f * y - p * d;
  return u * T - x * L + M * F + b * w - _ * q + g * N;
}
function ce(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = e[9], v = e[10], m = e[11], d = e[12], y = e[13], u = e[14], x = e[15], M = n[0], b = n[1], _ = n[2], g = n[3];
  return r[0] = M * a + b * h + _ * f + g * d, r[1] = M * t + b * o + _ * p + g * y, r[2] = M * s + b * c + _ * v + g * u, r[3] = M * i + b * l + _ * m + g * x, M = n[4], b = n[5], _ = n[6], g = n[7], r[4] = M * a + b * h + _ * f + g * d, r[5] = M * t + b * o + _ * p + g * y, r[6] = M * s + b * c + _ * v + g * u, r[7] = M * i + b * l + _ * m + g * x, M = n[8], b = n[9], _ = n[10], g = n[11], r[8] = M * a + b * h + _ * f + g * d, r[9] = M * t + b * o + _ * p + g * y, r[10] = M * s + b * c + _ * v + g * u, r[11] = M * i + b * l + _ * m + g * x, M = n[12], b = n[13], _ = n[14], g = n[15], r[12] = M * a + b * h + _ * f + g * d, r[13] = M * t + b * o + _ * p + g * y, r[14] = M * s + b * c + _ * v + g * u, r[15] = M * i + b * l + _ * m + g * x, r;
}
function ia(r, e, n) {
  var a = n[0], t = n[1], s = n[2], i, h, o, c, l, f, p, v, m, d, y, u;
  return e === r ? (r[12] = e[0] * a + e[4] * t + e[8] * s + e[12], r[13] = e[1] * a + e[5] * t + e[9] * s + e[13], r[14] = e[2] * a + e[6] * t + e[10] * s + e[14], r[15] = e[3] * a + e[7] * t + e[11] * s + e[15]) : (i = e[0], h = e[1], o = e[2], c = e[3], l = e[4], f = e[5], p = e[6], v = e[7], m = e[8], d = e[9], y = e[10], u = e[11], r[0] = i, r[1] = h, r[2] = o, r[3] = c, r[4] = l, r[5] = f, r[6] = p, r[7] = v, r[8] = m, r[9] = d, r[10] = y, r[11] = u, r[12] = i * a + l * t + m * s + e[12], r[13] = h * a + f * t + d * s + e[13], r[14] = o * a + p * t + y * s + e[14], r[15] = c * a + v * t + u * s + e[15]), r;
}
function oa(r, e, n) {
  var a = n[0], t = n[1], s = n[2];
  return r[0] = e[0] * a, r[1] = e[1] * a, r[2] = e[2] * a, r[3] = e[3] * a, r[4] = e[4] * t, r[5] = e[5] * t, r[6] = e[6] * t, r[7] = e[7] * t, r[8] = e[8] * s, r[9] = e[9] * s, r[10] = e[10] * s, r[11] = e[11] * s, r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r;
}
function ha(r, e, n, a) {
  var t = a[0], s = a[1], i = a[2], h = Math.hypot(t, s, i), o, c, l, f, p, v, m, d, y, u, x, M, b, _, g, N, q, w, F, L, T, V, z, Y;
  return h < S ? null : (h = 1 / h, t *= h, s *= h, i *= h, o = Math.sin(n), c = Math.cos(n), l = 1 - c, f = e[0], p = e[1], v = e[2], m = e[3], d = e[4], y = e[5], u = e[6], x = e[7], M = e[8], b = e[9], _ = e[10], g = e[11], N = t * t * l + c, q = s * t * l + i * o, w = i * t * l - s * o, F = t * s * l - i * o, L = s * s * l + c, T = i * s * l + t * o, V = t * i * l + s * o, z = s * i * l - t * o, Y = i * i * l + c, r[0] = f * N + d * q + M * w, r[1] = p * N + y * q + b * w, r[2] = v * N + u * q + _ * w, r[3] = m * N + x * q + g * w, r[4] = f * F + d * L + M * T, r[5] = p * F + y * L + b * T, r[6] = v * F + u * L + _ * T, r[7] = m * F + x * L + g * T, r[8] = f * V + d * z + M * Y, r[9] = p * V + y * z + b * Y, r[10] = v * V + u * z + _ * Y, r[11] = m * V + x * z + g * Y, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r);
}
function ca(r, e, n) {
  var a = Math.sin(n), t = Math.cos(n), s = e[4], i = e[5], h = e[6], o = e[7], c = e[8], l = e[9], f = e[10], p = e[11];
  return e !== r && (r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r[4] = s * t + c * a, r[5] = i * t + l * a, r[6] = h * t + f * a, r[7] = o * t + p * a, r[8] = c * t - s * a, r[9] = l * t - i * a, r[10] = f * t - h * a, r[11] = p * t - o * a, r;
}
function la(r, e, n) {
  var a = Math.sin(n), t = Math.cos(n), s = e[0], i = e[1], h = e[2], o = e[3], c = e[8], l = e[9], f = e[10], p = e[11];
  return e !== r && (r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r[0] = s * t - c * a, r[1] = i * t - l * a, r[2] = h * t - f * a, r[3] = o * t - p * a, r[8] = s * a + c * t, r[9] = i * a + l * t, r[10] = h * a + f * t, r[11] = o * a + p * t, r;
}
function pa(r, e, n) {
  var a = Math.sin(n), t = Math.cos(n), s = e[0], i = e[1], h = e[2], o = e[3], c = e[4], l = e[5], f = e[6], p = e[7];
  return e !== r && (r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r[0] = s * t + c * a, r[1] = i * t + l * a, r[2] = h * t + f * a, r[3] = o * t + p * a, r[4] = c * t - s * a, r[5] = l * t - i * a, r[6] = f * t - h * a, r[7] = p * t - o * a, r;
}
function fa(r, e) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function ya(r, e) {
  return r[0] = e[0], r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = e[1], r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = e[2], r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function da(r, e, n) {
  var a = n[0], t = n[1], s = n[2], i = Math.hypot(a, t, s), h, o, c;
  return i < S ? null : (i = 1 / i, a *= i, t *= i, s *= i, h = Math.sin(e), o = Math.cos(e), c = 1 - o, r[0] = a * a * c + o, r[1] = t * a * c + s * h, r[2] = s * a * c - t * h, r[3] = 0, r[4] = a * t * c - s * h, r[5] = t * t * c + o, r[6] = s * t * c + a * h, r[7] = 0, r[8] = a * s * c + t * h, r[9] = t * s * c - a * h, r[10] = s * s * c + o, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r);
}
function va(r, e) {
  var n = Math.sin(e), a = Math.cos(e);
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = a, r[6] = n, r[7] = 0, r[8] = 0, r[9] = -n, r[10] = a, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function ma(r, e) {
  var n = Math.sin(e), a = Math.cos(e);
  return r[0] = a, r[1] = 0, r[2] = -n, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = n, r[9] = 0, r[10] = a, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function ua(r, e) {
  var n = Math.sin(e), a = Math.cos(e);
  return r[0] = a, r[1] = n, r[2] = 0, r[3] = 0, r[4] = -n, r[5] = a, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function le(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = a + a, o = t + t, c = s + s, l = a * h, f = a * o, p = a * c, v = t * o, m = t * c, d = s * c, y = i * h, u = i * o, x = i * c;
  return r[0] = 1 - (v + d), r[1] = f + x, r[2] = p - u, r[3] = 0, r[4] = f - x, r[5] = 1 - (l + d), r[6] = m + y, r[7] = 0, r[8] = p + u, r[9] = m - y, r[10] = 1 - (l + v), r[11] = 0, r[12] = n[0], r[13] = n[1], r[14] = n[2], r[15] = 1, r;
}
function xa(r, e) {
  var n = new P(3), a = -e[0], t = -e[1], s = -e[2], i = e[3], h = e[4], o = e[5], c = e[6], l = e[7], f = a * a + t * t + s * s + i * i;
  return f > 0 ? (n[0] = (h * i + l * a + o * s - c * t) * 2 / f, n[1] = (o * i + l * t + c * a - h * s) * 2 / f, n[2] = (c * i + l * s + h * t - o * a) * 2 / f) : (n[0] = (h * i + l * a + o * s - c * t) * 2, n[1] = (o * i + l * t + c * a - h * s) * 2, n[2] = (c * i + l * s + h * t - o * a) * 2), le(r, e, n), r;
}
function ga(r, e) {
  return r[0] = e[12], r[1] = e[13], r[2] = e[14], r;
}
function pe(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[4], i = e[5], h = e[6], o = e[8], c = e[9], l = e[10];
  return r[0] = Math.hypot(n, a, t), r[1] = Math.hypot(s, i, h), r[2] = Math.hypot(o, c, l), r;
}
function Ma(r, e) {
  var n = new P(3);
  pe(n, e);
  var a = 1 / n[0], t = 1 / n[1], s = 1 / n[2], i = e[0] * a, h = e[1] * t, o = e[2] * s, c = e[4] * a, l = e[5] * t, f = e[6] * s, p = e[8] * a, v = e[9] * t, m = e[10] * s, d = i + l + m, y = 0;
  return d > 0 ? (y = Math.sqrt(d + 1) * 2, r[3] = 0.25 * y, r[0] = (f - v) / y, r[1] = (p - o) / y, r[2] = (h - c) / y) : i > l && i > m ? (y = Math.sqrt(1 + i - l - m) * 2, r[3] = (f - v) / y, r[0] = 0.25 * y, r[1] = (h + c) / y, r[2] = (p + o) / y) : l > m ? (y = Math.sqrt(1 + l - i - m) * 2, r[3] = (p - o) / y, r[0] = (h + c) / y, r[1] = 0.25 * y, r[2] = (f + v) / y) : (y = Math.sqrt(1 + m - i - l) * 2, r[3] = (h - c) / y, r[0] = (p + o) / y, r[1] = (f + v) / y, r[2] = 0.25 * y), r;
}
function _a(r, e, n, a) {
  var t = e[0], s = e[1], i = e[2], h = e[3], o = t + t, c = s + s, l = i + i, f = t * o, p = t * c, v = t * l, m = s * c, d = s * l, y = i * l, u = h * o, x = h * c, M = h * l, b = a[0], _ = a[1], g = a[2];
  return r[0] = (1 - (m + y)) * b, r[1] = (p + M) * b, r[2] = (v - x) * b, r[3] = 0, r[4] = (p - M) * _, r[5] = (1 - (f + y)) * _, r[6] = (d + u) * _, r[7] = 0, r[8] = (v + x) * g, r[9] = (d - u) * g, r[10] = (1 - (f + m)) * g, r[11] = 0, r[12] = n[0], r[13] = n[1], r[14] = n[2], r[15] = 1, r;
}
function ba(r, e, n, a, t) {
  var s = e[0], i = e[1], h = e[2], o = e[3], c = s + s, l = i + i, f = h + h, p = s * c, v = s * l, m = s * f, d = i * l, y = i * f, u = h * f, x = o * c, M = o * l, b = o * f, _ = a[0], g = a[1], N = a[2], q = t[0], w = t[1], F = t[2], L = (1 - (d + u)) * _, T = (v + b) * _, V = (m - M) * _, z = (v - b) * g, Y = (1 - (p + u)) * g, or = (y + x) * g, hr = (m + M) * N, Sr = (y - x) * N, Ir = (1 - (p + d)) * N;
  return r[0] = L, r[1] = T, r[2] = V, r[3] = 0, r[4] = z, r[5] = Y, r[6] = or, r[7] = 0, r[8] = hr, r[9] = Sr, r[10] = Ir, r[11] = 0, r[12] = n[0] + q - (L * q + z * w + hr * F), r[13] = n[1] + w - (T * q + Y * w + Sr * F), r[14] = n[2] + F - (V * q + or * w + Ir * F), r[15] = 1, r;
}
function Aa(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = n + n, h = a + a, o = t + t, c = n * i, l = a * i, f = a * h, p = t * i, v = t * h, m = t * o, d = s * i, y = s * h, u = s * o;
  return r[0] = 1 - f - m, r[1] = l + u, r[2] = p - y, r[3] = 0, r[4] = l - u, r[5] = 1 - c - m, r[6] = v + d, r[7] = 0, r[8] = p + y, r[9] = v - d, r[10] = 1 - c - f, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function wa(r, e, n, a, t, s, i) {
  var h = 1 / (n - e), o = 1 / (t - a), c = 1 / (s - i);
  return r[0] = s * 2 * h, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s * 2 * o, r[6] = 0, r[7] = 0, r[8] = (n + e) * h, r[9] = (t + a) * o, r[10] = (i + s) * c, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = i * s * 2 * c, r[15] = 0, r;
}
function fe(r, e, n, a, t) {
  var s = 1 / Math.tan(e / 2), i;
  return r[0] = s / n, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[11] = -1, r[12] = 0, r[13] = 0, r[15] = 0, t != null && t !== 1 / 0 ? (i = 1 / (a - t), r[10] = (t + a) * i, r[14] = 2 * t * a * i) : (r[10] = -1, r[14] = -2 * a), r;
}
var ka = fe;
function za(r, e, n, a, t) {
  var s = 1 / Math.tan(e / 2), i;
  return r[0] = s / n, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[11] = -1, r[12] = 0, r[13] = 0, r[15] = 0, t != null && t !== 1 / 0 ? (i = 1 / (a - t), r[10] = t * i, r[14] = t * a * i) : (r[10] = -1, r[14] = -a), r;
}
function qa(r, e, n, a) {
  var t = Math.tan(e.upDegrees * Math.PI / 180), s = Math.tan(e.downDegrees * Math.PI / 180), i = Math.tan(e.leftDegrees * Math.PI / 180), h = Math.tan(e.rightDegrees * Math.PI / 180), o = 2 / (i + h), c = 2 / (t + s);
  return r[0] = o, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = c, r[6] = 0, r[7] = 0, r[8] = -((i - h) * o * 0.5), r[9] = (t - s) * c * 0.5, r[10] = a / (n - a), r[11] = -1, r[12] = 0, r[13] = 0, r[14] = a * n / (n - a), r[15] = 0, r;
}
function ye(r, e, n, a, t, s, i) {
  var h = 1 / (e - n), o = 1 / (a - t), c = 1 / (s - i);
  return r[0] = -2 * h, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = -2 * o, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 2 * c, r[11] = 0, r[12] = (e + n) * h, r[13] = (t + a) * o, r[14] = (i + s) * c, r[15] = 1, r;
}
var Na = ye;
function Fa(r, e, n, a, t, s, i) {
  var h = 1 / (e - n), o = 1 / (a - t), c = 1 / (s - i);
  return r[0] = -2 * h, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = -2 * o, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = c, r[11] = 0, r[12] = (e + n) * h, r[13] = (t + a) * o, r[14] = s * c, r[15] = 1, r;
}
function Sa(r, e, n, a) {
  var t, s, i, h, o, c, l, f, p, v, m = e[0], d = e[1], y = e[2], u = a[0], x = a[1], M = a[2], b = n[0], _ = n[1], g = n[2];
  return Math.abs(m - b) < S && Math.abs(d - _) < S && Math.abs(y - g) < S ? he(r) : (l = m - b, f = d - _, p = y - g, v = 1 / Math.hypot(l, f, p), l *= v, f *= v, p *= v, t = x * p - M * f, s = M * l - u * p, i = u * f - x * l, v = Math.hypot(t, s, i), v ? (v = 1 / v, t *= v, s *= v, i *= v) : (t = 0, s = 0, i = 0), h = f * i - p * s, o = p * t - l * i, c = l * s - f * t, v = Math.hypot(h, o, c), v ? (v = 1 / v, h *= v, o *= v, c *= v) : (h = 0, o = 0, c = 0), r[0] = t, r[1] = h, r[2] = l, r[3] = 0, r[4] = s, r[5] = o, r[6] = f, r[7] = 0, r[8] = i, r[9] = c, r[10] = p, r[11] = 0, r[12] = -(t * m + s * d + i * y), r[13] = -(h * m + o * d + c * y), r[14] = -(l * m + f * d + p * y), r[15] = 1, r);
}
function Ia(r, e, n, a) {
  var t = e[0], s = e[1], i = e[2], h = a[0], o = a[1], c = a[2], l = t - n[0], f = s - n[1], p = i - n[2], v = l * l + f * f + p * p;
  v > 0 && (v = 1 / Math.sqrt(v), l *= v, f *= v, p *= v);
  var m = o * p - c * f, d = c * l - h * p, y = h * f - o * l;
  return v = m * m + d * d + y * y, v > 0 && (v = 1 / Math.sqrt(v), m *= v, d *= v, y *= v), r[0] = m, r[1] = d, r[2] = y, r[3] = 0, r[4] = f * y - p * d, r[5] = p * m - l * y, r[6] = l * d - f * m, r[7] = 0, r[8] = l, r[9] = f, r[10] = p, r[11] = 0, r[12] = t, r[13] = s, r[14] = i, r[15] = 1, r;
}
function Ca(r) {
  return "mat4(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ", " + r[4] + ", " + r[5] + ", " + r[6] + ", " + r[7] + ", " + r[8] + ", " + r[9] + ", " + r[10] + ", " + r[11] + ", " + r[12] + ", " + r[13] + ", " + r[14] + ", " + r[15] + ")";
}
function La(r) {
  return Math.hypot(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
}
function Da(r, e, n) {
  return r[0] = e[0] + n[0], r[1] = e[1] + n[1], r[2] = e[2] + n[2], r[3] = e[3] + n[3], r[4] = e[4] + n[4], r[5] = e[5] + n[5], r[6] = e[6] + n[6], r[7] = e[7] + n[7], r[8] = e[8] + n[8], r[9] = e[9] + n[9], r[10] = e[10] + n[10], r[11] = e[11] + n[11], r[12] = e[12] + n[12], r[13] = e[13] + n[13], r[14] = e[14] + n[14], r[15] = e[15] + n[15], r;
}
function de(r, e, n) {
  return r[0] = e[0] - n[0], r[1] = e[1] - n[1], r[2] = e[2] - n[2], r[3] = e[3] - n[3], r[4] = e[4] - n[4], r[5] = e[5] - n[5], r[6] = e[6] - n[6], r[7] = e[7] - n[7], r[8] = e[8] - n[8], r[9] = e[9] - n[9], r[10] = e[10] - n[10], r[11] = e[11] - n[11], r[12] = e[12] - n[12], r[13] = e[13] - n[13], r[14] = e[14] - n[14], r[15] = e[15] - n[15], r;
}
function Ea(r, e, n) {
  return r[0] = e[0] * n, r[1] = e[1] * n, r[2] = e[2] * n, r[3] = e[3] * n, r[4] = e[4] * n, r[5] = e[5] * n, r[6] = e[6] * n, r[7] = e[7] * n, r[8] = e[8] * n, r[9] = e[9] * n, r[10] = e[10] * n, r[11] = e[11] * n, r[12] = e[12] * n, r[13] = e[13] * n, r[14] = e[14] * n, r[15] = e[15] * n, r;
}
function Ta(r, e, n, a) {
  return r[0] = e[0] + n[0] * a, r[1] = e[1] + n[1] * a, r[2] = e[2] + n[2] * a, r[3] = e[3] + n[3] * a, r[4] = e[4] + n[4] * a, r[5] = e[5] + n[5] * a, r[6] = e[6] + n[6] * a, r[7] = e[7] + n[7] * a, r[8] = e[8] + n[8] * a, r[9] = e[9] + n[9] * a, r[10] = e[10] + n[10] * a, r[11] = e[11] + n[11] * a, r[12] = e[12] + n[12] * a, r[13] = e[13] + n[13] * a, r[14] = e[14] + n[14] * a, r[15] = e[15] + n[15] * a, r;
}
function Pa(r, e) {
  return r[0] === e[0] && r[1] === e[1] && r[2] === e[2] && r[3] === e[3] && r[4] === e[4] && r[5] === e[5] && r[6] === e[6] && r[7] === e[7] && r[8] === e[8] && r[9] === e[9] && r[10] === e[10] && r[11] === e[11] && r[12] === e[12] && r[13] === e[13] && r[14] === e[14] && r[15] === e[15];
}
function Va(r, e) {
  var n = r[0], a = r[1], t = r[2], s = r[3], i = r[4], h = r[5], o = r[6], c = r[7], l = r[8], f = r[9], p = r[10], v = r[11], m = r[12], d = r[13], y = r[14], u = r[15], x = e[0], M = e[1], b = e[2], _ = e[3], g = e[4], N = e[5], q = e[6], w = e[7], F = e[8], L = e[9], T = e[10], V = e[11], z = e[12], Y = e[13], or = e[14], hr = e[15];
  return Math.abs(n - x) <= S * Math.max(1, Math.abs(n), Math.abs(x)) && Math.abs(a - M) <= S * Math.max(1, Math.abs(a), Math.abs(M)) && Math.abs(t - b) <= S * Math.max(1, Math.abs(t), Math.abs(b)) && Math.abs(s - _) <= S * Math.max(1, Math.abs(s), Math.abs(_)) && Math.abs(i - g) <= S * Math.max(1, Math.abs(i), Math.abs(g)) && Math.abs(h - N) <= S * Math.max(1, Math.abs(h), Math.abs(N)) && Math.abs(o - q) <= S * Math.max(1, Math.abs(o), Math.abs(q)) && Math.abs(c - w) <= S * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(l - F) <= S * Math.max(1, Math.abs(l), Math.abs(F)) && Math.abs(f - L) <= S * Math.max(1, Math.abs(f), Math.abs(L)) && Math.abs(p - T) <= S * Math.max(1, Math.abs(p), Math.abs(T)) && Math.abs(v - V) <= S * Math.max(1, Math.abs(v), Math.abs(V)) && Math.abs(m - z) <= S * Math.max(1, Math.abs(m), Math.abs(z)) && Math.abs(d - Y) <= S * Math.max(1, Math.abs(d), Math.abs(Y)) && Math.abs(y - or) <= S * Math.max(1, Math.abs(y), Math.abs(or)) && Math.abs(u - hr) <= S * Math.max(1, Math.abs(u), Math.abs(hr));
}
var Oa = ce;
var ja = de;
var pr = {};
ur(pr, { add: () => ht, calculateW: () => Xa, clone: () => tt, conjugate: () => et, copy: () => it, create: () => Nr, dot: () => Pe, equals: () => dt, exactEquals: () => yt, exp: () => Le, fromEuler: () => nt, fromMat3: () => Ee, fromValues: () => st, getAngle: () => $a, getAxisAngle: () => Qa, identity: () => Ga, invert: () => rt, len: () => pt, length: () => Ve, lerp: () => lt, ln: () => De, mul: () => ct, multiply: () => Ce, normalize: () => Fr, pow: () => Ka, random: () => Ja, rotateX: () => Ha, rotateY: () => Wa, rotateZ: () => Za, rotationTo: () => vt, scale: () => Te, set: () => ot, setAxes: () => ut, setAxisAngle: () => Ie, slerp: () => mr, sqlerp: () => mt, sqrLen: () => ft, squaredLength: () => Oe, str: () => at });
function zr() {
  var r = new P(3);
  return P != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0), r;
}
function Ra(r) {
  var e = r[0], n = r[1], a = r[2];
  return Math.hypot(e, n, a);
}
function qr(r, e, n) {
  var a = new P(3);
  return a[0] = r, a[1] = e, a[2] = n, a;
}
function ve(r, e) {
  var n = e[0], a = e[1], t = e[2], s = n * n + a * a + t * t;
  return s > 0 && (s = 1 / Math.sqrt(s)), r[0] = e[0] * s, r[1] = e[1] * s, r[2] = e[2] * s, r;
}
function me(r, e) {
  return r[0] * e[0] + r[1] * e[1] + r[2] * e[2];
}
function vr(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = n[0], h = n[1], o = n[2];
  return r[0] = t * o - s * h, r[1] = s * i - a * o, r[2] = a * h - t * i, r;
}
var ue = Ra;
var Zt = function() {
  var r = zr();
  return function(e, n, a, t, s, i) {
    var h, o;
    for (n || (n = 3), a || (a = 0), t ? o = Math.min(t * n + a, e.length) : o = e.length, h = a; h < o; h += n) r[0] = e[h], r[1] = e[h + 1], r[2] = e[h + 2], s(r, r, i), e[h] = r[0], e[h + 1] = r[1], e[h + 2] = r[2];
    return e;
  };
}();
function Ua() {
  var r = new P(4);
  return P != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0), r;
}
function xe(r) {
  var e = new P(4);
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
}
function ge(r, e, n, a) {
  var t = new P(4);
  return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t;
}
function Me(r, e) {
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r;
}
function _e(r, e, n, a, t) {
  return r[0] = e, r[1] = n, r[2] = a, r[3] = t, r;
}
function be(r, e, n) {
  return r[0] = e[0] + n[0], r[1] = e[1] + n[1], r[2] = e[2] + n[2], r[3] = e[3] + n[3], r;
}
function Ae(r, e, n) {
  return r[0] = e[0] * n, r[1] = e[1] * n, r[2] = e[2] * n, r[3] = e[3] * n, r;
}
function we(r) {
  var e = r[0], n = r[1], a = r[2], t = r[3];
  return Math.hypot(e, n, a, t);
}
function ke(r) {
  var e = r[0], n = r[1], a = r[2], t = r[3];
  return e * e + n * n + a * a + t * t;
}
function ze(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = n * n + a * a + t * t + s * s;
  return i > 0 && (i = 1 / Math.sqrt(i)), r[0] = n * i, r[1] = a * i, r[2] = t * i, r[3] = s * i, r;
}
function qe(r, e) {
  return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3];
}
function Ne(r, e, n, a) {
  var t = e[0], s = e[1], i = e[2], h = e[3];
  return r[0] = t + a * (n[0] - t), r[1] = s + a * (n[1] - s), r[2] = i + a * (n[2] - i), r[3] = h + a * (n[3] - h), r;
}
function Fe(r, e) {
  return r[0] === e[0] && r[1] === e[1] && r[2] === e[2] && r[3] === e[3];
}
function Se(r, e) {
  var n = r[0], a = r[1], t = r[2], s = r[3], i = e[0], h = e[1], o = e[2], c = e[3];
  return Math.abs(n - i) <= S * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(a - h) <= S * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(t - o) <= S * Math.max(1, Math.abs(t), Math.abs(o)) && Math.abs(s - c) <= S * Math.max(1, Math.abs(s), Math.abs(c));
}
var Xt = function() {
  var r = Ua();
  return function(e, n, a, t, s, i) {
    var h, o;
    for (n || (n = 4), a || (a = 0), t ? o = Math.min(t * n + a, e.length) : o = e.length, h = a; h < o; h += n) r[0] = e[h], r[1] = e[h + 1], r[2] = e[h + 2], r[3] = e[h + 3], s(r, r, i), e[h] = r[0], e[h + 1] = r[1], e[h + 2] = r[2], e[h + 3] = r[3];
    return e;
  };
}();
function Nr() {
  var r = new P(4);
  return P != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0), r[3] = 1, r;
}
function Ga(r) {
  return r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r;
}
function Ie(r, e, n) {
  n = n * 0.5;
  var a = Math.sin(n);
  return r[0] = a * e[0], r[1] = a * e[1], r[2] = a * e[2], r[3] = Math.cos(n), r;
}
function Qa(r, e) {
  var n = Math.acos(e[3]) * 2, a = Math.sin(n / 2);
  return a > S ? (r[0] = e[0] / a, r[1] = e[1] / a, r[2] = e[2] / a) : (r[0] = 1, r[1] = 0, r[2] = 0), n;
}
function $a(r, e) {
  var n = Pe(r, e);
  return Math.acos(2 * n * n - 1);
}
function Ce(r, e, n) {
  var a = e[0], t = e[1], s = e[2], i = e[3], h = n[0], o = n[1], c = n[2], l = n[3];
  return r[0] = a * l + i * h + t * c - s * o, r[1] = t * l + i * o + s * h - a * c, r[2] = s * l + i * c + a * o - t * h, r[3] = i * l - a * h - t * o - s * c, r;
}
function Ha(r, e, n) {
  n *= 0.5;
  var a = e[0], t = e[1], s = e[2], i = e[3], h = Math.sin(n), o = Math.cos(n);
  return r[0] = a * o + i * h, r[1] = t * o + s * h, r[2] = s * o - t * h, r[3] = i * o - a * h, r;
}
function Wa(r, e, n) {
  n *= 0.5;
  var a = e[0], t = e[1], s = e[2], i = e[3], h = Math.sin(n), o = Math.cos(n);
  return r[0] = a * o - s * h, r[1] = t * o + i * h, r[2] = s * o + a * h, r[3] = i * o - t * h, r;
}
function Za(r, e, n) {
  n *= 0.5;
  var a = e[0], t = e[1], s = e[2], i = e[3], h = Math.sin(n), o = Math.cos(n);
  return r[0] = a * o + t * h, r[1] = t * o - a * h, r[2] = s * o + i * h, r[3] = i * o - s * h, r;
}
function Xa(r, e) {
  var n = e[0], a = e[1], t = e[2];
  return r[0] = n, r[1] = a, r[2] = t, r[3] = Math.sqrt(Math.abs(1 - n * n - a * a - t * t)), r;
}
function Le(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = Math.sqrt(n * n + a * a + t * t), h = Math.exp(s), o = i > 0 ? h * Math.sin(i) / i : 0;
  return r[0] = n * o, r[1] = a * o, r[2] = t * o, r[3] = h * Math.cos(i), r;
}
function De(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = Math.sqrt(n * n + a * a + t * t), h = i > 0 ? Math.atan2(i, s) / i : 0;
  return r[0] = n * h, r[1] = a * h, r[2] = t * h, r[3] = 0.5 * Math.log(n * n + a * a + t * t + s * s), r;
}
function Ka(r, e, n) {
  return De(r, e), Te(r, r, n), Le(r, r), r;
}
function mr(r, e, n, a) {
  var t = e[0], s = e[1], i = e[2], h = e[3], o = n[0], c = n[1], l = n[2], f = n[3], p, v, m, d, y;
  return v = t * o + s * c + i * l + h * f, v < 0 && (v = -v, o = -o, c = -c, l = -l, f = -f), 1 - v > S ? (p = Math.acos(v), m = Math.sin(p), d = Math.sin((1 - a) * p) / m, y = Math.sin(a * p) / m) : (d = 1 - a, y = a), r[0] = d * t + y * o, r[1] = d * s + y * c, r[2] = d * i + y * l, r[3] = d * h + y * f, r;
}
function Ja(r) {
  var e = ir(), n = ir(), a = ir(), t = Math.sqrt(1 - e), s = Math.sqrt(e);
  return r[0] = t * Math.sin(2 * Math.PI * n), r[1] = t * Math.cos(2 * Math.PI * n), r[2] = s * Math.sin(2 * Math.PI * a), r[3] = s * Math.cos(2 * Math.PI * a), r;
}
function rt(r, e) {
  var n = e[0], a = e[1], t = e[2], s = e[3], i = n * n + a * a + t * t + s * s, h = i ? 1 / i : 0;
  return r[0] = -n * h, r[1] = -a * h, r[2] = -t * h, r[3] = s * h, r;
}
function et(r, e) {
  return r[0] = -e[0], r[1] = -e[1], r[2] = -e[2], r[3] = e[3], r;
}
function Ee(r, e) {
  var n = e[0] + e[4] + e[8], a;
  if (n > 0) a = Math.sqrt(n + 1), r[3] = 0.5 * a, a = 0.5 / a, r[0] = (e[5] - e[7]) * a, r[1] = (e[6] - e[2]) * a, r[2] = (e[1] - e[3]) * a;
  else {
    var t = 0;
    e[4] > e[0] && (t = 1), e[8] > e[t * 3 + t] && (t = 2);
    var s = (t + 1) % 3, i = (t + 2) % 3;
    a = Math.sqrt(e[t * 3 + t] - e[s * 3 + s] - e[i * 3 + i] + 1), r[t] = 0.5 * a, a = 0.5 / a, r[3] = (e[s * 3 + i] - e[i * 3 + s]) * a, r[s] = (e[s * 3 + t] + e[t * 3 + s]) * a, r[i] = (e[i * 3 + t] + e[t * 3 + i]) * a;
  }
  return r;
}
function nt(r, e, n, a) {
  var t = 0.5 * Math.PI / 180;
  e *= t, n *= t, a *= t;
  var s = Math.sin(e), i = Math.cos(e), h = Math.sin(n), o = Math.cos(n), c = Math.sin(a), l = Math.cos(a);
  return r[0] = s * o * l - i * h * c, r[1] = i * h * l + s * o * c, r[2] = i * o * c - s * h * l, r[3] = i * o * l + s * h * c, r;
}
function at(r) {
  return "quat(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ")";
}
var tt = xe;
var st = ge;
var it = Me;
var ot = _e;
var ht = be;
var ct = Ce;
var Te = Ae;
var Pe = qe;
var lt = Ne;
var Ve = we;
var pt = Ve;
var Oe = ke;
var ft = Oe;
var Fr = ze;
var yt = Fe;
var dt = Se;
var vt = function() {
  var r = zr(), e = qr(1, 0, 0), n = qr(0, 1, 0);
  return function(a, t, s) {
    var i = me(t, s);
    return i < -0.999999 ? (vr(r, e, t), ue(r) < 1e-6 && vr(r, n, t), ve(r, r), Ie(a, r, Math.PI), a) : i > 0.999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (vr(r, t, s), a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = 1 + i, Fr(a, a));
  };
}();
var mt = function() {
  var r = Nr(), e = Nr();
  return function(n, a, t, s, i, h) {
    return mr(r, a, i, h), mr(e, t, s, h), mr(n, r, e, 2 * h * (1 - h)), n;
  };
}();
var ut = function() {
  var r = kr();
  return function(e, n, a, t) {
    return r[0] = a[0], r[3] = a[1], r[6] = a[2], r[1] = t[0], r[4] = t[1], r[7] = t[2], r[2] = -n[0], r[5] = -n[1], r[8] = -n[2], Fr(e, Ee(e, r));
  };
}();
var je = { xyz: 3, color: 3, opacity: 1, scaling: 3, quaternion: 4, harmonics: 3 };
var ar = class {
  constructor(e) {
    this.version = "";
    this._buffer = e;
  }
  get buffer() {
    return this._buffer;
  }
  get decoded() {
    return this._decoded || (this._decoded = this.decodeBuffer()), this._decoded;
  }
  get colorsA() {
    let e = 0.28209479177387814, n = this.decoded.color.denormDequant(), a = this.decoded.opacity.denormDequant(), t = (0, nr.default)(new Float32Array(n.shape[0] * 4), [n.shape[0], 4]);
    return R.mulseq(n, e), R.addseq(n, 0.5), R.mulseq(n, 255), R.maxseq(n, 0), R.minseq(n, 255), this.version === "" && (R.negeq(a), R.expeq(a), R.addseq(a, 1), R.recipeq(a), R.mulseq(a, 255)), R.assign(t.hi(n.shape[0], 3).lo(0, 0), n), R.assign(t.hi(n.shape[0], 4).lo(0, 3), a), (0, nr.default)(new Uint8Array(t.data), [n.shape[0], 4]).data;
  }
  get nsplats() {
    return this.decoded.nsplats;
  }
  getSplatCount() {
    return this.decoded.nsplats;
  }
  get precomputedCovarianceBufferData() {
    return this._precomputedCovarianceBufferData;
  }
  decodeBuffer() {
    let { splatCount: e, chunkCount: n, chunkSize: a, typeChunks: t, vertexData: s, propertiesDesc: i, version: h } = this.decodeHeader();
    this.version = h;
    let o = { xyz: i.xyz.compressionMethod, color: i.color.compressionMethod, opacity: i.opacity.compressionMethod, scaling: i.scaling.compressionMethod, quaternion: i.quaternion.compressionMethod, chunkSize: a };
    i.harmonics_0 && (o.harmonics = i.harmonics_0.compressionMethod);
    let c = s.byteOffset, l = Array(Object.keys(i).length);
    for (let x in i) l[i[x].index] = { name: x, method: i[x].compressionMethod };
    let f = n * 2 * 4, p = c, v = t === "dynamic" ? n * 2 : 0, m, d = false;
    if (v > 0) {
      let x = new Uint16Array(s.buffer.slice(p, p + v));
      p += v, m = Array.from(x), d = true;
    }
    let y = {};
    for (let x of l) {
      let M = 0, b = true;
      if (x.method === "norm8x") M = e * 1 * je[x.name];
      else if (x.method === "norm11") M = e * 4;
      else if (x.method === "norm565") M = e * 2;
      else throw b = false, new Error(`Not Implemented format: ${x.method}`);
      let _;
      if (b) {
        let q = s.buffer.slice(p, p + f);
        _ = (0, nr.default)(new Float32Array(q), [n, 2]), p += f;
      } else throw new Error("loading chunk byt hasnot minmax!");
      let g = s.buffer.slice(p, p + M);
      p += M;
      let N;
      if (x.method === "norm8x") N = (0, nr.default)(new Uint8Array(g), [e, je[x.name]]);
      else if (x.method === "norm11") N = (0, nr.default)(new Uint32Array(g));
      else if (x.method === "norm565") N = (0, nr.default)(new Uint16Array(g));
      else throw new Error(`Not Implemented format: ${x.method}`);
      y[x.name] = new E(N, _, a, x.method, m, d);
    }
    let u = [];
    for (let x = 0; x < 15; x++) {
      let M = y[`harmonics_${x}`];
      M && (u.push(M), delete y[`harmonics_${x}`]);
    }
    return u.length > 0 && (y.harmonics = u), new X(o, y.xyz, y.scaling, y.color, y.opacity, y.quaternion, y.harmonics, m);
  }
  buildPreComputedBuffers() {
    let a = this.decoded, t = a.nsplats, s = new ArrayBuffer(24 * t), i = new Float32Array(s), h = a.scaling.denormDequant(), o = a.quaternion.denormDequant(), c = pr.create(), l = W.create(), f = W.create(), p = W.create(), v = lr.create();
    for (let m = 0; m < t; m++) {
      lr.fromScaling(v, [Math.exp(h.get(m, 0)), Math.exp(h.get(m, 1)), Math.exp(h.get(m, 2))]), W.fromMat4(f, v), pr.set(c, o.get(m, 0), o.get(m, 1), o.get(m, 2), o.get(m, 3)), W.fromQuat(l, c), W.multiply(p, l, f);
      let d = p;
      i[6 * m] = d[0] * d[0] + d[3] * d[3] + d[6] * d[6], i[6 * m + 1] = d[0] * d[1] + d[3] * d[4] + d[6] * d[7], i[6 * m + 2] = d[0] * d[2] + d[3] * d[5] + d[6] * d[8], i[6 * m + 3] = d[1] * d[1] + d[4] * d[4] + d[7] * d[7], i[6 * m + 4] = d[1] * d[2] + d[4] * d[5] + d[7] * d[8], i[6 * m + 5] = d[2] * d[2] + d[5] * d[5] + d[8] * d[8];
    }
    this._precomputedCovarianceBufferData = s;
  }
  decodeHeader() {
    let e = this._buffer, n = new TextDecoder(), a = 0, t = "", s = 100;
    for (; ; ) {
      if (a + s >= e.byteLength) throw new Error("End of file reached while searching for end of header");
      let y = new Uint8Array(e, a, s);
      t += n.decode(y), a += s;
      let u = a - s * 2, x = new Uint8Array(e, Math.max(0, u), u >= 0 ? s * 2 : s);
      if (n.decode(x).includes("end_header")) break;
    }
    let i = t.split(`
`), h = 0, o = 0, c = 0, l = 0, f = "", p = "", v = {};
    for (let y = 0; y < i.length; y++) {
      let u = i[y].trim();
      if (u.startsWith("version")) p = u.split(" ")[1] ?? "";
      else if (u.startsWith("element vertex")) {
        let x = u.match(/\d+/);
        x && (h = parseInt(x[0]));
      } else if (u.startsWith("property")) {
        let x = u.match(/(\w+)\s+(\w+)\s+(\w+)/);
        if (x) {
          let M = x[2], b = x[3];
          v[M] = { compressionMethod: b, index: l }, l++;
        }
      } else if (u.startsWith("element chunks")) {
        let x = u.match(/\d+/);
        x && (o = parseInt(x[0]));
      } else if (u.startsWith("element chunkSize")) {
        let x = u.match(/\d+/);
        x && (c = parseInt(x[0]));
      } else if (u.startsWith("element typeChunks")) {
        let x = u.match(/(\w+)\s+(\w+)\s+(\w+)/);
        x && (f = x[3]);
      } else if (u === "end_header") break;
    }
    let m = t.indexOf("end_header") + 10 + 1, d = new DataView(e, m);
    return { splatCount: h, chunkCount: o, chunkSize: c, typeChunks: f, vertexData: d, propertiesDesc: v, version: p };
  }
  pruneSplats(e) {
    let a = this.decodeBuffer().pruneSplats(e);
    return ar.fromCompressedGaussianSplats(a, this.version);
  }
  static fromCompressedGaussianSplats(e, n) {
    let a = e.xyz.length, t = e.xyz.nchunks, s = `gspline
version ${n}
element vertex ${a}
element chunks ${t}
element chunkSize ${e.chunkSize}
element typeChunks ${e.isDynamicChunks ? "dynamic" : "static"}
property xyz ${e.xyz.method}
property color ${e.color.method}
property opacity ${e.opacity.method}
property scaling ${e.scaling.method}
property quaternion ${e.quaternion.method}`;
    if (e.harmonics && e.harmonics.length > 0) for (let F = 0; F < e.harmonics.length; F++) s = `${s}
property harmonics_${F} ${e.harmonics[F].method}`;
    s = `${s}
end_header
`;
    let h = new TextEncoder().encode(s), o = t * 2 * 4, c = e.xyz.quantized.data.buffer.byteLength, l = e.xyz instanceof E ? o : 0, f = e.color.quantized.data.buffer.byteLength, p = e.color instanceof E ? o : 0, v = e.opacity.quantized.data.buffer.byteLength, m = e.opacity instanceof E ? o : 0, d = e.scaling.quantized.data.buffer.byteLength, y = e.scaling instanceof E ? o : 0, u = e.quaternion.quantized.data.buffer.byteLength, x = e.quaternion instanceof E ? o : 0, M = e.variableChunkSize ? Uint16Array.from(e.variableChunkSize) : void 0, b = M ? M.byteLength : 0, _ = h.byteLength + b + c + l + f + p + v + m + d + y + u + x, g = 0, N = 0;
    if (e.harmonics && e.harmonics.length > 0) for (let F = 0; F < e.harmonics.length; F++) g += e.harmonics[F].quantized.data.buffer.byteLength, N += e.harmonics[F] instanceof E ? o : 0;
    g = 0, N = 0, _ += g + N;
    let q = new Uint8Array(_), w = 0;
    if (q.set(h, w), w += h.byteLength, b > 0 && (q.set(new Uint8Array(M.buffer), w), w += b), e.xyz instanceof E && (q.set(new Uint8Array(e.xyz.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(e.xyz.quantized.data.buffer), w), w += c, e.color instanceof E && (q.set(new Uint8Array(e.color.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(e.color.quantized.data.buffer), w), w += f, e.opacity instanceof E && (q.set(new Uint8Array(e.opacity.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(e.opacity.quantized.data.buffer), w), w += v, e.scaling instanceof E && (q.set(new Uint8Array(e.scaling.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(e.scaling.quantized.data.buffer), w), w += d, e.quaternion instanceof E && (q.set(new Uint8Array(e.quaternion.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(e.quaternion.quantized.data.buffer), w), w += u, g > 0 && e.harmonics && e.harmonics.length > 0) for (let F = 0; F < e.harmonics.length; F++) {
      let L = e.harmonics[F];
      L instanceof E && (q.set(new Uint8Array(L.minmaxMatrix.data.buffer), w), w += o), q.set(new Uint8Array(L.quantized.data.buffer), w), w += L.quantized.data.byteLength;
    }
    return new ar(q.buffer);
  }
};
export {
  X as CompressedGaussianSplats,
  ar as GSplineBuffer,
  U as GaussianPLYData
};
//# sourceMappingURL=gaussian-splat-compression-WVGIEUNL.js.map
