(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),c=n("L2hj"),l=n("uLvW"),o=n.n(l);t["default"]=()=>{var e=Object(c["a"])(),t=Object(a["a"])(e,2),n=t[0],l=t[1],r=l.toggle,u=l.setLeft,i=l.setRight;return console.log("11111",n),o.a.createElement("div",null,o.a.createElement("div",null,"".concat(n," ")),o.a.createElement("button",{onClick:r},"Toggle"),o.a.createElement("button",{onClick:u},"setLeft"),o.a.createElement("button",{onClick:i},"setRight"))}},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),c=n("uLvW"),l=n.n(c),o=n("L2hj");t["default"]=()=>{var e=Object(o["a"])("hello","world"),t=Object(a["a"])(e,2),n=t[0],c=t[1],r=c.set,u=c.setLeft,i=c.setRight,s=c.toggle;return l.a.createElement("div",null,l.a.createElement("div",null,"Effect: ".concat(n)),l.a.createElement("button",{onClick:()=>r("world")},"set"),l.a.createElement("button",{onClick:u},"setLeft"),l.a.createElement("button",{onClick:i},"setRight"),l.a.createElement("button",{onClick:s},"toggle"))}},L2hj:function(e,t,n){"use strict";var a=n("iojd"),c=n("uLvW");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(c["useState"])(e),l=Object(a["a"])(n,2),o=l[0],r=l[1],u=Object(c["useMemo"])((()=>{var n=void 0===t?!e:t,a=e=>r(e),c=()=>r(e),l=()=>r(n),o=()=>r((t=>t===e?n:e));return{set:a,setLeft:c,setRight:l,toggle:o}}),[]);return[o,u]}t["a"]=l},aFWa:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),c=n("uLvW"),l=n.n(c);function o(e,t){var n;return function(){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this)}),t)}}var r=o;t["default"]=()=>{var e=Object(c["useState"])(1),t=Object(a["a"])(e,2),n=t[0],o=t[1],u=()=>{o((e=>e+1))};return l.a.createElement("div",null,l.a.createElement("div",null,"Effect: ","".concat(n)),l.a.createElement("button",{onClick:r(u,2e3)},"+1"))}},eWij:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),c=n("uLvW"),l=n.n(c);function o(e,t){var n;return function(){n||(n=!0,setTimeout((()=>{e.apply(this),n=!1}),t))}}var r=o;t["default"]=()=>{var e=Object(c["useState"])(1),t=Object(a["a"])(e,2),n=t[0],o=t[1],u=()=>{o((e=>e+1)),console.log("1")};return l.a.createElement("div",null,l.a.createElement("div",null,"Effect:","".concat(n)),l.a.createElement("button",{onClick:r(u,2e3)},"\u52a0\u4e00"))}}}]);