webpackJsonp([0],{"/x3F":function(t,a){},0:function(t,a){},"5I1r":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s=e("8+8L"),r={name:"translateform",data:function(){return{translateTxt:"",language:""}},methods:{translate:function(t){""==this.translateTxt?alert("请输入翻译文本"):this.$emit("translateTxt",this.translateTxt,this.language),t.preventDefault()}},created:function(){this.language="en"}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row",attrs:{id:"translateform"}},[e("div",{staticClass:"col-md-6 col-md-offset-3",attrs:{id:"box"}},[e("form",{staticClass:"well form-inline",on:{submit:t.translate}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.translateTxt,expression:"translateTxt"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.translateTxt},on:{input:function(a){a.target.composing||(t.translateTxt=a.target.value)}}}),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"kn"}},[t._v("Kannada")]),t._v(" "),e("option",{attrs:{value:"zh"}},[t._v("Chinese")]),t._v(" "),e("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),e("option",{attrs:{value:"de"}},[t._v("German")]),t._v(" "),e("option",{attrs:{value:"fr"}},[t._v("French")]),t._v(" "),e("option",{attrs:{value:"ja"}},[t._v("Japanese")])]),t._v(" "),e("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"translateout"}},[a("h2",[this._v(this._s(this.translated))])])},staticRenderFns:[]};var o={name:"vue",data:function(){return{translated:""}},methods:{translateTxt:function(t,a){var e=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180324T082528Z.6d8d4f5020e4cb4f.90039c13fb5a96e5dce9755235743d0de2834113&lang="+a+"&text="+t).then(function(t){e.translated=t.body.text[0]})}},components:{translateform:e("VU/8")(r,l,!1,function(t){e("/x3F")},null,null).exports,translateout:e("VU/8")({name:"translateout",props:["translated"]},i,!1,function(t){e("5I1r")},"data-v-097230d7",null).exports}},u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[this._v("在线翻译")]),this._v(" "),a("h5",{staticClass:"text-muted"},[this._v("简单 / 便捷 / 高效")]),this._v(" "),a("translateform",{on:{translateTxt:this.translateTxt}}),this._v(" "),a("translateout",{attrs:{translated:this.translated}})],1)},staticRenderFns:[]};var c=e("VU/8")(o,u,!1,function(t){e("xBkg")},null,null).exports;n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:c},template:"<App/>"})},xBkg:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.00562278bbf0b4f64021.js.map