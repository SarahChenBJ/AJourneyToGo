System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var e,t,i,n,r,o,s,a;return{setters:[function(s){e=s._,t=s.t,i=s.g,n=s.c,r=s.i,o=s.p},function(e){s=e.s,a=e.b}],execute:function(){let h=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));const e=this.closest("details");e&&e.addEventListener("toggle",(()=>{e.open&&this.source.focus()}))}relayKeydown(e){if(!this.isControlTab(e.target)&&e.target!==this.source||"ArrowDown"!==e.key&&"Tab"!==e.key){if("Escape"===e.key){const e=this.closest("details");e&&e.removeAttribute("open")}}else e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"))}isControlTab(e){return!!e&&(!!this.control&&Array.from(this.control.children).includes(e))}relayInput(e){if(!e.target)return;const t=e.target.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:t}))}routeCustomEvent(e){this.sinks[this.selectedIndex].dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;const e=this.control.querySelector('[aria-selected="true"]');if(!e)throw new Error("no selected element");return Array.from(this.control.children).indexOf(e)}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];const t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){const e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};e([t],h.prototype,"source",void 0),e([i],h.prototype,"sinks",void 0),e([t],h.prototype,"control",void 0),h=e([n],h);const{getItem:d,setItem:c,removeItem:l}=s("localStorage",{throwQuotaErrorsOnSet:!0});var u,f;!function(e){e.Branch="branch",e.Tag="tag"}(u||(u={}));class SearchIndex{constructor(e,t,i,n,r){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=i,this.cacheKey=n,this.nameWithOwner=r}render(){this.selector.render()}async fetchData(){if(this.isLoading&&!this.fetchInProgress){if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;const e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}}async processResponse(e){if(this.emitStats(e),!e.ok)return void(this.fetchFailed=!0);const t=e.clone(),i=await e.json();this.knownItems=i.refs,this.cacheKey=i.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(e.ok)switch(e.status){case 200:a({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:a({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:a({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}else a({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0)}search(e){if(""===e)return void(this.currentSearchResult=this.knownItems);const t=[],i=[];let n;this.exactMatchFound=!1;for(const r of this.knownItems)n=r.indexOf(e),n<0||(0!==n?t.push(r):(i.push(r),e===r&&(this.exactMatchFound=!0)));this.currentSearchResult=[...i,...t]}bootstrapFromLocalStorage(){const e=d(this.localStorageKey);if(!e)return!1;const t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,a({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(l(this.localStorageKey),!1)}async flushToLocalStorage(e){try{c(this.localStorageKey,e)}catch(t){if(!t.message.toLowerCase().includes("quota"))throw t;this.clearSiblingLocalStorage(),a({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{c(this.localStorageKey,e)}catch(i){i.message.toLowerCase().includes("quota")&&a({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}}clearSiblingLocalStorage(){for(const e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&l(e)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}}SearchIndex.LocalStoragePrefix="ref-selector";var p="undefined"==typeof document?void 0:document;function m(e,t){var i=e.nodeName,n=t.nodeName;return i===n||!!(t.actualize&&i.charCodeAt(0)<91&&n.charCodeAt(0)>90)&&i===n.toUpperCase()}function g(e,t,i){e[i]!==t[i]&&(e[i]=t[i],e[i]?e.setAttribute(i,""):e.removeAttribute(i))}var v={OPTION:function(e,t){var i=e.parentNode;if(i){var n=i.nodeName.toUpperCase();"OPTGROUP"===n&&(n=(i=i.parentNode)&&i.nodeName.toUpperCase()),"SELECT"!==n||i.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),i.selectedIndex=-1)}g(e,t,"selected")},INPUT:function(e,t){g(e,t,"checked"),g(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var i=t.value;e.value!==i&&(e.value=i);var n=e.firstChild;if(n){var r=n.nodeValue;if(r==i||!i&&r==e.placeholder)return;n.nodeValue=i}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var i,n,r=-1,o=0,s=e.firstChild;s;)if("OPTGROUP"===(n=s.nodeName&&s.nodeName.toUpperCase()))s=(i=s).firstChild;else{if("OPTION"===n){if(s.hasAttribute("selected")){r=o;break}o++}!(s=s.nextSibling)&&i&&(s=i.nextSibling,i=null)}e.selectedIndex=r}}};function x(){}function S(e){return e.id}var I=function(e){return function(t,i,n){if(n||(n={}),"string"==typeof i)if("#document"===t.nodeName||"HTML"===t.nodeName){var r=i;(i=p.createElement("html")).innerHTML=r}else o=i,!f&&p.createRange&&(f=p.createRange()).selectNode(p.body),f&&f.createContextualFragment?s=f.createContextualFragment(o):(s=p.createElement("body")).innerHTML=o,i=s.childNodes[0];var o,s,a,h=n.getNodeKey||S,d=n.onBeforeNodeAdded||x,c=n.onNodeAdded||x,l=n.onBeforeElUpdated||x,u=n.onElUpdated||x,g=n.onBeforeNodeDiscarded||x,I=n.onNodeDiscarded||x,y=n.onBeforeElChildrenUpdated||x,w=!0===n.childrenOnly,E={};function b(e){a?a.push(e):a=[e]}function C(e,t){if(1===e.nodeType)for(var i=e.firstChild;i;){var n=void 0;t&&(n=h(i))?b(n):(I(i),i.firstChild&&C(i,t)),i=i.nextSibling}}function A(e,t,i){!1!==g(e)&&(t&&t.removeChild(e),I(e),C(e,i))}function T(e){c(e);for(var t=e.firstChild;t;){var i=t.nextSibling,n=h(t);if(n){var r=E[n];r&&m(t,r)&&(t.parentNode.replaceChild(r,t),R(r,t))}T(t),t=i}}function R(n,r,o){var s=h(r);if(s&&delete E[s],!i.isSameNode||!i.isSameNode(t)){if(!o){if(!1===l(n,r))return;if(e(n,r),u(n),!1===y(n,r))return}"TEXTAREA"!==n.nodeName?function(e,t){var i,n,r,o,s,a=t.firstChild,c=e.firstChild;e:for(;a;){for(o=a.nextSibling,i=h(a);c;){if(r=c.nextSibling,a.isSameNode&&a.isSameNode(c)){a=o,c=r;continue e}n=h(c);var l=c.nodeType,u=void 0;if(l===a.nodeType&&(1===l?(i?i!==n&&((s=E[i])?r===s?u=!1:(e.insertBefore(s,c),n?b(n):A(c,e,!0),c=s):u=!1):n&&(u=!1),(u=!1!==u&&m(c,a))&&R(c,a)):3!==l&&8!=l||(u=!0,c.nodeValue!==a.nodeValue&&(c.nodeValue=a.nodeValue))),u){a=o,c=r;continue e}n?b(n):A(c,e,!0),c=r}if(i&&(s=E[i])&&m(s,a))e.appendChild(s),R(s,a);else{var f=d(a);!1!==f&&(f&&(a=f),a.actualize&&(a=a.actualize(e.ownerDocument||p)),e.appendChild(a),T(a))}a=o,c=r}!function(e,t,i){for(;t;){var n=t.nextSibling;(i=h(t))?b(i):A(t,e,!0),t=n}}(e,c,n);var g=v[e.nodeName];g&&g(e,t)}(n,r):v.TEXTAREA(n,r)}}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var i=t.firstChild;i;){var n=h(i);n&&(E[n]=i),e(i),i=i.nextSibling}}(t);var L,_,z=t,M=z.nodeType,O=i.nodeType;if(!w)if(1===M)1===O?m(t,i)||(I(t),z=function(e,t){for(var i=e.firstChild;i;){var n=i.nextSibling;t.appendChild(i),i=n}return t}(t,(L=i.nodeName,(_=i.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==_?p.createElementNS(_,L):p.createElement(L)))):z=i;else if(3===M||8===M){if(O===M)return z.nodeValue!==i.nodeValue&&(z.nodeValue=i.nodeValue),z;z=i}if(z===i)I(t);else if(R(z,i,w),a)for(var N=0,P=a.length;N<P;N++){var F=E[a[N]];F&&A(F,F.parentNode,!1)}return!w&&z!==t&&t.parentNode&&(z.actualize&&(z=z.actualize(t.ownerDocument||p)),t.parentNode.replaceChild(z,t)),z}}((function(e,t){var i,n,r,o,s,a=t.attributes;for(i=a.length-1;i>=0;--i)r=(n=a[i]).name,o=n.namespaceURI,s=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==s&&e.setAttributeNS(o,r,s)):e.getAttribute(r)!==s&&e.setAttribute(r,s);for(i=(a=e.attributes).length-1;i>=0;--i)!1!==(n=a[i]).specified&&(r=n.name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r))}));var y=function(){function e(t){var i=t.itemCount,n=t.itemSizeGetter,r=t.estimatedItemSize;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemSizeGetter=n,this._itemCount=i,this._estimatedItemSize=r,this._itemSizeAndPositionData={},this._lastMeasuredIndex=-1}return e.prototype.getLastMeasuredIndex=function(){return this._lastMeasuredIndex},e.prototype.getSizeAndPositionForIndex=function(e){if(e<0||e>=this._itemCount)throw Error("Requested index "+e+" is outside of range 0.."+this._itemCount);if(e>this._lastMeasuredIndex){for(var t=this.getSizeAndPositionOfLastMeasuredItem(),i=t.offset+t.size,n=this._lastMeasuredIndex+1;n<=e;n++){var r=this._itemSizeGetter({index:n});if(null==r||isNaN(r))throw Error("Invalid size returned for index "+n+" of value "+r);this._itemSizeAndPositionData[n]={offset:i,size:r},i+=r}this._lastMeasuredIndex=e}return this._itemSizeAndPositionData[e]},e.prototype.getSizeAndPositionOfLastMeasuredItem=function(){return this._lastMeasuredIndex>=0?this._itemSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}},e.prototype.getTotalSize=function(){var e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this._itemCount-this._lastMeasuredIndex-1)*this._estimatedItemSize},e.prototype.getUpdatedOffsetForIndex=function(e){var t=e.align,i=void 0===t?"start":t,n=e.containerSize,r=e.targetIndex;if(n<=0)return 0;var o=this.getSizeAndPositionForIndex(r),s=o.offset,a=s-n+o.size,h=void 0;switch(i){case"end":h=a;break;case"center":h=s-(n-o.size)/2;break;default:h=s}var d=this.getTotalSize();return Math.max(0,Math.min(d-n,h))},e.prototype.getVisibleRange=function(e){var t=e.containerSize,i=e.offset,n=e.overscanCount;if(0===this.getTotalSize())return{};var r=i+t,o=this._findNearestItem(i),s=o,a=this.getSizeAndPositionForIndex(o);for(i=a.offset+a.size;i<r&&s<this._itemCount-1;)s++,i+=this.getSizeAndPositionForIndex(s).size;return n&&(o=Math.max(0,o-n),s=Math.min(s+n,this._itemCount)),{start:o,stop:s}},e.prototype.resetItem=function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)},e.prototype._binarySearch=function(e){for(var t=e.low,i=e.high,n=e.offset,r=void 0,o=void 0;t<=i;){if(r=t+Math.floor((i-t)/2),(o=this.getSizeAndPositionForIndex(r).offset)===n)return r;o<n?t=r+1:o>n&&(i=r-1)}if(t>0)return t-1},e.prototype._exponentialSearch=function(e){for(var t=e.index,i=e.offset,n=1;t<this._itemCount&&this.getSizeAndPositionForIndex(t).offset<i;)t+=n,n*=2;return this._binarySearch({high:Math.min(t,this._itemCount-1),low:Math.floor(t/2),offset:i})},e.prototype._findNearestItem=function(e){if(isNaN(e))throw Error("Invalid offset "+e+" specified");e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredItem(),i=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch({high:i,low:0,offset:e}):this._exponentialSearch({index:i,offset:e})},e}();var w=function(){function e(t,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getRowHeight=function(e){var t=e.index,i=n.options.rowHeight;return"function"==typeof i?i(t):Array.isArray(i)?i[t]:i},this.container=t,this.options=i,this.state={},this._initializeSizeAndPositionManager(i.rowCount),this.render=this.render.bind(this),this.handleScroll=this.handleScroll.bind(this),this.componentDidMount()}return e.prototype.componentDidMount=function(){var e=this,t=this.options,i=t.onMount,n=t.initialScrollTop,r=t.initialIndex,o=t.height,s=n||null!=r&&this.getRowOffset(r)||0,a=this.inner=document.createElement("div"),h=this.content=document.createElement("div");a.setAttribute("style","position:relative; overflow:hidden; width:100%; min-height:100%; will-change: transform;"),h.setAttribute("style","position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible;"),a.appendChild(h),this.container.appendChild(a),this.setState({offset:s,height:o},(function(){s&&(e.container.scrollTop=s),e.container.addEventListener("scroll",e.handleScroll),"function"==typeof i&&i()}))},e.prototype._initializeSizeAndPositionManager=function(e){this._sizeAndPositionManager=new y({itemCount:e,itemSizeGetter:this.getRowHeight,estimatedItemSize:this.options.estimatedRowHeight||100})},e.prototype.setState=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1];this.state=Object.assign(this.state,t),requestAnimationFrame((function(){e.render(),"function"==typeof i&&i()}))},e.prototype.resize=function(e,t){this.setState({height:e},t)},e.prototype.handleScroll=function(e){var t=this.options.onScroll,i=this.container.scrollTop;this.setState({offset:i}),"function"==typeof t&&t(i,e)},e.prototype.getRowOffset=function(e){return this._sizeAndPositionManager.getSizeAndPositionForIndex(e).offset},e.prototype.scrollToIndex=function(e,t){var i=this.state.height,n=this._sizeAndPositionManager.getUpdatedOffsetForIndex({align:t,containerSize:i,targetIndex:e});this.container.scrollTop=n},e.prototype.setRowCount=function(e){this._initializeSizeAndPositionManager(e),this.render()},e.prototype.onRowsRendered=function(e){var t=this.options.onRowsRendered;"function"==typeof t&&t(e)},e.prototype.destroy=function(){this.container.removeEventListener("scroll",this.handleScroll),this.container.innerHTML=""},e.prototype.render=function(){for(var e=this.options,t=e.overscanCount,i=e.renderRow,n=this.state,r=n.height,o=n.offset,s=void 0===o?0:o,a=this._sizeAndPositionManager.getVisibleRange({containerSize:r,offset:s,overscanCount:t}),h=a.start,d=a.stop,c=document.createDocumentFragment(),l=h;l<=d;l++)c.appendChild(i(l));this.inner.style.height=this._sizeAndPositionManager.getTotalSize()+"px",this.content.style.top=this.getRowOffset(h)+"px",I(this.content,c,{childrenOnly:!0,getNodeKey:function(e){return e.nodeIndex}}),this.onRowsRendered({startIndex:h,stopIndex:d})},e}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}!function(e){function t(){return E(this,t),b(this,e.apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),t.prototype.onRowsRendered=function(e){var t=this,i=e.startIndex,n=e.stopIndex,r=this.options,o=r.isRowLoaded,s=r.loadMoreRows,a=r.minimumBatchSize,h=void 0===a?10:a,d=r.rowCount,c=void 0===d?0:d,l=r.threshold,u=void 0===l?15:l;(function(e){for(var t=e.isRowLoaded,i=e.minimumBatchSize,n=e.rowCount,r=e.startIndex,o=e.stopIndex,s=[],a=null,h=null,d=r;d<=o;d++){t(d)?null!==h&&(s.push({startIndex:a,stopIndex:h}),a=h=null):(h=d,null===a&&(a=d))}if(null!==h){for(var c=Math.min(Math.max(h,a+i-1),n-1),l=h+1;l<=c&&!t({index:l});l++)h=l;s.push({startIndex:a,stopIndex:h})}if(s.length)for(var u=s[0];u.stopIndex-u.startIndex+1<i&&u.startIndex>0;){var f=u.startIndex-1;if(t({index:f}))break;u.startIndex=f}return s})({isRowLoaded:o,minimumBatchSize:h,rowCount:c,startIndex:Math.max(0,i-u),stopIndex:Math.min(c-1,n+u)}).forEach((function(e){var r=s(e);r&&r.then((function(){(function(e){var t=e.lastRenderedStartIndex,i=e.lastRenderedStopIndex,n=e.startIndex,r=e.stopIndex;return!(n>i||r<t)})({lastRenderedStartIndex:i,lastRenderedStopIndex:n,startIndex:e.startIndex,stopIndex:e.stopIndex})&&t.render()}))}))}}(w);let C=class RefSelectorElement extends HTMLElement{constructor(){super(...arguments),this.input="",this.currentSelectionIndex=null}connectedCallback(){this.refType="branch"===this.getRequiredAttr("type")?u.Branch:u.Tag;const e=this.getAttribute("current-committish");this.currentCommittish=e?atob(e):null,this.defaultBranch=atob(this.getRequiredAttr("default-branch")),this.nameWithOwner=atob(this.getRequiredAttr("name-with-owner")),this.currentUserCanPush=this.hasAttribute("current-user-can-push"),this.prefetchOnMouseover=this.hasAttribute("prefetch-on-mouseover");const t=this.getRequiredAttr("query-endpoint"),i=this.getRequiredAttr("cache-key");this.index=new SearchIndex(this.refType,this,t,i,this.nameWithOwner),this.setupFetchListeners()}inputEntered(e){this.input=e.detail,this.render()}tabSelected(){this.index.fetchData()}renderTemplate(e,t){return new r(e,t,o)}renderRow(e){const t=this.index.currentSearchResult[e];if(!t&&e>=this.listLength)return document.createElement("span");if(this.index.fetchFailed)return this.renderTemplate(this.fetchFailedTemplate,{index:e,refName:this.input});if(!t)return this.renderTemplate(this.noMatchTemplate,{index:e,refName:this.input});const i=this.input.length>0,n=i?"is-filtering":"",r=this.renderTemplate(this.itemTemplate,{refName:t,index:e,isFilteringClass:n,urlEncodedRefName:this.urlEncodeRef(t),isCurrent:t===this.currentCommittish,isNotDefault:t!==this.defaultBranch});if(i){const e=r.querySelector("span");e.textContent="";const i=t.split(this.input),n=i.length-1;for(let t=0;t<i.length;t++){const r=i[t];if(e.appendChild(document.createTextNode(r)),t<n){const t=document.createElement("b");t.textContent=this.input,e.appendChild(t)}}}return r}urlEncodeRef(e){return encodeURIComponent(e).replace("%2F","/").replace("%3A",":").replace("%2B","+")}render(){if(this.currentSelectionIndex=null,!this.index.isLoading){if(!this.virtualizedList)return this.index.search(this.input),void this.setupVirtualizedList();this.listContainer.scrollTop=0,this.index.search(this.input),this.virtualizedList.setRowCount(this.listLength)}}get listLength(){const e=this.index.currentSearchResult.length;return this.showCreateForm?e+1:e||1}get showCreateForm(){return!this.index.fetchFailed&&!this.index.exactMatchFound&&""!==this.input&&this.refType===u.Branch&&this.currentUserCanPush}getRequiredAttr(e,t=this){const i=t.getAttribute(e);if(!i)throw new Error(`Missing attribute for ${t}: ${e}`);return i}setupFetchListeners(){const e=this.closest("details");let t=!1;const i=()=>{t||(this.index.fetchData(),t=!0)};if(!e||e.open)return void i();this.prefetchOnMouseover&&e.addEventListener("mouseover",i,{once:!0}),this.addEventListener("keydown",this.keydown);const n=e.querySelector("input[data-ref-filter]");n&&(n.addEventListener("input",(()=>{this.input=n.value,this.render()})),n.addEventListener("keydown",(e=>{"ArrowDown"!==e.key&&"Tab"!==e.key||(e.preventDefault(),e.stopPropagation(),this.focusFirstListMember())})))}focusFirstListMember(){this.virtualizedList&&(this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex))}keydown(e){if(null!==this.currentSelectionIndex)if("Enter"!==e.key){if(("Tab"!==e.key||!e.shiftKey)&&"Escape"!==e.key)switch(e.preventDefault(),e.stopPropagation(),e.key){case"ArrowUp":this.currentSelectionIndex--,this.currentSelectionIndex<0&&(this.currentSelectionIndex=this.listLength-1),this.focusItemAtIndex(this.currentSelectionIndex);break;case"Home":this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex);break;case"End":this.currentSelectionIndex=this.listLength-1,this.focusItemAtIndex(this.currentSelectionIndex);break;case"Tab":case"ArrowDown":this.currentSelectionIndex++,this.currentSelectionIndex>this.listLength-1&&(this.currentSelectionIndex=0),this.focusItemAtIndex(this.currentSelectionIndex)}}else{const e=document.activeElement;if(!e)return;e.click()}}focusItemAtIndex(e){this.virtualizedList.scrollToIndex(e,"center"),setTimeout((()=>{const t=this.listContainer.querySelector(`[data-index="${e}"]`);t&&t.focus()}),20)}setupVirtualizedList(){this.listContainer.innerHTML="",this.virtualizedList=new w(this.listContainer,{height:330,rowCount:this.listLength,renderRow:this.renderRow.bind(this),rowHeight:e=>this.showCreateForm&&e===this.listLength-1?51:33,initialIndex:0,overscanCount:6})}};e([t],C.prototype,"listContainer",void 0),e([t],C.prototype,"itemTemplate",void 0),e([t],C.prototype,"noMatchTemplate",void 0),e([t],C.prototype,"fetchFailedTemplate",void 0),C=e([n],C)}}}));
//# sourceMappingURL=chunk-ref-selector-e26ef90d.js.map
