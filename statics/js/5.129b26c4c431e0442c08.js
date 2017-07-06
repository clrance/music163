webpackJsonp([5],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/img/cd-wrapper.99bfb20.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/img/play-controler.98d5134.png";

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  computed: {
    songListStatus: function songListStatus() {
      return this.$store.state.playSongs.songListStatus;
    },
    songListDetails: function songListDetails() {
      return this.$store.state.songListDetails.tracks;
    },
    curMusic: function curMusic() {
      return this.$store.state.playSongs.curMusic;
    }
  },
  methods: {
    switchSongs: function switchSongs(id) {
      this.$store.dispatch('get_PlaySongDetails', id);
      this.$router.push({
        name: 'songDetails',
        params: {
          id: id
        }
      });
    },
    closeSongList: function closeSongList() {
      this.$store.commit('set_songListStatus', false);
    }
  }
});

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(35);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'player',
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])({
    playStatus: function playStatus(state) {
      return state.playSongs.playStatus;
    },

    musicCurtime: function musicCurtime(state) {
      return state.playSongs.musicCurtime;
    },

    musicDuration: function musicDuration(state) {
      return state.playSongs.musicDuration;
    },

    songListDetails: function songListDetails(state) {
      return state.songListDetails.tracks;
    }
  }), {
    progressWidth: function progressWidth() {
      var per = (this.musicCurtime / this.musicDuration).toFixed(3);
      return per * 100 + '%';
    }
  }),
  methods: {
    goPrevSongs: function goPrevSongs() {
      var _this = this;

      if (this.songListDetails.length > 0) {
        var obj = {
          id: this.$route.params.id,
          type: 'prev'
        };
        this.$store.dispatch('go_SwitchSongs', obj).then(function (res) {
          _this.$store.dispatch('get_PlaySongDetails', res);
          _this.$router.push({
            name: 'songDetails',
            params: {
              id: res
            }
          });
        });
      }
    },
    goNextSongs: function goNextSongs() {
      var _this2 = this;

      if (this.songListDetails.length > 0) {
        var obj = {
          id: this.$route.params.id,
          type: 'next'
        };
        this.$store.dispatch('go_SwitchSongs', obj).then(function (res) {
          _this2.$store.dispatch('get_PlaySongDetails', res);
          _this2.$router.push({
            name: 'songDetails',
            params: {
              id: res
            }
          });
        });
      }
    },
    openSongList: function openSongList() {
      this.$store.commit('set_songListStatus', true);
    },
    formatTime: function formatTime(time) {
      var min = parseInt(time / 60);
      var second = parseInt(time % 60);
      min < 10 ? min = "0" + min : min;
      second < 10 ? second = "0" + second : second;
      return "" + min + ":" + second + "";
    },
    togglePlayStatus: function togglePlayStatus() {
      this.$store.commit('set_playStatus', !this.playStatus);
    },
    changeProgress: function changeProgress(event) {
      var ev = event || window.event;

      var num = event.touches[0].clientX - event.target.parentNode.offsetLeft;
      var max = event.target.parentNode.offsetWidth;
      num > max ? num = max : num;
      num < 0 ? num = 0 : num;
      num = num / max * this.musicDuration.toFixed(3);
      document.getElementById('musicPlayer').currentTime = num;
    }
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__children_player__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__children_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__children_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bottomSongList_bottomSongList__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bottomSongList_bottomSongList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_bottomSongList_bottomSongList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(35);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'songDetails',
  data: function data() {
    return {
      showLyric: false
    };
  },

  components: {
    player: __WEBPACK_IMPORTED_MODULE_1__children_player___default.a,
    bottomSongList: __WEBPACK_IMPORTED_MODULE_2__components_bottomSongList_bottomSongList___default.a
  },
  created: function created() {
    this.$store.dispatch('get_PlaySongDetails', this.$route.params.id);
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* mapState */])({
    playStatus: function playStatus(state) {
      return state.playSongs.playStatus;
    },

    musicCurtime: function musicCurtime(state) {
      return state.playSongs.musicCurtime;
    },

    songDetails: function songDetails(state) {
      return state.playSongs.songDetails;
    }
  }), {
    Lyric: function Lyric() {
      return this.format.formatLyric(this.$store.state.playSongs.Lyric);
    }
  }),
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".backgroundRed{background-color:#f33}.mx_flex{display:-webkit-box;display:-webkit-flex;display:flex}.mx_flex_content{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mx_flex_mid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mx_brbox{box-sizing:border-box}.mx_more_ellipsis{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mx_more_ellipsis,.mx_single_ellipsis{overflow:hidden;text-overflow:ellipsis}.mx_single_ellipsis{white-space:nowrap}.halfBorder{position:relative}.halfBorder:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-bottom:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}#bottomSongList{width:100%;height:70%;background:#fff;position:absolute;bottom:0;left:0;z-index:99999999}#bottomSongList .headerTitle{position:absolute;top:0;left:0}#bottomSongList .closeSongList,#bottomSongList .headerTitle{width:100%;height:10%;font-size:.16rem;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:999999}#bottomSongList .SongListContxt{margin-top:.45rem;width:100%;height:80%;overflow-y:scroll}#bottomSongList .SongListContxt li{width:95%;height:.42rem;line-height:.42rem;margin-left:5%;font-size:.14rem;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#bottomSongList .SongListContxt li s{text-decoration:none;font-size:.12rem;color:#666}#bottomSongList .SongListContxt .redLight{color:#f33}#bottomSongList .closeSongList{background:#fff;position:absolute;bottom:0;left:0}#bottomSongList .closeSongList:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-top:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}", ""]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".backgroundRed{background-color:#f33}.mx_flex{display:-webkit-box;display:-webkit-flex;display:flex}.mx_flex_content{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mx_flex_mid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mx_brbox{box-sizing:border-box}.mx_more_ellipsis{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mx_more_ellipsis,.mx_single_ellipsis{overflow:hidden;text-overflow:ellipsis}.mx_single_ellipsis{white-space:nowrap}.halfBorder{position:relative}.halfBorder:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-bottom:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}#songDetails{position:fixed;width:100%;height:100%}#songDetails .masking{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-3}#songDetails .masking .cover-bg,#songDetails .masking .cover-masking{position:absolute;top:0;left:0;bottom:0;width:100%;height:100%}#songDetails .masking .cover-bg{z-index:-2;background-size:cover;background-position:50%;-webkit-filter:blur(.2rem);filter:blur(.2rem);-webkit-transform:scale(1.05);transform:scale(1.05)}#songDetails .masking .cover-masking{z-index:-1;background-color:rgba(0,0,0,.6);opacity:.6}#songDetails .header{width:100%;position:relative;text-align:center}#songDetails .header .icon-left{font-size:.23rem;color:#fff;position:absolute;top:.11rem;left:5%}#songDetails .header p{width:50%;height:.28rem;line-height:.28rem;margin:0 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.14rem;color:#fff}#songDetails .header span{display:block;width:100%;height:.16rem;line-height:.13rem;font-size:.1rem;color:#fff}#songDetails .header .bar-line{margin-top:.03rem;display:block;bottom:0;left:0;width:100%;height:1px;background:-webkit-radial-gradient(#d3d3d3 -90%,transparent 100%);background:radial-gradient(#d3d3d3 -90%,transparent 100%)}#songDetails .playContxt{width:100%;height:100%}#songDetails .playContxt .playContxt-m{overflow:hidden;position:relative;width:80%;height:70%;margin:0 auto}#songDetails .playContxt .playContxt-m .LyricBox{width:100%;height:2.7rem;margin-top:.3rem;text-align:center;overflow:hidden}#songDetails .playContxt .playContxt-m .LyricBox ul{margin-top:.6rem;-webkit-transition:.5s;transition:.5s}#songDetails .playContxt .playContxt-m .LyricBox li{font-size:.14rem;color:#999;margin-bottom:.1rem;height:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#songDetails .playContxt .playContxt-m .LyricBox .highBright{color:#fff}#songDetails .playContxt .play-controler{position:absolute;top:-.03rem;left:45%;display:block;width:1rem;height:1.4rem;background:url(" + __webpack_require__(190) + ") left -.06rem no-repeat;background-size:cover;z-index:8;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}#songDetails .playContxt .play-controler-status{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-position-y:-.12rem}#songDetails .playContxt .play-animat{-webkit-animation:playRotate 18s linear infinite;animation:playRotate 18s linear infinite}@-webkit-keyframes playRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes playRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#songDetails .playContxt .play-animat-status{-webkit-animation-play-state:paused;animation-play-state:paused}#songDetails .playContxt .cd-wrapper{position:relative;width:1.8rem;height:1.8rem;padding:.4rem;border-radius:50%;background:hsla(0,0%,42%,.3);margin:.75rem auto 0}#songDetails .playContxt .cd-wrapper img{display:block;width:100%;height:100%;border-radius:50%}#songDetails .playContxt .cd-masking{width:100%;height:100%;position:absolute;top:0;left:0;background:url(" + __webpack_require__(189) + ") 0/contain no-repeat}#songDetails #player .playContxt-btnBox{width:100%;height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.2rem}#songDetails #player .playContxt-btnBox span{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-flex:1;min-width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}#songDetails #player .playContxt-btnBox span:first-child i,#songDetails #player .playContxt-btnBox span:nth-child(5) i{font-size:.3rem;color:#fff}#songDetails #player .playContxt-btnBox span:nth-child(2) i{-webkit-transform:rotate(180deg);transform:rotate(180deg)}#songDetails #player .playContxt-btnBox span:nth-child(3) i{font-size:.55rem;color:#fff}#songDetails #player .playContxt-btnBox span i{font-size:.45rem;color:#fff}#songDetails #player .progress-box{position:relative;width:70%;height:.03rem;margin:0 auto;background:-webkit-radial-gradient(#dedede -180%,transparent 100%);background:radial-gradient(#dedede -180%,transparent 100%);border-radius:.2rem}#songDetails #player .progress-box .curTime,#songDetails #player .progress-box .duration{display:inline-block;width:.5rem;height:.12rem;line-height:.12rem;font-size:.12rem;color:#fff;text-align:center}#songDetails #player .progress-box .curTime{position:absolute;top:-.06rem;left:-.5rem}#songDetails #player .progress-box .duration{position:absolute;top:-.06rem;right:-.5rem}#songDetails #player .progress-box .progress-bar{height:100%;background-color:#f33;position:absolute;top:0;left:0}#songDetails #player .progress-box .progress-bar .progress-dot{display:block;width:.12rem;height:.12rem;border-radius:50%;position:absolute;top:-.05rem;right:0;z-index:888;background-color:#f33;-webkit-transform:translate(50%);transform:translate(50%)}#songDetails #player .progress-box .schedule{width:100%;height:400%;position:absolute;top:-200%;left:0;z-index:8888}", ""]);

// exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".backgroundRed{background-color:#f33}.mx_flex{display:-webkit-box;display:-webkit-flex;display:flex}.mx_flex_content{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mx_flex_mid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mx_brbox{box-sizing:border-box}.mx_more_ellipsis{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mx_more_ellipsis,.mx_single_ellipsis{overflow:hidden;text-overflow:ellipsis}.mx_single_ellipsis{white-space:nowrap}.halfBorder{position:relative}.halfBorder:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-bottom:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}#songDetails{position:fixed;width:100%;height:100%}#songDetails .masking{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-3}#songDetails .masking .cover-bg,#songDetails .masking .cover-masking{position:absolute;top:0;left:0;bottom:0;width:100%;height:100%}#songDetails .masking .cover-bg{z-index:-2;background-size:cover;background-position:50%;-webkit-filter:blur(.2rem);filter:blur(.2rem);-webkit-transform:scale(1.05);transform:scale(1.05)}#songDetails .masking .cover-masking{z-index:-1;background-color:rgba(0,0,0,.6);opacity:.6}#songDetails .header{width:100%;position:relative;text-align:center}#songDetails .header .icon-left{font-size:.23rem;color:#fff;position:absolute;top:.11rem;left:5%}#songDetails .header p{width:50%;height:.28rem;line-height:.28rem;margin:0 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.14rem;color:#fff}#songDetails .header span{display:block;width:100%;height:.16rem;line-height:.13rem;font-size:.1rem;color:#fff}#songDetails .header .bar-line{margin-top:.03rem;display:block;bottom:0;left:0;width:100%;height:1px;background:-webkit-radial-gradient(#d3d3d3 -90%,transparent 100%);background:radial-gradient(#d3d3d3 -90%,transparent 100%)}#songDetails .playContxt{width:100%;height:100%}#songDetails .playContxt .playContxt-m{overflow:hidden;position:relative;width:80%;height:70%;margin:0 auto}#songDetails .playContxt .playContxt-m .LyricBox{width:100%;height:2.7rem;margin-top:.3rem;text-align:center;overflow:hidden}#songDetails .playContxt .playContxt-m .LyricBox ul{margin-top:.6rem;-webkit-transition:.5s;transition:.5s}#songDetails .playContxt .playContxt-m .LyricBox li{font-size:.14rem;color:#999;margin-bottom:.1rem;height:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#songDetails .playContxt .playContxt-m .LyricBox .highBright{color:#fff}#songDetails .playContxt .play-controler{position:absolute;top:-.03rem;left:45%;display:block;width:1rem;height:1.4rem;background:url(" + __webpack_require__(190) + ") left -.06rem no-repeat;background-size:cover;z-index:8;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}#songDetails .playContxt .play-controler-status{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-position-y:-.12rem}#songDetails .playContxt .play-animat{-webkit-animation:playRotate 18s linear infinite;animation:playRotate 18s linear infinite}@-webkit-keyframes playRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes playRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#songDetails .playContxt .play-animat-status{-webkit-animation-play-state:paused;animation-play-state:paused}#songDetails .playContxt .cd-wrapper{position:relative;width:1.8rem;height:1.8rem;padding:.4rem;border-radius:50%;background:hsla(0,0%,42%,.3);margin:.75rem auto 0}#songDetails .playContxt .cd-wrapper img{display:block;width:100%;height:100%;border-radius:50%}#songDetails .playContxt .cd-masking{width:100%;height:100%;position:absolute;top:0;left:0;background:url(" + __webpack_require__(189) + ") 0/contain no-repeat}#songDetails #player .playContxt-btnBox{width:100%;height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.2rem}#songDetails #player .playContxt-btnBox span{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-flex:1;min-width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}#songDetails #player .playContxt-btnBox span:first-child i,#songDetails #player .playContxt-btnBox span:nth-child(5) i{font-size:.3rem;color:#fff}#songDetails #player .playContxt-btnBox span:nth-child(2) i{-webkit-transform:rotate(180deg);transform:rotate(180deg)}#songDetails #player .playContxt-btnBox span:nth-child(3) i{font-size:.55rem;color:#fff}#songDetails #player .playContxt-btnBox span i{font-size:.45rem;color:#fff}#songDetails #player .progress-box{position:relative;width:70%;height:.03rem;margin:0 auto;background:-webkit-radial-gradient(#dedede -180%,transparent 100%);background:radial-gradient(#dedede -180%,transparent 100%);border-radius:.2rem}#songDetails #player .progress-box .curTime,#songDetails #player .progress-box .duration{display:inline-block;width:.5rem;height:.12rem;line-height:.12rem;font-size:.12rem;color:#fff;text-align:center}#songDetails #player .progress-box .curTime{position:absolute;top:-.06rem;left:-.5rem}#songDetails #player .progress-box .duration{position:absolute;top:-.06rem;right:-.5rem}#songDetails #player .progress-box .progress-bar{height:100%;background-color:#f33;position:absolute;top:0;left:0}#songDetails #player .progress-box .progress-bar .progress-dot{display:block;width:.12rem;height:.12rem;border-radius:50%;position:absolute;top:-.05rem;right:0;z-index:888;background-color:#f33;-webkit-transform:translate(50%);transform:translate(50%)}#songDetails #player .progress-box .schedule{width:100%;height:400%;position:absolute;top:-200%;left:0;z-index:8888}", ""]);

// exports


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("29f880b8", content, true);

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("de14fcc2", content, true);

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("80734dfa", content, true);

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.songListStatus == true) ? _c('div', {
    attrs: {
      "id": "bottomSongList"
    }
  }, [_c('div', {
    staticClass: "headerTitle halfBorder"
  }, [_vm._v("歌单列表")]), _vm._v(" "), _c('div', {
    staticClass: "SongListContxt"
  }, [_c('ul', _vm._l((_vm.songListDetails), function(item, i) {
    return _c('li', {
      key: i,
      staticClass: "halfBorder",
      class: {
        'redLight': item.id == _vm.curMusic
      },
      on: {
        "click": function($event) {
          _vm.switchSongs(item.id)
        }
      }
    }, [(item.id == _vm.curMusic) ? _c('i', {
      staticClass: "iconfont icon-playing"
    }) : _vm._e(), _vm._v(" " + _vm._s(item.name) + "\n        "), _c('s', [_vm._v(" - " + _vm._s(item.ar[0].name))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "closeSongList",
    on: {
      "click": _vm.closeSongList
    }
  }, [_vm._v("关闭")])]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "player"
    }
  }, [_c('div', {
    staticClass: "progress-box"
  }, [_c('div', {
    ref: "schedule",
    staticClass: "schedule",
    on: {
      "touchmove": _vm.changeProgress,
      "touchstart": _vm.changeProgress
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "progress-bar",
    style: ({
      width: _vm.progressWidth
    })
  }, [_c('s', {
    staticClass: "progress-dot"
  })]), _vm._v(" "), _c('span', {
    staticClass: "curTime"
  }, [_vm._v(_vm._s(_vm.formatTime(_vm.musicCurtime)))]), _vm._v(" "), _c('span', {
    staticClass: "duration"
  }, [_vm._v(_vm._s(_vm.formatTime(_vm.musicDuration)))])]), _vm._v(" "), _c('div', {
    staticClass: "playContxt-btnBox"
  }, [_vm._m(0), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.goPrevSongs
    }
  }, [_c('i', {
    staticClass: "iconfont icon-forward"
  })]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "iconfont",
    class: {
      'icon-pause': _vm.playStatus == true, 'icon-play': _vm.playStatus == false
    },
    on: {
      "click": _vm.togglePlayStatus
    }
  })]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.goNextSongs
    }
  }, [_c('i', {
    staticClass: "iconfont icon-forward"
  })]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.openSongList
    }
  }, [_c('i', {
    staticClass: "iconfont icon-playList"
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "iconfont icon-playType"
  })])
}]}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "songDetails"
    }
  }, [_c('div', {
    staticClass: "header"
  }, [_c('i', {
    staticClass: "iconfont icon-left",
    on: {
      "click": _vm.goBack
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.songDetails.songs[0].name))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.songDetails.songs[0].ar[0].name))]), _vm._v(" "), _c('div', {
    staticClass: "bar-line"
  })]), _vm._v(" "), _c('div', {
    staticClass: "playContxt"
  }, [_c('div', {
    staticClass: "playContxt-m"
  }, [(_vm.showLyric == false) ? _c('span', {
    staticClass: "play-controler",
    class: {
      'play-controler-status': _vm.playStatus == true
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showLyric == false) ? _c('div', {
    staticClass: "cd-wrapper",
    on: {
      "click": function($event) {
        _vm.showLyric = true
      }
    }
  }, [_c('div', {
    staticClass: "cd-masking"
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.songDetails.songs[0].al.picUrl),
      expression: "songDetails.songs[0].al.picUrl"
    }],
    staticClass: "play-animat",
    class: {
      'play-animat-status': _vm.playStatus == false
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.showLyric == true) ? _c('div', {
    staticClass: "LyricBox",
    on: {
      "click": function($event) {
        _vm.showLyric = false
      }
    }
  }, [_c('ul', {
    style: ({
      marginTop: _vm.format.compLyricPos(_vm.musicCurtime, _vm.Lyric)
    })
  }, _vm._l((_vm.Lyric), function(item, i) {
    return _c('li', {
      key: i,
      class: {
        highBright: _vm.format.formatLyrichighBright(_vm.musicCurtime, _vm.Lyric, i)
      }
    }, [_vm._v(_vm._s(item[1]))])
  }))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "playContxt-f"
  }, [_c('player')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "masking"
  }, [_c('div', {
    staticClass: "cover-bg",
    style: ({
      backgroundImage: 'url(' + _vm.songDetails.songs[0].al.picUrl + ')'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "cover-masking"
  })]), _vm._v(" "), _c('bottomSongList')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});