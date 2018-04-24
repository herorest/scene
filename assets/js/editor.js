webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _namespace = __webpack_require__(5);

	var _namespace2 = _interopRequireDefault(_namespace);

	var _reactRedux = __webpack_require__(48);

	var _store = __webpack_require__(75);

	var _store2 = _interopRequireDefault(_store);

	var _app = __webpack_require__(457);

	var _app2 = _interopRequireDefault(_app);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(41);

	__webpack_require__(43);

	__webpack_require__(490);

	__webpack_require__(492);

	__webpack_require__(493);

	__webpack_require__(494);

	__webpack_require__(498);

	__webpack_require__(501);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_app2.default, null)
	), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(49);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(53);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(51);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(52);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(51);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(54);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(55);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(52);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(69);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(73);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(74);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(56);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(57);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(64);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(66);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(67);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(68);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(58);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(62);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 58 */
[514, 59, 60, 61],
/* 59 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(63)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(57);

	var _isPlainObject = __webpack_require__(58);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(68);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 69 */
[514, 70, 71, 72],
/* 70 */
59,
/* 71 */
60,
/* 72 */
61,
/* 73 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {

	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(56);

	var _reduxThunk = __webpack_require__(76);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(77);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _DevTools = __webpack_require__(87);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _DevTools2.default.instrument())(_redux.createStore);

	function configureStore(initialState) {
	    var store = finalCreateStore(_reducers2.default, initialState);
	    return store;
	}
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      if (typeof action === 'function') {
	        return action(dispatch, getState);
	      }

	      return next(action);
	    };
	  };
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var _redux = __webpack_require__(56);

	var _json = __webpack_require__(78);

	var _json2 = _interopRequireDefault(_json);

	var _user = __webpack_require__(80);

	var _user2 = _interopRequireDefault(_user);

	var _block = __webpack_require__(82);

	var _block2 = _interopRequireDefault(_block);

	var _desktop = __webpack_require__(85);

	var _desktop2 = _interopRequireDefault(_desktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  pagejson: _json2.default, userstate: _user2.default, blockbox: _block2.default, desktop: _desktop2.default
	});

	module.exports = rootReducer;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var _json = __webpack_require__(79);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    id: '-1',
	    modifed: false
	};
	module.exports = function json() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    var ostate = (0, _objectAssign2.default)({}, state);
	    switch (action.type) {
	        case _json.SET_PAGEJSON_ID:
	            ostate.id = action.id;
	            return ostate;
	        case _json.MODIFY_PAGEJSON:
	            ostate.modifed = action.modifed;
	            return ostate;
	        default:
	            return state;
	    }
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SET_PAGEJSON_ID = exports.RECEIVE_SAVE_PAGEJSON = exports.SAVE_PAGEJSON = exports.CACHE_PAGEJSON = exports.MODIFY_PAGEJSON = exports.RECEIVE_PAGEJSON = exports.REQUEST_PAGEJSON = undefined;
	exports.modifyPagejson = modifyPagejson;
	exports.setPagejsonId = setPagejsonId;
	exports.cachePagejson = cachePagejson;
	exports.savePagejson = savePagejson;

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _model = __webpack_require__(14);

	var _model2 = _interopRequireDefault(_model);

	var _tipmessage = __webpack_require__(11);

	var _tipmessage2 = _interopRequireDefault(_tipmessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_PAGEJSON = exports.REQUEST_PAGEJSON = 'REQUEST_PAGEJSON';
	var RECEIVE_PAGEJSON = exports.RECEIVE_PAGEJSON = 'RECEIVE_PAGEJSON';
	var MODIFY_PAGEJSON = exports.MODIFY_PAGEJSON = 'MODIFY_PAGEJSON';
	var CACHE_PAGEJSON = exports.CACHE_PAGEJSON = 'CACHE_PAGEJSON';
	var SAVE_PAGEJSON = exports.SAVE_PAGEJSON = 'SAVE_PAGEJSON';
	var RECEIVE_SAVE_PAGEJSON = exports.RECEIVE_SAVE_PAGEJSON = 'RECEIVE_SAVE_PAGEJSON';
	var SET_PAGEJSON_ID = exports.SET_PAGEJSON_ID = 'SET_PAGEJSON_ID';

	function requestSavePagejson() {
	    return {
	        type: REQUEST_SAVE_PAGEJSON
	    };
	}

	function receiveSavePagejson() {
	    return {
	        type: RECEIVE_SAVE_PAGEJSON
	    };
	}

	function modifyPagejson(modifed) {
	    return {
	        type: MODIFY_PAGEJSON,
	        modifed: modifed
	    };
	}

	function setPagejsonId(id) {
	    return {
	        type: SET_PAGEJSON_ID,
	        id: id
	    };
	}

	function cachePagejson(json) {
	    return function (dispatch, getState) {
	        var state = getState();
	        var id = _data2.default.set('page', json);
	        dispatch(setPagejsonId(id));
	    };
	}

	function savePagejson() {
	    return function (dispatch, getState) {
	        var state = getState();
	        if (state.pagejson.modifed) {
	            var pagedata = {
	                "value": _data2.default.get('page')
	            };
	            dispatch(requestSavePagejson());
	            $.ajax({
	                type: "post",
	                url: _model2.default.prefix + _model2.default.apiUrl.save,
	                data: {
	                    'hid': hid,
	                    'pagedata': pagedata
	                },
	                success: function success(result) {
	                    if (result.status == 1) {
	                        dispatch(receiveSavePagejson());
	                    }
	                },
	                error: function error() {
	                    MZ.tipmessage.show({
	                        message: '',
	                        delay: 1000,
	                        pos: 'middle',
	                        type: 'fail'
	                    });
	                }
	            });
	        }
	    };
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var _user = __webpack_require__(81);

	module.exports = function user() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _user.RECEIVE_USERTYPE:
	            return state = action.usertype;
	        default:
	            return state;
	    }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RECEIVE_USERTYPE = exports.REQUEST_USERTYPE = undefined;
	exports.getUserType = getUserType;

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _model = __webpack_require__(14);

	var _model2 = _interopRequireDefault(_model);

	var _tipmessage = __webpack_require__(11);

	var _tipmessage2 = _interopRequireDefault(_tipmessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_USERTYPE = exports.REQUEST_USERTYPE = 'REQUEST_USERTYPE';
	var RECEIVE_USERTYPE = exports.RECEIVE_USERTYPE = 'RECEIVE_USERTYPE';

	function requestUsertype() {
	    return {
	        type: REQUEST_USERTYPE
	    };
	}

	function receiveUsertype(usertype) {
	    return {
	        type: RECEIVE_USERTYPE,
	        usertype: usertype
	    };
	}

	function getUserType() {
	    return function (dispatch, getState) {
	        var state = getState();
	        dispatch(requestUsertype());
	        $.ajax({
	            type: "get",
	            url: _model2.default.prefix + _model2.default.apiUrl.checkuser,
	            success: function success(data) {
	                dispatch(receiveUsertype(data.status || data.status === 0 ? data.status : 0));
	            },
	            error: function error(data) {
	                MZ.tipmessage.show({
	                    message: _model2.default.tipInfo.checkauthfail,
	                    delay: 1000,
	                    pos: 'middle',
	                    type: 'fail' });
	            }
	        });
	    };
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var _block = __webpack_require__(83);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initState = _immutable2.default.fromJS({
	    preview: false,
	    picture: {
	        show: false,
	        data: [{ title: '标题1', src: 'images/temple0.jpg' }, { title: '标题2', src: 'images/temple1.jpg' }],
	        chose: 0
	    },
	    music: {
	        show: false,
	        data: [{ title: '无背景音乐', src: '' }, { title: '气势磅礴', src: 'audio/1.mp3' }, { title: '激情澎湃', src: 'audio/2.mp3' }],
	        chose: 0
	    }
	});

	module.exports = function block() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    var newstate = {};
	    switch (action.type) {
	        case _block.SHOW_PREVIEW:
	            newstate = state.set('preview', action.status);
	            return newstate;
	        case _block.SHOW_PICTURE:
	            newstate = state.updateIn(['picture', 'show'], function (list) {
	                return action.status;
	            });
	            return newstate;
	        case _block.SHOW_MUSIC:
	            newstate = state.updateIn(['music', 'show'], function (list) {
	                return action.status;
	            });
	            return newstate;
	        case _block.ADD_MUSIC:
	            if (!action.data) {
	                return state;
	            }
	            newstate = state.updateIn(['music', 'data'], function (list) {
	                return _immutable2.default.List([].concat(_toConsumableArray(list.toJS()), [action.data]));
	            });
	            return newstate;
	        case _block.UPDATE_MUSIC:
	            newstate = state.updateIn(['music', 'data'], function (list) {
	                var newlist = list.toJS();
	                for (var i = 0; i < newlist.length; i++) {
	                    if (newlist[i].id == action.data.id) {
	                        newlist[i] = action.data;
	                    }
	                }
	                return newlist;
	            });
	            return newstate;
	        case _block.CHOSE_MUSIC:
	            newstate = state.updateIn(['music', 'chose'], function (list) {
	                return action.num;
	            });
	            return newstate;
	        case _block.RECEIVE_PICTURE:
	            newstate = state.updateIn(['picture', 'data'], function (list) {
	                if (list.size > 0) {
	                    return _immutable2.default.List([].concat(_toConsumableArray(list.toJS()), _toConsumableArray(action.data)));
	                }
	                return _immutable2.default.List(action.data);
	            });
	            return newstate;
	        case _block.ADD_PICTURE:
	            if (!action.data) {
	                return state;
	            }
	            newstate = state.updateIn(['picture', 'data'], function (list) {
	                return _immutable2.default.List([].concat(_toConsumableArray(list.toJS()), [action.data]));
	            });
	            return newstate;
	        case _block.UPDATE_PICTURE:
	            newstate = state.updateIn(['picture', 'data'], function (list) {
	                var newlist = list.toJS();
	                for (var i = 0; i < newlist.length; i++) {
	                    if (newlist[i].id == action.data.id) {
	                        newlist[i] = action.data;
	                    }
	                }
	                return newlist;
	            });
	            return newstate;
	        default:
	            return state;
	    }
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UPDATE_PICTURE = exports.ADD_PICTURE = exports.RECEIVE_PICTURE = exports.UPDATE_MUSIC = exports.CHOSE_MUSIC = exports.ADD_MUSIC = exports.SHOW_MUSIC = exports.SHOW_PICTURE = exports.SHOW_PREVIEW = undefined;
	exports.showPreview = showPreview;
	exports.showMusic = showMusic;
	exports.choseMusic = choseMusic;
	exports.addMusic = addMusic;
	exports.updateMusic = updateMusic;
	exports.showPicture = showPicture;
	exports.receivePicture = receivePicture;
	exports.getPicture = getPicture;
	exports.addPicture = addPicture;
	exports.updatePicture = updatePicture;

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _model = __webpack_require__(14);

	var _model2 = _interopRequireDefault(_model);

	var _tipmessage = __webpack_require__(11);

	var _tipmessage2 = _interopRequireDefault(_tipmessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHOW_PREVIEW = exports.SHOW_PREVIEW = 'SHOW_PREVIEW';
	var SHOW_PICTURE = exports.SHOW_PICTURE = 'SHOW_PICTURE';
	var SHOW_MUSIC = exports.SHOW_MUSIC = 'SHOW_MUSIC';

	var ADD_MUSIC = exports.ADD_MUSIC = 'ADD_MUSIC';
	var CHOSE_MUSIC = exports.CHOSE_MUSIC = 'CHOSE_MUSIC';
	var UPDATE_MUSIC = exports.UPDATE_MUSIC = 'UPDATE_MUSIC';

	var RECEIVE_PICTURE = exports.RECEIVE_PICTURE = 'RECEIVE_PICTURE';
	var ADD_PICTURE = exports.ADD_PICTURE = 'ADD_PICTURE';
	var UPDATE_PICTURE = exports.UPDATE_PICTURE = 'UPDATE_PICTURE';

	function showPreview(status) {
	    return {
	        type: SHOW_PREVIEW,
	        status: status
	    };
	}

	function showMusic(status) {
	    return {
	        type: SHOW_MUSIC,
	        status: status
	    };
	}

	function choseMusic(num) {
	    return {
	        type: CHOSE_MUSIC,
	        num: num
	    };
	}

	//添加音乐
	function addMusic(data) {
	    return {
	        type: ADD_MUSIC,
	        data: data
	    };
	}

	//预览更新成正式地址
	function updateMusic(data) {
	    return {
	        type: UPDATE_MUSIC,
	        data: data
	    };
	}

	//控制图片库显示与否
	function showPicture(status) {
	    return {
	        type: SHOW_PICTURE,
	        status: status
	    };
	}

	//接收图片库图片
	function receivePicture(data) {
	    return {
	        type: RECEIVE_PICTURE,
	        data: data
	    };
	}

	//获取图片库图片
	function getPicture() {
	    return function (dispatch, getState) {
	        var state = getState();
	        $.ajax({
	            type: "get",
	            url: _model2.default.prefix + _model2.default.apiUrl.getPicList,
	            data: {
	                'hid': hid
	            },
	            success: function success(result) {
	                if (result.status == 1) {
	                    var data = result.data;
	                    dispatch(receivePicture(data));
	                }
	            },
	            error: function error() {
	                MZ.tipmessage.show({
	                    message: '',
	                    delay: 1000,
	                    pos: 'middle',
	                    type: 'fail'
	                });
	            }
	        });
	    };
	}

	//添加图片
	function addPicture(data) {
	    return {
	        type: ADD_PICTURE,
	        data: data
	    };
	}

	//预览图更新成正式地址
	function updatePicture(data) {
	    return {
	        type: UPDATE_PICTURE,
	        data: data
	    };
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var _desktop = __webpack_require__(86);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = _immutable2.default.fromJS({
	    page: {
	        curr: 1,
	        prev: 0
	    },
	    data: [],
	    items: 1,
	    modifed: false
	});

	module.exports = function desktop() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    var newstate = {};
	    switch (action.type) {
	        case _desktop.CHOSE_PAGE:
	            var curr = state.getIn(['page', 'curr']);
	            newstate = state.setIn(['page', 'curr'], action.page);
	            newstate = newstate.setIn(['page', 'prev'], curr);
	            newstate = newstate.updateIn(['data'], function (list) {
	                var newlist = data.getIn(['value', action.page - 1]);
	                return newlist;
	            });
	            return newstate;
	        case _desktop.CLEAR_PAGE:
	            newstate = state.set('page', action.page);
	            newstate = newstate.updateIn(['data'], function (list) {
	                return _immutable2.default.fromJS([]);
	            });
	            return newstate;
	        case _desktop.CHOSE_ITEM:
	            newstate = state.set('items', action.num);
	            return newstate;
	        case _desktop.MODIFY_ITEM:
	            //
	            return newstate;
	        default:
	            return state;
	    }
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CHANGE_PAGE = exports.MODIFY_ITEM = exports.CLEAR_PAGE = exports.CHOSE_ITEM = exports.CHOSE_PAGE = undefined;
	exports.changePage = changePage;
	exports.choseItem = choseItem;
	exports.modifyItem = modifyItem;

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _model = __webpack_require__(14);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CHOSE_PAGE = exports.CHOSE_PAGE = 'CHOSE_PAGE';
	var CHOSE_ITEM = exports.CHOSE_ITEM = 'CHOSE_ITEM';
	var CLEAR_PAGE = exports.CLEAR_PAGE = 'CLEAR_PAGE';
	var MODIFY_ITEM = exports.MODIFY_ITEM = 'MODIFY_ITEM';
	var CHANGE_PAGE = exports.CHANGE_PAGE = 'CHANGE_PAGE';

	function changePage(page) {
	    return function (dispatch, getState) {
	        dispatch(chosePage(page));
	    };
	}

	function chosePage(page) {
	    return {
	        type: CHOSE_PAGE,
	        page: page
	    };
	}

	function clearPage(page) {
	    return {
	        type: CLEAR_PAGE,
	        page: page
	    };
	}

	function choseItem(num) {
	    return {
	        type: CHOSE_ITEM,
	        num: num
	    };
	}

	function modifyItem(data) {
	    return {
	        type: MODIFY_ITEM,
	        data: data
	    };
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(88);

	var _reduxDevtoolsLogMonitor = __webpack_require__(209);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(380);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  { toggleVisibilityKey: 'ctrl-q', changePositionKey: 'ctrl-w' },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _instrument = __webpack_require__(89);

	Object.defineProperty(exports, 'instrument', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.default;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionCreators;
	  }
	});
	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionTypes;
	  }
	});

	var _persistState = __webpack_require__(152);

	Object.defineProperty(exports, 'persistState', {
	  enumerable: true,
	  get: function get() {
	    return _persistState.default;
	  }
	});

	var _createDevTools = __webpack_require__(208);

	Object.defineProperty(exports, 'createDevTools', {
	  enumerable: true,
	  get: function get() {
	    return _createDevTools.default;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.ActionCreators = exports.ActionTypes = undefined;
	exports.default = instrument;

	var _difference = __webpack_require__(90);

	var _difference2 = _interopRequireDefault(_difference);

	var _union = __webpack_require__(146);

	var _union2 = _interopRequireDefault(_union);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  IMPORT_STATE: 'IMPORT_STATE'
	};

	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  setActionsActive: function setActionsActive(start, end) {
	    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  importState: function importState(nextLiftedState) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	  }
	};

	var INIT_ACTION = { type: '@@INIT' };

	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }

	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.chrome !== 'undefined') {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err);
	    }
	  }

	  return {
	    state: nextState,
	    error: nextError
	  };
	}

	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }

	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;

	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;

	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);

	    nextComputedStates.push(entry);
	  }

	  return nextComputedStates;
	}

	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}

	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer, options) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: []
	  };

	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function () {
	    var liftedState = arguments.length <= 0 || arguments[0] === undefined ? initialLiftedState : arguments[0];
	    var liftedAction = arguments[1];
	    var monitorState = liftedState.monitorState;
	    var actionsById = liftedState.actionsById;
	    var nextActionId = liftedState.nextActionId;
	    var stagedActionIds = liftedState.stagedActionIds;
	    var skippedActionIds = liftedState.skippedActionIds;
	    var committedState = liftedState.committedState;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var computedStates = liftedState.computedStates;

	    function commitExcessActions(n) {
	      // Auto-commits n-number of excess actions.
	      var excess = n;
	      var idsToDelete = stagedActionIds.slice(1, excess + 1);

	      for (var i = 0; i < idsToDelete.length; i++) {
	        if (computedStates[i + 1].error) {
	          // Stop if error is found. Commit actions up to error.
	          excess = i;
	          idsToDelete = stagedActionIds.slice(1, excess + 1);
	          break;
	        } else {
	          delete actionsById[idsToDelete[i]];
	        }
	      }

	      skippedActionIds = skippedActionIds.filter(function (id) {
	        return idsToDelete.indexOf(id) === -1;
	      });
	      stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
	      committedState = computedStates[excess].state;
	      computedStates = computedStates.slice(excess);
	      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
	    }

	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.
	    var minInvalidatedStateIndex = 0;

	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;

	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          }();

	          if (_ret === 'break') break;
	        }
	      case ActionTypes.SET_ACTIONS_ACTIVE:
	        {
	          // Toggle whether an action with given ID is skipped.
	          // Being skipped means it is a no-op during the computation.
	          var start = liftedAction.start;
	          var end = liftedAction.end;
	          var active = liftedAction.active;

	          var actionIds = [];
	          for (var i = start; i < end; i++) {
	            actionIds.push(i);
	          }if (active) {
	            skippedActionIds = (0, _difference2.default)(skippedActionIds, actionIds);
	          } else {
	            skippedActionIds = (0, _union2.default)(skippedActionIds, actionIds);
	          }

	          // Optimization: we know history before this action hasn't changed
	          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
	          break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.PERFORM_ACTION:
	        {
	          // Auto-commit as new actions come in.
	          if (options.maxAge && stagedActionIds.length === options.maxAge) {
	            commitExcessActions(1);
	          }

	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          var _liftedAction$nextLif = liftedAction.nextLiftedState;
	          // Completely replace everything.

	          monitorState = _liftedAction$nextLif.monitorState;
	          actionsById = _liftedAction$nextLif.actionsById;
	          nextActionId = _liftedAction$nextLif.nextActionId;
	          stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	          skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	          committedState = _liftedAction$nextLif.committedState;
	          currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	          computedStates = _liftedAction$nextLif.computedStates;

	          break;
	        }
	      case '@@redux/INIT':
	        {
	          // Always recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;

	          if (options.maxAge && stagedActionIds.length > options.maxAge) {
	            // States must be recomputed before committing excess.
	            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);

	            commitExcessActions(stagedActionIds.length - options.maxAge);

	            // Avoid double computation.
	            minInvalidatedStateIndex = Infinity;
	          }

	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }

	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates
	    };
	  };
	}

	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;

	  return state;
	}

	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var lastDefinedState = undefined;

	  return _extends({}, liftedStore, {

	    liftedStore: liftedStore,

	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}

	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {

	      function liftReducer(r) {
	        if (typeof r !== 'function') {
	          if (r && typeof r.default === 'function') {
	            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
	          }
	          throw new Error('Expected the reducer to be a function.');
	        }
	        return liftReducerWith(r, initialState, monitorReducer, options);
	      }

	      var liftedStore = createStore(liftReducer(reducer), enhancer);
	      if (liftedStore.liftedStore) {
	        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
	      }

	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(91),
	    baseFlatten = __webpack_require__(130),
	    isArrayLikeObject = __webpack_require__(134),
	    rest = __webpack_require__(141);

	/**
	 * Creates an array of unique `array` values not included in the other given
	 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. The order of result values is determined by the
	 * order they occur in the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([3, 2, 1], [4, 2]);
	 * // => [3, 1]
	 */
	var difference = rest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});

	module.exports = difference;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(92),
	    arrayIncludes = __webpack_require__(123),
	    arrayIncludesWith = __webpack_require__(126),
	    arrayMap = __webpack_require__(127),
	    baseUnary = __webpack_require__(128),
	    cacheHas = __webpack_require__(129);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(93),
	    cachePush = __webpack_require__(122);

	/**
	 *
	 * Creates a set cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.push(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(94),
	    mapDelete = __webpack_require__(107),
	    mapGet = __webpack_require__(114),
	    mapHas = __webpack_require__(117),
	    mapSet = __webpack_require__(119);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(95),
	    Map = __webpack_require__(103);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(96);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(98);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(99),
	    isHostObject = __webpack_require__(101),
	    isObject = __webpack_require__(100),
	    toSource = __webpack_require__(102);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(100);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 101 */
60,
/* 102 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97),
	    root = __webpack_require__(104);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(106);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105)(module), (function() { return this; }())))

/***/ },
/* 105 */,
/* 106 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(103),
	    assocDelete = __webpack_require__(108),
	    hashDelete = __webpack_require__(111),
	    isKeyable = __webpack_require__(113);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(110);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(112);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(96);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(103),
	    assocGet = __webpack_require__(115),
	    hashGet = __webpack_require__(116),
	    isKeyable = __webpack_require__(113);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(96);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(103),
	    assocHas = __webpack_require__(118),
	    hashHas = __webpack_require__(112),
	    isKeyable = __webpack_require__(113);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(103),
	    assocSet = __webpack_require__(120),
	    hashSet = __webpack_require__(121),
	    isKeyable = __webpack_require__(113);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(96);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(113);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the set cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var map = this.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;

	    hash[value] = HASH_UNDEFINED;
	  }
	  else {
	    map.set(value, HASH_UNDEFINED);
	  }
	}

	module.exports = cachePush;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(124);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(125);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(113);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Checks if `value` is in `cache`.
	 *
	 * @private
	 * @param {Object} cache The set cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function cacheHas(cache, value) {
	  var map = cache.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;

	    return hash[value] === HASH_UNDEFINED;
	  }
	  return map.has(value);
	}

	module.exports = cacheHas;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(131),
	    isFlattenable = __webpack_require__(132);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(133),
	    isArray = __webpack_require__(140),
	    isArrayLikeObject = __webpack_require__(134);

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
	}

	module.exports = isFlattenable;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(134);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(135),
	    isObjectLike = __webpack_require__(139);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(136),
	    isFunction = __webpack_require__(99),
	    isLength = __webpack_require__(138);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(137);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 139 */
61,
/* 140 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(142),
	    toInteger = __webpack_require__(143);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(144);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(99),
	    isObject = __webpack_require__(100),
	    isSymbol = __webpack_require__(145);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(139);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(130),
	    baseUniq = __webpack_require__(147),
	    isArrayLikeObject = __webpack_require__(134),
	    rest = __webpack_require__(141);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2, 1], [4, 2], [1, 2]);
	 * // => [2, 1, 4]
	 */
	var union = rest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(92),
	    arrayIncludes = __webpack_require__(123),
	    arrayIncludesWith = __webpack_require__(126),
	    cacheHas = __webpack_require__(129),
	    createSet = __webpack_require__(148),
	    setToArray = __webpack_require__(151);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(149),
	    noop = __webpack_require__(150);

	/**
	 * Creates a set of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97),
	    root = __webpack_require__(104);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 151 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports.default = persistState;

	var _mapValues = __webpack_require__(153);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _identity = __webpack_require__(205);

	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function persistState(sessionId) {
	  var deserializeState = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var deserializeAction = arguments.length <= 2 || arguments[2] === undefined ? _identity2.default : arguments[2];

	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }

	  function deserialize(state) {
	    return _extends({}, state, {
	      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
	        return _extends({}, liftedAction, {
	          action: deserializeAction(liftedAction.action)
	        });
	      }),
	      committedState: deserializeState(state.committedState),
	      computedStates: state.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: deserializeState(computedState.state)
	        });
	      })
	    });
	  }

	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var key = 'redux-dev-session-' + sessionId;

	      var finalInitialState = undefined;
	      try {
	        var json = localStorage.getItem(key);
	        if (json) {
	          finalInitialState = deserialize(JSON.parse(json)) || initialState;
	          next(reducer, initialState);
	        }
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }

	      var store = next(reducer, finalInitialState, enhancer);

	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);

	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }

	          return action;
	        }
	      });
	    };
	  };
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(154),
	    baseIteratee = __webpack_require__(166);

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Array|Function|Object|string} [iteratee=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);

	  baseForOwn(object, function(value, key, object) {
	    result[key] = iteratee(value, key, object);
	  });
	  return result;
	}

	module.exports = mapValues;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(155),
	    keys = __webpack_require__(157);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(156);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 156 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(158),
	    baseKeys = __webpack_require__(160),
	    indexKeys = __webpack_require__(161),
	    isArrayLike = __webpack_require__(135),
	    isIndex = __webpack_require__(164),
	    isPrototype = __webpack_require__(165);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(159);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 159 */
59,
/* 160 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(162),
	    isArguments = __webpack_require__(133),
	    isArray = __webpack_require__(140),
	    isLength = __webpack_require__(138),
	    isString = __webpack_require__(163);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 162 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(140),
	    isObjectLike = __webpack_require__(139);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 164 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 165 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(167),
	    baseMatchesProperty = __webpack_require__(194),
	    identity = __webpack_require__(205),
	    isArray = __webpack_require__(140),
	    property = __webpack_require__(206);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(168),
	    getMatchData = __webpack_require__(189),
	    matchesStrictComparable = __webpack_require__(193);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(169),
	    baseIsEqual = __webpack_require__(175);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(170),
	    stackDelete = __webpack_require__(171),
	    stackGet = __webpack_require__(172),
	    stackHas = __webpack_require__(173),
	    stackSet = __webpack_require__(174);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 170 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}

	module.exports = stackClear;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(108);

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(115);

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocGet(array, key) : data.map.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(118);

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocHas(array, key) : data.map.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(93),
	    assocSet = __webpack_require__(120);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;

	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(176),
	    isObject = __webpack_require__(100),
	    isObjectLike = __webpack_require__(139);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(169),
	    equalArrays = __webpack_require__(177),
	    equalByTag = __webpack_require__(179),
	    equalObjects = __webpack_require__(183),
	    getTag = __webpack_require__(184),
	    isArray = __webpack_require__(140),
	    isHostObject = __webpack_require__(101),
	    isTypedArray = __webpack_require__(188);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(178);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue ||
	              equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(180),
	    Uint8Array = __webpack_require__(181),
	    equalArrays = __webpack_require__(177),
	    mapToArray = __webpack_require__(182),
	    setToArray = __webpack_require__(151);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(104);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(104);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(158),
	    keys = __webpack_require__(157);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(185),
	    Map = __webpack_require__(103),
	    Promise = __webpack_require__(186),
	    Set = __webpack_require__(149),
	    WeakMap = __webpack_require__(187),
	    toSource = __webpack_require__(102);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97),
	    root = __webpack_require__(104);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97),
	    root = __webpack_require__(104);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(97),
	    root = __webpack_require__(104);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(138),
	    isObjectLike = __webpack_require__(139);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(190),
	    toPairs = __webpack_require__(191);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(100);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(192),
	    keys = __webpack_require__(157);

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}

	module.exports = toPairs;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(127);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 193 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(175),
	    get = __webpack_require__(195),
	    hasIn = __webpack_require__(202),
	    isKey = __webpack_require__(201),
	    isStrictComparable = __webpack_require__(190),
	    matchesStrictComparable = __webpack_require__(193);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(path, srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(196);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(197),
	    isKey = __webpack_require__(201);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(140),
	    stringToPath = __webpack_require__(198);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(199),
	    toString = __webpack_require__(200);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(93);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(180),
	    isSymbol = __webpack_require__(145);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(140),
	    isSymbol = __webpack_require__(145);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol') {
	    return true;
	  }
	  return !isArray(value) &&
	    (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(203),
	    hasPath = __webpack_require__(204);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(197),
	    isArguments = __webpack_require__(133),
	    isArray = __webpack_require__(140),
	    isIndex = __webpack_require__(164),
	    isKey = __webpack_require__(201),
	    isLength = __webpack_require__(138),
	    isString = __webpack_require__(163);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = path[index];
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 205 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(137),
	    basePropertyDeep = __webpack_require__(207),
	    isKey = __webpack_require__(201);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(196);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports.default = createDevTools;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(48);

	var _instrument = __webpack_require__(89);

	var _instrument2 = _interopRequireDefault(_instrument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function createDevTools(children) {
	  var _class, _temp;

	  var monitorElement = _react.Children.only(children);
	  var monitorProps = monitorElement.props;
	  var Monitor = monitorElement.type;
	  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
	    return state;
	  })(Monitor);

	  return _temp = _class = function (_Component) {
	    _inherits(DevTools, _Component);

	    function DevTools(props, context) {
	      _classCallCheck(this, DevTools);

	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	      if (!props.store && !context.store) {
	        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
	        return _possibleConstructorReturn(_this);
	      }

	      if (context.store) {
	        _this.liftedStore = context.store.liftedStore;
	      } else {
	        _this.liftedStore = props.store.liftedStore;
	      }

	      if (!_this.liftedStore) {
	        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
	      }
	      return _this;
	    }

	    DevTools.prototype.render = function render() {
	      if (!this.liftedStore) {
	        return null;
	      }

	      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
	        store: this.liftedStore }));
	    };

	    return DevTools;
	  }(_react.Component), _class.contextTypes = {
	    store: _react.PropTypes.object
	  }, _class.propTypes = {
	    store: _react.PropTypes.object
	  }, _class.instrument = function (options) {
	    return (0, _instrument2.default)(function (state, action) {
	      return Monitor.update(monitorProps, state, action);
	    }, options);
	  }, _temp;
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _LogMonitor = __webpack_require__(210);

	var _LogMonitor2 = _interopRequireDefault(_LogMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LogMonitor2.default;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LogMonitorButton = __webpack_require__(211);

	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	var _reduxDevtoolsThemes = __webpack_require__(215);

	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

	var _reduxDevtools = __webpack_require__(88);

	var _actions = __webpack_require__(255);

	var _reducers = __webpack_require__(256);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _LogMonitorEntryList = __webpack_require__(257);

	var _LogMonitorEntryList2 = _interopRequireDefault(_LogMonitorEntryList);

	var _lodash = __webpack_require__(379);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var reset = _reduxDevtools.ActionCreators.reset;
	var rollback = _reduxDevtools.ActionCreators.rollback;
	var commit = _reduxDevtools.ActionCreators.commit;
	var sweep = _reduxDevtools.ActionCreators.sweep;
	var toggleAction = _reduxDevtools.ActionCreators.toggleAction;

	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300,
	    direction: 'ltr'
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};

	var LogMonitor = (function (_Component) {
	  _inherits(LogMonitor, _Component);

	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;
	    _this.updateScrollTop = (0, _lodash2.default)(function () {
	      var node = _this.refs.container;
	      _this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
	    }, 500);

	    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
	    _this.handleReset = _this.handleReset.bind(_this);
	    _this.handleRollback = _this.handleRollback.bind(_this);
	    _this.handleSweep = _this.handleSweep.bind(_this);
	    _this.handleCommit = _this.handleCommit.bind(_this);
	    return _this;
	  }

	  LogMonitor.prototype.scroll = function scroll() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.componentDidMount = function componentDidMount() {
	    var node = this.refs.container;
	    if (!node || !this.props.monitorState) {
	      return;
	    }

	    if (this.props.preserveScrollTop) {
	      node.scrollTop = this.props.monitorState.initialScrollTop;
	      node.addEventListener('scroll', this.updateScrollTop);
	    } else {
	      this.scrollDown = true;
	      this.scroll();
	    }
	  };

	  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    var node = this.refs.container;
	    if (node && this.props.preserveScrollTop) {
	      node.removeEventListener('scroll', this.updateScrollTop);
	    }
	  };

	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = this.refs.container;
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.scroll();
	  };

	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.dispatch(rollback());
	  };

	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.dispatch(sweep());
	  };

	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.dispatch(commit());
	  };

	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
	    this.props.dispatch(toggleAction(id));
	  };

	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.dispatch(reset());
	  };

	  LogMonitor.prototype.getTheme = function getTheme() {
	    var theme = this.props.theme;

	    if (typeof theme !== 'string') {
	      return theme;
	    }

	    if (typeof themes[theme] !== 'undefined') {
	      return themes[theme];
	    }

	    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
	    return themes.nicinabox;
	  };

	  LogMonitor.prototype.render = function render() {
	    var theme = this.getTheme();
	    var _props = this.props;
	    var actionsById = _props.actionsById;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var computedStates = _props.computedStates;
	    var select = _props.select;
	    var expandActionRoot = _props.expandActionRoot;
	    var expandStateRoot = _props.expandStateRoot;

	    var entryListProps = {
	      theme: theme,
	      actionsById: actionsById,
	      skippedActionIds: skippedActionIds,
	      stagedActionIds: stagedActionIds,
	      computedStates: computedStates,
	      select: select,
	      expandActionRoot: expandActionRoot,
	      expandStateRoot: expandStateRoot,
	      onActionClick: this.handleToggleAction
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2.default.createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleReset,
	            enabled: true },
	          'Reset'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleRollback,
	            enabled: computedStates.length > 1 },
	          'Revert'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleSweep,
	            enabled: skippedActionIds.length > 0 },
	          'Sweep'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleCommit,
	            enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.elements, ref: 'container' },
	        _react2.default.createElement(_LogMonitorEntryList2.default, entryListProps)
	      )
	    );
	  };

	  return LogMonitor;
	})(_react.Component);

	LogMonitor.update = _reducers2.default;
	LogMonitor.propTypes = {
	  dispatch: _react.PropTypes.func,
	  computedStates: _react.PropTypes.array,
	  actionsById: _react.PropTypes.object,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  monitorState: _react.PropTypes.shape({
	    initialScrollTop: _react.PropTypes.number
	  }),

	  preserveScrollTop: _react.PropTypes.bool,
	  select: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	LogMonitor.defaultProps = {
	  select: function select(state) {
	    return state;
	  },
	  theme: 'nicinabox',
	  preserveScrollTop: true,
	  expandActionRoot: true,
	  expandStateRoot: true
	};
	exports.default = LogMonitor;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _brighten = __webpack_require__(212);

	var _brighten2 = _interopRequireDefault(_brighten);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};

	var LogMonitorButton = (function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);

	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);

	    _this.state = {
	      hovered: false,
	      active: false
	    };
	    return _this;
	  }

	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };

	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };

	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };

	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };

	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };

	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2.default.createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onClick: this.onClick,
	        style: style },
	      this.props.children
	    );
	  };

	  return LogMonitorButton;
	})(_react2.default.Component);

	exports.default = LogMonitorButton;

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;

	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _shallowEqual = __webpack_require__(214);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}

	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _base16 = __webpack_require__(216);

	_defaults(exports, _interopExportWildcard(_base16, _defaults));

	var _nicinabox = __webpack_require__(254);

	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _threezerotwofour = __webpack_require__(217);

	exports.threezerotwofour = _interopRequire(_threezerotwofour);

	var _apathy = __webpack_require__(218);

	exports.apathy = _interopRequire(_apathy);

	var _ashes = __webpack_require__(219);

	exports.ashes = _interopRequire(_ashes);

	var _atelierDune = __webpack_require__(220);

	exports.atelierDune = _interopRequire(_atelierDune);

	var _atelierForest = __webpack_require__(221);

	exports.atelierForest = _interopRequire(_atelierForest);

	var _atelierHeath = __webpack_require__(222);

	exports.atelierHeath = _interopRequire(_atelierHeath);

	var _atelierLakeside = __webpack_require__(223);

	exports.atelierLakeside = _interopRequire(_atelierLakeside);

	var _atelierSeaside = __webpack_require__(224);

	exports.atelierSeaside = _interopRequire(_atelierSeaside);

	var _bespin = __webpack_require__(225);

	exports.bespin = _interopRequire(_bespin);

	var _brewer = __webpack_require__(226);

	exports.brewer = _interopRequire(_brewer);

	var _bright = __webpack_require__(227);

	exports.bright = _interopRequire(_bright);

	var _chalk = __webpack_require__(228);

	exports.chalk = _interopRequire(_chalk);

	var _codeschool = __webpack_require__(229);

	exports.codeschool = _interopRequire(_codeschool);

	var _colors = __webpack_require__(230);

	exports.colors = _interopRequire(_colors);

	var _default = __webpack_require__(231);

	exports['default'] = _interopRequire(_default);

	var _eighties = __webpack_require__(232);

	exports.eighties = _interopRequire(_eighties);

	var _embers = __webpack_require__(233);

	exports.embers = _interopRequire(_embers);

	var _flat = __webpack_require__(234);

	exports.flat = _interopRequire(_flat);

	var _google = __webpack_require__(235);

	exports.google = _interopRequire(_google);

	var _grayscale = __webpack_require__(236);

	exports.grayscale = _interopRequire(_grayscale);

	var _greenscreen = __webpack_require__(237);

	exports.greenscreen = _interopRequire(_greenscreen);

	var _harmonic = __webpack_require__(238);

	exports.harmonic = _interopRequire(_harmonic);

	var _hopscotch = __webpack_require__(239);

	exports.hopscotch = _interopRequire(_hopscotch);

	var _isotope = __webpack_require__(240);

	exports.isotope = _interopRequire(_isotope);

	var _marrakesh = __webpack_require__(241);

	exports.marrakesh = _interopRequire(_marrakesh);

	var _mocha = __webpack_require__(242);

	exports.mocha = _interopRequire(_mocha);

	var _monokai = __webpack_require__(243);

	exports.monokai = _interopRequire(_monokai);

	var _ocean = __webpack_require__(244);

	exports.ocean = _interopRequire(_ocean);

	var _paraiso = __webpack_require__(245);

	exports.paraiso = _interopRequire(_paraiso);

	var _pop = __webpack_require__(246);

	exports.pop = _interopRequire(_pop);

	var _railscasts = __webpack_require__(247);

	exports.railscasts = _interopRequire(_railscasts);

	var _shapeshifter = __webpack_require__(248);

	exports.shapeshifter = _interopRequire(_shapeshifter);

	var _solarized = __webpack_require__(249);

	exports.solarized = _interopRequire(_solarized);

	var _summerfruit = __webpack_require__(250);

	exports.summerfruit = _interopRequire(_summerfruit);

	var _tomorrow = __webpack_require__(251);

	exports.tomorrow = _interopRequire(_tomorrow);

	var _tube = __webpack_require__(252);

	exports.tube = _interopRequire(_tube);

	var _twilight = __webpack_require__(253);

	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 251 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 252 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.updateScrollTop = updateScrollTop;
	var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
	function updateScrollTop(scrollTop) {
	  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
	}

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = reducer;

	var _actions = __webpack_require__(255);

	function initialScrollTop(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];

	  if (!props.preserveScrollTop) {
	    return 0;
	  }

	  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
	}

	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];

	  return {
	    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action)
	  };
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LogMonitorEntry = __webpack_require__(258);

	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogMonitorEntryList = (function (_Component) {
	  _inherits(LogMonitorEntryList, _Component);

	  function LogMonitorEntryList() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, LogMonitorEntryList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  LogMonitorEntryList.prototype.render = function render() {
	    var elements = [];
	    var _props = this.props;
	    var theme = _props.theme;
	    var actionsById = _props.actionsById;
	    var computedStates = _props.computedStates;
	    var select = _props.select;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var expandActionRoot = _props.expandActionRoot;
	    var expandStateRoot = _props.expandStateRoot;
	    var onActionClick = _props.onActionClick;

	    for (var i = 0; i < stagedActionIds.length; i++) {
	      var actionId = stagedActionIds[i];
	      var action = actionsById[actionId].action;
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;

	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
	        theme: theme,
	        select: select,
	        action: action,
	        actionId: actionId,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActionIds.indexOf(actionId) > -1,
	        error: error,
	        expandActionRoot: expandActionRoot,
	        expandStateRoot: expandStateRoot,
	        onActionClick: onActionClick }));
	    }

	    return _react2.default.createElement(
	      'div',
	      null,
	      elements
	    );
	  };

	  return LogMonitorEntryList;
	})(_react.Component);

	LogMonitorEntryList.propTypes = {
	  actionsById: _react.PropTypes.object,
	  computedStates: _react.PropTypes.array,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,

	  select: _react.PropTypes.func.isRequired,
	  onActionClick: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntryList;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(259);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	var _LogMonitorEntryAction = __webpack_require__(378);

	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};

	var LogMonitorEntry = (function (_Component) {
	  _inherits(LogMonitorEntry, _Component);

	  function LogMonitorEntry(props) {
	    _classCallCheck(this, LogMonitorEntry);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.handleActionClick = _this.handleActionClick.bind(_this);
	    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
	    return _this;
	  }

	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2.default.createElement(_reactJsonTree2.default, {
	          theme: this.props.theme,
	          keyPath: ['state'],
	          data: this.props.select(state),
	          previousData: typeof this.props.previousState !== 'undefined' ? this.props.select(this.props.previousState) : undefined,
	          shouldExpandNode: this.shouldExpandNode,
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };

	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var actionId = _props.actionId;
	    var onActionClick = _props.onActionClick;

	    if (actionId > 0) {
	      onActionClick(actionId);
	    }
	  };

	  LogMonitorEntry.prototype.shouldExpandNode = function shouldExpandNode() {
	    return this.props.expandStateRoot;
	  };

	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var actionId = _props2.actionId;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;

	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: actionId > 0 ? 'pointer' : 'default'
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: {
	          textDecoration: collapsed ? 'line-through' : 'none',
	          color: this.props.theme.base06
	        } },
	      _react2.default.createElement(_LogMonitorEntryAction2.default, {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        expandActionRoot: this.props.expandActionRoot,
	        onClick: this.handleActionClick,
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2.default.createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };

	  return LogMonitorEntry;
	})(_react.Component);

	LogMonitorEntry.propTypes = {
	  state: _react.PropTypes.object.isRequired,
	  action: _react.PropTypes.object.isRequired,
	  actionId: _react.PropTypes.number.isRequired,
	  select: _react.PropTypes.func.isRequired,
	  error: _react.PropTypes.string,
	  onActionClick: _react.PropTypes.func.isRequired,
	  collapsed: _react.PropTypes.bool,
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntry;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = undefined;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(298);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(336);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _grabNode = __webpack_require__(344);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var _solarized = __webpack_require__(377);

	var _solarized2 = _interopRequireDefault(_solarized);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};

	var getEmptyStyle = function getEmptyStyle() {
	  return {};
	};
	var identity = function identity(value) {
	  return value;
	};

	var JSONTree = (_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(JSONTree, _React$Component);

	  function JSONTree(props) {
	    (0, _classCallCheck3.default)(this, JSONTree);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	  }

	  JSONTree.prototype.render = function render() {
	    var getStyles = {
	      getArrowStyle: this.props.getArrowStyle,
	      getListStyle: this.props.getListStyle,
	      getItemStringStyle: this.props.getItemStringStyle,
	      getLabelStyle: this.props.getLabelStyle,
	      getValueStyle: this.props.getValueStyle
	    };

	    var _props = this.props;
	    var value = _props.data;
	    var initialExpanded = _props.expandRoot;
	    var allExpanded = _props.expandAll;
	    var style = _props.style;
	    var keyPath = _props.keyPath;
	    var postprocessValue = _props.postprocessValue;
	    var hideRoot = _props.hideRoot;
	    var rest = (0, _objectWithoutProperties3.default)(_props, ['data', 'expandRoot', 'expandAll', 'style', 'keyPath', 'postprocessValue', 'hideRoot']);


	    var nodeToRender = undefined;

	    nodeToRender = (0, _grabNode2.default)((0, _extends3.default)({
	      initialExpanded: initialExpanded,
	      allExpanded: allExpanded,
	      keyPath: hideRoot ? [] : keyPath,
	      styles: getStyles,
	      value: postprocessValue(value),
	      postprocessValue: postprocessValue,
	      hideRoot: hideRoot
	    }, rest));

	    return _react2.default.createElement(
	      'ul',
	      { style: (0, _extends3.default)({}, styles.tree, style) },
	      nodeToRender
	    );
	  };

	  return JSONTree;
	}(_react2.default.Component), _class.propTypes = {
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]).isRequired,
	  hideRoot: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	  expandRoot: true,
	  expandAll: false,
	  hideRoot: false,
	  keyPath: ['root'],
	  theme: _solarized2.default,
	  getArrowStyle: getEmptyStyle,
	  getListStyle: getEmptyStyle,
	  getItemStringStyle: getEmptyStyle,
	  getLabelStyle: getEmptyStyle,
	  getValueStyle: getEmptyStyle,
	  getItemString: function getItemString(type, data, itemType, itemString) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      itemType,
	      ' ',
	      itemString
	    );
	  },
	  labelRenderer: identity,
	  valueRenderer: identity,
	  postprocessValue: identity,
	  isCustomNode: function isCustomNode() {
	    return false;
	  },
	  collectionLimit: 50
	}, _temp);
	exports['default'] = JSONTree;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(261);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 261 */
[515, 262],
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(263);
	module.exports = __webpack_require__(266).Object.assign;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(264);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(279)});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(265)
	  , core      = __webpack_require__(266)
	  , ctx       = __webpack_require__(267)
	  , hide      = __webpack_require__(269)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 265 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 266 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.3.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(268);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(270)
	  , createDesc = __webpack_require__(278);
	module.exports = __webpack_require__(274) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(271)
	  , IE8_DOM_DEFINE = __webpack_require__(273)
	  , toPrimitive    = __webpack_require__(277)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(274) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(272);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(274) && !__webpack_require__(275)(function(){
	  return Object.defineProperty(__webpack_require__(276)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(275)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(272)
	  , document = __webpack_require__(265).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(272);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(280)
	  , gOPS     = __webpack_require__(295)
	  , pIE      = __webpack_require__(296)
	  , toObject = __webpack_require__(297)
	  , IObject  = __webpack_require__(284)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(275)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(281)
	  , enumBugKeys = __webpack_require__(294);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(282)
	  , toIObject    = __webpack_require__(283)
	  , arrayIndexOf = __webpack_require__(287)(false)
	  , IE_PROTO     = __webpack_require__(291)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(284)
	  , defined = __webpack_require__(286);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(285);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 285 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(283)
	  , toLength  = __webpack_require__(288)
	  , toIndex   = __webpack_require__(290);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(289)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 289 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(289)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(292)('keys')
	  , uid    = __webpack_require__(293);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(265)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 293 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 294 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 295 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 296 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(286);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(301);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(302);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(322);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	__webpack_require__(317);
	module.exports = __webpack_require__(321).f('iterator');

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(305)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(306)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(289)
	  , defined   = __webpack_require__(286);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(307)
	  , $export        = __webpack_require__(264)
	  , redefine       = __webpack_require__(308)
	  , hide           = __webpack_require__(269)
	  , has            = __webpack_require__(282)
	  , Iterators      = __webpack_require__(309)
	  , $iterCreate    = __webpack_require__(310)
	  , setToStringTag = __webpack_require__(314)
	  , getPrototypeOf = __webpack_require__(316)
	  , ITERATOR       = __webpack_require__(315)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(269);

/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(311)
	  , descriptor     = __webpack_require__(278)
	  , setToStringTag = __webpack_require__(314)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(269)(IteratorPrototype, __webpack_require__(315)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(271)
	  , dPs         = __webpack_require__(312)
	  , enumBugKeys = __webpack_require__(294)
	  , IE_PROTO    = __webpack_require__(291)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(276)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(313).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(270)
	  , anObject = __webpack_require__(271)
	  , getKeys  = __webpack_require__(280);

	module.exports = __webpack_require__(274) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(265).document && document.documentElement;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(270).f
	  , has = __webpack_require__(282)
	  , TAG = __webpack_require__(315)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(292)('wks')
	  , uid        = __webpack_require__(293)
	  , Symbol     = __webpack_require__(265).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(282)
	  , toObject    = __webpack_require__(297)
	  , IE_PROTO    = __webpack_require__(291)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(318);
	var global        = __webpack_require__(265)
	  , hide          = __webpack_require__(269)
	  , Iterators     = __webpack_require__(309)
	  , TO_STRING_TAG = __webpack_require__(315)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(319)
	  , step             = __webpack_require__(320)
	  , Iterators        = __webpack_require__(309)
	  , toIObject        = __webpack_require__(283);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(306)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 319 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 320 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(315);

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(323), __esModule: true };

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(324);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	module.exports = __webpack_require__(266).Symbol;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(265)
	  , has            = __webpack_require__(282)
	  , DESCRIPTORS    = __webpack_require__(274)
	  , $export        = __webpack_require__(264)
	  , redefine       = __webpack_require__(308)
	  , META           = __webpack_require__(325).KEY
	  , $fails         = __webpack_require__(275)
	  , shared         = __webpack_require__(292)
	  , setToStringTag = __webpack_require__(314)
	  , uid            = __webpack_require__(293)
	  , wks            = __webpack_require__(315)
	  , wksExt         = __webpack_require__(321)
	  , wksDefine      = __webpack_require__(326)
	  , keyOf          = __webpack_require__(327)
	  , enumKeys       = __webpack_require__(328)
	  , isArray        = __webpack_require__(329)
	  , anObject       = __webpack_require__(271)
	  , toIObject      = __webpack_require__(283)
	  , toPrimitive    = __webpack_require__(277)
	  , createDesc     = __webpack_require__(278)
	  , _create        = __webpack_require__(311)
	  , gOPNExt        = __webpack_require__(330)
	  , $GOPD          = __webpack_require__(332)
	  , $DP            = __webpack_require__(270)
	  , $keys          = __webpack_require__(280)
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
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	      configurable: true,
	      set: function(value){
	        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	        setSymbolDesc(this, tag, createDesc(1, value));
	      }
	    });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(331).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(296).f  = $propertyIsEnumerable;
	  __webpack_require__(295).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(307)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(269)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(293)('meta')
	  , isObject = __webpack_require__(272)
	  , has      = __webpack_require__(282)
	  , setDesc  = __webpack_require__(270).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(275)(function(){
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

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(265)
	  , core           = __webpack_require__(266)
	  , LIBRARY        = __webpack_require__(307)
	  , wksExt         = __webpack_require__(321)
	  , defineProperty = __webpack_require__(270).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(280)
	  , toIObject = __webpack_require__(283);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(280)
	  , gOPS    = __webpack_require__(295)
	  , pIE     = __webpack_require__(296);
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

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(285);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(283)
	  , gOPN      = __webpack_require__(331).f
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


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(281)
	  , hiddenKeys = __webpack_require__(294).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(296)
	  , createDesc     = __webpack_require__(278)
	  , toIObject      = __webpack_require__(283)
	  , toPrimitive    = __webpack_require__(277)
	  , has            = __webpack_require__(282)
	  , IE8_DOM_DEFINE = __webpack_require__(273)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(274) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 333 */
/***/ function(module, exports) {

	

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(326)('asyncIterator');

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(326)('observable');

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(337);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(341);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(301);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 337 */
[516, 338],
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(339);
	module.exports = __webpack_require__(266).Object.setPrototypeOf;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(264);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(340).set});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(272)
	  , anObject = __webpack_require__(271);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(267)(Function.call, __webpack_require__(332).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 341 */
[517, 342],
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(343);
	var $Object = __webpack_require__(266).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(264)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(311)});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(298);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	exports['default'] = function (_ref) {
	  var getItemString = _ref.getItemString;
	  var _ref$initialExpanded = _ref.initialExpanded;
	  var initialExpanded = _ref$initialExpanded === undefined ? false : _ref$initialExpanded;
	  var keyPath = _ref.keyPath;
	  var labelRenderer = _ref.labelRenderer;
	  var previousData = _ref.previousData;
	  var styles = _ref.styles;
	  var theme = _ref.theme;
	  var value = _ref.value;
	  var valueRenderer = _ref.valueRenderer;
	  var isCustomNode = _ref.isCustomNode;
	  var rest = (0, _objectWithoutProperties3['default'])(_ref, ['getItemString', 'initialExpanded', 'keyPath', 'labelRenderer', 'previousData', 'styles', 'theme', 'value', 'valueRenderer', 'isCustomNode']);

	  var nodeType = isCustomNode(value) ? 'Custom' : (0, _objType2['default'])(value);

	  var simpleNodeProps = {
	    getItemString: getItemString,
	    initialExpanded: initialExpanded,
	    key: keyPath[0],
	    keyPath: keyPath,
	    labelRenderer: labelRenderer,
	    nodeType: nodeType,
	    previousData: previousData,
	    styles: styles,
	    theme: theme,
	    value: value,
	    valueRenderer: valueRenderer
	  };

	  var nestedNodeProps = (0, _extends3['default'])({}, rest, simpleNodeProps, {
	    data: value,
	    isCustomNode: isCustomNode
	  });

	  switch (nodeType) {
	    case 'Object':
	    case 'Error':
	      return _react2['default'].createElement(_JSONObjectNode2['default'], nestedNodeProps);
	    case 'Array':
	      return _react2['default'].createElement(_JSONArrayNode2['default'], nestedNodeProps);
	    case 'Iterable':
	      return _react2['default'].createElement(_JSONIterableNode2['default'], nestedNodeProps);
	    case 'String':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return '"' + raw + '"';
	        } }));
	    case 'Number':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base09 }));
	    case 'Boolean':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base09, valueGetter: function valueGetter(raw) {
	          return raw ? 'true' : 'false';
	        } }));
	    case 'Date':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return raw.toISOString();
	        } }));
	    case 'Null':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'null';
	        } }));
	    case 'Undefined':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'undefined';
	        } }));
	    case 'Function':
	    case 'Symbol':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter(raw) {
	          return raw.toString();
	        } }));
	    case 'Custom':
	      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
	    default:
	      return false;
	  }
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objType = __webpack_require__(345);

	var _objType2 = _interopRequireDefault(_objType);

	var _JSONObjectNode = __webpack_require__(346);

	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

	var _JSONArrayNode = __webpack_require__(369);

	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

	var _JSONIterableNode = __webpack_require__(370);

	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

	var _JSONValueNode = __webpack_require__(375);

	var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _iterator = __webpack_require__(302);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _typeof2 = __webpack_require__(301);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports['default'] = function (obj) {
	  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3['default'])(obj)) === 'object' && !Array.isArray(obj) && typeof obj[_iterator2['default']] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(298);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getOwnPropertyNames = __webpack_require__(347);

	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

	exports['default'] = function (_ref) {
	  var props = (0, _objectWithoutProperties3['default'])(_ref, []);

	  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
	    nodeType: 'Object',
	    nodeTypeIndicator: '{}',
	    createItemString: createItemString
	  }));
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _JSONNestedNode = __webpack_require__(351);

	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function createItemString(data) {
	  var len = (0, _getOwnPropertyNames2.default)(data).length;
	  return len + ' ' + (len !== 1 ? 'keys' : 'key');
	}

	// Configures <JSONNestedNode> to render an Object

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(348), __esModule: true };

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(349);
	var $Object = __webpack_require__(266).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(350)('getOwnPropertyNames', function(){
	  return __webpack_require__(330).f;
	});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(264)
	  , core    = __webpack_require__(266)
	  , fails   = __webpack_require__(275);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = undefined;

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(336);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(352);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(355);

	var _JSONArrow = __webpack_require__(358);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _getCollectionEntries = __webpack_require__(359);

	var _getCollectionEntries2 = _interopRequireDefault(_getCollectionEntries);

	var _grabNode = __webpack_require__(344);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var _ItemRange = __webpack_require__(368);

	var _ItemRange2 = _interopRequireDefault(_ItemRange);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Renders nested values (eg. objects, arrays, lists, etc.)
	 */

	function getChildNodes(props, from, to) {
	  var nodeType = props.nodeType;
	  var data = props.data;
	  var collectionLimit = props.collectionLimit;
	  var previousData = props.previousData;
	  var circularCache = props.circularCache;
	  var keyPath = props.keyPath;
	  var postprocessValue = props.postprocessValue;
	  var allExpanded = props.allExpanded;

	  var childNodes = [];

	  (0, _getCollectionEntries2.default)(nodeType, data, collectionLimit, from, to).forEach(function (entry) {
	    if (entry.to) {
	      childNodes.push(_react2.default.createElement(_ItemRange2.default, (0, _extends3.default)({}, props, {
	        key: 'ItemRange' + entry.from + '-' + entry.to,
	        from: entry.from,
	        to: entry.to,
	        getChildNodes: getChildNodes })));
	    } else {
	      var key = entry.key;
	      var value = entry.value;

	      var previousDataValue = undefined;
	      if (typeof previousData !== 'undefined' && previousData !== null) {
	        previousDataValue = previousData[key];
	      }
	      var isCircular = circularCache.indexOf(value) !== -1;

	      var node = (0, _grabNode2.default)((0, _extends3.default)({}, props, {
	        keyPath: [key].concat(keyPath),
	        previousData: previousDataValue,
	        value: postprocessValue(value),
	        postprocessValue: postprocessValue,
	        collectionLimit: collectionLimit,
	        circularCache: [].concat(circularCache, [value]),
	        initialExpanded: false,
	        allExpanded: isCircular ? false : allExpanded,
	        hideRoot: false
	      }));

	      if (node !== false) {
	        childNodes.push(node);
	      }
	    }
	  });

	  return childNodes;
	}

	var STYLES = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block',
	    cursor: 'pointer'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONNestedNode = (_dec = _reactMixin2.default.decorate(_mixins.ExpandedStateHandlerMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(JSONNestedNode, _React$Component);

	  function JSONNestedNode(props) {
	    (0, _classCallCheck3.default)(this, JSONNestedNode);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.state = {
	      expanded: _this.props.initialExpanded || _this.props.allExpanded,
	      createdChildNodes: false
	    };
	    return _this;
	  }

	  JSONNestedNode.prototype.render = function render() {
	    var _props = this.props;
	    var getItemString = _props.getItemString;
	    var nodeTypeIndicator = _props.nodeTypeIndicator;
	    var nodeType = _props.nodeType;
	    var data = _props.data;
	    var hideRoot = _props.hideRoot;
	    var styles = _props.styles;
	    var createItemString = _props.createItemString;
	    var theme = _props.theme;
	    var collectionLimit = _props.collectionLimit;
	    var keyPath = _props.keyPath;
	    var labelRenderer = _props.labelRenderer;

	    var expanded = this.state.expanded;
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: expanded ? 'block' : 'none'
	    };
	    var spanStyle = (0, _extends3.default)({}, STYLES.span, {
	      color: theme.base0B
	    });
	    var containerStyle = (0, _extends3.default)({}, STYLES.base);

	    if (expanded) {
	      spanStyle = (0, _extends3.default)({}, spanStyle, {
	        color: theme.base03
	      });
	    }

	    var renderedChildren = expanded ? getChildNodes(this.props) : null;

	    var itemType = _react2.default.createElement(
	      'span',
	      { style: STYLES.spanType },
	      nodeTypeIndicator
	    );
	    var renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit));

	    return hideRoot ? _react2.default.createElement(
	      'div',
	      null,
	      renderedChildren
	    ) : _react2.default.createElement(
	      'li',
	      { style: containerStyle },
	      _react2.default.createElement(_JSONArrow2.default, {
	        theme: theme,
	        open: expanded,
	        onClick: this.handleClick.bind(this),
	        style: styles.getArrowStyle(expanded) }),
	      _react2.default.createElement(
	        'label',
	        {
	          style: (0, _extends3.default)({}, STYLES.label, {
	            color: theme.base0D
	          }, styles.getLabelStyle(nodeType, expanded)),
	          onClick: this.handleClick.bind(this) },
	        labelRenderer.apply(undefined, keyPath),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        {
	          style: (0, _extends3.default)({}, spanStyle, styles.getItemStringStyle(nodeType, expanded)),
	          onClick: this.handleClick.bind(this) },
	        renderedItemString
	      ),
	      _react2.default.createElement(
	        'ul',
	        { style: (0, _extends3.default)({}, childListStyle, styles.getListStyle(nodeType, expanded)) },
	        renderedChildren
	      )
	    );
	  };

	  return JSONNestedNode;
	}(_react2.default.Component), _class2.defaultProps = {
	  data: [],
	  initialExpanded: false,
	  allExpanded: false,
	  circularCache: []
	}, _temp)) || _class);
	exports['default'] = JSONNestedNode;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(353);
	var assign = __webpack_require__(354);

	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});

	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;

	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();

	    delete reactMixin.getDefaultProps;
	  }
	}

	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;

	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }

	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }

	    delete reactMixin.getInitialState;
	  }
	}

	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);

	  var prototypeMethods = {};
	  var staticProps = {};

	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });

	  mixinProto(reactClass.prototype, prototypeMethods);

	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;

	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });

	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });

	    return result;
	  };

	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);

	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];

	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }

	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }

	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }

	  return reactClass;
	}

	module.exports = (function() {
	  var reactMixin = mixinProto;

	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };

	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };

	  return reactMixin;
	})();


/***/ },
/* 353 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };

	var thrower = function(error){
	    throw error;
	};

	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }

	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }

	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }

	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];

	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;

	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };

	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }

	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";

	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }

	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};

	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };

	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }

	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);

	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });

	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;

	}

	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }

	    var fn = left || right;

	    return function(args){
	        return fn.apply(this, args);
	    };
	};

	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};

	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }

	    return left || right;
	}

	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};


	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};

	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};



/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _squashClickEvent = __webpack_require__(356);

	Object.defineProperty(exports, 'SquashClickEventMixin', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_squashClickEvent)['default'];
	  }
	});

	var _expandedStateHandler = __webpack_require__(357);

	Object.defineProperty(exports, 'ExpandedStateHandlerMixin', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_expandedStateHandler)['default'];
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ },
/* 356 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};

/***/ },
/* 357 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = undefined;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(336);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)',
	    position: 'relative'
	  },
	  container: {
	    display: 'inline-block',
	    paddingTop: 2,
	    paddingBottom: 2,
	    paddingRight: 5,
	    paddingLeft: 5,
	    cursor: 'pointer'
	  },
	  containerDouble: {
	    paddingTop: 2,
	    paddingBottom: 2,
	    paddingRight: 10,
	    paddingLeft: 10
	  },
	  arrow: {
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  },
	  inner: {
	    position: 'absolute',
	    top: 0,
	    left: -5
	  }
	};

	var JSONArrow = function (_React$Component) {
	  (0, _inherits3.default)(JSONArrow, _React$Component);

	  function JSONArrow() {
	    (0, _classCallCheck3.default)(this, JSONArrow);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }

	  JSONArrow.prototype.render = function render() {
	    var containerStyle = (0, _extends3.default)({}, styles.container);
	    var style = (0, _extends3.default)({}, styles.base, styles.arrow);
	    var color = {
	      borderTopColor: this.props.theme.base0D
	    };
	    if (this.props.open) {
	      style = (0, _extends3.default)({}, style, styles.open);
	    }
	    if (this.props.double) {
	      containerStyle = (0, _extends3.default)({}, containerStyle, styles.containerDouble);
	    }
	    style = (0, _extends3.default)({}, style, this.props.style);
	    return _react2.default.createElement(
	      'div',
	      { style: containerStyle, onClick: this.props.onClick },
	      _react2.default.createElement(
	        'div',
	        { style: (0, _extends3.default)({}, color, style) },
	        this.props.double && _react2.default.createElement('div', { style: (0, _extends3.default)({}, color, styles.inner, styles.arrow) })
	      )
	    );
	  };

	  return JSONArrow;
	}(_react2.default.Component);

	exports['default'] = JSONArrow;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(360);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getOwnPropertyNames = __webpack_require__(347);

	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

	var _keys = __webpack_require__(365);

	var _keys2 = _interopRequireDefault(_keys);

	exports['default'] = getCollectionEntries;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getLength(type, collection) {
	  if (type === 'Object') {
	    return (0, _keys2.default)(collection).length;
	  } else if (type === 'Array') {
	    return collection.length;
	  }

	  return Infinity;
	}

	function isIterableMap(collection) {
	  return typeof collection.set === 'function';
	}

	function getEntries(type, collection) {
	  var from = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	  var to = arguments.length <= 3 || arguments[3] === undefined ? Infinity : arguments[3];

	  var res = undefined;

	  if (type === 'Object') {
	    var keys = (0, _getOwnPropertyNames2.default)(collection).slice(from, to + 1);

	    res = {
	      entries: keys.map(function (key) {
	        return { key: key, value: collection[key] };
	      })
	    };
	  } else if (type === 'Array') {
	    res = {
	      entries: collection.slice(from, to + 1).map(function (val, idx) {
	        return { key: idx + from, value: val };
	      })
	    };
	  } else {
	    var idx = 0;
	    var entries = [];
	    var done = true;

	    var isMap = isIterableMap(collection);

	    for (var _iterator = collection, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var item = _ref;

	      if (idx > to) {
	        done = false;
	        break;
	      }if (from <= idx) {
	        if (isMap && Array.isArray(item)) {
	          entries.push({ key: item[0], value: item[1] });
	        } else {
	          entries.push({ key: idx, value: item });
	        }
	      }
	      idx++;
	    }

	    res = {
	      hasMore: !done,
	      entries: entries
	    };
	  }

	  return res;
	}

	function getRanges(from, to, limit) {
	  var ranges = [];
	  while (to - from > limit * limit) {
	    limit = limit * limit;
	  }
	  for (var i = from; i <= to; i += limit) {
	    ranges.push({ from: i, to: Math.min(to, i + limit - 1) });
	  }

	  return ranges;
	}

	function getCollectionEntries(type, collection, limit) {
	  var from = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  var to = arguments.length <= 4 || arguments[4] === undefined ? Infinity : arguments[4];

	  if (!limit) {
	    return getEntries(type, collection).entries;
	  }
	  var isSubset = to < Infinity;
	  var length = Math.min(to - from, getLength(type, collection));

	  if (type !== 'Iterable') {
	    if (length <= limit || limit < 7) {
	      return getEntries(type, collection, from, to).entries;
	    }
	  } else {
	    if (length <= limit && !isSubset) {
	      return getEntries(type, collection, from, to).entries;
	    }
	  }

	  var limitedEntries = undefined;
	  if (type === 'Iterable') {
	    var _getEntries = getEntries(type, collection, from, from + limit - 1);

	    var hasMore = _getEntries.hasMore;
	    var entries = _getEntries.entries;


	    limitedEntries = hasMore ? [].concat(entries, getRanges(from + limit, from + 2 * limit - 1, limit)) : entries;
	  } else {
	    limitedEntries = isSubset ? getRanges(from, to, limit) : [].concat(getEntries(type, collection, 0, limit - 5).entries, getRanges(limit - 4, length - 5, limit), getEntries(type, collection, length - 4, length - 1).entries);
	  }

	  return limitedEntries;
	}

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(361), __esModule: true };

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(317);
	__webpack_require__(304);
	module.exports = __webpack_require__(362);

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(271)
	  , get      = __webpack_require__(363);
	module.exports = __webpack_require__(266).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(364)
	  , ITERATOR  = __webpack_require__(315)('iterator')
	  , Iterators = __webpack_require__(309);
	module.exports = __webpack_require__(266).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(285)
	  , TAG = __webpack_require__(315)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 365 */
[518, 366],
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(367);
	module.exports = __webpack_require__(266).Object.keys;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(297)
	  , $keys    = __webpack_require__(280);

	__webpack_require__(350)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = undefined;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(336);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _function = __webpack_require__(213);

	var _function2 = _interopRequireDefault(_function);

	var _JSONArrow = __webpack_require__(358);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var STYLES = {
	  itemRange: {
	    margin: '8px 0 8px 14px',
	    cursor: 'pointer'
	  }
	};

	var ItemRange = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(ItemRange, _Component);

	  function ItemRange(props) {
	    (0, _classCallCheck3.default)(this, ItemRange);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.state = { expanded: false };

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  ItemRange.prototype.render = function render() {
	    var _props = this.props;
	    var theme = _props.theme;
	    var styles = _props.styles;
	    var from = _props.from;
	    var to = _props.to;
	    var getChildNodes = _props.getChildNodes;


	    return this.state.expanded ? _react2.default.createElement(
	      'div',
	      { style: (0, _extends3.default)({ color: theme.base0D }, styles.label) },
	      getChildNodes(this.props, from, to)
	    ) : _react2.default.createElement(
	      'div',
	      { style: (0, _extends3.default)({ color: theme.base0D }, STYLES.itemRange, styles.label),
	        onClick: this.handleClick },
	      _react2.default.createElement(_JSONArrow2.default, {
	        theme: theme,
	        open: false,
	        onClick: this.handleClick,
	        style: styles.getArrowStyle(false),
	        double: true }),
	      from + ' ... ' + to
	    );
	  };

	  ItemRange.prototype.handleClick = function handleClick() {
	    this.setState({ expanded: !this.state.expanded });
	  };

	  return ItemRange;
	}(_react.Component), _class.propTypes = {}, _temp);
	exports['default'] = ItemRange;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(298);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	exports['default'] = JSONArrayNode;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _JSONNestedNode = __webpack_require__(351);

	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function createItemString(data) {
	  return data.length + ' ' + (data.length !== 1 ? 'items' : 'item');
	}

	// Configures <JSONNestedNode> to render an Array
	function JSONArrayNode(_ref) {
	  var props = (0, _objectWithoutProperties3.default)(_ref, []);

	  return _react2.default.createElement(_JSONNestedNode2.default, (0, _extends3.default)({}, props, {
	    nodeType: 'Array',
	    nodeTypeIndicator: '[]',
	    createItemString: createItemString
	  }));
	}

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(298);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getIterator2 = __webpack_require__(360);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _isSafeInteger = __webpack_require__(371);

	var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

	exports['default'] = function (_ref2) {
	  var props = (0, _objectWithoutProperties3['default'])(_ref2, []);

	  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
	    nodeType: 'Iterable',
	    nodeTypeIndicator: '()',
	    createItemString: createItemString
	  }));
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _JSONNestedNode = __webpack_require__(351);

	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function createItemString(data, limit) {
	  var count = 0;
	  var hasMore = false;
	  if ((0, _isSafeInteger2.default)(data.size)) {
	    count = data.size;
	  } else {
	    for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var entry = _ref;
	      // eslint-disable-line no-unused-vars
	      if (limit && count + 1 > limit) {
	        hasMore = true;
	        break;
	      }
	      count += 1;
	    }
	  }
	  return '' + (hasMore ? '>' : '') + count + ' ' + (count !== 1 ? 'entries' : 'entry');
	}

	// Configures <JSONNestedNode> to render an iterable

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(372), __esModule: true };

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(373);
	module.exports = __webpack_require__(266).Number.isSafeInteger;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(264)
	  , isInteger = __webpack_require__(374)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(272)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = undefined;

	var _extends2 = __webpack_require__(260);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(336);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(352);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(355);

	var _hexToRgb = __webpack_require__(376);

	var _hexToRgb2 = _interopRequireDefault(_hexToRgb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Renders simple values (eg. strings, numbers, booleans, etc)
	 */

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONValueNode = (_dec = _reactMixin2.default.decorate(_mixins.SquashClickEventMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(JSONValueNode, _React$Component);

	  function JSONValueNode() {
	    (0, _classCallCheck3.default)(this, JSONValueNode);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }

	  JSONValueNode.prototype.render = function render() {
	    var _props;

	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = (0, _hexToRgb2.default)(this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }

	    return _react2.default.createElement(
	      'li',
	      { style: (0, _extends3.default)({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2.default.createElement(
	        'label',
	        { style: (0, _extends3.default)({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle(this.props.nodeType, true)) },
	        (_props = this.props).labelRenderer.apply(_props, this.props.keyPath),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: (0, _extends3.default)({
	            color: this.props.valueColor
	          }, this.props.styles.getValueStyle(this.props.nodeType, true)) },
	        this.props.valueRenderer(this.props.valueGetter(this.props.value), this.props.value)
	      )
	    );
	  };

	  return JSONValueNode;
	}(_react2.default.Component), _class2.defaultProps = {
	  valueGetter: function valueGetter(value) {
	    return value;
	  }
	}, _temp)) || _class);
	exports['default'] = JSONValueNode;

/***/ },
/* 376 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

/***/ },
/* 377 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(259);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};

	var LogMonitorAction = (function (_Component) {
	  _inherits(LogMonitorAction, _Component);

	  function LogMonitorAction(props) {
	    _classCallCheck(this, LogMonitorAction);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
	    return _this;
	  }

	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme,
	        keyPath: ['action'],
	        data: payload,
	        shouldExpandNode: this.shouldExpandNode }) : ''
	    );
	  };

	  LogMonitorAction.prototype.shouldExpandNode = function shouldExpandNode() {
	    return this.props.expandActionRoot;
	  };

	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;

	    var payload = _objectWithoutProperties(_props$action, ['type']);

	    return _react2.default.createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2.default.createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type.toString()
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };

	  return LogMonitorAction;
	})(_react.Component);

	exports.default = LogMonitorAction;

/***/ },
/* 379 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = debounce;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _DockMonitor = __webpack_require__(381);

	var _DockMonitor2 = _interopRequireDefault(_DockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _DockMonitor2.default;

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDock = __webpack_require__(382);

	var _reactDock2 = _interopRequireDefault(_reactDock);

	var _constants = __webpack_require__(452);

	var _actions = __webpack_require__(453);

	var _reducers = __webpack_require__(454);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _parseKey = __webpack_require__(455);

	var _parseKey2 = _interopRequireDefault(_parseKey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DockMonitor = function (_Component) {
	  _inherits(DockMonitor, _Component);

	  function DockMonitor(props) {
	    _classCallCheck(this, DockMonitor);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleSizeChange = _this.handleSizeChange.bind(_this);

	    var childrenCount = _react.Children.count(props.children);
	    if (childrenCount === 0) {
	      console.error('<DockMonitor> requires at least one monitor inside. ' + 'Why don’t you try <LogMonitor>? You can get it at ' + 'https://github.com/gaearon/redux-devtools-log-monitor.');
	    } else if (childrenCount > 1 && !props.changeMonitorKey) {
	      console.error('You specified multiple monitors inside <DockMonitor> ' + 'but did not provide `changeMonitorKey` prop to change them. ' + 'Try specifying <DockMonitor changeMonitorKey="ctrl-m" /> ' + 'and then press Ctrl-M.');
	    }
	    return _this;
	  }

	  DockMonitor.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('keydown', this.handleKeyDown);
	  };

	  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  };

	  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
	    if (!key) {
	      return false;
	    }

	    var charCode = event.keyCode || event.which;
	    var char = String.fromCharCode(charCode);
	    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
	  };

	  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
	    // Ignore regular keys when focused on a field
	    // and no modifiers are active.
	    if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
	      return;
	    }

	    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
	    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);

	    var monitorKey = void 0;
	    if (this.props.changeMonitorKey) {
	      monitorKey = (0, _parseKey2.default)(this.props.changeMonitorKey);
	    }

	    if (this.matchesKey(visibilityKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.toggleVisibility)());
	    } else if (this.matchesKey(positionKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changePosition)());
	    } else if (this.matchesKey(monitorKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changeMonitor)());
	    }
	  };

	  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
	    this.props.dispatch((0, _actions.changeSize)(requestedSize));
	  };

	  DockMonitor.prototype.renderChild = function renderChild(child, index, otherProps) {
	    var monitorState = this.props.monitorState;
	    var childMonitorIndex = monitorState.childMonitorIndex;
	    var childMonitorStates = monitorState.childMonitorStates;


	    if (index !== childMonitorIndex) {
	      return null;
	    }

	    return (0, _react.cloneElement)(child, _extends({
	      monitorState: childMonitorStates[index]
	    }, otherProps));
	  };

	  DockMonitor.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var children = _props.children;
	    var fluid = _props.fluid;

	    var rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);

	    var position = monitorState.position;
	    var isVisible = monitorState.isVisible;
	    var size = monitorState.size;


	    return _react2.default.createElement(
	      _reactDock2.default,
	      { position: position,
	        isVisible: isVisible,
	        size: size,
	        fluid: fluid,
	        onSizeChange: this.handleSizeChange,
	        dimMode: 'none' },
	      _react.Children.map(children, function (child, index) {
	        return _this2.renderChild(child, index, rest);
	      })
	    );
	  };

	  return DockMonitor;
	}(_react.Component);

	DockMonitor.update = _reducers2.default;
	DockMonitor.propTypes = {
	  defaultPosition: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	  defaultIsVisible: _react.PropTypes.bool.isRequired,
	  defaultSize: _react.PropTypes.number.isRequired,
	  toggleVisibilityKey: _react.PropTypes.string.isRequired,
	  changePositionKey: _react.PropTypes.string.isRequired,
	  changeMonitorKey: _react.PropTypes.string,
	  fluid: _react.PropTypes.bool,

	  dispatch: _react.PropTypes.func,
	  monitorState: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	    size: _react.PropTypes.number.isRequired,
	    isVisible: _react.PropTypes.bool.isRequired,
	    childMonitorState: _react.PropTypes.any
	  })
	};
	DockMonitor.defaultProps = {
	  defaultIsVisible: true,
	  defaultPosition: 'right',
	  defaultSize: 0.3,
	  fluid: true
	};
	exports.default = DockMonitor;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(383)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _Dock = __webpack_require__(384);

	var _Dock2 = _interopRequireDefault(_Dock);

	exports['default'] = _Dock2['default'];
	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(385)['default'];

	var _inherits = __webpack_require__(401)['default'];

	var _createClass = __webpack_require__(410)['default'];

	var _classCallCheck = __webpack_require__(413)['default'];

	var _extends = __webpack_require__(414)['default'];

	var _toConsumableArray = __webpack_require__(420)['default'];

	var _Object$keys = __webpack_require__(446)['default'];

	var _interopRequireDefault = __webpack_require__(383)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodashDebounce = __webpack_require__(449);

	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _autoprefix = __webpack_require__(451);

	var _autoprefix2 = _interopRequireDefault(_autoprefix);

	function autoprefixes(styles) {
	  return _Object$keys(styles).reduce(function (obj, key) {
	    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
	  }, {});
	}

	var styles = autoprefixes({
	  wrapper: {
	    position: 'fixed',
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0
	  },

	  dim: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    zIndex: 0,
	    background: 'rgba(0, 0, 0, 0.2)',
	    opacity: 1
	  },

	  dimAppear: {
	    opacity: 0
	  },

	  dimTransparent: {
	    pointerEvents: 'none'
	  },

	  dimHidden: {
	    opacity: 0
	  },

	  dock: {
	    position: 'fixed',
	    zIndex: 1,
	    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
	    background: 'white',
	    left: 0,
	    top: 0,
	    width: '100%',
	    height: '100%'
	  },

	  dockHidden: {
	    opacity: 0
	  },

	  dockResizing: {
	    transition: 'none'
	  },

	  dockContent: {
	    width: '100%',
	    height: '100%',
	    overflow: 'auto'
	  },

	  resizer: {
	    position: 'absolute',
	    zIndex: 2,
	    opacity: 0
	  }
	});

	function getTransitions(duration) {
	  return ['left', 'top', 'width', 'height'].map(function (p) {
	    return p + ' ' + duration / 1000 + 's ease-out';
	  });
	}

	function getDockStyles(_ref, _ref2) {
	  var fluid = _ref.fluid;
	  var dockStyle = _ref.dockStyle;
	  var dockHiddenStyle = _ref.dockHiddenStyle;
	  var duration = _ref.duration;
	  var position = _ref.position;
	  var isVisible = _ref.isVisible;
	  var size = _ref2.size;
	  var isResizing = _ref2.isResizing;
	  var fullWidth = _ref2.fullWidth;
	  var fullHeight = _ref2.fullHeight;

	  var posStyle = undefined;
	  var absSize = fluid ? size * 100 + '%' : size + 'px';

	  function getRestSize(fullSize) {
	    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
	  }

	  switch (position) {
	    case 'left':
	      posStyle = {
	        width: absSize,
	        left: isVisible ? 0 : '-' + absSize
	      };
	      break;
	    case 'right':
	      posStyle = {
	        left: isVisible ? getRestSize(fullWidth) : fullWidth,
	        width: absSize
	      };
	      break;
	    case 'top':
	      posStyle = {
	        top: isVisible ? 0 : '-' + absSize,
	        height: absSize
	      };
	      break;
	    case 'bottom':
	      posStyle = {
	        top: isVisible ? getRestSize(fullHeight) : fullHeight,
	        height: absSize
	      };
	      break;
	  }

	  var transitions = getTransitions(duration);

	  return [styles.dock, (0, _autoprefix2['default'])({
	    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
	      return t;
	    }).join(',')
	  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
	}

	function getDimStyles(_ref3, _ref4) {
	  var dimMode = _ref3.dimMode;
	  var dimStyle = _ref3.dimStyle;
	  var duration = _ref3.duration;
	  var isVisible = _ref3.isVisible;
	  var isTransitionStarted = _ref4.isTransitionStarted;

	  return [styles.dim, (0, _autoprefix2['default'])({
	    transition: 'opacity ' + duration / 1000 + 's ease-out'
	  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
	}

	function getResizerStyles(position) {
	  var resizerStyle = undefined;
	  var size = 10;

	  switch (position) {
	    case 'left':
	      resizerStyle = {
	        right: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'right':
	      resizerStyle = {
	        left: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'top':
	      resizerStyle = {
	        bottom: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	    case 'bottom':
	      resizerStyle = {
	        top: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	  }

	  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
	}

	function getFullSize(position, fullWidth, fullHeight) {
	  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
	}

	var Dock = (function (_Component) {
	  _inherits(Dock, _Component);

	  function Dock(props) {
	    var _this = this;

	    _classCallCheck(this, Dock);

	    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);

	    this.transitionEnd = function () {
	      _this.setState({ isTransitionStarted: false });
	    };

	    this.hideDim = function () {
	      if (!_this.props.isVisible) {
	        _this.setState({ isDimHidden: true });
	      }
	    };

	    this.handleDimClick = function () {
	      if (_this.props.dimMode === 'opaque') {
	        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
	      }
	    };

	    this.handleResize = function () {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
	      } else {
	        _this.updateWindowSize(true);
	      }
	    };

	    this.updateWindowSize = function (windowResize) {
	      var sizeState = {
	        fullWidth: window.innerWidth,
	        fullHeight: window.innerHeight
	      };

	      if (windowResize) {
	        _this.setState(_extends({}, sizeState, {
	          isResizing: true,
	          isWindowResizing: windowResize
	        }));

	        _this.debouncedUpdateWindowSizeEnd();
	      } else {
	        _this.setState(sizeState);
	      }
	    };

	    this.updateWindowSizeEnd = function () {
	      _this.setState({
	        isResizing: false,
	        isWindowResizing: false
	      });
	    };

	    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);

	    this.handleWrapperLeave = function () {
	      _this.setState({ isResizing: false });
	    };

	    this.handleMouseDown = function () {
	      _this.setState({ isResizing: true });
	    };

	    this.handleMouseUp = function () {
	      _this.setState({ isResizing: false });
	    };

	    this.handleMouseMove = function (e) {
	      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
	      e.preventDefault();

	      var _props = _this.props;
	      var position = _props.position;
	      var fluid = _props.fluid;
	      var _state = _this.state;
	      var fullWidth = _state.fullWidth;
	      var fullHeight = _state.fullHeight;
	      var isControlled = _state.isControlled;
	      var x = e.clientX;
	      var y = e.clientY;

	      var size = undefined;

	      switch (position) {
	        case 'left':
	          size = fluid ? x / fullWidth : x;
	          break;
	        case 'right':
	          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
	          break;
	        case 'top':
	          size = fluid ? y / fullHeight : y;
	          break;
	        case 'bottom':
	          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
	          break;
	      }

	      _this.props.onSizeChange && _this.props.onSizeChange(size);

	      if (!isControlled) {
	        _this.setState({ size: size });
	      }
	    };

	    this.state = {
	      isControlled: typeof props.size !== 'undefined',
	      size: props.size || props.defaultSize,
	      isDimHidden: !props.isVisible,
	      fullWidth: typeof window !== 'undefined' && window.innerWidth,
	      fullHeight: typeof window !== 'undefined' && window.innerHeight,
	      isTransitionStarted: false,
	      isWindowResizing: false
	    };
	  }

	  _createClass(Dock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('mouseup', this.handleMouseUp);
	      window.addEventListener('mousemove', this.handleMouseMove);
	      window.addEventListener('resize', this.handleResize);

	      if (!window.fullWidth) {
	        this.updateWindowSize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('mouseup', this.handleMouseUp);
	      window.removeEventListener('mousemove', this.handleMouseMove);
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isControlled = typeof nextProps.size !== 'undefined';

	      this.setState({ isControlled: isControlled });

	      if (isControlled && this.props.size !== nextProps.size) {
	        this.setState({ size: nextProps.size });
	      } else if (this.props.fluid !== nextProps.fluid) {
	        this.updateSize(nextProps);
	      }

	      if (this.props.isVisible !== nextProps.isVisible) {
	        this.setState({
	          isTransitionStarted: true
	        });
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(props) {
	      var _state2 = this.state;
	      var fullWidth = _state2.fullWidth;
	      var fullHeight = _state2.fullHeight;

	      this.setState({
	        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;

	      if (this.props.isVisible !== prevProps.isVisible) {
	        if (!this.props.isVisible) {
	          window.setTimeout(function () {
	            return _this2.hideDim();
	          }, this.props.duration);
	        } else {
	          this.setState({ isDimHidden: false });
	        }

	        window.setTimeout(function () {
	          return _this2.setState({ isTransitionStarted: false });
	        }, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var zIndex = _props2.zIndex;
	      var dimMode = _props2.dimMode;
	      var position = _props2.position;
	      var isVisible = _props2.isVisible;
	      var _state3 = this.state;
	      var isResizing = _state3.isResizing;
	      var size = _state3.size;
	      var isDimHidden = _state3.isDimHidden;

	      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
	      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
	      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));

	      return _react2['default'].createElement(
	        'div',
	        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
	        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
	        _react2['default'].createElement(
	          'div',
	          { style: dockStyles },
	          _react2['default'].createElement('div', { style: resizerStyles,
	            onMouseDown: this.handleMouseDown }),
	          _react2['default'].createElement(
	            'div',
	            { style: styles.dockContent },
	            typeof children === 'function' ? children({
	              position: position,
	              isResizing: isResizing,
	              size: size,
	              isVisible: isVisible
	            }) : children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	      zIndex: _react.PropTypes.number,
	      fluid: _react.PropTypes.bool,
	      size: _react.PropTypes.number,
	      defaultSize: _react.PropTypes.number,
	      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
	      isVisible: _react.PropTypes.bool,
	      onVisibleChange: _react.PropTypes.func,
	      onSizeChange: _react.PropTypes.func,
	      dimStyle: _react.PropTypes.object,
	      dockStyle: _react.PropTypes.object,
	      duration: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: 'left',
	      zIndex: 99999999,
	      fluid: true,
	      defaultSize: 0.3,
	      dimMode: 'opaque',
	      duration: 200
	    },
	    enumerable: true
	  }]);

	  return Dock;
	})(_react.Component);

	exports['default'] = Dock;
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(386)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(387), __esModule: true };

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(388);
	__webpack_require__(389);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 388 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(390);

	__webpack_require__(394)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(391)
	  , defined = __webpack_require__(393);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(392);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 392 */
285,
/* 393 */
286,
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(395)
	  , core    = __webpack_require__(397)
	  , fails   = __webpack_require__(400);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(396)
	  , core      = __webpack_require__(397)
	  , ctx       = __webpack_require__(398)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 396 */
265,
/* 397 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(399);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 399 */
268,
/* 400 */
275,
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(402)["default"];

	var _Object$setPrototypeOf = __webpack_require__(404)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 402 */
[517, 403],
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(388);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 404 */
[516, 405],
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(406);
	module.exports = __webpack_require__(397).Object.setPrototypeOf;

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(395);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(407).set});

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(388).getDesc
	  , isObject = __webpack_require__(408)
	  , anObject = __webpack_require__(409);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(398)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 408 */
272,
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(408);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(411)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(412), __esModule: true };

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(388);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 413 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(415)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 415 */
[515, 416],
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(417);
	module.exports = __webpack_require__(397).Object.assign;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(395);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(418)});

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(388)
	  , toObject = __webpack_require__(419)
	  , IObject  = __webpack_require__(391);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(400)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(393);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(421)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(422), __esModule: true };

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(423);
	__webpack_require__(439);
	module.exports = __webpack_require__(397).Array.from;

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(424)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(426)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(425)
	  , defined   = __webpack_require__(393);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 425 */
289,
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(427)
	  , $export        = __webpack_require__(395)
	  , redefine       = __webpack_require__(428)
	  , hide           = __webpack_require__(429)
	  , has            = __webpack_require__(432)
	  , Iterators      = __webpack_require__(433)
	  , $iterCreate    = __webpack_require__(434)
	  , setToStringTag = __webpack_require__(435)
	  , getProto       = __webpack_require__(388).getProto
	  , ITERATOR       = __webpack_require__(436)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 427 */
307,
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(429);

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(388)
	  , createDesc = __webpack_require__(430);
	module.exports = __webpack_require__(431) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 430 */
278,
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(400)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 432 */
282,
/* 433 */
309,
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(388)
	  , descriptor     = __webpack_require__(430)
	  , setToStringTag = __webpack_require__(435)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(429)(IteratorPrototype, __webpack_require__(436)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(388).setDesc
	  , has = __webpack_require__(432)
	  , TAG = __webpack_require__(436)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(437)('wks')
	  , uid    = __webpack_require__(438)
	  , Symbol = __webpack_require__(396).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(396)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 438 */
293,
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(398)
	  , $export     = __webpack_require__(395)
	  , toObject    = __webpack_require__(419)
	  , call        = __webpack_require__(440)
	  , isArrayIter = __webpack_require__(441)
	  , toLength    = __webpack_require__(442)
	  , getIterFn   = __webpack_require__(443);
	$export($export.S + $export.F * !__webpack_require__(445)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(409);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(433)
	  , ITERATOR   = __webpack_require__(436)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(425)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(444)
	  , ITERATOR  = __webpack_require__(436)('iterator')
	  , Iterators = __webpack_require__(433);
	module.exports = __webpack_require__(397).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(392)
	  , TAG = __webpack_require__(436)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(436)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 446 */
[518, 447],
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(448);
	module.exports = __webpack_require__(397).Object.keys;

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(419);

	__webpack_require__(394)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(450);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ },
/* 450 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
	// but dumber

	'use strict';

	var _extends = __webpack_require__(414)['default'];

	var _Object$keys = __webpack_require__(446)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoprefix;
	var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];

	var prefixes = ['Moz', 'Webkit', 'ms', 'O'];

	function prefixProp(key, value) {
	  return prefixes.reduce(function (obj, pre) {
	    return (obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj);
	  }, {});
	}

	function autoprefix(style) {
	  return _Object$keys(style).reduce(function (obj, key) {
	    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
	  }, style);
	}

	module.exports = exports['default'];

/***/ },
/* 452 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ },
/* 453 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.toggleVisibility = toggleVisibility;
	exports.changePosition = changePosition;
	exports.changeSize = changeSize;
	exports.changeMonitor = changeMonitor;
	var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	function toggleVisibility() {
	  return { type: TOGGLE_VISIBILITY };
	}

	var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	function changePosition() {
	  return { type: CHANGE_POSITION };
	}

	var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	function changeSize(size) {
	  return { type: CHANGE_SIZE, size: size };
	}

	var CHANGE_MONITOR = exports.CHANGE_MONITOR = '@@redux-devtools-log-monitor/CHANGE_MONITOR';
	function changeMonitor() {
	  return { type: CHANGE_MONITOR };
	}

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = reducer;

	var _actions = __webpack_require__(453);

	var _constants = __webpack_require__(452);

	var _react = __webpack_require__(1);

	function position(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
	}

	function size(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.CHANGE_SIZE ? action.size : state;
	}

	function isVisible(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
	}

	function childMonitorStates(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var action = arguments[2];

	  return _react.Children.map(props.children, function (child, index) {
	    return child.type.update(child.props, state[index], action);
	  });
	}

	function childMonitorIndex(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];

	  switch (action.type) {
	    case _actions.CHANGE_MONITOR:
	      return (state + 1) % _react.Children.count(props.children);
	    default:
	      return state;
	  }
	}

	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];

	  if (!state.childMonitorStates) {
	    _react.Children.forEach(props.children, function (child, index) {
	      if (typeof child.type.update !== 'function') {
	        console.error('Child of <DockMonitor> with the index ' + index + ' ' + ('(' + (child.type.displayName || child.type.name || child.type) + ') ') + 'does not appear to be a valid Redux DevTools monitor.');
	      }
	    });
	  }

	  return {
	    position: position(props, state.position, action),
	    isVisible: isVisible(props, state.isVisible, action),
	    size: size(props, state.size, action),
	    childMonitorIndex: childMonitorIndex(props, state.childMonitorIndex, action),
	    childMonitorStates: childMonitorStates(props, state.childMonitorStates, action)
	  };
	}

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keycodes = __webpack_require__(456);

	function assertKeyString(s) {
	  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
	    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	}

	module.exports = function parse(s) {
	  var keyString = s.trim().toLowerCase();

	  assertKeyString(keyString);

	  var key = {
	      name     :  undefined
	    , ctrl     :  false
	    , meta     :  false
	    , shift    :  false
	    , alt      :  false
	    , sequence :  undefined
	  }
	  , parts = keyString.split('-')
	  , c;

	  key.name = parts.pop();
	  while((c = parts.pop())) key[c] = true;
	  key.sequence = key.ctrl 
	    ? keycodes.ctrl[key.name] || key.name
	    : keycodes.nomod[key.name] || key.name;

	  // uppercase sequence for single chars when shift was pressed
	  if (key.shift && key.sequence && key.sequence.length === 1)
	    key.sequence = key.sequence.toUpperCase();

	  return key;
	};


/***/ },
/* 456 */
/***/ function(module, exports) {

	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	module.exports = {
	  nomod: {
	      escape: '\u001b'
	    , space: ' ' // actually '\u0020'
	    }
	  , ctrl: {
	        ' ': '\u0000'
	      , 'a': '\u0001'
	      , 'b': '\u0002'
	      , 'c': '\u0003'
	      , 'd': '\u0004'
	      , 'e': '\u0005'
	      , 'f': '\u0006'
	      , 'g': '\u0007'
	      , 'h': '\u0008'
	      , 'i': '\u0009'
	      , 'j': '\u000a'
	      , 'k': '\u000b'
	      , 'm': '\u000c'
	      , 'n': '\u000d'
	      , 'l': '\u000e'
	      , 'o': '\u000f'
	      , 'p': '\u0010'
	      , 'q': '\u0011'
	      , 'r': '\u0012'
	      , 's': '\u0013'
	      , 't': '\u0014'
	      , 'u': '\u0015'
	      , 'v': '\u0016'
	      , 'w': '\u0017'
	      , 'x': '\u0018'
	      , 'y': '\u0019'
	      , 'z': '\u001a'
	      , '[': '\u001b'
	      , '\\':'\u001c'
	      , ']': '\u001d'
	      , '^': '\u001e'
	      , '_': '\u001f'

	      , 'space': '\u0000'
	    }
	};


/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _redux = __webpack_require__(56);

	var _reactRedux = __webpack_require__(48);

	var _user = __webpack_require__(81);

	var userAction = _interopRequireWildcard(_user);

	var _json = __webpack_require__(79);

	var jsonAction = _interopRequireWildcard(_json);

	var _block = __webpack_require__(83);

	var blockAction = _interopRequireWildcard(_block);

	var _desktop = __webpack_require__(86);

	var desktopAction = _interopRequireWildcard(_desktop);

	var _data = __webpack_require__(16);

	var dataAction = _interopRequireWildcard(_data);

	var _loading = __webpack_require__(458);

	var _loading2 = _interopRequireDefault(_loading);

	var _ebutton = __webpack_require__(460);

	var _ebutton2 = _interopRequireDefault(_ebutton);

	var _container = __webpack_require__(461);

	var _container2 = _interopRequireDefault(_container);

	var _modelstore = __webpack_require__(485);

	var _modelstore2 = _interopRequireDefault(_modelstore);

	var _picstore = __webpack_require__(486);

	var _picstore2 = _interopRequireDefault(_picstore);

	var _previewbox = __webpack_require__(488);

	var _previewbox2 = _interopRequireDefault(_previewbox);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _DevTools = __webpack_require__(87);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _react2.default.createClass({
		displayName: 'App',

		componentWillMount: function componentWillMount() {
			data = _immutable2.default.fromJS(data);
			this.props.actions.getUserType();
		},
		componentDidMount: function componentDidMount() {
			this.winResize();
		},
		dataUpdate: function dataUpdate(value, page) {
			if (page) {
				data = data.updateIn(['value', page - 1], function (list) {
					return value;
				});
			} else {
				data = data.updateIn(['value'], function (list) {
					var length = list.size;
					var newlist = list.set(length, _immutable2.default.List(value));
					return newlist;
				});
			}
			this.props.actions.modifyPagejson(true);
		},
		dataChange: function dataChange(page, newpage) {
			data = data.updateIn(['value'], function (list) {
				var cache = list.toJS();
				var reArr = cache.removeArr(page);
				cache.insertArr(newpage, reArr[0]);
				return _immutable2.default.List(cache);
			});
			this.props.actions.modifyPagejson(true);
		},
		winResize: function winResize() {
			var fitwin = function fitwin() {
				var $wrapW = $('.wrap').width(),
				    winW = $(window).width() > $wrapW ? $(window).width() : $wrapW,
				    heiH = $(window).height(),
				    contentH = heiH - $('.w_header').height();

				$('.e_desktop').height(contentH).width(winW - $('.e_page').width() - $('.e_attribute').width());
				$('.w_content').height(contentH);
				$('.model_store').height(contentH);
				$('.m_content').height(contentH - $('.m_trigger').height() - $('.m_btns').height());
			};
			fitwin();
			$(window).resize(function () {
				fitwin();
			});
		},
		startHandle: function startHandle() {
			$('.wrap').removeClass('opacity');
			this.chosePage(1);

			Array.prototype.removeArr = function (index) {
				if (isNaN(index) || index >= this.length) {
					return false;
				}
				return this.splice(index, 1);
			};

			Array.prototype.insertArr = function (index, item) {
				this.splice(index, 0, item);
			};
		},
		clickHandle: function clickHandle(e) {
			// this.dataUpdate([
			// 	{
			// 		"type": "text",
			// 		"html": "那年广场",
			// 		"color": "#000",
			// 		"font-size": "48px",
			// 		"font-style": "normal",
			// 		"font-weight": "normal",
			// 		"text-decoration": "none",
			// 		"background-color": "rgba(0, 0, 0, 0)",
			// 		"line-height": "1",
			// 		"border-color": "rgb(0, 165, 235)",
			// 		"border-radius": "0px",
			// 		"border-style": "none",
			// 		"border-width": "0px",
			// 		"opacity": "1",
			// 		"rotate": "0",
			// 		"text-align": "center",
			// 		"text-decoration": "none",
			// 		"text-shadow": "none",
			// 		"width": "400px",
			// 		"left": "280px",
			// 		"top": "50px",
			// 		"animation-name": "fadeIn",
			// 		"animation-duration": "0.6s",
			// 		"animation-delay": "0s",
			// 		"position": "absolute",
			// 		"z-index": 1
			// 	}]
			// );
			var _self = this;
			var now = +new Date();
			if (now - evTimeStamp < 100) {
				return;
			}
			$.each(dataAction.boxlist, function () {
				if (!this.closebtn) {
					if (!dataAction.isParent(e.target, this.box[0]) && !dataAction.isParent(e.target, this.btn[0])) {
						if (this.box.is(':visible')) {
							evTimeStamp = now;
							this.box.fadeOut(200, function () {
								_self.openMusic(false);
							});
						}
					}
				}
			});
		},
		chosePage: function chosePage(page) {
			var _self = this;

			// data = data.updateIn(['value','page1'],function(list){
			// 	return [
			// 		{
			// 			"type": "bg",
			// 			"opacity": "1",
			// 			"background-color": "rgb(43, 144, 237)",
			// 			"img-src": "/images/R8KUNNEXY99XGKY18JZ2.png",
			// 			"img-width": "800px",
			// 			"img-margin-top": "-20px",
			// 			"img-margin-left": "-55px"
			// 		}
			// 	]
			// });
			//this.props.actions.modifyPagejson(true);
			this.props.actions.changePage(page);
		},
		openPicStore: function openPicStore(bool) {
			this.props.actions.showPicture(bool);
		},
		openPreview: function openPreview(bool) {
			this.props.actions.showPreview(bool);
		},
		openMusic: function openMusic(bool) {
			this.props.actions.showMusic(bool);
		},
		getPicList: function getPicList() {
			this.props.actions.getPicture();
		},
		/**
	  * 向state中添加music
	  * @param  {[json]} data { title, src }
	  */
		addMusic: function addMusic(data) {
			this.props.actions.addMusic(data);
		},
		choseMusic: function choseMusic(num) {
			this.props.actions.choseMusic(num);
		},
		render: function render() {
			var _self = this;
			var _props = this.props;
			var dispatch = _props.dispatch;
			var pagejson = _props.pagejson;
			var selectpage = _props.selectpage;
			var template = _props.template;
			var userstate = _props.userstate;
			var blockbox = _props.blockbox;
			var desktop = _props.desktop;
			var actions = _props.actions;

			return _react2.default.createElement(
				'div',
				{ onClick: this.clickHandle },
				_react2.default.createElement(_DevTools2.default, null),
				_react2.default.createElement(_loading2.default, {
					startHandle: this.startHandle,
					immujson: data
				}),
				_react2.default.createElement(_container2.default, {
					userstate: userstate,
					pagejson: pagejson,
					selectpage: selectpage,
					blockbox: blockbox,
					desktop: desktop,
					template: template,
					actions: actions,
					immujson: data,
					openPreview: this.openPreview,
					openPicStore: this.openPicStore,
					openMusic: this.openMusic,
					chosePage: this.chosePage,
					choseMusic: this.choseMusic,
					addMusic: this.addMusic,
					dataUpdate: this.dataUpdate,
					dataChange: this.dataChange
				}),
				_react2.default.createElement(_modelstore2.default, { blockbox: blockbox }),
				_react2.default.createElement(_picstore2.default, {
					userstate: userstate,
					blockbox: blockbox,
					openPicStore: this.openPicStore,
					getPicList: this.getPicList,
					actions: actions
				}),
				_react2.default.createElement(_previewbox2.default, {
					blockbox: blockbox,
					userstate: userstate,
					actions: actions,
					openPreview: this.openPreview,
					immujson: data
				})
			);
		}
	});

	function mapStateToProps(state) {
		return {
			userstate: state.userstate,
			pagejson: state.pagejson,
			selectpage: state.selectpage,
			template: state.template,
			blockbox: state.blockbox,
			desktop: state.desktop
		};
	}

	function mapDispatchToProps(dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)((0, _objectAssign2.default)({}, userAction, jsonAction, blockAction, desktopAction), dispatch)
		};
	}

	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _loading = __webpack_require__(459);

	var _loading2 = _interopRequireDefault(_loading);

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _DevTools = __webpack_require__(87);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loading = _react2.default.createClass({
	    displayName: 'loading',

	    shouldComponentUpdate: function shouldComponentUpdate() {
	        return false;
	    },
	    componentDidMount: function componentDidMount() {
	        var preload = ['images/tool.png', 'images/logo.png'];
	        var json = this.props.immujson.toJS();
	        var music = json.music;
	        var json = json.value;
	        var imgarr = this.unique(JSON.stringify(json).match(/[A-Za-z0-9-/:.]+[a-zA-Z0-9]+\.(png|jpg|gif|bmp)/g));
	        preload = preload.concat(imgarr);
	        new _loading2.default('#loading', preload, this.props.startHandle, true);
	    },
	    unique: function unique(arr) {
	        var result = [];
	        if (arr && arr.length > 0) {
	            var hash = {};
	            for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	                if (!hash[elem]) {
	                    result.push(elem);
	                    hash[elem] = true;
	                }
	            }
	        }
	        return result;
	    },
	    render: function render() {
	        return false;
	    }
	});

	module.exports = loading;

/***/ },
/* 459 */
/***/ function(module, exports) {

	//载入器
	function wrLoading(objname, filearray, callback, type) {
	    this.callback = callback;
	    this.objname = objname;
	    this.filearray = filearray;
	    this.type = type;
	    this.parent = parent;
	    this.init();
	    filearray && filearray.length > 0 ? this.loadNext() : this.onlyshow();
	}
	wrLoading.prototype = {
	    loadList: {},
	    loaded: 0,
	    retried: 0,
	    init: function init() {
	        this.obj = $(this.objname);
	    },
	    show: function show() {
	        this.obj.fadeIn(100);
	    },
	    hide: function hide(fn) {
	        var This = this;
	        if (this.type) {
	            this.obj.fadeOut(100, function () {
	                fn();
	            });
	        } else {
	            fn();
	        }
	    },
	    onlyshow: function onlyshow() {
	        var This = this;
	        this.show();
	        setTimeout(function () {
	            This.hide(This.callback);
	        }, 100);
	    },
	    loadNext: function loadNext() {
	        var This = this;
	        if (This.filearray[This.loaded]) {
	            var ext = This.checkext(This.filearray[This.loaded]);
	            if (ext == 'img') This.getImgNext();else if (ext == 'audio') This.getAudioNext();
	        }
	    },
	    MovePoint: function MovePoint(That) {
	        That.loaded++;
	        if (That.checkProcess()) return false;
	        if (!That.type && That.obj.find('.percent').length > 0) {
	            var p = Math.ceil(That.loaded / That.filearray.length * 100);
	            That.obj.find('.percent').css('width', p + "%");
	        }
	        That.retried = 0;
	        setTimeout(function () {
	            That.loadNext();
	        }, 1);
	    },
	    getImgNext: function getImgNext(src) {
	        var This = this;
	        var oImg = new Image();
	        if (src) oImg.src = src + This.filearray[This.loaded];else oImg.src = This.filearray[This.loaded];
	        if (oImg.complete) {
	            This.makeloadArr(oImg);
	            This.MovePoint(This);
	        } else {
	            oImg.onload = function () {
	                This.makeloadArr(this);
	                This.MovePoint(This);
	            };
	            oImg.onerror = function () {
	                This.retried++;
	                if (This.retried < 3) {
	                    This.getImgNext();
	                } else {
	                    This.MovePoint(This);
	                }
	            };
	        }
	    },
	    getAudioNext: function getAudioNext(src) {
	        var This = this;
	        var audio = new Audio();
	        audio.src = src + This.filearray[This.loaded];
	        audio.load();
	        audio.addEventListener('canplaythrough', function () {
	            This.makeloadArr(this);
	            This.MovePoint(This);
	        });
	        audio.addEventListener('error', function () {
	            This.retried++;
	            if (This.retried < 3) {
	                This.getAudioNext();
	            } else {
	                This.MovePoint(This);
	            }
	        });
	    },
	    makeloadArr: function makeloadArr(obj) {
	        var This = this;
	        This.loadList[This.filearray[This.loaded].id] = obj;
	    },
	    checkProcess: function checkProcess() {
	        var This = this;
	        if (This.loaded >= This.filearray.length) {
	            if (!This.type && This.obj.find('.percent').length > 0) This.obj.find('.percent').css('width', "100%");
	            setTimeout(function () {
	                This.hide(This.callback);
	            }, 100);
	            This.loaded = 0;
	            This.retried = 0;
	            return true;
	        }
	        return false;
	    },
	    getLoadArr: function getLoadArr() {
	        return this.loadList;
	    },
	    checkext: function checkext(name) {
	        var arrext = name.split('.');
	        var tmpext = arrext[arrext.length - 1].toLowerCase();
	        if ('mp3|wav|wma|ogg'.indexOf(tmpext) > -1) return 'audio';
	        if ('jpg|gif|bmp|png'.indexOf(tmpext) > -1) return 'img';
	    }
	};

	module.exports = wrLoading;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ebutton = _react2.default.createClass({
	    displayName: "ebutton",

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    openPreview: function openPreview() {
	        this.props.openPreview(true);
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "e_button" },
	            _react2.default.createElement(
	                "ul",
	                { className: "clearfix" },
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "backward" },
	                        _react2.default.createElement("i", null),
	                        "撤销"
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", onClick: this.openPreview, className: "preview" },
	                        _react2.default.createElement("i", null),
	                        "预览"
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    { className: this.props.userstate == 1 ? 'hide' : '' },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "save" },
	                        _react2.default.createElement("i", null),
	                        "保存"
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    { className: this.props.userstate == 1 ? '' : 'hide' },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "save_model" },
	                        _react2.default.createElement("i", null),
	                        "保存模板"
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = ebutton;

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _head = __webpack_require__(462);

	var _head2 = _interopRequireDefault(_head);

	var _content = __webpack_require__(468);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ebutton = _react2.default.createClass({
	    displayName: 'ebutton',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'wrap opacity' },
	            _react2.default.createElement(
	                'div',
	                { className: 'editor' },
	                _react2.default.createElement(_head2.default, {
	                    blockbox: this.props.blockbox,
	                    openMusic: this.props.openMusic,
	                    openPreview: this.props.openPreview,
	                    openPicStore: this.props.openPicStore,
	                    userstate: this.props.userstate,
	                    choseMusic: this.props.choseMusic,
	                    addMusic: this.props.addMusic,
	                    actions: this.props.actions
	                }),
	                _react2.default.createElement(_content2.default, this.props)
	            )
	        );
	    }
	});

	module.exports = ebutton;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _etools = __webpack_require__(463);

	var _etools2 = _interopRequireDefault(_etools);

	var _musicbox = __webpack_require__(464);

	var _musicbox2 = _interopRequireDefault(_musicbox);

	var _ebutton = __webpack_require__(460);

	var _ebutton2 = _interopRequireDefault(_ebutton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var whead = _react2.default.createClass({
	    displayName: 'whead',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        var userstate = this.props.userstate;
	        return _react2.default.createElement(
	            'div',
	            { className: 'w_header' },
	            _react2.default.createElement('a', { href: 'manage.html', className: 'h_logo' }),
	            _react2.default.createElement(
	                'div',
	                { className: 'e_tools' },
	                _react2.default.createElement(_etools2.default, { userstate: userstate, openPicStore: this.props.openPicStore }),
	                _react2.default.createElement(_musicbox2.default, { userstate: userstate, openMusic: this.props.openMusic, blockbox: this.props.blockbox, choseMusic: this.props.choseMusic, addMusic: this.props.addMusic, actions: this.props.actions })
	            ),
	            _react2.default.createElement(_ebutton2.default, { userstate: userstate, openPreview: this.props.openPreview })
	        );
	    }
	});

	module.exports = whead;

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var etools = _react2.default.createClass({
	    displayName: "etools",

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    showPicture: function showPicture() {
	        this.props.openPicStore(true);
	    },
	    showShape: function showShape() {},
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "element" },
	            _react2.default.createElement(
	                "ul",
	                { className: "clearfix" },
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "text" },
	                        "文本"
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "pic", onClick: this.showPicture },
	                        "图片"
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "javascript:void(0);", className: "area", onClick: this.showShape },
	                        "形状"
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "shapebox" },
	                        _react2.default.createElement(
	                            "ul",
	                            { className: "bbox", id: "shapebox" },
	                            _react2.default.createElement("li", { "data-num": "1", className: "shape1" }),
	                            _react2.default.createElement("li", { "data-num": "2", className: "shape2" }),
	                            _react2.default.createElement("li", { "data-num": "3", className: "shape3" }),
	                            _react2.default.createElement("li", { "data-num": "4", className: "shape4" }),
	                            _react2.default.createElement("li", { "data-num": "5", className: "shape5" }),
	                            _react2.default.createElement("li", { "data-num": "6", className: "shape6" }),
	                            _react2.default.createElement("li", { "data-num": "7", className: "shape7" }),
	                            _react2.default.createElement("li", { "data-num": "8", className: "shape8" }),
	                            _react2.default.createElement("li", { "data-num": "9", className: "shape9" }),
	                            _react2.default.createElement("li", { "data-num": "10", className: "shape10" }),
	                            _react2.default.createElement("li", { "data-num": "11", className: "shape11" }),
	                            _react2.default.createElement("li", { "data-num": "12", className: "shape12" })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = etools;

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(16);

	var dataAction = _interopRequireWildcard(_data);

	var _player = __webpack_require__(465);

	var _player2 = _interopRequireDefault(_player);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dialog = __webpack_require__(13);
	var blockbox = __webpack_require__(15);
	var WebUploader = __webpack_require__(466);
	var modelO = __webpack_require__(14);
	var Item = __webpack_require__(467);


	var musicbox = _react2.default.createClass({
	    displayName: 'musicbox',

	    componentWillMount: function componentWillMount() {
	        this.addSelectMusic();
	    },
	    componentDidMount: function componentDidMount() {
	        this.setUploader();
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        if (prevProps.blockbox.toJS().music.chose != this.props.blockbox.toJS().music.chose) {
	            dataAction.musiclist[0] = new _player2.default($('#play'), false, true, dataAction.musiclist);
	        }
	        if (this.props.blockbox.toJS().music.show) {
	            var _self = this;
	            new blockbox($(this.refs.musicbox), {
	                showbg: false,
	                btn: $('.music .chose'),
	                closefun: function closefun() {
	                    _self.closeMusicbox();
	                }
	            });
	        } else {
	            $(this.refs.musicbox).fadeOut(200);
	        }
	    },
	    showMusicbox: function showMusicbox() {
	        this.props.openMusic(true);
	        $('#musicbox').niceScroll({ cursorborder: '0px', cursorcolor: 'rgb(156, 156, 156)' });
	    },
	    closeMusicbox: function closeMusicbox() {
	        this.props.openMusic(false);
	    },
	    getMusicName: function getMusicName(src) {
	        var s = src.split('/');
	        var n = s[s.length - 1].split('.')[0];
	        return n;
	    },
	    addSelectMusic: function addSelectMusic() {
	        var size = this.props.blockbox.getIn(['music', 'data']).size;
	        var src = data.get('music');
	        if (src) {
	            this.props.addMusic({
	                title: this.getMusicName(src),
	                src: src
	            });
	            this.props.choseMusic(size + 1);
	        }
	    },
	    choseSelectMusic: function choseSelectMusic(obj, num) {
	        this.props.choseMusic(num);
	        this.closeMusicbox();
	        $.each(dataAction.musiclist, function (key, value) {
	            if (value) this._playOff();
	        });
	        // if(obj.querySelectorAll('.play').length > 0 && obj.querySelectorAll('.play')[0].getAttribute('data-src')){
	        //
	        // }
	    },
	    setUploader: function setUploader() {
	        var _self = this;
	        var path = modelO.prefix + modelO.apiUrl.uploadaudio;
	        var uploader = WebUploader.create({
	            pick: {
	                id: '#music_upload',
	                label: '上传音乐+'
	            },
	            formData: {
	                uid: 2,
	                hid: hid
	            },
	            auto: true,
	            swf: 'js/common/Uploader.swf',
	            chunked: false,
	            chunkSize: 512 * 1024,
	            server: path,

	            accept: {
	                title: 'mp3',
	                extensions: 'mp3',
	                mimeTypes: 'audio/*'
	            },

	            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
	            disableGlobalDnd: true,
	            fileNumLimit: 300,
	            fileSizeLimit: 10 * 1024 * 1024, // 10 M
	            fileSingleSizeLimit: 512 * 1024 // 512k
	        });

	        uploader.onUploadSuccess = function (file, response) {
	            if (response.path) {
	                var s = response.path.split('/');
	                _self.props.actions.updateMusic({
	                    'title': _self.getMusicName(file.name),
	                    'src': response.path,
	                    'id': file.id
	                });
	            }
	        };

	        uploader.onUploadProgress = function (file, percentage) {
	            $('#' + file.id).find('span').width(percentage * 100 + '%');
	        };
	        uploader.onError = function (code) {
	            MZ.tipmessage.show({ message: modelO.errorCode[code], delay: 1000, pos: 'middle', type: 'fail' });
	        };

	        uploader.onFileQueued = function (file) {
	            _self.props.addMusic({
	                title: _self.getMusicName(file.name),
	                src: '',
	                id: file.id
	            });
	            uploader.upload();
	        };
	    },
	    render: function render() {
	        //音乐暂时不考虑存储多首
	        var list = [];
	        var chose = this.props.blockbox.getIn(['music', 'chose']);
	        var json = this.props.blockbox.toJS().music.data;
	        var curr = chose - 1 >= 0 ? chose - 1 : 0;
	        for (var j in json) {
	            list.push(_react2.default.createElement(Item, _extends({ key: j, id: json[j].id, num: j }, json[j], { choseSelectMusic: this.choseSelectMusic })));
	        }
	        var playStyle = {
	            'display': json[curr].src ? 'block' : 'none'
	        };
	        return _react2.default.createElement(
	            'div',
	            { className: 'music', ref: 'music' },
	            _react2.default.createElement(
	                'div',
	                { className: 'm_chose' },
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'chose', onClick: this.showMusicbox },
	                    json[curr].title
	                ),
	                _react2.default.createElement('a', { href: 'javascript:void(0);', id: 'play', className: 'play', 'data-src': json[curr].src, style: playStyle })
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'musicbox', ref: 'musicbox' },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'bbox', id: 'musicbox' },
	                    list,
	                    _react2.default.createElement('li', { className: 'chose_upload', id: 'music_upload' })
	                )
	            )
	        );
	    }
	});

	module.exports = musicbox;

/***/ },
/* 465 */
/***/ function(module, exports) {

	function Player(el, auto, repeat, list) {
		this.el = el;
		this.isPlay = auto;
		this.repeat = repeat;
		this.list = list;
		this.init();
	}
	Player.prototype = {
		init: function init() {
			var _this = this,
			    attr = { loop: false, preload: "auto", src: this.el.attr("data-src") };
			this._audio = new Audio();
			for (var i in attr) {
				attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
			}
			if (this.repeat) {
				this._audio.addEventListener('ended', function () {
					this.currentTime = 0;
					this.play();
				}, false);
			}
			this._audio.load();
			this._audio.volume = 0.8;
			this.el.unbind('click').on('click', function () {
				_this._play();
				return false;
			});
		},

		_play: function _play() {
			var _this = this;
			if (!this.isPlay) {
				$.each(_this.list, function (key, value) {
					if (value) this._playOff();
				});
				this._audio.play();
				this.el.addClass('on');
				this.isPlay = true;
			} else {
				$.each(_this.list, function (key, value) {
					if (value) this._playOff();
				});
				this._audio.pause();
				this.el.removeClass('on');
				this.isPlay = false;
			}
		},

		_getState: function _getState() {
			return this.isPlay;
		},

		_playOn: function _playOn() {
			this._audio.play();
			this.el.addClass('on');
			this.isPlay = true;
		},

		_playOff: function _playOff() {
			this._audio.pause();
			this.el.removeClass('on');
			this.isPlay = false;
		}
	};

	module.exports = Player;

/***/ },
/* 466 */,
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(16);

	var dataAction = _interopRequireWildcard(_data);

	var _player = __webpack_require__(465);

	var _player2 = _interopRequireDefault(_player);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modelO = __webpack_require__(14);


	var item = _react2.default.createClass({
	    displayName: 'item',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {
	        this.initPlayer();
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        if (prevProps.src != this.props.src) {
	            this.initPlayer();
	        }
	    },
	    initPlayer: function initPlayer() {
	        var num = parseInt(this.props.num) + 1;
	        if (this.props.src) {
	            dataAction.musiclist[num] = new _player2.default($(this.refs.item).find('.play'), false, true, dataAction.musiclist);
	        }
	    },
	    choseMusic: function choseMusic() {
	        var num = parseInt(this.props.num) + 1;
	        this.props.choseSelectMusic(this.refs.item, num);
	    },
	    render: function render() {
	        var classn = "";
	        if (this.props.src === "") {
	            if (this.props.id) {
	                var style = {
	                    'width': '0%',
	                    'height': '100%',
	                    'display': 'block',
	                    'backgroundColor': '#32a5e7'
	                };
	                return _react2.default.createElement(
	                    'li',
	                    { id: this.props.id },
	                    _react2.default.createElement(
	                        'span',
	                        { style: style },
	                        this.props.title
	                    )
	                );
	            } else {
	                classn += 'chose_no';
	                return _react2.default.createElement(
	                    'li',
	                    { className: classn, onClick: this.choseMusic, ref: 'item' },
	                    _react2.default.createElement(
	                        'span',
	                        { 'data-src': this.props.src },
	                        this.props.title
	                    )
	                );
	            }
	        }
	        return _react2.default.createElement(
	            'li',
	            { id: this.props.id, className: classn, onClick: this.choseMusic, ref: 'item' },
	            _react2.default.createElement(
	                'span',
	                null,
	                this.props.title
	            ),
	            _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'play', 'data-src': this.props.src })
	        );
	    }
	});

	module.exports = item;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _attr = __webpack_require__(469);

	var _attr2 = _interopRequireDefault(_attr);

	var _desk = __webpack_require__(470);

	var _desk2 = _interopRequireDefault(_desk);

	var _page = __webpack_require__(480);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ebutton = _react2.default.createClass({
	    displayName: 'ebutton',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'w_content bbox' },
	            _react2.default.createElement(_page2.default, { userstate: this.props.userstate, immujson: this.props.immujson, desktop: this.props.desktop, chosePage: this.props.chosePage, dataUpdate: this.props.dataUpdate, dataChange: this.props.dataChange }),
	            _react2.default.createElement(_desk2.default, this.props),
	            _react2.default.createElement(_attr2.default, this.props)
	        );
	    }
	});

	module.exports = ebutton;

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eattr = _react2.default.createClass({
	    displayName: "eattr",

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        return _react2.default.createElement("div", { className: "e_attribute nodrag noselect" });
	    }
	});

	module.exports = eattr;

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _page = __webpack_require__(471);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var edesk = _react2.default.createClass({
	    displayName: 'edesk',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        var list = this.props.desktop.get('data') ? this.props.desktop.get('data').toJS() : [];
	        return _react2.default.createElement(
	            'div',
	            { className: 'e_desktop nodrag noselect' },
	            _react2.default.createElement(_page2.default, { type: 'desktop', list: list }),
	            _react2.default.createElement(
	                'div',
	                { className: 'e_d_tool' },
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'assist clearfix' },
	                    _react2.default.createElement('i', null),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '网格'
	                    )
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'copy clearfix' },
	                    _react2.default.createElement('i', null),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '复制页面'
	                    )
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'delete clearfix' },
	                    _react2.default.createElement('i', null),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '删除页面'
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = edesk;

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _ele = __webpack_require__(472);

	var _ele2 = _interopRequireDefault(_ele);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var list = _react2.default.createClass({
	    displayName: 'list',

	    chosePage: function chosePage() {
	        if (!this.refs.page.querySelectorAll('.page')[0].classList.contains('active')) {
	            this.props.chosePage(parseInt(this.props.page));
	        }
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        if (_immutable2.default.is(_immutable2.default.fromJS(this.props), _immutable2.default.fromJS(nextProps))) {
	            return false;
	        }
	        if (this.props.type == 'side' && this.props.page != nextProps.currpage && this.props.page != nextProps.prevpage) {
	            return false;
	        }
	        return true;
	    },
	    render: function render() {

	        var arr = [];
	        var json = this.props.list;
	        var type = this.props.type;

	        var addEdit = addAnimate = stopAnimate = false;
	        var cp = this.props.chosePage;

	        var n = this.n ? true : false;

	        //预览及列表
	        if (type == 'preview') {
	            addEdit = false;
	            addAnimate = true;
	            stopAnimate = true;
	            cp = null;
	        } else if (type == 'desktop') {
	            addEdit = true;
	            addAnimate = true;
	            stopAnimate = true;
	            cp = null;
	        } else {
	            addEdit = false;
	            addAnimate = false;
	            stopAnimate = false;
	        }

	        for (var i = 0; i < json.length; i++) {
	            arr.push(_react2.default.createElement(_ele2.default, _extends({ key: i, pos: type, addEdit: addEdit, addAnimate: addAnimate, stopAnimate: stopAnimate }, json[i], { chosePage: cp })));
	        }

	        if (type == 'preview') {
	            var classn = "section section" + this.props.page;
	            return _react2.default.createElement(
	                'div',
	                { className: classn },
	                arr
	            );
	        }

	        if (type == 'desktop') {
	            return _react2.default.createElement(
	                'div',
	                { className: 'e_d_scale', id: 'e_container' },
	                arr
	            );
	        }
	        var classn = 'page' + (this.props.page == this.props.currpage ? ' active' : '');

	        return _react2.default.createElement(
	            'li',
	            { className: this.props.className, 'data-page': this.props.page, onClick: this.chosePage, ref: 'page' },
	            _react2.default.createElement(
	                'div',
	                { className: classn },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'p_temple' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'p_t_scale' },
	                        arr
	                    )
	                ),
	                _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'p_del' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'p_num' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        this.props.page
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = list;

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _editHandle = __webpack_require__(473);

	var _editHandle2 = _interopRequireDefault(_editHandle);

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _eleConfig = __webpack_require__(475);

	var _eleConfig2 = _interopRequireDefault(_eleConfig);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _bg = __webpack_require__(476);

	var _bg2 = _interopRequireDefault(_bg);

	var _text = __webpack_require__(477);

	var _text2 = _interopRequireDefault(_text);

	var _img = __webpack_require__(478);

	var _img2 = _interopRequireDefault(_img);

	var _shape = __webpack_require__(479);

	var _shape2 = _interopRequireDefault(_shape);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var item = _react2.default.createClass({
	    displayName: 'item',

	    componentWillUpdate: function componentWillUpdate() {
	        if (this.props.type != 'bg') this.refs.ele.classList.add('no');
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        if (this.props.pos == 'side') {
	            if (_immutable2.default.is(_immutable2.default.fromJS(this.props), _immutable2.default.fromJS(nextProps))) {
	                return false;
	            }
	        }

	        return true;
	    },
	    render: function render() {
	        if (!this.props) {
	            return _react2.default.createElement(
	                'div',
	                null,
	                '暂无数据'
	            );
	        }
	        var _props = this.props;
	        var type = _props.type;
	        var num = _props.num;
	        var addEdit = _props.addEdit;
	        var addAnimate = _props.addAnimate;
	        var stopAnimate = _props.stopAnimate;

	        var handle = '';
	        if (type != 'bg' && addEdit) {
	            handle = _react2.default.createElement(_editHandle2.default, { type: type });
	        }
	        var edit = this.props.edit || true;
	        var elecss = {},
	            seccss = {},
	            imgcss = {},
	            transcss = {};
	        var imghtml = '',
	            source = '',
	            modelid = '',
	            animate = '',
	            lineheight = '',
	            linkurl = '',
	            drag = '';
	        $.each(this.props, function (key, value) {
	            if (key === 'type' || key === 'edit') {
	                return;
	            }
	            if (key.indexOf('-') > 0) {
	                var arr = key.split('-');
	                key = arr[0] + arr[1].replace(/(\w)/, function (v) {
	                    return v.toUpperCase();
	                });
	            }
	            if (type === 'shape' && key === 'backgroundColor' || type === 'bg' && key === 'opacity') {
	                imgcss[key] = value;
	                return true;
	            } else if (key === 'url') {
	                linkurl = value;
	                return true;
	            }
	            if (key === 'textShadow' || key === 'boxShadow') {
	                value = 'rgb(0, 0, 0) 0px 0px ' + value;
	            }
	            if (key !== 'placeHolder' && key !== 'type' && key !== 'html' && key.indexOf('img') < 0) {
	                if (key.indexOf('animation') >= 0 || key === 'rotate' || key === 'scale') {
	                    if (key === 'rotate' || key === 'scale') {
	                        value = key + '(' + value + ') translateZ(0)';
	                        key = 'transform';
	                        transcss[key] = value;
	                    } else {
	                        if (addAnimate) {
	                            seccss[key] = value;
	                        }
	                    }
	                } else if (key === 'position' || key === 'zIndex' || key === 'top' || key === 'left') {
	                    seccss[key] = value;
	                } else if (key === 'lineHeight') {
	                    elecss[key] = value;
	                    lineheight = value;
	                } else {
	                    elecss[key] = value;
	                }
	            }
	        });

	        if (!edit) {
	            if (type !== 'bg') {
	                seccss['z-index'] = num;
	            }
	        }

	        var content = '';

	        //元素
	        switch (type) {
	            case 'text':
	                content = _react2.default.createElement(_text2.default, { edit: edit, html: this.props.html });
	                break;
	            case 'img':
	                (0, _objectAssign2.default)(elecss, {
	                    overflow: 'hidden',
	                    position: 'relative'
	                });
	                content = _react2.default.createElement(_img2.default, { edit: edit, imgSrc: this.props['img-src'], imgWidth: this.props['img-width'], imgTop: this.props['img-top'], imgLeft: this.props['img-left'] });
	                break;
	            case 'shape':
	                content = _react2.default.createElement(_shape2.default, { edit: edit, imgSrc: this.props['img-src'], imgcss: imgcss });
	                break;
	            case 'bg':
	                content = _react2.default.createElement(_bg2.default, { edit: edit, imgSrc: this.props['img-src'], imgWidth: this.props['img-width'], imgMargintop: this.props['img-margin-top'], imgMarginleft: this.props['img-margin-left'], imgcss: imgcss });
	                break;
	        }

	        if (!lineheight || ~ ~lineheight < 0) {
	            lineheight = false;
	        }
	        if (!linkurl && linkurl.length <= 0) {
	            linkurl = false;
	        }

	        var classes = 'section_ele animated';
	        if (stopAnimate && this.props.type != 'bg') {
	            classes += ' no';
	        }
	        if (type) {
	            classes += ' section_' + type;
	        }
	        if (_eleConfig2.default[type].dragType) {
	            classes += ' section_' + _eleConfig2.default[type].dragType;
	        }
	        if (this.props['animation-name'] && addAnimate) {
	            classes += ' ' + this.props['animation-name'];
	        }
	        return _react2.default.createElement(
	            'div',
	            { ref: 'ele', className: classes, 'data-num': num, 'data-type': type, 'data-animation': this.props['animation-name'], 'data-duration': this.props['animation-duration'], 'data-delay': this.props['animation-delay'], style: seccss },
	            _react2.default.createElement(
	                'div',
	                { className: 'transform', style: transcss },
	                handle,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'chose' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'ele', 'data-line': lineheight, 'data-url': linkurl, style: elecss },
	                        content
	                    )
	                )
	            )
	        );
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.removeNo();
	    },
	    componentDidMount: function componentDidMount() {
	        this.removeNo();
	    },
	    removeNo: function removeNo() {
	        if (this.props.type != 'bg') {
	            setTimeout(function () {
	                this.refs.ele.classList.remove('no');
	            }.bind(this), 0);
	        }
	    }
	});

	module.exports = item;

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _handle = __webpack_require__(474);

	var _handle2 = _interopRequireDefault(_handle);

	var _eleConfig = __webpack_require__(475);

	var _eleConfig2 = _interopRequireDefault(_eleConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var editHandle = _react2.default.createClass({
	    displayName: 'editHandle',

	    render: function render() {
	        var handle = [],
	            handleTotal;
	        for (var i = 0, handleTotal = _eleConfig2.default[this.props.type].dragType === 'skew' ? 4 : 2; i < handleTotal; i++) {
	            handle.push(_react2.default.createElement(_handle2.default, { key: i, num: i }));
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: 'edit' },
	            handle
	        );
	    }
	});

	module.exports = editHandle;

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var handle = _react2.default.createClass({
	    displayName: 'handle',

	    render: function render() {
	        var classn = 'edit_handle edit_handle' + (this.props.num + 1);
	        return _react2.default.createElement('div', { className: classn });
	    }
	});

	module.exports = handle;

/***/ },
/* 475 */
/***/ function(module, exports) {

	module.exports = {
		'text': {
			'dragType': 'horz',
			'default': {
				'width': '300px',
				'color': '#00A5EB',
				'font-size': '40px',
				'placeHolder': '请输入文本',
				'line-height': 1,
				'text-align': 'center',
				'position': 'absolute',
				'animation-name': 'fadeIn',
				'animation-duration': '0.6s',
				'border-radius': '10px',
				'border-width': '0px'
			}
		},
		'img': {
			'dragType': 'skew',
			'default': {
				'position': 'absolute',
				'animation-name': 'fadeIn',
				'animation-duration': '0.6s',
				'border-radius': '0px',
				'border-width': '0px',
				'opacity': 1
			}
		},
		'shape': {
			'dragType': 'skew',
			'default': {
				'width': '200px',
				'height': '200px',
				'background-color': '#000',
				'position': 'absolute',
				'animation-name': 'fadeIn',
				'animation-duration': '0.6s',
				'border-radius': '0px',
				'border-width': '0px'
			}
		},
		'bg': {
			'default': {
				'background-color': '#fff',
				"opacity": "1"
			}
		}
	};

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eleConfig = __webpack_require__(475);

	var _eleConfig2 = _interopRequireDefault(_eleConfig);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bg = _react2.default.createClass({
	    displayName: 'bg',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        var content = '',
	            style = {};

	        if (this.props.edit) {
	            if (this.props.imgSrc && this.props.imgSrc.length > 0) {
	                style = {
	                    width: this.props.imgWidth,
	                    height: this.props.imgHeight || '',
	                    marginTop: this.props.imgMargintop,
	                    marginLeft: this.props.imgMarginleft
	                };
	                var newstyle = (0, _objectAssign2.default)(style, this.props.imgcss);

	                content = _react2.default.createElement('img', { src: this.props.imgSrc, style: newstyle });
	            }
	        }
	        return _react2.default.createElement(
	            'span',
	            null,
	            content
	        );
	    }
	});

	module.exports = bg;

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eleConfig = __webpack_require__(475);

	var _eleConfig2 = _interopRequireDefault(_eleConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var text = _react2.default.createClass({
	    displayName: 'text',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        var html = this.props.html || this.props.placeHolder || _eleConfig2.default['text'].default.placeHolder;
	        return _react2.default.createElement(
	            'div',
	            null,
	            this.props.html
	        );
	    }
	});

	module.exports = text;

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eleConfig = __webpack_require__(475);

	var _eleConfig2 = _interopRequireDefault(_eleConfig);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var img = _react2.default.createClass({
	    displayName: 'img',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        var style = {},
	            src = '';
	        if (this.props.edit) {
	            style = {
	                width: this.props.imgWidth,
	                position: 'absolute',
	                top: this.props.imgTop,
	                left: this.props.imgLeft
	            };
	            src = this.props.imgSrc;
	        } else {
	            var imgO = $('.pic_store').find('.img_choose.active img');
	            src = imgO.attr('src');
	            var ow = imgO[0].naturalWidth,
	                oh = imgO[0].naturalHeight;
	            var w = ow,
	                h = oh;
	            if (ow > cw || oh > ch) {
	                if (ow / oh > cw / ch) {
	                    h = oh / ow * cw;
	                    w = cw;
	                } else {
	                    w = ow / oh * ch;
	                    h = ch;
	                }
	            }
	            style = {
	                width: w,
	                position: 'absolute',
	                top: 0,
	                left: 0
	            };
	        }

	        return _react2.default.createElement('img', { src: src, style: style, draggable: 'false' });
	    }
	});

	module.exports = img;

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var shape = _react2.default.createClass({
	    displayName: 'shape',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        var style = {},
	            src = this.props.imgSrc;
	        if (!this.props.edit) {
	            var imgO = $('#shapebox').find('li.active');
	            src = '/images/' + imgO.attr('data-num') + '.svg';
	        }
	        style = {
	            'width': '100%',
	            'height': '100%',
	            'WebkitMaskBoxImageSlice': '0 fill',
	            'WebkitMaskBoxImageRepeat': 'stretch',
	            'WebkitMaskBoxImageSource': 'url(' + src + ')',
	            'overflow': 'hidden'
	        };

	        var newstyle = (0, _objectAssign2.default)(style, this.props.imgcss);
	        return _react2.default.createElement('div', { className: 'mask', style: newstyle });
	    }
	});

	module.exports = shape;

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _data = __webpack_require__(16);

	var _data2 = _interopRequireDefault(_data);

	var _page = __webpack_require__(471);

	var _page2 = _interopRequireDefault(_page);

	var _nicescroll = __webpack_require__(481);

	var _nicescroll2 = _interopRequireDefault(_nicescroll);

	var _immutable = __webpack_require__(84);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _event = __webpack_require__(482);

	var _event2 = _interopRequireDefault(_event);

	var _utils = __webpack_require__(484);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var epage = _react2.default.createClass({
	    displayName: 'epage',

	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        if (_immutable2.default.is(_immutable2.default.fromJS(this.props), _immutable2.default.fromJS(nextProps))) {
	            return false;
	        }
	        return true;
	    },
	    componentDidMount: function componentDidMount() {
	        $('#e_page').niceScroll({ cursorborder: '0px', cursorcolor: 'rgb(156, 156, 156)' });
	        this.dragInit();
	    },
	    handleSort: function handleSort(sortedArray) {},

	    dragInit: function dragInit() {
	        var _self = this;
	        var itemH = 176;
	        var startX = 0,
	            startY = 0,
	            pX = 0,
	            pY = 0;
	        var lineHeight = 0;
	        var parentElement = document.getElementById('e_page');
	        var allElement = null;
	        var targetElement = null;
	        var targetCopy = null;
	        var touchDown = false;
	        var movePrevent = false;
	        var index = -1;
	        var newindex = -1;
	        var space = document.createElement('li');
	        space.id = 'space';

	        var getPosition = function getPosition(target) {
	            var pos = _utils2.default.getOffset(target);
	            pX = pos.left;
	            pY = pos.top - parseInt(_utils2.default.getComputedStyles(document.querySelectorAll('.w_content')[0])['margin-top']);
	        };

	        var onStart = function onStart(e) {
	            if (!targetElement) return false;
	            if (movePrevent == true) {
	                e.preventDefault();
	                return false;
	            }
	            touchDown = true;

	            //赋予位置
	            getPosition(targetElement);
	            _utils2.default.insertAfter(space, targetElement);
	            targetElement.style.left = pX + 'px';
	            targetElement.style.top = pY + 'px';

	            //赋予样式
	            _utils2.default.addClass(targetElement, 'drag');

	            startX = e.pageX;
	            startY = e.pageY;
	        };

	        var onMove = function onMove(e) {
	            if (!targetElement) return false;
	            if (movePrevent == true || touchDown != true) {
	                e.preventDefault();
	                return false;
	            }
	            var delvaX = pX + e.pageX - startX;
	            var delvaY = pY + e.pageY - startY;
	            targetElement.style.left = delvaX + 'px';
	            targetElement.style.top = delvaY < 0 ? 0 : delvaY + 'px';
	            var diffY = e.pageY - startY;

	            //向下
	            if (diffY > 0) {
	                if (diffY % itemH > 0) {
	                    var i = index + Math.floor(diffY / itemH);
	                    if (i > allElement.length - 1) i = allElement.length - 1;
	                    _utils2.default.insertAfter(space, allElement[i]);
	                    newindex = i;
	                }
	                //向上
	            } else if (diffY < 0) {
	                    if (-diffY % itemH > 0) {
	                        var i = index - Math.floor(-diffY / itemH);
	                        if (i < 0) i = 0;
	                        _utils2.default.insertBefore(space, allElement[i]);
	                        newindex = i;
	                    }
	                }
	        };

	        var onEnd = function onEnd(e) {
	            if (!targetElement) return false;
	            if (movePrevent == true) {
	                e.preventDefault();
	                return false;
	            }
	            _utils2.default.removeClass(targetElement, 'drag');
	            _utils2.default.remove(space);

	            touchDown = false;
	            endX = e.pageX;
	            endY = e.pageY;
	            _self.props.dataChange(index, newindex);
	            targetElement = null;
	        };

	        _event2.default.addListener(_reactDom2.default.findDOMNode(this.refs.epage), 'start', function (e) {
	            allElement = parentElement.querySelectorAll('li');
	            targetElement = _utils2.default.closest(e.target, '.side');
	            for (var i = 0; i < allElement.length; i++) {
	                if (targetElement == allElement[i]) {
	                    index = i;
	                    newindex = -1;
	                }
	            }
	            onStart(e);
	        });
	        _event2.default.addListener(_reactDom2.default.findDOMNode(this.refs.epage), 'move', function (e) {
	            onMove(e);
	        });
	        _event2.default.addListener(_reactDom2.default.findDOMNode(this.refs.epage), 'end', function (e) {
	            onEnd(e);
	        });
	    },

	    render: function render() {
	        var modelclass = (this.props.userstate == 1 ? 'hide' : '') + 'showModel btn_blue';
	        var json = this.props.immujson.get('value').toJS();
	        var list = [];
	        var currpage = this.props.desktop.getIn(['page', 'curr']);
	        var prevpage = this.props.desktop.getIn(['page', 'prev']);
	        console.log(json);
	        for (var i = 0; i < json.length; i++) {
	            list.push(_react2.default.createElement(_page2.default, { type: 'side', className: 'side vertical', key: i, page: i + 1, prevpage: prevpage, currpage: currpage, list: json[i], chosePage: this.props.chosePage }));
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: 'e_page nodrag noselect' },
	            _react2.default.createElement(
	                'ul',
	                { id: 'e_page', ref: 'epage' },
	                list,
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: modelclass },
	                    '+'
	                )
	            )
	        );
	    }
	});

	module.exports = epage;

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /* jquery.nicescroll
	-- version 3.5.6
	-- copyright 2014-10-09 InuYaksa*2014
	-- licensed under the MIT
	--
	-- http://nicescroll.areaaperta.com/
	-- https://github.com/inuyaksa/jquery.nicescroll
	--
	*/(function(factory){if(true){ // AMD. Register as anonymous module.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { // Browser globals.
	factory(jQuery);}})(function(e){ // globals
	var domfocus=false;var mousefocus=false;var zoomactive=false;var tabindexcounter=0;var ascrailcounter=2000;var globalmaxzindex=0;var $=jQuery; // sandbox
	// http://stackoverflow.com/questions/2161159/get-script-path
	function getScriptPath(){var scripts=document.getElementsByTagName('script');var path=scripts[scripts.length-1].src.split('?')[0];return path.split('/').length>0?path.split('/').slice(0,-1).join('/')+'/':'';} //  var scriptpath = getScriptPath();
	var vendors=['ms','moz','webkit','o'];var setAnimationFrame=window.requestAnimationFrame||false;var clearAnimationFrame=window.cancelAnimationFrame||false;if(!setAnimationFrame){for(var vx in vendors){var v=vendors[vx];if(!setAnimationFrame)setAnimationFrame=window[v+'RequestAnimationFrame'];if(!clearAnimationFrame)clearAnimationFrame=window[v+'CancelAnimationFrame']||window[v+'CancelRequestAnimationFrame'];}}var clsMutationObserver=window.MutationObserver||window.WebKitMutationObserver||false;var _globaloptions={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:8*3,touchbehavior:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,autohidemode:true,background:"",iframeautoresize:true,cursorminheight:32,preservenativescrolling:true,railoffset:false,railhoffset:false,bouncescroll:true,spacebarenabled:true,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:true,horizrailenabled:true,railalign:"right",railvalign:"bottom",enabletranslate3d:true,enablemousewheel:true,enablekeyboard:true,smoothscroll:true,sensitiverail:true,enablemouselockapi:true, //      cursormaxheight:false,
	cursorfixedheight:false,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:true,enablescrollonselection:true,overflowx:true,overflowy:true,cursordragspeed:0.3,rtlmode:"auto",cursordragontouch:false,oneaxismousemode:"auto",scriptpath:getScriptPath()};var browserdetected=false;var getBrowserDetection=function getBrowserDetection(){if(browserdetected)return browserdetected;var domtest=document.createElement('DIV');var d={};d.haspointerlock="pointerLockElement" in document||"mozPointerLockElement" in document||"webkitPointerLockElement" in document;d.isopera="opera" in window;d.isopera12=d.isopera&&"getUserMedia" in navigator;d.isoperamini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";d.isie="all" in document&&"attachEvent" in domtest&&!d.isopera;d.isieold=d.isie&&!("msInterpolationMode" in domtest.style); // IE6 and older
	d.isie7=d.isie&&!d.isieold&&(!("documentMode" in document)||document.documentMode==7);d.isie8=d.isie&&"documentMode" in document&&document.documentMode==8;d.isie9=d.isie&&"performance" in window&&document.documentMode>=9;d.isie10=d.isie&&"performance" in window&&document.documentMode>=10;d.isie9mobile=/iemobile.9/i.test(navigator.userAgent); //wp 7.1 mango
	if(d.isie9mobile)d.isie9=false;d.isie7mobile=!d.isie9mobile&&d.isie7&&/iemobile/i.test(navigator.userAgent); //wp 7.0
	d.ismozilla="MozAppearance" in domtest.style;d.iswebkit="WebkitAppearance" in domtest.style;d.ischrome="chrome" in window;d.ischrome22=d.ischrome&&d.haspointerlock;d.ischrome26=d.ischrome&&"transition" in domtest.style; // issue with transform detection (maintain prefix)
	d.cantouch="ontouchstart" in document.documentElement||"ontouchstart" in window; // detection for Chrome Touch Emulation
	d.hasmstouch=window.navigator.msPointerEnabled||false; // IE10+ pointer events
	d.ismac=/^mac$/i.test(navigator.platform);d.isios=d.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);d.isios4=d.isios&&!("seal" in Object);d.isandroid=/android/i.test(navigator.userAgent);d.trstyle=false;d.hastransform=false;d.hastranslate3d=false;d.transitionstyle=false;d.hastransition=false;d.transitionend=false;var check=['transform','msTransform','webkitTransform','MozTransform','OTransform'];for(var a=0;a<check.length;a++){if(typeof domtest.style[check[a]]!="undefined"){d.trstyle=check[a];break;}}d.hastransform=d.trstyle!=false;if(d.hastransform){domtest.style[d.trstyle]="translate3d(1px,2px,3px)";d.hastranslate3d=/translate3d/.test(domtest.style[d.trstyle]);}d.transitionstyle=false;d.prefixstyle='';d.transitionend=false;var check=['transition','webkitTransition','MozTransition','OTransition','OTransition','msTransition','KhtmlTransition'];var prefix=['','-webkit-','-moz-','-o-','-o','-ms-','-khtml-'];var evs=['transitionend','webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd','msTransitionEnd','KhtmlTransitionEnd'];for(var a=0;a<check.length;a++){if(check[a] in domtest.style){d.transitionstyle=check[a];d.prefixstyle=prefix[a];d.transitionend=evs[a];break;}}if(d.ischrome26){ // use always prefix
	d.prefixstyle=prefix[1];}d.hastransition=d.transitionstyle;function detectCursorGrab(){var lst=['-moz-grab','-webkit-grab','grab'];if(d.ischrome&&!d.ischrome22||d.isie)lst=[]; // force setting for IE returns false positive and chrome cursor bug
	for(var a=0;a<lst.length;a++){var p=lst[a];domtest.style['cursor']=p;if(domtest.style['cursor']==p)return p;}return 'url(//mail.google.com/mail/images/2/openhand.cur),n-resize'; // thank you google for custom cursor!
	}d.cursorgrabvalue=detectCursorGrab();d.hasmousecapture="setCapture" in domtest;d.hasMutationObserver=clsMutationObserver!==false;domtest=null; //memory released
	browserdetected=d;return d;};var NiceScrollClass=function NiceScrollClass(myopt,me){var _this=this;var self=this;this.version='3.5.6';this.name='nicescroll';this.me=me;this.opt={doc:$("body"),win:false};$.extend(this.opt,_globaloptions); // Options for internal use
	this.opt.snapbackspeed=80;if(myopt||false){for(var a in self.opt){if(typeof myopt[a]!="undefined")self.opt[a]=myopt[a];}}this.doc=self.opt.doc;this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||'':'';this.ispage=/^BODY|HTML/.test(self.opt.win?self.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=self.opt.win!==false;this.win=self.opt.win||(this.ispage?$(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?$(window):this.win;this.body=$("body");this.viewport=false;this.isfixed=false;this.iframe=false;this.isiframe=this.doc[0].nodeName=='IFRAME'&&this.win[0].nodeName=='IFRAME';this.istextarea=this.win[0].nodeName=='TEXTAREA';this.forcescreen=false; //force to use screen position on events
	this.canshowonmouseevent=self.opt.autohidemode!="scroll"; // Events jump table
	this.onmousedown=false;this.onmouseup=false;this.onmousemove=false;this.onmousewheel=false;this.onkeypress=false;this.ongesturezoom=false;this.onclick=false; // Nicescroll custom events
	this.onscrollstart=false;this.onscrollend=false;this.onscrollcancel=false;this.onzoomin=false;this.onzoomout=false; // Let's start!
	this.view=false;this.page=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.isrtlmode=this.opt.rtlmode=="auto"?(this.win[0]==window?this.body:this.win).css("direction")=="rtl":this.opt.rtlmode===true; //    this.checkrtlmode = false;
	this.scrollrunning=false;this.scrollmom=false;this.observer=false;this.observerremover=false; // observer on parent for remove detection
	do {this.id="ascrail"+ascrailcounter++;}while(document.getElementById(this.id));this.rail=false;this.cursor=false;this.cursorfreezed=false;this.selectiondrag=false;this.zoom=false;this.zoomactive=false;this.hasfocus=false;this.hasmousefocus=false;this.visibility=true;this.locked=false;this.hidden=false; // rails always hidden
	this.cursoractive=true; // user can interact with cursors
	this.wheelprevented=false; //prevent mousewheel event
	this.overflowx=self.opt.overflowx;this.overflowy=self.opt.overflowy;this.nativescrollingarea=false;this.checkarea=0;this.events=[]; // event list for unbind
	this.saved={};this.delaylist={};this.synclist={};this.lastdeltax=0;this.lastdeltay=0;this.detected=getBrowserDetection();var cap=$.extend({},this.detected);this.canhwscroll=cap.hastransform&&self.opt.hwacceleration;this.ishwscroll=this.canhwscroll&&self.haswrapper;this.istouchcapable=false; // desktop devices with touch screen support
	//## Check WebKit-based desktop with touch support
	if(cap.cantouch&&cap.iswebkit&&!cap.isios&&!cap.isandroid){this.istouchcapable=true;cap.cantouch=false; // parse normal desktop events
	} //## Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
	if(cap.cantouch&&cap.ismozilla&&!cap.isios&&!cap.isandroid){this.istouchcapable=true;cap.cantouch=false; // parse normal desktop events
	} //## disable MouseLock API on user request
	if(!self.opt.enablemouselockapi){cap.hasmousecapture=false;cap.haspointerlock=false;}this.delayed=function(name,fn,tm,lazy){var dd=self.delaylist[name];var nw=new Date().getTime();if(!lazy&&dd&&dd.tt)return false;if(dd&&dd.tt)clearTimeout(dd.tt);if(dd&&dd.last+tm>nw&&!dd.tt){self.delaylist[name]={last:nw+tm,tt:setTimeout(function(){if(self||false){self.delaylist[name].tt=0;fn.call();}},tm)};}else if(!dd||!dd.tt){self.delaylist[name]={last:nw,tt:0};setTimeout(function(){fn.call();},0);}};this.debounced=function(name,fn,tm){var dd=self.delaylist[name];var nw=new Date().getTime();self.delaylist[name]=fn;if(!dd){setTimeout(function(){var fn=self.delaylist[name];self.delaylist[name]=false;fn.call();},tm);}};var _onsync=false;this.synched=function(name,fn){function requestSync(){if(_onsync)return;setAnimationFrame(function(){_onsync=false;for(name in self.synclist){var fn=self.synclist[name];if(fn)fn.call(self);self.synclist[name]=false;}});_onsync=true;};self.synclist[name]=fn;requestSync();return name;};this.unsynched=function(name){if(self.synclist[name])self.synclist[name]=false;};this.css=function(el,pars){ // save & set
	for(var n in pars){self.saved.css.push([el,n,el.css(n)]);el.css(n,pars[n]);}};this.scrollTop=function(val){return typeof val=="undefined"?self.getScrollTop():self.setScrollTop(val);};this.scrollLeft=function(val){return typeof val=="undefined"?self.getScrollLeft():self.setScrollLeft(val);}; // derived by by Dan Pupius www.pupius.net
	BezierClass=function BezierClass(st,ed,spd,p1,p2,p3,p4){this.st=st;this.ed=ed;this.spd=spd;this.p1=p1||0;this.p2=p2||1;this.p3=p3||0;this.p4=p4||1;this.ts=new Date().getTime();this.df=this.ed-this.st;};BezierClass.prototype={B2:function B2(t){return 3*t*t*(1-t);},B3:function B3(t){return 3*t*(1-t)*(1-t);},B4:function B4(t){return (1-t)*(1-t)*(1-t);},getNow:function getNow(){var nw=new Date().getTime();var pc=1-(nw-this.ts)/this.spd;var bz=this.B2(pc)+this.B3(pc)+this.B4(pc);return pc<0?this.ed:this.st+Math.round(this.df*bz);},update:function update(ed,spd){this.st=this.getNow();this.ed=ed;this.spd=spd;this.ts=new Date().getTime();this.df=this.ed-this.st;return this;}};if(this.ishwscroll){var cxscrollleft;(function(){ // prevent flickering http://stackoverflow.com/questions/3461441/
	//derived from http://stackoverflow.com/questions/11236090/
	var getMatrixValues=function getMatrixValues(){var tr=self.doc.css(cap.trstyle);if(tr&&tr.substr(0,6)=="matrix"){return tr.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,'').split(/, +/);}return false;}; // hw accelerated scroll
	_this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"}; //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
	if(cap.hastranslate3d&&cap.isios)_this.doc.css("-webkit-backface-visibility","hidden");_this.getScrollTop=function(last){if(!last){var mtx=getMatrixValues();if(mtx)return mtx.length==16?-mtx[13]:-mtx[5]; //matrix3d 16 on IE10
	if(self.timerscroll&&self.timerscroll.bz)return self.timerscroll.bz.getNow();}return self.doc.translate.y;};_this.getScrollLeft=function(last){if(!last){var mtx=getMatrixValues();if(mtx)return mtx.length==16?-mtx[12]:-mtx[4]; //matrix3d 16 on IE10
	if(self.timerscroll&&self.timerscroll.bh)return self.timerscroll.bh.getNow();}return self.doc.translate.x;};if(document.createEvent){_this.notifyScrollEvent=function(el){var e=document.createEvent("UIEvents");e.initUIEvent("scroll",false,true,window,1);el.dispatchEvent(e);};}else if(document.fireEvent){_this.notifyScrollEvent=function(el){var e=document.createEventObject();el.fireEvent("onscroll");e.cancelBubble=true;};}else {_this.notifyScrollEvent=function(el,add){}; //NOPE
	}cxscrollleft=_this.isrtlmode?1:-1;if(cap.hastranslate3d&&self.opt.enabletranslate3d){_this.setScrollTop=function(val,silent){self.doc.translate.y=val;self.doc.translate.ty=val*-1+"px";self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");if(!silent)self.notifyScrollEvent(self.win[0]);};_this.setScrollLeft=function(val,silent){self.doc.translate.x=val;self.doc.translate.tx=val*cxscrollleft+"px";self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");if(!silent)self.notifyScrollEvent(self.win[0]);};}else {_this.setScrollTop=function(val,silent){self.doc.translate.y=val;self.doc.translate.ty=val*-1+"px";self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");if(!silent)self.notifyScrollEvent(self.win[0]);};_this.setScrollLeft=function(val,silent){self.doc.translate.x=val;self.doc.translate.tx=val*cxscrollleft+"px";self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");if(!silent)self.notifyScrollEvent(self.win[0]);};}})();}else { // native scroll
	this.getScrollTop=function(){return self.docscroll.scrollTop();};this.setScrollTop=function(val){return self.docscroll.scrollTop(val);};this.getScrollLeft=function(){if(self.detected.ismozilla&&self.isrtlmode)return Math.abs(self.docscroll.scrollLeft());return self.docscroll.scrollLeft();};this.setScrollLeft=function(val){return self.docscroll.scrollLeft(self.detected.ismozilla&&self.isrtlmode?-val:val);};}this.getTarget=function(e){if(!e)return false;if(e.target)return e.target;if(e.srcElement)return e.srcElement;return false;};this.hasParent=function(e,id){if(!e)return false;var el=e.target||e.srcElement||e||false;while(el&&el.id!=id){el=el.parentNode||false;}return el!==false;};function getZIndex(){var dom=self.win;if("zIndex" in dom)return dom.zIndex(); // use jQuery UI method when available
	while(dom.length>0){if(dom[0].nodeType==9)return false;var zi=dom.css('zIndex');if(!isNaN(zi)&&zi!=0)return parseInt(zi);dom=dom.parent();}return false;}; //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
	var _convertBorderWidth={"thin":1,"medium":3,"thick":5};function getWidthToPixel(dom,prop,chkheight){var wd=dom.css(prop);var px=parseFloat(wd);if(isNaN(px)){px=_convertBorderWidth[wd]||0;var brd=px==3?chkheight?self.win.outerHeight()-self.win.innerHeight():self.win.outerWidth()-self.win.innerWidth():1; //DON'T TRUST CSS
	if(self.isie8&&px)px+=1;return brd?px:0;}return px;};this.getOffset=function(){if(self.isfixed)return {top:parseFloat(self.win.css('top')),left:parseFloat(self.win.css('left'))};if(!self.viewport)return self.win.offset();var ww=self.win.offset();var vp=self.viewport.offset();return {top:ww.top-vp.top+self.viewport.scrollTop(),left:ww.left-vp.left+self.viewport.scrollLeft()};};this.updateScrollBar=function(len){if(self.ishwscroll){self.rail.css({height:self.win.innerHeight()});if(self.railh)self.railh.css({width:self.win.innerWidth()});}else {var wpos=self.getOffset();var pos={top:wpos.top,left:wpos.left};pos.top+=getWidthToPixel(self.win,'border-top-width',true);var brd=(self.win.outerWidth()-self.win.innerWidth())/2;pos.left+=self.rail.align?self.win.outerWidth()-getWidthToPixel(self.win,'border-right-width')-self.rail.width:getWidthToPixel(self.win,'border-left-width');var off=self.opt.railoffset;if(off){if(off.top)pos.top+=off.top;if(self.rail.align&&off.left)pos.left+=off.left;}if(!self.locked)self.rail.css({top:pos.top,left:pos.left,height:len?len.h:self.win.innerHeight()});if(self.zoom){self.zoom.css({top:pos.top+1,left:self.rail.align==1?pos.left-20:pos.left+self.rail.width+4});}if(self.railh&&!self.locked){var pos={top:wpos.top,left:wpos.left};var off=self.opt.railhoffset;if(!!off){if(!!off.top)pos.top+=off.top;if(!!off.left)pos.left+=off.left;}var y=self.railh.align?pos.top+getWidthToPixel(self.win,'border-top-width',true)+self.win.innerHeight()-self.railh.height:pos.top+getWidthToPixel(self.win,'border-top-width',true);var x=pos.left+getWidthToPixel(self.win,'border-left-width');self.railh.css({top:y,left:x,width:self.railh.width});}}};this.doRailClick=function(e,dbl,hr){var fn,pg,cur,pos; //      if (self.rail.drag&&self.rail.drag.pt!=1) return;
	if(self.locked)return; //      if (self.rail.drag) return;
	//      self.cancelScroll();
	self.cancelEvent(e);if(dbl){fn=hr?self.doScrollLeft:self.doScrollTop;cur=hr?(e.pageX-self.railh.offset().left-self.cursorwidth/2)*self.scrollratio.x:(e.pageY-self.rail.offset().top-self.cursorheight/2)*self.scrollratio.y;fn(cur);}else {fn=hr?self.doScrollLeftBy:self.doScrollBy;cur=hr?self.scroll.x:self.scroll.y;pos=hr?e.pageX-self.railh.offset().left:e.pageY-self.rail.offset().top;pg=hr?self.view.w:self.view.h;cur>=pos?fn(pg):fn(-pg);}};self.hasanimationframe=setAnimationFrame;self.hascancelanimationframe=clearAnimationFrame;if(!self.hasanimationframe){setAnimationFrame=function setAnimationFrame(fn){return setTimeout(fn,15-Math.floor(+new Date()/1000)%16);}; // 1000/60)};
	clearAnimationFrame=clearInterval;}else if(!self.hascancelanimationframe)clearAnimationFrame=function clearAnimationFrame(){self.cancelAnimationFrame=true;};this.init=function(){var _this2=this;self.saved.css=[];if(cap.isie7mobile)return true; // SORRY, DO NOT WORK!
	if(cap.isoperamini)return true; // SORRY, DO NOT WORK!
	if(cap.hasmstouch)self.css(self.ispage?$("html"):self.win,{'-ms-touch-action':'none'});self.zindex="auto";if(!self.ispage&&self.opt.zindex=="auto"){self.zindex=getZIndex()||"auto";}else {self.zindex=self.opt.zindex;}if(!self.ispage&&self.zindex!="auto"){if(self.zindex>globalmaxzindex)globalmaxzindex=self.zindex;}if(self.isie&&self.zindex==0&&self.opt.zindex=="auto"){ // fix IE auto == 0
	self.zindex="auto";} /*
	                  self.ispage = true;
	                  self.haswrapper = true;
	            //      self.win = $(window);
	                  self.docscroll = $("body");
	            //      self.doc = $("body");
	            */if(!self.ispage||!cap.cantouch&&!cap.isieold&&!cap.isie9mobile){var cont=self.docscroll;if(self.ispage)cont=self.haswrapper?self.win:self.doc;if(!cap.isie9mobile)self.css(cont,{'overflow-y':'hidden'});if(self.ispage&&cap.isie7){if(self.doc[0].nodeName=='BODY')self.css($("html"),{'overflow-y':'hidden'}); //IE7 double scrollbar issue
	else if(self.doc[0].nodeName=='HTML')self.css($("body"),{'overflow-y':'hidden'}); //IE7 double scrollbar issue
	}if(cap.isios&&!self.ispage&&!self.haswrapper)self.css($("body"),{"-webkit-overflow-scrolling":"touch"}); //force hw acceleration
	var cursor=$(document.createElement('div'));cursor.css({position:"relative",top:0,"float":"right",width:self.opt.cursorwidth,height:"0px",'background-color':self.opt.cursorcolor,border:self.opt.cursorborder,'background-clip':'padding-box','-webkit-border-radius':self.opt.cursorborderradius,'-moz-border-radius':self.opt.cursorborderradius,'border-radius':self.opt.cursorborderradius});cursor.hborder=parseFloat(cursor.outerHeight()-cursor.innerHeight());self.cursor=cursor;var rail=$(document.createElement('div'));rail.attr('id',self.id);rail.addClass('nicescroll-rails');var v,a,kp=["left","right"]; //"top","bottom"
	for(var n in kp){a=kp[n];v=self.opt.railpadding[a];v?rail.css("padding-"+a,v+"px"):self.opt.railpadding[a]=0;}rail.append(cursor);rail.width=Math.max(parseFloat(self.opt.cursorwidth),cursor.outerWidth())+self.opt.railpadding['left']+self.opt.railpadding['right'];rail.css({width:rail.width+"px",'zIndex':self.zindex,"background":self.opt.background,cursor:"default"});rail.visibility=true;rail.scrollable=true;rail.align=self.opt.railalign=="left"?0:1;self.rail=rail;self.rail.drag=false;var zoom=false;if(self.opt.boxzoom&&!self.ispage&&!cap.isieold){zoom=document.createElement('div');self.bind(zoom,"click",self.doZoom);self.zoom=$(zoom);self.zoom.css({"cursor":"pointer",'z-index':self.zindex,'backgroundImage':'url('+self.opt.scriptpath+'zoomico.png)','height':18,'width':18,'backgroundPosition':'0px 0px'});if(self.opt.dblclickzoom)self.bind(self.win,"dblclick",self.doZoom);if(cap.cantouch&&self.opt.gesturezoom){self.ongesturezoom=function(e){if(e.scale>1.5)self.doZoomIn(e);if(e.scale<0.8)self.doZoomOut(e);return self.cancelEvent(e);};self.bind(self.win,"gestureend",self.ongesturezoom);}} // init HORIZ
	self.railh=false;if(self.opt.horizrailenabled){self.css(cont,{'overflow-x':'hidden'});var cursor=$(document.createElement('div'));cursor.css({position:"absolute",top:0,height:self.opt.cursorwidth,width:"0px",'background-color':self.opt.cursorcolor,border:self.opt.cursorborder,'background-clip':'padding-box','-webkit-border-radius':self.opt.cursorborderradius,'-moz-border-radius':self.opt.cursorborderradius,'border-radius':self.opt.cursorborderradius});cursor.wborder=parseFloat(cursor.outerWidth()-cursor.innerWidth());self.cursorh=cursor;var railh=$(document.createElement('div'));railh.attr('id',self.id+'-hr');railh.addClass('nicescroll-rails');railh.height=Math.max(parseFloat(self.opt.cursorwidth),cursor.outerHeight());railh.css({height:railh.height+"px",'zIndex':self.zindex,"background":self.opt.background});railh.append(cursor);railh.visibility=true;railh.scrollable=true;railh.align=self.opt.railvalign=="top"?0:1;self.railh=railh;self.railh.drag=false;} //
	if(self.ispage){rail.css({position:"fixed",top:"0px",height:"100%"});rail.align?rail.css({right:"0px"}):rail.css({left:"0px"});self.body.append(rail);if(self.railh){railh.css({position:"fixed",left:"0px",width:"100%"});railh.align?railh.css({bottom:"0px"}):railh.css({top:"0px"});self.body.append(railh);}}else {if(self.ishwscroll){if(self.win.css('position')=='static')self.css(self.win,{'position':'relative'});var bd=self.win[0].nodeName=='HTML'?self.body:self.win;if(self.zoom){self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});bd.append(self.zoom);}rail.css({position:"absolute",top:0});rail.align?rail.css({right:0}):rail.css({left:0});bd.append(rail);if(railh){railh.css({position:"absolute",left:0,bottom:0});railh.align?railh.css({bottom:0}):railh.css({top:0});bd.append(railh);}}else {self.isfixed=self.win.css("position")=="fixed";var rlpos=self.isfixed?"fixed":"absolute";if(!self.isfixed)self.viewport=self.getViewport(self.win[0]);if(self.viewport){self.body=self.viewport;if(/fixed|relative|absolute/.test(self.viewport.css("position"))==false)self.css(self.viewport,{"position":"relative"});}rail.css({position:rlpos});if(self.zoom)self.zoom.css({position:rlpos});self.updateScrollBar();self.body.append(rail);if(self.zoom)self.body.append(self.zoom);if(self.railh){railh.css({position:rlpos});self.body.append(railh);}}if(cap.isios)self.css(self.win,{'-webkit-tap-highlight-color':'rgba(0,0,0,0)','-webkit-touch-callout':'none'}); // prevent grey layer on click
	if(cap.isie&&self.opt.disableoutline)self.win.attr("hideFocus","true"); // IE, prevent dotted rectangle on focused div
	if(cap.iswebkit&&self.opt.disableoutline)self.win.css({"outline":"none"}); //          if (cap.isopera&&self.opt.disableoutline) self.win.css({"outline":"0"});  // Opera to test [TODO]
	}if(self.opt.autohidemode===false){self.autohidedom=false;self.rail.css({opacity:self.opt.cursoropacitymax});if(self.railh)self.railh.css({opacity:self.opt.cursoropacitymax});}else if(self.opt.autohidemode===true||self.opt.autohidemode==="leave"){self.autohidedom=$().add(self.rail);if(cap.isie8)self.autohidedom=self.autohidedom.add(self.cursor);if(self.railh)self.autohidedom=self.autohidedom.add(self.railh);if(self.railh&&cap.isie8)self.autohidedom=self.autohidedom.add(self.cursorh);}else if(self.opt.autohidemode=="scroll"){self.autohidedom=$().add(self.rail);if(self.railh)self.autohidedom=self.autohidedom.add(self.railh);}else if(self.opt.autohidemode=="cursor"){self.autohidedom=$().add(self.cursor);if(self.railh)self.autohidedom=self.autohidedom.add(self.cursorh);}else if(self.opt.autohidemode=="hidden"){self.autohidedom=false;self.hide();self.locked=false;}if(cap.isie9mobile){self.scrollmom=new ScrollMomentumClass2D(self); /*
	          var trace = function(msg) {
	            var db = $("#debug");
	            if (isNaN(msg)&&(typeof msg != "string")) {
	              var x = [];
	              for(var a in msg) {
	                x.push(a+":"+msg[a]);
	              }
	              msg ="{"+x.join(",")+"}";
	            }
	            if (db.children().length>0) {
	              db.children().eq(0).before("<div>"+msg+"</div>");
	            } else {
	              db.append("<div>"+msg+"</div>");
	            }
	          }
	          window.onerror = function(msg,url,ln) {
	            trace("ERR: "+msg+" at "+ln);
	          }
	*/self.onmangotouch=function(e){var py=self.getScrollTop();var px=self.getScrollLeft();if(py==self.scrollmom.lastscrolly&&px==self.scrollmom.lastscrollx)return true; //            $("#debug").html('DRAG:'+py);
	var dfy=py-self.mangotouch.sy;var dfx=px-self.mangotouch.sx;var df=Math.round(Math.sqrt(Math.pow(dfx,2)+Math.pow(dfy,2)));if(df==0)return;var dry=dfy<0?-1:1;var drx=dfx<0?-1:1;var tm=+new Date();if(self.mangotouch.lazy)clearTimeout(self.mangotouch.lazy);if(tm-self.mangotouch.tm>80||self.mangotouch.dry!=dry||self.mangotouch.drx!=drx){ //              trace('RESET+'+(tm-self.mangotouch.tm));
	self.scrollmom.stop();self.scrollmom.reset(px,py);self.mangotouch.sy=py;self.mangotouch.ly=py;self.mangotouch.sx=px;self.mangotouch.lx=px;self.mangotouch.dry=dry;self.mangotouch.drx=drx;self.mangotouch.tm=tm;}else {self.scrollmom.stop();self.scrollmom.update(self.mangotouch.sx-dfx,self.mangotouch.sy-dfy);var gap=tm-self.mangotouch.tm;self.mangotouch.tm=tm; //              trace('MOVE:'+df+" - "+gap);
	var ds=Math.max(Math.abs(self.mangotouch.ly-py),Math.abs(self.mangotouch.lx-px));self.mangotouch.ly=py;self.mangotouch.lx=px;if(ds>2){self.mangotouch.lazy=setTimeout(function(){ //                  trace('END:'+ds+'+'+gap);
	self.mangotouch.lazy=false;self.mangotouch.dry=0;self.mangotouch.drx=0;self.mangotouch.tm=0;self.scrollmom.doMomentum(30);},100);}}};var top=self.getScrollTop();var lef=self.getScrollLeft();self.mangotouch={sy:top,ly:top,dry:0,sx:lef,lx:lef,drx:0,lazy:false,tm:0};self.bind(self.docscroll,"scroll",self.onmangotouch);}else {if(cap.cantouch||self.istouchcapable||self.opt.touchbehavior||cap.hasmstouch){self.scrollmom=new ScrollMomentumClass2D(self);self.ontouchstart=function(e){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;self.hasmoving=false;if(!self.locked){if(cap.hasmstouch){var tg=e.target?e.target:false;while(tg){var nc=$(tg).getNiceScroll();if(nc.length>0&&nc[0].me==self.me)break;if(nc.length>0)return false;if(tg.nodeName=='DIV'&&tg.id==self.id)break;tg=tg.parentNode?tg.parentNode:false;}}self.cancelScroll();var tg=self.getTarget(e);if(tg){var skp=/INPUT/i.test(tg.nodeName)&&/range/i.test(tg.type);if(skp)return self.stopPropagation(e);}if(!("clientX" in e)&&"changedTouches" in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY;}if(self.forcescreen){var le=e;var e={"original":e.original?e.original:e};e.clientX=le.screenX;e.clientY=le.screenY;}self.rail.drag={x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false};if(self.ispage||!self.opt.directionlockdeadzone){self.rail.drag.dl="f";}else {var view={w:$(window).width(),h:$(window).height()};var page={w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)};var maxh=Math.max(0,page.h-view.h);var maxw=Math.max(0,page.w-view.w);if(!self.rail.scrollable&&self.railh.scrollable)self.rail.drag.ck=maxh>0?"v":false;else if(self.rail.scrollable&&!self.railh.scrollable)self.rail.drag.ck=maxw>0?"h":false;else self.rail.drag.ck=false;if(!self.rail.drag.ck)self.rail.drag.dl="f";}if(self.opt.touchbehavior&&self.isiframe&&cap.isie){var wp=self.win.position();self.rail.drag.x+=wp.left;self.rail.drag.y+=wp.top;}self.hasmoving=false;self.lastmouseup=false;self.scrollmom.reset(e.clientX,e.clientY);if(!cap.cantouch&&!this.istouchcapable&&!cap.hasmstouch){var ip=tg?/INPUT|SELECT|TEXTAREA/i.test(tg.nodeName):false;if(!ip){if(!self.ispage&&cap.hasmousecapture)tg.setCapture();if(self.opt.touchbehavior){if(tg.onclick&&!(tg._onclick||false)){ // intercept DOM0 onclick event
	tg._onclick=tg.onclick;tg.onclick=function(e){if(self.hasmoving)return false;tg._onclick.call(this,e);};}return self.cancelEvent(e);}return self.stopPropagation(e);}if(/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))){pc={"tg":tg,"click":false};self.preventclick=pc;}}}};self.ontouchend=function(e){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;if(self.rail.drag&&self.rail.drag.pt==2){self.scrollmom.doMomentum();self.rail.drag=false;if(self.hasmoving){self.lastmouseup=true;self.hideCursor();if(cap.hasmousecapture)document.releaseCapture();if(!cap.cantouch)return self.cancelEvent(e);}}};var moveneedoffset=self.opt.touchbehavior&&self.isiframe&&!cap.hasmousecapture;self.ontouchmove=function(e,byiframe){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;if(self.rail.drag&&self.rail.drag.pt==2){if(cap.cantouch&&typeof e.original=="undefined")return true; // prevent ios "ghost" events by clickable elements
	self.hasmoving=true;if(self.preventclick&&!self.preventclick.click){self.preventclick.click=self.preventclick.tg.onclick||false;self.preventclick.tg.onclick=self.onpreventclick;}var ev=$.extend({"original":e},e);e=ev;if("changedTouches" in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY;}if(self.forcescreen){var le=e;var e={"original":e.original?e.original:e};e.clientX=le.screenX;e.clientY=le.screenY;}var ofx=ofy=0;if(moveneedoffset&&!byiframe){var wp=self.win.position();ofx=-wp.left;ofy=-wp.top;}var fy=e.clientY+ofy;var my=fy-self.rail.drag.y;var fx=e.clientX+ofx;var mx=fx-self.rail.drag.x;var ny=self.rail.drag.st-my;if(self.ishwscroll&&self.opt.bouncescroll){if(ny<0){ny=Math.round(ny/2); //                    fy = 0;
	}else if(ny>self.page.maxh){ny=self.page.maxh+Math.round((ny-self.page.maxh)/2); //                    fy = 0;
	}}else {if(ny<0){ny=0;fy=0;}if(ny>self.page.maxh){ny=self.page.maxh;fy=0;}}if(self.railh&&self.railh.scrollable){var nx=self.isrtlmode?mx-self.rail.drag.sl:self.rail.drag.sl-mx;if(self.ishwscroll&&self.opt.bouncescroll){if(nx<0){nx=Math.round(nx/2); //                      fx = 0;
	}else if(nx>self.page.maxw){nx=self.page.maxw+Math.round((nx-self.page.maxw)/2); //                      fx = 0;
	}}else {if(nx<0){nx=0;fx=0;}if(nx>self.page.maxw){nx=self.page.maxw;fx=0;}}}var grabbed=false;if(self.rail.drag.dl){grabbed=true;if(self.rail.drag.dl=="v")nx=self.rail.drag.sl;else if(self.rail.drag.dl=="h")ny=self.rail.drag.st;}else {var ay=Math.abs(my);var ax=Math.abs(mx);var dz=self.opt.directionlockdeadzone;if(self.rail.drag.ck=="v"){if(ay>dz&&ax<=ay*0.3){self.rail.drag=false;return true;}else if(ax>dz){self.rail.drag.dl="f";$("body").scrollTop($("body").scrollTop()); // stop iOS native scrolling (when active javascript has blocked)
	}}else if(self.rail.drag.ck=="h"){if(ax>dz&&ay<=ax*0.3){self.rail.drag=false;return true;}else if(ay>dz){self.rail.drag.dl="f";$("body").scrollLeft($("body").scrollLeft()); // stop iOS native scrolling (when active javascript has blocked)
	}}}self.synched("touchmove",function(){if(self.rail.drag&&self.rail.drag.pt==2){if(self.prepareTransition)self.prepareTransition(0);if(self.rail.scrollable)self.setScrollTop(ny);self.scrollmom.update(fx,fy);if(self.railh&&self.railh.scrollable){self.setScrollLeft(nx);self.showCursor(ny,nx);}else {self.showCursor(ny);}if(cap.isie10)document.selection.clear();}});if(cap.ischrome&&self.istouchcapable)grabbed=false; //chrome touch emulation doesn't like!
	if(grabbed)return self.cancelEvent(e);}};}self.onmousedown=function(e,hronly){if(self.rail.drag&&self.rail.drag.pt!=1)return;if(self.locked)return self.cancelEvent(e);self.cancelScroll();self.rail.drag={x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:!!hronly};var tg=self.getTarget(e);if(!self.ispage&&cap.hasmousecapture)tg.setCapture();if(self.isiframe&&!cap.hasmousecapture){self.saved["csspointerevents"]=self.doc.css("pointer-events");self.css(self.doc,{"pointer-events":"none"});}self.hasmoving=false;return self.cancelEvent(e);};self.onmouseup=function(e){if(self.rail.drag){if(cap.hasmousecapture)document.releaseCapture();if(self.isiframe&&!cap.hasmousecapture)self.doc.css("pointer-events",self.saved["csspointerevents"]);if(self.rail.drag.pt!=1)return;self.rail.drag=false; //if (!self.rail.active) self.hideCursor();
	if(self.hasmoving)self.triggerScrollEnd(); // TODO - check &&!self.scrollrunning
	return self.cancelEvent(e);}};self.onmousemove=function(e){if(self.rail.drag){if(self.rail.drag.pt!=1)return;if(cap.ischrome&&e.which==0)return self.onmouseup(e);self.cursorfreezed=true;self.hasmoving=true;if(self.rail.drag.hr){self.scroll.x=self.rail.drag.sx+(e.clientX-self.rail.drag.x);if(self.scroll.x<0)self.scroll.x=0;var mw=self.scrollvaluemaxw;if(self.scroll.x>mw)self.scroll.x=mw;}else {self.scroll.y=self.rail.drag.sy+(e.clientY-self.rail.drag.y);if(self.scroll.y<0)self.scroll.y=0;var my=self.scrollvaluemax;if(self.scroll.y>my)self.scroll.y=my;}self.synched('mousemove',function(){if(self.rail.drag&&self.rail.drag.pt==1){self.showCursor();if(self.rail.drag.hr)self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),self.opt.cursordragspeed);else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),self.opt.cursordragspeed);}});return self.cancelEvent(e);} /*
	                                    else {
	                                      self.checkarea = true;
	                                    }
	                        */};if(cap.cantouch||self.opt.touchbehavior){self.onpreventclick=function(e){if(self.preventclick){self.preventclick.tg.onclick=self.preventclick.click;self.preventclick=false;return self.cancelEvent(e);}}; //            self.onmousedown = self.ontouchstart;
	//            self.onmouseup = self.ontouchend;
	//            self.onmousemove = self.ontouchmove;
	self.bind(self.win,"mousedown",self.ontouchstart); // control content dragging
	self.onclick=cap.isios?false:function(e){if(self.lastmouseup){self.lastmouseup=false;return self.cancelEvent(e);}else {return true;}};if(self.opt.grabcursorenabled&&cap.cursorgrabvalue){self.css(self.ispage?self.doc:self.win,{'cursor':cap.cursorgrabvalue});self.css(self.rail,{'cursor':cap.cursorgrabvalue});}}else {(function(){var checkSelectionScroll=function checkSelectionScroll(e){if(!self.selectiondrag)return;if(e){var ww=self.win.outerHeight();var df=e.pageY-self.selectiondrag.top;if(df>0&&df<ww)df=0;if(df>=ww)df-=ww;self.selectiondrag.df=df;}if(self.selectiondrag.df==0)return;var rt=-Math.floor(self.selectiondrag.df/6)*2; //              self.doScrollTop(self.getScrollTop(true)+rt);
	self.doScrollBy(rt);self.debounced("doselectionscroll",function(){checkSelectionScroll();},50);};;if("getSelection" in document){ // A grade - Major browsers
	self.hasTextSelected=function(){return document.getSelection().rangeCount>0;};}else if("selection" in document){ //IE9-
	self.hasTextSelected=function(){return document.selection.type!="None";};}else {self.hasTextSelected=function(){ // no support
	return false;};}self.onselectionstart=function(e){if(self.ispage)return;self.selectiondrag=self.win.offset();};self.onselectionend=function(e){self.selectiondrag=false;};self.onselectiondrag=function(e){if(!self.selectiondrag)return;if(self.hasTextSelected())self.debounced("selectionscroll",function(){checkSelectionScroll(e);},250);};})();}if(cap.hasmstouch){self.css(self.rail,{'-ms-touch-action':'none'});self.css(self.cursor,{'-ms-touch-action':'none'});self.bind(self.win,"MSPointerDown",self.ontouchstart);self.bind(document,"MSPointerUp",self.ontouchend);self.bind(document,"MSPointerMove",self.ontouchmove);self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault();});self.bind(self.cursor,"contextmenu",function(e){e.preventDefault();});}if(this.istouchcapable){ //desktop with screen touch enabled
	self.bind(self.win,"touchstart",self.ontouchstart);self.bind(document,"touchend",self.ontouchend);self.bind(document,"touchcancel",self.ontouchend);self.bind(document,"touchmove",self.ontouchmove);}self.bind(self.cursor,"mousedown",self.onmousedown);self.bind(self.cursor,"mouseup",self.onmouseup);if(self.railh){self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true);});self.bind(self.cursorh,"mouseup",self.onmouseup); /*
	                                    self.bind(self.cursorh,"mouseup",function(e){
	                                      if (self.rail.drag&&self.rail.drag.pt==2) return;
	                                      self.rail.drag = false;
	                                      self.hasmoving = false;
	                                      self.hideCursor();
	                                      if (cap.hasmousecapture) document.releaseCapture();
	                                      return self.cancelEvent(e);
	                                    });
	                        */}if(self.opt.cursordragontouch||!cap.cantouch&&!self.opt.touchbehavior){self.rail.css({"cursor":"default"});self.railh&&self.railh.css({"cursor":"default"});self.jqbind(self.rail,"mouseenter",function(){if(!self.win.is(":visible"))return false;if(self.canshowonmouseevent)self.showCursor();self.rail.active=true;});self.jqbind(self.rail,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor();});if(self.opt.sensitiverail){self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false);});self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false);});self.bind(self.cursor,"click",function(e){self.cancelEvent(e);});self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e);});}if(self.railh){self.jqbind(self.railh,"mouseenter",function(){if(!self.win.is(":visible"))return false;if(self.canshowonmouseevent)self.showCursor();self.rail.active=true;});self.jqbind(self.railh,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor();});if(self.opt.sensitiverail){self.bind(self.railh,"click",function(e){self.doRailClick(e,false,true);});self.bind(self.railh,"dblclick",function(e){self.doRailClick(e,true,true);});self.bind(self.cursorh,"click",function(e){self.cancelEvent(e);});self.bind(self.cursorh,"dblclick",function(e){self.cancelEvent(e);});}}}if(!cap.cantouch&&!self.opt.touchbehavior){self.bind(cap.hasmousecapture?self.win:document,"mouseup",self.onmouseup);self.bind(document,"mousemove",self.onmousemove);if(self.onclick)self.bind(document,"click",self.onclick);if(!self.ispage&&self.opt.enablescrollonselection){self.bind(self.win[0],"mousedown",self.onselectionstart);self.bind(document,"mouseup",self.onselectionend);self.bind(self.cursor,"mouseup",self.onselectionend);if(self.cursorh)self.bind(self.cursorh,"mouseup",self.onselectionend);self.bind(document,"mousemove",self.onselectiondrag);}if(self.zoom){self.jqbind(self.zoom,"mouseenter",function(){if(self.canshowonmouseevent)self.showCursor();self.rail.active=true;});self.jqbind(self.zoom,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor();});}}else {self.bind(cap.hasmousecapture?self.win:document,"mouseup",self.ontouchend);self.bind(document,"mousemove",self.ontouchmove);if(self.onclick)self.bind(document,"click",self.onclick);if(self.opt.cursordragontouch){self.bind(self.cursor,"mousedown",self.onmousedown);self.bind(self.cursor,"mousemove",self.onmousemove);self.cursorh&&self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true);});self.cursorh&&self.bind(self.cursorh,"mousemove",self.onmousemove);}}if(self.opt.enablemousewheel){if(!self.isiframe)self.bind(cap.isie&&self.ispage?document:self.win /*self.docscroll*/,"mousewheel",self.onmousewheel);self.bind(self.rail,"mousewheel",self.onmousewheel);if(self.railh)self.bind(self.railh,"mousewheel",self.onmousewheelhr);}if(!self.ispage&&!cap.cantouch&&!/HTML|^BODY/.test(self.win[0].nodeName)){if(!self.win.attr("tabindex"))self.win.attr({"tabindex":tabindexcounter++});self.jqbind(self.win,"focus",function(e){domfocus=self.getTarget(e).id||true;self.hasfocus=true;if(self.canshowonmouseevent)self.noticeCursor();});self.jqbind(self.win,"blur",function(e){domfocus=false;self.hasfocus=false;});self.jqbind(self.win,"mouseenter",function(e){mousefocus=self.getTarget(e).id||true;self.hasmousefocus=true;if(self.canshowonmouseevent)self.noticeCursor();});self.jqbind(self.win,"mouseleave",function(){mousefocus=false;self.hasmousefocus=false;if(!self.rail.drag)self.hideCursor();});};} // !ie9mobile
	//Thanks to http://www.quirksmode.org !!
	self.onkeypress=function(e){if(self.locked&&self.page.maxh==0)return true;e=e?e:window.e;var tg=self.getTarget(e);if(tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)){var tp=tg.getAttribute('type')||tg.type||false;if(!tp||!/submit|button|cancel/i.tp)return true;}if($(tg).attr('contenteditable'))return true;if(self.hasfocus||self.hasmousefocus&&!domfocus||self.ispage&&!domfocus&&!mousefocus){var key=e.keyCode;if(self.locked&&key!=27)return self.cancelEvent(e);var ctrl=e.ctrlKey||false;var shift=e.shiftKey||false;var ret=false;switch(key){case 38:case 63233: //safari
	self.doScrollBy(24*3);ret=true;break;case 40:case 63235: //safari
	self.doScrollBy(-24*3);ret=true;break;case 37:case 63232: //safari
	if(self.railh){ctrl?self.doScrollLeft(0):self.doScrollLeftBy(24*3);ret=true;}break;case 39:case 63234: //safari
	if(self.railh){ctrl?self.doScrollLeft(self.page.maxw):self.doScrollLeftBy(-24*3);ret=true;}break;case 33:case 63276: // safari
	self.doScrollBy(self.view.h);ret=true;break;case 34:case 63277: // safari
	self.doScrollBy(-self.view.h);ret=true;break;case 36:case 63273: // safari
	self.railh&&ctrl?self.doScrollPos(0,0):self.doScrollTo(0);ret=true;break;case 35:case 63275: // safari
	self.railh&&ctrl?self.doScrollPos(self.page.maxw,self.page.maxh):self.doScrollTo(self.page.maxh);ret=true;break;case 32:if(self.opt.spacebarenabled){shift?self.doScrollBy(self.view.h):self.doScrollBy(-self.view.h);ret=true;}break;case 27: // ESC
	if(self.zoomactive){self.doZoom();ret=true;}break;}if(ret)return self.cancelEvent(e);}};if(self.opt.enablekeyboard)self.bind(document,cap.isopera&&!cap.isopera12?"keypress":"keydown",self.onkeypress);self.bind(document,"keydown",function(e){var ctrl=e.ctrlKey||false;if(ctrl)self.wheelprevented=true;});self.bind(document,"keyup",function(e){var ctrl=e.ctrlKey||false;if(!ctrl)self.wheelprevented=false;});self.bind(window,'resize',self.lazyResize);self.bind(window,'orientationchange',self.lazyResize);self.bind(window,"load",self.lazyResize);if(cap.ischrome&&!self.ispage&&!self.haswrapper){ //chrome void scrollbar bug - it persists in version 26
	var tmp=self.win.attr("style");var ww=parseFloat(self.win.css("width"))+1;self.win.css('width',ww);self.synched("chromefix",function(){self.win.attr("style",tmp);});} // Trying a cross-browser implementation - good luck!
	self.onAttributeChange=function(e){self.lazyResize(250);};if(!self.ispage&&!self.haswrapper){ // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
	if(clsMutationObserver!==false){self.observer=new clsMutationObserver(function(mutations){mutations.forEach(self.onAttributeChange);});self.observer.observe(self.win[0],{childList:true,characterData:false,attributes:true,subtree:false});self.observerremover=new clsMutationObserver(function(mutations){mutations.forEach(function(mo){if(mo.removedNodes.length>0){for(var dd in mo.removedNodes){if(mo.removedNodes[dd]==self.win[0])return self.remove();}}});});self.observerremover.observe(self.win[0].parentNode,{childList:true,characterData:false,attributes:false,subtree:false});}else {self.bind(self.win,cap.isie&&!cap.isie9?"propertychange":"DOMAttrModified",self.onAttributeChange);if(cap.isie9)self.win[0].attachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
	self.bind(self.win,"DOMNodeRemoved",function(e){if(e.target==self.win[0])self.remove();});}} //
	if(!self.ispage&&self.opt.boxzoom)self.bind(window,"resize",self.resizeZoom);if(self.istextarea)self.bind(self.win,"mouseup",self.lazyResize); //        self.checkrtlmode = true;
	self.lazyResize(30);}if(this.doc[0].nodeName=='IFRAME'){(function(){var oniframeload=function oniframeload(e){self.iframexd=false;try{var doc='contentDocument' in this?this.contentDocument:this.contentWindow.document;var a=doc.domain;}catch(e){self.iframexd=true;doc=false;};if(self.iframexd){if("console" in window)console.log('NiceScroll error: policy restriced iframe');return true; //cross-domain - I can't manage this
	}self.forcescreen=true;if(self.isiframe){self.iframe={"doc":$(doc),"html":self.doc.contents().find('html')[0],"body":self.doc.contents().find('body')[0]};self.getContentSize=function(){return {w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)};};self.docscroll=$(self.iframe.body); //$(this.contentWindow);
	}if(!cap.isios&&self.opt.iframeautoresize&&!self.isiframe){self.win.scrollTop(0); // reset position
	self.doc.height(""); //reset height to fix browser bug
	var hh=Math.max(doc.getElementsByTagName('html')[0].scrollHeight,doc.body.scrollHeight);self.doc.height(hh);}self.lazyResize(30);if(cap.isie7)self.css($(self.iframe.html),{'overflow-y':'hidden'}); //self.css($(doc.body),{'overflow-y':'hidden'});
	self.css($(self.iframe.body),{'overflow-y':'hidden'});if(cap.isios&&self.haswrapper){self.css($(doc.body),{'-webkit-transform':'translate3d(0,0,0)'}); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
	}if('contentWindow' in this){self.bind(this.contentWindow,"scroll",self.onscroll); //IE8 & minor
	}else {self.bind(doc,"scroll",self.onscroll);}if(self.opt.enablemousewheel){self.bind(doc,"mousewheel",self.onmousewheel);}if(self.opt.enablekeyboard)self.bind(doc,cap.isopera?"keypress":"keydown",self.onkeypress);if(cap.cantouch||self.opt.touchbehavior){self.bind(doc,"mousedown",self.ontouchstart);self.bind(doc,"mousemove",function(e){self.ontouchmove(e,true);});if(self.opt.grabcursorenabled&&cap.cursorgrabvalue)self.css($(doc.body),{'cursor':cap.cursorgrabvalue});}self.bind(doc,"mouseup",self.ontouchend);if(self.zoom){if(self.opt.dblclickzoom)self.bind(doc,'dblclick',self.doZoom);if(self.ongesturezoom)self.bind(doc,"gestureend",self.ongesturezoom);}};;if(_this2.doc[0].readyState&&_this2.doc[0].readyState=="complete"){setTimeout(function(){oniframeload.call(self.doc[0],false);},500);}self.bind(_this2.doc,"load",oniframeload);})();}};this.showCursor=function(py,px){if(self.cursortimeout){clearTimeout(self.cursortimeout);self.cursortimeout=0;}if(!self.rail)return;if(self.autohidedom){self.autohidedom.stop().css({opacity:self.opt.cursoropacitymax});self.cursoractive=true;}if(!self.rail.drag||self.rail.drag.pt!=1){if(typeof py!="undefined"&&py!==false){self.scroll.y=Math.round(py*1/self.scrollratio.y);}if(typeof px!="undefined"){self.scroll.x=Math.round(px*1/self.scrollratio.x); //-cxscrollleft * Math.round(px * 1/self.scrollratio.x);
	}}self.cursor.css({height:self.cursorheight,top:self.scroll.y});if(self.cursorh){!self.rail.align&&self.rail.visibility?self.cursorh.css({width:self.cursorwidth,left:self.scroll.x+self.rail.width}):self.cursorh.css({width:self.cursorwidth,left:self.scroll.x});self.cursoractive=true;}if(self.zoom)self.zoom.stop().css({opacity:self.opt.cursoropacitymax});};this.hideCursor=function(tm){if(self.cursortimeout)return;if(!self.rail)return;if(!self.autohidedom)return;if(self.hasmousefocus&&self.opt.autohidemode=="leave")return;self.cursortimeout=setTimeout(function(){if(!self.rail.active||!self.showonmouseevent){self.autohidedom.stop().animate({opacity:self.opt.cursoropacitymin});if(self.zoom)self.zoom.stop().animate({opacity:self.opt.cursoropacitymin});self.cursoractive=false;}self.cursortimeout=0;},tm||self.opt.hidecursordelay);};this.noticeCursor=function(tm,py,px){self.showCursor(py,px);if(!self.rail.active)self.hideCursor(tm);};this.getContentSize=self.ispage?function(){return {w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)};}:self.haswrapper?function(){return {w:self.doc.outerWidth()+parseInt(self.win.css('paddingLeft'))+parseInt(self.win.css('paddingRight')),h:self.doc.outerHeight()+parseInt(self.win.css('paddingTop'))+parseInt(self.win.css('paddingBottom'))};}:function(){return {w:self.docscroll[0].scrollWidth,h:self.docscroll[0].scrollHeight};};this.onResize=function(e,page){if(!self||!self.win)return false;if(!self.haswrapper&&!self.ispage){if(self.win.css('display')=='none'){if(self.visibility)self.hideRail().hideRailHr();return false;}else {if(!self.hidden&&!self.visibility)self.showRail().showRailHr();}}var premaxh=self.page.maxh;var premaxw=self.page.maxw;var preview={h:self.view.h,w:self.view.w};self.view={w:self.ispage?self.win.width():parseInt(self.win[0].clientWidth),h:self.ispage?self.win.height():parseInt(self.win[0].clientHeight)};self.page=page?page:self.getContentSize();self.page.maxh=Math.max(0,self.page.h-self.view.h);self.page.maxw=Math.max(0,self.page.w-self.view.w);if(self.page.maxh==premaxh&&self.page.maxw==premaxw&&self.view.w==preview.w){ // test position
	if(!self.ispage){var pos=self.win.offset();if(self.lastposition){var lst=self.lastposition;if(lst.top==pos.top&&lst.left==pos.left)return self; //nothing to do
	}self.lastposition=pos;}else {return self; //nothing to do
	}}if(self.page.maxh==0){self.hideRail();self.scrollvaluemax=0;self.scroll.y=0;self.scrollratio.y=0;self.cursorheight=0;self.setScrollTop(0);self.rail.scrollable=false;}else {self.rail.scrollable=true;}if(self.page.maxw==0){self.hideRailHr();self.scrollvaluemaxw=0;self.scroll.x=0;self.scrollratio.x=0;self.cursorwidth=0;self.setScrollLeft(0);self.railh.scrollable=false;}else {self.railh.scrollable=true;}self.locked=self.page.maxh==0&&self.page.maxw==0;if(self.locked){if(!self.ispage)self.updateScrollBar(self.view);return false;}if(!self.hidden&&!self.visibility){self.showRail().showRailHr();}else if(!self.hidden&&!self.railh.visibility)self.showRailHr();if(self.istextarea&&self.win.css('resize')&&self.win.css('resize')!='none')self.view.h-=20;self.cursorheight=Math.min(self.view.h,Math.round(self.view.h*(self.view.h/self.page.h)));self.cursorheight=self.opt.cursorfixedheight?self.opt.cursorfixedheight:Math.max(self.opt.cursorminheight,self.cursorheight);self.cursorwidth=Math.min(self.view.w,Math.round(self.view.w*(self.view.w/self.page.w)));self.cursorwidth=self.opt.cursorfixedheight?self.opt.cursorfixedheight:Math.max(self.opt.cursorminheight,self.cursorwidth);self.scrollvaluemax=self.view.h-self.cursorheight-self.cursor.hborder;if(self.railh){self.railh.width=self.page.maxh>0?self.view.w-self.rail.width:self.view.w;self.scrollvaluemaxw=self.railh.width-self.cursorwidth-self.cursorh.wborder;} /*
	                  if (self.checkrtlmode&&self.railh) {
	                    self.checkrtlmode = false;
	                    if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
	                  }
	            */if(!self.ispage)self.updateScrollBar(self.view);self.scrollratio={x:self.page.maxw/self.scrollvaluemaxw,y:self.page.maxh/self.scrollvaluemax};var sy=self.getScrollTop();if(sy>self.page.maxh){self.doScrollTop(self.page.maxh);}else {self.scroll.y=Math.round(self.getScrollTop()*(1/self.scrollratio.y));self.scroll.x=Math.round(self.getScrollLeft()*(1/self.scrollratio.x));if(self.cursoractive)self.noticeCursor();}if(self.scroll.y&&self.getScrollTop()==0)self.doScrollTo(Math.floor(self.scroll.y*self.scrollratio.y));return self;};this.resize=self.onResize;this.lazyResize=function(tm){ // event debounce
	tm=isNaN(tm)?30:tm;self.delayed('resize',self.resize,tm);return self;}; // modified by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
	function _modernWheelEvent(dom,name,fn,bubble){self._bind(dom,name,function(e){var e=e?e:window.event;var event={original:e,target:e.target||e.srcElement,type:"wheel",deltaMode:e.type=="MozMousePixelScroll"?0:1,deltaX:0,deltaZ:0,preventDefault:function preventDefault(){e.preventDefault?e.preventDefault():e.returnValue=false;return false;},stopImmediatePropagation:function stopImmediatePropagation(){e.stopImmediatePropagation?e.stopImmediatePropagation():e.cancelBubble=true;}};if(name=="mousewheel"){event.deltaY=-1/40*e.wheelDelta;e.wheelDeltaX&&(event.deltaX=-1/40*e.wheelDeltaX);}else {event.deltaY=e.detail;}return fn.call(dom,event);},bubble);};this._bind=function(el,name,fn,bubble){ // primitive bind
	self.events.push({e:el,n:name,f:fn,b:bubble,q:false});if(el.addEventListener){el.addEventListener(name,fn,bubble||false);}else if(el.attachEvent){el.attachEvent("on"+name,fn);}else {el["on"+name]=fn;}};this.jqbind=function(dom,name,fn){ // use jquery bind for non-native events (mouseenter/mouseleave)
	self.events.push({e:dom,n:name,f:fn,q:true});$(dom).bind(name,fn);};this.bind=function(dom,name,fn,bubble){ // touch-oriented & fixing jquery bind
	var el="jquery" in dom?dom[0]:dom;if(name=='mousewheel'){if('onwheel' in document||document.documentMode>=9){self._bind(el,"wheel",fn,bubble||false);}else {var wname=typeof document.onmousewheel!="undefined"?"mousewheel":"DOMMouseScroll"; // older IE/Firefox
	_modernWheelEvent(el,wname,fn,bubble||false);if(wname=="DOMMouseScroll")_modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false); // Firefox legacy
	}}else if(el.addEventListener){if(cap.cantouch&&/mouseup|mousedown|mousemove/.test(name)){ // touch device support
	var tt=name=='mousedown'?'touchstart':name=='mouseup'?'touchend':'touchmove';self._bind(el,tt,function(e){if(e.touches){if(e.touches.length<2){var ev=e.touches.length?e.touches[0]:e;ev.original=e;fn.call(this,ev);}}else if(e.changedTouches){var ev=e.changedTouches[0];ev.original=e;fn.call(this,ev);} //blackberry
	},bubble||false);}self._bind(el,name,fn,bubble||false);if(cap.cantouch&&name=="mouseup")self._bind(el,"touchcancel",fn,bubble||false);}else {self._bind(el,name,function(e){e=e||window.event||false;if(e){if(e.srcElement)e.target=e.srcElement;}if(!("pageY" in e)){e.pageX=e.clientX+document.documentElement.scrollLeft;e.pageY=e.clientY+document.documentElement.scrollTop;}return fn.call(el,e)===false||bubble===false?self.cancelEvent(e):true;});}};this._unbind=function(el,name,fn,bub){ // primitive unbind
	if(el.removeEventListener){el.removeEventListener(name,fn,bub);}else if(el.detachEvent){el.detachEvent('on'+name,fn);}else {el['on'+name]=false;}};this.unbindAll=function(){for(var a=0;a<self.events.length;a++){var r=self.events[a];r.q?r.e.unbind(r.n,r.f):self._unbind(r.e,r.n,r.f,r.b);}}; // Thanks to http://www.switchonthecode.com !!
	this.cancelEvent=function(e){var e=e.original?e.original:e?e:window.event||false;if(!e)return false;if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation();if(e.preventManipulation)e.preventManipulation(); //IE10
	e.cancelBubble=true;e.cancel=true;e.returnValue=false;return false;};this.stopPropagation=function(e){var e=e.original?e.original:e?e:window.event||false;if(!e)return false;if(e.stopPropagation)return e.stopPropagation();if(e.cancelBubble)e.cancelBubble=true;return false;};this.showRail=function(){if(self.page.maxh!=0&&(self.ispage||self.win.css('display')!='none')){self.visibility=true;self.rail.visibility=true;self.rail.css('display','block');}return self;};this.showRailHr=function(){if(!self.railh)return self;if(self.page.maxw!=0&&(self.ispage||self.win.css('display')!='none')){self.railh.visibility=true;self.railh.css('display','block');}return self;};this.hideRail=function(){self.visibility=false;self.rail.visibility=false;self.rail.css('display','none');return self;};this.hideRailHr=function(){if(!self.railh)return self;self.railh.visibility=false;self.railh.css('display','none');return self;};this.show=function(){self.hidden=false;self.locked=false;return self.showRail().showRailHr();};this.hide=function(){self.hidden=true;self.locked=true;return self.hideRail().hideRailHr();};this.toggle=function(){return self.hidden?self.show():self.hide();};this.remove=function(){self.stop();if(self.cursortimeout)clearTimeout(self.cursortimeout);self.doZoomOut();self.unbindAll();if(cap.isie9)self.win[0].detachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
	if(self.observer!==false)self.observer.disconnect();if(self.observerremover!==false)self.observerremover.disconnect();self.events=null;if(self.cursor){self.cursor.remove();}if(self.cursorh){self.cursorh.remove();}if(self.rail){self.rail.remove();}if(self.railh){self.railh.remove();}if(self.zoom){self.zoom.remove();}for(var a=0;a<self.saved.css.length;a++){var d=self.saved.css[a];d[0].css(d[1],typeof d[2]=="undefined"?'':d[2]);}self.saved=false;self.me.data('__nicescroll',''); //erase all traces
	// memory leak fixed by GianlucaGuarini - thanks a lot!
	// remove the current nicescroll from the $.nicescroll array & normalize array
	var lst=$.nicescroll;lst.each(function(i){if(!this)return;if(this.id===self.id){delete lst[i];for(var b=++i;b<lst.length;b++,i++){lst[i]=lst[b];}lst.length--;if(lst.length)delete lst[lst.length];}});for(var i in self){self[i]=null;delete self[i];}self=null;};this.scrollstart=function(fn){this.onscrollstart=fn;return self;};this.scrollend=function(fn){this.onscrollend=fn;return self;};this.scrollcancel=function(fn){this.onscrollcancel=fn;return self;};this.zoomin=function(fn){this.onzoomin=fn;return self;};this.zoomout=function(fn){this.onzoomout=fn;return self;};this.isScrollable=function(e){var dom=e.target?e.target:e;if(dom.nodeName=='OPTION')return true;while(dom&&dom.nodeType==1&&!/^BODY|HTML/.test(dom.nodeName)){var dd=$(dom);var ov=dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';if(/scroll|auto/.test(ov))return dom.clientHeight!=dom.scrollHeight;dom=dom.parentNode?dom.parentNode:false;}return false;};this.getViewport=function(me){var dom=me&&me.parentNode?me.parentNode:false;while(dom&&dom.nodeType==1&&!/^BODY|HTML/.test(dom.nodeName)){var dd=$(dom);if(/fixed|absolute/.test(dd.css("position")))return dd;var ov=dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';if(/scroll|auto/.test(ov)&&dom.clientHeight!=dom.scrollHeight)return dd;if(dd.getNiceScroll().length>0)return dd;dom=dom.parentNode?dom.parentNode:false;}return dom?$(dom):false;};this.triggerScrollEnd=function(){if(!self.onscrollend)return;var px=self.getScrollLeft();var py=self.getScrollTop();var info={"type":"scrollend","current":{"x":px,"y":py},"end":{"x":px,"y":py}};self.onscrollend.call(self,info);};function execScrollWheel(e,hr,chkscroll){var px,py;var rt=1;if(e.deltaMode==0){ // PIXEL
	px=-Math.floor(e.deltaX*(self.opt.mousescrollstep/(18*3)));py=-Math.floor(e.deltaY*(self.opt.mousescrollstep/(18*3)));}else if(e.deltaMode==1){ // LINE
	px=-Math.floor(e.deltaX*self.opt.mousescrollstep);py=-Math.floor(e.deltaY*self.opt.mousescrollstep);}if(hr&&self.opt.oneaxismousemode&&px==0&&py){ // classic vertical-only mousewheel + browser with x/y support
	px=py;py=0;}if(px){if(self.scrollmom){self.scrollmom.stop();}self.lastdeltax+=px;self.debounced("mousewheelx",function(){var dt=self.lastdeltax;self.lastdeltax=0;if(!self.rail.drag){self.doScrollLeftBy(dt);}},15);}if(py){if(self.opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive){if(py<0){if(self.getScrollTop()>=self.page.maxh)return true;}else {if(self.getScrollTop()<=0)return true;}}if(self.scrollmom){self.scrollmom.stop();}self.lastdeltay+=py;self.debounced("mousewheely",function(){var dt=self.lastdeltay;self.lastdeltay=0;if(!self.rail.drag){self.doScrollBy(dt);}},15);}e.stopImmediatePropagation();return e.preventDefault(); //      return self.cancelEvent(e);
	};this.onmousewheel=function(e){if(self.wheelprevented)return;if(self.locked){self.debounced("checkunlock",self.resize,250);return true;}if(self.rail.drag)return self.cancelEvent(e);if(self.opt.oneaxismousemode=="auto"&&e.deltaX!=0)self.opt.oneaxismousemode=false; // check two-axis mouse support (not very elegant)
	if(self.opt.oneaxismousemode&&e.deltaX==0){if(!self.rail.scrollable){if(self.railh&&self.railh.scrollable){return self.onmousewheelhr(e);}else {return true;}}}var nw=+new Date();var chk=false;if(self.opt.preservenativescrolling&&self.checkarea+600<nw){ //        self.checkarea = false;
	self.nativescrollingarea=self.isScrollable(e);chk=true;}self.checkarea=nw;if(self.nativescrollingarea)return true; // this isn't my business
	//      if (self.locked) return self.cancelEvent(e);
	var ret=execScrollWheel(e,false,chk);if(ret)self.checkarea=0;return ret;};this.onmousewheelhr=function(e){if(self.wheelprevented)return;if(self.locked||!self.railh.scrollable)return true;if(self.rail.drag)return self.cancelEvent(e);var nw=+new Date();var chk=false;if(self.opt.preservenativescrolling&&self.checkarea+600<nw){ //        self.checkarea = false;
	self.nativescrollingarea=self.isScrollable(e);chk=true;}self.checkarea=nw;if(self.nativescrollingarea)return true; // this isn't my business
	if(self.locked)return self.cancelEvent(e);return execScrollWheel(e,true,chk);};this.stop=function(){self.cancelScroll();if(self.scrollmon)self.scrollmon.stop();self.cursorfreezed=false;self.scroll.y=Math.round(self.getScrollTop()*(1/self.scrollratio.y));self.noticeCursor();return self;};this.getTransitionSpeed=function(dif){var sp=Math.round(self.opt.scrollspeed*10);var ex=Math.min(sp,Math.round(dif/20*self.opt.scrollspeed));return ex>20?ex:0;};if(!self.opt.smoothscroll){this.doScrollLeft=function(x,spd){ //direct
	var y=self.getScrollTop();self.doScrollPos(x,y,spd);};this.doScrollTop=function(y,spd){ //direct
	var x=self.getScrollLeft();self.doScrollPos(x,y,spd);};this.doScrollPos=function(x,y,spd){ //direct
	var nx=x>self.page.maxw?self.page.maxw:x;if(nx<0)nx=0;var ny=y>self.page.maxh?self.page.maxh:y;if(ny<0)ny=0;self.synched('scroll',function(){self.setScrollTop(ny);self.setScrollLeft(nx);});};this.cancelScroll=function(){}; // direct
	}else if(self.ishwscroll&&cap.hastransition&&self.opt.usetransition){this.prepareTransition=function(dif,istime){var ex=istime?dif>20?dif:0:self.getTransitionSpeed(dif);var trans=ex?cap.prefixstyle+'transform '+ex+'ms ease-out':'';if(!self.lasttransitionstyle||self.lasttransitionstyle!=trans){self.lasttransitionstyle=trans;self.doc.css(cap.transitionstyle,trans);}return ex;};this.doScrollLeft=function(x,spd){ //trans
	var y=self.scrollrunning?self.newscrolly:self.getScrollTop();self.doScrollPos(x,y,spd);};this.doScrollTop=function(y,spd){ //trans
	var x=self.scrollrunning?self.newscrollx:self.getScrollLeft();self.doScrollPos(x,y,spd);};this.doScrollPos=function(x,y,spd){ //trans
	var py=self.getScrollTop();var px=self.getScrollLeft();if((self.newscrolly-py)*(y-py)<0||(self.newscrollx-px)*(x-px)<0)self.cancelScroll(); //inverted movement detection
	if(self.opt.bouncescroll==false){if(y<0)y=0;else if(y>self.page.maxh)y=self.page.maxh;if(x<0)x=0;else if(x>self.page.maxw)x=self.page.maxw;}if(self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly)return false;self.newscrolly=y;self.newscrollx=x;self.newscrollspeed=spd||false;if(self.timer)return false;self.timer=setTimeout(function(){var top=self.getScrollTop();var lft=self.getScrollLeft();var dst={};dst.x=x-lft;dst.y=y-top;dst.px=lft;dst.py=top;var dd=Math.round(Math.sqrt(Math.pow(dst.x,2)+Math.pow(dst.y,2))); //          var df = (self.newscrollspeed) ? self.newscrollspeed : dd;
	var ms=self.newscrollspeed&&self.newscrollspeed>1?self.newscrollspeed:self.getTransitionSpeed(dd);if(self.newscrollspeed&&self.newscrollspeed<=1)ms*=self.newscrollspeed;self.prepareTransition(ms,true);if(self.timerscroll&&self.timerscroll.tm)clearInterval(self.timerscroll.tm);if(ms>0){if(!self.scrollrunning&&self.onscrollstart){var info={"type":"scrollstart","current":{"x":lft,"y":top},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};self.onscrollstart.call(self,info);}if(cap.transitionend){if(!self.scrollendtrapped){self.scrollendtrapped=true;self.bind(self.doc,cap.transitionend,self.onScrollTransitionEnd,false); //I have got to do something usefull!!
	}}else {if(self.scrollendtrapped)clearTimeout(self.scrollendtrapped);self.scrollendtrapped=setTimeout(self.onScrollTransitionEnd,ms); // simulate transitionend event
	}var py=top;var px=lft;self.timerscroll={bz:new BezierClass(py,self.newscrolly,ms,0,0,0.58,1),bh:new BezierClass(px,self.newscrollx,ms,0,0,0.58,1)};if(!self.cursorfreezed)self.timerscroll.tm=setInterval(function(){self.showCursor(self.getScrollTop(),self.getScrollLeft());},60);}self.synched("doScroll-set",function(){self.timer=0;if(self.scrollendtrapped)self.scrollrunning=true;self.setScrollTop(self.newscrolly);self.setScrollLeft(self.newscrollx);if(!self.scrollendtrapped)self.onScrollTransitionEnd();});},50);};this.cancelScroll=function(){if(!self.scrollendtrapped)return true;var py=self.getScrollTop();var px=self.getScrollLeft();self.scrollrunning=false;if(!cap.transitionend)clearTimeout(cap.transitionend);self.scrollendtrapped=false;self._unbind(self.doc,cap.transitionend,self.onScrollTransitionEnd);self.prepareTransition(0);self.setScrollTop(py); // fire event onscroll
	if(self.railh)self.setScrollLeft(px);if(self.timerscroll&&self.timerscroll.tm)clearInterval(self.timerscroll.tm);self.timerscroll=false;self.cursorfreezed=false; //self.noticeCursor(false,py,px);
	self.showCursor(py,px);return self;};this.onScrollTransitionEnd=function(){if(self.scrollendtrapped)self._unbind(self.doc,cap.transitionend,self.onScrollTransitionEnd);self.scrollendtrapped=false;self.prepareTransition(0);if(self.timerscroll&&self.timerscroll.tm)clearInterval(self.timerscroll.tm);self.timerscroll=false;var py=self.getScrollTop();var px=self.getScrollLeft();self.setScrollTop(py); // fire event onscroll
	if(self.railh)self.setScrollLeft(px); // fire event onscroll left
	self.noticeCursor(false,py,px);self.cursorfreezed=false;if(py<0)py=0;else if(py>self.page.maxh)py=self.page.maxh;if(px<0)px=0;else if(px>self.page.maxw)px=self.page.maxw;if(py!=self.newscrolly||px!=self.newscrollx)return self.doScrollPos(px,py,self.opt.snapbackspeed);if(self.onscrollend&&self.scrollrunning){ //          var info = {"type":"scrollend","current":{"x":px,"y":py},"end":{"x":self.newscrollx,"y":self.newscrolly}};
	//          self.onscrollend.call(self,info);
	self.triggerScrollEnd();}self.scrollrunning=false;};}else {this.doScrollLeft=function(x,spd){ //no-trans
	var y=self.scrollrunning?self.newscrolly:self.getScrollTop();self.doScrollPos(x,y,spd);};this.doScrollTop=function(y,spd){ //no-trans
	var x=self.scrollrunning?self.newscrollx:self.getScrollLeft();self.doScrollPos(x,y,spd);};this.doScrollPos=function(x,y,spd){ //no-trans
	var y=typeof y=="undefined"||y===false?self.getScrollTop(true):y;if(self.timer&&self.newscrolly==y&&self.newscrollx==x)return true;if(self.timer)clearAnimationFrame(self.timer);self.timer=0;var py=self.getScrollTop();var px=self.getScrollLeft();if((self.newscrolly-py)*(y-py)<0||(self.newscrollx-px)*(x-px)<0)self.cancelScroll(); //inverted movement detection
	self.newscrolly=y;self.newscrollx=x;if(!self.bouncescroll||!self.rail.visibility){if(self.newscrolly<0){self.newscrolly=0;}else if(self.newscrolly>self.page.maxh){self.newscrolly=self.page.maxh;}}if(!self.bouncescroll||!self.railh.visibility){if(self.newscrollx<0){self.newscrollx=0;}else if(self.newscrollx>self.page.maxw){self.newscrollx=self.page.maxw;}}self.dst={};self.dst.x=x-px;self.dst.y=y-py;self.dst.px=px;self.dst.py=py;var dst=Math.round(Math.sqrt(Math.pow(self.dst.x,2)+Math.pow(self.dst.y,2)));self.dst.ax=self.dst.x/dst;self.dst.ay=self.dst.y/dst;var pa=0;var pe=dst;if(self.dst.x==0){pa=py;pe=y;self.dst.ay=1;self.dst.py=0;}else if(self.dst.y==0){pa=px;pe=x;self.dst.ax=1;self.dst.px=0;}var ms=self.getTransitionSpeed(dst);if(spd&&spd<=1)ms*=spd;if(ms>0){self.bzscroll=self.bzscroll?self.bzscroll.update(pe,ms):new BezierClass(pa,pe,ms,0,1,0,1);}else {self.bzscroll=false;}if(self.timer)return;if(py==self.page.maxh&&y>=self.page.maxh||px==self.page.maxw&&x>=self.page.maxw)self.checkContentSize();var sync=1;function scrolling(){if(self.cancelAnimationFrame)return true;self.scrollrunning=true;sync=1-sync;if(sync)return self.timer=setAnimationFrame(scrolling)||1;var done=0;var sc=sy=self.getScrollTop();if(self.dst.ay){sc=self.bzscroll?self.dst.py+self.bzscroll.getNow()*self.dst.ay:self.newscrolly;var dr=sc-sy;if(dr<0&&sc<self.newscrolly||dr>0&&sc>self.newscrolly)sc=self.newscrolly;self.setScrollTop(sc);if(sc==self.newscrolly)done=1;}else {done=1;}var scx=sx=self.getScrollLeft();if(self.dst.ax){scx=self.bzscroll?self.dst.px+self.bzscroll.getNow()*self.dst.ax:self.newscrollx;var dr=scx-sx;if(dr<0&&scx<self.newscrollx||dr>0&&scx>self.newscrollx)scx=self.newscrollx;self.setScrollLeft(scx);if(scx==self.newscrollx)done+=1;}else {done+=1;}if(done==2){self.timer=0;self.cursorfreezed=false;self.bzscroll=false;self.scrollrunning=false;if(sc<0)sc=0;else if(sc>self.page.maxh)sc=self.page.maxh;if(scx<0)scx=0;else if(scx>self.page.maxw)scx=self.page.maxw;if(scx!=self.newscrollx||sc!=self.newscrolly)self.doScrollPos(scx,sc);else {if(self.onscrollend){ /*
	                                                var info = {"type":"scrollend","current":{"x":sx,"y":sy},"end":{"x":self.newscrollx,"y":self.newscrolly}};
	                                                self.onscrollend.call(self,info);
	                                */self.triggerScrollEnd();}}}else {self.timer=setAnimationFrame(scrolling)||1;}};self.cancelAnimationFrame=false;self.timer=1;if(self.onscrollstart&&!self.scrollrunning){var info={"type":"scrollstart","current":{"x":px,"y":py},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};self.onscrollstart.call(self,info);}scrolling();if(py==self.page.maxh&&y>=py||px==self.page.maxw&&x>=px)self.checkContentSize();self.noticeCursor();};this.cancelScroll=function(){if(self.timer)clearAnimationFrame(self.timer);self.timer=0;self.bzscroll=false;self.scrollrunning=false;return self;};}this.doScrollBy=function(stp,relative){var ny=0;if(relative){ny=Math.floor((self.scroll.y-stp)*self.scrollratio.y);}else {var sy=self.timer?self.newscrolly:self.getScrollTop(true);ny=sy-stp;}if(self.bouncescroll){var haf=Math.round(self.view.h/2);if(ny<-haf)ny=-haf;else if(ny>self.page.maxh+haf)ny=self.page.maxh+haf;}self.cursorfreezed=false;py=self.getScrollTop(true);if(ny<0&&py<=0)return self.noticeCursor();else if(ny>self.page.maxh&&py>=self.page.maxh){self.checkContentSize();return self.noticeCursor();}self.doScrollTop(ny);};this.doScrollLeftBy=function(stp,relative){var nx=0;if(relative){nx=Math.floor((self.scroll.x-stp)*self.scrollratio.x);}else {var sx=self.timer?self.newscrollx:self.getScrollLeft(true);nx=sx-stp;}if(self.bouncescroll){var haf=Math.round(self.view.w/2);if(nx<-haf)nx=-haf;else if(nx>self.page.maxw+haf)nx=self.page.maxw+haf;}self.cursorfreezed=false;px=self.getScrollLeft(true);if(nx<0&&px<=0)return self.noticeCursor();else if(nx>self.page.maxw&&px>=self.page.maxw)return self.noticeCursor();self.doScrollLeft(nx);};this.doScrollTo=function(pos,relative){var ny=relative?Math.round(pos*self.scrollratio.y):pos;if(ny<0)ny=0;else if(ny>self.page.maxh)ny=self.page.maxh;self.cursorfreezed=false;self.doScrollTop(pos);};this.checkContentSize=function(){var pg=self.getContentSize();if(pg.h!=self.page.h||pg.w!=self.page.w)self.resize(false,pg);};self.onscroll=function(e){if(self.rail.drag)return;if(!self.cursorfreezed){self.synched('scroll',function(){self.scroll.y=Math.round(self.getScrollTop()*(1/self.scrollratio.y));if(self.railh)self.scroll.x=Math.round(self.getScrollLeft()*(1/self.scrollratio.x));self.noticeCursor();});}};self.bind(self.docscroll,"scroll",self.onscroll);this.doZoomIn=function(e){if(self.zoomactive)return;self.zoomactive=true;self.zoomrestore={style:{}};var lst=['position','top','left','zIndex','backgroundColor','marginTop','marginBottom','marginLeft','marginRight'];var win=self.win[0].style;for(var a in lst){var pp=lst[a];self.zoomrestore.style[pp]=typeof win[pp]!="undefined"?win[pp]:'';}self.zoomrestore.style.width=self.win.css('width');self.zoomrestore.style.height=self.win.css('height');self.zoomrestore.padding={w:self.win.outerWidth()-self.win.width(),h:self.win.outerHeight()-self.win.height()};if(cap.isios4){self.zoomrestore.scrollTop=$(window).scrollTop();$(window).scrollTop(0);}self.win.css({"position":cap.isios4?"absolute":"fixed","top":0,"left":0,"z-index":globalmaxzindex+100,"margin":"0px"});var bkg=self.win.css("backgroundColor");if(bkg==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg))self.win.css("backgroundColor","#fff");self.rail.css({"z-index":globalmaxzindex+101});self.zoom.css({"z-index":globalmaxzindex+102});self.zoom.css('backgroundPosition','0px -18px');self.resizeZoom();if(self.onzoomin)self.onzoomin.call(self);return self.cancelEvent(e);};this.doZoomOut=function(e){if(!self.zoomactive)return;self.zoomactive=false;self.win.css("margin","");self.win.css(self.zoomrestore.style);if(cap.isios4){$(window).scrollTop(self.zoomrestore.scrollTop);}self.rail.css({"z-index":self.zindex});self.zoom.css({"z-index":self.zindex});self.zoomrestore=false;self.zoom.css('backgroundPosition','0px 0px');self.onResize();if(self.onzoomout)self.onzoomout.call(self);return self.cancelEvent(e);};this.doZoom=function(e){return self.zoomactive?self.doZoomOut(e):self.doZoomIn(e);};this.resizeZoom=function(){if(!self.zoomactive)return;var py=self.getScrollTop(); //preserve scrolling position
	self.win.css({width:$(window).width()-self.zoomrestore.padding.w+"px",height:$(window).height()-self.zoomrestore.padding.h+"px"});self.onResize();self.setScrollTop(Math.min(self.page.maxh,py));};this.init();$.nicescroll.push(this);}; // Inspired by the work of Kin Blas
	// http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js
	var ScrollMomentumClass2D=function ScrollMomentumClass2D(nc){var self=this;this.nc=nc;this.lastx=0;this.lasty=0;this.speedx=0;this.speedy=0;this.lasttime=0;this.steptime=0;this.snapx=false;this.snapy=false;this.demulx=0;this.demuly=0;this.lastscrollx=-1;this.lastscrolly=-1;this.chkx=0;this.chky=0;this.timer=0;this.time=function(){return +new Date(); //beautifull hack
	};this.reset=function(px,py){self.stop();var now=self.time();self.steptime=0;self.lasttime=now;self.speedx=0;self.speedy=0;self.lastx=px;self.lasty=py;self.lastscrollx=-1;self.lastscrolly=-1;};this.update=function(px,py){var now=self.time();self.steptime=now-self.lasttime;self.lasttime=now;var dy=py-self.lasty;var dx=px-self.lastx;var sy=self.nc.getScrollTop();var sx=self.nc.getScrollLeft();var newy=sy+dy;var newx=sx+dx;self.snapx=newx<0||newx>self.nc.page.maxw;self.snapy=newy<0||newy>self.nc.page.maxh;self.speedx=dx;self.speedy=dy;self.lastx=px;self.lasty=py;};this.stop=function(){self.nc.unsynched("domomentum2d");if(self.timer)clearTimeout(self.timer);self.timer=0;self.lastscrollx=-1;self.lastscrolly=-1;};this.doSnapy=function(nx,ny){var snap=false;if(ny<0){ny=0;snap=true;}else if(ny>self.nc.page.maxh){ny=self.nc.page.maxh;snap=true;}if(nx<0){nx=0;snap=true;}else if(nx>self.nc.page.maxw){nx=self.nc.page.maxw;snap=true;}snap?self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed):self.nc.triggerScrollEnd();};this.doMomentum=function(gp){var t=self.time();var l=gp?t+gp:self.lasttime;var sl=self.nc.getScrollLeft();var st=self.nc.getScrollTop();var pageh=self.nc.page.maxh;var pagew=self.nc.page.maxw;self.speedx=pagew>0?Math.min(60,self.speedx):0;self.speedy=pageh>0?Math.min(60,self.speedy):0;var chk=l&&t-l<=60;if(st<0||st>pageh||sl<0||sl>pagew)chk=false;var sy=self.speedy&&chk?self.speedy:false;var sx=self.speedx&&chk?self.speedx:false;if(sy||sx){var tm=Math.max(16,self.steptime); //timeout granularity
	if(tm>50){ // do smooth
	var xm=tm/50;self.speedx*=xm;self.speedy*=xm;tm=50;}self.demulxy=0;self.lastscrollx=self.nc.getScrollLeft();self.chkx=self.lastscrollx;self.lastscrolly=self.nc.getScrollTop();self.chky=self.lastscrolly;var nx=self.lastscrollx;var ny=self.lastscrolly;var onscroll=function onscroll(){var df=self.time()-t>600?0.04:0.02;if(self.speedx){nx=Math.floor(self.lastscrollx-self.speedx*(1-self.demulxy));self.lastscrollx=nx;if(nx<0||nx>pagew)df=0.10;}if(self.speedy){ny=Math.floor(self.lastscrolly-self.speedy*(1-self.demulxy));self.lastscrolly=ny;if(ny<0||ny>pageh)df=0.10;}self.demulxy=Math.min(1,self.demulxy+df);self.nc.synched("domomentum2d",function(){if(self.speedx){var scx=self.nc.getScrollLeft();if(scx!=self.chkx)self.stop();self.chkx=nx;self.nc.setScrollLeft(nx);}if(self.speedy){var scy=self.nc.getScrollTop();if(scy!=self.chky)self.stop();self.chky=ny;self.nc.setScrollTop(ny);}if(!self.timer){self.nc.hideCursor();self.doSnapy(nx,ny);}});if(self.demulxy<1){self.timer=setTimeout(onscroll,tm);}else {self.stop();self.nc.hideCursor();self.doSnapy(nx,ny);}};onscroll();}else {self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop());}};}; // override jQuery scrollTop
	var _scrollTop=jQuery.fn.scrollTop; // preserve original function
	jQuery.cssHooks["pageYOffset"]={get:function get(elem,computed,extra){var nice=$.data(elem,'__nicescroll')||false;return nice&&nice.ishwscroll?nice.getScrollTop():_scrollTop.call(elem);},set:function set(elem,value){var nice=$.data(elem,'__nicescroll')||false;nice&&nice.ishwscroll?nice.setScrollTop(parseInt(value)):_scrollTop.call(elem,value);return this;}}; /*
	      $.fx.step["scrollTop"] = function(fx){
	        $.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
	      };
	    */jQuery.fn.scrollTop=function(value){if(typeof value=="undefined"){var nice=this[0]?$.data(this[0],'__nicescroll')||false:false;return nice&&nice.ishwscroll?nice.getScrollTop():_scrollTop.call(this);}else {return this.each(function(){var nice=$.data(this,'__nicescroll')||false;nice&&nice.ishwscroll?nice.setScrollTop(parseInt(value)):_scrollTop.call($(this),value);});}}; // override jQuery scrollLeft
	var _scrollLeft=jQuery.fn.scrollLeft; // preserve original function
	$.cssHooks.pageXOffset={get:function get(elem,computed,extra){var nice=$.data(elem,'__nicescroll')||false;return nice&&nice.ishwscroll?nice.getScrollLeft():_scrollLeft.call(elem);},set:function set(elem,value){var nice=$.data(elem,'__nicescroll')||false;nice&&nice.ishwscroll?nice.setScrollLeft(parseInt(value)):_scrollLeft.call(elem,value);return this;}}; /*
	      $.fx.step["scrollLeft"] = function(fx){
	        $.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
	      };
	    */jQuery.fn.scrollLeft=function(value){if(typeof value=="undefined"){var nice=this[0]?$.data(this[0],'__nicescroll')||false:false;return nice&&nice.ishwscroll?nice.getScrollLeft():_scrollLeft.call(this);}else {return this.each(function(){var nice=$.data(this,'__nicescroll')||false;nice&&nice.ishwscroll?nice.setScrollLeft(parseInt(value)):_scrollLeft.call($(this),value);});}};var NiceScrollArray=function NiceScrollArray(doms){var self=this;this.length=0;this.name="nicescrollarray";this.each=function(fn){for(var a=0,i=0;a<self.length;a++){fn.call(self[a],i++);}return self;};this.push=function(nice){self[self.length]=nice;self.length++;};this.eq=function(idx){return self[idx];};if(doms){for(var a=0;a<doms.length;a++){var nice=$.data(doms[a],'__nicescroll')||false;if(nice){this[this.length]=nice;this.length++;}};}return this;};function mplex(el,lst,fn){for(var a=0;a<lst.length;a++){fn(el,lst[a]);}};mplex(NiceScrollArray.prototype,['show','hide','toggle','onResize','resize','remove','stop','doScrollPos'],function(e,n){e[n]=function(){var args=arguments;return this.each(function(){this[n].apply(this,args);});};});jQuery.fn.getNiceScroll=function(index){if(typeof index=="undefined"){return new NiceScrollArray(this);}else {var nice=this[index]&&$.data(this[index],'__nicescroll')||false;return nice;}};jQuery.extend(jQuery.expr[':'],{nicescroll:function nicescroll(a){return $.data(a,'__nicescroll')?true:false;}});$.fn.niceScroll=function(wrapper,opt){if(typeof opt=="undefined"){if((typeof wrapper==='undefined'?'undefined':_typeof(wrapper))=="object"&&!("jquery" in wrapper)){opt=wrapper;wrapper=false;}}var ret=new NiceScrollArray();if(typeof opt=="undefined")opt={};if(wrapper||false){opt.doc=$(wrapper);opt.win=$(this);}var docundef=!("doc" in opt);if(!docundef&&!("win" in opt))opt.win=$(this);this.each(function(){var nice=$(this).data('__nicescroll')||false;if(!nice){opt.doc=docundef?$(this):opt.doc;nice=new NiceScrollClass(opt,$(this));$(this).data('__nicescroll',nice);}ret.push(nice);});return ret.length==1?ret[0]:ret;};window.NiceScroll={getjQuery:function getjQuery(){return jQuery;}};if(!$.nicescroll){$.nicescroll=new NiceScrollArray();$.nicescroll.options=_globaloptions;}});

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var client = __webpack_require__(483);

	var Event = {
		touchtype: function touchtype(type) {
			switch (type) {
				case 'start':
					return client.ifmobile ? "touchstart" : "mousedown";
					break;
				case 'move':
					return client.ifmobile ? "touchmove" : "mousemove";
					break;
				case 'end':
					return client.ifmobile ? "touchend" : "mouseup";
					break;
				default:
					return type;
					break;
			}
		},
		addListener: function addListener(element, type, handler) {
			var _this = this;

			try {
				if (element) {
					var handlers;

					(function () {

						//为IE的事件对象添加一些“缺失的”函数

						var fixEvent = function fixEvent(event) {
							event.preventDefault = function () {
								this.returnValue = false;
							};
							event.stopPropagation = function () {
								this.cancelBubble = true;
							};
							return event;
						};

						_this.guid = 1;
						type = _this.touchtype(type);
						//为每一个事件处理函数分派一个唯一的ID
						if (!handler.$$guid) handler.$$guid = _this.guid++;
						//为元素的事件类型创建一个哈希表
						if (!element.events) element.events = {};
						//为每一个"元素/事件"对创建一个事件处理程序的哈希表
						handlers = element.events[type];

						if (!handlers) {
							handlers = element.events[type] = {};
							//存储存在的事件处理函数(如果有)
							if (element["on" + type]) {
								handlers[0] = element["on" + type];
							}
						}
						//将事件处理函数存入哈希表
						handlers[handler.$$guid] = handler;
						//指派一个全局的事件处理函数来做所有的工作
						element["on" + type] = function (event) {
							var returnValue = true;
							event = event || fixEvent(window.event);
							//取得事件处理函数的哈希表的引用
							var handlers = this.events[event.type];
							//执行每一个处理函数
							for (var i in handlers) {
								this.$$handleEvent = handlers[i];
								if (this.$$handleEvent(event) === false) {
									returnValue = false;
								}
							}
							return returnValue;
						};;
					})();
				}
			} catch (e) {
				console.log(e, element);
			}
		},

		removeListener: function removeListener(element, type, handler) {
			if (element) {
				type = this.touchtype(type);
				//从哈希表中删除事件处理函数
				if (element.events && element.events[type]) {
					delete element.events[type][handler.$$guid];
				}
			}
		},

		addEvent: function addEvent(elm, evType, fn, check) {
			if (elm) {
				var callback = fn;
				evType = this.touchtype(evType);
				if (check) {
					Event.addEvent(elm, 'start', function () {
						Event.currentTarget = elm;
					});
					callback = function callback(e) {
						if (Event.currentTarget == elm) {
							fn.call(this, e);
						}
					};
				}

				if (elm.addEventListener) {
					elm.addEventListener(evType, callback, false); //DOM2.0
					return true;
				} else if (elm.attachEvent) {
					var r = elm.attachEvent('on' + evType, callback); //IE5+
					return r;
				} else {
					elm['on' + evType] = callback; //DOM 0
				}
			}
		},

		removeEvent: function removeEvent(elm, evType, fn) {
			if (elm) {
				evType = this.touchtype(evType);
				if (elm.removeEventListener) {
					elm.removeEventListener(evType, fn); //DOM2.0
					return true;
				} else if (elm.detachEvent) {
					var r = elm.detachEvent('on' + evType, fn); //IE5+
					return r;
				} else {
					elm['on' + evType] = null; //DOM 0
				}
			}
		},

		stopDefault: function stopDefault(e) {
			if (e && e.preventDefault) e.preventDefault();else window.event.returnValue = false;
			return false;
		},

		orientationChange: function orientationChange() {
			switch (window.orientation) {
				case 0:
					utils.closeblock('landscape', 1);
					break;
				case -90:
					utils.openblock('landscape', 1);
					break;
				case 90:
					utils.openblock('landscape', 1);
					break;
				case 180:
					utils.closeblock('landscape', 1);
					break;

			}
		},

		currentTarget: null
	};
	module.exports = Event;

/***/ },
/* 483 */
/***/ function(module, exports) {

	var browser = {
		ua: navigator.userAgent,
		init: function init() {
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
			this.BS = this.searchBrowser(this.dataBS);
			if (this.OS == 'iPhone' || this.OS == 'iPad' || this.OS == 'Android' || this.OS == 'Winphone') {
				this.mobile = true;
			} else {
				this.mobile = false;
			}
		},
		searchString: function searchString(data) {
			for (var i = 0; i < data.length; i++) {
				var dataString = this.ua;
				if (dataString) {
					if (dataString.indexOf(data[i].forSearch) != -1) return data[i].forShow;
				}
			}
		},
		searchBrowser: function searchBrowser(data) {
			var result = '';
			for (var i = 0; i < data.length; i++) {
				var dataString = this.ua;
				if (dataString) {
					if (dataString.indexOf(data[i].forSearch) != -1) {
						result += data[i].forShow + '|';
					}
				}
			}
			return result;
		},
		dataOS: [{
			forSearch: "iPhone",
			forShow: "iPhone"
		}, {
			forSearch: "iPad",
			forShow: "iPad"
		}, {
			forSearch: "Android",
			forShow: "Android"
		}, {
			forSearch: "Windows Phone",
			forShow: "Winphone"
		}],
		dataBS: [{
			forSearch: "360browser",
			forShow: "360"
		}, {
			forSearch: "Maxthon",
			forShow: "Maxthon"
		}, {
			forSearch: "UCBrowser",
			forShow: "uc"
		}, {
			forSearch: "Oupeng",
			forShow: "opera"
		}, {
			forSearch: "Opera",
			forShow: "opera"
		}, {
			forSearch: "Sogou",
			forShow: "sogou"
		}, {
			forSearch: "baidu",
			forShow: "baidu"
		}, {
			forSearch: "Safari",
			forShow: "safari"
		}, {
			forSearch: "MicroMessenger",
			forShow: "weixin"
		}, {
			forSearch: "QQ/",
			forShow: "qq"
		}, {
			forSearch: "Weibo",
			forShow: "weibo"
		}, {
			forSearch: "MQBrowser",
			forShow: "360"
		}, {
			forSearch: "MQQBrowser",
			forShow: "qqbrowser"
		}, {
			forSearch: "CriOS",
			forShow: "Maxthon"
		}]

	};

	browser.init();

	module.exports = { browser: browser.BS, os: browser.OS, ifmobile: browser.mobile };

/***/ },
/* 484 */
/***/ function(module, exports) {

	/* eslint no-unused-expressions: 0 */
	var reUnit = /width|height|top|left|right|bottom|margin|padding/i;
	var _amId = 1;
	var _amDisplay = {};

	var requestAnimationFrame = void 0;
	if (typeof window !== 'undefined') {
	    requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	} else {
	    requestAnimationFrame = function requestAnimationFrame() {
	        throw new Error('requestAnimationFrame is not supported, maybe you are running in the server side');
	    };
	}

	function getAmId(obj) {
	    return obj._amId || (obj._amId = _amId++);
	}

	function setAmDisplay(elem, display) {
	    var id = getAmId(elem);
	    _amDisplay['_am_' + id] = display;
	}

	function getAmDisplay(elem) {
	    var id = getAmId(elem);
	    return _amDisplay['_am_' + id];
	}

	module.exports = {
	    // el can be an Element, NodeList or selector

	    addClass: function addClass(el, className) {
	        var _this = this;

	        if (typeof el === 'string') el = document.querySelectorAll(el);
	        var els = el instanceof NodeList ? [].slice.call(el) : [el];

	        els.forEach(function (e) {
	            if (_this.hasClass(e, className)) {
	                return;
	            }

	            if (e.classList) {
	                e.classList.add(className);
	            } else {
	                e.className += ' ' + className;
	            }
	        });
	    },


	    // el can be an Element, NodeList or selector
	    removeClass: function removeClass(el, className) {
	        var _this2 = this;

	        if (typeof el === 'string') el = document.querySelectorAll(el);
	        var els = el instanceof NodeList ? [].slice.call(el) : [el];

	        els.forEach(function (e) {
	            if (_this2.hasClass(e, className)) {
	                if (e.classList) {
	                    e.classList.remove(className);
	                } else {
	                    e.className = e.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	                }
	            }
	        });
	    },


	    // el can be an Element or selector
	    hasClass: function hasClass(el, className) {
	        if (typeof el === 'string') el = document.querySelector(el);
	        if (el.classList) {
	            return el.classList.contains(className);
	        }
	        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	    },


	    // el can be an Element or selector
	    toggleClass: function toggleClass(el, className) {
	        if (typeof el === 'string') el = document.querySelector(el);
	        var flag = this.hasClass(el, className);
	        if (flag) {
	            this.removeClass(el, className);
	        } else {
	            this.addClass(el, className);
	        }
	        return flag;
	    },
	    insertAfter: function insertAfter(newEl, targetEl) {
	        var parent = targetEl.parentNode;

	        if (parent.lastChild === targetEl) {
	            parent.appendChild(newEl);
	        } else {
	            parent.insertBefore(newEl, targetEl.nextSibling);
	        }
	    },
	    insertBefore: function insertBefore(newEl, targetEl) {
	        var parent = targetEl.parentNode;
	        parent.insertBefore(newEl, targetEl);
	    },


	    // el can be an Element, NodeList or query string
	    remove: function remove(el) {
	        if (typeof el === 'string') {
	            [].forEach.call(document.querySelectorAll(el), function (node) {
	                node.parentNode.removeChild(node);
	            });
	        } else if (el.parentNode) {
	            // it's an Element
	            el.parentNode.removeChild(el);
	        } else if (el instanceof NodeList) {
	            // it's an array of elements
	            [].forEach.call(el, function (node) {
	                node.parentNode.removeChild(node);
	            });
	        } else {
	            throw new Error('you can only pass Element, array of Elements or query string as argument');
	        }
	    },
	    forceReflow: function forceReflow(el) {
	        el.offsetHeight;
	    },
	    getDocumentScrollTop: function getDocumentScrollTop() {
	        // IE8 used `document.documentElement`
	        return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
	    },


	    // Set the current vertical position of the scroll bar for document
	    // Note: do not support fixed position of body
	    setDocumentScrollTop: function setDocumentScrollTop(value) {
	        window.scrollTo(0, value);
	        return value;
	    },
	    outerHeight: function outerHeight(el) {
	        return el.offsetHeight;
	    },
	    outerHeightWithMargin: function outerHeightWithMargin(el) {
	        var height = el.offsetHeight;
	        var style = getComputedStyle(el);

	        height += (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
	        return height;
	    },
	    outerWidth: function outerWidth(el) {
	        return el.offsetWidth;
	    },
	    outerWidthWithMargin: function outerWidthWithMargin(el) {
	        var width = el.offsetWidth;
	        var style = getComputedStyle(el);

	        width += (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
	        return width;
	    },
	    getComputedStyles: function getComputedStyles(el) {
	        return el.ownerDocument.defaultView.getComputedStyle(el, null);
	    },
	    getOffset: function getOffset(el) {
	        var html = el.ownerDocument.documentElement;
	        var box = {
	            top: 0,
	            left: 0
	        };

	        // If we don't have gBCR, just use 0,0 rather than error
	        // BlackBerry 5, iOS 3 (original iPhone)
	        if (typeof el.getBoundingClientRect !== 'undefined') {
	            box = el.getBoundingClientRect();
	        }

	        return {
	            top: box.top + window.pageYOffset - html.clientTop,
	            left: box.left + window.pageXOffset - html.clientLeft
	        };
	    },
	    getPosition: function getPosition(el) {
	        if (!el) {
	            return {
	                left: 0,
	                top: 0
	            };
	        }

	        return {
	            left: el.offsetLeft,
	            top: el.offsetTop
	        };
	    },
	    setStyle: function setStyle(node, att, val, style) {
	        style = style || node.style;

	        if (style) {
	            if (val === null || val === '') {
	                // normalize unsetting
	                val = '';
	            } else if (!isNaN(Number(val)) && reUnit.test(att)) {
	                // number values may need a unit
	                val += 'px';
	            }

	            if (att === '') {
	                att = 'cssText';
	                val = '';
	            }

	            style[att] = val;
	        }
	    },
	    setStyles: function setStyles(el, hash) {
	        var _this3 = this;

	        var HAS_CSSTEXT_FEATURE = typeof el.style.cssText !== 'undefined';

	        function trim(str) {
	            return str.replace(/^\s+|\s+$/g, '');
	        }
	        var originStyleText = void 0;
	        var originStyleObj = {};
	        if (!!HAS_CSSTEXT_FEATURE) {
	            originStyleText = el.style.cssText;
	        } else {
	            originStyleText = el.getAttribute('style');
	        }
	        originStyleText.split(';').forEach(function (item) {
	            if (item.indexOf(':') !== -1) {
	                var obj = item.split(':');
	                originStyleObj[trim(obj[0])] = trim(obj[1]);
	            }
	        });

	        var styleObj = {};
	        Object.keys(hash).forEach(function (item) {
	            _this3.setStyle(el, item, hash[item], styleObj);
	        });
	        var mergedStyleObj = Object.assign({}, originStyleObj, styleObj);
	        var styleText = Object.keys(mergedStyleObj).map(function (item) {
	            return item + ': ' + mergedStyleObj[item] + ';';
	        }).join(' ');

	        if (!!HAS_CSSTEXT_FEATURE) {
	            el.style.cssText = styleText;
	        } else {
	            el.setAttribute('style', styleText);
	        }
	    },
	    getStyle: function getStyle(el, att, style) {
	        style = style || el.style;

	        var val = '';

	        if (style) {
	            val = style[att];

	            if (val === '') {
	                val = this.getComputedStyle(el, att);
	            }
	        }

	        return val;
	    },


	    // NOTE: Known bug, will return 'auto' if style value is 'auto'
	    getComputedStyle: function getComputedStyle(el, att) {
	        var win = el.ownerDocument.defaultView;
	        // null means not return presudo styles
	        var computed = win.getComputedStyle(el, null);

	        return att ? computed[att] : computed;
	    },
	    getPageSize: function getPageSize() {
	        var xScroll = void 0,
	            yScroll = void 0;

	        if (window.innerHeight && window.scrollMaxY) {
	            xScroll = window.innerWidth + window.scrollMaxX;
	            yScroll = window.innerHeight + window.scrollMaxY;
	        } else {
	            if (document.body.scrollHeight > document.body.offsetHeight) {
	                // all but Explorer Mac
	                xScroll = document.body.scrollWidth;
	                yScroll = document.body.scrollHeight;
	            } else {
	                // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
	                xScroll = document.body.offsetWidth;
	                yScroll = document.body.offsetHeight;
	            }
	        }

	        var windowWidth = void 0,
	            windowHeight = void 0;

	        if (self.innerHeight) {
	            // all except Explorer
	            if (document.documentElement.clientWidth) {
	                windowWidth = document.documentElement.clientWidth;
	            } else {
	                windowWidth = self.innerWidth;
	            }
	            windowHeight = self.innerHeight;
	        } else {
	            if (document.documentElement && document.documentElement.clientHeight) {
	                // Explorer 6 Strict Mode
	                windowWidth = document.documentElement.clientWidth;
	                windowHeight = document.documentElement.clientHeight;
	            } else {
	                if (document.body) {
	                    // other Explorers
	                    windowWidth = document.body.clientWidth;
	                    windowHeight = document.body.clientHeight;
	                }
	            }
	        }

	        var pageHeight = void 0,
	            pageWidth = void 0;

	        // for small pages with total height less then height of the viewport
	        if (yScroll < windowHeight) {
	            pageHeight = windowHeight;
	        } else {
	            pageHeight = yScroll;
	        }
	        // for small pages with total width less then width of the viewport
	        if (xScroll < windowWidth) {
	            pageWidth = xScroll;
	        } else {
	            pageWidth = windowWidth;
	        }

	        return {
	            pageWidth: pageWidth,
	            pageHeight: pageHeight,
	            windowWidth: windowWidth,
	            windowHeight: windowHeight
	        };
	    },
	    get: function get(selector) {
	        return document.querySelector(selector) || {};
	    },
	    getAll: function getAll(selector) {
	        return document.querySelectorAll(selector);
	    },


	    // selector 可选。字符串值，规定在何处停止对祖先元素进行匹配的选择器表达式。
	    // filter   可选。字符串值，包含用于匹配元素的选择器表达式。
	    parentsUntil: function parentsUntil(el, selector, filter) {
	        var result = [];
	        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	        // match start from parent
	        el = el.parentElement;
	        while (el && !matchesSelector.call(el, selector)) {
	            if (!filter) {
	                result.push(el);
	            } else {
	                if (matchesSelector.call(el, filter)) {
	                    result.push(el);
	                }
	            }
	            el = el.parentElement;
	        }
	        return result;
	    },


	    // 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上
	    closest: function closest(el, selector) {
	        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

	        while (el) {
	            if (matchesSelector.call(el, selector)) {
	                return el;
	            }

	            el = el.parentElement;
	        }
	        return null;
	    },


	    // el can be an Element, NodeList or selector
	    _showHide: function _showHide(el, show) {
	        if (typeof el === 'string') el = document.querySelectorAll(el);
	        var els = el instanceof NodeList ? [].slice.call(el) : [el];
	        var display = void 0;
	        var values = [];
	        if (els.length === 0) {
	            return;
	        }
	        els.forEach(function (e, index) {
	            if (e.style) {
	                display = e.style.display;
	                if (show) {
	                    if (display === 'none') {
	                        values[index] = getAmDisplay(e) || '';
	                    }
	                } else {
	                    if (display !== 'none') {
	                        values[index] = 'none';
	                        setAmDisplay(e, display);
	                    }
	                }
	            }
	        });

	        els.forEach(function (e, index) {
	            if (values[index] !== null) {
	                els[index].style.display = values[index];
	            }
	        });
	    },
	    show: function show(elements) {
	        this._showHide(elements, true);
	    },
	    hide: function hide(elements) {
	        this._showHide(elements, false);
	    },
	    toggle: function toggle(element) {
	        if (element.style.display === 'none') {
	            this.show(element);
	        } else {
	            this.hide(element);
	        }
	    },


	    /**
	     * scroll to location with animation
	     * @param  {Number} to       to assign the scrollTop value
	     * @param  {Number} duration assign the animate duration
	     * @return {Null}            return null
	     */
	    scrollTo: function scrollTo() {
	        var _this4 = this;

	        var to = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var duration = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

	        if (duration < 0) {
	            return;
	        }
	        var diff = to - this.getDocumentScrollTop();
	        if (diff === 0) {
	            return;
	        }
	        var perTick = diff / duration * 10;
	        requestAnimationFrame(function () {
	            if (Math.abs(perTick) > Math.abs(diff)) {
	                _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + diff);
	                return;
	            }
	            _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + perTick);
	            if (diff > 0 && _this4.getDocumentScrollTop() >= to || diff < 0 && _this4.getDocumentScrollTop() <= to) {
	                return;
	            }
	            _this4.scrollTo(to, duration - 16);
	        });
	    },


	    // matches(el, '.my-class'); 这里不能使用伪类选择器
	    is: function is(el, selector) {
	        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
	    },
	    width: function width(el) {
	        var styles = this.getComputedStyles(el);
	        var width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width : 0);

	        var boxSizing = styles.boxSizing || 'content-box';
	        if (boxSizing === 'border-box') {
	            return width;
	        }

	        var borderLeftWidth = parseFloat(styles.borderLeftWidth);
	        var borderRightWidth = parseFloat(styles.borderRightWidth);
	        var paddingLeft = parseFloat(styles.paddingLeft);
	        var paddingRight = parseFloat(styles.paddingRight);
	        return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;
	    },
	    height: function height(el) {
	        var styles = this.getComputedStyles(el);
	        var height = parseFloat(styles.height.indexOf('px') !== -1 ? styles.height : 0);

	        var boxSizing = styles.boxSizing || 'content-box';
	        if (boxSizing === 'border-box') {
	            return height;
	        }

	        var borderTopWidth = parseFloat(styles.borderTopWidth);
	        var borderBottomWidth = parseFloat(styles.borderBottomWidth);
	        var paddingTop = parseFloat(styles.paddingTop);
	        var paddingBottom = parseFloat(styles.paddingBottom);
	        return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
	    }
	};

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ebutton = _react2.default.createClass({
	    displayName: "ebutton",

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "model_store" },
	            _react2.default.createElement("div", { className: "m_trigger" }),
	            _react2.default.createElement("div", { className: "m_content clearfix", id: "m_content" }),
	            _react2.default.createElement(
	                "div",
	                { className: "m_btns" },
	                _react2.default.createElement(
	                    "a",
	                    { href: "javascript:void(0);", className: "add_model btn_blue" },
	                    "确定添加"
	                ),
	                _react2.default.createElement(
	                    "a",
	                    { href: "javascript:void(0);", className: "add_space btn_grey" },
	                    "新建空白"
	                )
	            )
	        );
	    }
	});

	module.exports = ebutton;

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dialog = __webpack_require__(13);
	var blockbox = __webpack_require__(15);
	var WebUploader = __webpack_require__(466);
	var modelO = __webpack_require__(14);
	var Item = __webpack_require__(487);

	var picstore = _react2.default.createClass({
	    displayName: 'picstore',

	    componentWillMount: function componentWillMount() {
	        this.props.getPicList();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        if (this.props.blockbox.toJS().picture.show) {
	            var _self = this;
	            var box = $(this.refs.picture);
	            new blockbox(box, {
	                showbg: false,
	                closebtn: box.find('.close'),
	                callback: function callback() {
	                    box.find('.insert_bg').show();
	                    box.find('.insert_pic').show();
	                    box.find('.change_pic').hide();
	                }
	            });
	        } else {
	            $(this.refs.picture).fadeOut(200);
	            $('.bg').fadeOut(200);
	        }
	    },
	    componentDidMount: function componentDidMount() {
	        this.setUploader();
	    },
	    setUploader: function setUploader() {
	        var _self = this;
	        var path = this.props.userstate === 1 ? modelO.apiUrl.uploadmodelpic : modelO.apiUrl.uploadpic;
	        var uploader = WebUploader.create({
	            pick: {
	                id: '#img_upload',
	                label: '上传图片+'
	            },
	            formData: {
	                uid: 1,
	                hid: hid
	            },
	            auto: true,
	            swf: 'js/common/Uploader.swf',
	            chunked: false,
	            chunkSize: 512 * 1024,
	            server: path,

	            accept: {
	                title: 'images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            },

	            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
	            disableGlobalDnd: true,
	            fileNumLimit: 300,
	            fileSizeLimit: 10 * 1024 * 1024, // 10 M
	            fileSingleSizeLimit: 512 * 1024 // 512k
	        });

	        uploader.onUploadProgress = function (file, percentage) {
	            if ($('#' + file.id).length > 0) {
	                var p = $('#' + file.id).find('.process span');
	                p.css('width', percentage * 100 + '%');
	                if (percentage === 1) {
	                    p.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function () {
	                        p.parent().fadeOut(300);
	                    });
	                }
	            }
	        };

	        uploader.onUploadSuccess = function (file, response) {
	            //写回正式src
	            if (response.path) {
	                var s = response.path.split('/');
	                _self.props.actions.updatePicture({
	                    'title': s[s.length - 1].split('.')[0],
	                    'src': response.path,
	                    'id': file.id
	                });
	            }
	        };

	        uploader.onError = function (code) {
	            MZ.tipmessage.show({ message: modelO.errorCode[code], delay: 1000, pos: 'middle', type: 'fail' });
	        };

	        uploader.onFileQueued = function (file) {
	            // 创建缩略图
	            uploader.makeThumb(file, function (error, src) {
	                if (!error) {
	                    _self.props.actions.addPicture({
	                        'title': file.name.split('.')[0],
	                        'src': src,
	                        'id': file.id
	                    });
	                } else {
	                    console.log(error);
	                }
	                // if ( error ) {
	                //     $img.replaceWith('<span>不能预览</span>');
	                //     return;
	                // }
	            }, 60, 75);
	        };
	    },
	    closePreview: function closePreview() {
	        this.props.openPicStore(false);
	    },
	    render: function render() {
	        var list = [];
	        var json = this.props.blockbox.toJS().picture.data;
	        for (var j in json) {
	            list.push(_react2.default.createElement(Item, { key: j, id: json[j].id, num: j, title: json[j].title, src: json[j].src }));
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: 'pic_store', ref: 'picture' },
	            _react2.default.createElement('div', { className: 'message' }),
	            _react2.default.createElement(
	                'a',
	                { href: 'javascript:void(0);', className: 'close', onClick: this.closePreview },
	                '关闭'
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'p_trigger' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'title_green' },
	                        '我的'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'p_content' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'p_c_trigger' },
	                            '支持格式：',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'title_green' },
	                                'JPG、JPEG、PNG、GIF'
	                            ),
	                            '大小:512k以内。'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'p_c_list' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'active' },
	                                list
	                            )
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'p_btns clear' },
	                _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'img_upload btu_green', id: 'img_upload' }),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'insert_bg btu_grey' },
	                    '设为背景'
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'insert_pic btu_grey' },
	                    '添加图片'
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'change_pic btu_grey' },
	                    '更换图片'
	                )
	            )
	        );
	    }
	});

	module.exports = picstore;

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modelO = __webpack_require__(14);

	var item = _react2.default.createClass({
	    displayName: 'item',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidUpdate: function componentDidUpdate() {},
	    render: function render() {
	        var classn = "img_choose",
	            num = this.props.num ? this.props.num : 1;
	        if (num === 1) {
	            classn += ' active';
	        }
	        if (this.props.id) {
	            classn += ' file-item thumbnail';
	        }
	        return _react2.default.createElement(
	            'li',
	            { className: classn, id: this.props.id },
	            _react2.default.createElement(
	                'div',
	                { 'class': 'process' },
	                _react2.default.createElement('span', null)
	            ),
	            _react2.default.createElement('img', { src: this.props.src }),
	            _react2.default.createElement(
	                'p',
	                { className: 'choose_title' },
	                this.props.title
	            )
	        );
	    }
	});

	module.exports = item;

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	var _page = __webpack_require__(471);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(1);
	var Header = __webpack_require__(7);
	var tip = __webpack_require__(11);
	var str = __webpack_require__(12);
	var dialog = __webpack_require__(13);
	var blockbox = __webpack_require__(15);
	var modelO = __webpack_require__(14);
	var slide = __webpack_require__(489);


	var previewCom = React.createClass({
		displayName: 'previewCom',

		getInitialState: function getInitialState() {
			return {};
		},
		shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
			if (this.props.blockbox.toJS().preview != nextProps.blockbox.toJS().preview) {
				return true;
			}
			return false;
		},
		componentDidUpdate: function componentDidUpdate() {
			if (this.props.blockbox.toJS().preview) {
				var _self = this;
				new blockbox($(this.refs.preview), {
					showbg: true,
					callback: function callback() {
						_self.makePreview();
					}
				});
			} else {
				$(this.refs.preview).fadeOut(200);
				$('.bg').fadeOut(200);
			}
		},
		makePreview: function makePreview() {
			var slideO = {},
			    _self = this;
			setSlide();

			function setSlide() {
				//预览slide
				setTimeout(function () {
					$(_self.refs.preview).find('.loading').fadeOut(300);
					slideO = new slide({
						pages: $('.section'),
						parentNode: '#preview',
						oninit: function oninit() {},
						onbeforechange: function onbeforechange() {},
						onchange: function onchange() {}
					});
				}, 1000);

				$('.p_prev').click(function () {
					slideO.prev();
				});
				$('.p_next').click(function () {
					slideO.next();
				});
			}
		},
		closePreview: function closePreview() {
			this.props.openPreview(false);
		},
		render: function render() {
			var json = this.props.immujson.get('value').toJS();
			var list = [];
			for (var j in json) {
				list.push(React.createElement(_page2.default, { key: j, type: 'preview', page: j.match(/\d+/)[0], list: json[j] }));
			}
			return React.createElement(
				'div',
				{ className: 'preview_box', ref: 'preview' },
				React.createElement('a', { href: 'javascript:void(0);', className: 'close', onClick: this.closePreview }),
				React.createElement(
					'div',
					{ className: 'p_left' },
					React.createElement(
						'div',
						{ className: 'p_desc clearfix' },
						React.createElement(
							'div',
							{ className: 'p_thum' },
							React.createElement('img', { src: info.url ? info.url : 'images/logo_default.jpg' })
						),
						React.createElement(
							'div',
							{ className: 'p_info' },
							React.createElement(
								'div',
								{ className: 'p_i_title' },
								React.createElement(
									'p',
									{ className: 'title' },
									info.title
								)
							),
							React.createElement(
								'div',
								{ className: 'p_i_content' },
								React.createElement(
									'p',
									{ className: 'content' },
									info.desc
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'p_right' },
					React.createElement(
						'div',
						{ className: 'p_pre clearfix' },
						React.createElement(
							'div',
							{ className: 'p_scale' },
							React.createElement(
								'div',
								{ className: 'p_scale_box', id: 'preview' },
								list
							)
						),
						React.createElement(
							'div',
							{ className: 'p_arrow' },
							React.createElement(
								'a',
								{ href: 'javascript:void(0);', className: 'p_prev' },
								React.createElement('span', null)
							),
							React.createElement(
								'a',
								{ href: 'javascript:void(0);', className: 'p_next' },
								React.createElement('span', null)
							)
						)
					)
				)
			);
		}
	});
	module.exports = previewCom;

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	var Event = __webpack_require__(482);

	//拖拽翻页
	function PageSlider(options) {
		//默认参数
		var defaults = {
			parentNode: window,
			//滚动方向：vertical/horizontal
			direction: 'vertical',
			//当前 className
			currentClass: 'current',
			//阻止动画class
			noAnimationClass: 'no',
			//是否需要手势跟随
			gestureFollowing: false,
			//是否生成标识点
			hasDot: false,
			//可选，记住上一次访问结束后的索引值，可用于实现页面返回后是否回到上次访问的页面
			rememberLastVisited: false,
			//阻止默认动作
			preventDefault: true,
			//动画只执行一次 ，此处有bug
			animationPlayOnce: false,
			//开发模式，传入数值，直接跳到正在开发的屏数
			dev: false,
			//swipeUp 回调
			onSwipeUp: function onSwipeUp() {},
			//swipeDown 回调
			onSwipeDown: function onSwipeDown() {},
			//swipeLeft 回调
			onSwipeLeft: function onSwipeLeft() {},
			//swipeRight 回调
			onSwipeRight: function onSwipeRight() {},
			//初始化完成时的回调
			oninit: function oninit() {},
			//开始切换前的回调
			onbeforechange: function onbeforechange() {},
			//每一屏切换完成时的回调
			onchange: function onchange() {}
		};

		//属性赋初值
		this.curPage = 0;
		this.lockNext = false;
		this.lockPrev = false;
		this.state = 0;
		this.startPos = 0;
		this.offset = 0;
		this.pageScrollTop = 0;

		//继承属性
		$.extend(this, defaults, options);

		//无页面的时候报错
		if (this.pages.length <= 0) {
			throw new Error('target para not pass');
		}

		//初始化
		this.pageWidth = $(this.parentNode).width();
		this.pageHeight = $(this.parentNode).height();
		this.target = this.pages.eq(0).parent();
		this.length = this.pages.length;
		this.moveTo = PageSlider.prototype.moveTo;
		this.index = 0;
		this.timer = null;
		this.touchdown = false;

		//初始化方向
		if (this.direction === 'vertical' || this.direction === 'v') {
			this.direction = 'v';
		}
		if (this.direction === 'horizontal' || this.direction === 'h') {
			this.direction = 'h';
		}

		if (this.length <= 1) {
			this.pages.eq(0).addClass(this.currentClass).find('.animated').not('.section_bg').removeClass(this.noAnimationClass);
			return;
		}

		this._init();
	}

	PageSlider.prototype = {
		_init: function _init() {
			var self = this;

			//初始化CSS动画，好让滑动有缓动效果
			this.target.css({
				'-webkit-transition': 'all 0.5s ease',
				'-moz-transition': 'all 0.5s ease',
				'transition': 'all 0.5s ease'
			});

			//初始化设置每一屏的宽高
			this._reset();

			//如果是长页面
			this.pages.each(function () {
				var $this = $(this),
				    $PageSliderWraper = $this.wrapInner('<div class="PageSlider__wraper"></div>').find('.PageSlider__wraper'),
				    height = $PageSliderWraper.height();

				//当子元素高度超过页面时，需滚完再切换
				if (height > this.pageHeight) {
					$this.data('height', height);
					$this.css('overflow', 'auto');
				}

				//再清除辅助层
				$PageSliderWraper.children().unwrap();
			});

			//如果是横向滚动
			if (this.direction === 'h') {
				this.pages.css('float', 'left');
			}

			//如果需要生成屏标识
			if (this.hasDot) {
				this._createDot();
			}

			//绑定动态动画效果
			self._bindAnimation();

			//绑定拖拽事件
			Event.addEvent(this.target[0], 'start', function (e) {
				self._startHandle(e);
			});

			Event.addEvent(this.target[0], 'move', function (e) {
				self._moveHandle(e);
			});

			Event.addEvent(this.target[0], 'end', function (e) {
				self._endHandle(e);
			});

			//绑定缩放事件
			$(window).on('resize', function () {
				self._reset();
				self.moveTo(self.index, true);
			});

			//如果需要记住上次访问的屏索引
			if (this.rememberLastVisited) {
				this.lastVisitedIndex = this._getLastVisited();
			}

			//初始化时不再直接调用 moveTo, 免得初始化时还会回调一次 onchange 等接口 from 0.2.2
			//this.moveTo(this.index, true);
			this.target.css({
				'-webkit-transform': 'translate3d(0, 0, 0)',
				'-moz-transform': 'translate3d(0, 0, 0)',
				'transform': 'translate3d(0, 0, 0)'
			});
			this.pages.eq(0).addClass(this.currentClass).find('.animated').not('.section_bg').removeClass(this.noAnimationClass);

			this.oninit.call(this);

			this._dev();
		},

		_startHandle: function _startHandle(e) {
			var touch = client.ifmobile ? e.touches[0] : e;

			//如果动画在执行中则不予以操作
			if (this.state === 'running') {
				e.preventDefault();
				return;
			}

			this.touchdown = true;
			this.startPos = this.direction === 'v' ? touch.clientY : touch.clientX;

			//是否禁止滑屏参数获取
			this.curPage = this.pages.eq(this.index);
			this.lockNext = this.curPage.data('lock-next');
			this.lockPrev = this.curPage.data('lock-prev');

			//是否是长页面
			this.curPage[0].pageScrollHeight = this.curPage.data('height') || 0;
			if (this.curPage[0].pageScrollHeight) {
				this.preventDefault = false;
				this.pageScrollTop = this.pageHeight + this.curPage.scrollTop();
			}

			//手势跟随判断
			if (this.gestureFollowing) {
				//获取当前的位置值
				var valArr = this.target.css('-webkit-transform').match(/translate\((-?\d+)px,\s+(-?\d+)px.*\)/);
				this.offset = parseFloat(this.direction === 'v' ? valArr[2] : valArr[1]);
			}
		},

		_moveHandle: function _moveHandle(e) {
			var touch = client.ifmobile ? e.changedTouches[0] : e,
			    distance,
			    endPos;

			//如果动画在执行中则不予以操作
			if (this.state === 'running') {
				e.preventDefault();
				return;
			}

			//如果没有按下
			if (!this.touchdown) {
				e.preventDefault();
				return;
			}

			endPos = this.direction === 'v' ? touch.clientY : touch.clientX;
			distance = endPos - this.startPos;

			//如果存在长页面，需多判断一下，以阻止默认行为
			if (this.curPage[0].pageScrollHeight) {
				if (distance > 0 && this.pageScrollTop === this.pageHeight) e.preventDefault();
				if (distance < 0 && this.pageScrollTop === this.curPage[0].pageScrollHeight) e.preventDefault();
			}

			//如果不需要手势跟随，直接返回
			if (!this.gestureFollowing) {
				this._preventDefault(e);
				return;
			}

			//下面是在有手势跟随时的一些情况
			//1. 如果在第一屏或最后一屏，直接返回
			if (this.index <= 0 && endPos > this.startPos || this.index >= this.length - 1 && endPos < this.startPos) {
				e.preventDefault();
				return;
			}

			//2. 如果向上或向下被禁止，直接返回
			if (distance > 0 && this.lockPrev || distance < 0 && this.lockNext) {
				e.preventDefault();
				return;
			}

			//3. 没有特殊情况，需要手势跟随了，则
			distance = this.offset + distance + 'px';

			//移除动画缓动
			this._removeTransition();

			if (this.direction === 'v') {
				this.target.css('-webkit-transform', 'translate(0, ' + distance + ')');
			} else {
				this.target.css('-webkit-transform', 'translate(' + distance + ', 0)');
			}

			this._preventDefault(e);
		},

		_endHandle: function _endHandle(e) {
			var touch = client.ifmobile ? e.changedTouches[0] : e,
			    distance,
			    endPos;

			//如果动画在执行中则不予以操作
			if (this.state === 'running') {
				e.preventDefault();
				return;
			}

			this.touchdown = false;
			endPos = this.direction === 'v' ? touch.clientY : touch.clientX;
			distance = endPos - this.startPos;

			//设置动画缓动
			this._setTransition();

			//swipeDown
			if (distance > 0) {
				this.direction === 'v' ? this.onSwipeDown.call(this) : this.onSwipeRight.call(this);

				if (!this.lockPrev) {
					//如果是长页面，需判断一下是否到顶
					if (this.curPage[0].pageScrollHeight && this.pageScrollTop > this.pageHeight) {
						return;
					} else if (distance > 20) {
						this.prev();
					} else {
						this.moveTo(this.index);
					}
				}
			}

			//swipeUp
			if (distance < 0) {
				this.direction === 'v' ? this.onSwipeUp.call(this) : this.onSwipeLeft.call(this);

				if (!this.lockNext) {
					//如果是长页面，需判断一下是否到底
					if (this.curPage[0].pageScrollHeight && this.pageScrollTop < this.curPage[0].pageScrollHeight) {
						return;
					} else if (distance < -20) {
						this.next();
					} else {
						this.moveTo(this.index);
					}
				}
			}
		},

		moveTo: function moveTo(index, direct) {
			var distance,
			    self = this;

			this.state = 'running';

			direct = direct || false;

			var type, name;
			if (Math.abs(index - this.index) > 1) {
				type = 'pageSliderMoveWxm';
			} else if (index - this.index > 0) {
				type = 'pageSliderDownWxm';
			} else if (index - this.index < 0) {
				type = 'pageSliderUpWxm';
			} else if (index - this.index == 0) {
				type = 'pageResizeWxm';
			}
			if (index >= this.length) {
				name = 'bottom';
			} else if (index < 0) {
				name = 'top';
			} else {
				name = this.index + 'to' + index;
			}

			if (index >= this.length || index < 0) {
				this.state = 'end';
				return;
			}

			direct && this._removeTransition();

			this.onbeforechange.call(this);

			if (this.direction === 'v') {
				distance = -index * this.pageHeight + 'px';
				this.target.css('-webkit-transform', 'translate(0, ' + distance + ')');
			}

			if (this.direction === 'h') {
				distance = -index * this.pageWidth + 'px';
				this.target.css('-webkit-transform', 'translate(' + distance + ', 0)');
			}

			clearTimeout(this.timer);
			this.timer = setTimeout(function () {
				self._currentClass(index);
				self.prevIndex = self.index;
				self.index = index;
				self.onchange.call(self);

				direct && self._setTransition();

				//如果是较长的页面，在翻屏时，重置滚动条位置
				if (self.curPage && self.curPage[0].pageScrollHeight) {
					self.preventDefault = true;
					self.curPage.scrollTop(0);
				}

				self.rememberLastVisited && self._saveLastVisited();

				self.state = 'end';
				clearTimeout(this.timer);
			}, 500);
		},

		prev: function prev() {
			this.moveTo(this.index - 1);
		},

		next: function next() {
			this.moveTo(this.index + 1);
		},

		_setTransition: function _setTransition() {
			this.target.css('-webkit-transition', '-webkit-transform 0.5s ease');
		},

		_removeTransition: function _removeTransition() {
			this.target.css('-webkit-transition', 'none');
		},

		_currentClass: function _currentClass(index) {
			var currentClass = this.currentClass;

			this.pages.eq(index).addClass(currentClass).find('.animated').not('.section_bg').removeClass(this.noAnimationClass);
			if (index !== this.index && !this.animationPlayOnce) {
				this.pages.eq(this.index).removeClass(currentClass);
				$.each(this.pages.eq(this.index).find('.animated'), function () {
					if ($(this).hasClass('section_bg') || $(this).hasClass('none')) {
						return;
					}
					$(this).addClass(self.noAnimationClass);
				});
			}
		},

		_reset: function _reset() {
			var self = this;
			var direction = this.direction;

			this.pageWidth = $(this.parentNode).width();
			this.pageHeight = $(this.parentNode).height();

			this.pages.each(function () {
				var $this = $(this);
				$this.width(self.pageWidth + 'px');
				$this.height(self.pageHeight + 'px');
			});

			if (direction === 'v') {
				this.target.width(self.pageWidth + 'px');
				this.target.height(self.pageHeight * this.length + 'px');
			}

			if (direction === 'h') {
				this.target.width(this.pageWidth * this.length + 'px');
				this.target.height(this.pageHeight + 'px');
			}
		},

		_createDot: function _createDot() {
			var dots = '';

			for (var i = 0; i < this.length; i++) {
				dots += '<li>' + (i + 1) + '</li>';
			}

			$(dots).appendTo(this.target).wrapAll('<ul class="dot-list">');
		},

		_saveLastVisited: function _saveLastVisited() {
			var storage = window.localStorage;

			if (storage) {
				storage.setItem('pageSliderIndex', this.index);
			}
		},

		_getLastVisited: function _getLastVisited() {
			var storage = window.localStorage;

			if (storage) {
				this.cacheIndex = storage.getItem('pageSliderIndex');
				return parseInt(this.cacheIndex);
			}
		},

		_bindAnimation: function _bindAnimation() {
			var self = this,
			    styleText = '<style>';

			$('[data-animation]').each(function (index) {
				var $this = $(this),
				    dataAnimation = $this.data('animation'),
				    animationName = dataAnimation['name'],
				    animationDuration = dataAnimation['duration'] || 500,
				    animationDelay = dataAnimation['delay'] || 0,
				    animationTimeFunction = dataAnimation['timing-function'] || 'ease',
				    animationFillMode = dataAnimation['fill-mode'] || 'both',
				    animationIterationCount = dataAnimation['iteration-count'] || 1;

				$this.data('animationid', ++index);

				styleText += '.' + self.currentClass + ' ' + '[data-animationid="' + index + '"]' + '{' + '-webkit-animation-name: ' + animationName + ';' + '-webkit-animation-duration: ' + animationDuration + 'ms;' + '-webkit-animation-delay: ' + animationDelay + 'ms;' + '-webkit-animation-timing-function: ' + animationTimeFunction + ';' + '-webkit-animation-fill-mode: ' + animationFillMode + ';' + '-webkit-animation-iteration-count: ' + animationIterationCount + ';' + '}';
			});

			styleText + '</style>';
			$('head').eq(0).append(styleText);
		},

		_preventDefault: function _preventDefault(e) {
			this.preventDefault && e.preventDefault();
		},

		_dev: function _dev() {
			if (this.dev !== false) {
				this.moveTo(this.dev, true);
			}
		}
	};
	module.exports = PageSlider;

/***/ },
/* 490 */,
/* 491 */,
/* 492 */
8,
/* 493 */
8,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */
8,
/* 499 */,
/* 500 */,
/* 501 */
8,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var getPrototype = __webpack_require__(__webpack_module_template_argument_0__),
	    isHostObject = __webpack_require__(__webpack_module_template_argument_1__),
	    isObjectLike = __webpack_require__(__webpack_module_template_argument_2__);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ }
]);