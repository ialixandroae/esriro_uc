define(["esri/Map","esri/views/MapView"],function(e,n){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=t(3);new(function(){function e(e,n){void 0===n&&(n="hybrid"),this.container=e,this.basemap=n}return e.prototype.createMap=function(){var e=new r({basemap:this.basemap});new o({map:e,container:this.container,center:[25,46],zoom:7})},e}())("viewDiv").createMap()},function(n,t){n.exports=e},function(e,t){e.exports=n}])});