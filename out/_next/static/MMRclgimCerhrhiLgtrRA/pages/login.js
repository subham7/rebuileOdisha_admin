(window.webpackJsonp=window.webpackJsonp||[]).push([["8a82"],{pqMH:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){var n=e("yfTL");return{page:n.default||n}}])},yfTL:function(n,t,e){"use strict";e.r(t);var o=e("0iUn"),r=e("sLSF"),i=e("MI3g"),u=e("a7VT"),c=e("AT/M"),a=e("Tit0"),l=e("vYYK"),f=e("q1tI"),s=e.n(f),d=e("/MKj"),b=e("nOHt"),p=e.n(b),g=e("7Qib"),h=e("ErRJ"),w=e("wGTE"),j=e("kbOB"),O=e("cJNW"),m=function(n){function t(n){var e;return Object(o.default)(this,t),e=Object(i.default)(this,Object(u.default)(t).call(this,n)),Object(l.a)(Object(c.default)(e),"loginUser",function(){e.props.login(e.props.form.LoginForm.values).then(function(n){return g.b.set(n.token)}).then(function(n){p.a.push("/admin/dashboard/project")}).catch(function(n){return console.log(n)})}),e}return Object(a.default)(t,n),Object(r.default)(t,[{key:"render",value:function(){return s.a.createElement(O.b,null,s.a.createElement(w.b,null),s.a.createElement(j.c,{onClick:this.loginUser},"Login"))}}]),t}(f.Component);t.default=Object(d.b)(function(n){return{form:n.form,loginData:n.login}},function(n){return{login:function(t){return n(h.login.action(t))}}})(m)}},[["pqMH","5d41","9da1"]]]);