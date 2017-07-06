webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  set_userId: function set_userId(state, payload) {
    state.userUid = payload;
  },
  set_isLoading: function set_isLoading(state, payload) {
    state.isLoading = payload;
  },
  set_songListDetails: function set_songListDetails(state, payload) {
    state.songListDetails = payload;
  },
  set_playList: function set_playList(state, payload) {
    state.playList = payload;
  },
  set_cloudMusicTopList: function set_cloudMusicTopList(state, payload) {
    if (payload == '') {
      state.cloudMusicNewTopList = {
        id: 1
      };
      state.cloudMusicHotTopList = {
        id: 1
      };
      state.cloudMusicUpTopList = {
        id: 1
      };
      state.cloudMusicEleTopList = {
        id: 1
      };
    } else {
      if (payload.type == 0) {
        state.cloudMusicNewTopList = payload.result;
      } else if (payload.type == 1) {
        state.cloudMusicHotTopList = payload.result;
      } else if (payload.type == 3) {
        state.cloudMusicUpTopList = payload.result;
      } else {
        state.cloudMusicEleTopList = payload.result;
      }
    }
  },
  set_djListDetails: function set_djListDetails(state, payload) {
    state.djListDetails = payload;
  },
  set_searchList: function set_searchList(state, payload) {
    state.searchList = payload;
  },
  set_singerSong: function set_singerSong(state, payload) {
    state.singerSong = payload;
  },
  set_Singeralbums: function set_Singeralbums(state, payload) {
    state.Singeralbums = payload;
  },
  set_albums: function set_albums(state, payload) {
    state.albums = payload;
  }
});

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  songListDetails: {
    'picUrl': '',
    'playCount': 0,
    'name': '',
    'creator': {
      'avatarUrl': ''
    },
    'tracks': []
  },

  playList: [],

  cloudMusicNewTopList: [],

  cloudMusicHotTopList: [],

  cloudMusicUpTopList: [],

  cloudMusicEleTopList: [],

  djListDetails: [],

  searchList: [],

  singerSong: {
    'artist': {
      'picUrl': '',
      'name': ''
    }
  },

  Singeralbums: {},

  albums: {
    'album': {
      'picUrl': '',
      'name': '',
      'info': {
        'likedCount': '',
        'commentCount': '',
        'shareCount': ''
      },
      'artist': {
        'name': ''
      }
    }
  },

  isLoading: false
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'loading',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  created: function created() {
    this.show = this.value;
  },
  data: function data() {
    return {
      show: false
    };
  },

  watch: {
    value: function value(val) {
      this.show = val;
    },
    show: function show(val) {
      this.$emit('input', val);
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_music__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_music___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_music_music__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    music: __WEBPACK_IMPORTED_MODULE_0__components_music_music___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue___default.a
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.state.isLoading;
    }
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(35);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'music',
  data: function data() {
    return {};
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])({
    musicUrl: function musicUrl(state) {
      return state.playSongs.musicUrl;
    },

    playStatus: function playStatus(state) {
      return state.playSongs.playStatus;
    },

    curMusic: function curMusic(state) {
      return state.playSongs.curMusic;
    },

    songListDetails: function songListDetails(state) {
      return state.songListDetails.tracks;
    }
  })),
  methods: {
    playMusic: function playMusic() {
      this.$store.commit('set_playStatus', true);
    },
    setCurTime: function setCurTime() {
      this.$store.commit('set_musicCurtime', this.$refs.player.currentTime);
    },
    initMusicStatus: function initMusicStatus() {
      var _this = this;

      if (this.songListDetails.length > 0) {
        var obj = {
          id: this.$route.params.id,
          type: 'next'
        };
        this.$store.dispatch('go_SwitchSongs', obj).then(function (res) {
          if (res == false) {
            _this.$refs.player.pause();
            _this.$store.commit('set_playStatus', false);
            _this.$store.commit('set_musicCurtime', 0);
          } else {
            _this.$store.dispatch('get_PlaySongDetails', res);
            _this.$router.push({
              name: 'songDetails',
              params: {
                id: res
              }
            });
          }
        });
      } else {
        this.$refs.player.pause();
        this.$store.commit('set_playStatus', false);
        this.$store.commit('set_musicCurtime', 0);
      }
    },
    setDuration: function setDuration() {
      this.$store.commit('set_musicDuration', this.$refs.player.duration);
    }
  },
  watch: {
    playStatus: function playStatus(state) {
      var _this2 = this;

      if (state == true) {
        this.$nextTick(function () {
          _this2.$refs.player.play();
        });
      } else {
        this.$refs.player.pause();
      }
    },
    musicUrl: function musicUrl(val, oldval) {
      var _this3 = this;

      if (oldval != '') {
        this.$nextTick(function () {
          _this3.$store.commit('set_playStatus', true);
          _this3.$refs.player.play();
        });
      }
    }
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "vux-mask"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-loading_toast"
  }, [_c('div', {
    staticClass: "weui-mask_transparent"
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-toast",
    style: ({
      position: _vm.position
    })
  }, [_c('i', {
    staticClass: "weui-loading weui-icon_toast"
  }), _vm._v(" "), _c('p', {
    staticClass: "weui-toast__content"
  }, [_vm._v(_vm._s(_vm.text || '加载中')), _vm._t("default")], 2)])])])
},staticRenderFns: []}

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "music"
    }
  }, [_c('audio', {
    ref: "player",
    attrs: {
      "id": "musicPlayer",
      "src": _vm.musicUrl
    },
    on: {
      "timeupdate": _vm.setCurTime,
      "ended": _vm.initMusicStatus,
      "durationchange": _vm.setDuration,
      "canplay": _vm.playMusic
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('music'), _vm._v(" "), _c('loading', {
    model: {
      value: (_vm.isLoading),
      callback: function($$v) {
        _vm.isLoading = $$v
      },
      expression: "isLoading"
    }
  }), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(131)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)


module.exports = Component.exports


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiList__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__apiList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querystring__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_querystring__);




var _this = this;





var opera_req = function opera_req(data) {
  return __WEBPACK_IMPORTED_MODULE_5_querystring___default.a.stringify(data);
};

var opera_res = function opera_res(data) {
  return data;
};

/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(pathName, queryData) {
    var str, url, result, resdata;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            str = "https://bird.ioliu.cn/v1?url=http://47.94.80.168:3000";
            url = str.concat(__WEBPACK_IMPORTED_MODULE_3__apiList___default.a[pathName]);
            result = void 0;

            if (!(queryData != null)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url, {
              params: queryData
            });

          case 6:
            result = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default()(url);

          case 11:
            result = _context.sent;

          case 12:
            resdata = opera_res(result);
            return _context.abrupt('return', new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              resolve(resdata);
            }));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(143);


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var recommend = function recommend(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(150));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var songListDetails = function songListDetails(r) {
  return __webpack_require__.e/* require.ensure */(6).then((function () {
    return r(__webpack_require__(154));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var songDetails = function songDetails(r) {
  return __webpack_require__.e/* require.ensure */(5).then((function () {
    return r(__webpack_require__(153));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var songList = function songList(r) {
  return __webpack_require__.e/* require.ensure */(2).then((function () {
    return r(__webpack_require__(155));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var topList = function topList(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__(156));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var searchList = function searchList(r) {
  return __webpack_require__.e/* require.ensure */(3).then((function () {
    return r(__webpack_require__(151));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var singer = function singer(r) {
  return __webpack_require__.e/* require.ensure */(4).then((function () {
    return r(__webpack_require__(152));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var albumsListDetails = function albumsListDetails(r) {
  return __webpack_require__.e/* require.ensure */(7).then((function () {
    return r(__webpack_require__(149));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    name: 'recommend',
    component: recommend
  }, {
    path: '/songListDetails/:id',
    name: 'songListDetails',
    component: songListDetails
  }, {
    path: '/songDetails/:id',
    name: 'songDetails',
    component: songDetails
  }, {
    path: '/songList',
    name: 'songList',
    component: songList
  }, {
    path: '/topList',
    name: 'topList',
    component: topList
  }, {
    path: '/searchList',
    name: 'searchList',
    component: searchList
  }, {
    path: '/singer/:id',
    name: 'singer',
    component: singer
  }, {
    path: '/albumsListDetails/:id',
    name: 'albumsListDetails',
    component: albumsListDetails
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
}));

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_recommend__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_playSongs__ = __webpack_require__(92);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */],
  modules: {
    recommend: __WEBPACK_IMPORTED_MODULE_6__modules_recommend__["a" /* default */],
    playSongs: __WEBPACK_IMPORTED_MODULE_7__modules_playSongs__["a" /* default */]
  }
}));

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  formatPlayCount: function formatPlayCount(val) {
    var num = parseInt(val / 10000);
    if (num >= 10) {
      return num + '万';
    } else {
      return parseInt(val);
    }
  },
  formatLyric: function formatLyric(val) {
    var ary = val.split('\n');
    if (ary.length > 0) {
      for (var i = 0; i < ary.length; i++) {
        ary[i] = ary[i].split(']');
      }
      if (ary.length > 0 && ary[0][1] == '获取歌词失败!') {
        var noLyBox = [['[00:00.00', '获取歌词失败!']];
        noLyBox[0][0] = this.formatLyricTime(noLyBox[0][0]);
        return noLyBox;
      }
      for (var _i = 0; _i < ary.length; _i++) {
        for (var j = 0; j < ary[_i].length; j++) {
          if (ary[_i][j].indexOf('[') >= 0) {
            ary[_i][j] = this.formatLyricTime(ary[_i][j]);
          }
        }
      }
      var arys = [];
      for (var _i2 = 0; _i2 < ary.length; _i2++) {
        if (ary[_i2].length == 2) {
          arys.push(ary[_i2]);
        } else if (ary[_i2].length >= 3) {
          for (var _j = 0; _j < ary[_i2].length - 1; _j++) {
            var itemBox = [];
            itemBox[0] = ary[_i2][_j];
            itemBox[1] = ary[_i2][ary[_i2].length - 1];
            arys.push(itemBox);
          }
        }
      }
      arys.sort(function (a, b) {
        return a[0] - b[0];
      });
      for (var _i3 = 0; _i3 < arys.length; _i3++) {
        if (arys[_i3][0] == '' || arys[_i3][1] == '') {
          arys.splice(_i3, 1);
          _i3 = _i3 - 1;
        }
      }
      return arys;
    }
  },
  formatLyricTime: function formatLyricTime(val) {
    var min = val.substr(1, 2);
    var second = val.substr(4, 2);
    var msec = val.substr(7, 2);
    min < 10 ? min = min.substr(1, 1) : min;
    min = min * 60;
    return min + parseInt(second) + msec / 100;
  },
  formatLyrichighBright: function formatLyrichighBright(val, box, index) {
    if (index != box.length - 1) {
      if (val >= box[index][0] && val <= box[index + 1][0]) {
        return true;
      } else {
        return false;
      }
    } else {
      if (val >= box[index][0]) {
        return true;
      }
    }
  },
  compLyricPos: function compLyricPos(val, box) {
    if (box[0][1]) {
      if (box[0][1] == "获取歌词失败!" || box[0][1] == "歌词加载中!") {
        return .6 + 'rem';
      }
    }
    if (box.length > 1) {
      for (var i = 0; i < box.length; i++) {
        if (val >= box[i][0] && val <= box[i + 1][0]) {
          return .6 - .3 * i + 'rem';
        } else if (val >= box[box.length - 1][0]) {
          return .6 - .3 * (box.length - 1) + 'rem';
        }
      }
    }
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/img/404nofind.3b1631e.jpg";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/img/loading.1b74fda.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(132)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

var apiList = {
  queryPhoneLogin: '/login/cellphone',

  queryUserSubcount: '/user/playlist',

  queryBanner: '/banner',

  queryPrSongList: "/personalized",

  queryPrivateContxt: "/personalized/privatecontent",

  queryNewSong: "/personalized/newsong",

  queryPrMv: "/personalized/mv",

  queryPrBCStation: "/personalized/djprogram",

  queryHighquality: "/top/playlist/highquality",

  queryPlayList: "/top/playlist",

  queryToplist: "/top/list",

  querySongListDetail: '/playlist/detail',

  querySongDetail: '/song/detail',

  queryMusicUrl: "/music/url",

  queryLyric: "/lyric",

  queryDjSub: "/dj/program",

  querySearch: "/search",

  querySingerSong: "/artists",

  querySingerAlbums: "/artist/album",

  queryAlbums: "/album"
};
module.exports = apiList;

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_lazyload__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__(51);

var FastClick = __webpack_require__(52);
FastClick.attach(document.body);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_lazyload___default.a, {
  error: __webpack_require__(53),
  loading: __webpack_require__(54),
  attempt: 1
});
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.format = __WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* default */];
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_getData__ = __webpack_require__(22);



/* harmony default export */ __webpack_exports__["a"] = ({
  get_songListDetails: function get_songListDetails(context, payload) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context.commit('set_isLoading', true);
              _context.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('querySongListDetail', payload);

            case 3:
              res = _context.sent;

              context.commit('set_songListDetails', res.data.playlist);
              context.commit('set_isLoading', false);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  get_playList: function get_playList(context, payload) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res, _res;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              context.commit('set_isLoading', true);

              if (!(payload == 'Boutique')) {
                _context2.next = 8;
                break;
              }

              _context2.next = 4;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryHighquality');

            case 4:
              res = _context2.sent;

              context.commit('set_playList', res.data.playlists);
              _context2.next = 12;
              break;

            case 8:
              _context2.next = 10;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryPlayList', {
                'order': payload
              });

            case 10:
              _res = _context2.sent;

              context.commit('set_playList', _res.data.playlists);

            case 12:
              context.commit('set_isLoading', false);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  get_cloudMusicTopList: function get_cloudMusicTopList(context, payload) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var indexAry, i, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              indexAry = [0, 1, 3, 4];

              context.commit('set_cloudMusicTopList', '');
              i = 0;

            case 3:
              if (!(i < indexAry.length)) {
                _context3.next = 11;
                break;
              }

              _context3.next = 6;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryToplist', {
                idx: indexAry[i]
              });

            case 6:
              res = _context3.sent;

              context.commit('set_cloudMusicTopList', {
                'result': res.data.result,
                'type': indexAry[i]
              });

            case 8:
              i++;
              _context3.next = 3;
              break;

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  get_djListDetails: function get_djListDetails(context, payload) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryDjSub', {
                rid: payload
              });

            case 2:
              res = _context4.sent;

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  get_SearchList: function get_SearchList(context, payload) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              context.commit('set_isLoading', true);
              _context5.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('querySearch', payload);

            case 3:
              res = _context5.sent;

              context.commit('set_searchList', res.data.result);
              context.commit('set_isLoading', false);

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  },
  get_singerSong: function get_singerSong(context, payload) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              context.commit('set_isLoading', true);
              _context6.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('querySingerSong', {
                id: payload
              });

            case 3:
              res = _context6.sent;

              context.commit('set_singerSong', res.data);
              context.commit('set_isLoading', false);

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  },
  get_singerAlbums: function get_singerAlbums(context, payload) {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              context.commit('set_isLoading', true);
              _context7.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('querySingerAlbums', {
                id: payload
              });

            case 3:
              res = _context7.sent;

              context.commit('set_Singeralbums', res.data);
              context.commit('set_isLoading', false);

            case 6:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7);
    }))();
  },
  get_albums: function get_albums(context, payload) {
    var _this8 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              context.commit('set_isLoading', true);
              _context8.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryAlbums', {
                id: payload
              });

            case 3:
              res = _context8.sent;

              context.commit('set_albums', res.data);
              context.commit('set_isLoading', false);

            case 6:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8);
    }))();
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_getData__ = __webpack_require__(22);



/* harmony default export */ __webpack_exports__["a"] = ({
  get_musicUrl: function get_musicUrl(context, payload) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryMusicUrl', {
                id: payload
              });

            case 2:
              res = _context.sent;

              if (context.state.curMusic == '' || context.state.curMusic != payload) {
                context.commit('set_musicUrl', res.data.data[0].url);
                context.commit('set_curMusic', payload);
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  get_songDetails: function get_songDetails(context, payload) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('querySongDetail', payload);

            case 2:
              res = _context2.sent;

              context.commit('set_songDetails', res.data);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  get_Lyric: function get_Lyric(context, payload) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryLyric', payload);

            case 2:
              res = _context3.sent;

              if (res.data.lrc != undefined) {
                context.commit('set_Lyric', res.data.lrc.lyric);
              } else {
                context.commit('set_Lyric', '[00:00.00]获取歌词失败!');
              }

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  get_PlaySongDetails: function get_PlaySongDetails(context, payload) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              context.dispatch('get_musicUrl', payload);
              context.dispatch('get_songDetails', {
                ids: payload
              });
              context.dispatch('get_Lyric', {
                id: payload
              });

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  go_SwitchSongs: function go_SwitchSongs(context, payload) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var songList, status, i;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              songList = context.rootState.songListDetails.tracks;
              status = false;

              if (!(songList.length > 0)) {
                _context5.next = 25;
                break;
              }

              i = 0;

            case 4:
              if (!(i < songList.length)) {
                _context5.next = 23;
                break;
              }

              if (!(songList[i].id == payload.id)) {
                _context5.next = 20;
                break;
              }

              if (!(payload.type == 'prev')) {
                _context5.next = 14;
                break;
              }

              if (!(i == 0)) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt('return', songList[songList.length - 1].id);

            case 11:
              return _context5.abrupt('return', songList[i - 1].id);

            case 12:
              _context5.next = 19;
              break;

            case 14:
              if (!(i == songList.length - 1)) {
                _context5.next = 18;
                break;
              }

              return _context5.abrupt('return', songList[0].id);

            case 18:
              return _context5.abrupt('return', songList[i + 1].id);

            case 19:
              status = true;

            case 20:
              i++;
              _context5.next = 4;
              break;

            case 23:
              if (!(status == false)) {
                _context5.next = 25;
                break;
              }

              return _context5.abrupt('return', false);

            case 25:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  }
});

/***/ }),

/***/ 91:
/***/ (function(module, exports) {



/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__getters__);




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_1__mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_3__getters___default.a
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  set_songDetails: function set_songDetails(state, payload) {
    state.songDetails = payload;
  },
  set_musicUrl: function set_musicUrl(state, payload) {
    state.musicUrl = payload;
  },
  set_curMusic: function set_curMusic(state, payload) {
    state.curMusic = payload;
  },
  set_musicDuration: function set_musicDuration(state, payload) {
    state.musicDuration = payload;
  },
  set_musicCurtime: function set_musicCurtime(state, payload) {
    state.musicCurtime = payload;
  },
  set_Lyric: function set_Lyric(state, payload) {
    state.Lyric = payload;
  },
  set_playStatus: function set_playStatus(state, payload) {
    state.playStatus = payload;
  },
  set_songListStatus: function set_songListStatus(state, payload) {
    state.songListStatus = payload;
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  songDetails: {
    songs: [{
      al: {
        picUrl: ''
      },
      ar: [{
        name: ''
      }],
      name: ''
    }]
  },

  Lyric: '[00:00.00]歌词加载中!',

  musicUrl: '',

  playStatus: false,

  musicDuration: 0,

  musicCurtime: 0,

  curMusic: '',

  songListStatus: false
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_getData__ = __webpack_require__(22);



/* harmony default export */ __webpack_exports__["a"] = ({
  initRecommendPage: function initRecommendPage(context) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context.dispatch('get_Recommend_Banner');

              context.dispatch('get_Recommend_PrSongList');

              context.dispatch('get_Recommend_PrivateContxt');

              context.dispatch('get_Recommend_PrMV');

              context.dispatch('get_Recommend_PrBCStation');

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  get_Recommend_Banner: function get_Recommend_Banner(context) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryBanner');

            case 2:
              res = _context2.sent;

              context.commit('set_Recommend_Banner', res.data.banners);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  get_Recommend_PrSongList: function get_Recommend_PrSongList(context) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryPrSongList');

            case 2:
              res = _context3.sent;

              context.commit('set_Recommend_PrSongList', res.data.result);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  get_Recommend_PrivateContxt: function get_Recommend_PrivateContxt(context) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryPrivateContxt');

            case 2:
              res = _context4.sent;

              context.commit('set_Recommend_PrivateContxt', res.data.result);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  get_Recommend_PrNewSong: function get_Recommend_PrNewSong(context) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryNewSong');

            case 2:
              res = _context5.sent;

              context.commit('set_Recommend_PrNewSong', res.data.result);

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  },
  get_Recommend_PrMV: function get_Recommend_PrMV(context) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryPrMv');

            case 2:
              res = _context6.sent;

              context.commit('set_Recommend_PrMV', res.data.result);

            case 4:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  },
  get_Recommend_PrBCStation: function get_Recommend_PrBCStation(context) {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_getData__["a" /* default */])('queryPrBCStation');

            case 2:
              res = _context7.sent;

              context.commit('set_Recommend_PrBCStation', res.data.result);

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7);
    }))();
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports) {



/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__getters__);




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_1__mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_3__getters___default.a
});

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  set_Recommend_Banner: function set_Recommend_Banner(state, payload) {
    state.bannerList = payload;
  },
  set_Recommend_PrSongList: function set_Recommend_PrSongList(state, payload) {
    state.PrSongList = payload;
  },
  set_Recommend_PrivateContxt: function set_Recommend_PrivateContxt(state, payload) {
    state.PrivateContxt = payload;
  },
  set_Recommend_PrNewSong: function set_Recommend_PrNewSong(state, payload) {
    state.PrNewSong = payload;
  },
  set_Recommend_PrMV: function set_Recommend_PrMV(state, payload) {
    state.PrMV = payload;
  },
  set_Recommend_PrBCStation: function set_Recommend_PrBCStation(state, payload) {
    state.PrBCStation = payload;
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bannerList: [],

  PrSongList: [],

  PrivateContxt: [],

  PrNewSong: [],

  PrMV: [],

  PrBCStation: []
});

/***/ })

},[87]);