(function(t){function e(e){for(var a,o,u=e[0],i=e[1],c=e[2],p=0,d=[];p<u.length;p++)o=u[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test-vue-login/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"206d":function(t,e,n){"use strict";var a=n("9cbb"),r=n.n(a);r.a},"21bb":function(t,e,n){"use strict";var a=n("bcc9"),r=n.n(a);r.a},3169:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"wrapper header__wrap"},[a("h1",{staticClass:"header__heading"},[t._v("\n        Кабинет пользователя\n      ")]),a("router-link",{staticClass:"header__home",attrs:{to:"/","aria-label":"Вернуться на главную"}},[a("img",{attrs:{src:n("86e6"),alt:"Иконка дома",height:"38"}})])],1)]),a("main",{staticClass:"main"},[a("div",{staticClass:"wrapper"},[a("router-view")],1)])])},s=[],o=(n("5c0b"),n("2877")),u={},i=Object(o["a"])(u,r,s,!1,null,null,null),c=i.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("SubHeading",{staticClass:"home__heading",attrs:{text:"Введите имя пользователя чтобы продолжить"}}),n("InputGroup",{staticClass:"home__input-group",attrs:{label:"Логин"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("Button",{staticClass:"home__button",attrs:{label:"Далее",type:"submit"}})],1)])},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"input-group"},[n("span",{staticClass:"input-group__label"},[t._v(t._s(t.label))]),n("input",{staticClass:"input-group__input",attrs:{type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},b=[],h={name:"InputGroup",props:{type:{type:String,default:"text"},label:{type:String,default:""},value:{type:String,default:""}}},m=h,_=(n("5d60"),Object(o["a"])(m,f,b,!1,null,null,null)),v=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",attrs:{type:t.type}},[t._v("\n  "+t._s(t.label)+"\n")])},y=[],x={name:"Button",props:{label:{type:String,default:""},type:{type:String,default:"button"}}},C=x,S=(n("ef55"),Object(o["a"])(C,g,y,!1,null,null,null)),O=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"sub-heading"},[t._v("\n  "+t._s(t.text)+"\n")])},E=[],$={name:"SubHeading",props:{text:{type:String,required:!0}}},w=$,H=(n("b884"),Object(o["a"])(w,j,E,!1,null,null,null)),k=H.exports,T={name:"Home",components:{InputGroup:v,Button:O,SubHeading:k},data:function(){return{username:""}},methods:{handleSubmit:function(){var t=this.username.trim();t&&this.$router.push({path:"/u/".concat(t)})}}},M=T,P=(n("21bb"),Object(o["a"])(M,p,d,!1,null,null,null)),B=P.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"login"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("SubHeading",{staticClass:"login__heading",attrs:{text:t.greeting}}),n("InputGroup",{staticClass:"login__input-group",attrs:{label:"Код"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("Button",{attrs:{label:"Отправить код",type:"submit"}}),t.hasError?n("ErrorMessage",{staticClass:"login__error-message",attrs:{message:t.errorText}}):t._e()],1)])},I=[],q=n("bc3a"),D=n.n(q),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"error-message"},[n("span",{staticClass:"error-message__accent"},[t._v("Ошибка:")]),t._v(" "+t._s(t.message)+"\n")])},L=[],N={name:"ErrorMessage",props:{message:{type:String,required:!0}}},R=N,U=(n("a0b2"),Object(o["a"])(R,J,L,!1,null,null,null)),F=U.exports,z={name:"Login",components:{InputGroup:v,Button:O,SubHeading:k,ErrorMessage:F},data:function(){return{hasError:!1,errorText:"Неверная комбинация имени пользователя и кода",code:"",URL:"https://glevanov-test-login.herokuapp.com/check",greeting:"Привет, ".concat(this.$route.params.user,"! Введи код для продолжения")}},methods:{handleSubmit:function(){var t=this,e="{}";this.hasError=!1,this.code.trim()?D.a.post(this.URL,{username:this.$route.params.user,code:this.code.trim()}).then(function(n){var a=n.data;JSON.stringify(a)===e?(t.hasError=!0,t.errorText="Неверная комбинация имени пользователя и пароля"):t.$router.push({name:"dashboard",params:{data:a}})}).catch(function(e){t.hasError=!0,t.errorText="".concat(e)}):(this.hasError=!0,this.errorText="Код не может быть пустым")}}},A=z,K=(n("206d"),Object(o["a"])(A,G,I,!1,null,null,null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dashboard"},[n("SubHeading",{staticClass:"dashboard__heading",attrs:{text:"Личный кабинет"}}),n("p",{staticClass:"dashboard__line"},[t._v("\n    Имя пользователя: "),n("span",{staticClass:"dashboard__accent"},[t._v(t._s(this.$route.params.user))])]),n("p",{staticClass:"dashboard__line"},[t._v("\n    Интернет активен в течение "),n("span",{staticClass:"dashboard__accent"},[t._v(t._s(t.data.minutes)+" минут")])]),n("p",{staticClass:"dashboard__line"},[t._v("\n    Доступно "),n("span",{staticClass:"dashboard__accent"},[t._v(t._s(t.data.traffic)+" мб")]),t._v(" трафика для загрузки\n  ")])],1)},W=[],X={name:"Dashboard",components:{SubHeading:k},props:{data:{type:Object,required:!0}}},Y=X,Z=(n("b985"),Object(o["a"])(Y,V,W,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("SubHeading",{attrs:{text:"Кажется, что-то пошло не так"}}),n("p",[t._v("На нашем сайте нет такой страницы")])],1)},nt=[],at={name:"NotFound",components:{SubHeading:k}},rt=at,st=Object(o["a"])(rt,et,nt,!1,null,null,null),ot=st.exports;a["a"].use(l["a"]);var ut=new l["a"]({base:"/test-vue-login/",routes:[{path:"/",name:"home",component:B},{path:"/u/:user",name:"login",component:Q},{path:"/u/:user/dashboard",name:"dashboard",component:tt,props:!0},{path:"*",component:ot}]});n("f5df");a["a"].config.productionTip=!1,new a["a"]({router:ut,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5d60":function(t,e,n){"use strict";var a=n("803e"),r=n.n(a);r.a},"5e27":function(t,e,n){},"803e":function(t,e,n){},"86e6":function(t,e,n){t.exports=n.p+"img/home.4a03005b.svg"},"9cbb":function(t,e,n){},a0b2:function(t,e,n){"use strict";var a=n("acf5"),r=n.n(a);r.a},acf5:function(t,e,n){},aec9:function(t,e,n){},b884:function(t,e,n){"use strict";var a=n("aec9"),r=n.n(a);r.a},b985:function(t,e,n){"use strict";var a=n("3169"),r=n.n(a);r.a},bcc9:function(t,e,n){},c76d:function(t,e,n){},ef55:function(t,e,n){"use strict";var a=n("c76d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.cb0da282.js.map