webpackJsonp([5],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*!
	 * jQuery JavaScript Library v1.7.2
	 * http://jquery.com/
	 *
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 * Copyright 2011, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses.
	 *
	 * Date: Wed Mar 21 12:46:34 2012 -0700
	 */(function(window,undefined){ // Use the correct document accordingly with window argument (sandbox)
	var document=window.document,navigator=window.navigator,location=window.location;var jQuery=function(){ // Define a local copy of jQuery
	var jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	return new jQuery.fn.init(selector,context,rootjQuery);}, // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$, // A central reference to the root jQuery(document)
	rootjQuery, // A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, // Check if a string has a non-whitespace character in it
	rnotwhite=/\S/, // Used for trimming whitespace
	trimLeft=/^\s+/,trimRight=/\s+$/, // Match a standalone tag
	rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/, // JSON RegExp
	rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g, // Useragent RegExp
	rwebkit=/(webkit)[ \/]([\w.]+)/,ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,rmsie=/(msie) ([\w.]+)/,rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/, // Matches dashed string for camelizing
	rdashAlpha=/-([a-z]|[0-9])/ig,rmsPrefix=/^-ms-/, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return (letter+"").toUpperCase();}, // Keep a UserAgent string for use with jQuery.browser
	userAgent=navigator.userAgent, // For matching the engine and version of the browser
	browserMatch, // The deferred used on DOM ready
	readyList, // The ready event handler
	_DOMContentLoaded2, // Save a reference to some core methods
	toString=Object.prototype.toString,hasOwn=Object.prototype.hasOwnProperty,push=Array.prototype.push,_slice=Array.prototype.slice,trim=String.prototype.trim,indexOf=Array.prototype.indexOf, // [[Class]] -> type pairs
	class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function init(selector,context,rootjQuery){var match,elem,ret,doc; // Handle $(""), $(null), or $(undefined)
	if(!selector){return this;} // Handle $(DOMElement)
	if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;} // The body element only exists once, optimize finding it
	if(selector==="body"&&!context&&document.body){this.context=document;this[0]=document.body;this.selector=selector;this.length=1;return this;} // Handle HTML strings
	if(typeof selector==="string"){ // Are we dealing with HTML string or an ID?
	if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else {match=quickExpr.exec(selector);} // Verify a match, and that no context was specified for #id
	if(match&&(match[1]||!context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;doc=context?context.ownerDocument||context:document; // If a single string is passed in and it's a single tag
	// just do a createElement and skip the rest
	ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else {selector=[doc.createElement(ret[1])];}}else {ret=jQuery.buildFragment([match[1]],[doc]);selector=(ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes;}return jQuery.merge(this,selector); // HANDLE: $("#id")
	}else {elem=document.getElementById(match[2]); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	if(elem&&elem.parentNode){ // Handle the case where IE and Opera return items
	// by name instead of ID
	if(elem.id!==match[2]){return rootjQuery.find(selector);} // Otherwise, we inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return (context||rootjQuery).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);}, // Start with an empty selector
	selector:"", // The current version of jQuery being used
	jquery:"1.7.2", // The default length of a jQuery object is 0
	length:0, // The number of elements contained in the matched element set
	size:function size(){return this.length;},toArray:function toArray(){return _slice.call(this,0);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num==null? // Return a 'clean' array
	this.toArray(): // Return just the object
	num<0?this[this.length+num]:this[num];}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems,name,selector){ // Build a new jQuery matched element set
	var ret=this.constructor();if(jQuery.isArray(elems)){push.apply(ret,elems);}else {jQuery.merge(ret,elems);} // Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";} // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each:function each(callback,args){return jQuery.each(this,callback,args);},ready:function ready(fn){ // Attach the listeners
	jQuery.bindReady(); // Add the callback
	readyList.add(fn);return this;},eq:function eq(i){i=+i;return i===-1?this.slice(i):this.slice(i,i+1);},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},slice:function slice(){return this.pushStack(_slice.apply(this,arguments),"slice",_slice.call(arguments).join(","));},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function end(){return this.prevObject||this.constructor(null);}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:[].sort,splice:[].splice}; // Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;target=arguments[1]||{}; // skip the boolean and the target
	i=2;} // Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};} // extend jQuery itself if only one argument is passed
	if(length===i){target=this;--i;}for(;i<length;i++){ // Only deal with non-null/undefined values
	if((options=arguments[i])!=null){ // Extend the base object
	for(name in options){src=target[name];copy=options[name]; // Prevent never-ending loop
	if(target===copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else {clone=src&&jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}} // Return the modified object
	return target;};jQuery.extend({noConflict:function noConflict(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;}, // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Either a released hold or an DOMready/load event and not yet ready
	if(wait===true&&! --jQuery.readyWait||wait!==true&&!jQuery.isReady){ // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
	if(!document.body){return setTimeout(jQuery.ready,1);} // Remember that the DOM is ready
	jQuery.isReady=true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;} // If there are functions bound, to execute
	readyList.fireWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}}},bindReady:function bindReady(){if(readyList){return;}readyList=jQuery.Callbacks("once memory"); // Catch cases where $(document).ready() is called after the
	// browser event has already occurred.
	if(document.readyState==="complete"){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	return setTimeout(jQuery.ready,1);} // Mozilla, Opera and webkit nightlies currently support this event
	if(document.addEventListener){ // Use the handy event callback
	document.addEventListener("DOMContentLoaded",_DOMContentLoaded2,false); // A fallback to window.onload, that will always work
	window.addEventListener("load",jQuery.ready,false); // If IE event model is used
	}else if(document.attachEvent){ // ensure firing before onload,
	// maybe late but safe also for iframes
	document.attachEvent("onreadystatechange",_DOMContentLoaded2); // A fallback to window.onload, that will always work
	window.attachEvent("onload",jQuery.ready); // If IE and not a frame
	// continually check to see if the document is ready
	var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}}, // See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function isWindow(obj){return obj!=null&&obj==obj.window;},isNumeric:function isNumeric(obj){return !isNaN(parseFloat(obj))&&isFinite(obj);},type:function type(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object";},isPlainObject:function isPlainObject(obj){ // Must be an Object.
	// Because of IE, we also have to check the presence of the constructor property.
	// Make sure that DOM nodes and window objects don't pass through, as well
	if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}try{ // Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){ // IE8,9 Will throw exceptions on certain host objects #9897
	return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){for(var name in obj){return false;}return true;},error:function error(msg){throw new Error(msg);},parseJSON:function parseJSON(data){if(typeof data!=="string"||!data){return null;} // Make sure leading/trailing whitespace is removed (IE can't handle it)
	data=jQuery.trim(data); // Attempt to parse using the native JSON parser first
	if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);} // Make sure the incoming data is actual JSON
	// Logic borrowed from http://json.org/json2.js
	if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)();}jQuery.error("Invalid JSON: "+data);}, // Cross-browser xml parsing
	parseXML:function parseXML(data){if(typeof data!=="string"||!data){return null;}var xml,tmp;try{if(window.DOMParser){ // Standard
	tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else { // IE
	xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;},noop:function noop(){}, // Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval:function globalEval(data){if(data&&rnotwhite.test(data)){ // We use execScript on Internet Explorer
	// We use an anonymous function so that context is window
	// rather than jQuery in Firefox
	(window.execScript||function(data){window["eval"].call(window,data);})(data);}}, // Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();}, // args is for internal usage only
	each:function each(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else {for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}} // A special, fast, case for the most common use of each
	}else {if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else {for(;i<length;){if(callback.call(object[i],i,object[i++])===false){break;}}}}return object;}, // Use native String.trim function wherever possible
	trim:trim?function(text){return text==null?"":trim.call(text);}: // Otherwise use our own trimming functionality
	function(text){return text==null?"":text.toString().replace(trimLeft,"").replace(trimRight,"");}, // results is for internal usage only
	makeArray:function makeArray(array,results){var ret=results||[];if(array!=null){ // The window, strings (and functions) also have 'length'
	// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
	var type=jQuery.type(array);if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){push.call(ret,array);}else {jQuery.merge(ret,array);}}return ret;},inArray:function inArray(elem,array,i){var len;if(array){if(indexOf){return indexOf.call(array,elem,i);}len=array.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){ // Skip accessing in sparse arrays
	if(i in array&&array[i]===elem){return i;}}}return -1;},merge:function merge(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else {while(second[j]!==undefined){first[i++]=second[j++];}}first.length=i;return first;},grep:function grep(elems,callback,inv){var ret=[],retVal;inv=!!inv; // Go through the array, only saving the items
	// that pass the validator function
	for(var i=0,length=elems.length;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}return ret;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length, // jquery objects are treated as arrays
	isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&(length>0&&elems[0]&&elems[length-1]||length===0||jQuery.isArray(elems)); // Go through the array, translating each of the items to their
	if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}} // Go through every key on the object,
	}else {for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value;}}} // Flatten any nested arrays
	return ret.concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){if(typeof context==="string"){var tmp=fn[context];context=fn;fn=tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	var args=_slice.call(arguments,2),proxy=function proxy(){return fn.apply(context,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;return proxy;}, // Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access:function access(elems,fn,key,value,chainable,emptyGet,pass){var exec,bulk=key==null,i=0,length=elems.length; // Sets many values
	if(key&&(typeof key==="undefined"?"undefined":_typeof(key))==="object"){for(i in key){jQuery.access(elems,fn,i,key[i],1,emptyGet,value);}chainable=1; // Sets one value
	}else if(value!==undefined){ // Optionally, function values get executed if exec is true
	exec=pass===undefined&&jQuery.isFunction(value);if(bulk){ // Bulk operations only iterate when executing function values
	if(exec){exec=fn;fn=function fn(elem,key,value){return exec.call(jQuery(elem),value);}; // Otherwise they run against the entire set
	}else {fn.call(elems,value);fn=null;}}if(fn){for(;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}}chainable=1;}return chainable?elems: // Gets
	bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function now(){return new Date().getTime();}, // Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch:function uaMatch(ua){ua=ua.toLowerCase();var match=rwebkit.exec(ua)||ropera.exec(ua)||rmsie.exec(ua)||ua.indexOf("compatible")<0&&rmozilla.exec(ua)||[];return {browser:match[1]||"",version:match[2]||"0"};},sub:function sub(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context);}jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context);}return jQuery.fn.init.call(this,selector,context,rootjQuerySub);};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub;},browser:{}}); // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;} // Deprecated, use jQuery.browser.webkit instead
	if(jQuery.browser.webkit){jQuery.browser.safari=true;} // IE doesn't match non-breaking spaces with \s
	if(rnotwhite.test("\xA0")){trimLeft=/^[\s\xA0]+/;trimRight=/[\s\xA0]+$/;} // All jQuery objects should point back to these
	rootjQuery=jQuery(document); // Cleanup functions for the document ready method
	if(document.addEventListener){_DOMContentLoaded2=function DOMContentLoaded(){document.removeEventListener("DOMContentLoaded",_DOMContentLoaded2,false);jQuery.ready();};}else if(document.attachEvent){_DOMContentLoaded2=function _DOMContentLoaded(){ // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
	if(document.readyState==="complete"){document.detachEvent("onreadystatechange",_DOMContentLoaded2);jQuery.ready();}};} // The DOM ready check for Internet Explorer
	function doScrollCheck(){if(jQuery.isReady){return;}try{ // If IE is used, use the trick by Diego Perini
	// http://javascript.nwbox.com/IEContentLoaded/
	document.documentElement.doScroll("left");}catch(e){setTimeout(doScrollCheck,1);return;} // and execute any waiting functions
	jQuery.ready();}return jQuery;}(); // String to Object flags format cache
	var flagsCache={}; // Convert String-formatted flags into Object-formatted ones and store in cache
	function createFlags(flags){var object=flagsCache[flags]={},i,length;flags=flags.split(/\s+/);for(i=0,length=flags.length;i<length;i++){object[flags[i]]=true;}return object;} /*
	     * Create a callback list using the following parameters:
	     *
	     *	flags:	an optional list of space-separated flags that will change how
	     *			the callback list behaves
	     *
	     * By default a callback list will act like an event callback list and can be
	     * "fired" multiple times.
	     *
	     * Possible flags:
	     *
	     *	once:			will ensure the callback list can only be fired once (like a Deferred)
	     *
	     *	memory:			will keep track of previous values and will call any callback added
	     *					after the list has been fired right away with the latest "memorized"
	     *					values (like a Deferred)
	     *
	     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	     *
	     *	stopOnFalse:	interrupt callings when a callback returns false
	     *
	     */jQuery.Callbacks=function(flags){ // Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags=flags?flagsCache[flags]||createFlags(flags):{};var  // Actual callback list
	list=[], // Stack of fire calls for repeatable lists
	stack=[], // Last fire value (for non-forgettable lists)
	memory, // Flag to know if list was already fired
	_fired, // Flag to know if list is currently firing
	firing, // First callback to fire (used internally by add and fireWith)
	firingStart, // End of the loop when firing
	firingLength, // Index of currently firing callback (modified by remove if needed)
	firingIndex, // Add one or several callbacks to the list
	_add=function _add(args){var i,length,elem,type,actual;for(i=0,length=args.length;i<length;i++){elem=args[i];type=jQuery.type(elem);if(type==="array"){ // Inspect recursively
	_add(elem);}else if(type==="function"){ // Add if not in unique mode and callback is not in
	if(!flags.unique||!self.has(elem)){list.push(elem);}}}}, // Fire callbacks
	fire=function fire(context,args){args=args||[];memory=!flags.memory||[context,args];_fired=true;firing=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(context,args)===false&&flags.stopOnFalse){memory=true; // Mark as halted
	break;}}firing=false;if(list){if(!flags.once){if(stack&&stack.length){memory=stack.shift();self.fireWith(memory[0],memory[1]);}}else if(memory===true){self.disable();}else {list=[];}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){var length=list.length;_add(arguments); // Do we need to add the callbacks to the
	// current firing batch?
	if(firing){firingLength=list.length; // With memory, if we're not firing then
	// we should call right away, unless previous
	// firing was halted (stopOnFalse)
	}else if(memory&&memory!==true){firingStart=length;fire(memory[0],memory[1]);}}return this;}, // Remove a callback from the list
	remove:function remove(){if(list){var args=arguments,argIndex=0,argLength=args.length;for(;argIndex<argLength;argIndex++){for(var i=0;i<list.length;i++){if(args[argIndex]===list[i]){ // Handle firingIndex and firingLength
	if(firing){if(i<=firingLength){firingLength--;if(i<=firingIndex){firingIndex--;}}} // Remove the element
	list.splice(i--,1); // If we have some unicity property then
	// we only need to do this once
	if(flags.unique){break;}}}}}return this;}, // Control if a given callback is in the list
	has:function has(fn){if(list){var i=0,length=list.length;for(;i<length;i++){if(fn===list[i]){return true;}}}return false;}, // Remove all callbacks from the list
	empty:function empty(){list=[];return this;}, // Have the list do nothing anymore
	disable:function disable(){list=stack=memory=undefined;return this;}, // Is it disabled?
	disabled:function disabled(){return !list;}, // Lock the list in its current state
	lock:function lock(){stack=undefined;if(!memory||memory===true){self.disable();}return this;}, // Is it locked?
	locked:function locked(){return !stack;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(stack){if(firing){if(!flags.once){stack.push([context,args]);}}else if(!(flags.once&&memory)){fire(context,args);}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};var  // Static reference to slice
	sliceDeferred=[].slice;jQuery.extend({Deferred:function Deferred(func){var doneList=jQuery.Callbacks("once memory"),failList=jQuery.Callbacks("once memory"),progressList=jQuery.Callbacks("memory"),_state="pending",lists={resolve:doneList,reject:failList,notify:progressList},_promise={done:doneList.add,fail:failList.add,progress:progressList.add,state:function state(){return _state;}, // Deprecated
	isResolved:doneList.fired,isRejected:failList.fired,then:function then(doneCallbacks,failCallbacks,progressCallbacks){deferred.done(doneCallbacks).fail(failCallbacks).progress(progressCallbacks);return this;},always:function always(){deferred.done.apply(deferred,arguments).fail.apply(deferred,arguments);return this;},pipe:function pipe(fnDone,fnFail,fnProgress){return jQuery.Deferred(function(newDefer){jQuery.each({done:[fnDone,"resolve"],fail:[fnFail,"reject"],progress:[fnProgress,"notify"]},function(handler,data){var fn=data[0],action=data[1],returned;if(jQuery.isFunction(fn)){deferred[handler](function(){returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().then(newDefer.resolve,newDefer.reject,newDefer.notify);}else {newDefer[action+"With"](this===deferred?newDefer:this,[returned]);}});}else {deferred[handler](newDefer[action]);}});}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){if(obj==null){obj=_promise;}else {for(var key in _promise){obj[key]=_promise[key];}}return obj;}},deferred=_promise.promise({}),key;for(key in lists){deferred[key]=lists[key].fire;deferred[key+"With"]=lists[key].fireWith;} // Handle state
	deferred.done(function(){_state="resolved";},failList.disable,progressList.lock).fail(function(){_state="rejected";},doneList.disable,progressList.lock); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(firstParam){var args=sliceDeferred.call(arguments,0),i=0,length=args.length,pValues=new Array(length),count=length,pCount=length,deferred=length<=1&&firstParam&&jQuery.isFunction(firstParam.promise)?firstParam:jQuery.Deferred(),promise=deferred.promise();function resolveFunc(i){return function(value){args[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;if(! --count){deferred.resolveWith(deferred,args);}};}function progressFunc(i){return function(value){pValues[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;deferred.notifyWith(promise,pValues);};}if(length>1){for(;i<length;i++){if(args[i]&&args[i].promise&&jQuery.isFunction(args[i].promise)){args[i].promise().then(resolveFunc(i),deferred.reject,progressFunc(i));}else {--count;}}if(!count){deferred.resolveWith(deferred,args);}}else if(deferred!==firstParam){deferred.resolveWith(deferred,length?[firstParam]:[]);}return promise;}});jQuery.support=function(){var support,all,a,select,opt,input,fragment,tds,events,eventName,i,isSupported,div=document.createElement("div"),documentElement=document.documentElement; // Preliminary tests
	div.setAttribute("className","t");div.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0]; // Can't get basic test support
	if(!all||!all.length||!a){return {};} // First batch of supports tests
	select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];support={ // IE strips leading whitespace when .innerHTML is used
	leadingWhitespace:div.firstChild.nodeType===3, // Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	tbody:!div.getElementsByTagName("tbody").length, // Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	htmlSerialize:!!div.getElementsByTagName("link").length, // Get the style information from getAttribute
	// (IE uses .cssText instead)
	style:/top/.test(a.getAttribute("style")), // Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	hrefNormalized:a.getAttribute("href")==="/a", // Make sure that element opacity exists
	// (IE uses filter instead)
	// Use a regex to work around a WebKit issue. See #5145
	opacity:/^0.55/.test(a.style.opacity), // Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	cssFloat:!!a.style.cssFloat, // Make sure that if no value is specified for a checkbox
	// that it defaults to "on".
	// (WebKit defaults to "" instead)
	checkOn:input.value==="on", // Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	optSelected:opt.selected, // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	getSetAttribute:div.className!=="t", // Tests for enctype support on a form(#6743)
	enctype:!!document.createElement("form").enctype, // Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>", // Will be defined later
	submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true}; // jQuery.boxModel DEPRECATED in 1.3, use jQuery.support.boxModel instead
	jQuery.boxModel=support.boxModel=document.compatMode==="CSS1Compat"; // Make sure checked status is properly cloned
	input.checked=true;support.noCloneChecked=input.cloneNode(true).checked; // Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled=true;support.optDisabled=!opt.disabled; // Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try{delete div.test;}catch(e){support.deleteExpando=false;}if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){ // Cloning a node shouldn't copy over any
	// bound event handlers (IE does this)
	support.noCloneEvent=false;});div.cloneNode(true).fireEvent("onclick");} // Check if a radio maintains its value
	// after being appended to the DOM
	input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked"); // #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute("name","t");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.lastChild); // WebKit doesn't clone checked state correctly in fragments
	support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked; // Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked=input.checked;fragment.removeChild(input);fragment.appendChild(div); // Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if(div.attachEvent){for(i in {submit:1,change:1,focusin:1}){eventName="on"+i;isSupported=eventName in div;if(!isSupported){div.setAttribute(eventName,"return;");isSupported=typeof div[eventName]==="function";}support[i+"Bubbles"]=isSupported;}}fragment.removeChild(div); // Null elements to avoid leaks in IE
	fragment=select=opt=div=input=null; // Run tests that need a body at doc ready
	jQuery(function(){var container,outer,inner,table,td,offsetSupport,marginDiv,conMarginTop,style,html,positionTopLeftWidthHeight,paddingMarginBorderVisibility,paddingMarginBorder,body=document.getElementsByTagName("body")[0];if(!body){ // Return for frameset docs that don't have a body
	return;}conMarginTop=1;paddingMarginBorder="padding:0;margin:0;border:";positionTopLeftWidthHeight="position:absolute;top:0;left:0;width:1px;height:1px;";paddingMarginBorderVisibility=paddingMarginBorder+"0;visibility:hidden;";style="style='"+positionTopLeftWidthHeight+paddingMarginBorder+"5px solid #000;";html="<div "+style+"display:block;'><div style='"+paddingMarginBorder+"0;display:block;overflow:hidden;'></div></div>"+"<table "+style+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";container=document.createElement("div");container.style.cssText=paddingMarginBorderVisibility+"width:0;height:0;position:static;top:0;margin-top:"+conMarginTop+"px";body.insertBefore(container,body.firstChild); // Construct the test element
	div=document.createElement("div");container.appendChild(div); // Check if table cells still have offsetWidth/Height when they are set
	// to display:none and there are still other visible table cells in a
	// table row; if so, offsetWidth/Height are not reliable for use when
	// determining if an element has been hidden directly using
	// display:none (it is still safe to use offsets if a parent element is
	// hidden; don safety goggles and see bug #4512 for more information).
	// (only IE 8 fails this test)
	div.innerHTML="<table><tr><td style='"+paddingMarginBorder+"0;display:none'></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");isSupported=tds[0].offsetHeight===0;tds[0].style.display="";tds[1].style.display="none"; // Check if empty table cells still have offsetWidth/Height
	// (IE <= 8 fail this test)
	support.reliableHiddenOffsets=isSupported&&tds[0].offsetHeight===0; // Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if(window.getComputedStyle){div.innerHTML="";marginDiv=document.createElement("div");marginDiv.style.width="0";marginDiv.style.marginRight="0";div.style.width="2px";div.appendChild(marginDiv);support.reliableMarginRight=(parseInt((window.getComputedStyle(marginDiv,null)||{marginRight:0}).marginRight,10)||0)===0;}if(typeof div.style.zoom!=="undefined"){ // Check if natively block-level elements act like inline-block
	// elements when setting their display to 'inline' and giving
	// them layout
	// (IE < 8 does this)
	div.innerHTML="";div.style.width=div.style.padding="1px";div.style.border=0;div.style.overflow="hidden";div.style.display="inline";div.style.zoom=1;support.inlineBlockNeedsLayout=div.offsetWidth===3; // Check if elements with layout shrink-wrap their children
	// (IE 6 does this)
	div.style.display="block";div.style.overflow="visible";div.innerHTML="<div style='width:5px;'></div>";support.shrinkWrapBlocks=div.offsetWidth!==3;}div.style.cssText=positionTopLeftWidthHeight+paddingMarginBorderVisibility;div.innerHTML=html;outer=div.firstChild;inner=outer.firstChild;td=outer.nextSibling.firstChild.firstChild;offsetSupport={doesNotAddBorder:inner.offsetTop!==5,doesAddBorderForTableAndCells:td.offsetTop===5};inner.style.position="fixed";inner.style.top="20px"; // safari subtracts parent border width here which is 5px
	offsetSupport.fixedPosition=inner.offsetTop===20||inner.offsetTop===15;inner.style.position=inner.style.top="";outer.style.overflow="hidden";outer.style.position="relative";offsetSupport.subtractsBorderForOverflowNotVisible=inner.offsetTop===-5;offsetSupport.doesNotIncludeMarginInBodyOffset=body.offsetTop!==conMarginTop;if(window.getComputedStyle){div.style.marginTop="1%";support.pixelMargin=(window.getComputedStyle(div,null)||{marginTop:0}).marginTop!=="1%";}if(typeof container.style.zoom!=="undefined"){container.style.zoom=1;}body.removeChild(container);marginDiv=div=container=null;jQuery.extend(support,offsetSupport);});return support;}();var rbrace=/^(?:\{.*\}|\[.*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{}, // Please use with caution
	uuid:0, // Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""), // The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData:{"embed":true, // Ban all objects except for Flash (which handle expandos)
	"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function hasData(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return !!elem&&!isEmptyDataObject(elem);},data:function data(elem,name,_data,pvt /* Internal Use Only */){if(!jQuery.acceptData(elem)){return;}var privateCache,thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string", // We have to handle DOM nodes and JS objects differently because IE6-7
	// can't GC object references properly across the DOM-JS boundary
	isNode=elem.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
	// attached directly to the object so GC can occur automatically
	cache=isNode?jQuery.cache:elem, // Only defining an ID for JS objects if its cache already exists allows
	// the code to shortcut on the same path as a DOM node with no cache
	id=isNode?elem[internalKey]:elem[internalKey]&&internalKey,isEvents=name==="events"; // Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if((!id||!cache[id]||!isEvents&&!pvt&&!cache[id].data)&&getByName&&_data===undefined){return;}if(!id){ // Only DOM nodes need a new unique ID for each element since their data
	// ends up in the global cache
	if(isNode){elem[internalKey]=id=++jQuery.uuid;}else {id=internalKey;}}if(!cache[id]){cache[id]={}; // Avoids exposing jQuery metadata on plain JS objects when the object
	// is serialized using JSON.stringify
	if(!isNode){cache[id].toJSON=jQuery.noop;}} // An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if((typeof name==="undefined"?"undefined":_typeof(name))==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else {cache[id].data=jQuery.extend(cache[id].data,name);}}privateCache=thisCache=cache[id]; // jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if(!pvt){if(!thisCache.data){thisCache.data={};}thisCache=thisCache.data;}if(_data!==undefined){thisCache[jQuery.camelCase(name)]=_data;} // Users should not attempt to inspect the internal events object using jQuery.data,
	// it is undocumented and subject to change. But does anyone listen? No.
	if(isEvents&&!thisCache[name]){return privateCache.events;} // Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if(getByName){ // First Try to find as-is property data
	ret=thisCache[name]; // Test for null|undefined property data
	if(ret==null){ // Try to find the camelCased property
	ret=thisCache[jQuery.camelCase(name)];}}else {ret=thisCache;}return ret;},removeData:function removeData(elem,name,pvt /* Internal Use Only */){if(!jQuery.acceptData(elem)){return;}var thisCache,i,l, // Reference to internal data cache key
	internalKey=jQuery.expando,isNode=elem.nodeType, // See jQuery.data for more information
	cache=isNode?jQuery.cache:elem, // See jQuery.data for more information
	id=isNode?elem[internalKey]:internalKey; // If there is already no cache entry for this object, there is no
	// purpose in continuing
	if(!cache[id]){return;}if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){ // Support array or space separated string names for data keys
	if(!jQuery.isArray(name)){ // try the string as a key before any manipulation
	if(name in thisCache){name=[name];}else { // split the camel cased version by spaces unless a key with the spaces exists
	name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else {name=name.split(" ");}}}for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];} // If there is no data left in the cache, we want to continue
	// and let the cache object itself get destroyed
	if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}} // See jQuery.data for more information
	if(!pvt){delete cache[id].data; // Don't destroy the parent cache unless the internal data object
	// had been the only thing left in it
	if(!isEmptyDataObject(cache[id])){return;}} // Browsers that fail expando deletion also refuse to delete expandos on
	// the window, but it will allow it on all other JS objects; other browsers
	// don't care
	// Ensure that `cache` is not a window object #10080
	if(jQuery.support.deleteExpando||!cache.setInterval){delete cache[id];}else {cache[id]=null;} // We destroyed the cache and need to eliminate the expando on the node to avoid
	// false lookups in the cache for entries that no longer exist
	if(isNode){ // IE does not allow us to delete expando properties from nodes,
	// nor does it have a removeAttribute function on Document nodes;
	// we must handle all of these cases
	if(jQuery.support.deleteExpando){delete elem[internalKey];}else if(elem.removeAttribute){elem.removeAttribute(internalKey);}else {elem[internalKey]=null;}}}, // For internal use only.
	_data:function _data(elem,name,data){return jQuery.data(elem,name,data,true);}, // A method for determining if a DOM node can handle the data expando
	acceptData:function acceptData(elem){if(elem.nodeName){var match=jQuery.noData[elem.nodeName.toLowerCase()];if(match){return !(match===true||elem.getAttribute("classid")!==match);}}return true;}});jQuery.fn.extend({data:function data(key,value){var parts,part,attr,name,l,elem=this[0],i=0,data=null; // Gets all values
	if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attr=elem.attributes;for(l=attr.length;i<l;i++){name=attr[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.substring(5));dataAttr(elem,name,data[name]);}}jQuery._data(elem,"parsedAttrs",true);}}return data;} // Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){jQuery.data(this,key);});}parts=key.split(".",2);parts[1]=parts[1]?"."+parts[1]:"";part=parts[1]+"!";return jQuery.access(this,function(value){if(value===undefined){data=this.triggerHandler("getData"+part,[parts[0]]); // Try to fetch any internally stored data first
	if(data===undefined&&elem){data=jQuery.data(elem,key);data=dataAttr(elem,key,data);}return data===undefined&&parts[1]?this.data(parts[0]):data;}parts[1]=value;this.each(function(){var self=jQuery(this);self.triggerHandler("setData"+part,parts);jQuery.data(this,key,value);self.triggerHandler("changeData"+part,parts);});},null,value,arguments.length>1,null,false);},removeData:function removeData(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){ // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:jQuery.isNumeric(data)?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} // Make sure we set the data so it isn't changed later
	jQuery.data(elem,key,data);}else {data=undefined;}}return data;} // checks a cache object for emptiness
	function isEmptyDataObject(obj){for(var name in obj){ // if the public data object is empty, the private is still empty
	if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}if(name!=="toJSON"){return false;}}return true;}function handleQueueMarkDefer(elem,type,src){var deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",defer=jQuery._data(elem,deferDataKey);if(defer&&(src==="queue"||!jQuery._data(elem,queueDataKey))&&(src==="mark"||!jQuery._data(elem,markDataKey))){ // Give room for hard-coded callbacks to fire first
	// and eventually mark/queue something else on the element
	setTimeout(function(){if(!jQuery._data(elem,queueDataKey)&&!jQuery._data(elem,markDataKey)){jQuery.removeData(elem,deferDataKey,true);defer.fire();}},0);}}jQuery.extend({_mark:function _mark(elem,type){if(elem){type=(type||"fx")+"mark";jQuery._data(elem,type,(jQuery._data(elem,type)||0)+1);}},_unmark:function _unmark(force,elem,type){if(force!==true){type=elem;elem=force;force=false;}if(elem){type=type||"fx";var key=type+"mark",count=force?0:(jQuery._data(elem,key)||1)-1;if(count){jQuery._data(elem,key,count);}else {jQuery.removeData(elem,key,true);handleQueueMarkDefer(elem,type,"mark");}}},queue:function queue(elem,type,data){var q;if(elem){type=(type||"fx")+"queue";q=jQuery._data(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!q||jQuery.isArray(data)){q=jQuery._data(elem,type,jQuery.makeArray(data));}else {q.push(data);}}return q||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift(),hooks={}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}jQuery._data(elem,type+".run",hooks);fn.call(elem,function(){jQuery.dequeue(elem,type);},hooks);}if(!queue.length){jQuery.removeData(elem,type+"queue "+type+".run",true);handleQueueMarkDefer(elem,type,"queue");}}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});}, // Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay:function delay(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,object){if(typeof type!=="string"){object=type;type=undefined;}type=type||"fx";var defer=jQuery.Deferred(),elements=this,i=elements.length,count=1,deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",tmp;function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}}while(i--){if(tmp=jQuery.data(elements[i],deferDataKey,undefined,true)||(jQuery.data(elements[i],queueDataKey,undefined,true)||jQuery.data(elements[i],markDataKey,undefined,true))&&jQuery.data(elements[i],deferDataKey,jQuery.Callbacks("once memory"),true)){count++;tmp.add(resolve);}}resolve();return defer.promise(object);}});var rclass=/[\n\t\r]/g,rspace=/\s+/,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea)?$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,nodeHook,boolHook,fixSpecified;jQuery.fn.extend({attr:function attr(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function prop(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){name=jQuery.propFix[name]||name;return this.each(function(){ // try/catch handles cases where IE balks (such as removing a property on window)
	try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function addClass(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}if(value&&typeof value==="string"){classNames=value.split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value;}else {setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(! ~setClass.indexOf(" "+classNames[c]+" ")){setClass+=classNames[c]+" ";}}elem.className=jQuery.trim(setClass);}}}}return this;},removeClass:function removeClass(value){var classNames,i,l,elem,className,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}if(value&&typeof value==="string"||value===undefined){classNames=(value||"").split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){if(value){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}elem.className=jQuery.trim(className);}else {elem.className="";}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value),isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}return this.each(function(){if(type==="string"){ // toggle individual class names
	var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);while(className=classNames[i++]){ // check each className given, space seperated list
	state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){ // store className if set
	jQuery._data(this,"__className__",this.className);} // toggle whole className
	this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function hasClass(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;},val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"? // handle most common string cases
	ret.replace(rreturn,""): // handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,self.val());}else {val=value;} // Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){ // attributes.value is undefined in Blackberry 4.7 but
	// uses .value. See #6932
	var val=elem.attributes.value;return !val||val.specified?elem.value:elem.text;}},select:{get:function get(elem){var value,i,max,option,index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one"; // Nothing was selected
	if(index<0){return null;} // Loop through all the selected options
	i=one?index:0;max=one?index+1:options.length;for(;i<max;i++){option=options[i]; // Don't return options that are disabled or in a disabled optgroup
	if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value=jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}} // Fixes Bug #2551 -- select.val() broken in IE after form.reset()
	if(one&&!values.length&&options.length){return jQuery(options[index]).val();}return values;},set:function set(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}return values;}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function attr(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType; // don't get/set attributes on text, comment and attribute nodes
	if(!elem||nType===3||nType===8||nType===2){return;}if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}notxml=nType!==1||!jQuery.isXMLDoc(elem); // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}else if(hooks&&"set" in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else {elem.setAttribute(name,""+value);return value;}}else if(hooks&&"get" in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret;}else {ret=elem.getAttribute(name); // Non-existent attributes return null, we normalize to undefined
	return ret===null?undefined:ret;}},removeAttr:function removeAttr(elem,value){var propName,attrNames,name,l,isBool,i=0;if(value&&elem.nodeType===1){attrNames=value.toLowerCase().split(rspace);l=attrNames.length;for(;i<l;i++){name=attrNames[i];if(name){propName=jQuery.propFix[name]||name;isBool=rboolean.test(name); // See #9699 for explanation of this approach (setting first, then removal)
	// Do not do this for boolean attributes (see #10870)
	if(!isBool){jQuery.attr(elem,name,"");}elem.removeAttribute(getSetAttribute?name:propName); // Set corresponding property to false for boolean attributes
	if(isBool&&propName in elem){elem[propName]=false;}}}}},attrHooks:{type:{set:function set(elem,value){ // We can't allow the type property to be changed (since it causes problems in IE)
	if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){ // Setting the type on a radio button after the value resets the value in IE6-9
	// Reset value to it's default in case type is set after value
	// This is for element creation
	var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}, // Use the value property for back compat
	// Use the nodeHook for button elements in IE6/7 (#1954)
	value:{get:function get(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name);}return name in elem?elem.value:null;},set:function set(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name);} // Does not return so that setAttribute is also used
	elem.value=value;}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function prop(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; // don't get/set properties on text, comment and attribute nodes
	if(!elem||nType===3||nType===8||nType===2){return;}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){ // Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else {return elem[name]=value;}}else {if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else {return elem[name];}}},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}}); // Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
	jQuery.attrHooks.tabindex=jQuery.propHooks.tabIndex; // Hook for boolean attributes
	boolHook={get:function get(elem,name){ // Align boolean attributes with corresponding properties
	// Fall back to attribute presence where some booleans are not supported
	var attrNode,property=jQuery.prop(elem,name);return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined;},set:function set(elem,value,name){var propName;if(value===false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else { // value is true since we know at this point it's type boolean and not false
	// Set boolean attributes to the same name and set the DOM property
	propName=jQuery.propFix[name]||name;if(propName in elem){ // Only set the IDL specifically if it already exists on the element
	elem[propName]=true;}elem.setAttribute(name,name.toLowerCase());}return name;}}; // IE6/7 do not support getting/setting some attributes with get/setAttribute
	if(!getSetAttribute){fixSpecified={name:true,id:true,coords:true}; // Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook=jQuery.valHooks.button={get:function get(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&(fixSpecified[name]?ret.nodeValue!=="":ret.specified)?ret.nodeValue:undefined;},set:function set(elem,value,name){ // Set the existing or create a new attribute node
	var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret);}return ret.nodeValue=value+"";}}; // Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set=nodeHook.set; // Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function set(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});}); // Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function set(elem,value,name){if(value===""){value="false";}nodeHook.set(elem,value,name);}};} // Some attributes require a special call on IE
	if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function get(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret;}});});}if(!jQuery.support.style){jQuery.attrHooks.style={get:function get(elem){ // Return undefined in the case of empty string
	// Normalize to lowercase since IE uppercases css property names
	return elem.style.cssText.toLowerCase()||undefined;},set:function set(elem,value){return elem.style.cssText=""+value;}};} // Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function get(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex; // Make sure that it also works with optgroups, see #5701
	if(parent.parentNode){parent.parentNode.selectedIndex;}}return null;}});} // IE6/7 call enctype encoding
	if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";} // Radios and checkboxes getter/setter
	if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function get(elem){ // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
	return elem.getAttribute("value")===null?"on":elem.value;}};});}jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0;}}});});var rformElems=/^(?:textarea|input|select)$/i,rtypenamespace=/^([^\.]*)?(?:\.(.+))?$/,rhoverHack=/(?:^|\s)hover(\.\S+)?\b/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rquickIs=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,quickParse=function quickParse(selector){var quick=rquickIs.exec(selector);if(quick){ //   0  1    2   3
	// [ _, tag, id, class ]
	quick[1]=(quick[1]||"").toLowerCase();quick[3]=quick[3]&&new RegExp("(?:^|\\s)"+quick[3]+"(?:\\s|$)");}return quick;},quickIs=function quickIs(elem,m){var attrs=elem.attributes||{};return (!m[1]||elem.nodeName.toLowerCase()===m[1])&&(!m[2]||(attrs.id||{}).value===m[2])&&(!m[3]||m[3].test((attrs["class"]||{}).value));},hoverHack=function hoverHack(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1");}; /*
	     * Helper functions for managing events -- not part of the public interface.
	     * Props to Dean Edwards' addEvent library for many of the ideas.
	     */jQuery.event={add:function add(elem,types,handler,data,selector){var elemData,_eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,quick,handlers,special; // Don't attach events to noData or text/comment nodes (allow plain objects tho)
	if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	events=elemData.events;if(!events){elemData.events=events={};}_eventHandle=elemData.handle;if(!_eventHandle){elemData.handle=_eventHandle=function eventHandle(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(_eventHandle.elem,arguments):undefined;}; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
	_eventHandle.elem=elem;} // Handle multiple events separated by a space
	// jQuery(...).bind("mouseover mouseout", fn);
	types=jQuery.trim(hoverHack(types)).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=tns[1];namespaces=(tns[2]||"").split(".").sort(); // If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{}; // If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type; // Update special based on newly reset type
	special=jQuery.event.special[type]||{}; // handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,quick:selector&&quickParse(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	handlers=events[type];if(!handlers){handlers=events[type]=[];handlers.delegateCount=0; // Only use addEventListener/attachEvent if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,_eventHandle)===false){ // Bind the global event handler to the element
	if(elem.addEventListener){elem.addEventListener(type,_eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,_eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;} // Nullify elem to prevent memory leaks in IE
	elem=null;},global:{}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var elemData=jQuery.hasData(elem)&&jQuery._data(elem),t,tns,type,origType,namespaces,origCount,j,events,special,handle,eventType,handleObj;if(!elemData||!(events=elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types=jQuery.trim(hoverHack(types||"")).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=origType=tns[1];namespaces=tns[2]; // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;eventType=events[type]||[];origCount=eventType.length;namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null; // Remove matching events
	for(j=0;j<eventType.length;j++){handleObj=eventType[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!namespaces||namespaces.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){eventType.splice(j--,1);if(handleObj.selector){eventType.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){handle=elemData.handle;if(handle){handle.elem=null;} // removeData also checks for emptiness and clears the expando if empty
	// so use it instead of delete
	jQuery.removeData(elem,["events","handle"],true);}}, // Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function trigger(event,data,elem,onlyHandlers){ // Don't do events on text and comment nodes
	if(elem&&(elem.nodeType===3||elem.nodeType===8)){return;} // Event object or event type
	var type=event.type||event,namespaces=[],cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType; // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf("!")>=0){ // Exclusive events trigger only for the exact event (no namespaces)
	type=type.slice(0,-1);exclusive=true;}if(type.indexOf(".")>=0){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){ // No jQuery handlers for this event type, and it can't have inline handlers
	return;} // Caller can pass in an Event, Object, or just an event type string
	event=(typeof event==="undefined"?"undefined":_typeof(event))==="object"? // jQuery.Event object
	event[jQuery.expando]?event: // Object literal
	new jQuery.Event(type,event): // Just the event type (string)
	new jQuery.Event(type);event.type=type;event.isTrigger=true;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;ontype=type.indexOf(":")<0?"on"+type:""; // Handle a global trigger
	if(!elem){ // TODO: Stop taunting the data cache; remove global events and always attach to document
	cache=jQuery.cache;for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true);}}return;} // Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data=data!=null?jQuery.makeArray(data):[];data.unshift(event); // Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(special.trigger&&special.trigger.apply(elem,data)===false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	eventPath=[[elem,special.bindType||type]];if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;cur=rfocusMorph.test(bubbleType+type)?elem:elem.parentNode;old=null;for(;cur;cur=cur.parentNode){eventPath.push([cur,bubbleType]);old=cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(old&&old===elem.ownerDocument){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType]);}} // Fire handlers on the event path
	for(i=0;i<eventPath.length&&!event.isPropagationStopped();i++){cur=eventPath[i][0];event.type=eventPath[i][1];handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);} // Note that this is a bare JS function and not a jQuery handler
	handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply(cur,data)===false){event.preventDefault();}}event.type=type; // If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Can't use an .isFunction() check here because IE6/7 fails that test.
	// Don't do default actions on window, that's where global variables be (#6170)
	// IE<9 dies on focus/blur to hidden element (#1486)
	if(ontype&&elem[type]&&(type!=="focus"&&type!=="blur"||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	old=elem[ontype];if(old){elem[ontype]=null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(old){elem[ontype]=old;}}}}return event.result;},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event||window.event);var handlers=(jQuery._data(this,"events")||{})[event.type]||[],delegateCount=handlers.delegateCount,args=[].slice.call(arguments,0),run_all=!event.exclusive&&!event.namespace,special=jQuery.event.special[event.type]||{},handlerQueue=[],i,j,cur,jqcur,ret,selMatch,matched,matches,handleObj,sel,related; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} // Determine handlers that should run if there are delegated events
	// Avoid non-left-click bubbling in Firefox (#3861)
	if(delegateCount&&!(event.button&&event.type==="click")){ // Pregenerate a single jQuery object for reuse with .is()
	jqcur=jQuery(this);jqcur.context=this.ownerDocument||this;for(cur=event.target;cur!=this;cur=cur.parentNode||this){ // Don't process events on disabled elements (#6911, #8165)
	if(cur.disabled!==true){selMatch={};matches=[];jqcur[0]=cur;for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector;if(selMatch[sel]===undefined){selMatch[sel]=handleObj.quick?quickIs(cur,handleObj.quick):jqcur.is(sel);}if(selMatch[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,matches:matches});}}}} // Add the remaining (directly-bound) handlers
	if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)});} // Run delegates first; they may want to stop propagation beneath us
	for(i=0;i<handlerQueue.length&&!event.isPropagationStopped();i++){matched=handlerQueue[i];event.currentTarget=matched.elem;for(j=0;j<matched.matches.length&&!event.isImmediatePropagationStopped();j++){handleObj=matched.matches[j]; // Triggered event must either 1) be non-exclusive and have no namespace, or
	// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
	if(run_all||!event.namespace&&!handleObj.namespace||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;event.handleObj=handleObj;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;}, // Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);} // Add relatedTarget, if necessary
	if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=jQuery.Event(originalEvent);for(i=copy.length;i;){prop=copy[--i];event[prop]=originalEvent[prop];} // Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
	if(!event.target){event.target=originalEvent.srcElement||document;} // Target should not be a text node (#504, Safari)
	if(event.target.nodeType===3){event.target=event.target.parentNode;} // For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
	if(event.metaKey===undefined){event.metaKey=event.ctrlKey;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{ready:{ // Make sure the ready event is setup
	setup:jQuery.bindReady},load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function setup(data,namespaces,eventHandle){ // We only want to do this special case on windows
	if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function teardown(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}},simulate:function simulate(type,elem,event,bubble){ // Piggyback on a donor event to simulate a different one.
	// Fake originalEvent to avoid donor's stopPropagation, but if the
	// simulated event prevents default then we do the same on the donor.
	var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else {jQuery.event.dispatch.call(elem,e);}if(e.isDefaultPrevented()){event.preventDefault();}}}; // Some plugins are using, but it's undocumented/deprecated and will be removed.
	// The 1.7 special event interface should provide all the hooks needed now.
	jQuery.event.handle=jQuery.event.dispatch;jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){if(elem.detachEvent){elem.detachEvent("on"+type,handle);}};jQuery.Event=function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse; // Event type
	}else {this.type=src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now(); // Mark it as fixed
	this[jQuery.expando]=true;};function returnFalse(){return false;}function returnTrue(){return true;} // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={preventDefault:function preventDefault(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;} // if preventDefault exists run it on the original event
	if(e.preventDefault){e.preventDefault(); // otherwise set the returnValue property of the original event to false (IE)
	}else {e.returnValue=false;}},stopPropagation:function stopPropagation(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;} // if stopPropagation exists run it on the original event
	if(e.stopPropagation){e.stopPropagation();} // otherwise set the cancelBubble property of the original event to true (IE)
	e.cancelBubble=true;},stopImmediatePropagation:function stopImmediatePropagation(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse}; // Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector,ret; // For mousenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};}); // IE submit delegation
	if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function setup(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Lazy-add a submit handler when a descendant form may potentially be submitted
	jQuery.event.add(this,"click._submit keypress._submit",function(e){ // Node name check avoids a VML-related crash in IE (#9807)
	var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!form._submit_attached){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});form._submit_attached=true;}}); // return undefined since we don't need an event listener
	},postDispatch:function postDispatch(event){ // If form was submitted by the user, bubble the event up the tree
	if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function teardown(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
	jQuery.event.remove(this,"._submit");}};} // IE change delegation and checkbox/radio fix
	if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function setup(){if(rformElems.test(this.nodeName)){ // IE doesn't fire change on a check/radio until blur; trigger it on click
	// after a propertychange. Eat the blur-change in special.change.handle.
	// This still fires onchange a second time for check/radio after blur.
	if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;jQuery.event.simulate("change",this,event,true);}});}return false;} // Delegated event; lazy-add a change handler on descendant inputs
	jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!elem._change_attached){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});elem._change_attached=true;}});},handle:function handle(event){var elem=event.target; // Swallow native change events from checkbox/radio, we already triggered them above
	if(this!==elem||event.isSimulated||event.isTrigger||elem.type!=="radio"&&elem.type!=="checkbox"){return event.handleObj.handler.apply(this,arguments);}},teardown:function teardown(){jQuery.event.remove(this,"._change");return rformElems.test(this.nodeName);}};} // Create "bubbling" focus and blur events
	if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler while someone wants focusin/focusout
	var attaches=0,handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function setup(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function teardown(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}jQuery.fn.extend({on:function on(types,selector,data,fn, /*INTERNAL*/one){var origFn,type; // Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-Object, selector, data )
	if(typeof selector!=="string"){ // && selector != null
	// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){this.on(type,selector,data,types[type],one);}return this;}if(data==null&&fn==null){ // ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){ // ( types, selector, fn )
	fn=data;data=undefined;}else { // ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return this;}if(one===1){origFn=fn;fn=function fn(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function one(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function off(types,selector,fn){if(types&&types.preventDefault&&types.handleObj){ // ( event )  dispatched jQuery.Event
	var handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-object [, selector] )
	for(var type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){ // ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},live:function live(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this;},die:function die(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);return this;},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length==1?this.off(selector,"**"):this.off(types,selector,fn);},trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true);}},toggle:function toggle(fn){ // Save reference to arguments for access in closure
	var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function toggler(event){ // Figure out which function to execute
	var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1); // Make sure that clicks stop
	event.preventDefault(); // and execute the function
	return args[lastToggle].apply(this,arguments)||false;}; // link all the functions, so any of them can unbind this click handler
	toggler.guid=guid;while(i<args.length){args[i++].guid=guid;}return this.click(toggler);},hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks;}if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks;}}); /*!
	     * Sizzle CSS Selector Engine
	     *  Copyright 2011, The Dojo Foundation
	     *  Released under the MIT, BSD, and GPL Licenses.
	     *  More information: http://sizzlejs.com/
	     */(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,expando="sizcache"+(Math.random()+'').replace('.',''),done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rReturn=/\r\n/g,rNonWord=/\W/; // Here we check if the JavaScript engine is using some sort of
	// optimization where it does not always call our comparision
	// function. If that is the case, discard the hasDuplicate value.
	//   Thus far that includes Google Chrome.
	[0,0].sort(function(){baseHasDuplicate=false;return 0;});var _Sizzle2=function Sizzle(selector,context,results,seed){results=results||[];context=context||document;var origContext=context;if(context.nodeType!==1&&context.nodeType!==9){return [];}if(!selector||typeof selector!=="string"){return results;}var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=_Sizzle2.isXML(context),parts=[],soFar=selector; // Reset the position of the chunker regexp (start from head)
	do {chunker.exec("");m=chunker.exec(soFar);if(m){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}}while(m);if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context,seed);}else {set=Expr.relative[parts[0]]?[context]:_Sizzle2(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}set=posProcess(selector,set,seed);}}}else { // Take a shortcut and set the context if the root selector is an ID
	// (but not if it'll be faster if the inner selector is an ID)
	if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=_Sizzle2.find(parts.shift(),context,contextXML);context=ret.expr?_Sizzle2.filter(ret.expr,ret.set)[0]:ret.set[0];}if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:_Sizzle2.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?_Sizzle2.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else {prune=false;}while(parts.length){cur=parts.pop();pop=cur;if(!Expr.relative[cur]){cur="";}else {pop=parts.pop();}if(pop==null){pop=context;}Expr.relative[cur](checkSet,pop,contextXML);}}else {checkSet=parts=[];}}if(!checkSet){checkSet=set;}if(!checkSet){_Sizzle2.error(cur||selector);}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&_Sizzle2.contains(context,checkSet[i]))){results.push(set[i]);}}}else {for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else {makeArray(checkSet,results);}if(extra){_Sizzle2(extra,origContext,results,seed);_Sizzle2.uniqueSort(results);}return results;};_Sizzle2.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}return results;};_Sizzle2.matches=function(expr,set){return _Sizzle2(expr,null,null,set);};_Sizzle2.matchesSelector=function(node,expr){return _Sizzle2(expr,null,null,[node]).length>0;};_Sizzle2.find=function(expr,context,isXML){var set,i,len,match,type,left;if(!expr){return [];}for(i=0,len=Expr.order.length;i<len;i++){type=Expr.order[i];if(match=Expr.leftMatch[type].exec(expr)){left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];}return {set:set,expr:expr};};_Sizzle2.filter=function(expr,set,inplace,not){var match,anyFound,type,found,item,filter,left,i,pass,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&_Sizzle2.isXML(set[0]);while(expr&&set.length){for(type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){filter=Expr.filter[type];left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}if(curLoop===result){result=[];}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}if(match){for(i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);pass=not^found;if(inplace&&found!=null){if(pass){anyFound=true;}else {curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}if(found!==undefined){if(!inplace){curLoop=result;}expr=expr.replace(Expr.match[type],"");if(!anyFound){return [];}break;}}} // Improper expression
	if(expr===old){if(anyFound==null){_Sizzle2.error(expr);}else {break;}}old=expr;}return curLoop;};_Sizzle2.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);}; /**
	         * Utility function for retreiving the text value of an array of DOM nodes
	         * @param {Array|Element} elem
	         */var getText=_Sizzle2.getText=function(elem){var i,node,nodeType=elem.nodeType,ret="";if(nodeType){if(nodeType===1||nodeType===9||nodeType===11){ // Use textContent || innerText for elements
	if(typeof elem.textContent==='string'){return elem.textContent;}else if(typeof elem.innerText==='string'){ // Replace IE's carriage returns
	return elem.innerText.replace(rReturn,'');}else { // Traverse it's children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}}else { // If no nodeType, this is expected to be an array
	for(i=0;node=elem[i];i++){ // Do not traverse comment nodes
	if(node.nodeType!==8){ret+=getText(node);}}}return ret;};var Expr=_Sizzle2.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function href(elem){return elem.getAttribute("href");},type:function type(elem){return elem.getAttribute("type");}},relative:{"+":function _(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}for(var i=0,l=checkSet.length,elem;i<l;i++){if(elem=checkSet[i]){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}if(isPartStrNotTag){_Sizzle2.filter(part,checkSet,true);}},">":function _(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();for(;i<l;i++){elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else {for(;i<l;i++){elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}if(isPartStr){_Sizzle2.filter(part,checkSet,true);}}},"":function _(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function _(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function ID(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	return m&&m.parentNode?[m]:[];}},NAME:function NAME(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}return ret.length===0?null:ret;}},TAG:function TAG(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);}}},preFilter:{CLASS:function CLASS(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";if(isXML){return match;}for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}return false;},ID:function ID(match){return match[1].replace(rBackslash,"");},TAG:function TAG(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();},CHILD:function CHILD(match){if(match[1]==="nth"){if(!match[2]){_Sizzle2.error(match[0]);}match[2]=match[2].replace(/^\+|\s*/g,''); // parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
	var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]); // calculate the numbers (first)n+(last) including if they are negative
	match[2]=test[1]+(test[2]||1)-0;match[3]=test[3]-0;}else if(match[2]){_Sizzle2.error(match[0]);} // TODO: Move to normal caching system
	match[0]=done++;return match;},ATTR:function ATTR(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];} // Handle if an un-quoted value was used
	match[4]=(match[4]||match[5]||"").replace(rBackslash,"");if(match[2]==="~="){match[4]=" "+match[4]+" ";}return match;},PSEUDO:function PSEUDO(match,curLoop,inplace,result,not){if(match[1]==="not"){ // If we're dealing with a complex expression, or a simple one
	if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=_Sizzle2(match[3],null,null,curLoop);}else {var ret=_Sizzle2.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}return match;},POS:function POS(match){match.unshift(true);return match;}},filters:{enabled:function enabled(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function disabled(elem){return elem.disabled===true;},checked:function checked(elem){return elem.checked===true;},selected:function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},parent:function parent(elem){return !!elem.firstChild;},empty:function empty(elem){return !elem.firstChild;},has:function has(elem,i,match){return !!_Sizzle2(match[3],elem).length;},header:function header(elem){return (/h\d/i.test(elem.nodeName));},text:function text(elem){var attr=elem.getAttribute("type"),type=elem.type; // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
	// use getAttribute instead to test this case
	return elem.nodeName.toLowerCase()==="input"&&"text"===type&&(attr===type||attr===null);},radio:function radio(elem){return elem.nodeName.toLowerCase()==="input"&&"radio"===elem.type;},checkbox:function checkbox(elem){return elem.nodeName.toLowerCase()==="input"&&"checkbox"===elem.type;},file:function file(elem){return elem.nodeName.toLowerCase()==="input"&&"file"===elem.type;},password:function password(elem){return elem.nodeName.toLowerCase()==="input"&&"password"===elem.type;},submit:function submit(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&"submit"===elem.type;},image:function image(elem){return elem.nodeName.toLowerCase()==="input"&&"image"===elem.type;},reset:function reset(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&"reset"===elem.type;},button:function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&"button"===elem.type||name==="button";},input:function input(elem){return (/input|select|textarea|button/i.test(elem.nodeName));},focus:function focus(elem){return elem===elem.ownerDocument.activeElement;}},setFilters:{first:function first(elem,i){return i===0;},last:function last(elem,i,match,array){return i===array.length-1;},even:function even(elem,i){return i%2===0;},odd:function odd(elem,i){return i%2===1;},lt:function lt(elem,i,match){return i<match[3]-0;},gt:function gt(elem,i,match){return i>match[3]-0;},nth:function nth(elem,i,match){return match[3]-0===i;},eq:function eq(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function PSEUDO(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return (elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;}}return true;}else {_Sizzle2.error(name);}},CHILD:function CHILD(elem,match){var first,last,doneName,parent,cache,count,diff,type=match[1],node=elem;switch(type){case "only":case "first":while(node=node.previousSibling){if(node.nodeType===1){return false;}}if(type==="first"){return true;}node=elem; /* falls through */case "last":while(node=node.nextSibling){if(node.nodeType===1){return false;}}return true;case "nth":first=match[2];last=match[3];if(first===1&&last===0){return true;}doneName=match[0];parent=elem.parentNode;if(parent&&(parent[expando]!==doneName||!elem.nodeIndex)){count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}parent[expando]=doneName;}diff=elem.nodeIndex-last;if(first===0){return diff===0;}else {return diff%first===0&&diff/first>=0;}}},ID:function ID(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function TAG(elem,match){return match==="*"&&elem.nodeType===1||!!elem.nodeName&&elem.nodeName.toLowerCase()===match;},CLASS:function CLASS(elem,match){return (" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function ATTR(elem,match){var name=match[1],result=_Sizzle2.attr?_Sizzle2.attr(elem,name):Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":!type&&_Sizzle2.attr?result!=null:type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function POS(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS,fescape=function fescape(all,num){return "\\"+(num-0+1);};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));} // Expose origPOS
	// "global" as in regardless of relation to brackets/parens
	Expr.match.globalPOS=origPOS;var makeArray=function makeArray(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}return array;}; // Perform a simple check to determine if the browser is capable of
	// converting a NodeList to an array using builtin methods.
	// Also verifies that the returned array holds DOM nodes
	// (which is not the case in the Blackberry browser)
	try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType; // Provide a fallback method if it does not work
	}catch(e){makeArray=function makeArray(array,results){var i=0,ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else {if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);}}else {for(;array[i];i++){ret.push(array[i]);}}}return ret;};}var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;return 0;}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}return a.compareDocumentPosition(b)&4?-1:1;};}else {sortOrder=function sortOrder(a,b){ // The nodes are identical, we can exit early
	if(a===b){hasDuplicate=true;return 0; // Fallback to using sourceIndex (in IE) if it's available on both nodes
	}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup; // If the nodes are siblings (or identical) we can do a quick check
	if(aup===bup){return siblingCheck(a,b); // If no parents were found then the nodes are disconnected
	}else if(!aup){return -1;}else if(!bup){return 1;} // Otherwise they're somewhere else in the tree so we need
	// to build up a full list of the parentNodes for comparison
	while(cur){ap.unshift(cur);cur=cur.parentNode;}cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}al=ap.length;bl=bp.length; // Start walking down the tree looking for a discrepancy
	for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}} // We ended someplace up the tree so do a sibling check
	return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};siblingCheck=function siblingCheck(a,b,ret){if(a===b){return ret;}var cur=a.nextSibling;while(cur){if(cur===b){return -1;}cur=cur.nextSibling;}return 1;};} // Check to see if the browser returns elements by name when
	// querying by getElementById (and provide a workaround)
	(function(){ // We're going to inject a fake input element with a specified name
	var form=document.createElement("div"),id="script"+new Date().getTime(),root=document.documentElement;form.innerHTML="<a name='"+id+"'/>"; // Inject it into the root element, check its status, and remove it quickly
	root.insertBefore(form,root.firstChild); // The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}root.removeChild(form); // release memory in IE
	root=form=null;})();(function(){ // Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")
	// Create a fake element
	var div=document.createElement("div");div.appendChild(document.createComment("")); // Make sure no comments are found
	if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]); // Filter out possible comments
	if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}results=tmp;}return results;};} // Check to see if an attribute returns normalized href attributes
	div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};} // release memory in IE
	div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=_Sizzle2,div=document.createElement("div"),id="__sizzle__";div.innerHTML="<p class='TEST'></p>"; // Safari can't handle uppercase or unicode characters when
	// in quirks mode.
	if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}_Sizzle2=function _Sizzle(query,context,extra,seed){context=context||document; // Only use querySelectorAll on non-XML documents
	// (ID selectors don't work in non-HTML documents)
	if(!seed&&!_Sizzle2.isXML(context)){ // See if we find a selector to speed up
	var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);if(match&&(context.nodeType===1||context.nodeType===9)){ // Speed-up: Sizzle("TAG")
	if(match[1]){return makeArray(context.getElementsByTagName(query),extra); // Speed-up: Sizzle(".CLASS")
	}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);}}if(context.nodeType===9){ // Speed-up: Sizzle("body")
	// The body element only exists once, optimize finding it
	if(query==="body"&&context.body){return makeArray([context.body],extra); // Speed-up: Sizzle("#ID")
	}else if(match&&match[3]){var elem=context.getElementById(match[3]); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	if(elem&&elem.parentNode){ // Handle the case where IE and Opera return items
	// by name instead of ID
	if(elem.id===match[3]){return makeArray([elem],extra);}}else {return makeArray([],extra);}}try{return makeArray(context.querySelectorAll(query),extra);}catch(qsaError){} // qSA works strangely on Element-rooted queries
	// We can work around this by specifying an extra ID on the root
	// and working up from there (Thanks to Andrew Dupont for the technique)
	// IE 8 doesn't work on object elements
	}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);if(!old){context.setAttribute("id",nid);}else {nid=nid.replace(/'/g,"\\$&");}if(relativeHierarchySelector&&hasParent){context=context.parentNode;}try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);}}catch(pseudoError){}finally {if(!old){oldContext.removeAttribute("id");}}}}return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){_Sizzle2[prop]=oldSizzle[prop];} // release memory in IE
	div=null;})();}(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector;if(matches){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9 fails this)
	var disconnectedMatch=!matches.call(document.createElement("div"),"div"),pseudoWorks=false;try{ // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(document.documentElement,"[test!='']:sizzle");}catch(pseudoError){pseudoWorks=true;}_Sizzle2.matchesSelector=function(node,expr){ // Make sure that attribute selectors are quoted
	expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!_Sizzle2.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){var ret=matches.call(node,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret||!disconnectedMatch|| // As well, disconnected nodes are said to be in a document
	// fragment in IE 9, so check for that
	node.document&&node.document.nodeType!==11){return ret;}}}catch(e){}}return _Sizzle2(expr,null,null,[node]).length>0;};}})();(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>"; // Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;} // Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}}; // release memory in IE
	div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];break;}if(elem.nodeType===1&&!isXML){elem[expando]=doneName;elem.sizset=i;}if(elem.nodeName.toLowerCase()===cur){match=elem;break;}elem=elem[dir];}checkSet[i]=match;}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];break;}if(elem.nodeType===1){if(!isXML){elem[expando]=doneName;elem.sizset=i;}if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(_Sizzle2.filter(cur,[elem]).length>0){match=elem;break;}}elem=elem[dir];}checkSet[i]=match;}}}if(document.documentElement.contains){_Sizzle2.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);};}else if(document.documentElement.compareDocumentPosition){_Sizzle2.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);};}else {_Sizzle2.contains=function(){return false;};}_Sizzle2.isXML=function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function posProcess(selector,context,seed){var match,tmpSet=[],later="",root=context.nodeType?[context]:context; // Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while(match=Expr.match.PSEUDO.exec(selector)){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){_Sizzle2(selector,root[i],tmpSet,seed);}return _Sizzle2.filter(later,tmpSet);}; // EXPOSE
	// Override sizzle attribute retrieval
	_Sizzle2.attr=jQuery.attr;_Sizzle2.selectors.attrMap={};jQuery.find=_Sizzle2;jQuery.expr=_Sizzle2.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=_Sizzle2.uniqueSort;jQuery.text=_Sizzle2.getText;jQuery.isXMLDoc=_Sizzle2.isXML;jQuery.contains=_Sizzle2.contains;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/, // Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector=/,/,isSimple=/^.[^:#\[\.,]*$/,slice=Array.prototype.slice,POS=jQuery.expr.match.globalPOS, // methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function find(selector){var self=this,i,l;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true;}}});}var ret=this.pushStack("","find",selector),length,n,r;for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){ // Make sure that the results are unique
	for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}return ret;},has:function has(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function not(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function filter(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function is(selector){return !!selector&&(typeof selector==="string"? // If this is a positional selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	POS.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function closest(selectors,context){var ret=[],i,l,cur=this[0]; // Array (deprecated as of jQuery 1.7)
	if(jQuery.isArray(selectors)){var level=1;while(cur&&cur.ownerDocument&&cur!==context){for(i=0;i<selectors.length;i++){if(jQuery(cur).is(selectors[i])){ret.push({selector:selectors[i],elem:cur,level:level});}}cur=cur.parentNode;level++;}return ret;} // String
	var pos=POS.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(i=0,l=this.length;i<l;i++){cur=this[i];while(cur){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}else {cur=cur.parentNode;if(!cur||!cur.ownerDocument||cur===context||cur.nodeType===11){break;}}}}ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);}, // Determine the position of an element within
	// the matched set of elements
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.prevAll().length:-1;} // index in selector
	if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));} // Locate the position of the desired element
	return jQuery.inArray( // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem,this);},add:function add(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function andSelf(){return this.add(this.prevObject);}}); // A painfully simple check to see if an element is disconnected
	// from a document (should be improved, where feasible).
	function isDisconnected(node){return !node||!node.parentNode||node.parentNode.nodeType===11;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function next(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function prev(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function nextAll(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function prevAll(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function siblings(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return jQuery.sibling(elem.firstChild);},contents:function contents(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}return this.pushStack(ret,name,slice.call(arguments).join(","));};});jQuery.extend({filter:function filter(expr,elems,not){if(not){expr=":not("+expr+")";}return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function dir(elem,_dir,until){var matched=[],cur=elem[_dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}cur=cur[_dir];}return matched;},nth:function nth(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}return cur;},sibling:function sibling(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}return r;}}); // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,keep){ // Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return elem===qualifier===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else {qualifier=jQuery.filter(qualifier,filtered);}}return jQuery.grep(elements,function(elem,i){return jQuery.inArray(elem,qualifier)>=0===keep;});}function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}return safeFrag;}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"), // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)/,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document);wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td; // IE can't serialize <link> and <script> tags normally
	if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}jQuery.fn.extend({text:function text(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},wrapAll:function wrapAll(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function append(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function prepend(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function before(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery.clean(arguments);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function after(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery.clean(arguments));return set;}}, // keepData is for internal use only--do not document
	remove:function remove(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}if(elem.parentNode){elem.parentNode.removeChild(elem);}}}return this;},empty:function empty(){for(var i=0,elem;(elem=this[i])!=null;i++){ // Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));} // Remove any remaining nodes
	while(elem.firstChild){elem.removeChild(elem.firstChild);}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):null;}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){ // Remove element nodes and prevent memory leaks
	elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));elem.innerHTML=value;}}elem=0; // If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(value){if(this[0]&&this[0].parentNode){ // Make sure that the elements are removed from the DOM before they are inserted
	// this can help fix replacing a parent with child elements
	if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}if(typeof value!=="string"){value=jQuery(value).detach();}return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else {jQuery(parent).append(value);}});}else {return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;}},detach:function detach(selector){return this.remove(selector,true);},domManip:function domManip(args,table,callback){var results,first,fragment,parent,value=args[0],scripts=[]; // We can't cloneNode fragments that contain checked, in WebKit
	if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}if(this[0]){parent=value&&value.parentNode; // If we're in a fragment, just use that instead of building a new one
	if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else {results=jQuery.buildFragment(args,this,scripts);}fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else {first=fragment.firstChild;}if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length,lastIndex=l-1;i<l;i++){callback.call(table?root(this[i],first):this[i], // Make sure that we do not leak memory by inadvertently discarding
	// the original fragment (which might have attached data) instead of
	// using it; in addition, use the original fragment object for the last
	// item instead of first because it can end up being emptied incorrectly
	// in certain situations (Bug #8070).
	// Fragments from the fragment cache must always be cloned and never used
	// in place.
	results.cacheable||l>1&&i<lastIndex?jQuery.clone(fragment,true,true):fragment);}}if(scripts.length){jQuery.each(scripts,function(i,elem){if(elem.src){jQuery.ajax({type:"GET",global:false,url:elem.src,async:false,dataType:"script"});}else {jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,"/*$0*/"));}if(elem.parentNode){elem.parentNode.removeChild(elem);}});}}return this;}});function root(elem,cur){return jQuery.nodeName(elem,"table")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}} // make the cloned public data object a copy from the original
	if(curData.data){curData.data=jQuery.extend({},curData.data);}}function cloneFixAttributes(src,dest){var nodeName; // We do not need to do anything for non-Elements
	if(dest.nodeType!==1){return;} // clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if(dest.clearAttributes){dest.clearAttributes();} // mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if(dest.mergeAttributes){dest.mergeAttributes(src);}nodeName=dest.nodeName.toLowerCase(); // IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if(nodeName==="object"){dest.outerHTML=src.outerHTML;}else if(nodeName==="input"&&(src.type==="checkbox"||src.type==="radio")){ // IE6-8 fails to persist the checked state of a cloned checkbox
	// or radio button. Worse, IE6-7 fail to give the cloned element
	// a checked appearance if the defaultChecked value isn't also set
	if(src.checked){dest.defaultChecked=dest.checked=src.checked;} // IE6-7 get confused and end up setting the value of a cloned
	// checkbox/radio button to an empty string instead of "on"
	if(dest.value!==src.value){dest.value=src.value;} // IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	}else if(nodeName==="option"){dest.selected=src.defaultSelected; // IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue; // IE blanks contents when cloning scripts
	}else if(nodeName==="script"&&dest.text!==src.text){dest.text=src.text;} // Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute(jQuery.expando); // Clear flags for bubbling special change/submit events, they must
	// be reattached when the newly cloned events are first activated
	dest.removeAttribute("_submit_attached");dest.removeAttribute("_change_attached");}jQuery.buildFragment=function(args,nodes,scripts){var fragment,cacheable,cacheresults,doc,first=args[0]; // nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if(nodes&&nodes[0]){doc=nodes[0].ownerDocument||nodes[0];} // Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if(!doc.createDocumentFragment){doc=document;} // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if(args.length===1&&typeof first==="string"&&first.length<512&&doc===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(jQuery.support.html5Clone||!rnoshimcache.test(first))){cacheable=true;cacheresults=jQuery.fragments[first];if(cacheresults&&cacheresults!==1){fragment=cacheresults;}}if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}if(cacheable){jQuery.fragments[first]=cacheresults?fragment:1;}return {fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else {for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*");}else if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*");}else {return [];}} // Used in clean, fixes the defaultChecked property
	function fixDefaultChecked(elem){if(elem.type==="checkbox"||elem.type==="radio"){elem.defaultChecked=elem.checked;}} // Finds all inputs and passes them to fixDefaultChecked
	function findInputs(elem){var nodeName=(elem.nodeName||"").toLowerCase();if(nodeName==="input"){fixDefaultChecked(elem); // Skip scripts, get other children
	}else if(nodeName!=="script"&&typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked);}} // Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
	function shimCloneNode(elem){var div=document.createElement("div");safeFragment.appendChild(div);div.innerHTML=elem.outerHTML;return div.firstChild;}jQuery.extend({clone:function clone(elem,dataAndEvents,deepDataAndEvents){var srcElements,destElements,i, // IE<=8 does not properly clone detached, unknown element nodes
	clone=jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")?elem.cloneNode(true):shimCloneNode(elem);if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ // IE copies events bound via attachEvent when using cloneNode.
	// Calling detachEvent on the clone will also remove the events
	// from the original. In order to get around this, we use some
	// proprietary methods to clear the events. Thanks to MooTools
	// guys for this hotness.
	cloneFixAttributes(elem,clone); // Using Sizzle here is crazy slow, so we use getElementsByTagName instead
	srcElements=getAll(elem);destElements=getAll(clone); // Weird iteration because IE will replace the length property
	// with an element if you are cloning the body and one of the
	// elements on the page has a name or id of "length"
	for(i=0;srcElements[i];++i){ // Ensure that the destination node is not null; Fixes #9587
	if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i]);}}} // Copy the events from the original to the clone
	if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}srcElements=destElements=null; // Return the cloned set
	return clone;},clean:function clean(elems,context,fragment,scripts){var checkScriptType,script,j,ret=[];context=context||document; // !context.createElement fails in IE with an error but returns typeof 'object'
	if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}if(!elem){continue;} // Convert html string into DOM nodes
	if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem);}else { // Fix "XHTML"-style tags in all browsers
	elem=elem.replace(rxhtmlTag,"<$1></$2>"); // Trim whitespace, otherwise indexOf won't work as expected
	var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div"),safeChildNodes=safeFragment.childNodes,remove; // Append wrapper element to unknown element safe doc fragment
	if(context===document){ // Use the fragment we've already created for this document
	safeFragment.appendChild(div);}else { // Use a fragment created with the owner document
	createSafeFragment(context).appendChild(div);} // Go to html and back, then peel off extra wrappers
	div.innerHTML=wrap[1]+elem+wrap[2]; // Move to the right depth
	while(depth--){div=div.lastChild;} // Remove IE's autoinserted <tbody> from table fragments
	if(!jQuery.support.tbody){ // String was a <table>, *may* have spurious <tbody>
	var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes: // String was a bare <thead> or <tfoot>
	wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}} // IE completely kills leading whitespace when innerHTML is used
	if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}elem=div.childNodes; // Clear elements from DocumentFragment (safeFragment or otherwise)
	// to avoid hoarding elements. Fixes #11356
	if(div){div.parentNode.removeChild(div); // Guard against -1 index exceptions in FF3.6
	if(safeChildNodes.length>0){remove=safeChildNodes[safeChildNodes.length-1];if(remove&&remove.parentNode){remove.parentNode.removeChild(remove);}}}}} // Resets defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	var len;if(!jQuery.support.appendChecked){if(elem[0]&&typeof (len=elem.length)==="number"){for(j=0;j<len;j++){findInputs(elem[j]);}}else {findInputs(elem);}}if(elem.nodeType){ret.push(elem);}else {ret=jQuery.merge(ret,elem);}}if(fragment){checkScriptType=function checkScriptType(elem){return !elem.type||rscriptType.test(elem.type);};for(i=0;ret[i];i++){script=ret[i];if(scripts&&jQuery.nodeName(script,"script")&&(!script.type||rscriptType.test(script.type))){scripts.push(script.parentNode?script.parentNode.removeChild(script):script);}else {if(script.nodeType===1){var jsTags=jQuery.grep(script.getElementsByTagName("script"),checkScriptType);ret.splice.apply(ret,[i+1,0].concat(jsTags));}fragment.appendChild(script);}}}return ret;},cleanData:function cleanData(elems){var data,id,cache=jQuery.cache,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){continue;}id=elem[jQuery.expando];if(id){data=cache[id];if(data&&data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}} // Null the DOM reference to avoid IE6/7/8 leak (#7054)
	if(data.handle){data.handle.elem=null;}}if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}delete cache[id];}}}});var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/, // fixed for IE9, see #8346
	rupper=/([A-Z]|^ms)/g,rnum=/^[\-+]?(?:\d*\.)?\d+$/i,rnumnonpx=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,rrelNum=/^([\-+])=([\-+.\de]+)/,rmargin=/^margin/,cssShow={position:"absolute",visibility:"hidden",display:"block"}, // order is important!
	cssExpand=["Top","Right","Bottom","Left"],curCSS,getComputedStyle,currentStyle;jQuery.fn.css=function(name,value){return jQuery.access(this,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);};jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}else {return elem.style.opacity;}}}}, // Exclude the following css properties to add px
	cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{ // normalize float css property
	"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} // Make sure that we're working with the right name
	var ret,type,origName=jQuery.camelCase(name),style=elem.style,hooks=jQuery.cssHooks[origName];name=jQuery.cssProps[origName]||origName; // Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value); // convert relative number strings (+= or -=) to relative numbers. #7345
	if(type==="string"&&(ret=rrelNum.exec(value))){value=+(ret[1]+1)*+ret[2]+parseFloat(jQuery.css(elem,name)); // Fixes bug #9237
	type="number";} // Make sure that NaN and null values aren't set. See: #7116
	if(value==null||type==="number"&&isNaN(value)){return;} // If a number was passed in, add 'px' to the (except for certain CSS properties)
	if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value))!==undefined){ // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
	// Fixes bug #5509
	try{style[name]=value;}catch(e){}}}else { // If a hook was provided get the non-computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra){var ret,hooks; // Make sure that we're working with the right name
	name=jQuery.camelCase(name);hooks=jQuery.cssHooks[name];name=jQuery.cssProps[name]||name; // cssFloat needs a special treatment
	if(name==="cssFloat"){name="float";} // If a hook was provided get the computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){return ret; // Otherwise, if a way to get the computed value exists, use that
	}else if(curCSS){return curCSS(elem,name);}}, // A method for quickly swapping in/out CSS properties to get correct calculations
	swap:function swap(elem,options,callback){var old={},ret,name; // Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.call(elem); // Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;}}); // DEPRECATED in 1.3, Use jQuery.css() instead
	jQuery.curCSS=jQuery.css;if(document.defaultView&&document.defaultView.getComputedStyle){getComputedStyle=function getComputedStyle(elem,name){var ret,defaultView,computedStyle,width,style=elem.style;name=name.replace(rupper,"-$1").toLowerCase();if((defaultView=elem.ownerDocument.defaultView)&&(computedStyle=defaultView.getComputedStyle(elem,null))){ret=computedStyle.getPropertyValue(name);if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){ret=jQuery.style(elem,name);}} // A tribute to the "awesome hack by Dean Edwards"
	// WebKit uses "computed value (percentage if specified)" instead of "used value" for margins
	// which is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
	if(!jQuery.support.pixelMargin&&computedStyle&&rmargin.test(name)&&rnumnonpx.test(ret)){width=style.width;style.width=ret;ret=computedStyle.width;style.width=width;}return ret;};}if(document.documentElement.currentStyle){currentStyle=function currentStyle(elem,name){var left,rsLeft,uncomputed,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style; // Avoid setting ret to empty string here
	// so we don't default to auto
	if(ret==null&&style&&(uncomputed=style[name])){ret=uncomputed;} // From the awesome hack by Dean Edwards
	// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	// If we're not dealing with a regular pixel number
	// but a number that has a weird ending, we need to convert it to pixels
	if(rnumnonpx.test(ret)){ // Remember the original values
	left=style.left;rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left; // Put in the new values to get a computed value out
	if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px"; // Revert the changed values
	style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}return ret===""?"auto":ret;};}curCSS=getComputedStyle||currentStyle;function getWidthOrHeight(elem,name,extra){ // Start with offset property
	var val=name==="width"?elem.offsetWidth:elem.offsetHeight,i=name==="width"?1:0,len=4;if(val>0){if(extra!=="border"){for(;i<len;i+=2){if(!extra){val-=parseFloat(jQuery.css(elem,"padding"+cssExpand[i]))||0;}if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+cssExpand[i]))||0;}else {val-=parseFloat(jQuery.css(elem,"border"+cssExpand[i]+"Width"))||0;}}}return val+"px";} // Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name);if(val<0||val==null){val=elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0; // Add padding, border, margin
	if(extra){for(;i<len;i+=2){val+=parseFloat(jQuery.css(elem,"padding"+cssExpand[i]))||0;if(extra!=="padding"){val+=parseFloat(jQuery.css(elem,"border"+cssExpand[i]+"Width"))||0;}if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+cssExpand[i]))||0;}}}return val+"px";}jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){if(elem.offsetWidth!==0){return getWidthOrHeight(elem,name,extra);}else {return jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);});}}},set:function set(elem,value){return rnum.test(value)?value+"px":value;}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function get(elem,computed){ // IE uses filters for opacity
	return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?parseFloat(RegExp.$1)/100+"":computed?"1":"";},set:function set(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||""; // IE has trouble with opacity if it does not have layout
	// Force it by setting the zoom level
	style.zoom=1; // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
	if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""){ // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
	// if "filter:" is present at all, clearType is disabled, we want to avoid this
	// style.removeAttribute is IE Only, but so apparently is this code path...
	style.removeAttribute("filter"); // if there there is no filter style applied in a css rule, we are done
	if(currentStyle&&!currentStyle.filter){return;}} // otherwise, set new filter values
	style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}jQuery(function(){ // This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function get(elem,computed){ // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// Work around by temporarily setting element display to inline-block
	return jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){return curCSS(elem,"margin-right");}else {return elem.style.marginRight;}});}};}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;return width===0&&height===0||!jQuery.support.reliableHiddenOffsets&&(elem.style&&elem.style.display||jQuery.css(elem,"display"))==="none";};jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem);};} // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i, // assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value],expanded={};for(i=0;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rselectTextarea=/^(?:select|textarea)/i,rspacesAjax=/\s+/,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, // Keep a copy of the old load method
	_load=jQuery.fn.load, /* Prefilters
	     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	     * 2) These are called:
	     *    - BEFORE asking for a transport
	     *    - AFTER param serialization (s.data is a string if s.processData is true)
	     * 3) key is the dataType
	     * 4) the catchall symbol "*" can be used
	     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	     */prefilters={}, /* Transports bindings
	     * 1) key is the dataType
	     * 2) the catchall symbol "*" can be used
	     * 3) selection will start with transport dataType and THEN go to "*" if needed
	     */transports={}, // Document location
	ajaxLocation, // Document location segments
	ajaxLocParts, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes=["*/"]+["*"]; // #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try{ajaxLocation=location.href;}catch(e){ // Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;} // Segment location into parts
	ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[]; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}if(jQuery.isFunction(func)){var dataTypes=dataTypeExpression.toLowerCase().split(rspacesAjax),i=0,length=dataTypes.length,dataType,list,placeBefore; // For each dataType in the dataTypeExpression
	for(;i<length;i++){dataType=dataTypes[i]; // We control if we're asked to add before
	// any existing element
	placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}list=structure[dataType]=structure[dataType]||[]; // then we add to the structure accordingly
	list[placeBefore?"unshift":"push"](func);}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType /* internal */,inspected /* internal */){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var list=structure[dataType],i=0,length=list?list.length:0,executeOnly=structure===prefilters,selection;for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR); // If we got redirected to another dataType
	// we try there if executing only and not done already
	if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else {options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}} // If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);} // unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}}jQuery.fn.extend({load:function load(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments); // Don't do a request if no elements are being requested
	}else if(!this.length){return this;}var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);} // Default to a GET request
	var type="GET"; // If the second parameter was provided
	if(params){ // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback=params;params=undefined; // Otherwise, build a param string
	}else if((typeof params==="undefined"?"undefined":_typeof(params))==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}var self=this; // Request the remote document
	jQuery.ajax({url:url,type:type,dataType:"html",data:params, // Complete callback (responseText is used internally)
	complete:function complete(jqXHR,status,responseText){ // Store the response as specified by the jqXHR object
	responseText=jqXHR.responseText; // If successful, inject the HTML into all the matched elements
	if(jqXHR.isResolved()){ // #4825: Get the actual response in case
	// a dataFilter is present in ajaxSettings
	jqXHR.done(function(r){responseText=r;}); // See if a selector was specified
	self.html(selector? // Create a dummy div to hold the results
	jQuery("<div>") // inject the contents of the document in, removing the scripts
	// to avoid any 'Permission Denied' errors in IE
	.append(responseText.replace(rscript,"")) // Locate the specified elements
	.find(selector): // If not, just inject the full result
	responseText);}if(callback){self.each(callback,[responseText,status,jqXHR]);}}});return this;},serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}}); // Attach a bunch of functions for handling common AJAX events
	jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.on(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ // shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){if(settings){ // Building a settings object
	ajaxExtend(target,jQuery.ajaxSettings);}else { // Extending ajaxSettings
	settings=target;target=jQuery.ajaxSettings;}ajaxExtend(target,settings);return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true, /*
	             timeout: 0,
	             data: null,
	             dataType: null,
	             username: null,
	             password: null,
	             cache: null,
	             traditional: false,
	             headers: {},
	             */accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"}, // List of data converters
	// 1) key format is "source_type destination_type" (a single space in-between)
	// 2) the catchall symbol "*" can be used for source_type
	converters:{ // Convert anything to text
	"* text":window.String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;} // Force options to be an object
	options=options||{};var  // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context||s, // Context for global events
	// It's the callbackContext if one was provided in the options
	// and if it's a DOM node or a jQuery collection
	globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	statusCode=s.statusCode||{}, // ifModified key
	ifModifiedKey, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // Response headers
	responseHeadersString,responseHeaders, // transport
	transport, // timeout handle
	timeoutTimer, // Cross-domain detection vars
	parts, // The jqXHR state
	state=0, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Fake xhr
	jqXHR={readyState:0, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;}, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match===undefined?null:match;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;}, // Cancel the request
	abort:function abort(statusText){statusText=statusText||"abort";if(transport){transport.abort(statusText);}done(0,statusText);return this;}}; // Callback for when everything is done
	// It is defined here because jslint complains if it is declared
	// at the end of the function (which would be more logical and readable)
	function done(status,nativeStatusText,responses,headers){ // Called once
	if(state===2){return;} // State is "done" now
	state=2; // Clear timeout if it exists
	if(timeoutTimer){clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined; // Cache response headers
	responseHeadersString=headers||""; // Set readyState
	jqXHR.readyState=status>0?4:0;var isSuccess,success,error,statusText=nativeStatusText,response=responses?ajaxHandleResponses(s,jqXHR,responses):undefined,lastModified,etag; // If successful, handle type chaining
	if(status>=200&&status<300||status===304){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(lastModified=jqXHR.getResponseHeader("Last-Modified")){jQuery.lastModified[ifModifiedKey]=lastModified;}if(etag=jqXHR.getResponseHeader("Etag")){jQuery.etag[ifModifiedKey]=etag;}} // If not modified
	if(status===304){statusText="notmodified";isSuccess=true; // If we have data
	}else {try{success=ajaxConvert(s,response);statusText="success";isSuccess=true;}catch(e){ // We have a parsererror
	statusText="parsererror";error=e;}}}else { // We extract error from statusText
	// then normalize statusText and status for non-aborts
	error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}} // Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=""+(nativeStatusText||statusText); // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}} // Attach deferreds
	deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.add; // Status-dependent callbacks
	jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else {tmp=map[jqXHR.status];jqXHR.then(tmp,tmp);}}return this;}; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
	// We also use the url parameter if available
	s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"); // Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(rspacesAjax); // Determine if a cross-domain request is in order
	if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!=ajaxLocParts[1]||parts[2]!=ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));} // Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state===2){return false;} // We can fire global events as of now if asked to
	fireGlobals=s.global; // Uppercase the type
	s.type=s.type.toUpperCase(); // Determine if request has content
	s.hasContent=!rnoContent.test(s.type); // Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Get ifModifiedKey before adding the anti-cache parameter
	ifModifiedKey=s.url; // Add anti-cache in url if needed
	if(s.cache===false){var ts=jQuery.now(), // try replacing _= if it is there
	ret=s.url.replace(rts,"$1_="+ts); // if nothing was replaced, add timestamp to the end
	s.url=ret+(ret===s.url?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}} // Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey]);}if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey]);}} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ // Abort if not done already
	jqXHR.abort();return false;} // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i]);} // Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState=1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // Timeout
	if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){ // Propagate exception as error if not done
	if(state<2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}}return jqXHR;}, // Serialize an array of form elements or a set of
	// key/values into a query string
	param:function param(a,traditional){var s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(var prefix in a){buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");}});function buildParams(prefix,obj,traditional,add){if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // If array item is non-scalar (array or object), encode its
	// numeric index to resolve deserialization ambiguity issues.
	// Note that rack (as of 1.0.0) can't currently deserialize
	// nested arrays properly, and attempting to do so may cause
	// a server error. Possible fixes are to modify rack's
	// deserialization algorithm or to provide an option or flag
	// to force array serialization to be shallow.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){ // Serialize object item.
	for(var name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // This is still on the jQuery object... for now
	// Want to move this to jQuery.ajax some day
	jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{}}); /* Handles responses to an ajax request:
	     * - sets all responseXXX fields accordingly
	     * - finds the right dataType (mediates between content-type and expected dataType)
	     * - returns the corresponding response
	     */function ajaxHandleResponses(s,jqXHR,responses){var contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields,ct,type,finalDataType,firstDataType; // Fill responseXXX fields
	for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}} // Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType=dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}} // Or just use first one
	finalDataType=finalDataType||firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} // Chain conversions given the request and the original response
	function ajaxConvert(s,response){ // Apply the dataFilter if provided
	if(s.dataFilter){response=s.dataFilter(response,s.dataType);}var dataTypes=s.dataTypes,converters={},i,key,length=dataTypes.length,tmp, // Current and previous dataTypes
	current=dataTypes[0],prev, // Conversion expression
	conversion, // Conversion function
	conv, // Conversion functions (transitive conversion)
	conv1,conv2; // For each dataType in the chain
	for(i=1;i<length;i++){ // Create converters map
	// with lowercased keys
	if(i===1){for(key in s.converters){if(typeof key==="string"){converters[key.toLowerCase()]=s.converters[key];}}} // Get the dataTypes
	prev=current;current=dataTypes[i]; // If current is auto dataType, update it to prev
	if(current==="*"){current=prev; // If no auto and dataTypes are actually different
	}else if(prev!=="*"&&prev!==current){ // Get the converter
	conversion=prev+" "+current;conv=converters[conversion]||converters["* "+current]; // If there is no direct converter, search transitively
	if(!conv){conv2=undefined;for(conv1 in converters){tmp=conv1.split(" ");if(tmp[0]===prev||tmp[0]==="*"){conv2=converters[tmp[1]+" "+current];if(conv2){conv1=converters[conv1];if(conv1===true){conv=conv2;}else if(conv2===true){conv=conv1;}break;}}}} // If we found no converter, dispatch an error
	if(!(conv||conv2)){jQuery.error("No conversion from "+conversion.replace(" "," to "));} // If found converter is not an equivalence
	if(conv!==true){ // Convert with 1 or 2 converters accordingly
	response=conv?conv(response):conv2(conv1(response));}}}return response;}var jsc=jQuery.now(),jsre=/(\=)\?(&|$)|\?\?/i; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){return jQuery.expando+"_"+jsc++;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var inspectData=typeof s.data==="string"&&/^application\/x\-www\-form\-urlencoded/.test(s.contentType);if(s.dataTypes[0]==="jsonp"||s.jsonp!==false&&(jsre.test(s.url)||inspectData&&jsre.test(s.data))){var responseContainer,jsonpCallback=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,previous=window[jsonpCallback],url=s.url,data=s.data,replace="$1"+jsonpCallback+"$2";if(s.jsonp!==false){url=url.replace(jsre,replace);if(s.url===url){if(inspectData){data=data.replace(jsre,replace);}if(s.data===data){ // Add callback manually
	url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+jsonpCallback;}}}s.url=url;s.data=data; // Install callback
	window[jsonpCallback]=function(response){responseContainer=[response];}; // Clean-up function
	jqXHR.always(function(){ // Set callback back to previous value
	window[jsonpCallback]=previous; // Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(previous)){window[jsonpCallback](responseContainer[0]);}}); // Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(jsonpCallback+" was not called");}return responseContainer[0];}; // force json dataType
	s.dataTypes[0]="json"; // Delegate to script
	return "script";}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and global
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";s.global=false;}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return {send:function send(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}script.src=s.url; // Attach handlers for all browsers
	script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){ // Handle memory leak in IE
	script.onload=script.onreadystatechange=null; // Remove the script
	if(head&&script.parentNode){head.removeChild(script);} // Dereference the script
	script=undefined; // Callback if not abort
	if(!isAbort){callback(200,"success");}}}; // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
	// This arises when a base node is used (#2709 and #4378).
	head.insertBefore(script,head.firstChild);},abort:function abort(){if(script){script.onload(0,1);}}};}});var  // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort=window.ActiveXObject?function(){ // Abort all pending requests
	for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}}:false,xhrId=0,xhrCallbacks; // Functions to create xhrs
	function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}} // Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr=window.ActiveXObject? /* Microsoft failed to properly
	         * implement the XMLHttpRequest in IE7 (can't request local files),
	         * so we use the ActiveXObject when it is available
	         * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	         * we need a fallback.
	         */function(){return !this.isLocal&&createStandardXHR()||createActiveXHR();}: // For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR; // Determine support properties
	(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&"withCredentials" in xhr});})(jQuery.ajaxSettings.xhr()); // Create transport if the browser can provide an xhr
	if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){ // Cross domain only allowed if supported through XMLHttpRequest
	if(!s.crossDomain||jQuery.support.cors){var _callback;return {send:function send(headers,complete){ // Get a new xhr
	var xhr=s.xhr(),handle,i; // Open the socket
	// Passing null username, generates a login popup on Opera (#2865)
	if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else {xhr.open(s.type,s.url,s.async);} // Apply custom fields if provided
	if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}} // Override mime type if needed
	if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} // Need an extra try/catch for cross domain requests in Firefox 3
	try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){} // Do send the request
	// This may raise an exception which is actually
	// handled in jQuery.ajax (so no try/catch here)
	xhr.send(s.hasContent&&s.data||null); // Listener
	_callback=function callback(_,isAbort){var status,statusText,responseHeaders,responses,xml; // Firefox throws exceptions when accessing properties
	// of an xhr when a network error occured
	// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
	try{ // Was never called and is aborted or complete
	if(_callback&&(isAbort||xhr.readyState===4)){ // Only called once
	_callback=undefined; // Do not keep as active anymore
	if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}} // If it's an abort
	if(isAbort){ // Abort it manually if needed
	if(xhr.readyState!==4){xhr.abort();}}else {status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML; // Construct response list
	if(xml&&xml.documentElement /* #4958 */){responses.xml=xml;} // When requesting binary data, IE6-9 will throw an exception
	// on any attempt to access responseText (#11426)
	try{responses.text=xhr.responseText;}catch(_){} // Firefox throws an exception when accessing
	// statusText for faulty cross-domain requests
	try{statusText=xhr.statusText;}catch(e){ // We normalize with Webkit giving an empty statusText
	statusText="";} // Filter status for non standard behaviors
	// If the request is local and we have data: assume a success
	// (success with no data won't get notified, that's the best we
	// can do given current implementations)
	if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404; // IE - #1450: sometimes returns 1223 when it should be 204
	}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}} // Call complete if needed
	if(responses){complete(status,statusText,responses,responseHeaders);}}; // if we're in sync mode or it's in cache
	// and has been retrieved directly (IE6 & IE7)
	// we need to manually fire the callback
	if(!s.async||xhr.readyState===4){_callback();}else {handle=++xhrId;if(xhrOnUnloadAbort){ // Create the active xhrs callbacks list if needed
	// and attach the unload handler
	if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);} // Add to list of active xhrs callbacks
	xhrCallbacks[handle]=_callback;}xhr.onreadystatechange=_callback;}},abort:function abort(){if(_callback){_callback(0,1);}}};}});}var elemdisplay={},iframe,iframeDoc,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,timerId,fxAttrs=[ // height animations
	["height","marginTop","marginBottom","paddingTop","paddingBottom"], // width animations
	["width","marginLeft","marginRight","paddingLeft","paddingRight"], // opacity animations
	["opacity"]],fxNow;jQuery.fn.extend({show:function show(speed,easing,callback){var elem,display;if(speed||speed===0){return this.animate(genFx("show",3),speed,easing,callback);}else {for(var i=0,j=this.length;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display; // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!jQuery._data(elem,"olddisplay")&&display==="none"){display=elem.style.display="";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(display===""&&jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument.documentElement,elem)){jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(i=0;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display;if(display===""||display==="none"){elem.style.display=jQuery._data(elem,"olddisplay")||"";}}}return this;}},hide:function hide(speed,easing,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,easing,callback);}else {var elem,display,i=0,j=this.length;for(;i<j;i++){elem=this[i];if(elem.style){display=jQuery.css(elem,"display");if(display!=="none"&&!jQuery._data(elem,"olddisplay")){jQuery._data(elem,"olddisplay",display);}}} // Set the display of the elements in a second loop
	// to avoid the constant reflow
	for(i=0;i<j;i++){if(this[i].style){this[i].style.display="none";}}return this;}}, // Save the old toggle function
	_toggle:jQuery.fn.toggle,toggle:function toggle(fn,fn2,callback){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else {this.animate(genFx("toggle",3),fn,fn2,callback);}return this;},fadeTo:function fadeTo(speed,to,easing,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete,[false]);} // Do not change referenced properties as per-property easing will be lost
	prop=jQuery.extend({},prop);function doAnimation(){ // XXX 'this' does not always have a nodeName when running the
	// test suite
	if(optall.queue===false){jQuery._mark(this);}var opt=jQuery.extend({},optall),isElement=this.nodeType===1,hidden=isElement&&jQuery(this).is(":hidden"),name,val,p,e,hooks,replace,parts,start,end,unit,method; // will store per property easing and be used to determine when an animation is complete
	opt.animatedProperties={}; // first pass over propertys to expand / normalize
	for(p in prop){name=jQuery.camelCase(p);if(p!==name){prop[name]=prop[p];delete prop[p];}if((hooks=jQuery.cssHooks[name])&&"expand" in hooks){replace=hooks.expand(prop[name]);delete prop[name]; // not quite $.extend, this wont overwrite keys already present.
	// also - reusing 'p' from above because we have the correct "name"
	for(p in replace){if(!(p in prop)){prop[p]=replace[p];}}}}for(name in prop){val=prop[name]; // easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
	if(jQuery.isArray(val)){opt.animatedProperties[name]=val[1];val=prop[name]=val[0];}else {opt.animatedProperties[name]=opt.specialEasing&&opt.specialEasing[name]||opt.easing||'swing';}if(val==="hide"&&hidden||val==="show"&&!hidden){return opt.complete.call(this);}if(isElement&&(name==="height"||name==="width")){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE does not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	if(jQuery.css(this,"display")==="inline"&&jQuery.css(this,"float")==="none"){ // inline-level elements accept inline-block;
	// block-level elements need to be inline with layout
	if(!jQuery.support.inlineBlockNeedsLayout||defaultDisplay(this.nodeName)==="inline"){this.style.display="inline-block";}else {this.style.zoom=1;}}}}if(opt.overflow!=null){this.style.overflow="hidden";}for(p in prop){e=new jQuery.fx(this,opt,p);val=prop[p];if(rfxtypes.test(val)){ // Tracks whether to show or hide based on private
	// data attached to the element
	method=jQuery._data(this,"toggle"+p)||(val==="toggle"?hidden?"show":"hide":0);if(method){jQuery._data(this,"toggle"+p,method==="show"?"hide":"show");e[method]();}else {e[val]();}}else {parts=rfxnum.exec(val);start=e.cur();if(parts){end=parseFloat(parts[2]);unit=parts[3]||(jQuery.cssNumber[p]?"":"px"); // We need to compute starting value
	if(unit!=="px"){jQuery.style(this,p,(end||1)+unit);start=(end||1)/e.cur()*start;jQuery.style(this,p,start+unit);} // If a +=/-= token was provided, we're doing a relative animation
	if(parts[1]){end=(parts[1]==="-="?-1:1)*end+start;}e.custom(start,end,unit);}else {e.custom(start,val,"");}}} // For JS strict compliance
	return true;}return optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var index,hadTimers=false,timers=jQuery.timers,data=jQuery._data(this); // clear marker counters if we know they won't be
	if(!gotoEnd){jQuery._unmark(true,this);}function stopQueue(elem,data,index){var hooks=data[index];jQuery.removeData(elem,index,true);hooks.stop(gotoEnd);}if(type==null){for(index in data){if(data[index]&&data[index].stop&&index.indexOf(".run")===index.length-4){stopQueue(this,data,index);}}}else if(data[index=type+".run"]&&data[index].stop){stopQueue(this,data,index);}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){if(gotoEnd){ // force the next step to be the last
	timers[index](true);}else {timers[index].saveState();}hadTimers=true;timers.splice(index,1);}} // start the next in the queue if the last step wasn't forced
	// timers currently will call their complete callbacks, which will dequeue
	// but only if they were gotoEnd
	if(!(gotoEnd&&hadTimers)){jQuery.dequeue(this,type);}});}}); // Animations created synchronously will run synchronously
	function createFxNow(){setTimeout(clearFxNow,0);return fxNow=jQuery.now();}function clearFxNow(){fxNow=undefined;} // Generate parameters to create a standard animation
	function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;} // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.extend({speed:function speed(_speed,easing,fn){var opt=_speed&&(typeof _speed==="undefined"?"undefined":_typeof(_speed))==="object"?jQuery.extend({},_speed):{complete:fn||!fn&&easing||jQuery.isFunction(_speed)&&_speed,duration:_speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";} // Queueing
	opt.old=opt.complete;opt.complete=function(noUnmark){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}else if(noUnmark!==false){jQuery._unmark(this);}};return opt;},easing:{linear:function linear(p){return p;},swing:function swing(p){return -Math.cos(p*Math.PI)/2+0.5;}},timers:[],fx:function fx(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;options.orig=options.orig||{};}});jQuery.fx.prototype={ // Simple function for setting a style value
	update:function update(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);}, // Get the current size
	cur:function cur(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}var parsed,r=jQuery.css(this.elem,this.prop); // Empty strings, null, undefined and "auto" are converted to 0,
	// complex values such as "rotate(1rad)" are returned as is,
	// simple values such as "10px" are parsed to Float.
	return isNaN(parsed=parseFloat(r))?!r||r==="auto"?0:r:parsed;}, // Start an animation from one number to another
	custom:function custom(from,to,unit){var self=this,fx=jQuery.fx;this.startTime=fxNow||createFxNow();this.end=to;this.now=this.start=from;this.pos=this.state=0;this.unit=unit||this.unit||(jQuery.cssNumber[this.prop]?"":"px");function t(gotoEnd){return self.step(gotoEnd);}t.queue=this.options.queue;t.elem=this.elem;t.saveState=function(){if(jQuery._data(self.elem,"fxshow"+self.prop)===undefined){if(self.options.hide){jQuery._data(self.elem,"fxshow"+self.prop,self.start);}else if(self.options.show){jQuery._data(self.elem,"fxshow"+self.prop,self.end);}}};if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(fx.tick,fx.interval);}}, // Simple 'show' function
	show:function show(){var dataShow=jQuery._data(this.elem,"fxshow"+this.prop); // Remember where we started, so that we can go back to it later
	this.options.orig[this.prop]=dataShow||jQuery.style(this.elem,this.prop);this.options.show=true; // Begin the animation
	// Make sure that we start at a small width/height to avoid any flash of content
	if(dataShow!==undefined){ // This show is picking up where a previous hide or show left off
	this.custom(this.cur(),dataShow);}else {this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());} // Start by showing the element
	jQuery(this.elem).show();}, // Simple 'hide' function
	hide:function hide(){ // Remember where we started, so that we can go back to it later
	this.options.orig[this.prop]=jQuery._data(this.elem,"fxshow"+this.prop)||jQuery.style(this.elem,this.prop);this.options.hide=true; // Begin the animation
	this.custom(this.cur(),0);}, // Each step of an animation
	step:function step(gotoEnd){var p,n,complete,t=fxNow||createFxNow(),done=true,elem=this.elem,options=this.options;if(gotoEnd||t>=options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();options.animatedProperties[this.prop]=true;for(p in options.animatedProperties){if(options.animatedProperties[p]!==true){done=false;}}if(done){ // Reset the overflow
	if(options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){jQuery.each(["","X","Y"],function(index,value){elem.style["overflow"+value]=options.overflow[index];});} // Hide the element if the "hide" operation was done
	if(options.hide){jQuery(elem).hide();} // Reset the properties, if the item has been hidden or shown
	if(options.hide||options.show){for(p in options.animatedProperties){jQuery.style(elem,p,options.orig[p]);jQuery.removeData(elem,"fxshow"+p,true); // Toggle data is no longer needed
	jQuery.removeData(elem,"toggle"+p,true);}} // Execute the complete function
	// in the event that the complete function throws an exception
	// we must ensure it won't be called twice. #5684
	complete=options.complete;if(complete){options.complete=false;complete.call(elem);}}return false;}else { // classical easing cannot be used with an Infinity duration
	if(options.duration==Infinity){this.now=t;}else {n=t-this.startTime;this.state=n/options.duration; // Perform the easing function, defaults to swing
	this.pos=jQuery.easing[options.animatedProperties[this.prop]](this.state,n,0,1,options.duration);this.now=this.start+(this.end-this.start)*this.pos;} // Perform the next step of the animation
	this.update();}return true;}};jQuery.extend(jQuery.fx,{tick:function tick(){var timer,timers=jQuery.timers,i=0;for(;i<timers.length;i++){timer=timers[i]; // Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}},interval:13,stop:function stop(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200, // Default speed
	_default:400},step:{opacity:function opacity(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function _default(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=fx.now+fx.unit;}else {fx.elem[fx.prop]=fx.now;}}}}); // Ensure props that can't be negative don't go there on undershoot easing
	jQuery.each(fxAttrs.concat.apply([],fxAttrs),function(i,prop){ // exclude marginTop, marginLeft, marginBottom and marginRight from this list
	if(prop.indexOf("margin")){jQuery.fx.step[prop]=function(fx){jQuery.style(fx.elem,prop,Math.max(0,fx.now)+fx.unit);};}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};} // Try to restore the default display value of an element
	function defaultDisplay(nodeName){if(!elemdisplay[nodeName]){var body=document.body,elem=jQuery("<"+nodeName+">").appendTo(body),display=elem.css("display");elem.remove(); // If the simple way fails,
	// get element's real default display by attaching it to a temp iframe
	if(display==="none"||display===""){ // No iframe to use yet, so create it
	if(!iframe){iframe=document.createElement("iframe");iframe.frameBorder=iframe.width=iframe.height=0;}body.appendChild(iframe); // Create a cacheable copy of the iframe document on first call.
	// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
	// document to it; WebKit & Firefox won't allow reusing the iframe document.
	if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write((jQuery.support.boxModel?"<!doctype html>":"")+"<html><body>");iframeDoc.close();}elem=iframeDoc.createElement(nodeName);iframeDoc.body.appendChild(elem);display=jQuery.css(elem,"display");body.removeChild(iframe);} // Store the correct default display
	elemdisplay[nodeName]=display;}return elemdisplay[nodeName];}var getOffset,rtable=/^t(?:able|d|h)$/i,rroot=/^(?:body|html)$/i;if("getBoundingClientRect" in document.documentElement){getOffset=function getOffset(elem,doc,docElem,box){try{box=elem.getBoundingClientRect();}catch(e){} // Make sure we're not dealing with a disconnected DOM node
	if(!box||!jQuery.contains(docElem,elem)){return box?{top:box.top,left:box.left}:{top:0,left:0};}var body=doc.body,win=getWindow(doc),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,scrollTop=win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop,scrollLeft=win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft,top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;return {top:top,left:left};};}else {getOffset=function getOffset(elem,doc,docElem){var computedStyle,offsetParent=elem.offsetParent,prevOffsetParent=elem,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){break;}computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.support.doesNotAddBorder&&!(jQuery.support.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}prevOffsetParent=offsetParent;offsetParent=elem.offsetParent;}if(jQuery.support.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}prevComputedStyle=computedStyle;}if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}return {top:top,left:left};};}jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return null;}if(elem===doc.body){return jQuery.offset.bodyOffset(elem);}return getOffset(elem,doc,doc.documentElement);};jQuery.offset={bodyOffset:function bodyOffset(body){var top=body.offsetTop,left=body.offsetLeft;if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}return {top:top,left:left};},setOffset:function setOffset(elem,options,i){var position=jQuery.css(elem,"position"); // set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft; // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else {curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({position:function position(){if(!this[0]){return null;}var elem=this[0], // Get *real* offsetParent
	offsetParent=this.offsetParent(), // Get correct offsets
	offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset(); // Subtract element margins
	// note: when an element has margin: auto the offsetLeft and marginLeft
	// are the same in Safari causing offset.left to incorrectly be 0
	offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0; // Add offsetParent borders
	parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0; // Subtract the two offsets
	return {top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?prop in win?win[prop]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else {elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;} // Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){var clientProp="client"+name,scrollProp="scroll"+name,offsetProp="offset"+name; // innerHeight and innerWidth
	jQuery.fn["inner"+name]=function(){var elem=this[0];return elem?elem.style?parseFloat(jQuery.css(elem,type,"padding")):this[type]():null;}; // outerHeight and outerWidth
	jQuery.fn["outer"+name]=function(margin){var elem=this[0];return elem?elem.style?parseFloat(jQuery.css(elem,type,margin?"margin":"border")):this[type]():null;};jQuery.fn[type]=function(value){return jQuery.access(this,function(elem,type,value){var doc,docElemProp,orig,ret;if(jQuery.isWindow(elem)){ // 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
	doc=elem.document;docElemProp=doc.documentElement[clientProp];return jQuery.support.boxModel&&docElemProp||doc.body&&doc.body[clientProp]||docElemProp;} // Get document width or height
	if(elem.nodeType===9){ // Either scroll[Width/Height] or offset[Width/Height], whichever is greater
	doc=elem.documentElement; // when a window > document, IE6 reports a offset[Width/Height] > client[Width/Height]
	// so we can't use max, as it'll choose the incorrect offset[Width/Height]
	// instead we use the correct client[Width/Height]
	// support:IE6
	if(doc[clientProp]>=doc[scrollProp]){return doc[clientProp];}return Math.max(elem.body[scrollProp],doc[scrollProp],elem.body[offsetProp],doc[offsetProp]);} // Get width or height on the element
	if(value===undefined){orig=jQuery.css(elem,type);ret=parseFloat(orig);return jQuery.isNumeric(ret)?ret:orig;} // Set the width or height on the element
	jQuery(elem).css(type,value);},type,value,arguments.length,null);};}); // Expose jQuery to the global object
	window.jQuery=window.$=jQuery; // Expose jQuery as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase jquery is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if("function"==="function"&&__webpack_require__(4)&&__webpack_require__(4).jQuery){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}})(window);

/***/ },

/***/ 4:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 5:
/***/ function(module, exports) {

	/**
	 * @fileOverview 核心方法，命名空间
	 */
	(function () {

	    /**核心方法，命名空间
	     *@namespace
	     *@name MZ
	     */

	    var mz = function mz() {};
	    mz.prototype =

	    /**@lends MZ */
	    {
	        extend: function extend(obj) {
	            var fn = function fn(options) {
	                if (options) {
	                    this.options = options;
	                }
	            };
	            fn.prototype = obj;
	            return fn;
	        },
	        /***
	         *命名空间
	         *@param {String} namespace 命名的字符串
	         *@param {Object} obj 要赋予命名空间的对象
	         *@param {Object} win 默认为window对象
	         *@example
	         *MZ.array.removeRepeat([1,2,3,4,5,1,2])
	         *@returns {Object}
	         */
	        namespace: function namespace(_namespace, obj, win) {

	            var path = _namespace.split(".");
	            var target = win || window;
	            while (path.length > 0) {
	                var p = path.shift();
	                if (!target[p]) {
	                    if (path.length > 0) {
	                        target[p] = {};
	                    } else {
	                        target[p] = obj || {};
	                    }
	                }
	                target = target[p];
	            }
	            return target;
	        }
	    };
	    window.MZ = new mz();

	    if (!window.console) {

	        window.console =
	        /**@ignore */
	        {
	            assert: function assert() {},
	            count: function count() {},
	            debug: function debug() {},
	            dir: function dir() {},
	            dirxml: function dirxml() {},
	            error: function error() {},
	            group: function group() {},
	            groupCollapsed: function groupCollapsed() {},
	            groupEnd: function groupEnd() {},
	            info: function info() {},
	            log: function log() {},
	            markTimeline: function markTimeline() {},
	            profile: function profile() {},
	            profileEnd: function profileEnd() {},
	            time: function time() {},
	            timeEnd: function timeEnd() {},
	            timeStamp: function timeStamp() {},
	            trace: function trace() {},
	            warn: function warn() {}
	        };
	    }
	})();

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);

	var React = __webpack_require__(1);


	var headCom = React.createClass({
		displayName: 'headCom',

		getInitialState: function getInitialState() {
			return {
				logosrc: 'manage.html',
				login: false,
				name: 'xiaoming'
			};
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'w1000 clearfix' },
				React.createElement('a', { href: this.state.logosrc, className: 'h_logo' }),
				React.createElement(
					'div',
					{ className: 'h_name' },
					React.createElement(
						'a',
						{ href: 'javascript:void(0);' },
						this.state.name
					),
					React.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'h_menu' },
						'退出'
					)
				),
				React.createElement(
					'div',
					{ className: 'h_nav' },
					React.createElement(
						'ul',
						{ className: 'clearfix' },
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: 'javascript:void(0);' },
								'项目'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: 'javascript:void(0);' },
								'帮助'
							)
						)
					)
				)
			);
		}
	});
	module.exports = headCom;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 11:
/***/ function(module, exports) {

	/**
	 * @fileOverview 定义tips组件
	 */

	(function ($) {
	    /**定义tips组件
	     *@namespace
	     *@name MZ.tipmessage
	     */
	    MZ.namespace("MZ.ui.tipmessage",
	    /**@lends MZ.tipmessage */
	    MZ.extend({
	        _getOptions: function _getOptions(options) {
	            var json = {
	                pos: options && options.pos ? options.pos : 'top', //默认在顶部显示
	                type: options && options.type ? options.type : 'success', //默认为成功的提示
	                msg: options && options.message ? options.message : '提示', //默认显示文字“提示”
	                delay: options && options.delay ? options.delay : 500,
	                id: options && options.id ? options.id : parseInt(Math.random() * 1000000)
	            };
	            return json;
	        },
	        /**
	         *显示加载中的提示，默认为顶部绿色提示
	         *@param {Object} options 可选参数集合
	         *@param {Number} options.delay 延迟多少毫秒自动消失
	         *@param {String} options.pos 位置，顶部or中间
	         *@param {String} options.message 提示文本
	         *@param {String} options.type 类型，成功or失败    fail or success
	         *@param {String} options.id tip的标识，需要手动关闭tip时设置该参数
	         *@example
	            MZ.tipmessage.show({message:'加载中',delay:1000,pos:'middle',type:'fail'});
	            <script>
	             function showTipmessage(pos){
	               MZ.tipmessage.show({message:'加载中',delay:1000,pos:pos,type:'fail'});
	             }
	             </script>
	             <button onclick="showTipmessage('middle')">tips组件（中间）</button>&nbsp;<button onclick="showTipmessage('top')">tips组件（顶部）</button>
	         */
	        show: function show(options) {
	            var json = this._getOptions(options),
	                pos = json.pos,
	                type = json.type,
	                msg = json.msg,
	                delay = json.delay,
	                id = json.id;
	            this.delay = delay;
	            var cssClass = type == 'success' ? 'tipmessage_success' : 'tipmessage_fail';
	            var exist1 = $("#tipmsg" + pos)[0];
	            var body = $(document.body);
	            if (!exist1) {
	                //判断是否存在tipmsg
	                $(document.body).append('<div id="tipmsg' + pos + '" class="ui_tipmessage"></div>');
	            }
	            var el = $("#tipmsg" + pos);
	            var exist2 = $("#tipmsg" + id)[0];
	            if (!exist2) {
	                msg = '<div id="tipmsg' + id + '" class="ui_tipmessage_list">' + msg + '</div>';
	                el.append(msg);
	            }
	            el.show();
	            var child = el.find('#tipmsg' + id);
	            child.addClass(cssClass).fadeIn(200);

	            var pl = child.css('paddingLeft'),
	                pr = child.css('paddingRight'),
	                pt = child.css('paddingTop'),
	                pb = child.css('paddingBottom');

	            var width = child.width(); //tip的宽度，加上paddingLeft和paddingRight
	            var height = child.height(); //tip的高度,加上paddingTop和paddingBottom
	            var left = (body.width() - width - parseInt(pl.replace('px', '')) * 2) / 2;
	            var scrollTop = $(window).scrollTop();
	            var top = pos == 'top' ? scrollTop : ($(window).height() - height - parseInt(pt.replace('px', '')) * 2) / 2 + scrollTop;
	            left = $.browser.msie && parseInt($.browser.version) < 8 ? 0 : left;
	            el.css({ //设置tip的位置
	                left: left + 'px',
	                top: top + 'px'
	            });
	            child.width(width);
	            if (delay) {
	                this.hide(id);
	            }
	        },

	        /**
	         *隐藏顶部加载中的提示
	         *@param {String} id 设置tip的ID，用于手动隐藏tip
	         *@example
	            MZ.tipmessage.hide('loginTip');
	         */

	        hide: function hide(id) {
	            //自动消失
	            setTimeout(function () {
	                $('#tipmsg' + id).fadeOut(200);
	            }, this.delay);
	        }
	    }));
	    MZ.tipmessage = new MZ.ui.tipmessage();
	})(jQuery);

/***/ },

/***/ 12:
/***/ function(module, exports) {

	/**
	 * @fileOverview 和字符串相关的方法.
	 */

	(function () {
	    /**和字符串相关的方法
	     *@namespace
	     *@name MZ.string
	     */

	    MZ.namespace('MZ.utils.string',
	    /**@lends MZ.string */

	    MZ.extend({
	        /***
	        *获得描述性的文件大小文本，如：传入1124，返回1.1KB
	        *@param {Number} fileSize 必选参数，文件大小
	        *@param {String} options.byteChar 可选参数,可以把"B"替换为"字节"
	        *@param {String} options.maxUnit 可选参数,最大单位,目前支持：B|K|M,默认为G
	        *@param {String} options.comma 可选参数,是否用逗号分开每千单位
	        *@returns {String}
	        *@example
	        //返回1G
	        MZ.string.getFileSizeText(1024 * 1024 * 1024);
	        //返回10字节
	        MZ.string.getFileSizeText(10,{
	        byteChar:"字节"
	        });
	        //返回102400B
	        MZ.string.getFileSizeText(102400,{
	        maxUnit:"B"
	        });
	        //返回5,000KB
	        MZ.string.getFileSizeText(1024 * 5000,{
	        maxUnit:"K",
	        comma:true
	        });
	        */
	        getFileSizeText: function getFileSizeText(fileSize, options) {
	            var unit = "B";
	            if (!options) {
	                options = {};
	            }
	            if (options.byteChar) {
	                unit = options.byteChar; //用"字节"或者"Bytes"替代z最小单位"B"
	                if (options.maxUnit == "B") options.maxUnit = unit;
	            }
	            var maxUnit = options.maxUnit || "G";
	            if (unit != maxUnit && fileSize >= 1024) {
	                unit = "K";
	                fileSize = fileSize / 1024;
	                if (unit != maxUnit && fileSize >= 1024) {
	                    unit = "M";
	                    fileSize = fileSize / 1024;
	                    //debugger
	                    if (unit != maxUnit && fileSize >= 1024) {
	                        unit = "G";
	                        fileSize = fileSize / 1024;
	                    }
	                }
	                fileSize = Math.ceil(fileSize * 100) / 100;
	            }
	            if (options.comma) {
	                var reg = /(\d)(\d{3})($|\.)/;
	                fileSize = fileSize.toString();
	                while (reg.test(fileSize)) {
	                    fileSize = fileSize.replace(reg, "$1,$2$3");
	                }
	            }
	            return fileSize + unit;
	        },
	        /**
	         *截断字符串，并显示省略号
	         * @param {String} text 必选参数，要截断的字符串。
	         * @param {Number} maxLength 必选参数，文字长度。
	         * @param {Boolean} showReplacer 可选参数，截断后是否显示...，默认为true。
	         *@returns {String}
	         */
	        getTextOverFlow: function getTextOverFlow(text, maxLength, showReplacer) {
	            if (text.length <= maxLength) {
	                return text;
	            } else {
	                return text.substring(0, maxLength) + (showReplacer ? "..." : "");
	            }
	        },
	        getTextOverFlow2: function getTextOverFlow2(text, maxLength, showReplacer) {
	            var charArr = text.split("");
	            var byteLen = 0;
	            var reg = new RegExp("[\x41-\x5A]|[^\x00-\xff]", "g");
	            for (var i = 0; i < charArr.length; i++) {
	                var cArr = charArr[i].match(reg);
	                byteLen += cArr == null ? 1 : 2;

	                if (byteLen > maxLength) {
	                    return text.substring(0, i) + (showReplacer ? "..." : "");
	                }
	            }
	            return text;
	        },
	        /***
	         *格式化字符串，提供数组和object两种方式
	         *@example
	         *MZ.string.format("hello,{name}",{name:"kitty"})
	         *MZ.string.format("hello,{0}",["kitty"])
	         *@returns {String}
	         */
	        format: function format(str, arr) {
	            var reg;
	            if ($.isArray(arr)) {
	                reg = /\{([\d]+)\}/g;
	            } else {
	                reg = /\{([\w]+)\}/g;
	            }
	            return str.replace(reg, function ($0, $1) {
	                var value = arr[$1];
	                if (value !== undefined) {
	                    return value;
	                } else {
	                    return "";
	                }
	            });
	        },
	        /**
	         * 得到字符串长度，支持中文
	         * <pre>示例：<br>
	         * MZ.string.getBytes("123");
	         * </pre>
	         * @return {Number}
	         */
	        getBytes: function getBytes(str) {
	            var cArr = str.match(/[^\x00-\xff]/ig);
	            return str.length + (cArr == null ? 0 : cArr.length);
	        },

	        /** 
	         * 文本编辑框文字聚焦到最后
	         * <pre>示例：<br>
	         * MZ.string.textFocusEnd(document.getElementById('text'));
	         * </pre>
	         * @param {Object} textObj 必选参数，文本框DOM对象
	         */
	        textFocusEnd: function textFocusEnd(textObj) {
	            if (textObj) {
	                textObj.focus();
	                var len = textObj.value.length;
	                if (document.selection) {
	                    //IE
	                    var sel = textObj.createTextRange();
	                    sel.moveStart('character', len);
	                    sel.collapse();
	                    sel.select();
	                } else if (typeof textObj.selectionStart == 'number' && typeof textObj.selectionEnd == 'number') {
	                    textObj.selectionStart = textObj.selectionEnd = len; //非IE
	                }
	            }
	        }

	    }));

	    //定义缩写

	    MZ.string = new MZ.utils.string();
	})();

/***/ },

/***/ 13:
/***/ function(module, exports) {

	/**
	 * @fileOverview 对话框，依赖core/namespace,utils/string.js
	 */

	(function () {
	    //用于弹出层叠加，最多允许5层叠加
	    window.MzDialogBzindex = 9996; //弹层z-index
	    window.MzDialogLzindex = 9995; //遮罩层z-index
	    /**对话框
	     *@namespace
	     *@name MZ.dialog
	     */
	    MZ.namespace('MZ.ui.dialog',
	    /**@lends MZ.dialog */
	    MZ.extend({
	        /**自定义样式   MZ.dialog.cssClass='xxxxx_dialog'; 通过设置自定义样式修改dialog的CSS，默认不设置
	         * @field
	         */
	        cssClass: '',
	        /**
	         *对话框的配置参数
	         *@param {Object} options 所有的参数
	         *@param {String} options.type 对话框类型，用于生成简单的对话框 'alert' | 'confirm'，复杂的调用base方法
	         *@param {Number} options.width 对话框 body的宽度
	         *@param {Number} options.height 对话框 body的高度
	         *@param {String} options.hdDisplay 对话框 header的显示状态   'none' | ''
	         *@param {String} options.ftDisplay 对话框 header的显示状态   'none' | ''
	         *@param {String} options.btnSure 对话框 确认按钮的文字
	         *@param {String} options.btnCancel 对话框 取消按钮的文字
	         *@param {String} options.idSure 对话框 确认按钮的id
	         *@param {String} options.idCancel 对话框 取消按钮的id
	         *@param {String} options.btnAlign 对话框 按钮的位置显示   'left' | 'right' | 'center'
	         *@param {String} options.title 对话框 标题
	         *@param {String} options.content 对话框 内容
	         *@param {String} options.waiting 点击按钮后ajax请求的等待文字
	         *@param {String} options.controlClose 是否自己控制对话框的关闭
	         *@param {Function} options.fnSure 点击确定按钮后触发
	         *@param {Function} options.fnCancel 点击取消按钮后触发
	         *@param {Function} options.callback 生成对话框后的回调，用来控制对话框生成后的一些自定义方法
	         *@param {Function} options.alertCallback 点击按钮后的回调，只用于alert方法
	         *@param {Function} options.confirmCallback 点击按钮后的回调，只用于confirm方法
	         *@returns {Object}
	         */
	        getOptions: function getOptions(options) {
	            var self = this;
	            var rdm = Math.ceil(Math.random() * 10000000);
	            rdm = '_' + rdm;
	            this.rdm = rdm;
	            return {
	                type: options.type || 'alert',
	                width: options.width || '',
	                height: options.height || '',
	                hdDisplay: options.hdDisplay || '',
	                ftDisplay: options.ftDisplay || '',
	                idSure: options.idSure || '',
	                idCancel: options.idCancel || '',
	                btnSure: options.btnSure || '确定',
	                btnCancel: options.btnCancel || '取消',
	                btnAlign: options.btnAlign || 'right',
	                btnObj: options.btnObj || {},
	                title: options.title || '系统提示',
	                content: options.content || '系统提示',
	                waiting: options.waiting || '',
	                controlClose: options.controlClose || true,
	                cssClass: this.cssClass || options.cssClass,
	                fnSure: options.fnSure || function () {
	                    self.close(rdm);
	                },
	                fnCancel: options.fnCancel || function () {
	                    self.close(rdm);
	                },
	                callback: options.callback || function () {},
	                alertCallback: options.alertCallback || function () {},
	                confirmCallback: options.confirmCallback || function () {},
	                id: options.id || '',
	                rdm: rdm || ''
	            };
	        },
	        /**
	         *初始化dialog
	         *@param {Object} options 对话框的配置参数
	         *@returns {Object}
	         */
	        render: function render(options, callback) {
	            var data = this.getOptions(options);

	            this.insertHtml(data);
	            this.initEvents(data);
	            return this;
	        },
	        /**
	         *插入对话框的dom
	         *@param {Object} data 对话框的配置参数
	         */
	        insertHtml: function insertHtml(data) {
	            var self = this;
	            $('body').append(this.tplHtml(data));
	            var mzUiDialog = $('#mzUiDialog' + data.rdm);
	            mzUiDialog.fadeIn(300);
	            var callback = data.callback && data.callback(function () {
	                //ajax生成的DOM，需要在回调里设置对话框位置
	                self.setDialogPosition(mzUiDialog);
	            });
	            this.setDialogPosition(mzUiDialog);
	        },
	        setDialogPosition: function setDialogPosition(mzUiDialog) {
	            //设置对话框位置
	            var height = mzUiDialog.height();
	            var width = mzUiDialog.width();
	            var bodyW = $(window).width();
	            var bodyH = $(window).height();
	            mzUiDialog.css({
	                top: $(window).scrollTop() + (bodyH - height) / 2,
	                left: $(window).scrollLeft() + (bodyW - width) / 2
	            });
	        },
	        /**
	         *绑定事件 确定 | 取消 | 关闭
	         *@param {Object} data 对话框的配置参数
	         *@param {String} data.rdm 对话框的rdm
	         */
	        initEvents: function initEvents(data) {
	            var self = this;
	            var rdm = data.rdm;
	            var dialog = $('.mzui_dialog');
	            dialog.on('click', '.dialog_sure', function () {
	                data.fnSure(self, rdm);
	                data.confirmCallback('ok');
	                data.alertCallback('ok');
	                if (data.controlClose) {
	                    self.close(rdm);
	                }
	            });
	            dialog.on('click', '.dialog_cancel', function () {
	                data.fnCancel(self, rdm);
	                data.confirmCallback('cancel');
	                if (data.controlClose) {
	                    self.close(rdm);
	                }
	            });
	            dialog.on('click', '#mzDialogClose' + rdm, function () {
	                self.close(rdm);
	            });
	        },
	        /**
	         *对话框通用方法
	         *@param {Object} options 对话框的配置参数
	         *@example
	         MZ.dialog.base({
	            content: 'fffff',
	            title: 'gggggg',
	            type:'confirm',
	            fnSure: function(dialog,rdm) {
	                dialog.close(rdm);
	            },
	            fnCancel:function(dialog,rdm){
	                dialog.close(rdm);
	            }
	         });
	         <script>
	         function dialogBase(){
	            MZ.dialog.base({
	                content: 'fffff',
	                title: 'gggggg',
	                type:'confirm',
	                fnSure: function(dialog,rdm) {
	                    dialog.close(rdm);
	                },
	                fnCancel:function(dialog,rdm){
	                    dialog.close(rdm);
	                }
	             });
	         }
	         </script>
	         <button onclick="dialogBase()">对话框通用方法</button>
	         */

	        base: function base(options, callback) {
	            this.render(options, callback);
	        },
	        /**
	         *对话框alert方法
	         *@param {String} content 对话框内容
	         *@param {String} title 对话框标题
	         *@param {Function} callback 对话框点击确定后的回调
	         *@example
	         MZ.dialog.alert('xxxx', 'uuuuu');
	         <script>
	         function dialogAlert(){
	           MZ.dialog.alert('xxxx', 'uuuuu');
	         }
	         </script>
	         <button onclick="dialogAlert()">对话框alert方法</button>
	         */
	        alert: function alert(content, title, callback) {
	            var options = {
	                content: content,
	                title: title,
	                width: 400,
	                alertCallback: callback
	            };
	            options.type = 'alert';
	            this.render(options);
	        },
	        /**
	         *对话框confirm方法
	         *@param {String} content 对话框内容
	         *@param {String} title 对话框标题
	         *@param {Function} callback 对话框点击确定或者取消后的回调
	         *@example
	         MZ.dialog.confirm('xxxx', 'uuuuu',function(action){
	            console.log(action)//action=='ok' or 'cancel'
	         });
	         <script>
	         function dialogConfirm(){
	           MZ.dialog.confirm('xxxx', 'uuuuu',function(action){
	            console.log(action)//action=='ok' or 'cancel'
	           });
	         }
	         </script>
	         <button onclick="dialogConfirm()">对话框confirm方法</button>
	         */
	        confirm: function confirm(content, title, callback) {
	            var options = {
	                content: content,
	                title: title,
	                width: 600,
	                confirmCallback: callback
	            };
	            options.type = 'confirm';
	            this.render(options);
	        },
	        /**
	         *生成对话框的dom
	         *@param {Object} data 对话框的配置参数
	         *@returns {String}
	         */
	        tplHtml: function tplHtml(data) {
	            var height = $(document).height();
	            var type = data.type;
	            var ftHtml = '';
	            if (type == 'alert') {
	                ftHtml = this.ftSureTplHtml();
	            }
	            if (type == 'confirm') {
	                ftHtml = this.ftSureTplHtml() + this.ftCancelTplHtml();
	            }
	            if ($('.mzui_dialog').length > 0) {
	                MzDialogBzindex = MzDialogBzindex + 1;
	                MzDialogLzindex = MzDialogLzindex + 1;
	            }
	            var html = ['<div id="mzUiDialog{rdm}" class="mzui_dialog {cssClass}" style="width:{width}px;height:{height}px; display:none;z-index:' + MzDialogBzindex + ';">', '<div class="dialog_hd" style="display:{hdDisplay};">', '<a href="javascript:;" id="mzDialogClose{rdm}" class="mz_dialog_close"></a>', '<h3>{title}</h3>', '</div>', '<div class="dialog_bd" id="{id}">', '<div class="dialog_con modal-body">{content}</div>', '</div>', '<div class="dialog_ft" style="text-align:{btnAlign};display:{ftDisplay};">', ftHtml, '</div>', '</div>', '<div class="mzui_dialog_layer" style="z-index:' + MzDialogLzindex + ';height:' + height + 'px;"></div>'].join("");
	            html = MZ.string.format(html, data);
	            return html;
	        },
	        /**
	         *生成对话框的确定按钮
	         *@returns {String}
	         */
	        ftSureTplHtml: function ftSureTplHtml() {
	            var html = ['<a href="javascript:;" id="{idSure}" class="dialog_sure btn_normal" title="">{btnSure}</a>'].join("");
	            return html;
	        },
	        /**
	         *生成对话框的取消按钮
	         *@returns {String}
	         */
	        ftCancelTplHtml: function ftCancelTplHtml() {
	            var html = ['<a href="javascript:;" id="{idCancel}" class="dialog_cancel btn_normal" title="">{btnCancel}</a>'].join("");
	            return html;
	        },
	        /**
	         *关闭对话框
	         *@param {String} rdm  对话框的rdm
	         */
	        close: function close(rdm) {
	            $('#mzUiDialog' + rdm).next().fadeOut(100);
	            $('#mzUiDialog' + rdm).fadeOut(100);
	            //延时一点remove，关闭之前有可能要获取DOM节点
	            setTimeout(function () {
	                $('#mzUiDialog' + rdm).next().remove();
	                $('#mzUiDialog' + rdm).remove();
	            }, 200);
	        }

	    }));

	    //定义缩写
	    MZ.dialog = new MZ.ui.dialog();
	    //MZ.dialog.cssClass = ''; //自定义UI
	})();

/***/ },

/***/ 14:
/***/ function(module, exports) {

	/* Created by songjing on 2015/9/7 */
	var model = {
	    develop: 'dev',
	    prex: 'http://scene.meizu.cn',
	    apiUrl: {
	        'auth': '',
	        'list': '/home.php/Index/next_page.html', //列表ajax加载分页接口 p
	        'model': '/home.php/Index/next_template_page', //列表ajax加载模板分页接口 p
	        'setStatus': '/home.php/Index/setstatus.html', //设置上下线接口  hid, status 0下线 1上线
	        'setInfo': '/home.php/Index/setinfo.html', //修改标题和描述接口  hid, title, description
	        'getPicList': '', //获取编辑器图片列表
	        'del': '/home.php/Index/del.html', //删除  hid
	        'uploadcover': '/home.php/File/uploadCover.html', //列表页图片上传，带裁剪
	        'uploadpic': '/home.php/File/uploadPicture.html', //图片上传
	        'uploadmodelpic': '/home.php/File/uploadTemplatePicture.html', //模板图片上传
	        'uploadaudio': '/home.php/File/uploadAudio.html', //音频上传
	        'save': '/home.php/Editor/save_data.html', //保存
	        'checkuser': '/home.php/User/check_user.html', //验证用户权限
	        'getModel': '/home.php/Editor/editor_template.html', //获取模板数据
	        'countDay': '/home.php/Datareport/report_day.html', //获取按天的统计数据接口      hid,startTime,endTime
	        'countHour': '/home.php/Datareport/report_hour.html' //获取按小时的统计数据接口      hid,startTime,endTime
	    },
	    tipInfo: {
	        'endtip': '已经到达最后一页了！',
	        'del': '确定要删除吗？',
	        'offline': '确定要下线吗？',
	        'online': '确定要上线吗？',
	        'noresponse': '无可用数据！',
	        'modsuccess': '修改成功！',
	        'modfailure': '修改失败！',
	        'delsuccess': '删除成功',
	        'delfailure': '删除失败',
	        'buildleftfail': '构建左侧失败！',
	        'buildpreviewfail': '构建预览失败！',
	        'buildnodata': '缺少页面数据',
	        'checkauthfail': '获取用户身份失败',
	        'templeSaveTip': '请复制上方文本框内文本，当前仅显示编辑中的模板信息',
	        'delNotEmpty': '项目内页面数不能为零！',
	        'endmstart': '结束日期不能小于开始日期！',
	        'insertPicError': '请先选择图片！',
	        'deltip': '确定要删除本页吗？',
	        'pageTooMore': '页面数超过限制！'

	    },
	    errorCode: {
	        'Q_TYPE_DENIED': '上传文件类型不匹配',
	        'F_EXCEED_SIZE': '文件大小超过限制',
	        'F_DUPLICATE': '文件已存在',
	        'Q_EXCEED_NUM_LIMIT': '文件数量超出限制',
	        'Q_EXCEED_SIZE_LIMIT': '文件过大'
	    }
	};

	//区分开发环境或者正式环境
	if (model.develop == 'dev') {
	    model.prefix = '';
	    $.extend(model.apiUrl, {
	        uploadcover: 'server/fileupload.php',
	        checkuser: 'json/checkuser.json',
	        list: 'json/list.json',
	        countHour: 'json/count_hour.json',
	        countDay: 'json/count_day.json',
	        getPicList: 'json/pic_list.json',
	        uploadpic: 'server/fileupload.php',
	        uploadmodelpic: 'server/fileupload.php',
	        uploadaudio: 'server/fileupload.php'
	    });
	}

	module.exports = model;

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var _data = __webpack_require__(16);

	var dataAction = _interopRequireWildcard(_data);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var blockbox = function blockbox(box, opts) {
		this.$box = box;
		this.opts = opts;
		if (this.opts) {
			this.callback = this.opts.callback ? this.opts.callback : {};
		}
		this.bind();
	};
	blockbox.prototype = {
		bind: function bind() {
			var _self = this;
			if (!_self.$box.is(':visible')) {
				_self.$box.fadeIn(200);
				if (_self.opts) {
					if (_self.opts.showbg) {
						if ($('.bg').length <= 0) {
							$('<div class="bg"></div>').appendTo($('body'));
						}
						var b = $('.bg');
						if (!b.is(':visible')) {
							b.show();
						}
					}
					if (typeof _self.callback === 'function') _self.callback();
				}
			}
			var newbox = {
				'box': this.$box,
				'btn': this.opts ? this.opts.btn : '',
				'closebtn': this.opts ? this.opts.closebtn : ''
			};
			var exist = '-1';
			if (dataAction.boxlist.length > 0) {
				$.each(dataAction.boxlist, function (index) {
					if (this.box[0] == _self.$box[0]) {
						exist = index;
						return false;
					}
				});
				if (exist != '-1') {
					dataAction.boxlist[exist] = newbox;
				} else {
					dataAction.boxlist.push(newbox);
				}
			} else {
				dataAction.boxlist.push(newbox);
			}
		}
	};

	module.exports = blockbox;

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var _objectAssign = __webpack_require__(17);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pagejson = [];
	var template = [];
	var boxlist = [];
	var musiclist = [];

	var get = function get(type, key) {
	    var arr;
	    if (type == 'page') {
	        arr = pagejson;
	    } else if (type == 'temp') {
	        arr = template;
	    }
	    if (!isNaN(key)) {
	        key = arr.length - 1;
	    }
	    return (0, _objectAssign2.default)(arr[key] || []);
	};

	var set = function set(type, val) {
	    var arr;
	    if (type == 'page') {
	        arr = pagejson;
	    } else if (type == 'temp') {
	        arr = template;
	    }
	    arr.push(val);
	    return arr.length - 1;
	};

	var isParent = function isParent(obj, parentObj) {
	    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != "BODY") {
	        if (obj == parentObj) {
	            return true;
	        }
	        obj = obj.parentNode;
	    }
	    return false;
	};

	module.exports = {
	    get: get,
	    set: set,
	    boxlist: boxlist,
	    musiclist: musiclist,
	    isParent: isParent
	};

/***/ },

/***/ 17:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },

/***/ 24:
8,

/***/ 25:
8,

/***/ 26:
8,

/***/ 27:
8,

/***/ 41:
8,

/***/ 43:
8,

/***/ 105:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*! WebUploader 0.1.5 */ /**
	 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
	 *
	 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
	 */(function(root,factory){var modules={}, // 内部require, 简单不完全实现。
	// https://github.com/amdjs/amdjs-api/wiki/require
	_require=function _require(deps,callback){var args,len,i; // 如果deps不是数组，则直接返回指定module
	if(typeof deps==='string'){return getModule(deps);}else {args=[];for(len=deps.length,i=0;i<len;i++){args.push(getModule(deps[i]));}return callback.apply(null,args);}}, // 内部define，暂时不支持不指定id.
	_define=function _define(id,deps,factory){if(arguments.length===2){factory=deps;deps=null;}_require(deps||[],function(){setModule(id,factory,arguments);});}, // 设置module, 兼容CommonJs写法。
	setModule=function setModule(id,factory,args){var module={exports:factory},returned;if(typeof factory==='function'){args.length||(args=[_require,module.exports,module]);returned=factory.apply(null,args);returned!==undefined&&(module.exports=returned);}modules[id]=module.exports;}, // 根据id获取module
	getModule=function getModule(id){var module=modules[id]||root[id];if(!module){throw new Error('`'+id+'` is undefined');}return module;}, // 将所有modules，将路径ids装换成对象。
	exportsTo=function exportsTo(obj){var key,host,parts,part,last,ucFirst; // make the first character upper case.
	ucFirst=function ucFirst(str){return str&&str.charAt(0).toUpperCase()+str.substr(1);};for(key in modules){host=obj;if(!modules.hasOwnProperty(key)){continue;}parts=key.split('/');last=ucFirst(parts.pop());while(part=ucFirst(parts.shift())){host[part]=host[part]||{};host=host[part];}host[last]=modules[key];}return obj;},makeExport=function makeExport(dollar){root.__dollar=dollar; // exports every module.
	return exportsTo(factory(root,_define,_require));},origin;if(( false?'undefined':_typeof(module))==='object'&&_typeof(module.exports)==='object'){ // For CommonJS and CommonJS-like environments where a proper window is present,
	module.exports=makeExport();}else if(true){ // Allow using this built library as an AMD module
	// in another project. That other project will only
	// see this AMD call, not the internal modules in
	// the closure below.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (makeExport), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { // Browser globals case. Just assign the
	// result to a property on the global.
	origin=root.WebUploader;root.WebUploader=makeExport();root.WebUploader.noConflict=function(){root.WebUploader=origin;};}})(window,function(window,define,require){ /**
	     * @fileOverview jQuery or Zepto
	     */define('dollar-third',[],function(){var $=window.__dollar||window.jQuery||window.Zepto;if(!$){throw new Error('jQuery or Zepto not found!');}return $;}); /**
	     * @fileOverview Dom 操作相关
	     */define('dollar',['dollar-third'],function(_){return _;}); /**
	     * @fileOverview 使用jQuery的Promise
	     */define('promise-third',['dollar'],function($){return {Deferred:$.Deferred,when:$.when,isPromise:function isPromise(anything){return anything&&typeof anything.then==='function';}};}); /**
	     * @fileOverview Promise/A+
	     */define('promise',['promise-third'],function(_){return _;}); /**
	     * @fileOverview 基础类方法。
	     */ /**
	     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
	     *
	     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
	     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
	     *
	     * * module `base`：WebUploader.Base
	     * * module `file`: WebUploader.File
	     * * module `lib/dnd`: WebUploader.Lib.Dnd
	     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
	     *
	     *
	     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
	     * @module WebUploader
	     * @title WebUploader API文档
	     */define('base',['dollar','promise'],function($,promise){var noop=function noop(){},call=Function.call; // http://jsperf.com/uncurrythis
	// 反科里化
	function uncurryThis(fn){return function(){return call.apply(fn,arguments);};}function bindFn(fn,context){return function(){return fn.apply(context,arguments);};}function createObject(proto){var f;if(Object.create){return Object.create(proto);}else {f=function f(){};f.prototype=proto;return new f();}} /**
	         * 基础类，提供一些简单常用的方法。
	         * @class Base
	         */return { /**
	             * @property {String} version 当前版本号。
	             */version:'0.1.5', /**
	             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
	             */$:$,Deferred:promise.Deferred,isPromise:promise.isPromise,when:promise.when, /**
	             * @description  简单的浏览器检查结果。
	             *
	             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
	             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
	             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
	             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
	             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
	             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
	             *
	             * @property {Object} [browser]
	             */browser:function(ua){var ret={},webkit=ua.match(/WebKit\/([\d.]+)/),chrome=ua.match(/Chrome\/([\d.]+)/)||ua.match(/CriOS\/([\d.]+)/),ie=ua.match(/MSIE\s([\d\.]+)/)||ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),firefox=ua.match(/Firefox\/([\d.]+)/),safari=ua.match(/Safari\/([\d.]+)/),opera=ua.match(/OPR\/([\d.]+)/);webkit&&(ret.webkit=parseFloat(webkit[1]));chrome&&(ret.chrome=parseFloat(chrome[1]));ie&&(ret.ie=parseFloat(ie[1]));firefox&&(ret.firefox=parseFloat(firefox[1]));safari&&(ret.safari=parseFloat(safari[1]));opera&&(ret.opera=parseFloat(opera[1]));return ret;}(navigator.userAgent), /**
	             * @description  操作系统检查结果。
	             *
	             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
	             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
	             * @property {Object} [os]
	             */os:function(ua){var ret={}, // osx = !!ua.match( /\(Macintosh\; Intel / ),
	android=ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),ios=ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/); // osx && (ret.osx = true);
	android&&(ret.android=parseFloat(android[1]));ios&&(ret.ios=parseFloat(ios[1].replace(/_/g,'.')));return ret;}(navigator.userAgent), /**
	             * 实现类与类之间的继承。
	             * @method inherits
	             * @grammar Base.inherits( super ) => child
	             * @grammar Base.inherits( super, protos ) => child
	             * @grammar Base.inherits( super, protos, statics ) => child
	             * @param  {Class} super 父类
	             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
	             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
	             * @param  {Object} [statics] 静态属性或方法。
	             * @return {Class} 返回子类。
	             * @example
	             * function Person() {
	             *     console.log( 'Super' );
	             * }
	             * Person.prototype.hello = function() {
	             *     console.log( 'hello' );
	             * };
	             *
	             * var Manager = Base.inherits( Person, {
	             *     world: function() {
	             *         console.log( 'World' );
	             *     }
	             * });
	             *
	             * // 因为没有指定构造器，父类的构造器将会执行。
	             * var instance = new Manager();    // => Super
	             *
	             * // 继承子父类的方法
	             * instance.hello();    // => hello
	             * instance.world();    // => World
	             *
	             * // 子类的__super__属性指向父类
	             * console.log( Manager.__super__ === Person );    // => true
	             */inherits:function inherits(Super,protos,staticProtos){var child;if(typeof protos==='function'){child=protos;protos=null;}else if(protos&&protos.hasOwnProperty('constructor')){child=protos.constructor;}else {child=function child(){return Super.apply(this,arguments);};} // 复制静态方法
	$.extend(true,child,Super,staticProtos||{}); /* jshint camelcase: false */ // 让子类的__super__属性指向父类。
	child.__super__=Super.prototype; // 构建原型，添加原型方法或属性。
	// 暂时用Object.create实现。
	child.prototype=createObject(Super.prototype);protos&&$.extend(true,child.prototype,protos);return child;}, /**
	             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
	             * @method noop
	             */noop:noop, /**
	             * 返回一个新的方法，此方法将已指定的`context`来执行。
	             * @grammar Base.bindFn( fn, context ) => Function
	             * @method bindFn
	             * @example
	             * var doSomething = function() {
	             *         console.log( this.name );
	             *     },
	             *     obj = {
	             *         name: 'Object Name'
	             *     },
	             *     aliasFn = Base.bind( doSomething, obj );
	             *
	             *  aliasFn();    // => Object Name
	             *
	             */bindFn:bindFn, /**
	             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
	             * @grammar Base.log( args... ) => undefined
	             * @method log
	             */log:function(){if(window.console){return bindFn(console.log,console);}return noop;}(),nextTick:function(){return function(cb){setTimeout(cb,1);}; // @bug 当浏览器不在当前窗口时就停了。
	// var next = window.requestAnimationFrame ||
	//     window.webkitRequestAnimationFrame ||
	//     window.mozRequestAnimationFrame ||
	//     function( cb ) {
	//         window.setTimeout( cb, 1000 / 60 );
	//     };
	// // fix: Uncaught TypeError: Illegal invocation
	// return bindFn( next, window );
	}(), /**
	             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
	             * 将用来将非数组对象转化成数组对象。
	             * @grammar Base.slice( target, start[, end] ) => Array
	             * @method slice
	             * @example
	             * function doSomthing() {
	             *     var args = Base.slice( arguments, 1 );
	             *     console.log( args );
	             * }
	             *
	             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
	             */slice:uncurryThis([].slice), /**
	             * 生成唯一的ID
	             * @method guid
	             * @grammar Base.guid() => String
	             * @grammar Base.guid( prefx ) => String
	             */guid:function(){var counter=0;return function(prefix){var guid=(+new Date()).toString(32),i=0;for(;i<5;i++){guid+=Math.floor(Math.random()*65535).toString(32);}return (prefix||'wu_')+guid+(counter++).toString(32);};}(), /**
	             * 格式化文件大小, 输出成带单位的字符串
	             * @method formatSize
	             * @grammar Base.formatSize( size ) => String
	             * @grammar Base.formatSize( size, pointLength ) => String
	             * @grammar Base.formatSize( size, pointLength, units ) => String
	             * @param {Number} size 文件大小
	             * @param {Number} [pointLength=2] 精确到的小数点数。
	             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
	             * @example
	             * console.log( Base.formatSize( 100 ) );    // => 100B
	             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
	             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
	             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
	             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
	             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
	             */formatSize:function formatSize(size,pointLength,units){var unit;units=units||['B','K','M','G','TB'];while((unit=units.shift())&&size>1024){size=size/1024;}return (unit==='B'?size:size.toFixed(pointLength||2))+unit;}};}); /**
	     * 事件处理类，可以独立使用，也可以扩展给对象使用。
	     * @fileOverview Mediator
	     */define('mediator',['base'],function(Base){var $=Base.$,slice=[].slice,separator=/\s+/,protos; // 根据条件过滤出事件handlers.
	function findHandlers(arr,name,callback,context){return $.grep(arr,function(handler){return handler&&(!name||handler.e===name)&&(!callback||handler.cb===callback||handler.cb._cb===callback)&&(!context||handler.ctx===context);});}function eachEvent(events,callback,iterator){ // 不支持对象，只支持多个event用空格隔开
	$.each((events||'').split(separator),function(_,key){iterator(key,callback);});}function triggerHanders(events,args){var stoped=false,i=-1,len=events.length,handler;while(++i<len){handler=events[i];if(handler.cb.apply(handler.ctx2,args)===false){stoped=true;break;}}return !stoped;}protos={ /**
	             * 绑定事件。
	             *
	             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
	             * ```javascript
	             * var obj = {};
	             *
	             * // 使得obj有事件行为
	             * Mediator.installTo( obj );
	             *
	             * obj.on( 'testa', function( arg1, arg2 ) {
	             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
	             * });
	             *
	             * obj.trigger( 'testa', 'arg1', 'arg2' );
	             * ```
	             *
	             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
	             * 切会影响到`trigger`方法的返回值，为`false`。
	             *
	             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
	             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
	             * ```javascript
	             * obj.on( 'all', function( type, arg1, arg2 ) {
	             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
	             * });
	             * ```
	             *
	             * @method on
	             * @grammar on( name, callback[, context] ) => self
	             * @param  {String}   name     事件名，支持多个事件用空格隔开
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             * @class Mediator
	             */on:function on(name,callback,context){var me=this,set;if(!callback){return this;}set=this._events||(this._events=[]);eachEvent(name,callback,function(name,callback){var handler={e:name};handler.cb=callback;handler.ctx=context;handler.ctx2=context||me;handler.id=set.length;set.push(handler);});return this;}, /**
	             * 绑定事件，且当handler执行完后，自动解除绑定。
	             * @method once
	             * @grammar once( name, callback[, context] ) => self
	             * @param  {String}   name     事件名
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */once:function once(name,callback,context){var me=this;if(!callback){return me;}eachEvent(name,callback,function(name,callback){var once=function once(){me.off(name,once);return callback.apply(context||me,arguments);};once._cb=callback;me.on(name,once,context);});return me;}, /**
	             * 解除事件绑定
	             * @method off
	             * @grammar off( [name[, callback[, context] ] ] ) => self
	             * @param  {String}   [name]     事件名
	             * @param  {Function} [callback] 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */off:function off(name,cb,ctx){var events=this._events;if(!events){return this;}if(!name&&!cb&&!ctx){this._events=[];return this;}eachEvent(name,cb,function(name,cb){$.each(findHandlers(events,name,cb,ctx),function(){delete events[this.id];});});return this;}, /**
	             * 触发事件
	             * @method trigger
	             * @grammar trigger( name[, args...] ) => self
	             * @param  {String}   type     事件名
	             * @param  {*} [...] 任意参数
	             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
	             */trigger:function trigger(type){var args,events,allEvents;if(!this._events||!type){return this;}args=slice.call(arguments,1);events=findHandlers(this._events,type);allEvents=findHandlers(this._events,'all');return triggerHanders(events,args)&&triggerHanders(allEvents,arguments);}}; /**
	         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
	         * 主要目的是负责模块与模块之间的合作，降低耦合度。
	         *
	         * @class Mediator
	         */return $.extend({ /**
	             * 可以通过这个接口，使任何对象具备事件功能。
	             * @method installTo
	             * @param  {Object} obj 需要具备事件行为的对象。
	             * @return {Object} 返回obj.
	             */installTo:function installTo(obj){return $.extend(obj,protos);}},protos);}); /**
	     * @fileOverview Uploader上传类
	     */define('uploader',['base','mediator'],function(Base,Mediator){var $=Base.$; /**
	         * 上传入口类。
	         * @class Uploader
	         * @constructor
	         * @grammar new Uploader( opts ) => Uploader
	         * @example
	         * var uploader = WebUploader.Uploader({
	         *     swf: 'path_of_swf/Uploader.swf',
	         *
	         *     // 开起分片上传。
	         *     chunked: true
	         * });
	         */function Uploader(opts){this.options=$.extend(true,{},Uploader.options,opts);this._init(this.options);} // default Options
	// widgets中有相应扩展
	Uploader.options={};Mediator.installTo(Uploader.prototype); // 批量添加纯命令式方法。
	$.each({upload:'start-upload',stop:'stop-upload',getFile:'get-file',getFiles:'get-files',addFile:'add-file',addFiles:'add-file',sort:'sort-files',removeFile:'remove-file',cancelFile:'cancel-file',skipFile:'skip-file',retry:'retry',isInProgress:'is-in-progress',makeThumb:'make-thumb',md5File:'md5-file',getDimension:'get-dimension',addButton:'add-btn',predictRuntimeType:'predict-runtime-type',refresh:'refresh',disable:'disable',enable:'enable',reset:'reset'},function(fn,command){Uploader.prototype[fn]=function(){return this.request(command,arguments);};});$.extend(Uploader.prototype,{state:'pending',_init:function _init(opts){var me=this;me.request('init',opts,function(){me.state='ready';me.trigger('ready');});}, /**
	             * 获取或者设置Uploader配置项。
	             * @method option
	             * @grammar option( key ) => *
	             * @grammar option( key, val ) => self
	             * @example
	             *
	             * // 初始状态图片上传前不会压缩
	             * var uploader = new WebUploader.Uploader({
	             *     compress: null;
	             * });
	             *
	             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
	             * uploader.option( 'compress', {
	             *     width: 1600,
	             *     height: 1600
	             * });
	             */option:function option(key,val){var opts=this.options; // setter
	if(arguments.length>1){if($.isPlainObject(val)&&$.isPlainObject(opts[key])){$.extend(opts[key],val);}else {opts[key]=val;}}else { // getter
	return key?opts[key]:opts;}}, /**
	             * 获取文件统计信息。返回一个包含一下信息的对象。
	             * * `successNum` 上传成功的文件数
	             * * `progressNum` 上传中的文件数
	             * * `cancelNum` 被删除的文件数
	             * * `invalidNum` 无效的文件数
	             * * `uploadFailNum` 上传失败的文件数
	             * * `queueNum` 还在队列中的文件数
	             * * `interruptNum` 被暂停的文件数
	             * @method getStats
	             * @grammar getStats() => Object
	             */getStats:function getStats(){ // return this._mgr.getStats.apply( this._mgr, arguments );
	var stats=this.request('get-stats');return stats?{successNum:stats.numOfSuccess,progressNum:stats.numOfProgress, // who care?
	// queueFailNum: 0,
	cancelNum:stats.numOfCancel,invalidNum:stats.numOfInvalid,uploadFailNum:stats.numOfUploadFailed,queueNum:stats.numOfQueue,interruptNum:stats.numofInterrupt}:{};}, // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
	trigger:function trigger(type /*, args...*/){var args=[].slice.call(arguments,1),opts=this.options,name='on'+type.substring(0,1).toUpperCase()+type.substring(1);if( // 调用通过on方法注册的handler.
	Mediator.trigger.apply(this,arguments)===false|| // 调用opts.onEvent
	$.isFunction(opts[name])&&opts[name].apply(this,args)===false|| // 调用this.onEvent
	$.isFunction(this[name])&&this[name].apply(this,args)===false|| // 广播所有uploader的事件。
	Mediator.trigger.apply(Mediator,[this,type].concat(args))===false){return false;}return true;}, /**
	             * 销毁 webuploader 实例
	             * @method destroy
	             * @grammar destroy() => undefined
	             */destroy:function destroy(){this.request('destroy',arguments);this.off();}, // widgets/widget.js将补充此方法的详细文档。
	request:Base.noop}); /**
	         * 创建Uploader实例，等同于new Uploader( opts );
	         * @method create
	         * @class Base
	         * @static
	         * @grammar Base.create( opts ) => Uploader
	         */Base.create=Uploader.create=function(opts){return new Uploader(opts);}; // 暴露Uploader，可以通过它来扩展业务逻辑。
	Base.Uploader=Uploader;return Uploader;}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/runtime',['base','mediator'],function(Base,Mediator){var $=Base.$,factories={}, // 获取对象的第一个key
	getFirstKey=function getFirstKey(obj){for(var key in obj){if(obj.hasOwnProperty(key)){return key;}}return null;}; // 接口类。
	function Runtime(options){this.options=$.extend({container:document.body},options);this.uid=Base.guid('rt_');}$.extend(Runtime.prototype,{getContainer:function getContainer(){var opts=this.options,parent,container;if(this._container){return this._container;}parent=$(opts.container||document.body);container=$(document.createElement('div'));container.attr('id','rt_'+this.uid);container.css({position:'absolute',top:'0px',left:'0px',width:'1px',height:'1px',overflow:'hidden'});parent.append(container);parent.addClass('webuploader-container');this._container=container;this._parent=parent;return container;},init:Base.noop,exec:Base.noop,destroy:function destroy(){this._container&&this._container.remove();this._parent&&this._parent.removeClass('webuploader-container');this.off();}});Runtime.orders='html5,flash'; /**
	         * 添加Runtime实现。
	         * @param {String} type    类型
	         * @param {Runtime} factory 具体Runtime实现。
	         */Runtime.addRuntime=function(type,factory){factories[type]=factory;};Runtime.hasRuntime=function(type){return !!(type?factories[type]:getFirstKey(factories));};Runtime.create=function(opts,orders){var type,runtime;orders=orders||Runtime.orders;$.each(orders.split(/\s*,\s*/g),function(){if(factories[this]){type=this;return false;}});type=type||getFirstKey(factories);if(!type){throw new Error('Runtime Error');}runtime=new factories[type](opts);return runtime;};Mediator.installTo(Runtime.prototype);return Runtime;}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/client',['base','mediator','runtime/runtime'],function(Base,Mediator,Runtime){var cache;cache=function(){var obj={};return {add:function add(runtime){obj[runtime.uid]=runtime;},get:function get(ruid,standalone){var i;if(ruid){return obj[ruid];}for(i in obj){ // 有些类型不能重用，比如filepicker.
	if(standalone&&obj[i].__standalone){continue;}return obj[i];}return null;},remove:function remove(runtime){delete obj[runtime.uid];}};}();function RuntimeClient(component,standalone){var deferred=Base.Deferred(),runtime;this.uid=Base.guid('client_'); // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
	this.runtimeReady=function(cb){return deferred.done(cb);};this.connectRuntime=function(opts,cb){ // already connected.
	if(runtime){throw new Error('already connected!');}deferred.done(cb);if(typeof opts==='string'&&cache.get(opts)){runtime=cache.get(opts);} // 像filePicker只能独立存在，不能公用。
	runtime=runtime||cache.get(null,standalone); // 需要创建
	if(!runtime){runtime=Runtime.create(opts,opts.runtimeOrder);runtime.__promise=deferred.promise();runtime.once('ready',deferred.resolve);runtime.init();cache.add(runtime);runtime.__client=1;}else { // 来自cache
	Base.$.extend(runtime.options,opts);runtime.__promise.then(deferred.resolve);runtime.__client++;}standalone&&(runtime.__standalone=standalone);return runtime;};this.getRuntime=function(){return runtime;};this.disconnectRuntime=function(){if(!runtime){return;}runtime.__client--;if(runtime.__client<=0){cache.remove(runtime);delete runtime.__promise;runtime.destroy();}runtime=null;};this.exec=function(){if(!runtime){return;}var args=Base.slice(arguments);component&&args.unshift(component);return runtime.exec.apply(this,args);};this.getRuid=function(){return runtime&&runtime.uid;};this.destroy=function(destroy){return function(){destroy&&destroy.apply(this,arguments);this.trigger('destroy');this.off();this.exec('destroy');this.disconnectRuntime();};}(this.destroy);}Mediator.installTo(RuntimeClient.prototype);return RuntimeClient;}); /**
	     * @fileOverview 错误信息
	     */define('lib/dnd',['base','mediator','runtime/client'],function(Base,Mediator,RuntimeClent){var $=Base.$;function DragAndDrop(opts){opts=this.options=$.extend({},DragAndDrop.options,opts);opts.container=$(opts.container);if(!opts.container.length){return;}RuntimeClent.call(this,'DragAndDrop');}DragAndDrop.options={accept:null,disableGlobalDnd:false};Base.inherits(RuntimeClent,{constructor:DragAndDrop,init:function init(){var me=this;me.connectRuntime(me.options,function(){me.exec('init');me.trigger('ready');});}});Mediator.installTo(DragAndDrop.prototype);return DragAndDrop;}); /**
	     * @fileOverview 组件基类。
	     */define('widgets/widget',['base','uploader'],function(Base,Uploader){var $=Base.$,_init2=Uploader.prototype._init,_destroy=Uploader.prototype.destroy,IGNORE={},widgetClass=[];function isArrayLike(obj){if(!obj){return false;}var length=obj.length,type=$.type(obj);if(obj.nodeType===1&&length){return true;}return type==='array'||type!=='function'&&type!=='string'&&(length===0||typeof length==='number'&&length>0&&length-1 in obj);}function Widget(uploader){this.owner=uploader;this.options=uploader.options;}$.extend(Widget.prototype,{init:Base.noop, // 类Backbone的事件监听声明，监听uploader实例上的事件
	// widget直接无法监听事件，事件只能通过uploader来传递
	invoke:function invoke(apiName,args){ /*
	                    {
	                        'make-thumb': 'makeThumb'
	                    }
	                 */var map=this.responseMap; // 如果无API响应声明则忽略
	if(!map||!(apiName in map)||!(map[apiName] in this)||!$.isFunction(this[map[apiName]])){return IGNORE;}return this[map[apiName]].apply(this,args);}, /**
	             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
	             * @method request
	             * @grammar request( command, args ) => * | Promise
	             * @grammar request( command, args, callback ) => Promise
	             * @for  Uploader
	             */request:function request(){return this.owner.request.apply(this.owner,arguments);}}); // 扩展Uploader.
	$.extend(Uploader.prototype,{ /**
	             * @property {String | Array} [disableWidgets=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
	             */ // 覆写_init用来初始化widgets
	_init:function _init(){var me=this,widgets=me._widgets=[],deactives=me.options.disableWidgets||'';$.each(widgetClass,function(_,klass){(!deactives||! ~deactives.indexOf(klass._name))&&widgets.push(new klass(me));});return _init2.apply(me,arguments);},request:function request(apiName,args,callback){var i=0,widgets=this._widgets,len=widgets&&widgets.length,rlts=[],dfds=[],widget,rlt,promise,key;args=isArrayLike(args)?args:[args];for(;i<len;i++){widget=widgets[i];rlt=widget.invoke(apiName,args);if(rlt!==IGNORE){ // Deferred对象
	if(Base.isPromise(rlt)){dfds.push(rlt);}else {rlts.push(rlt);}}} // 如果有callback，则用异步方式。
	if(callback||dfds.length){promise=Base.when.apply(Base,dfds);key=promise.pipe?'pipe':'then'; // 很重要不能删除。删除了会死循环。
	// 保证执行顺序。让callback总是在下一个 tick 中执行。
	return promise[key](function(){var deferred=Base.Deferred(),args=arguments;if(args.length===1){args=args[0];}setTimeout(function(){deferred.resolve(args);},1);return deferred.promise();})[callback?key:'done'](callback||Base.noop);}else {return rlts[0];}},destroy:function destroy(){_destroy.apply(this,arguments);this._widgets=null;}}); /**
	         * 添加组件
	         * @grammar Uploader.register(proto);
	         * @grammar Uploader.register(map, proto);
	         * @param  {object} responseMap API 名称与函数实现的映射
	         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
	         * @method Uploader.register
	         * @for Uploader
	         * @example
	         * Uploader.register({
	         *     'make-thumb': 'makeThumb'
	         * }, {
	         *     init: function( options ) {},
	         *     makeThumb: function() {}
	         * });
	         *
	         * Uploader.register({
	         *     'make-thumb': function() {
	         *
	         *     }
	         * });
	         */Uploader.register=Widget.register=function(responseMap,widgetProto){var map={init:'init',destroy:'destroy',name:'anonymous'},klass;if(arguments.length===1){widgetProto=responseMap; // 自动生成 map 表。
	$.each(widgetProto,function(key){if(key[0]==='_'||key==='name'){key==='name'&&(map.name=widgetProto.name);return;}map[key.replace(/[A-Z]/g,'-$&').toLowerCase()]=key;});}else {map=$.extend(map,responseMap);}widgetProto.responseMap=map;klass=Base.inherits(Widget,widgetProto);klass._name=map.name;widgetClass.push(klass);return klass;}; /**
	         * 删除插件，只有在注册时指定了名字的才能被删除。
	         * @grammar Uploader.unRegister(name);
	         * @param  {string} name 组件名字
	         * @method Uploader.unRegister
	         * @for Uploader
	         * @example
	         *
	         * Uploader.register({
	         *     name: 'custom',
	         *
	         *     'make-thumb': function() {
	         *
	         *     }
	         * });
	         *
	         * Uploader.unRegister('custom');
	         */Uploader.unRegister=Widget.unRegister=function(name){if(!name||name==='anonymous'){return;} // 删除指定的插件。
	for(var i=widgetClass.length;i--;){if(widgetClass[i]._name===name){widgetClass.splice(i,1);}}};return Widget;}); /**
	     * @fileOverview DragAndDrop Widget。
	     */define('widgets/filednd',['base','uploader','lib/dnd','widgets/widget'],function(Base,Uploader,Dnd){var $=Base.$;Uploader.options.dnd=''; /**
	         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
	         * @namespace options
	         * @for Uploader
	         */ /**
	         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
	         * @namespace options
	         * @for Uploader
	         */ /**
	         * @event dndAccept
	         * @param {DataTransferItemList} items DataTransferItem
	         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
	         * @for  Uploader
	         */return Uploader.register({name:'dnd',init:function init(opts){if(!opts.dnd||this.request('predict-runtime-type')!=='html5'){return;}var me=this,deferred=Base.Deferred(),options=$.extend({},{disableGlobalDnd:opts.disableGlobalDnd,container:opts.dnd,accept:opts.accept}),dnd;this.dnd=dnd=new Dnd(options);dnd.once('ready',deferred.resolve);dnd.on('drop',function(files){me.request('add-file',[files]);}); // 检测文件是否全部允许添加。
	dnd.on('accept',function(items){return me.owner.trigger('dndAccept',items);});dnd.init();return deferred.promise();},destroy:function destroy(){this.dnd&&this.dnd.destroy();}});}); /**
	     * @fileOverview 错误信息
	     */define('lib/filepaste',['base','mediator','runtime/client'],function(Base,Mediator,RuntimeClent){var $=Base.$;function FilePaste(opts){opts=this.options=$.extend({},opts);opts.container=$(opts.container||document.body);RuntimeClent.call(this,'FilePaste');}Base.inherits(RuntimeClent,{constructor:FilePaste,init:function init(){var me=this;me.connectRuntime(me.options,function(){me.exec('init');me.trigger('ready');});}});Mediator.installTo(FilePaste.prototype);return FilePaste;}); /**
	     * @fileOverview 组件基类。
	     */define('widgets/filepaste',['base','uploader','lib/filepaste','widgets/widget'],function(Base,Uploader,FilePaste){var $=Base.$; /**
	         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
	         * @namespace options
	         * @for Uploader
	         */return Uploader.register({name:'paste',init:function init(opts){if(!opts.paste||this.request('predict-runtime-type')!=='html5'){return;}var me=this,deferred=Base.Deferred(),options=$.extend({},{container:opts.paste,accept:opts.accept}),paste;this.paste=paste=new FilePaste(options);paste.once('ready',deferred.resolve);paste.on('paste',function(files){me.owner.request('add-file',[files]);});paste.init();return deferred.promise();},destroy:function destroy(){this.paste&&this.paste.destroy();}});}); /**
	     * @fileOverview Blob
	     */define('lib/blob',['base','runtime/client'],function(Base,RuntimeClient){function Blob(ruid,source){var me=this;me.source=source;me.ruid=ruid;this.size=source.size||0; // 如果没有指定 mimetype, 但是知道文件后缀。
	if(!source.type&&this.ext&&~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)){this.type='image/'+(this.ext==='jpg'?'jpeg':this.ext);}else {this.type=source.type||'application/octet-stream';}RuntimeClient.call(me,'Blob');this.uid=source.uid||this.uid;if(ruid){me.connectRuntime(ruid);}}Base.inherits(RuntimeClient,{constructor:Blob,slice:function slice(start,end){return this.exec('slice',start,end);},getSource:function getSource(){return this.source;}});return Blob;}); /**
	     * 为了统一化Flash的File和HTML5的File而存在。
	     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
	     * @fileOverview File
	     */define('lib/file',['base','lib/blob'],function(Base,Blob){var uid=1,rExt=/\.([^.]+)$/;function File(ruid,file){var ext;this.name=file.name||'untitled'+uid++;ext=rExt.exec(file.name)?RegExp.$1.toLowerCase():''; // todo 支持其他类型文件的转换。
	// 如果有 mimetype, 但是文件名里面没有找出后缀规律
	if(!ext&&file.type){ext=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type)?RegExp.$1.toLowerCase():'';this.name+='.'+ext;}this.ext=ext;this.lastModifiedDate=file.lastModifiedDate||new Date().toLocaleString();Blob.apply(this,arguments);}return Base.inherits(Blob,File);}); /**
	     * @fileOverview 错误信息
	     */define('lib/filepicker',['base','runtime/client','lib/file'],function(Base,RuntimeClent,File){var $=Base.$;function FilePicker(opts){opts=this.options=$.extend({},FilePicker.options,opts);opts.container=$(opts.id);if(!opts.container.length){throw new Error('按钮指定错误');}opts.innerHTML=opts.innerHTML||opts.label||opts.container.html()||'';opts.button=$(opts.button||document.createElement('div'));opts.button.html(opts.innerHTML);opts.container.html(opts.button);RuntimeClent.call(this,'FilePicker',true);}FilePicker.options={button:null,container:null,label:null,innerHTML:null,multiple:true,accept:null,name:'file'};Base.inherits(RuntimeClent,{constructor:FilePicker,init:function init(){var me=this,opts=me.options,button=opts.button;button.addClass('webuploader-pick');me.on('all',function(type){var files;switch(type){case 'mouseenter':button.addClass('webuploader-pick-hover');break;case 'mouseleave':button.removeClass('webuploader-pick-hover');break;case 'change':files=me.exec('getFiles');me.trigger('select',$.map(files,function(file){file=new File(me.getRuid(),file); // 记录来源。
	file._refer=opts.container;return file;}),opts.container);break;}});me.connectRuntime(opts,function(){me.refresh();me.exec('init',opts);me.trigger('ready');});this._resizeHandler=Base.bindFn(this.refresh,this);$(window).on('resize',this._resizeHandler);},refresh:function refresh(){var shimContainer=this.getRuntime().getContainer(),button=this.options.button,width=button.outerWidth?button.outerWidth():button.width(),height=button.outerHeight?button.outerHeight():button.height(),pos=button.offset();width&&height&&shimContainer.css({bottom:'auto',right:'auto',width:width+'px',height:height+'px'}).offset(pos);},enable:function enable(){var btn=this.options.button;btn.removeClass('webuploader-pick-disable');this.refresh();},disable:function disable(){var btn=this.options.button;this.getRuntime().getContainer().css({top:'-99999px'});btn.addClass('webuploader-pick-disable');},destroy:function destroy(){var btn=this.options.button;$(window).off('resize',this._resizeHandler);btn.removeClass('webuploader-pick-disable webuploader-pick-hover '+'webuploader-pick');}});return FilePicker;}); /**
	     * @fileOverview 文件选择相关
	     */define('widgets/filepicker',['base','uploader','lib/filepicker','widgets/widget'],function(Base,Uploader,FilePicker){var $=Base.$;$.extend(Uploader.options,{ /**
	             * @property {Selector | Object} [pick=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
	             *
	             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
	             * * `label` {String} 请采用 `innerHTML` 代替
	             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
	             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
	             */pick:null, /**
	             * @property {Arroy} [accept=null]
	             * @namespace options
	             * @for Uploader
	             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
	             *
	             * * `title` {String} 文字描述
	             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
	             * * `mimeTypes` {String} 多个用逗号分割。
	             *
	             * 如：
	             *
	             * ```
	             * {
	             *     title: 'Images',
	             *     extensions: 'gif,jpg,jpeg,bmp,png',
	             *     mimeTypes: 'image/*'
	             * }
	             * ```
	             */accept:null /*{
	                title: 'Images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            }*/});return Uploader.register({name:'picker',init:function init(opts){this.pickers=[];return opts.pick&&this.addBtn(opts.pick);},refresh:function refresh(){$.each(this.pickers,function(){this.refresh();});}, /**
	             * @method addButton
	             * @for Uploader
	             * @grammar addButton( pick ) => Promise
	             * @description
	             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
	             * @example
	             * uploader.addButton({
	             *     id: '#btnContainer',
	             *     innerHTML: '选择文件'
	             * });
	             */addBtn:function addBtn(pick){var me=this,opts=me.options,accept=opts.accept,promises=[];if(!pick){return;}$.isPlainObject(pick)||(pick={id:pick});$(pick.id).each(function(){var options,picker,deferred;deferred=Base.Deferred();options=$.extend({},pick,{accept:$.isPlainObject(accept)?[accept]:accept,swf:opts.swf,runtimeOrder:opts.runtimeOrder,id:this});picker=new FilePicker(options);picker.once('ready',deferred.resolve);picker.on('select',function(files){me.owner.request('add-file',[files]);});picker.init();me.pickers.push(picker);promises.push(deferred.promise());});return Base.when.apply(Base,promises);},disable:function disable(){$.each(this.pickers,function(){this.disable();});},enable:function enable(){$.each(this.pickers,function(){this.enable();});},destroy:function destroy(){$.each(this.pickers,function(){this.destroy();});this.pickers=null;}});}); /**
	     * @fileOverview Image
	     */define('lib/image',['base','runtime/client','lib/blob'],function(Base,RuntimeClient,Blob){var $=Base.$; // 构造器。
	function Image(opts){this.options=$.extend({},Image.options,opts);RuntimeClient.call(this,'Image');this.on('load',function(){this._info=this.exec('info');this._meta=this.exec('meta');});} // 默认选项。
	Image.options={ // 默认的图片处理质量
	quality:90, // 是否裁剪
	crop:false, // 是否保留头部信息
	preserveHeaders:false, // 是否允许放大。
	allowMagnify:false}; // 继承RuntimeClient.
	Base.inherits(RuntimeClient,{constructor:Image,info:function info(val){ // setter
	if(val){this._info=val;return this;} // getter
	return this._info;},meta:function meta(val){ // setter
	if(val){this._meta=val;return this;} // getter
	return this._meta;},loadFromBlob:function loadFromBlob(blob){var me=this,ruid=blob.getRuid();this.connectRuntime(ruid,function(){me.exec('init',me.options);me.exec('loadFromBlob',blob);});},resize:function resize(){var args=Base.slice(arguments);return this.exec.apply(this,['resize'].concat(args));},crop:function crop(){var args=Base.slice(arguments);return this.exec.apply(this,['crop'].concat(args));},getAsDataUrl:function getAsDataUrl(type){return this.exec('getAsDataUrl',type);},getAsBlob:function getAsBlob(type){var blob=this.exec('getAsBlob',type);return new Blob(this.getRuid(),blob);}});return Image;}); /**
	     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
	     */define('widgets/image',['base','uploader','lib/image','widgets/widget'],function(Base,Uploader,Image){var $=Base.$,throttle; // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
	throttle=function(max){var occupied=0,waiting=[],tick=function tick(){var item;while(waiting.length&&occupied<max){item=waiting.shift();occupied+=item[0];item[1]();}};return function(emiter,size,cb){waiting.push([size,cb]);emiter.once('destroy',function(){occupied-=size;setTimeout(tick,1);});setTimeout(tick,1);};}(5*1024*1024);$.extend(Uploader.options,{ /**
	             * @property {Object} [thumb]
	             * @namespace options
	             * @for Uploader
	             * @description 配置生成缩略图的选项。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 110,
	             *     height: 110,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 70,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: true,
	             *
	             *     // 是否允许裁剪。
	             *     crop: true,
	             *
	             *     // 为空的话则保留原有图片格式。
	             *     // 否则强制转换成指定的类型。
	             *     type: 'image/jpeg'
	             * }
	             * ```
	             */thumb:{width:110,height:110,quality:70,allowMagnify:true,crop:true,preserveHeaders:false, // 为空的话则保留原有图片格式。
	// 否则强制转换成指定的类型。
	// IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
	// 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
	type:'image/jpeg'}, /**
	             * @property {Object} [compress]
	             * @namespace options
	             * @for Uploader
	             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 1600,
	             *     height: 1600,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 90,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: false,
	             *
	             *     // 是否允许裁剪。
	             *     crop: false,
	             *
	             *     // 是否保留头部meta信息。
	             *     preserveHeaders: true,
	             *
	             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
	             *     // 此属性可能会影响图片自动纠正功能
	             *     noCompressIfLarger: false,
	             *
	             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
	             *     compressSize: 0
	             * }
	             * ```
	             */compress:{width:1600,height:1600,quality:90,allowMagnify:false,crop:false,preserveHeaders:true}});return Uploader.register({name:'image', /**
	             * 生成缩略图，此过程为异步，所以需要传入`callback`。
	             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
	             *
	             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
	             *
	             * `callback`中可以接收到两个参数。
	             * * 第一个为error，如果生成缩略图有错误，此error将为真。
	             * * 第二个为ret, 缩略图的Data URL值。
	             *
	             * **注意**
	             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
	             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
	             *
	             * @method makeThumb
	             * @grammar makeThumb( file, callback ) => undefined
	             * @grammar makeThumb( file, callback, width, height ) => undefined
	             * @for Uploader
	             * @example
	             *
	             * uploader.on( 'fileQueued', function( file ) {
	             *     var $li = ...;
	             *
	             *     uploader.makeThumb( file, function( error, ret ) {
	             *         if ( error ) {
	             *             $li.text('预览错误');
	             *         } else {
	             *             $li.append('<img alt="" src="' + ret + '" />');
	             *         }
	             *     });
	             *
	             * });
	             */makeThumb:function makeThumb(file,cb,width,height){var opts,image;file=this.request('get-file',file); // 只预览图片格式。
	if(!file.type.match(/^image/)){cb(true);return;}opts=$.extend({},this.options.thumb); // 如果传入的是object.
	if($.isPlainObject(width)){opts=$.extend(opts,width);width=null;}width=width||opts.width;height=height||opts.height;image=new Image(opts);image.once('load',function(){file._info=file._info||image.info();file._meta=file._meta||image.meta(); // 如果 width 的值介于 0 - 1
	// 说明设置的是百分比。
	if(width<=1&&width>0){width=file._info.width*width;} // 同样的规则应用于 height
	if(height<=1&&height>0){height=file._info.height*height;}image.resize(width,height);}); // 当 resize 完后
	image.once('complete',function(){cb(false,image.getAsDataUrl(opts.type));image.destroy();});image.once('error',function(reason){cb(reason||true);image.destroy();});throttle(image,file.source.size,function(){file._info&&image.info(file._info);file._meta&&image.meta(file._meta);image.loadFromBlob(file.source);});},beforeSendFile:function beforeSendFile(file){var opts=this.options.compress||this.options.resize,compressSize=opts&&opts.compressSize||0,noCompressIfLarger=opts&&opts.noCompressIfLarger||false,image,deferred;file=this.request('get-file',file); // 只压缩 jpeg 图片格式。
	// gif 可能会丢失针
	// bmp png 基本上尺寸都不大，且压缩比比较小。
	if(!opts||! ~'image/jpeg,image/jpg'.indexOf(file.type)||file.size<compressSize||file._compressed){return;}opts=$.extend({},opts);deferred=Base.Deferred();image=new Image(opts);deferred.always(function(){image.destroy();image=null;});image.once('error',deferred.reject);image.once('load',function(){var width=opts.width,height=opts.height;file._info=file._info||image.info();file._meta=file._meta||image.meta(); // 如果 width 的值介于 0 - 1
	// 说明设置的是百分比。
	if(width<=1&&width>0){width=file._info.width*width;} // 同样的规则应用于 height
	if(height<=1&&height>0){height=file._info.height*height;}image.resize(width,height);});image.once('complete',function(){var blob,size; // 移动端 UC / qq 浏览器的无图模式下
	// ctx.getImageData 处理大图的时候会报 Exception
	// INDEX_SIZE_ERR: DOM Exception 1
	try{blob=image.getAsBlob(opts.type);size=file.size; // 如果压缩后，比原来还大则不用压缩后的。
	if(!noCompressIfLarger||blob.size<size){ // file.source.destroy && file.source.destroy();
	file.source=blob;file.size=blob.size;file.trigger('resize',blob.size,size);} // 标记，避免重复压缩。
	file._compressed=true;deferred.resolve();}catch(e){ // 出错了直接继续，让其上传原始图片
	deferred.resolve();}});file._info&&image.info(file._info);file._meta&&image.meta(file._meta);image.loadFromBlob(file.source);return deferred.promise();}});}); /**
	     * @fileOverview 文件属性封装
	     */define('file',['base','mediator'],function(Base,Mediator){var $=Base.$,idPrefix='WU_FILE_',idSuffix=0,rExt=/\.([^.]+)$/,statusMap={};function gid(){return idPrefix+idSuffix++;} /**
	         * 文件类
	         * @class File
	         * @constructor 构造函数
	         * @grammar new File( source ) => File
	         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
	         */function WUFile(source){ /**
	             * 文件名，包括扩展名（后缀）
	             * @property name
	             * @type {string}
	             */this.name=source.name||'Untitled'; /**
	             * 文件体积（字节）
	             * @property size
	             * @type {uint}
	             * @default 0
	             */this.size=source.size||0; /**
	             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
	             * @property type
	             * @type {string}
	             * @default 'application/octet-stream'
	             */this.type=source.type||'application/octet-stream'; /**
	             * 文件最后修改日期
	             * @property lastModifiedDate
	             * @type {int}
	             * @default 当前时间戳
	             */this.lastModifiedDate=source.lastModifiedDate||new Date()*1; /**
	             * 文件ID，每个对象具有唯一ID，与文件名无关
	             * @property id
	             * @type {string}
	             */this.id=gid(); /**
	             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
	             * @property ext
	             * @type {string}
	             */this.ext=rExt.exec(this.name)?RegExp.$1:''; /**
	             * 状态文字说明。在不同的status语境下有不同的用途。
	             * @property statusText
	             * @type {string}
	             */this.statusText=''; // 存储文件状态，防止通过属性直接修改
	statusMap[this.id]=WUFile.Status.INITED;this.source=source;this.loaded=0;this.on('error',function(msg){this.setStatus(WUFile.Status.ERROR,msg);});}$.extend(WUFile.prototype,{ /**
	             * 设置状态，状态变化时会触发`change`事件。
	             * @method setStatus
	             * @grammar setStatus( status[, statusText] );
	             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
	             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
	             */setStatus:function setStatus(status,text){var prevStatus=statusMap[this.id];typeof text!=='undefined'&&(this.statusText=text);if(status!==prevStatus){statusMap[this.id]=status; /**
	                     * 文件状态变化
	                     * @event statuschange
	                     */this.trigger('statuschange',status,prevStatus);}}, /**
	             * 获取文件状态
	             * @return {File.Status}
	             * @example
	                     文件状态具体包括以下几种类型：
	                     {
	                         // 初始化
	                        INITED:     0,
	                        // 已入队列
	                        QUEUED:     1,
	                        // 正在上传
	                        PROGRESS:     2,
	                        // 上传出错
	                        ERROR:         3,
	                        // 上传成功
	                        COMPLETE:     4,
	                        // 上传取消
	                        CANCELLED:     5
	                    }
	             */getStatus:function getStatus(){return statusMap[this.id];}, /**
	             * 获取文件原始信息。
	             * @return {*}
	             */getSource:function getSource(){return this.source;},destroy:function destroy(){this.off();delete statusMap[this.id];}});Mediator.installTo(WUFile.prototype); /**
	         * 文件状态值，具体包括以下几种类型：
	         * * `inited` 初始状态
	         * * `queued` 已经进入队列, 等待上传
	         * * `progress` 上传中
	         * * `complete` 上传完成。
	         * * `error` 上传出错，可重试
	         * * `interrupt` 上传中断，可续传。
	         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
	         * * `cancelled` 文件被移除。
	         * @property {Object} Status
	         * @namespace File
	         * @class File
	         * @static
	         */WUFile.Status={INITED:'inited', // 初始状态
	QUEUED:'queued', // 已经进入队列, 等待上传
	PROGRESS:'progress', // 上传中
	ERROR:'error', // 上传出错，可重试
	COMPLETE:'complete', // 上传完成。
	CANCELLED:'cancelled', // 上传取消。
	INTERRUPT:'interrupt', // 上传中断，可续传。
	INVALID:'invalid' // 文件不合格，不能重试上传。
	};return WUFile;}); /**
	     * @fileOverview 文件队列
	     */define('queue',['base','mediator','file'],function(Base,Mediator,WUFile){var $=Base.$,STATUS=WUFile.Status; /**
	         * 文件队列, 用来存储各个状态中的文件。
	         * @class Queue
	         * @extends Mediator
	         */function Queue(){ /**
	             * 统计文件数。
	             * * `numOfQueue` 队列中的文件数。
	             * * `numOfSuccess` 上传成功的文件数
	             * * `numOfCancel` 被取消的文件数
	             * * `numOfProgress` 正在上传中的文件数
	             * * `numOfUploadFailed` 上传错误的文件数。
	             * * `numOfInvalid` 无效的文件数。
	             * * `numofDeleted` 被移除的文件数。
	             * @property {Object} stats
	             */this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0,numofDeleted:0,numofInterrupt:0}; // 上传队列，仅包括等待上传的文件
	this._queue=[]; // 存储所有文件
	this._map={};}$.extend(Queue.prototype,{ /**
	             * 将新文件加入对队列尾部
	             *
	             * @method append
	             * @param  {File} file   文件对象
	             */append:function append(file){this._queue.push(file);this._fileAdded(file);return this;}, /**
	             * 将新文件加入对队列头部
	             *
	             * @method prepend
	             * @param  {File} file   文件对象
	             */prepend:function prepend(file){this._queue.unshift(file);this._fileAdded(file);return this;}, /**
	             * 获取文件对象
	             *
	             * @method getFile
	             * @param  {String} fileId   文件ID
	             * @return {File}
	             */getFile:function getFile(fileId){if(typeof fileId!=='string'){return fileId;}return this._map[fileId];}, /**
	             * 从队列中取出一个指定状态的文件。
	             * @grammar fetch( status ) => File
	             * @method fetch
	             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
	             * @return {File} [File](#WebUploader:File)
	             */fetch:function fetch(status){var len=this._queue.length,i,file;status=status||STATUS.QUEUED;for(i=0;i<len;i++){file=this._queue[i];if(status===file.getStatus()){return file;}}return null;}, /**
	             * 对队列进行排序，能够控制文件上传顺序。
	             * @grammar sort( fn ) => undefined
	             * @method sort
	             * @param {Function} fn 排序方法
	             */sort:function sort(fn){if(typeof fn==='function'){this._queue.sort(fn);}}, /**
	             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
	             * @grammar getFiles( [status1[, status2 ...]] ) => Array
	             * @method getFiles
	             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
	             */getFiles:function getFiles(){var sts=[].slice.call(arguments,0),ret=[],i=0,len=this._queue.length,file;for(;i<len;i++){file=this._queue[i];if(sts.length&&! ~$.inArray(file.getStatus(),sts)){continue;}ret.push(file);}return ret;}, /**
	             * 在队列中删除文件。
	             * @grammar removeFile( file ) => Array
	             * @method removeFile
	             * @param {File} 文件对象。
	             */removeFile:function removeFile(file){var me=this,existing=this._map[file.id];if(existing){delete this._map[file.id];file.destroy();this.stats.numofDeleted++;}},_fileAdded:function _fileAdded(file){var me=this,existing=this._map[file.id];if(!existing){this._map[file.id]=file;file.on('statuschange',function(cur,pre){me._onFileStatusChange(cur,pre);});}},_onFileStatusChange:function _onFileStatusChange(curStatus,preStatus){var stats=this.stats;switch(preStatus){case STATUS.PROGRESS:stats.numOfProgress--;break;case STATUS.QUEUED:stats.numOfQueue--;break;case STATUS.ERROR:stats.numOfUploadFailed--;break;case STATUS.INVALID:stats.numOfInvalid--;break;case STATUS.INTERRUPT:stats.numofInterrupt--;break;}switch(curStatus){case STATUS.QUEUED:stats.numOfQueue++;break;case STATUS.PROGRESS:stats.numOfProgress++;break;case STATUS.ERROR:stats.numOfUploadFailed++;break;case STATUS.COMPLETE:stats.numOfSuccess++;break;case STATUS.CANCELLED:stats.numOfCancel++;break;case STATUS.INVALID:stats.numOfInvalid++;break;case STATUS.INTERRUPT:stats.numofInterrupt++;break;}}});Mediator.installTo(Queue.prototype);return Queue;}); /**
	     * @fileOverview 队列
	     */define('widgets/queue',['base','uploader','queue','file','lib/file','runtime/client','widgets/widget'],function(Base,Uploader,Queue,WUFile,File,RuntimeClient){var $=Base.$,rExt=/\.\w+$/,Status=WUFile.Status;return Uploader.register({name:'queue',init:function init(opts){var me=this,deferred,len,i,item,arr,accept,runtime;if($.isPlainObject(opts.accept)){opts.accept=[opts.accept];} // accept中的中生成匹配正则。
	if(opts.accept){arr=[];for(i=0,len=opts.accept.length;i<len;i++){item=opts.accept[i].extensions;item&&arr.push(item);}if(arr.length){accept='\\.'+arr.join(',').replace(/,/g,'$|\\.').replace(/\*/g,'.*')+'$';}me.accept=new RegExp(accept,'i');}me.queue=new Queue();me.stats=me.queue.stats; // 如果当前不是html5运行时，那就算了。
	// 不执行后续操作
	if(this.request('predict-runtime-type')!=='html5'){return;} // 创建一个 html5 运行时的 placeholder
	// 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
	deferred=Base.Deferred();this.placeholder=runtime=new RuntimeClient('Placeholder');runtime.connectRuntime({runtimeOrder:'html5'},function(){me._ruid=runtime.getRuid();deferred.resolve();});return deferred.promise();}, // 为了支持外部直接添加一个原生File对象。
	_wrapFile:function _wrapFile(file){if(!(file instanceof WUFile)){if(!(file instanceof File)){if(!this._ruid){throw new Error('Can\'t add external files.');}file=new File(this._ruid,file);}file=new WUFile(file);}return file;}, // 判断文件是否可以被加入队列
	acceptFile:function acceptFile(file){var invalid=!file||!file.size||this.accept&& // 如果名字中有后缀，才做后缀白名单处理。
	rExt.exec(file.name)&&!this.accept.test(file.name);return !invalid;}, /**
	             * @event beforeFileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
	             * @for  Uploader
	             */ /**
	             * @event fileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列以后触发。
	             * @for  Uploader
	             */_addFile:function _addFile(file){var me=this;file=me._wrapFile(file); // 不过类型判断允许不允许，先派送 `beforeFileQueued`
	if(!me.owner.trigger('beforeFileQueued',file)){return;} // 类型不匹配，则派送错误事件，并返回。
	if(!me.acceptFile(file)){me.owner.trigger('error','Q_TYPE_DENIED',file);return;}me.queue.append(file);me.owner.trigger('fileQueued',file);return file;},getFile:function getFile(fileId){return this.queue.getFile(fileId);}, /**
	             * @event filesQueued
	             * @param {File} files 数组，内容为原始File(lib/File）对象。
	             * @description 当一批文件添加进队列以后触发。
	             * @for  Uploader
	             */ /**
	             * @property {Boolean} [auto=false]
	             * @namespace options
	             * @for Uploader
	             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
	             *
	             */ /**
	             * @method addFiles
	             * @grammar addFiles( file ) => undefined
	             * @grammar addFiles( [file1, file2 ...] ) => undefined
	             * @param {Array of File or File} [files] Files 对象 数组
	             * @description 添加文件到队列
	             * @for  Uploader
	             */addFile:function addFile(files){var me=this;if(!files.length){files=[files];}files=$.map(files,function(file){return me._addFile(file);});me.owner.trigger('filesQueued',files);if(me.options.auto){setTimeout(function(){me.request('start-upload');},20);}},getStats:function getStats(){return this.stats;}, /**
	             * @event fileDequeued
	             * @param {File} file File对象
	             * @description 当文件被移除队列后触发。
	             * @for  Uploader
	             */ /**
	             * @method removeFile
	             * @grammar removeFile( file ) => undefined
	             * @grammar removeFile( id ) => undefined
	             * @grammar removeFile( file, true ) => undefined
	             * @grammar removeFile( id, true ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.removeFile( file );
	             * })
	             */removeFile:function removeFile(file,remove){var me=this;file=file.id?file:me.queue.getFile(file);this.request('cancel-file',file);if(remove){this.queue.removeFile(file);}}, /**
	             * @method getFiles
	             * @grammar getFiles() => Array
	             * @grammar getFiles( status1, status2, status... ) => Array
	             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
	             * @for  Uploader
	             * @example
	             * console.log( uploader.getFiles() );    // => all files
	             * console.log( uploader.getFiles('error') )    // => all error files.
	             */getFiles:function getFiles(){return this.queue.getFiles.apply(this.queue,arguments);},fetchFile:function fetchFile(){return this.queue.fetch.apply(this.queue,arguments);}, /**
	             * @method retry
	             * @grammar retry() => undefined
	             * @grammar retry( file ) => undefined
	             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
	             * @for  Uploader
	             * @example
	             * function retry() {
	             *     uploader.retry();
	             * }
	             */retry:function retry(file,noForceStart){var me=this,files,i,len;if(file){file=file.id?file:me.queue.getFile(file);file.setStatus(Status.QUEUED);noForceStart||me.request('start-upload');return;}files=me.queue.getFiles(Status.ERROR);i=0;len=files.length;for(;i<len;i++){file=files[i];file.setStatus(Status.QUEUED);}me.request('start-upload');}, /**
	             * @method sort
	             * @grammar sort( fn ) => undefined
	             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
	             * @for  Uploader
	             */sortFiles:function sortFiles(){return this.queue.sort.apply(this.queue,arguments);}, /**
	             * @event reset
	             * @description 当 uploader 被重置的时候触发。
	             * @for  Uploader
	             */ /**
	             * @method reset
	             * @grammar reset() => undefined
	             * @description 重置uploader。目前只重置了队列。
	             * @for  Uploader
	             * @example
	             * uploader.reset();
	             */reset:function reset(){this.owner.trigger('reset');this.queue=new Queue();this.stats=this.queue.stats;},destroy:function destroy(){this.reset();this.placeholder&&this.placeholder.destroy();}});}); /**
	     * @fileOverview 添加获取Runtime相关信息的方法。
	     */define('widgets/runtime',['uploader','runtime/runtime','widgets/widget'],function(Uploader,Runtime){Uploader.support=function(){return Runtime.hasRuntime.apply(Runtime,arguments);}; /**
	         * @property {Object} [runtimeOrder=html5,flash]
	         * @namespace options
	         * @for Uploader
	         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
	         *
	         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
	         */return Uploader.register({name:'runtime',init:function init(){if(!this.predictRuntimeType()){throw Error('Runtime Error');}}, /**
	             * 预测Uploader将采用哪个`Runtime`
	             * @grammar predictRuntimeType() => String
	             * @method predictRuntimeType
	             * @for  Uploader
	             */predictRuntimeType:function predictRuntimeType(){var orders=this.options.runtimeOrder||Runtime.orders,type=this.type,i,len;if(!type){orders=orders.split(/\s*,\s*/g);for(i=0,len=orders.length;i<len;i++){if(Runtime.hasRuntime(orders[i])){this.type=type=orders[i];break;}}}return type;}});}); /**
	     * @fileOverview Transport
	     */define('lib/transport',['base','runtime/client','mediator'],function(Base,RuntimeClient,Mediator){var $=Base.$;function Transport(opts){var me=this;opts=me.options=$.extend(true,{},Transport.options,opts||{});RuntimeClient.call(this,'Transport');this._blob=null;this._formData=opts.formData||{};this._headers=opts.headers||{};this.on('progress',this._timeout);this.on('load error',function(){me.trigger('progress',1);clearTimeout(me._timer);});}Transport.options={server:'',method:'POST', // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
	withCredentials:false,fileVal:'file',timeout:2*60*1000, // 2分钟
	formData:{},headers:{},sendAsBinary:false};$.extend(Transport.prototype,{ // 添加Blob, 只能添加一次，最后一次有效。
	appendBlob:function appendBlob(key,blob,filename){var me=this,opts=me.options;if(me.getRuid()){me.disconnectRuntime();} // 连接到blob归属的同一个runtime.
	me.connectRuntime(blob.ruid,function(){me.exec('init');});me._blob=blob;opts.fileVal=key||opts.fileVal;opts.filename=filename||opts.filename;}, // 添加其他字段
	append:function append(key,value){if((typeof key==='undefined'?'undefined':_typeof(key))==='object'){$.extend(this._formData,key);}else {this._formData[key]=value;}},setRequestHeader:function setRequestHeader(key,value){if((typeof key==='undefined'?'undefined':_typeof(key))==='object'){$.extend(this._headers,key);}else {this._headers[key]=value;}},send:function send(method){this.exec('send',method);this._timeout();},abort:function abort(){clearTimeout(this._timer);return this.exec('abort');},destroy:function destroy(){this.trigger('destroy');this.off();this.exec('destroy');this.disconnectRuntime();},getResponse:function getResponse(){return this.exec('getResponse');},getResponseAsJson:function getResponseAsJson(){return this.exec('getResponseAsJson');},getStatus:function getStatus(){return this.exec('getStatus');},_timeout:function _timeout(){var me=this,duration=me.options.timeout;if(!duration){return;}clearTimeout(me._timer);me._timer=setTimeout(function(){me.abort();me.trigger('error','timeout');},duration);}}); // 让Transport具备事件功能。
	Mediator.installTo(Transport.prototype);return Transport;}); /**
	     * @fileOverview 负责文件上传相关。
	     */define('widgets/upload',['base','uploader','file','lib/transport','widgets/widget'],function(Base,Uploader,WUFile,Transport){var $=Base.$,isPromise=Base.isPromise,Status=WUFile.Status; // 添加默认配置项
	$.extend(Uploader.options,{ /**
	             * @property {Boolean} [prepareNextFile=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否允许在文件传输时提前把下一个文件准备好。
	             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
	             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
	             */prepareNextFile:false, /**
	             * @property {Boolean} [chunked=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否要分片处理大文件上传。
	             */chunked:false, /**
	             * @property {Boolean} [chunkSize=5242880]
	             * @namespace options
	             * @for Uploader
	             * @description 如果要分片，分多大一片？ 默认大小为5M.
	             */chunkSize:5*1024*1024, /**
	             * @property {Boolean} [chunkRetry=2]
	             * @namespace options
	             * @for Uploader
	             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
	             */chunkRetry:2, /**
	             * @property {Boolean} [threads=3]
	             * @namespace options
	             * @for Uploader
	             * @description 上传并发数。允许同时最大上传进程数。
	             */threads:3, /**
	             * @property {Object} [formData={}]
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
	             */formData:{} /**
	             * @property {Object} [fileVal='file']
	             * @namespace options
	             * @for Uploader
	             * @description 设置文件上传域的name。
	             */ /**
	             * @property {Object} [method='POST']
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传方式，`POST`或者`GET`。
	             */ /**
	             * @property {Object} [sendAsBinary=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
	             * 其他参数在$_GET数组中。
	             */}); // 负责将文件切片。
	function CuteFile(file,chunkSize){var pending=[],blob=file.source,total=blob.size,chunks=chunkSize?Math.ceil(total/chunkSize):1,start=0,index=0,len,api;api={file:file,has:function has(){return !!pending.length;},shift:function shift(){return pending.shift();},unshift:function unshift(block){pending.unshift(block);}};while(index<chunks){len=Math.min(chunkSize,total-start);pending.push({file:file,start:start,end:chunkSize?start+len:total,total:total,chunks:chunks,chunk:index++,cuted:api});start+=len;}file.blocks=pending.concat();file.remaning=pending.length;return api;}Uploader.register({name:'upload',init:function init(){var owner=this.owner,me=this;this.runing=false;this.progress=false;owner.on('startUpload',function(){me.progress=true;}).on('uploadFinished',function(){me.progress=false;}); // 记录当前正在传的数据，跟threads相关
	this.pool=[]; // 缓存分好片的文件。
	this.stack=[]; // 缓存即将上传的文件。
	this.pending=[]; // 跟踪还有多少分片在上传中但是没有完成上传。
	this.remaning=0;this.__tick=Base.bindFn(this._tick,this);owner.on('uploadComplete',function(file){ // 把其他块取消了。
	file.blocks&&$.each(file.blocks,function(_,v){v.transport&&(v.transport.abort(),v.transport.destroy());delete v.transport;});delete file.blocks;delete file.remaning;});},reset:function reset(){this.request('stop-upload',true);this.runing=false;this.pool=[];this.stack=[];this.pending=[];this.remaning=0;this._trigged=false;this._promise=null;}, /**
	             * @event startUpload
	             * @description 当开始上传流程时触发。
	             * @for  Uploader
	             */ /**
	             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
	             *
	             * 可以指定开始某一个文件。
	             * @grammar upload() => undefined
	             * @grammar upload( file | fileId) => undefined
	             * @method upload
	             * @for  Uploader
	             */startUpload:function startUpload(file){var me=this; // 移出invalid的文件
	$.each(me.request('get-files',Status.INVALID),function(){me.request('remove-file',this);}); // 如果指定了开始某个文件，则只开始指定文件。
	if(file){file=file.id?file:me.request('get-file',file);if(file.getStatus()===Status.INTERRUPT){$.each(me.pool,function(_,v){ // 之前暂停过。
	if(v.file!==file){return;}v.transport&&v.transport.send();});file.setStatus(Status.QUEUED);}else if(file.getStatus()===Status.PROGRESS){return;}else {file.setStatus(Status.QUEUED);}}else {$.each(me.request('get-files',[Status.INITED]),function(){this.setStatus(Status.QUEUED);});}if(me.runing){return;}me.runing=true;var files=[]; // 如果有暂停的，则续传
	$.each(me.pool,function(_,v){var file=v.file;if(file.getStatus()===Status.INTERRUPT){files.push(file);me._trigged=false;v.transport&&v.transport.send();}});var file;while(file=files.shift()){file.setStatus(Status.PROGRESS);}file||$.each(me.request('get-files',Status.INTERRUPT),function(){this.setStatus(Status.PROGRESS);});me._trigged=false;Base.nextTick(me.__tick);me.owner.trigger('startUpload');}, /**
	             * @event stopUpload
	             * @description 当开始上传流程暂停时触发。
	             * @for  Uploader
	             */ /**
	             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
	             *
	             * 如果第一个参数是文件，则只暂停指定文件。
	             * @grammar stop() => undefined
	             * @grammar stop( true ) => undefined
	             * @grammar stop( file ) => undefined
	             * @method stop
	             * @for  Uploader
	             */stopUpload:function stopUpload(file,interrupt){var me=this;if(file===true){interrupt=file;file=null;}if(me.runing===false){return;} // 如果只是暂停某个文件。
	if(file){file=file.id?file:me.request('get-file',file);if(file.getStatus()!==Status.PROGRESS&&file.getStatus()!==Status.QUEUED){return;}file.setStatus(Status.INTERRUPT);$.each(me.pool,function(_,v){ // 只 abort 指定的文件。
	if(v.file!==file){return;}v.transport&&v.transport.abort();me._putback(v);me._popBlock(v);});return Base.nextTick(me.__tick);}me.runing=false;if(this._promise&&this._promise.file){this._promise.file.setStatus(Status.INTERRUPT);}interrupt&&$.each(me.pool,function(_,v){v.transport&&v.transport.abort();v.file.setStatus(Status.INTERRUPT);});me.owner.trigger('stopUpload');}, /**
	             * @method cancelFile
	             * @grammar cancelFile( file ) => undefined
	             * @grammar cancelFile( id ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 标记文件状态为已取消, 同时将中断文件传输。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.cancelFile( file );
	             * })
	             */cancelFile:function cancelFile(file){file=file.id?file:this.request('get-file',file); // 如果正在上传。
	file.blocks&&$.each(file.blocks,function(_,v){var _tr=v.transport;if(_tr){_tr.abort();_tr.destroy();delete v.transport;}});file.setStatus(Status.CANCELLED);this.owner.trigger('fileDequeued',file);}, /**
	             * 判断`Uplaode`r是否正在上传中。
	             * @grammar isInProgress() => Boolean
	             * @method isInProgress
	             * @for  Uploader
	             */isInProgress:function isInProgress(){return !!this.progress;},_getStats:function _getStats(){return this.request('get-stats');}, /**
	             * 掉过一个文件上传，直接标记指定文件为已上传状态。
	             * @grammar skipFile( file ) => undefined
	             * @method skipFile
	             * @for  Uploader
	             */skipFile:function skipFile(file,status){file=file.id?file:this.request('get-file',file);file.setStatus(status||Status.COMPLETE);file.skipped=true; // 如果正在上传。
	file.blocks&&$.each(file.blocks,function(_,v){var _tr=v.transport;if(_tr){_tr.abort();_tr.destroy();delete v.transport;}});this.owner.trigger('uploadSkip',file);}, /**
	             * @event uploadFinished
	             * @description 当所有文件上传结束时触发。
	             * @for  Uploader
	             */_tick:function _tick(){var me=this,opts=me.options,fn,val; // 上一个promise还没有结束，则等待完成后再执行。
	if(me._promise){return me._promise.always(me.__tick);} // 还有位置，且还有文件要处理的话。
	if(me.pool.length<opts.threads&&(val=me._nextBlock())){me._trigged=false;fn=function fn(val){me._promise=null; // 有可能是reject过来的，所以要检测val的类型。
	val&&val.file&&me._startSend(val);Base.nextTick(me.__tick);};me._promise=isPromise(val)?val.always(fn):fn(val); // 没有要上传的了，且没有正在传输的了。
	}else if(!me.remaning&&!me._getStats().numOfQueue&&!me._getStats().numofInterrupt){me.runing=false;me._trigged||Base.nextTick(function(){me.owner.trigger('uploadFinished');});me._trigged=true;}},_putback:function _putback(block){var idx;block.cuted.unshift(block);idx=this.stack.indexOf(block.cuted);if(! ~idx){this.stack.unshift(block.cuted);}},_getStack:function _getStack(){var i=0,act;while(act=this.stack[i++]){if(act.has()&&act.file.getStatus()===Status.PROGRESS){return act;}else if(!act.has()||act.file.getStatus()!==Status.PROGRESS&&act.file.getStatus()!==Status.INTERRUPT){ // 把已经处理完了的，或者，状态为非 progress（上传中）、
	// interupt（暂停中） 的移除。
	this.stack.splice(--i,1);}}return null;},_nextBlock:function _nextBlock(){var me=this,opts=me.options,act,next,done,preparing; // 如果当前文件还有没有需要传输的，则直接返回剩下的。
	if(act=this._getStack()){ // 是否提前准备下一个文件
	if(opts.prepareNextFile&&!me.pending.length){me._prepareNextFile();}return act.shift(); // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
	}else if(me.runing){ // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
	if(!me.pending.length&&me._getStats().numOfQueue){me._prepareNextFile();}next=me.pending.shift();done=function done(file){if(!file){return null;}act=CuteFile(file,opts.chunked?opts.chunkSize:0);me.stack.push(act);return act.shift();}; // 文件可能还在prepare中，也有可能已经完全准备好了。
	if(isPromise(next)){preparing=next.file;next=next[next.pipe?'pipe':'then'](done);next.file=preparing;return next;}return done(next);}}, /**
	             * @event uploadStart
	             * @param {File} file File对象
	             * @description 某个文件开始上传前触发，一个文件只会触发一次。
	             * @for  Uploader
	             */_prepareNextFile:function _prepareNextFile(){var me=this,file=me.request('fetch-file'),pending=me.pending,promise;if(file){promise=me.request('before-send-file',file,function(){ // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
	if(file.getStatus()===Status.PROGRESS||file.getStatus()===Status.INTERRUPT){return file;}return me._finishFile(file);});me.owner.trigger('uploadStart',file);file.setStatus(Status.PROGRESS);promise.file=file; // 如果还在pending中，则替换成文件本身。
	promise.done(function(){var idx=$.inArray(promise,pending);~idx&&pending.splice(idx,1,file);}); // befeore-send-file的钩子就有错误发生。
	promise.fail(function(reason){file.setStatus(Status.ERROR,reason);me.owner.trigger('uploadError',file,reason);me.owner.trigger('uploadComplete',file);});pending.push(promise);}}, // 让出位置了，可以让其他分片开始上传
	_popBlock:function _popBlock(block){var idx=$.inArray(block,this.pool);this.pool.splice(idx,1);block.file.remaning--;this.remaning--;}, // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
	_startSend:function _startSend(block){var me=this,file=block.file,promise; // 有可能在 before-send-file 的 promise 期间改变了文件状态。
	// 如：暂停，取消
	// 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
	if(file.getStatus()!==Status.PROGRESS){ // 如果是中断，则还需要放回去。
	if(file.getStatus()===Status.INTERRUPT){me._putback(block);}return;}me.pool.push(block);me.remaning++; // 如果没有分片，则直接使用原始的。
	// 不会丢失content-type信息。
	block.blob=block.chunks===1?file.source:file.source.slice(block.start,block.end); // hook, 每个分片发送之前可能要做些异步的事情。
	promise=me.request('before-send',block,function(){ // 有可能文件已经上传出错了，所以不需要再传输了。
	if(file.getStatus()===Status.PROGRESS){me._doSend(block);}else {me._popBlock(block);Base.nextTick(me.__tick);}}); // 如果为fail了，则跳过此分片。
	promise.fail(function(){if(file.remaning===1){me._finishFile(file).always(function(){block.percentage=1;me._popBlock(block);me.owner.trigger('uploadComplete',file);Base.nextTick(me.__tick);});}else {block.percentage=1;me.updateFileProgress(file);me._popBlock(block);Base.nextTick(me.__tick);}});}, /**
	             * @event uploadBeforeSend
	             * @param {Object} object
	             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
	             * @param {Object} headers 可以扩展此对象来控制上传头部。
	             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
	             * @for  Uploader
	             */ /**
	             * @event uploadAccept
	             * @param {Object} object
	             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
	             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
	             * @for  Uploader
	             */ /**
	             * @event uploadProgress
	             * @param {File} file File对象
	             * @param {Number} percentage 上传进度
	             * @description 上传过程中触发，携带上传进度。
	             * @for  Uploader
	             */ /**
	             * @event uploadError
	             * @param {File} file File对象
	             * @param {String} reason 出错的code
	             * @description 当文件上传出错时触发。
	             * @for  Uploader
	             */ /**
	             * @event uploadSuccess
	             * @param {File} file File对象
	             * @param {Object} response 服务端返回的数据
	             * @description 当文件上传成功时触发。
	             * @for  Uploader
	             */ /**
	             * @event uploadComplete
	             * @param {File} [file] File对象
	             * @description 不管成功或者失败，文件上传完成时触发。
	             * @for  Uploader
	             */ // 做上传操作。
	_doSend:function _doSend(block){var me=this,owner=me.owner,opts=me.options,file=block.file,tr=new Transport(opts),data=$.extend({},opts.formData),headers=$.extend({},opts.headers),requestAccept,ret;block.transport=tr;tr.on('destroy',function(){delete block.transport;me._popBlock(block);Base.nextTick(me.__tick);}); // 广播上传进度。以文件为单位。
	tr.on('progress',function(percentage){block.percentage=percentage;me.updateFileProgress(file);}); // 用来询问，是否返回的结果是有错误的。
	requestAccept=function requestAccept(reject){var fn;ret=tr.getResponseAsJson()||{};ret._raw=tr.getResponse();fn=function fn(value){reject=value;}; // 服务端响应了，不代表成功了，询问是否响应正确。
	if(!owner.trigger('uploadAccept',block,ret,fn)){reject=reject||'server';}return reject;}; // 尝试重试，然后广播文件上传出错。
	tr.on('error',function(type,flag){block.retried=block.retried||0; // 自动重试
	if(block.chunks>1&&~'http,abort'.indexOf(type)&&block.retried<opts.chunkRetry){block.retried++;tr.send();}else { // http status 500 ~ 600
	if(!flag&&type==='server'){type=requestAccept(type);}file.setStatus(Status.ERROR,type);owner.trigger('uploadError',file,type);owner.trigger('uploadComplete',file);}}); // 上传成功
	tr.on('load',function(){var reason; // 如果非预期，转向上传出错。
	if(reason=requestAccept()){tr.trigger('error',reason,true);return;} // 全部上传完成。
	if(file.remaning===1){me._finishFile(file,ret);}else {tr.destroy();}}); // 配置默认的上传字段。
	data=$.extend(data,{id:file.id,name:file.name,type:file.type,lastModifiedDate:file.lastModifiedDate,size:file.size});block.chunks>1&&$.extend(data,{chunks:block.chunks,chunk:block.chunk}); // 在发送之间可以添加字段什么的。。。
	// 如果默认的字段不够使用，可以通过监听此事件来扩展
	owner.trigger('uploadBeforeSend',block,data,headers); // 开始发送。
	tr.appendBlob(opts.fileVal,block.blob,file.name);tr.append(data);tr.setRequestHeader(headers);tr.send();}, // 完成上传。
	_finishFile:function _finishFile(file,ret,hds){var owner=this.owner;return owner.request('after-send-file',arguments,function(){file.setStatus(Status.COMPLETE);owner.trigger('uploadSuccess',file,ret,hds);}).fail(function(reason){ // 如果外部已经标记为invalid什么的，不再改状态。
	if(file.getStatus()===Status.PROGRESS){file.setStatus(Status.ERROR,reason);}owner.trigger('uploadError',file,reason);}).always(function(){owner.trigger('uploadComplete',file);});},updateFileProgress:function updateFileProgress(file){var totalPercent=0,uploaded=0;if(!file.blocks){return;}$.each(file.blocks,function(_,v){uploaded+=(v.percentage||0)*(v.end-v.start);});totalPercent=uploaded/file.size;this.owner.trigger('uploadProgress',file,totalPercent||0);}});}); /**
	     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
	     */define('widgets/validator',['base','uploader','file','widgets/widget'],function(Base,Uploader,WUFile){var $=Base.$,validators={},api; /**
	         * @event error
	         * @param {String} type 错误类型。
	         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
	         *
	         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
	         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
	         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
	         * @for  Uploader
	         */ // 暴露给外面的api
	api={ // 添加验证器
	addValidator:function addValidator(type,cb){validators[type]=cb;}, // 移除验证器
	removeValidator:function removeValidator(type){delete validators[type];}}; // 在Uploader初始化的时候启动Validators的初始化
	Uploader.register({name:'validator',init:function init(){var me=this;Base.nextTick(function(){$.each(validators,function(){this.call(me.owner);});});}}); /**
	         * @property {int} [fileNumLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总数量, 超出则不允许加入队列。
	         */api.addValidator('fileNumLimit',function(){var uploader=this,opts=uploader.options,count=0,max=parseInt(opts.fileNumLimit,10),flag=true;if(!max){return;}uploader.on('beforeFileQueued',function(file){if(count>=max&&flag){flag=false;this.trigger('error','Q_EXCEED_NUM_LIMIT',max,file);setTimeout(function(){flag=true;},1);}return count>=max?false:true;});uploader.on('fileQueued',function(){count++;});uploader.on('fileDequeued',function(){count--;});uploader.on('reset',function(){count=0;});}); /**
	         * @property {int} [fileSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
	         */api.addValidator('fileSizeLimit',function(){var uploader=this,opts=uploader.options,count=0,max=parseInt(opts.fileSizeLimit,10),flag=true;if(!max){return;}uploader.on('beforeFileQueued',function(file){var invalid=count+file.size>max;if(invalid&&flag){flag=false;this.trigger('error','Q_EXCEED_SIZE_LIMIT',max,file);setTimeout(function(){flag=true;},1);}return invalid?false:true;});uploader.on('fileQueued',function(file){count+=file.size;});uploader.on('fileDequeued',function(file){count-=file.size;});uploader.on('reset',function(){count=0;});}); /**
	         * @property {int} [fileSingleSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
	         */api.addValidator('fileSingleSizeLimit',function(){var uploader=this,opts=uploader.options,max=opts.fileSingleSizeLimit;if(!max){return;}uploader.on('beforeFileQueued',function(file){if(file.size>max){file.setStatus(WUFile.Status.INVALID,'exceed_size');this.trigger('error','F_EXCEED_SIZE',max,file);return false;}});}); /**
	         * @property {Boolean} [duplicate=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
	         */api.addValidator('duplicate',function(){var uploader=this,opts=uploader.options,mapping={};if(opts.duplicate){return;}function hashString(str){var hash=0,i=0,len=str.length,_char;for(;i<len;i++){_char=str.charCodeAt(i);hash=_char+(hash<<6)+(hash<<16)-hash;}return hash;}uploader.on('beforeFileQueued',function(file){var hash=file.__hash||(file.__hash=hashString(file.name+file.size+file.lastModifiedDate)); // 已经重复了
	if(mapping[hash]){this.trigger('error','F_DUPLICATE',file);return false;}});uploader.on('fileQueued',function(file){var hash=file.__hash;hash&&(mapping[hash]=true);});uploader.on('fileDequeued',function(file){var hash=file.__hash;hash&&delete mapping[hash];});uploader.on('reset',function(){mapping={};});});return api;}); /**
	     * @fileOverview Md5
	     */define('lib/md5',['runtime/client','mediator'],function(RuntimeClient,Mediator){function Md5(){RuntimeClient.call(this,'Md5');} // 让 Md5 具备事件功能。
	Mediator.installTo(Md5.prototype);Md5.prototype.loadFromBlob=function(blob){var me=this;if(me.getRuid()){me.disconnectRuntime();} // 连接到blob归属的同一个runtime.
	me.connectRuntime(blob.ruid,function(){me.exec('init');me.exec('loadFromBlob',blob);});};Md5.prototype.getResult=function(){return this.exec('getResult');};return Md5;}); /**
	     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
	     */define('widgets/md5',['base','uploader','lib/md5','lib/blob','widgets/widget'],function(Base,Uploader,Md5,Blob){return Uploader.register({name:'md5', /**
	             * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
	             *
	             *
	             * @method md5File
	             * @grammar md5File( file[, start[, end]] ) => promise
	             * @for Uploader
	             * @example
	             *
	             * uploader.on( 'fileQueued', function( file ) {
	             *     var $li = ...;
	             *
	             *     uploader.md5File( file )
	             *
	             *         // 及时显示进度
	             *         .progress(function(percentage) {
	             *             console.log('Percentage:', percentage);
	             *         })
	             *
	             *         // 完成
	             *         .then(function(val) {
	             *             console.log('md5 result:', val);
	             *         });
	             *
	             * });
	             */md5File:function md5File(file,start,end){var md5=new Md5(),deferred=Base.Deferred(),blob=file instanceof Blob?file:this.request('get-file',file).source;md5.on('progress load',function(e){e=e||{};deferred.notify(e.total?e.loaded/e.total:1);});md5.on('complete',function(){deferred.resolve(md5.getResult());});md5.on('error',function(reason){deferred.reject(reason);});if(arguments.length>1){start=start||0;end=end||0;start<0&&(start=blob.size+start);end<0&&(end=blob.size+end);end=Math.min(end,blob.size);blob=blob.slice(start,end);}md5.loadFromBlob(blob);return deferred.promise();}});}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/compbase',[],function(){function CompBase(owner,runtime){this.owner=owner;this.options=owner.options;this.getRuntime=function(){return runtime;};this.getRuid=function(){return runtime.uid;};this.trigger=function(){return owner.trigger.apply(owner,arguments);};}return CompBase;}); /**
	     * @fileOverview Html5Runtime
	     */define('runtime/html5/runtime',['base','runtime/runtime','runtime/compbase'],function(Base,Runtime,CompBase){var type='html5',components={};function Html5Runtime(){var pool={},me=this,destroy=this.destroy;Runtime.apply(me,arguments);me.type=type; // 这个方法的调用者，实际上是RuntimeClient
	me.exec=function(comp,fn /*, args...*/){var client=this,uid=client.uid,args=Base.slice(arguments,2),instance;if(components[comp]){instance=pool[uid]=pool[uid]||new components[comp](client,me);if(instance[fn]){return instance[fn].apply(instance,args);}}};me.destroy=function(){ // @todo 删除池子中的所有实例
	return destroy&&destroy.apply(this,arguments);};}Base.inherits(Runtime,{constructor:Html5Runtime, // 不需要连接其他程序，直接执行callback
	init:function init(){var me=this;setTimeout(function(){me.trigger('ready');},1);}}); // 注册Components
	Html5Runtime.register=function(name,component){var klass=components[name]=Base.inherits(CompBase,component);return klass;}; // 注册html5运行时。
	// 只有在支持的前提下注册。
	if(window.Blob&&window.FileReader&&window.DataView){Runtime.addRuntime(type,Html5Runtime);}return Html5Runtime;}); /**
	     * @fileOverview Blob Html实现
	     */define('runtime/html5/blob',['runtime/html5/runtime','lib/blob'],function(Html5Runtime,Blob){return Html5Runtime.register('Blob',{slice:function slice(start,end){var blob=this.owner.source,slice=blob.slice||blob.webkitSlice||blob.mozSlice;blob=slice.call(blob,start,end);return new Blob(this.getRuid(),blob);}});}); /**
	     * @fileOverview FilePaste
	     */define('runtime/html5/dnd',['base','runtime/html5/runtime','lib/file'],function(Base,Html5Runtime,File){var $=Base.$,prefix='webuploader-dnd-';return Html5Runtime.register('DragAndDrop',{init:function init(){var elem=this.elem=this.options.container;this.dragEnterHandler=Base.bindFn(this._dragEnterHandler,this);this.dragOverHandler=Base.bindFn(this._dragOverHandler,this);this.dragLeaveHandler=Base.bindFn(this._dragLeaveHandler,this);this.dropHandler=Base.bindFn(this._dropHandler,this);this.dndOver=false;elem.on('dragenter',this.dragEnterHandler);elem.on('dragover',this.dragOverHandler);elem.on('dragleave',this.dragLeaveHandler);elem.on('drop',this.dropHandler);if(this.options.disableGlobalDnd){$(document).on('dragover',this.dragOverHandler);$(document).on('drop',this.dropHandler);}},_dragEnterHandler:function _dragEnterHandler(e){var me=this,denied=me._denied||false,items;e=e.originalEvent||e;if(!me.dndOver){me.dndOver=true; // 注意只有 chrome 支持。
	items=e.dataTransfer.items;if(items&&items.length){me._denied=denied=!me.trigger('accept',items);}me.elem.addClass(prefix+'over');me.elem[denied?'addClass':'removeClass'](prefix+'denied');}e.dataTransfer.dropEffect=denied?'none':'copy';return false;},_dragOverHandler:function _dragOverHandler(e){ // 只处理框内的。
	var parentElem=this.elem.parent().get(0);if(parentElem&&!$.contains(parentElem,e.currentTarget)){return false;}clearTimeout(this._leaveTimer);this._dragEnterHandler.call(this,e);return false;},_dragLeaveHandler:function _dragLeaveHandler(){var me=this,handler;handler=function handler(){me.dndOver=false;me.elem.removeClass(prefix+'over '+prefix+'denied');};clearTimeout(me._leaveTimer);me._leaveTimer=setTimeout(handler,100);return false;},_dropHandler:function _dropHandler(e){var me=this,ruid=me.getRuid(),parentElem=me.elem.parent().get(0),dataTransfer,data; // 只处理框内的。
	if(parentElem&&!$.contains(parentElem,e.currentTarget)){return false;}e=e.originalEvent||e;dataTransfer=e.dataTransfer; // 如果是页面内拖拽，还不能处理，不阻止事件。
	// 此处 ie11 下会报参数错误，
	try{data=dataTransfer.getData('text/html');}catch(err){}if(data){return;}me._getTansferFiles(dataTransfer,function(results){me.trigger('drop',$.map(results,function(file){return new File(ruid,file);}));});me.dndOver=false;me.elem.removeClass(prefix+'over');return false;}, // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
	_getTansferFiles:function _getTansferFiles(dataTransfer,callback){var results=[],promises=[],items,files,file,item,i,len,canAccessFolder;items=dataTransfer.items;files=dataTransfer.files;canAccessFolder=!!(items&&items[0].webkitGetAsEntry);for(i=0,len=files.length;i<len;i++){file=files[i];item=items&&items[i];if(canAccessFolder&&item.webkitGetAsEntry().isDirectory){promises.push(this._traverseDirectoryTree(item.webkitGetAsEntry(),results));}else {results.push(file);}}Base.when.apply(Base,promises).done(function(){if(!results.length){return;}callback(results);});},_traverseDirectoryTree:function _traverseDirectoryTree(entry,results){var deferred=Base.Deferred(),me=this;if(entry.isFile){entry.file(function(file){results.push(file);deferred.resolve();});}else if(entry.isDirectory){entry.createReader().readEntries(function(entries){var len=entries.length,promises=[],arr=[], // 为了保证顺序。
	i;for(i=0;i<len;i++){promises.push(me._traverseDirectoryTree(entries[i],arr));}Base.when.apply(Base,promises).then(function(){results.push.apply(results,arr);deferred.resolve();},deferred.reject);});}return deferred.promise();},destroy:function destroy(){var elem=this.elem; // 还没 init 就调用 destroy
	if(!elem){return;}elem.off('dragenter',this.dragEnterHandler);elem.off('dragover',this.dragOverHandler);elem.off('dragleave',this.dragLeaveHandler);elem.off('drop',this.dropHandler);if(this.options.disableGlobalDnd){$(document).off('dragover',this.dragOverHandler);$(document).off('drop',this.dropHandler);}}});}); /**
	     * @fileOverview FilePaste
	     */define('runtime/html5/filepaste',['base','runtime/html5/runtime','lib/file'],function(Base,Html5Runtime,File){return Html5Runtime.register('FilePaste',{init:function init(){var opts=this.options,elem=this.elem=opts.container,accept='.*',arr,i,len,item; // accetp的mimeTypes中生成匹配正则。
	if(opts.accept){arr=[];for(i=0,len=opts.accept.length;i<len;i++){item=opts.accept[i].mimeTypes;item&&arr.push(item);}if(arr.length){accept=arr.join(',');accept=accept.replace(/,/g,'|').replace(/\*/g,'.*');}}this.accept=accept=new RegExp(accept,'i');this.hander=Base.bindFn(this._pasteHander,this);elem.on('paste',this.hander);},_pasteHander:function _pasteHander(e){var allowed=[],ruid=this.getRuid(),items,item,blob,i,len;e=e.originalEvent||e;items=e.clipboardData.items;for(i=0,len=items.length;i<len;i++){item=items[i];if(item.kind!=='file'||!(blob=item.getAsFile())){continue;}allowed.push(new File(ruid,blob));}if(allowed.length){ // 不阻止非文件粘贴（文字粘贴）的事件冒泡
	e.preventDefault();e.stopPropagation();this.trigger('paste',allowed);}},destroy:function destroy(){this.elem.off('paste',this.hander);}});}); /**
	     * @fileOverview FilePicker
	     */define('runtime/html5/filepicker',['base','runtime/html5/runtime'],function(Base,Html5Runtime){var $=Base.$;return Html5Runtime.register('FilePicker',{init:function init(){var container=this.getRuntime().getContainer(),me=this,owner=me.owner,opts=me.options,label=this.label=$(document.createElement('label')),input=this.input=$(document.createElement('input')),arr,i,len,mouseHandler;input.attr('type','file');input.attr('name',opts.name);input.addClass('webuploader-element-invisible');label.on('click',function(){input.trigger('click');});label.css({opacity:0,width:'100%',height:'100%',display:'block',cursor:'pointer',background:'#ffffff'});if(opts.multiple){input.attr('multiple','multiple');} // @todo Firefox不支持单独指定后缀
	if(opts.accept&&opts.accept.length>0){arr=[];for(i=0,len=opts.accept.length;i<len;i++){arr.push(opts.accept[i].mimeTypes);}input.attr('accept',arr.join(','));}container.append(input);container.append(label);mouseHandler=function mouseHandler(e){owner.trigger(e.type);};input.on('change',function(e){var fn=arguments.callee,clone;me.files=e.target.files; // reset input
	clone=this.cloneNode(true);clone.value=null;this.parentNode.replaceChild(clone,this);input.off();input=$(clone).on('change',fn).on('mouseenter mouseleave',mouseHandler);owner.trigger('change');});label.on('mouseenter mouseleave',mouseHandler);},getFiles:function getFiles(){return this.files;},destroy:function destroy(){this.input.off();this.label.off();}});}); /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */define('runtime/html5/util',['base'],function(Base){var urlAPI=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL,createObjectURL=Base.noop,revokeObjectURL=createObjectURL;if(urlAPI){ // 更安全的方式调用，比如android里面就能把context改成其他的对象。
	createObjectURL=function createObjectURL(){return urlAPI.createObjectURL.apply(urlAPI,arguments);};revokeObjectURL=function revokeObjectURL(){return urlAPI.revokeObjectURL.apply(urlAPI,arguments);};}return {createObjectURL:createObjectURL,revokeObjectURL:revokeObjectURL,dataURL2Blob:function dataURL2Blob(dataURI){var byteStr,intArray,ab,i,mimetype,parts;parts=dataURI.split(',');if(~parts[0].indexOf('base64')){byteStr=atob(parts[1]);}else {byteStr=decodeURIComponent(parts[1]);}ab=new ArrayBuffer(byteStr.length);intArray=new Uint8Array(ab);for(i=0;i<byteStr.length;i++){intArray[i]=byteStr.charCodeAt(i);}mimetype=parts[0].split(':')[1].split(';')[0];return this.arrayBufferToBlob(ab,mimetype);},dataURL2ArrayBuffer:function dataURL2ArrayBuffer(dataURI){var byteStr,intArray,i,parts;parts=dataURI.split(',');if(~parts[0].indexOf('base64')){byteStr=atob(parts[1]);}else {byteStr=decodeURIComponent(parts[1]);}intArray=new Uint8Array(byteStr.length);for(i=0;i<byteStr.length;i++){intArray[i]=byteStr.charCodeAt(i);}return intArray.buffer;},arrayBufferToBlob:function arrayBufferToBlob(buffer,type){var builder=window.BlobBuilder||window.WebKitBlobBuilder,bb; // android不支持直接new Blob, 只能借助blobbuilder.
	if(builder){bb=new builder();bb.append(buffer);return bb.getBlob(type);}return new Blob([buffer],type?{type:type}:{});}, // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
	// 你得到的结果是png.
	canvasToDataUrl:function canvasToDataUrl(canvas,type,quality){return canvas.toDataURL(type,quality/100);}, // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	parseMeta:function parseMeta(blob,callback){callback(false,{});}, // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	updateImageHead:function updateImageHead(data){return data;}};}); /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */define('runtime/html5/imagemeta',['runtime/html5/util'],function(Util){var api;api={parsers:{0xffe1:[]},maxMetaDataSize:262144,parse:function parse(blob,cb){var me=this,fr=new FileReader();fr.onload=function(){cb(false,me._parse(this.result));fr=fr.onload=fr.onerror=null;};fr.onerror=function(e){cb(e.message);fr=fr.onload=fr.onerror=null;};blob=blob.slice(0,me.maxMetaDataSize);fr.readAsArrayBuffer(blob.getSource());},_parse:function _parse(buffer,noParse){if(buffer.byteLength<6){return;}var dataview=new DataView(buffer),offset=2,maxOffset=dataview.byteLength-4,headLength=offset,ret={},markerBytes,markerLength,parsers,i;if(dataview.getUint16(0)===0xffd8){while(offset<maxOffset){markerBytes=dataview.getUint16(offset);if(markerBytes>=0xffe0&&markerBytes<=0xffef||markerBytes===0xfffe){markerLength=dataview.getUint16(offset+2)+2;if(offset+markerLength>dataview.byteLength){break;}parsers=api.parsers[markerBytes];if(!noParse&&parsers){for(i=0;i<parsers.length;i+=1){parsers[i].call(api,dataview,offset,markerLength,ret);}}offset+=markerLength;headLength=offset;}else {break;}}if(headLength>6){if(buffer.slice){ret.imageHead=buffer.slice(2,headLength);}else { // Workaround for IE10, which does not yet
	// support ArrayBuffer.slice:
	ret.imageHead=new Uint8Array(buffer).subarray(2,headLength);}}}return ret;},updateImageHead:function updateImageHead(buffer,head){var data=this._parse(buffer,true),buf1,buf2,bodyoffset;bodyoffset=2;if(data.imageHead){bodyoffset=2+data.imageHead.byteLength;}if(buffer.slice){buf2=buffer.slice(bodyoffset);}else {buf2=new Uint8Array(buffer).subarray(bodyoffset);}buf1=new Uint8Array(head.byteLength+2+buf2.byteLength);buf1[0]=0xFF;buf1[1]=0xD8;buf1.set(new Uint8Array(head),2);buf1.set(new Uint8Array(buf2),head.byteLength+2);return buf1.buffer;}};Util.parseMeta=function(){return api.parse.apply(api,arguments);};Util.updateImageHead=function(){return api.updateImageHead.apply(api,arguments);};return api;}); /**
	     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
	     * 暂时项目中只用了orientation.
	     *
	     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
	     * @fileOverview EXIF解析
	     */ // Sample
	// ====================================
	// Make : Apple
	// Model : iPhone 4S
	// Orientation : 1
	// XResolution : 72 [72/1]
	// YResolution : 72 [72/1]
	// ResolutionUnit : 2
	// Software : QuickTime 7.7.1
	// DateTime : 2013:09:01 22:53:55
	// ExifIFDPointer : 190
	// ExposureTime : 0.058823529411764705 [1/17]
	// FNumber : 2.4 [12/5]
	// ExposureProgram : Normal program
	// ISOSpeedRatings : 800
	// ExifVersion : 0220
	// DateTimeOriginal : 2013:09:01 22:52:51
	// DateTimeDigitized : 2013:09:01 22:52:51
	// ComponentsConfiguration : YCbCr
	// ShutterSpeedValue : 4.058893515764426
	// ApertureValue : 2.5260688216892597 [4845/1918]
	// BrightnessValue : -0.3126686601998395
	// MeteringMode : Pattern
	// Flash : Flash did not fire, compulsory flash mode
	// FocalLength : 4.28 [107/25]
	// SubjectArea : [4 values]
	// FlashpixVersion : 0100
	// ColorSpace : 1
	// PixelXDimension : 2448
	// PixelYDimension : 3264
	// SensingMethod : One-chip color area sensor
	// ExposureMode : 0
	// WhiteBalance : Auto white balance
	// FocalLengthIn35mmFilm : 35
	// SceneCaptureType : Standard
	define('runtime/html5/imagemeta/exif',['base','runtime/html5/imagemeta'],function(Base,ImageMeta){var EXIF={};EXIF.ExifMap=function(){return this;};EXIF.ExifMap.prototype.map={'Orientation':0x0112};EXIF.ExifMap.prototype.get=function(id){return this[id]||this[this.map[id]];};EXIF.exifTagTypes={ // byte, 8-bit unsigned int:
	1:{getValue:function getValue(dataView,dataOffset){return dataView.getUint8(dataOffset);},size:1}, // ascii, 8-bit byte:
	2:{getValue:function getValue(dataView,dataOffset){return String.fromCharCode(dataView.getUint8(dataOffset));},size:1,ascii:true}, // short, 16 bit int:
	3:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint16(dataOffset,littleEndian);},size:2}, // long, 32 bit int:
	4:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint32(dataOffset,littleEndian);},size:4}, // rational = two long values,
	// first is numerator, second is denominator:
	5:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint32(dataOffset,littleEndian)/dataView.getUint32(dataOffset+4,littleEndian);},size:8}, // slong, 32 bit signed int:
	9:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getInt32(dataOffset,littleEndian);},size:4}, // srational, two slongs, first is numerator, second is denominator:
	10:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getInt32(dataOffset,littleEndian)/dataView.getInt32(dataOffset+4,littleEndian);},size:8}}; // undefined, 8-bit byte, value depending on field:
	EXIF.exifTagTypes[7]=EXIF.exifTagTypes[1];EXIF.getExifValue=function(dataView,tiffOffset,offset,type,length,littleEndian){var tagType=EXIF.exifTagTypes[type],tagSize,dataOffset,values,i,str,c;if(!tagType){Base.log('Invalid Exif data: Invalid tag type.');return;}tagSize=tagType.size*length; // Determine if the value is contained in the dataOffset bytes,
	// or if the value at the dataOffset is a pointer to the actual data:
	dataOffset=tagSize>4?tiffOffset+dataView.getUint32(offset+8,littleEndian):offset+8;if(dataOffset+tagSize>dataView.byteLength){Base.log('Invalid Exif data: Invalid data offset.');return;}if(length===1){return tagType.getValue(dataView,dataOffset,littleEndian);}values=[];for(i=0;i<length;i+=1){values[i]=tagType.getValue(dataView,dataOffset+i*tagType.size,littleEndian);}if(tagType.ascii){str=''; // Concatenate the chars:
	for(i=0;i<values.length;i+=1){c=values[i]; // Ignore the terminating NULL byte(s):
	if(c==='\u0000'){break;}str+=c;}return str;}return values;};EXIF.parseExifTag=function(dataView,tiffOffset,offset,littleEndian,data){var tag=dataView.getUint16(offset,littleEndian);data.exif[tag]=EXIF.getExifValue(dataView,tiffOffset,offset,dataView.getUint16(offset+2,littleEndian), // tag type
	dataView.getUint32(offset+4,littleEndian), // tag length
	littleEndian);};EXIF.parseExifTags=function(dataView,tiffOffset,dirOffset,littleEndian,data){var tagsNumber,dirEndOffset,i;if(dirOffset+6>dataView.byteLength){Base.log('Invalid Exif data: Invalid directory offset.');return;}tagsNumber=dataView.getUint16(dirOffset,littleEndian);dirEndOffset=dirOffset+2+12*tagsNumber;if(dirEndOffset+4>dataView.byteLength){Base.log('Invalid Exif data: Invalid directory size.');return;}for(i=0;i<tagsNumber;i+=1){this.parseExifTag(dataView,tiffOffset,dirOffset+2+12*i, // tag offset
	littleEndian,data);} // Return the offset to the next directory:
	return dataView.getUint32(dirEndOffset,littleEndian);}; // EXIF.getExifThumbnail = function(dataView, offset, length) {
	//     var hexData,
	//         i,
	//         b;
	//     if (!length || offset + length > dataView.byteLength) {
	//         Base.log('Invalid Exif data: Invalid thumbnail data.');
	//         return;
	//     }
	//     hexData = [];
	//     for (i = 0; i < length; i += 1) {
	//         b = dataView.getUint8(offset + i);
	//         hexData.push((b < 16 ? '0' : '') + b.toString(16));
	//     }
	//     return 'data:image/jpeg,%' + hexData.join('%');
	// };
	EXIF.parseExifData=function(dataView,offset,length,data){var tiffOffset=offset+10,littleEndian,dirOffset; // Check for the ASCII code for "Exif" (0x45786966):
	if(dataView.getUint32(offset+4)!==0x45786966){ // No Exif data, might be XMP data instead
	return;}if(tiffOffset+8>dataView.byteLength){Base.log('Invalid Exif data: Invalid segment size.');return;} // Check for the two null bytes:
	if(dataView.getUint16(offset+8)!==0x0000){Base.log('Invalid Exif data: Missing byte alignment offset.');return;} // Check the byte alignment:
	switch(dataView.getUint16(tiffOffset)){case 0x4949:littleEndian=true;break;case 0x4D4D:littleEndian=false;break;default:Base.log('Invalid Exif data: Invalid byte alignment marker.');return;} // Check for the TIFF tag marker (0x002A):
	if(dataView.getUint16(tiffOffset+2,littleEndian)!==0x002A){Base.log('Invalid Exif data: Missing TIFF marker.');return;} // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
	dirOffset=dataView.getUint32(tiffOffset+4,littleEndian); // Create the exif object to store the tags:
	data.exif=new EXIF.ExifMap(); // Parse the tags of the main image directory and retrieve the
	// offset to the next directory, usually the thumbnail directory:
	dirOffset=EXIF.parseExifTags(dataView,tiffOffset,tiffOffset+dirOffset,littleEndian,data); // 尝试读取缩略图
	// if ( dirOffset ) {
	//     thumbnailData = {exif: {}};
	//     dirOffset = EXIF.parseExifTags(
	//         dataView,
	//         tiffOffset,
	//         tiffOffset + dirOffset,
	//         littleEndian,
	//         thumbnailData
	//     );
	//     // Check for JPEG Thumbnail offset:
	//     if (thumbnailData.exif[0x0201]) {
	//         data.exif.Thumbnail = EXIF.getExifThumbnail(
	//             dataView,
	//             tiffOffset + thumbnailData.exif[0x0201],
	//             thumbnailData.exif[0x0202] // Thumbnail data length
	//         );
	//     }
	// }
	};ImageMeta.parsers[0xffe1].push(EXIF.parseExifData);return EXIF;}); /**
	     * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
	     * android里面toDataUrl('image/jpege')得到的结果却是png.
	     *
	     * 所以这里没辙，只能借助这个工具
	     * @fileOverview jpeg encoder
	     */define('runtime/html5/jpegencoder',[],function(require,exports,module){ /*
	          Copyright (c) 2008, Adobe Systems Incorporated
	          All rights reserved.

	          Redistribution and use in source and binary forms, with or without
	          modification, are permitted provided that the following conditions are
	          met:

	          * Redistributions of source code must retain the above copyright notice,
	            this list of conditions and the following disclaimer.

	          * Redistributions in binary form must reproduce the above copyright
	            notice, this list of conditions and the following disclaimer in the
	            documentation and/or other materials provided with the distribution.

	          * Neither the name of Adobe Systems Incorporated nor the names of its
	            contributors may be used to endorse or promote products derived from
	            this software without specific prior written permission.

	          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
	          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
	          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
	          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	        */ /*
	        JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009

	        Basic GUI blocking jpeg encoder
	        */function JPEGEncoder(quality){var self=this;var fround=Math.round;var ffloor=Math.floor;var YTable=new Array(64);var UVTable=new Array(64);var fdtbl_Y=new Array(64);var fdtbl_UV=new Array(64);var YDC_HT;var UVDC_HT;var YAC_HT;var UVAC_HT;var bitcode=new Array(65535);var category=new Array(65535);var outputfDCTQuant=new Array(64);var DU=new Array(64);var byteout=[];var bytenew=0;var bytepos=7;var YDU=new Array(64);var UDU=new Array(64);var VDU=new Array(64);var clt=new Array(256);var RGB_YUV_TABLE=new Array(2048);var currentQuality;var ZigZag=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];var std_dc_luminance_nrcodes=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];var std_dc_luminance_values=[0,1,2,3,4,5,6,7,8,9,10,11];var std_ac_luminance_nrcodes=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];var std_ac_luminance_values=[0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,0xf9,0xfa];var std_dc_chrominance_nrcodes=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];var std_dc_chrominance_values=[0,1,2,3,4,5,6,7,8,9,10,11];var std_ac_chrominance_nrcodes=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];var std_ac_chrominance_values=[0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,0xf9,0xfa];function initQuantTables(sf){var YQT=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];for(var i=0;i<64;i++){var t=ffloor((YQT[i]*sf+50)/100);if(t<1){t=1;}else if(t>255){t=255;}YTable[ZigZag[i]]=t;}var UVQT=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99];for(var j=0;j<64;j++){var u=ffloor((UVQT[j]*sf+50)/100);if(u<1){u=1;}else if(u>255){u=255;}UVTable[ZigZag[j]]=u;}var aasf=[1.0,1.387039845,1.306562965,1.175875602,1.0,0.785694958,0.541196100,0.275899379];var k=0;for(var row=0;row<8;row++){for(var col=0;col<8;col++){fdtbl_Y[k]=1.0/(YTable[ZigZag[k]]*aasf[row]*aasf[col]*8.0);fdtbl_UV[k]=1.0/(UVTable[ZigZag[k]]*aasf[row]*aasf[col]*8.0);k++;}}}function computeHuffmanTbl(nrcodes,std_table){var codevalue=0;var pos_in_table=0;var HT=new Array();for(var k=1;k<=16;k++){for(var j=1;j<=nrcodes[k];j++){HT[std_table[pos_in_table]]=[];HT[std_table[pos_in_table]][0]=codevalue;HT[std_table[pos_in_table]][1]=k;pos_in_table++;codevalue++;}codevalue*=2;}return HT;}function initHuffmanTbl(){YDC_HT=computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);UVDC_HT=computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);YAC_HT=computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);UVAC_HT=computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);}function initCategoryNumber(){var nrlower=1;var nrupper=2;for(var cat=1;cat<=15;cat++){ //Positive numbers
	for(var nr=nrlower;nr<nrupper;nr++){category[32767+nr]=cat;bitcode[32767+nr]=[];bitcode[32767+nr][1]=cat;bitcode[32767+nr][0]=nr;} //Negative numbers
	for(var nrneg=-(nrupper-1);nrneg<=-nrlower;nrneg++){category[32767+nrneg]=cat;bitcode[32767+nrneg]=[];bitcode[32767+nrneg][1]=cat;bitcode[32767+nrneg][0]=nrupper-1+nrneg;}nrlower<<=1;nrupper<<=1;}}function initRGBYUVTable(){for(var i=0;i<256;i++){RGB_YUV_TABLE[i]=19595*i;RGB_YUV_TABLE[i+256>>0]=38470*i;RGB_YUV_TABLE[i+512>>0]=7471*i+0x8000;RGB_YUV_TABLE[i+768>>0]=-11059*i;RGB_YUV_TABLE[i+1024>>0]=-21709*i;RGB_YUV_TABLE[i+1280>>0]=32768*i+0x807FFF;RGB_YUV_TABLE[i+1536>>0]=-27439*i;RGB_YUV_TABLE[i+1792>>0]=-5329*i;}} // IO functions
	function writeBits(bs){var value=bs[0];var posval=bs[1]-1;while(posval>=0){if(value&1<<posval){bytenew|=1<<bytepos;}posval--;bytepos--;if(bytepos<0){if(bytenew==0xFF){writeByte(0xFF);writeByte(0);}else {writeByte(bytenew);}bytepos=7;bytenew=0;}}}function writeByte(value){byteout.push(clt[value]); // write char directly instead of converting later
	}function writeWord(value){writeByte(value>>8&0xFF);writeByte(value&0xFF);} // DCT & quantization core
	function fDCTQuant(data,fdtbl){var d0,d1,d2,d3,d4,d5,d6,d7; /* Pass 1: process rows. */var dataOff=0;var i;var I8=8;var I64=64;for(i=0;i<I8;++i){d0=data[dataOff];d1=data[dataOff+1];d2=data[dataOff+2];d3=data[dataOff+3];d4=data[dataOff+4];d5=data[dataOff+5];d6=data[dataOff+6];d7=data[dataOff+7];var tmp0=d0+d7;var tmp7=d0-d7;var tmp1=d1+d6;var tmp6=d1-d6;var tmp2=d2+d5;var tmp5=d2-d5;var tmp3=d3+d4;var tmp4=d3-d4; /* Even part */var tmp10=tmp0+tmp3; /* phase 2 */var tmp13=tmp0-tmp3;var tmp11=tmp1+tmp2;var tmp12=tmp1-tmp2;data[dataOff]=tmp10+tmp11; /* phase 3 */data[dataOff+4]=tmp10-tmp11;var z1=(tmp12+tmp13)*0.707106781; /* c4 */data[dataOff+2]=tmp13+z1; /* phase 5 */data[dataOff+6]=tmp13-z1; /* Odd part */tmp10=tmp4+tmp5; /* phase 2 */tmp11=tmp5+tmp6;tmp12=tmp6+tmp7; /* The rotator is modified from fig 4-8 to avoid extra negations. */var z5=(tmp10-tmp12)*0.382683433; /* c6 */var z2=0.541196100*tmp10+z5; /* c2-c6 */var z4=1.306562965*tmp12+z5; /* c2+c6 */var z3=tmp11*0.707106781; /* c4 */var z11=tmp7+z3; /* phase 5 */var z13=tmp7-z3;data[dataOff+5]=z13+z2; /* phase 6 */data[dataOff+3]=z13-z2;data[dataOff+1]=z11+z4;data[dataOff+7]=z11-z4;dataOff+=8; /* advance pointer to next row */} /* Pass 2: process columns. */dataOff=0;for(i=0;i<I8;++i){d0=data[dataOff];d1=data[dataOff+8];d2=data[dataOff+16];d3=data[dataOff+24];d4=data[dataOff+32];d5=data[dataOff+40];d6=data[dataOff+48];d7=data[dataOff+56];var tmp0p2=d0+d7;var tmp7p2=d0-d7;var tmp1p2=d1+d6;var tmp6p2=d1-d6;var tmp2p2=d2+d5;var tmp5p2=d2-d5;var tmp3p2=d3+d4;var tmp4p2=d3-d4; /* Even part */var tmp10p2=tmp0p2+tmp3p2; /* phase 2 */var tmp13p2=tmp0p2-tmp3p2;var tmp11p2=tmp1p2+tmp2p2;var tmp12p2=tmp1p2-tmp2p2;data[dataOff]=tmp10p2+tmp11p2; /* phase 3 */data[dataOff+32]=tmp10p2-tmp11p2;var z1p2=(tmp12p2+tmp13p2)*0.707106781; /* c4 */data[dataOff+16]=tmp13p2+z1p2; /* phase 5 */data[dataOff+48]=tmp13p2-z1p2; /* Odd part */tmp10p2=tmp4p2+tmp5p2; /* phase 2 */tmp11p2=tmp5p2+tmp6p2;tmp12p2=tmp6p2+tmp7p2; /* The rotator is modified from fig 4-8 to avoid extra negations. */var z5p2=(tmp10p2-tmp12p2)*0.382683433; /* c6 */var z2p2=0.541196100*tmp10p2+z5p2; /* c2-c6 */var z4p2=1.306562965*tmp12p2+z5p2; /* c2+c6 */var z3p2=tmp11p2*0.707106781; /* c4 */var z11p2=tmp7p2+z3p2; /* phase 5 */var z13p2=tmp7p2-z3p2;data[dataOff+40]=z13p2+z2p2; /* phase 6 */data[dataOff+24]=z13p2-z2p2;data[dataOff+8]=z11p2+z4p2;data[dataOff+56]=z11p2-z4p2;dataOff++; /* advance pointer to next column */} // Quantize/descale the coefficients
	var fDCTQuant;for(i=0;i<I64;++i){ // Apply the quantization and scaling factor & Round to nearest integer
	fDCTQuant=data[i]*fdtbl[i];outputfDCTQuant[i]=fDCTQuant>0.0?fDCTQuant+0.5|0:fDCTQuant-0.5|0; //outputfDCTQuant[i] = fround(fDCTQuant);
	}return outputfDCTQuant;}function writeAPP0(){writeWord(0xFFE0); // marker
	writeWord(16); // length
	writeByte(0x4A); // J
	writeByte(0x46); // F
	writeByte(0x49); // I
	writeByte(0x46); // F
	writeByte(0); // = "JFIF",'\0'
	writeByte(1); // versionhi
	writeByte(1); // versionlo
	writeByte(0); // xyunits
	writeWord(1); // xdensity
	writeWord(1); // ydensity
	writeByte(0); // thumbnwidth
	writeByte(0); // thumbnheight
	}function writeSOF0(width,height){writeWord(0xFFC0); // marker
	writeWord(17); // length, truecolor YUV JPG
	writeByte(8); // precision
	writeWord(height);writeWord(width);writeByte(3); // nrofcomponents
	writeByte(1); // IdY
	writeByte(0x11); // HVY
	writeByte(0); // QTY
	writeByte(2); // IdU
	writeByte(0x11); // HVU
	writeByte(1); // QTU
	writeByte(3); // IdV
	writeByte(0x11); // HVV
	writeByte(1); // QTV
	}function writeDQT(){writeWord(0xFFDB); // marker
	writeWord(132); // length
	writeByte(0);for(var i=0;i<64;i++){writeByte(YTable[i]);}writeByte(1);for(var j=0;j<64;j++){writeByte(UVTable[j]);}}function writeDHT(){writeWord(0xFFC4); // marker
	writeWord(0x01A2); // length
	writeByte(0); // HTYDCinfo
	for(var i=0;i<16;i++){writeByte(std_dc_luminance_nrcodes[i+1]);}for(var j=0;j<=11;j++){writeByte(std_dc_luminance_values[j]);}writeByte(0x10); // HTYACinfo
	for(var k=0;k<16;k++){writeByte(std_ac_luminance_nrcodes[k+1]);}for(var l=0;l<=161;l++){writeByte(std_ac_luminance_values[l]);}writeByte(1); // HTUDCinfo
	for(var m=0;m<16;m++){writeByte(std_dc_chrominance_nrcodes[m+1]);}for(var n=0;n<=11;n++){writeByte(std_dc_chrominance_values[n]);}writeByte(0x11); // HTUACinfo
	for(var o=0;o<16;o++){writeByte(std_ac_chrominance_nrcodes[o+1]);}for(var p=0;p<=161;p++){writeByte(std_ac_chrominance_values[p]);}}function writeSOS(){writeWord(0xFFDA); // marker
	writeWord(12); // length
	writeByte(3); // nrofcomponents
	writeByte(1); // IdY
	writeByte(0); // HTY
	writeByte(2); // IdU
	writeByte(0x11); // HTU
	writeByte(3); // IdV
	writeByte(0x11); // HTV
	writeByte(0); // Ss
	writeByte(0x3f); // Se
	writeByte(0); // Bf
	}function processDU(CDU,fdtbl,DC,HTDC,HTAC){var EOB=HTAC[0x00];var M16zeroes=HTAC[0xF0];var pos;var I16=16;var I63=63;var I64=64;var DU_DCT=fDCTQuant(CDU,fdtbl); //ZigZag reorder
	for(var j=0;j<I64;++j){DU[ZigZag[j]]=DU_DCT[j];}var Diff=DU[0]-DC;DC=DU[0]; //Encode DC
	if(Diff==0){writeBits(HTDC[0]); // Diff might be 0
	}else {pos=32767+Diff;writeBits(HTDC[category[pos]]);writeBits(bitcode[pos]);} //Encode ACs
	var end0pos=63; // was const... which is crazy
	for(;end0pos>0&&DU[end0pos]==0;end0pos--){}; //end0pos = first element in reverse order !=0
	if(end0pos==0){writeBits(EOB);return DC;}var i=1;var lng;while(i<=end0pos){var startpos=i;for(;DU[i]==0&&i<=end0pos;++i){}var nrzeroes=i-startpos;if(nrzeroes>=I16){lng=nrzeroes>>4;for(var nrmarker=1;nrmarker<=lng;++nrmarker){writeBits(M16zeroes);}nrzeroes=nrzeroes&0xF;}pos=32767+DU[i];writeBits(HTAC[(nrzeroes<<4)+category[pos]]);writeBits(bitcode[pos]);i++;}if(end0pos!=I63){writeBits(EOB);}return DC;}function initCharLookupTable(){var sfcc=String.fromCharCode;for(var i=0;i<256;i++){ ///// ACHTUNG // 255
	clt[i]=sfcc(i);}}this.encode=function(image,quality) // image data object
	{ // var time_start = new Date().getTime();
	if(quality)setQuality(quality); // Initialize bit writer
	byteout=new Array();bytenew=0;bytepos=7; // Add JPEG headers
	writeWord(0xFFD8); // SOI
	writeAPP0();writeDQT();writeSOF0(image.width,image.height);writeDHT();writeSOS(); // Encode 8x8 macroblocks
	var DCY=0;var DCU=0;var DCV=0;bytenew=0;bytepos=7;this.encode.displayName="_encode_";var imageData=image.data;var width=image.width;var height=image.height;var quadWidth=width*4;var tripleWidth=width*3;var x,y=0;var r,g,b;var start,p,col,row,pos;while(y<height){x=0;while(x<quadWidth){start=quadWidth*y+x;p=start;col=-1;row=0;for(pos=0;pos<64;pos++){row=pos>>3; // /8
	col=(pos&7)*4; // %8
	p=start+row*quadWidth+col;if(y+row>=height){ // padding bottom
	p-=quadWidth*(y+1+row-height);}if(x+col>=quadWidth){ // padding right
	p-=x+col-quadWidth+4;}r=imageData[p++];g=imageData[p++];b=imageData[p++]; /* // calculate YUV values dynamically
	                            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
	                            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
	                            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
	                            */ // use lookup table (slightly faster)
	YDU[pos]=(RGB_YUV_TABLE[r]+RGB_YUV_TABLE[g+256>>0]+RGB_YUV_TABLE[b+512>>0]>>16)-128;UDU[pos]=(RGB_YUV_TABLE[r+768>>0]+RGB_YUV_TABLE[g+1024>>0]+RGB_YUV_TABLE[b+1280>>0]>>16)-128;VDU[pos]=(RGB_YUV_TABLE[r+1280>>0]+RGB_YUV_TABLE[g+1536>>0]+RGB_YUV_TABLE[b+1792>>0]>>16)-128;}DCY=processDU(YDU,fdtbl_Y,DCY,YDC_HT,YAC_HT);DCU=processDU(UDU,fdtbl_UV,DCU,UVDC_HT,UVAC_HT);DCV=processDU(VDU,fdtbl_UV,DCV,UVDC_HT,UVAC_HT);x+=32;}y+=8;} ////////////////////////////////////////////////////////////////
	// Do the bit alignment of the EOI marker
	if(bytepos>=0){var fillbits=[];fillbits[1]=bytepos+1;fillbits[0]=(1<<bytepos+1)-1;writeBits(fillbits);}writeWord(0xFFD9); //EOI
	var jpegDataUri='data:image/jpeg;base64,'+btoa(byteout.join(''));byteout=[]; // benchmarking
	// var duration = new Date().getTime() - time_start;
	// console.log('Encoding time: '+ currentQuality + 'ms');
	//
	return jpegDataUri;};function setQuality(quality){if(quality<=0){quality=1;}if(quality>100){quality=100;}if(currentQuality==quality)return; // don't recalc if unchanged
	var sf=0;if(quality<50){sf=Math.floor(5000/quality);}else {sf=Math.floor(200-quality*2);}initQuantTables(sf);currentQuality=quality; // console.log('Quality set to: '+quality +'%');
	}function init(){ // var time_start = new Date().getTime();
	if(!quality)quality=50; // Create tables
	initCharLookupTable();initHuffmanTbl();initCategoryNumber();initRGBYUVTable();setQuality(quality); // var duration = new Date().getTime() - time_start;
	// console.log('Initialization '+ duration + 'ms');
	}init();};JPEGEncoder.encode=function(data,quality){var encoder=new JPEGEncoder(quality);return encoder.encode(data);};return JPEGEncoder;}); /**
	     * @fileOverview Fix android canvas.toDataUrl bug.
	     */define('runtime/html5/androidpatch',['runtime/html5/util','runtime/html5/jpegencoder','base'],function(Util,encoder,Base){var origin=Util.canvasToDataUrl,supportJpeg;Util.canvasToDataUrl=function(canvas,type,quality){var ctx,w,h,fragement,parts; // 非android手机直接跳过。
	if(!Base.os.android){return origin.apply(null,arguments);} // 检测是否canvas支持jpeg导出，根据数据格式来判断。
	// JPEG 前两位分别是：255, 216
	if(type==='image/jpeg'&&typeof supportJpeg==='undefined'){fragement=origin.apply(null,arguments);parts=fragement.split(',');if(~parts[0].indexOf('base64')){fragement=atob(parts[1]);}else {fragement=decodeURIComponent(parts[1]);}fragement=fragement.substring(0,2);supportJpeg=fragement.charCodeAt(0)===255&&fragement.charCodeAt(1)===216;} // 只有在android环境下才修复
	if(type==='image/jpeg'&&!supportJpeg){w=canvas.width;h=canvas.height;ctx=canvas.getContext('2d');return encoder.encode(ctx.getImageData(0,0,w,h),quality);}return origin.apply(null,arguments);};}); /**
	     * @fileOverview Image
	     */define('runtime/html5/image',['base','runtime/html5/runtime','runtime/html5/util'],function(Base,Html5Runtime,Util){var BLANK='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';return Html5Runtime.register('Image',{ // flag: 标记是否被修改过。
	modified:false,init:function init(){var me=this,img=new Image();img.onload=function(){me._info={type:me.type,width:this.width,height:this.height}; // 读取meta信息。
	if(!me._metas&&'image/jpeg'===me.type){Util.parseMeta(me._blob,function(error,ret){me._metas=ret;me.owner.trigger('load');});}else {me.owner.trigger('load');}};img.onerror=function(){me.owner.trigger('error');};me._img=img;},loadFromBlob:function loadFromBlob(blob){var me=this,img=me._img;me._blob=blob;me.type=blob.type;img.src=Util.createObjectURL(blob.getSource());me.owner.once('load',function(){Util.revokeObjectURL(img.src);});},resize:function resize(width,height){var canvas=this._canvas||(this._canvas=document.createElement('canvas'));this._resize(this._img,canvas,width,height);this._blob=null; // 没用了，可以删掉了。
	this.modified=true;this.owner.trigger('complete','resize');},crop:function crop(x,y,w,h,s){var cvs=this._canvas||(this._canvas=document.createElement('canvas')),opts=this.options,img=this._img,iw=img.naturalWidth,ih=img.naturalHeight,orientation=this.getOrientation();s=s||1; // todo 解决 orientation 的问题。
	// values that require 90 degree rotation
	// if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
	//     switch ( orientation ) {
	//         case 6:
	//             tmp = x;
	//             x = y;
	//             y = iw * s - tmp - w;
	//             console.log(ih * s, tmp, w)
	//             break;
	//     }
	//     (w ^= h, h ^= w, w ^= h);
	// }
	cvs.width=w;cvs.height=h;opts.preserveHeaders||this._rotate2Orientaion(cvs,orientation);this._renderImageToCanvas(cvs,img,-x,-y,iw*s,ih*s);this._blob=null; // 没用了，可以删掉了。
	this.modified=true;this.owner.trigger('complete','crop');},getAsBlob:function getAsBlob(type){var blob=this._blob,opts=this.options,canvas;type=type||this.type; // blob需要重新生成。
	if(this.modified||this.type!==type){canvas=this._canvas;if(type==='image/jpeg'){blob=Util.canvasToDataUrl(canvas,type,opts.quality);if(opts.preserveHeaders&&this._metas&&this._metas.imageHead){blob=Util.dataURL2ArrayBuffer(blob);blob=Util.updateImageHead(blob,this._metas.imageHead);blob=Util.arrayBufferToBlob(blob,type);return blob;}}else {blob=Util.canvasToDataUrl(canvas,type);}blob=Util.dataURL2Blob(blob);}return blob;},getAsDataUrl:function getAsDataUrl(type){var opts=this.options;type=type||this.type;if(type==='image/jpeg'){return Util.canvasToDataUrl(this._canvas,type,opts.quality);}else {return this._canvas.toDataURL(type);}},getOrientation:function getOrientation(){return this._metas&&this._metas.exif&&this._metas.exif.get('Orientation')||1;},info:function info(val){ // setter
	if(val){this._info=val;return this;} // getter
	return this._info;},meta:function meta(val){ // setter
	if(val){this._meta=val;return this;} // getter
	return this._meta;},destroy:function destroy(){var canvas=this._canvas;this._img.onload=null;if(canvas){canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);canvas.width=canvas.height=0;this._canvas=null;} // 释放内存。非常重要，否则释放不了image的内存。
	this._img.src=BLANK;this._img=this._blob=null;},_resize:function _resize(img,cvs,width,height){var opts=this.options,naturalWidth=img.width,naturalHeight=img.height,orientation=this.getOrientation(),scale,w,h,x,y; // values that require 90 degree rotation
	if(~[5,6,7,8].indexOf(orientation)){ // 交换width, height的值。
	width^=height;height^=width;width^=height;}scale=Math[opts.crop?'max':'min'](width/naturalWidth,height/naturalHeight); // 不允许放大。
	opts.allowMagnify||(scale=Math.min(1,scale));w=naturalWidth*scale;h=naturalHeight*scale;if(opts.crop){cvs.width=width;cvs.height=height;}else {cvs.width=w;cvs.height=h;}x=(cvs.width-w)/2;y=(cvs.height-h)/2;opts.preserveHeaders||this._rotate2Orientaion(cvs,orientation);this._renderImageToCanvas(cvs,img,x,y,w,h);},_rotate2Orientaion:function _rotate2Orientaion(canvas,orientation){var width=canvas.width,height=canvas.height,ctx=canvas.getContext('2d');switch(orientation){case 5:case 6:case 7:case 8:canvas.width=height;canvas.height=width;break;}switch(orientation){case 2: // horizontal flip
	ctx.translate(width,0);ctx.scale(-1,1);break;case 3: // 180 rotate left
	ctx.translate(width,height);ctx.rotate(Math.PI);break;case 4: // vertical flip
	ctx.translate(0,height);ctx.scale(1,-1);break;case 5: // vertical flip + 90 rotate right
	ctx.rotate(0.5*Math.PI);ctx.scale(1,-1);break;case 6: // 90 rotate right
	ctx.rotate(0.5*Math.PI);ctx.translate(0,-height);break;case 7: // horizontal flip + 90 rotate right
	ctx.rotate(0.5*Math.PI);ctx.translate(width,-height);ctx.scale(-1,1);break;case 8: // 90 rotate left
	ctx.rotate(-0.5*Math.PI);ctx.translate(-width,0);break;}}, // https://github.com/stomita/ios-imagefile-megapixel/
	// blob/master/src/megapix-image.js
	_renderImageToCanvas:function(){ // 如果不是ios, 不需要这么复杂！
	if(!Base.os.ios){return function(canvas){var args=Base.slice(arguments,1),ctx=canvas.getContext('2d');ctx.drawImage.apply(ctx,args);};} /**
	                 * Detecting vertical squash in loaded image.
	                 * Fixes a bug which squash image vertically while drawing into
	                 * canvas for some images.
	                 */function detectVerticalSquash(img,iw,ih){var canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),sy=0,ey=ih,py=ih,data,alpha,ratio;canvas.width=1;canvas.height=ih;ctx.drawImage(img,0,0);data=ctx.getImageData(0,0,1,ih).data; // search image edge pixel position in case
	// it is squashed vertically.
	while(py>sy){alpha=data[(py-1)*4+3];if(alpha===0){ey=py;}else {sy=py;}py=ey+sy>>1;}ratio=py/ih;return ratio===0?1:ratio;} // fix ie7 bug
	// http://stackoverflow.com/questions/11929099/
	// html5-canvas-drawimage-ratio-bug-ios
	if(Base.os.ios>=7){return function(canvas,img,x,y,w,h){var iw=img.naturalWidth,ih=img.naturalHeight,vertSquashRatio=detectVerticalSquash(img,iw,ih);return canvas.getContext('2d').drawImage(img,0,0,iw*vertSquashRatio,ih*vertSquashRatio,x,y,w,h);};} /**
	                 * Detect subsampling in loaded image.
	                 * In iOS, larger images than 2M pixels may be
	                 * subsampled in rendering.
	                 */function detectSubsampling(img){var iw=img.naturalWidth,ih=img.naturalHeight,canvas,ctx; // subsampling may happen overmegapixel image
	if(iw*ih>1024*1024){canvas=document.createElement('canvas');canvas.width=canvas.height=1;ctx=canvas.getContext('2d');ctx.drawImage(img,-iw+1,0); // subsampled image becomes half smaller in rendering size.
	// check alpha channel value to confirm image is covering
	// edge pixel or not. if alpha value is 0
	// image is not covering, hence subsampled.
	return ctx.getImageData(0,0,1,1).data[3]===0;}else {return false;}}return function(canvas,img,x,y,width,height){var iw=img.naturalWidth,ih=img.naturalHeight,ctx=canvas.getContext('2d'),subsampled=detectSubsampling(img),doSquash=this.type==='image/jpeg',d=1024,sy=0,dy=0,tmpCanvas,tmpCtx,vertSquashRatio,dw,dh,sx,dx;if(subsampled){iw/=2;ih/=2;}ctx.save();tmpCanvas=document.createElement('canvas');tmpCanvas.width=tmpCanvas.height=d;tmpCtx=tmpCanvas.getContext('2d');vertSquashRatio=doSquash?detectVerticalSquash(img,iw,ih):1;dw=Math.ceil(d*width/iw);dh=Math.ceil(d*height/ih/vertSquashRatio);while(sy<ih){sx=0;dx=0;while(sx<iw){tmpCtx.clearRect(0,0,d,d);tmpCtx.drawImage(img,-sx,-sy);ctx.drawImage(tmpCanvas,0,0,d,d,x+dx,y+dy,dw,dh);sx+=d;dx+=dw;}sy+=d;dy+=dh;}ctx.restore();tmpCanvas=tmpCtx=null;};}()});}); /**
	     * @fileOverview Transport
	     * @todo 支持chunked传输，优势：
	     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
	     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
	     */define('runtime/html5/transport',['base','runtime/html5/runtime'],function(Base,Html5Runtime){var noop=Base.noop,$=Base.$;return Html5Runtime.register('Transport',{init:function init(){this._status=0;this._response=null;},send:function send(){var owner=this.owner,opts=this.options,xhr=this._initAjax(),blob=owner._blob,server=opts.server,formData,binary,fr;if(opts.sendAsBinary){server+=(/\?/.test(server)?'&':'?')+$.param(owner._formData);binary=blob.getSource();}else {formData=new FormData();$.each(owner._formData,function(k,v){formData.append(k,v);});formData.append(opts.fileVal,blob.getSource(),opts.filename||owner._formData.name||'');}if(opts.withCredentials&&'withCredentials' in xhr){xhr.open(opts.method,server,true);xhr.withCredentials=true;}else {xhr.open(opts.method,server);}this._setRequestHeader(xhr,opts.headers);if(binary){ // 强制设置成 content-type 为文件流。
	xhr.overrideMimeType&&xhr.overrideMimeType('application/octet-stream'); // android直接发送blob会导致服务端接收到的是空文件。
	// bug详情。
	// https://code.google.com/p/android/issues/detail?id=39882
	// 所以先用fileReader读取出来再通过arraybuffer的方式发送。
	if(Base.os.android){fr=new FileReader();fr.onload=function(){xhr.send(this.result);fr=fr.onload=null;};fr.readAsArrayBuffer(binary);}else {xhr.send(binary);}}else {xhr.send(formData);}},getResponse:function getResponse(){return this._response;},getResponseAsJson:function getResponseAsJson(){return this._parseJson(this._response);},getStatus:function getStatus(){return this._status;},abort:function abort(){var xhr=this._xhr;if(xhr){xhr.upload.onprogress=noop;xhr.onreadystatechange=noop;xhr.abort();this._xhr=xhr=null;}},destroy:function destroy(){this.abort();},_initAjax:function _initAjax(){var me=this,xhr=new XMLHttpRequest(),opts=this.options;if(opts.withCredentials&&!('withCredentials' in xhr)&&typeof XDomainRequest!=='undefined'){xhr=new XDomainRequest();}xhr.upload.onprogress=function(e){var percentage=0;if(e.lengthComputable){percentage=e.loaded/e.total;}return me.trigger('progress',percentage);};xhr.onreadystatechange=function(){if(xhr.readyState!==4){return;}xhr.upload.onprogress=noop;xhr.onreadystatechange=noop;me._xhr=null;me._status=xhr.status;if(xhr.status>=200&&xhr.status<300){me._response=xhr.responseText;return me.trigger('load');}else if(xhr.status>=500&&xhr.status<600){me._response=xhr.responseText;return me.trigger('error','server');}return me.trigger('error',me._status?'http':'abort');};me._xhr=xhr;return xhr;},_setRequestHeader:function _setRequestHeader(xhr,headers){$.each(headers,function(key,val){xhr.setRequestHeader(key,val);});},_parseJson:function _parseJson(str){var json;try{json=JSON.parse(str);}catch(ex){json={};}return json;}});}); /**
	     * @fileOverview  Transport flash实现
	     */define('runtime/html5/md5',['runtime/html5/runtime'],function(FlashRuntime){ /*
	         * Fastest md5 implementation around (JKM md5)
	         * Credits: Joseph Myers
	         *
	         * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
	         * @see http://jsperf.com/md5-shootout/7
	         */ /* this function is much faster,
	          so if possible we use it. Some IEs
	          are the only ones I know of that
	          need the idiotic second function,
	          generated by an if clause.  */var add32=function add32(a,b){return a+b&0xFFFFFFFF;},cmn=function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32(a<<s|a>>>32-s,b);},ff=function ff(a,b,c,d,x,s,t){return cmn(b&c|~b&d,a,b,x,s,t);},gg=function gg(a,b,c,d,x,s,t){return cmn(b&d|c&~d,a,b,x,s,t);},hh=function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t);},ii=function ii(a,b,c,d,x,s,t){return cmn(c^(b|~d),a,b,x,s,t);},md5cycle=function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3]);}, /* there needs to be support for Unicode here,
	           * unless we pretend that we can redefine the MD-5
	           * algorithm for multi-byte characters (perhaps
	           * by adding every four 16-bit characters and
	           * shortening the sum to 32 bits). Otherwise
	           * I suggest performing MD-5 as if every character
	           * was two bytes--e.g., 0040 0025 = @%--but then
	           * how will an ordinary MD-5 sum be matched?
	           * There is no way to standardize text to something
	           * like UTF-8 before transformation; speed cost is
	           * utterly prohibitive. The JavaScript standard
	           * itself needs to look at this: it should start
	           * providing access to strings as preformed UTF-8
	           * 8-bit unsigned value arrays.
	           */md5blk=function md5blk(s){var md5blks=[],i; /* Andy King said do it this way. */for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);}return md5blks;},md5blk_array=function md5blk_array(a){var md5blks=[],i; /* Andy King said do it this way. */for(i=0;i<64;i+=4){md5blks[i>>2]=a[i]+(a[i+1]<<8)+(a[i+2]<<16)+(a[i+3]<<24);}return md5blks;},md51=function md51(s){var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)));}s=s.substring(i-64);length=s.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=s.charCodeAt(i)<<(i%4<<3);}tail[i>>2]|=0x80<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0;}} // Beware that the final length might not fit in 32 bits so we take care of that
	tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state;},md51_array=function md51_array(a){var n=a.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk_array(a.subarray(i-64,i)));} // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
	// containing the last element of the parent array if the sub array specified starts
	// beyond the length of the parent array - weird.
	// https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
	a=i-64<n?a.subarray(i-64):new Uint8Array(0);length=a.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=a[i]<<(i%4<<3);}tail[i>>2]|=0x80<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0;}} // Beware that the final length might not fit in 32 bits so we take care of that
	tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state;},hex_chr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],rhex=function rhex(n){var s='',j;for(j=0;j<4;j+=1){s+=hex_chr[n>>j*8+4&0x0F]+hex_chr[n>>j*8&0x0F];}return s;},hex=function hex(x){var i;for(i=0;i<x.length;i+=1){x[i]=rhex(x[i]);}return x.join('');},md5=function md5(s){return hex(md51(s));}, ////////////////////////////////////////////////////////////////////////////
	/**
	         * SparkMD5 OOP implementation.
	         *
	         * Use this class to perform an incremental md5, otherwise use the
	         * static methods instead.
	         */SparkMD5=function SparkMD5(){ // call reset to init the instance
	this.reset();}; // In some cases the fast add32 function cannot be used..
	if(md5('hello')!=='5d41402abc4b2a76b9719d911017c592'){add32=function add32(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;};} /**
	         * Appends a string.
	         * A conversion will be applied if an utf8 string is detected.
	         *
	         * @param {String} str The string to be appended
	         *
	         * @return {SparkMD5} The instance itself
	         */SparkMD5.prototype.append=function(str){ // converts the string to utf8 bytes if necessary
	if(/[\u0080-\uFFFF]/.test(str)){str=unescape(encodeURIComponent(str));} // then append as binary
	this.appendBinary(str);return this;}; /**
	         * Appends a binary string.
	         *
	         * @param {String} contents The binary string to be appended
	         *
	         * @return {SparkMD5} The instance itself
	         */SparkMD5.prototype.appendBinary=function(contents){this._buff+=contents;this._length+=contents.length;var length=this._buff.length,i;for(i=64;i<=length;i+=64){md5cycle(this._state,md5blk(this._buff.substring(i-64,i)));}this._buff=this._buff.substr(i-64);return this;}; /**
	         * Finishes the incremental computation, reseting the internal state and
	         * returning the result.
	         * Use the raw parameter to obtain the raw result instead of the hex one.
	         *
	         * @param {Boolean} raw True to get the raw result, false to get the hex result
	         *
	         * @return {String|Array} The result
	         */SparkMD5.prototype.end=function(raw){var buff=this._buff,length=buff.length,i,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff.charCodeAt(i)<<(i%4<<3);}this._finish(tail,length);ret=!!raw?this._state:hex(this._state);this.reset();return ret;}; /**
	         * Finish the final calculation based on the tail.
	         *
	         * @param {Array}  tail   The tail (will be modified)
	         * @param {Number} length The length of the remaining buffer
	         */SparkMD5.prototype._finish=function(tail,length){var i=length,tmp,lo,hi;tail[i>>2]|=0x80<<(i%4<<3);if(i>55){md5cycle(this._state,tail);for(i=0;i<16;i+=1){tail[i]=0;}} // Do the final computation based on the tail and length
	// Beware that the final length may not fit in 32 bits so we take care of that
	tmp=this._length*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(this._state,tail);}; /**
	         * Resets the internal state of the computation.
	         *
	         * @return {SparkMD5} The instance itself
	         */SparkMD5.prototype.reset=function(){this._buff="";this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this;}; /**
	         * Releases memory used by the incremental buffer and other aditional
	         * resources. If you plan to use the instance again, use reset instead.
	         */SparkMD5.prototype.destroy=function(){delete this._state;delete this._buff;delete this._length;}; /**
	         * Performs the md5 hash on a string.
	         * A conversion will be applied if utf8 string is detected.
	         *
	         * @param {String}  str The string
	         * @param {Boolean} raw True to get the raw result, false to get the hex result
	         *
	         * @return {String|Array} The result
	         */SparkMD5.hash=function(str,raw){ // converts the string to utf8 bytes if necessary
	if(/[\u0080-\uFFFF]/.test(str)){str=unescape(encodeURIComponent(str));}var hash=md51(str);return !!raw?hash:hex(hash);}; /**
	         * Performs the md5 hash on a binary string.
	         *
	         * @param {String}  content The binary string
	         * @param {Boolean} raw     True to get the raw result, false to get the hex result
	         *
	         * @return {String|Array} The result
	         */SparkMD5.hashBinary=function(content,raw){var hash=md51(content);return !!raw?hash:hex(hash);}; /**
	         * SparkMD5 OOP implementation for array buffers.
	         *
	         * Use this class to perform an incremental md5 ONLY for array buffers.
	         */SparkMD5.ArrayBuffer=function(){ // call reset to init the instance
	this.reset();}; ////////////////////////////////////////////////////////////////////////////
	/**
	         * Appends an array buffer.
	         *
	         * @param {ArrayBuffer} arr The array to be appended
	         *
	         * @return {SparkMD5.ArrayBuffer} The instance itself
	         */SparkMD5.ArrayBuffer.prototype.append=function(arr){ // TODO: we could avoid the concatenation here but the algorithm would be more complex
	//       if you find yourself needing extra performance, please make a PR.
	var buff=this._concatArrayBuffer(this._buff,arr),length=buff.length,i;this._length+=arr.byteLength;for(i=64;i<=length;i+=64){md5cycle(this._state,md5blk_array(buff.subarray(i-64,i)));} // Avoids IE10 weirdness (documented above)
	this._buff=i-64<length?buff.subarray(i-64):new Uint8Array(0);return this;}; /**
	         * Finishes the incremental computation, reseting the internal state and
	         * returning the result.
	         * Use the raw parameter to obtain the raw result instead of the hex one.
	         *
	         * @param {Boolean} raw True to get the raw result, false to get the hex result
	         *
	         * @return {String|Array} The result
	         */SparkMD5.ArrayBuffer.prototype.end=function(raw){var buff=this._buff,length=buff.length,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i,ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff[i]<<(i%4<<3);}this._finish(tail,length);ret=!!raw?this._state:hex(this._state);this.reset();return ret;};SparkMD5.ArrayBuffer.prototype._finish=SparkMD5.prototype._finish; /**
	         * Resets the internal state of the computation.
	         *
	         * @return {SparkMD5.ArrayBuffer} The instance itself
	         */SparkMD5.ArrayBuffer.prototype.reset=function(){this._buff=new Uint8Array(0);this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this;}; /**
	         * Releases memory used by the incremental buffer and other aditional
	         * resources. If you plan to use the instance again, use reset instead.
	         */SparkMD5.ArrayBuffer.prototype.destroy=SparkMD5.prototype.destroy; /**
	         * Concats two array buffers, returning a new one.
	         *
	         * @param  {ArrayBuffer} first  The first array buffer
	         * @param  {ArrayBuffer} second The second array buffer
	         *
	         * @return {ArrayBuffer} The new array buffer
	         */SparkMD5.ArrayBuffer.prototype._concatArrayBuffer=function(first,second){var firstLength=first.length,result=new Uint8Array(firstLength+second.byteLength);result.set(first);result.set(new Uint8Array(second),firstLength);return result;}; /**
	         * Performs the md5 hash on an array buffer.
	         *
	         * @param {ArrayBuffer} arr The array buffer
	         * @param {Boolean}     raw True to get the raw result, false to get the hex result
	         *
	         * @return {String|Array} The result
	         */SparkMD5.ArrayBuffer.hash=function(arr,raw){var hash=md51_array(new Uint8Array(arr));return !!raw?hash:hex(hash);};return FlashRuntime.register('Md5',{init:function init(){ // do nothing.
	},loadFromBlob:function loadFromBlob(file){var blob=file.getSource(),chunkSize=2*1024*1024,chunks=Math.ceil(blob.size/chunkSize),chunk=0,owner=this.owner,spark=new SparkMD5.ArrayBuffer(),me=this,blobSlice=blob.mozSlice||blob.webkitSlice||blob.slice,_loadNext,fr;fr=new FileReader();_loadNext=function loadNext(){var start,end;start=chunk*chunkSize;end=Math.min(start+chunkSize,blob.size);fr.onload=function(e){spark.append(e.target.result);owner.trigger('progress',{total:file.size,loaded:end});};fr.onloadend=function(){fr.onloadend=fr.onload=null;if(++chunk<chunks){setTimeout(_loadNext,1);}else {setTimeout(function(){owner.trigger('load');me.result=spark.end();_loadNext=file=blob=spark=null;owner.trigger('complete');},50);}};fr.readAsArrayBuffer(blobSlice.call(blob,start,end));};_loadNext();},getResult:function getResult(){return this.result;}});}); /**
	     * @fileOverview FlashRuntime
	     */define('runtime/flash/runtime',['base','runtime/runtime','runtime/compbase'],function(Base,Runtime,CompBase){var $=Base.$,type='flash',components={};function getFlashVersion(){var version;try{version=navigator.plugins['Shockwave Flash'];version=version.description;}catch(ex){try{version=new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');}catch(ex2){version='0.0';}}version=version.match(/\d+/g);return parseFloat(version[0]+'.'+version[1],10);}function FlashRuntime(){var pool={},clients={},destroy=this.destroy,me=this,jsreciver=Base.guid('webuploader_');Runtime.apply(me,arguments);me.type=type; // 这个方法的调用者，实际上是RuntimeClient
	me.exec=function(comp,fn /*, args...*/){var client=this,uid=client.uid,args=Base.slice(arguments,2),instance;clients[uid]=client;if(components[comp]){if(!pool[uid]){pool[uid]=new components[comp](client,me);}instance=pool[uid];if(instance[fn]){return instance[fn].apply(instance,args);}}return me.flashExec.apply(client,arguments);};function handler(evt,obj){var type=evt.type||evt,parts,uid;parts=type.split('::');uid=parts[0];type=parts[1]; // console.log.apply( console, arguments );
	if(type==='Ready'&&uid===me.uid){me.trigger('ready');}else if(clients[uid]){clients[uid].trigger(type.toLowerCase(),evt,obj);} // Base.log( evt, obj );
	} // flash的接受器。
	window[jsreciver]=function(){var args=arguments; // 为了能捕获得到。
	setTimeout(function(){handler.apply(null,args);},1);};this.jsreciver=jsreciver;this.destroy=function(){ // @todo 删除池子中的所有实例
	return destroy&&destroy.apply(this,arguments);};this.flashExec=function(comp,fn){var flash=me.getFlash(),args=Base.slice(arguments,2);return flash.exec(this.uid,comp,fn,args);}; // @todo
	}Base.inherits(Runtime,{constructor:FlashRuntime,init:function init(){var container=this.getContainer(),opts=this.options,html; // if not the minimal height, shims are not initialized
	// in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
	container.css({position:'absolute',top:'-8px',left:'-8px',width:'9px',height:'9px',overflow:'hidden'}); // insert flash object
	html='<object id="'+this.uid+'" type="application/'+'x-shockwave-flash" data="'+opts.swf+'" ';if(Base.browser.ie){html+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';}html+='width="100%" height="100%" style="outline:0">'+'<param name="movie" value="'+opts.swf+'" />'+'<param name="flashvars" value="uid='+this.uid+'&jsreciver='+this.jsreciver+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+'</object>';container.html(html);},getFlash:function getFlash(){if(this._flash){return this._flash;}this._flash=$('#'+this.uid).get(0);return this._flash;}});FlashRuntime.register=function(name,component){component=components[name]=Base.inherits(CompBase,$.extend({ // @todo fix this later
	flashExec:function flashExec(){var owner=this.owner,runtime=this.getRuntime();return runtime.flashExec.apply(owner,arguments);}},component));return component;};if(getFlashVersion()>=11.4){Runtime.addRuntime(type,FlashRuntime);}return FlashRuntime;}); /**
	     * @fileOverview FilePicker
	     */define('runtime/flash/filepicker',['base','runtime/flash/runtime'],function(Base,FlashRuntime){var $=Base.$;return FlashRuntime.register('FilePicker',{init:function init(opts){var copy=$.extend({},opts),len,i; // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
	len=copy.accept&&copy.accept.length;for(i=0;i<len;i++){if(!copy.accept[i].title){copy.accept[i].title='Files';}}delete copy.button;delete copy.id;delete copy.container;this.flashExec('FilePicker','init',copy);},destroy:function destroy(){this.flashExec('FilePicker','destroy');}});}); /**
	     * @fileOverview 图片压缩
	     */define('runtime/flash/image',['runtime/flash/runtime'],function(FlashRuntime){return FlashRuntime.register('Image',{ // init: function( options ) {
	//     var owner = this.owner;
	//     this.flashExec( 'Image', 'init', options );
	//     owner.on( 'load', function() {
	//         debugger;
	//     });
	// },
	loadFromBlob:function loadFromBlob(blob){var owner=this.owner;owner.info()&&this.flashExec('Image','info',owner.info());owner.meta()&&this.flashExec('Image','meta',owner.meta());this.flashExec('Image','loadFromBlob',blob.uid);}});}); /**
	     * @fileOverview  Transport flash实现
	     */define('runtime/flash/transport',['base','runtime/flash/runtime','runtime/client'],function(Base,FlashRuntime,RuntimeClient){var $=Base.$;return FlashRuntime.register('Transport',{init:function init(){this._status=0;this._response=null;this._responseJson=null;},send:function send(){var owner=this.owner,opts=this.options,xhr=this._initAjax(),blob=owner._blob,server=opts.server,binary;xhr.connectRuntime(blob.ruid);if(opts.sendAsBinary){server+=(/\?/.test(server)?'&':'?')+$.param(owner._formData);binary=blob.uid;}else {$.each(owner._formData,function(k,v){xhr.exec('append',k,v);});xhr.exec('appendBlob',opts.fileVal,blob.uid,opts.filename||owner._formData.name||'');}this._setRequestHeader(xhr,opts.headers);xhr.exec('send',{method:opts.method,url:server,forceURLStream:opts.forceURLStream,mimeType:'application/octet-stream'},binary);},getStatus:function getStatus(){return this._status;},getResponse:function getResponse(){return this._response||'';},getResponseAsJson:function getResponseAsJson(){return this._responseJson;},abort:function abort(){var xhr=this._xhr;if(xhr){xhr.exec('abort');xhr.destroy();this._xhr=xhr=null;}},destroy:function destroy(){this.abort();},_initAjax:function _initAjax(){var me=this,xhr=new RuntimeClient('XMLHttpRequest');xhr.on('uploadprogress progress',function(e){var percent=e.loaded/e.total;percent=Math.min(1,Math.max(0,percent));return me.trigger('progress',percent);});xhr.on('load',function(){var status=xhr.exec('getStatus'),readBody=false,err='',p;xhr.off();me._xhr=null;if(status>=200&&status<300){readBody=true;}else if(status>=500&&status<600){readBody=true;err='server';}else {err='http';}if(readBody){me._response=xhr.exec('getResponse');me._response=decodeURIComponent(me._response); // flash 处理可能存在 bug, 没辙只能靠 js 了
	// try {
	//     me._responseJson = xhr.exec('getResponseAsJson');
	// } catch ( error ) {
	p=window.JSON&&window.JSON.parse||function(s){try{return new Function('return '+s).call();}catch(err){return {};}};me._responseJson=me._response?p(me._response):{}; // }
	}xhr.destroy();xhr=null;return err?me.trigger('error',err):me.trigger('load');});xhr.on('error',function(){xhr.off();me._xhr=null;me.trigger('error','http');});me._xhr=xhr;return xhr;},_setRequestHeader:function _setRequestHeader(xhr,headers){$.each(headers,function(key,val){xhr.exec('setRequestHeader',key,val);});}});}); /**
	     * @fileOverview Blob Html实现
	     */define('runtime/flash/blob',['runtime/flash/runtime','lib/blob'],function(FlashRuntime,Blob){return FlashRuntime.register('Blob',{slice:function slice(start,end){var blob=this.flashExec('Blob','slice',start,end);return new Blob(blob.uid,blob);}});}); /**
	     * @fileOverview  Md5 flash实现
	     */define('runtime/flash/md5',['runtime/flash/runtime'],function(FlashRuntime){return FlashRuntime.register('Md5',{init:function init(){ // do nothing.
	},loadFromBlob:function loadFromBlob(blob){return this.flashExec('Md5','loadFromBlob',blob.uid);}});}); /**
	     * @fileOverview 完全版本。
	     */define('preset/all',['base', // widgets
	'widgets/filednd','widgets/filepaste','widgets/filepicker','widgets/image','widgets/queue','widgets/runtime','widgets/upload','widgets/validator','widgets/md5', // runtimes
	// html5
	'runtime/html5/blob','runtime/html5/dnd','runtime/html5/filepaste','runtime/html5/filepicker','runtime/html5/imagemeta/exif','runtime/html5/androidpatch','runtime/html5/image','runtime/html5/transport','runtime/html5/md5', // flash
	'runtime/flash/filepicker','runtime/flash/image','runtime/flash/transport','runtime/flash/blob','runtime/flash/md5'],function(Base){return Base;}); /**
	     * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
	     *
	     * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
	     *
	     * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
	     *
	     * 如：
	     * WebUploader.create({
	     *     ...
	     *
	     *     disableWidgets: 'log',
	     *
	     *     ...
	     * })
	     */define('widgets/log',['base','uploader','widgets/widget'],function(Base,Uploader){var $=Base.$,logUrl=' http://static.tieba.baidu.com/tb/pms/img/st.gif??',product=(location.hostname||location.host||'protected').toLowerCase(), // 只针对 baidu 内部产品用户做统计功能。
	enable=product&&/baidu/i.exec(product),base;if(!enable){return;}base={dv:3,master:'webuploader',online:/test/.exec(product)?0:1,module:'',product:product,type:0};function send(data){var obj=$.extend({},base,data),url=logUrl.replace(/^(.*)\?/,'$1'+$.param(obj)),image=new Image();image.src=url;}return Uploader.register({name:'log',init:function init(){var owner=this.owner,count=0,size=0;owner.on('error',function(code){send({type:2,c_error_code:code});}).on('uploadError',function(file,reason){send({type:2,c_error_code:'UPLOAD_ERROR',c_reason:''+reason});}).on('uploadComplete',function(file){count++;size+=file.size;}).on('uploadFinished',function(){send({c_count:count,c_size:size});count=size=0;});send({c_usage:1});}});}); /**
	     * @fileOverview Uploader上传类
	     */define('webuploader',['preset/all','widgets/log'],function(preset){return preset;});return require('webuploader');});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105)(module)))

/***/ },

/***/ 490:
8,

/***/ 494:
8

});