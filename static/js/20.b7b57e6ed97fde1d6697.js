webpackJsonp([20],{DL8K:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c={data:function(){return{list:[{id:1,val:"排班单元1"},{id:2,val:"排班单元2"},{id:3,val:"排班单元3"}]}},methods:{comfirm1:function(){this.$dialog({type:"text",title:"是否确定删除此标签？",content:"",cancelText:"取消",confirmText:"确定",theme:"#40A9FF",confirm:function(t){alert("是的")}})},comfirm2:function(){this.$dialog({type:"text",title:"删除标签？",content:"是否确定删除此标签？",cancelText:"取消",confirmText:"确定",theme:"#40A9FF",confirm:function(t){alert("是的")}})},feedback:function(){this.$dialog({type:"textarea",title:"请填写反馈",cancelText:"取消",confirmText:"确定",theme:"#40A9FF",confirm:function(t){alert(t)}})},toSelect:function(){this.$dialog({type:"select",title:"请选择排班单元",list:this.list,cancelText:"取消",confirmText:"确定",theme:"#40A9FF",confirm:function(t){alert(t.val)}})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("div",{staticClass:"item",on:{click:t.comfirm1}},[t._v("确定框(不带标题)")]),t._v(" "),i("div",{staticClass:"item",on:{click:t.comfirm2}},[t._v("确定框(带有标题)")]),t._v(" "),i("div",{staticClass:"item",on:{click:t.feedback}},[t._v("填写反馈")]),t._v(" "),i("div",{staticClass:"item",on:{click:t.toSelect}},[t._v("弹窗选择")])])},staticRenderFns:[]};var l=i("VU/8")(c,n,!1,function(t){i("KFeB")},"data-v-7bb36fd0",null);e.default=l.exports},KFeB:function(t,e){}});