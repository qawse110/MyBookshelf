(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{3914:function(t,e,s){"use strict";var a=s("df2f"),n=s.n(a);n.a},"7b5b":function(t,e,s){},"7e43":function(t,e,s){t.exports=s.p+"img/noCover.b5c48bc1.jpeg"},d504:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrapper"},[a("div",{staticClass:"navigation-wrapper"},[a("div",{staticClass:"navigation-title"},[t._v(" 阅读 ")]),a("div",{staticClass:"navigation-sub-title"},[t._v(" 清风不识字，何故乱翻书 ")]),a("div",{staticClass:"search-wrapper"},[a("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索书籍"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"recent-wrapper"},[a("div",{staticClass:"recent-title"},[t._v(" 最近阅读 ")]),a("div",{staticClass:"reading-recent"},[a("el-tag",{staticClass:"recent-book",class:{"no-point":""==t.readingRecent.url},attrs:{type:"warning"},on:{click:function(e){return t.toDetail(t.readingRecent.url,t.readingRecent.name)}}},[t._v(" "+t._s(t.readingRecent.name)+" ")])],1)]),a("div",{staticClass:"setting-wrapper"},[a("div",{staticClass:"setting-title"},[t._v(" 基本设定 ")]),a("div",{staticClass:"setting-item"},[a("el-tag",{staticClass:"setting-connect",class:{"no-point":t.newConnect},attrs:{type:t.connectType},on:{click:t.setIP}},[t._v(" "+t._s(t.connectStatus)+" ")])],1)]),a("div",{staticClass:"bottom-icons"},[a("a",{attrs:{href:"https://github.com/zsakvo/web-yuedu",target:"_blank"}},[a("div",{staticClass:"bottom-icon"},[a("img",{attrs:{src:s("fa39"),alt:""}})])])])]),a("div",{ref:"shelfWrapper",staticClass:"shelf-wrapper"},[a("div",{staticClass:"books-wrapper"},[a("div",{staticClass:"wrapper"},t._l(t.shelf,(function(e){return a("div",{key:e.noteUrl,staticClass:"book",on:{click:function(s){return t.toDetail(e.bookInfoBean.noteUrl,e.bookInfoBean.name)}}},[a("div",{staticClass:"cover-img"},[a("img",{staticClass:"cover",attrs:{src:e.customCoverPath||e.bookInfoBean.coverUrl||s("7e43"),alt:""}})]),a("div",{staticClass:"info",on:{click:function(s){return t.toDetail(e.bookInfoBean.noteUrl,e.bookInfoBean.name)}}},[a("div",{staticClass:"name"},[t._v(t._s(e.bookInfoBean.name))]),a("div",{staticClass:"sub"},[a("div",{staticClass:"author"},[t._v(" "+t._s(e.bookInfoBean.author)+" ")]),a("div",{staticClass:"dot"},[t._v("•")]),a("div",{staticClass:"size"},[t._v("共"+t._s(e.chapterListSize)+"章")])]),a("div",{staticClass:"dur-chapter"},[t._v("已读："+t._s(e.durChapterName))]),a("div",{staticClass:"last-chapter"},[t._v("最新："+t._s(e.lastChapterName))])])])})),0)])])])},n=[],o=(s("7b5b"),s("bc3a")),i=s.n(o),r={data:function(){return{search:"",readingRecent:{name:"尚无阅读记录",url:""}}},mounted:function(){var t=localStorage.getItem("readingRecent");if(null!=t&&(this.readingRecent=JSON.parse(t)),0==this.shelf.length)if(localStorage.url){this.loading=this.$loading({target:this.$refs.shelfWrapper,lock:!0,text:"正在获取书籍信息",spinner:"el-icon-loading",background:"rgb(247,247,247)"});var e=this;i.a.get("http://"+localStorage.url+"/getBookshelf",{timeout:3e3}).then((function(t){e.loading.close(),e.$store.commit("setConnectType","success"),e.$store.commit("increaseBookNum",t.data.data.length),e.$store.commit("addBooks",t.data.data),e.$store.commit("setConnectStatus","已连接 "+localStorage.url),e.$store.commit("setNewConnect",!1)})).catch((function(t){throw e.loading.close(),e.$store.commit("setConnectType","danger"),e.$store.commit("setConnectStatus","点击设置后端 url 与 端口"),e.$message.error("后端连接失败"),e.$store.commit("setNewConnect",!1),t}))}else this.$message.error("请先设置后端 url 与端口"),this.$store.commit("setConnectStatus","点击设置后端 url 与 端口"),this.$store.commit("setNewConnect",!1),this.$store.commit("setConnectType","danger")},methods:{setIP:function(){var t=this,e=this;this.$prompt("请输入 IP 和端口 ( 如：127.0.0.1:9527 )","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^((2[0-4]\d|25[0-5]|[1]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[1]?\d\d?):([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-6][0-5][0-5][0-3][0-5])$/,inputErrorMessage:"url 形式不正确",beforeClose:function(t,s,a){"confirm"===t?(e.$store.commit("setNewConnect",!0),s.confirmButtonLoading=!0,s.confirmButtonText="校验中……",i.a.get("http://"+s.inputValue+"/getBookshelf",{timeout:3e3}).then((function(t){s.confirmButtonLoading=!1,e.$store.commit("increaseBookNum",t.data.data.length),e.$store.commit("addBooks",t.data.data),e.$store.commit("setConnectType","success"),e.$store.commit("setConnectStatus","已连接 "+localStorage.url),e.$store.commit("setNewConnect",!1),a()})).catch((function(t){throw s.confirmButtonLoading=!1,s.confirmButtonText="确定",e.$message.error("访问失败，请检查您输入的 url"),e.$store.commit("setNewConnect",!1),t}))):a()}}).then((function(e){var s=e.value;localStorage.url=s,t.$message({type:"success",message:"与"+s+"连接成功"})})).catch((function(){}))},toDetail:function(t,e){sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",e),this.readingRecent={name:e,url:t},localStorage.setItem("readingRecent",JSON.stringify(this.readingRecent)),this.$router.push({path:"/chapter"})}},computed:{shelf:function(){return this.$store.state.shelf},connectStatus:function(){return this.$store.state.connectStatus},connectType:function(){return this.$store.state.connectType},newConnect:function(){return this.$store.state.newConnect}}},c=r,l=(s("3914"),s("2877")),u=Object(l["a"])(c,a,n,!1,null,"006406a4",null);e["default"]=u.exports},df2f:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],o=s("2877"),i={},r=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=r.exports},fa39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg=="}}]);