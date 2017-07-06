webpackJsonp([7],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(244),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'songListDetails',
  components: {},
  created: function created() {
    this.$store.dispatch('get_albums', this.$route.params.id);
  },

  computed: {
    albums: function albums() {
      return this.$store.state.albums;
    }
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".backgroundRed{background-color:#f33}.mx_flex{display:-webkit-box;display:-webkit-flex;display:flex}.mx_flex_content{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mx_flex_mid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mx_brbox{box-sizing:border-box}.mx_more_ellipsis{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mx_more_ellipsis,.mx_single_ellipsis{overflow:hidden;text-overflow:ellipsis}.mx_single_ellipsis{white-space:nowrap}.halfBorder{position:relative}.halfBorder:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-bottom:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}#albumsListDetails .header{width:100%;height:auto;background:-webkit-linear-gradient(left,#dcdcdc,#666);background:linear-gradient(left,#dcdcdc,#666)}#albumsListDetails .header-title{position:relative;width:100%;height:.45rem;line-height:.45rem;font-size:.16rem;color:#fff;text-align:center}#albumsListDetails .header-title .icon-left{font-size:.22rem;color:#fff;position:absolute;top:0;left:5%}#albumsListDetails .header-title .icon-music{font-size:.22rem;color:#fff;position:absolute;top:0;right:5%}#albumsListDetails .header-contxt{padding:.1rem 5% 0;width:90%;font-size:0}#albumsListDetails .header-contxt-l{position:relative;display:inline-block;vertical-align:top;width:40%}#albumsListDetails .header-contxt-l img{display:block;width:90%}#albumsListDetails .header-contxt-l .icon-headset{position:absolute;top:.05rem;right:13%;font-size:.12rem;color:#fff}#albumsListDetails .header-contxt-l .icon-mxclt{position:absolute;bottom:.05rem;right:13%;font-size:.16rem;color:#fff}#albumsListDetails .header-contxt-r{display:inline-block;vertical-align:top;width:60%}#albumsListDetails .header-contxt-r div{width:100%;height:auto;line-height:1;font-size:.12rem;color:#fff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.1rem}#albumsListDetails .header-contxt-r p{font-size:.16rem;color:#fff;padding:5% 0}#albumsListDetails .header-contxt-r img{border-radius:50%;width:15%}#albumsListDetails .header-contxt-r span{font-size:.12rem;color:#ccc}#albumsListDetails .header-contxt-r span i{font-size:.12rem;color:#fff}#albumsListDetails .header-contxt-r .icon-right{font-size:.14rem;color:#ccc}#albumsListDetails .header-footer{font-size:0;text-align:center;padding:.1rem 5% .05rem;display:-webkit-box;display:-webkit-flex;display:flex}#albumsListDetails .header-footer span{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-flex:1;min-width:0}#albumsListDetails .header-footer span i{font-size:.2rem;color:#fff}#albumsListDetails .header-footer span p{padding-top:.07rem;font-size:.12rem;color:#fff}#albumsListDetails .songList ul li{width:100%;height:.4rem;line-height:.4rem;padding:.05rem 0;font-size:0}#albumsListDetails .songList ul li i{display:inline-block;vertical-align:top;font-size:.12rem;color:#666;width:15%;height:.4rem;line-height:.4rem;text-align:center}#albumsListDetails .songList ul li span{display:inline-block;vertical-align:top;width:85%;height:.4rem;line-height:.4rem;text-align:left}#albumsListDetails .songList ul li p{font-size:.14rem;color:#333;width:85%;height:.2rem;line-height:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#albumsListDetails .songList ul li s{display:block;text-decoration:none;font-size:.12rem;color:#ccc;width:85%;height:.2rem;line-height:.2rem}", ""]);

// exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("43ed79e6", content, true);

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "albumsListDetails"
    }
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-title"
  }, [_c('i', {
    staticClass: "iconfont icon-left",
    on: {
      "click": _vm.goBack
    }
  }), _vm._v(" 专辑\n      "), _c('i', {
    staticClass: "iconfont icon-music"
  })]), _vm._v(" "), _c('div', {
    staticClass: "header-contxt"
  }, [_c('div', {
    staticClass: "header-contxt-l"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.albums.album.picUrl),
      expression: "albums.album.picUrl"
    }]
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-mxclt"
  })]), _vm._v(" "), _c('div', {
    staticClass: "header-contxt-r"
  }, [_c('p', [_vm._v(_vm._s(_vm.albums.album.name))]), _vm._v(" "), _c('div', [_c('span', [_vm._v("歌手 : "), _c('i', [_vm._v(_vm._s(_vm.albums.album.artist.name))])]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-right"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "header-footer"
  }, [_c('span', [_c('i', {
    staticClass: "icon-noCollect iconfont"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.albums.album.info.likedCount))])]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "iconfont icon-comments"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.albums.album.info.commentCount))])]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "iconfont icon-forwarding"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.albums.album.info.shareCount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "songList"
  }, [_c('ul', _vm._l((_vm.albums.songs), function(item, i) {
    return _c('router-link', {
      key: i,
      attrs: {
        "tag": "li",
        "to": {
          name: 'songDetails',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('i', [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c('span', {
      staticClass: "halfBorder"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('s', [_vm._v(_vm._s(item.ar[0].name))])])])
  }))])])
},staticRenderFns: []}

/***/ })

});