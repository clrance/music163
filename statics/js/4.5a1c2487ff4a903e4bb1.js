webpackJsonp([4],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(3)
  , LIBRARY        = __webpack_require__(30)
  , wksExt         = __webpack_require__(158)
  , defineProperty = __webpack_require__(8).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parentMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(161);


var parentMixin = {
  mounted: function mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value;
    }
    this.updateIndex();
  },

  methods: {
    updateIndex: function updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      var children = this.$children;
      for (var i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex: function currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
      this.$emit('input', val);
    },
    index: function index(val) {
      this.currentIndex = val;
    },
    value: function value(val) {
      this.index = val;
    }
  },
  data: function data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    };
  }
};

var childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$parent.updateIndex();
  },
  beforeDestroy: function beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(function () {
      $parent.updateIndex();
    });
  },

  methods: {
    onItemClick: function onItemClick(hasLink) {
      var _this = this;

      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true;
        this.$parent.currentIndex = this.currentIndex;
        this.$nextTick(function () {
          _this.$emit('on-item-click', _this.currentIndex);
        });
      }
      if (hasLink === true) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.link, this.$router);
      }
    }
  },
  watch: {
    currentSelected: function currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    },
    selected: function selected(val) {
      this.currentSelected = val;
    }
  },
  data: function data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    };
  }
};



/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(62)
  , hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = go;
/* unused harmony export getUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

function go(url, $router) {
  if (/^javas/.test(url) || !url) return;
  var useRouter = (typeof url === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(url)) === 'object' || $router && typeof url === 'string' && !/http/.test(url);
  if (useRouter) {
    url === 'BACK' ? $router.go(-1) : $router.push(url);
  } else {
    window.location.href = url;
  }
}

function getUrl(url, $router) {
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return '#!' + url;
  }
  return url && (typeof url === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(url)) !== 'object' ? url : 'javascript:void(0);';
}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(182),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(183),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(159);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tab-item',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style: function style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(159);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tab',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b" /* parentMixin */]],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      setTimeout(function () {
        _this.hasReady = true;
      }, 0);
    });
  },

  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String]
  },
  computed: {
    barLeft: function barLeft() {
      return this.currentIndex * (100 / this.number) + '%';
    },
    barRight: function barRight() {
      return (this.number - this.currentIndex - 1) * (100 / this.number) + '%';
    },
    innerBarStyle: function innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },
    barStyle: function barStyle() {
      var commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent';
      }
      return commonStyle;
    },
    barClass: function barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    }
  },
  watch: {
    currentIndex: function currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
    }
  },
  data: function data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  }
});

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(167);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(166);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(177);
__webpack_require__(64);
__webpack_require__(178);
__webpack_require__(179);
module.exports = __webpack_require__(3).Symbol;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(66);
module.exports = __webpack_require__(158).f('iterator');

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(57);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(10);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(29)
  , toIObject = __webpack_require__(17);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(32)('meta')
  , isObject = __webpack_require__(11)
  , has      = __webpack_require__(9)
  , setDesc  = __webpack_require__(8).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(18)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(57)
  , createDesc     = __webpack_require__(31)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(59)
  , has            = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(60)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17)
  , gOPN      = __webpack_require__(160).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(63)
  , META           = __webpack_require__(174).KEY
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(34)
  , setToStringTag = __webpack_require__(20)
  , uid            = __webpack_require__(32)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(158)
  , wksDefine      = __webpack_require__(157)
  , keyOf          = __webpack_require__(173)
  , enumKeys       = __webpack_require__(171)
  , isArray        = __webpack_require__(172)
  , anObject       = __webpack_require__(4)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(59)
  , createDesc     = __webpack_require__(31)
  , _create        = __webpack_require__(61)
  , gOPNExt        = __webpack_require__(176)
  , $GOPD          = __webpack_require__(175)
  , $DP            = __webpack_require__(8)
  , $keys          = __webpack_require__(29)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(160).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(57).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(30)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157)('asyncIterator');

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157)('observable');

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("2a98ac54", content, true);

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-item",
    class: [_vm.currentSelected ? _vm.activeClass : '', {
      'vux-tab-selected': _vm.currentSelected,
      'vux-tab-disabled': _vm.disabled
    }],
    style: (_vm.style),
    on: {
      "click": _vm.onItemClick
    }
  }, [_vm._t("default"), _vm._v(" "), (typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '') ? _c('span', {
    staticClass: "vux-tab-item-badge",
    style: ({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })
  }, [_vm._v(_vm._s(_vm.badgeLabel))]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab",
    class: {
      'vux-tab-no-animate': !_vm.animate
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.animate) ? _c('div', {
    staticClass: "vux-tab-ink-bar",
    class: _vm.barClass,
    style: (_vm.barStyle)
  }, [(_vm.customBarWidth) ? _c('span', {
    staticClass: "vux-tab-bar-inner",
    style: (_vm.innerBarStyle)
  }) : _vm._e()]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'singer',
  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default.a
  },
  data: function data() {
    return {
      tabIndex: 0
    };
  },
  created: function created() {
    this.$store.dispatch('get_singerSong', this.$route.params.id);
  },

  computed: {
    singerSong: function singerSong() {
      return this.$store.state.singerSong;
    },
    singerAlbums: function singerAlbums() {
      return this.$store.state.Singeralbums;
    }
  },
  methods: {
    getSingerImg: function getSingerImg(val) {
      if (val != '') {
        return "url(" + val + ")";
      }
    },
    switchType: function switchType(index) {
      this.tabIndex = index;
      if (index == 0) {
        this.$store.dispatch('get_singerSong', this.$route.params.id);
      } else {
        this.$store.dispatch('get_singerAlbums', this.$route.params.id);
      }
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(147)(false);
// imports


// module
exports.push([module.i, ".backgroundRed{background-color:#f33}.mx_flex{display:-webkit-box;display:-webkit-flex;display:flex}.mx_flex_content{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mx_flex_mid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mx_brbox{box-sizing:border-box}.mx_more_ellipsis{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mx_more_ellipsis,.mx_single_ellipsis{overflow:hidden;text-overflow:ellipsis}.mx_single_ellipsis{white-space:nowrap}.halfBorder{position:relative}.halfBorder:after{content:\"  \";position:absolute;left:0;top:0;width:200%;height:200%;border-bottom:1px solid #dedede;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}#singer .singer-header{width:100%;height:2.2rem;background-size:cover;background-repeat:no-repeat;background-position:50%}#singer .singer-header h1{width:100%;height:.45rem;line-height:.45rem;font-size:.16rem;color:#fff;text-align:center;font-weight:400;position:relative}#singer .singer-header h1 i{position:absolute;top:0;left:5%;font-size:.22rem;color:#fff}#singer .songList ul li{width:100%;height:.4rem;line-height:.4rem;padding:.05rem 0;font-size:0}#singer .songList ul li i{font-size:.12rem;color:#666;width:15%;text-align:center}#singer .songList ul li i,#singer .songList ul li span{display:inline-block;vertical-align:top;height:.4rem;line-height:.4rem}#singer .songList ul li span{width:85%;text-align:left}#singer .songList ul li p{font-size:.14rem;color:#333;width:85%;height:.2rem;line-height:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#singer .songList ul li s{display:block;text-decoration:none;font-size:.12rem;color:#ccc;width:85%;height:.2rem;line-height:.2rem}#singer .hotAlbums{width:100%;height:auto}#singer .hotAlbums li{width:100%;height:.5rem;line-height:.5rem;display:-webkit-box;display:-webkit-flex;display:flex}#singer .hotAlbums li div{-webkit-box-flex:1 0 15%;-webkit-flex:1 0 15%;flex:1 0 15%;box-flex:1 0 15%;min-width:0;box-sizing:border-box;padding:.02rem .04rem}#singer .hotAlbums li div img{display:block;width:100%;height:100%}#singer .hotAlbums li span{padding:.02rem 0;-webkit-box-flex:1 0 85%;-webkit-flex:1 0 85%;flex:1 0 85%;box-flex:1 0 85%;min-width:0;font-size:.14rem;color:#333}#singer .hotAlbums span.halfBorder p,#singer .hotAlbums span.halfBorder span{width:100%;height:50%;line-height:.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#singer .hotAlbums span.halfBorder p{font-size:.14rem;color:#333}#singer .hotAlbums span.halfBorder span{display:block;font-size:.12rem;color:#666}", ""]);

// exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("26e1dbd4", content, true);

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "singer"
    }
  }, [_c('div', {
    staticClass: "singer-header",
    style: ({
      backgroundImage: _vm.getSingerImg(_vm.singerSong.artist.picUrl)
    })
  }, [_c('h1', [_vm._v(_vm._s(_vm.singerSong.artist.name) + "\n      "), _c('i', {
    staticClass: "iconfont icon-left",
    on: {
      "click": _vm.goBack
    }
  })])]), _vm._v(" "), _c('tab', {
    staticClass: "searchList-type",
    attrs: {
      "line-width": 2,
      "bar-active-color": "#f33",
      "active-color": "#f33"
    }
  }, [_c('tab-item', {
    attrs: {
      "selected": ""
    },
    on: {
      "on-item-click": _vm.switchType
    }
  }, [_vm._v("热门")]), _vm._v(" "), _c('tab-item', {
    on: {
      "on-item-click": _vm.switchType
    }
  }, [_vm._v("专辑")])], 1), _vm._v(" "), (_vm.tabIndex == 0) ? _c('div', {
    staticClass: "songList"
  }, [_c('ul', _vm._l((_vm.singerSong.hotSongs), function(item, i) {
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
  }))]) : _c('div', {
    staticClass: "hotAlbums"
  }, [_c('ul', _vm._l((_vm.singerAlbums.hotAlbums), function(item, i) {
    return _c('router-link', {
      key: i,
      attrs: {
        "tag": "li",
        "to": {
          name: 'albumsListDetails',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('div', [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.picUrl),
        expression: "item.picUrl"
      }]
    })]), _vm._v(" "), _c('span', {
      staticClass: "halfBorder"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.artists[0].name) + " " + _vm._s(item.size) + "首")])])])
  }))])], 1)
},staticRenderFns: []}

/***/ })

});