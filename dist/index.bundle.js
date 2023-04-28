"use strict";
(self["webpackChunkspace_project"] = self["webpackChunkspace_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #00081d;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 30px 50px;\r\n  justify-content: center;\r\n  background-color: rgba(239, 20, 20, 0.4);\r\n}\r\n\r\nheader span {\r\n  border: 2px solid rgb(240, 6, 6);\r\n  border-radius: 5%;\r\n  padding: 5px 5px;\r\n}\r\n\r\nheader span a {\r\n  text-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\nheader h3 {\r\n  font-weight: 300;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 10px 0;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 40px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  transition: 0.4s;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n  color: rgb(66, 244, 17);\r\n}\r\n\r\nheader nav ul li:first-child a {\r\n  text-decoration: underline;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  padding: 20px 20px;\r\n  color: #fff;\r\n  background-color: rgba(239, 11, 11, 0.4);\r\n  text-align: center;\r\n}\r\n\r\n.cards-container {\r\n  padding: 50px 80px;\r\n  width: 84%;\r\n  display: flex;\r\n  margin: auto;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 15vw;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  background-color: #26073c;\r\n  border-radius: 3px;\r\n}\r\n\r\n.card button {\r\n  background-color: red;\r\n  border-radius: 2px;\r\n  margin: 3px;\r\n  font-size: 16px;\r\n  padding: 3px 0;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: rgb(40, 40, 103);\r\n  color: #c9cbf2;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  padding: 8px 0;\r\n}\r\n\r\n.add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.Likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.blur {\r\n  filter: blur(10px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 30px;\r\n  color: red;\r\n  transition: 0.3s;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.add {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.Last-like {\r\n  color: red;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 50%;\r\n  transition: 0.5s ease-in-out;\r\n  width: 800px;\r\n  border: 2px solid brown;\r\n  height: 80%;\r\n  top: 5%;\r\n  transform: translate(-50%, 5%);\r\n  background: rgba(44, 3, 117, 0.6);\r\n  overflow: auto;\r\n  color: #fff;\r\n}\r\n\r\n.image {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.image img {\r\n  padding-top: 10px;\r\n  width: 40%;\r\n  height: 50vh;\r\n  position: relative;\r\n  left: 10px;\r\n}\r\n\r\n.cross-btn {\r\n  display: flex;\r\n  position: relative;\r\n  left: 182px;\r\n  top: 20px;\r\n  font-size: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.ratingbox {\r\n  position: relative;\r\n  top: 20px;\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox {\r\n  position: relative;\r\n  top: 40px;\r\n  width: 96%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox:last-child {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 700px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 88px;\r\n}\r\n\r\n.show-comments h3 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 30px;\r\n}\r\n\r\n.show-comments p {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 119px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\n\r\nform h4 {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n  font-size: 30px;\r\n}\r\n\r\nform input {\r\n  padding: 10px;\r\n  margin: 20px 5px 5px 5px;\r\n  width: 285px;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  resize: none;\r\n  width: 420px;\r\n}\r\n\r\n.popup-btn {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  width: 107px;\r\n  margin-left: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #00081d;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 30px 50px;\r\n  justify-content: center;\r\n  background-color: rgba(239, 20, 20, 0.4);\r\n}\r\n\r\nheader span {\r\n  border: 2px solid rgb(240, 6, 6);\r\n  border-radius: 5%;\r\n  padding: 5px 5px;\r\n}\r\n\r\nheader span a {\r\n  text-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\nheader h3 {\r\n  font-weight: 300;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 10px 0;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 40px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  transition: 0.4s;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n  color: rgb(66, 244, 17);\r\n}\r\n\r\nheader nav ul li:first-child a {\r\n  text-decoration: underline;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  padding: 20px 20px;\r\n  color: #fff;\r\n  background-color: rgba(239, 11, 11, 0.4);\r\n  text-align: center;\r\n}\r\n\r\n.cards-container {\r\n  padding: 50px 80px;\r\n  width: 84%;\r\n  display: flex;\r\n  margin: auto;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 15vw;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  background-color: #26073c;\r\n  border-radius: 3px;\r\n}\r\n\r\n.card button {\r\n  background-color: red;\r\n  border-radius: 2px;\r\n  margin: 3px;\r\n  font-size: 16px;\r\n  padding: 3px 0;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: rgb(40, 40, 103);\r\n  color: #c9cbf2;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  padding: 8px 0;\r\n}\r\n\r\n.add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.Likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.blur {\r\n  filter: blur(10px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 30px;\r\n  color: red;\r\n  transition: 0.3s;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.add {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.Last-like {\r\n  color: red;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 50%;\r\n  transition: 0.5s ease-in-out;\r\n  width: 800px;\r\n  border: 2px solid brown;\r\n  height: 80%;\r\n  top: 5%;\r\n  transform: translate(-50%, 5%);\r\n  background: rgba(44, 3, 117, 0.6);\r\n  overflow: auto;\r\n  color: #fff;\r\n}\r\n\r\n.image {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.image img {\r\n  padding-top: 10px;\r\n  width: 40%;\r\n  height: 50vh;\r\n  position: relative;\r\n  left: 10px;\r\n}\r\n\r\n.cross-btn {\r\n  display: flex;\r\n  position: relative;\r\n  left: 182px;\r\n  top: 20px;\r\n  font-size: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.ratingbox {\r\n  position: relative;\r\n  top: 20px;\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox {\r\n  position: relative;\r\n  top: 40px;\r\n  width: 96%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox:last-child {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 700px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 88px;\r\n}\r\n\r\n.show-comments h3 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 30px;\r\n}\r\n\r\n.show-comments p {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 119px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\n\r\nform h4 {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n  font-size: 30px;\r\n}\r\n\r\nform input {\r\n  padding: 10px;\r\n  margin: 20px 5px 5px 5px;\r\n  width: 285px;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  resize: none;\r\n  width: 420px;\r\n}\r\n\r\n.popup-btn {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  width: 107px;\r\n  margin-left: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");



(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.addEventListener('DOMContentLoaded', _modules_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/modules/commentform.js":
/*!************************************!*\
  !*** ./src/modules/commentform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentform = () => (`<h4>Add a comment</h4>
    <input type="text" placeholder="Your name" required>
    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your Insights" required></textarea>
    <button class="popup-btn">Comment</button>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentform);

/***/ }),

/***/ "./src/modules/commentscounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentscounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentcounter = () => {
  const showdivcontainer = document.querySelector('.show-comments');
  const showdivAllPtags = document.querySelectorAll('.show-comments p');
  const ptag = document.querySelector('.show-comments p');
  const h3 = document.createElement('h3');
  h3.innerText = `Comments (${showdivAllPtags.length})`;
  showdivcontainer.insertBefore(h3, ptag);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentcounter);

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaypopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaypopup.js */ "./src/modules/displaypopup.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _likeCounts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeCounts.js */ "./src/modules/likeCounts.js");




async function retrevingdata() {
  const results = [];
  for (let i = 1; i < 9; i += 1) {
    results.push(fetch(`https://api.tvmaze.com/shows/${i}`).then((res) => res.json()));
  }
  const dt = Promise.all(results);
  return dt;
}

const cardscounter = () => {
  const cardlen = document.querySelector('#cardlen');
  const cards = document.querySelectorAll('.cards .card');
  cardlen.innerHTML = `Show(${cards.length})`;
};

const display = async () => {
  const datas = await retrevingdata();
  const container = document.querySelector('.cards');
  datas.forEach((cur) => {
    container.innerHTML += `
  <div id=${cur.id} class="card">
  <img src="${cur.image.medium}" alt="">
  <div class="add-container">
  <div class="likes"><h4>${cur.name}</h4></div>
  <div class="Likes-container">
  <div class="Like-icon">
      <span><i class="fa-regular fa-heart like-btn" data-id="${cur.id}"></i></span>
  </div>
  <div class="Likes-Span">
      <span data-item-id="${cur.id}" class="add"></span>
      <span class="Last-like">Likes</span>
  </div>
  </div>
  <button class="comment-btn">Comments</button>
</div>
  `;
    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const likeBtn = document.querySelectorAll('.like-btn');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const val = Number(e.target.dataset.id);
        (0,_likeCounts_js__WEBPACK_IMPORTED_MODULE_2__["default"])(val);
      });
    });
  });
  cardscounter();
  (0,_displaypopup_js__WEBPACK_IMPORTED_MODULE_0__.popup)();
};

display();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrevingdata);

/***/ }),

/***/ "./src/modules/displaypopup.js":
/*!*************************************!*\
  !*** ./src/modules/displaypopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displaypopup": () => (/* binding */ displaypopup),
/* harmony export */   "popup": () => (/* binding */ popup)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");
/* harmony import */ var _commentform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentform.js */ "./src/modules/commentform.js");
/* harmony import */ var _showcomments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcomments.js */ "./src/modules/showcomments.js");




const body = document.querySelector('body');
const header = document.querySelector('header');
const cardscontainer = document.querySelector('.cards-container');
const footer = document.querySelector('footer');
const addclasses = () => {
  header.classList.add('blur');
  cardscontainer.classList.add('blur');
  footer.classList.add('blur');
  body.style.overflow = 'hidden';
};

const removeclasses = () => {
  const crossbtn = document.querySelector('.cross-btn');
  crossbtn.addEventListener('click', () => {
    header.classList.remove('blur');
    cardscontainer.classList.remove('blur');
    footer.classList.remove('blur');
    body.lastElementChild.remove();
    body.style.overflow = 'auto';
  });
};
const displaypopup = async (index, index2) => {
  const array = await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const newarr = array[index];
  const div = document.createElement('div');
  div.className = 'popup-container';
  div.innerHTML = `
        <div class="image">
            <img src="${newarr.image.original}" alt="cardimg">
            <span class="cross-btn"><i class="fa-solid fa-x"></i></span>
        </div>
        <div class="heading">
            <h1>${newarr.name}</h1>
        </div>
        <div class="ratingbox">
            <h3>Rating: ${newarr.rating.average}</h3>
            <h3>Language: ${newarr.language}</h3>
        </div>
        <div class="genresbox">
            <h3>Genres: ${newarr.genres[0]},${newarr.genres[1]},${newarr.genres[2]}</h3>
            <h3>Premiered: ${newarr.premiered}</h3>
        </div>
        <form action="" id="forms" method="submit">
        <div class="show-comments">
        </div>
        <form action="#" method="">
            ${(0,_commentform_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}
        </form>
        
    `;
  body.appendChild(div);
  (0,_showcomments_js__WEBPACK_IMPORTED_MODULE_2__.getformvalue)(index2);
  (0,_showcomments_js__WEBPACK_IMPORTED_MODULE_2__.showcomments)(index2);
  removeclasses();
};
const popup = () => {
  const commentbtn = document.querySelectorAll('.comment-btn');
  commentbtn.forEach((cmtbtn) => {
    cmtbtn.addEventListener('click', (btn) => {
      addclasses();
      const btnCall1 = btn.target.parentElement.parentElement.id - 1;
      const btnCall2 = btn.target.parentElement.parentElement.id;
      displaypopup(btnCall1, btnCall2);
    });
  });
};




/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes')
    .then((res) => res.json())
    .then((data) => {
      const show = document.querySelectorAll('.add');
      show.forEach((cur) => {
        const id = Number(cur.getAttribute('data-item-id'));
        const matchingObject = data.find((obj) => obj.item_id === id);
        if (matchingObject) {
          cur.innerHTML = matchingObject.likes;
        } else {
          cur.innerHTML = '0';
        }
      });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/modules/likeCounts.js":
/*!***********************************!*\
  !*** ./src/modules/likeCounts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");


async function LikesAdd(id) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikesAdd);

/***/ }),

/***/ "./src/modules/showcomments.js":
/*!*************************************!*\
  !*** ./src/modules/showcomments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getformvalue": () => (/* binding */ getformvalue),
/* harmony export */   "showcomments": () => (/* binding */ showcomments),
/* harmony export */   "updatecomments": () => (/* binding */ updatecomments)
/* harmony export */ });
/* harmony import */ var _commentscounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentscounter.js */ "./src/modules/commentscounter.js");
/* harmony import */ var _displaypopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaypopup.js */ "./src/modules/displaypopup.js");



const updatecomments = () => {
  const popupcontainer = document.querySelector('.popup-container');
  popupcontainer.remove();
};

const showcomments = async (index2) => {
  const popupcontainer = document.querySelector('.popup-container');
  const form = document.querySelector('form');
  const showdiv = document.createElement('div');
  showdiv.className = 'show-comments';
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  const commentData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments?item_id=${index2}`, {
    method: 'GET',
  });
  const data = await commentData.json();

  if (!commentData.ok) {
    h3.innerText = 'Comments (0)';
    showdiv.appendChild(h3);
    p.innerText = 'No comments available for now';
    h3.after(p);
    popupcontainer.insertBefore(showdiv, form);
    throw new Error(`No comments are present in ID: ${index2}`);
  }

  data.forEach((item) => {
    showdiv.innerHTML += `
    <p>${item.creation_date} ${item.username}: ${item.comment}</p> `;
  });

  popupcontainer.insertBefore(showdiv, form);
  (0,_commentscounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

const getformvalue = async (index) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputvalue = document.querySelector('input').value;
    const textareavalue = document.querySelector('textarea').value;
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
        username: inputvalue,
        comment: textareavalue,
      }),
      headers: {
        'Content-Type': 'application/json; charset=Utf-8',
      },
    }).then((response) => {
      response.json();
    }).then(() => {
      updatecomments();
      (0,_displaypopup_js__WEBPACK_IMPORTED_MODULE_1__.displaypopup)(index - 1, index);
    });
    form.reset();
  });
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNoQmM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSx3REFBUTtBQUNWOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQjtBQUNEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtSkFBbUosT0FBTztBQUMxSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsT0FBTztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0IsRUFBRSxjQUFjLElBQUksYUFBYTtBQUM5RCxHQUFHOztBQUVIO0FBQ0EsRUFBRSwrREFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTSw4REFBWTtBQUNsQixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY29tbWVudGZvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzY291bnRlci5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheXBvcHVwLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nZXRMaWtlcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbGlrZUNvdW50cy5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hvd2NvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjAsIDIwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgc3BhbiB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQwLCA2LCA2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgcGFkZGluZzogNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNwYW4gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNjYsIDI0NCwgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmZpcnN0LWNoaWxkIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDExLCAxMSwgMC40KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxyXFxuICB3aWR0aDogODQlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MDczYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogM3B4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCAxMDMpO1xcclxcbiAgY29sb3I6ICNjOWNiZjI7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogOHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5MaWtlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uTGFzdC1saWtlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg0NCwgMywgMTE3LCAwLjYpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UgaW1nIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcm9zcy1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDE4MnB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmdib3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZXNib3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA0MHB4O1xcclxcbiAgd2lkdGg6IDk2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlc2JveDpsYXN0LWNoaWxkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA4OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyBoMyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnRzIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDExOXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBoNCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMjBweCA1cHggNXB4IDVweDtcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aWR0aDogNDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLE9BQU87RUFDUCw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODFkO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyMCwgMjAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBzcGFuIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDAsIDYsIDYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgc3BhbiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMyB7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYig2NiwgMjQ0LCAxNyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6Zmlyc3QtY2hpbGQgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMTEsIDExLCAwLjQpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDUwcHggODBweDtcXHJcXG4gIHdpZHRoOiA4NCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxNXZ3O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYwNzNjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAzcHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDEwMyk7XFxyXFxuICBjb2xvcjogI2M5Y2JmMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkxpa2VzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5MYXN0LWxpa2Uge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgd2lkdGg6IDgwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYnJvd247XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ0LCAzLCAxMTcsIDAuNik7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSBpbWcge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMTgycHg7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZ2JveCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlc2JveCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDQwcHg7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmVzYm94Omxhc3QtY2hpbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNzAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDg4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnRzIGgzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTE5cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGg0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDVweCA1cHggNXB4O1xcclxcbiAgd2lkdGg6IDI4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA0MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDEwN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHJldHJldmluZ2RhdGEgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xuXG5yZXRyZXZpbmdkYXRhKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmV0cmV2aW5nZGF0YSk7XG4iLCJjb25zdCBjb21tZW50Zm9ybSA9ICgpID0+IChgPGg0PkFkZCBhIGNvbW1lbnQ8L2g0PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wdXAtYnRuXCI+Q29tbWVudDwvYnV0dG9uPmApO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Zm9ybTsiLCJjb25zdCBjb21tZW50Y291bnRlciA9ICgpID0+IHtcbiAgY29uc3Qgc2hvd2RpdmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWNvbW1lbnRzJyk7XG4gIGNvbnN0IHNob3dkaXZBbGxQdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWNvbW1lbnRzIHAnKTtcbiAgY29uc3QgcHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWNvbW1lbnRzIHAnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5pbm5lclRleHQgPSBgQ29tbWVudHMgKCR7c2hvd2RpdkFsbFB0YWdzLmxlbmd0aH0pYDtcbiAgc2hvd2RpdmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaDMsIHB0YWcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudGNvdW50ZXI7IiwiaW1wb3J0IHsgcG9wdXAgfSBmcm9tICcuL2Rpc3BsYXlwb3B1cC5qcyc7XG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9nZXRMaWtlcy5qcyc7XG5pbXBvcnQgTGlrZXNBZGQgZnJvbSAnLi9saWtlQ291bnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gcmV0cmV2aW5nZGF0YSgpIHtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDk7IGkgKz0gMSkge1xuICAgIHJlc3VsdHMucHVzaChmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2l9YCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKSk7XG4gIH1cbiAgY29uc3QgZHQgPSBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgcmV0dXJuIGR0O1xufVxuXG5jb25zdCBjYXJkc2NvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRsZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZGxlbicpO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkcyAuY2FyZCcpO1xuICBjYXJkbGVuLmlubmVySFRNTCA9IGBTaG93KCR7Y2FyZHMubGVuZ3RofSlgO1xufTtcblxuY29uc3QgZGlzcGxheSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YXMgPSBhd2FpdCByZXRyZXZpbmdkYXRhKCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuICBkYXRhcy5mb3JFYWNoKChjdXIpID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBpZD0ke2N1ci5pZH0gY2xhc3M9XCJjYXJkXCI+XG4gIDxpbWcgc3JjPVwiJHtjdXIuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlwiPlxuICA8ZGl2IGNsYXNzPVwiYWRkLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwibGlrZXNcIj48aDQ+JHtjdXIubmFtZX08L2g0PjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiTGlrZXMtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJMaWtlLWljb25cIj5cbiAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydCBsaWtlLWJ0blwiIGRhdGEtaWQ9XCIke2N1ci5pZH1cIj48L2k+PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIkxpa2VzLVNwYW5cIj5cbiAgICAgIDxzcGFuIGRhdGEtaXRlbS1pZD1cIiR7Y3VyLmlkfVwiIGNsYXNzPVwiYWRkXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJMYXN0LWxpa2VcIj5MaWtlczwvc3Bhbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxuPC9kaXY+XG4gIGA7XG4gICAgZ2V0TGlrZXMoKTtcbiAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XG4gICAgbGlrZUJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgTGlrZXNBZGQodmFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgY2FyZHNjb3VudGVyKCk7XG4gIHBvcHVwKCk7XG59O1xuXG5kaXNwbGF5KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJldHJldmluZ2RhdGE7IiwiaW1wb3J0IHJldHJldmluZ2RhdGEgZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCBjb21tZW50Zm9ybSBmcm9tICcuL2NvbW1lbnRmb3JtLmpzJztcbmltcG9ydCB7IHNob3djb21tZW50cywgZ2V0Zm9ybXZhbHVlIH0gZnJvbSAnLi9zaG93Y29tbWVudHMuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBjYXJkc2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuY29uc3QgYWRkY2xhc3NlcyA9ICgpID0+IHtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgY2FyZHNjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59O1xuXG5jb25zdCByZW1vdmVjbGFzc2VzID0gKCkgPT4ge1xuICBjb25zdCBjcm9zc2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcm9zcy1idG4nKTtcbiAgY3Jvc3NidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICBjYXJkc2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICBib2R5Lmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheXBvcHVwID0gYXN5bmMgKGluZGV4LCBpbmRleDIpID0+IHtcbiAgY29uc3QgYXJyYXkgPSBhd2FpdCByZXRyZXZpbmdkYXRhKCk7XG4gIGNvbnN0IG5ld2FyciA9IGFycmF5W2luZGV4XTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAncG9wdXAtY29udGFpbmVyJztcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bmV3YXJyLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cImNhcmRpbWdcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvc3MtYnRuXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14XCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDE+JHtuZXdhcnIubmFtZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ2JveFwiPlxuICAgICAgICAgICAgPGgzPlJhdGluZzogJHtuZXdhcnIucmF0aW5nLmF2ZXJhZ2V9PC9oMz5cbiAgICAgICAgICAgIDxoMz5MYW5ndWFnZTogJHtuZXdhcnIubGFuZ3VhZ2V9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZXNib3hcIj5cbiAgICAgICAgICAgIDxoMz5HZW5yZXM6ICR7bmV3YXJyLmdlbnJlc1swXX0sJHtuZXdhcnIuZ2VucmVzWzFdfSwke25ld2Fyci5nZW5yZXNbMl19PC9oMz5cbiAgICAgICAgICAgIDxoMz5QcmVtaWVyZWQ6ICR7bmV3YXJyLnByZW1pZXJlZH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgaWQ9XCJmb3Jtc1wiIG1ldGhvZD1cInN1Ym1pdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdy1jb21tZW50c1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cIlwiPlxuICAgICAgICAgICAgJHtjb21tZW50Zm9ybSgpfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuICAgIGA7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZ2V0Zm9ybXZhbHVlKGluZGV4Mik7XG4gIHNob3djb21tZW50cyhpbmRleDIpO1xuICByZW1vdmVjbGFzc2VzKCk7XG59O1xuY29uc3QgcG9wdXAgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudGJ0bi5mb3JFYWNoKChjbXRidG4pID0+IHtcbiAgICBjbXRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoYnRuKSA9PiB7XG4gICAgICBhZGRjbGFzc2VzKCk7XG4gICAgICBjb25zdCBidG5DYWxsMSA9IGJ0bi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkIC0gMTtcbiAgICAgIGNvbnN0IGJ0bkNhbGwyID0gYnRuLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICBkaXNwbGF5cG9wdXAoYnRuQ2FsbDEsIGJ0bkNhbGwyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBwb3B1cCwgZGlzcGxheXBvcHVwIH07XG4iLCJjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Z5NkRKODZ1MWVRaFI3akh6cEZnL2xpa2VzJylcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZCcpO1xuICAgICAgc2hvdy5mb3JFYWNoKChjdXIpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoY3VyLmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJykpO1xuICAgICAgICBjb25zdCBtYXRjaGluZ09iamVjdCA9IGRhdGEuZmluZCgob2JqKSA9PiBvYmouaXRlbV9pZCA9PT0gaWQpO1xuICAgICAgICBpZiAobWF0Y2hpbmdPYmplY3QpIHtcbiAgICAgICAgICBjdXIuaW5uZXJIVE1MID0gbWF0Y2hpbmdPYmplY3QubGlrZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TGlrZXM7IiwiaW1wb3J0IGdldExpa2VzIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBMaWtlc0FkZChpZCkge1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZnk2REo4NnUxZVFoUjdqSHpwRmcvbGlrZXMvJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgfSk7XG4gIGdldExpa2VzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VzQWRkOyIsImltcG9ydCBjb21tZW50Y291bnRlciBmcm9tICcuL2NvbW1lbnRzY291bnRlci5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5cG9wdXAgfSBmcm9tICcuL2Rpc3BsYXlwb3B1cC5qcyc7XG5cbmNvbnN0IHVwZGF0ZWNvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgcG9wdXBjb250YWluZXIucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBzaG93Y29tbWVudHMgPSBhc3luYyAoaW5kZXgyKSA9PiB7XG4gIGNvbnN0IHBvcHVwY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBzaG93ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3dkaXYuY2xhc3NOYW1lID0gJ3Nob3ctY29tbWVudHMnO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgY29tbWVudERhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvR3YzbjAxcE5ab2VaMFpFN25XU0QvY29tbWVudHM/aXRlbV9pZD0ke2luZGV4Mn1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50RGF0YS5qc29uKCk7XG5cbiAgaWYgKCFjb21tZW50RGF0YS5vaykge1xuICAgIGgzLmlubmVyVGV4dCA9ICdDb21tZW50cyAoMCknO1xuICAgIHNob3dkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIHAuaW5uZXJUZXh0ID0gJ05vIGNvbW1lbnRzIGF2YWlsYWJsZSBmb3Igbm93JztcbiAgICBoMy5hZnRlcihwKTtcbiAgICBwb3B1cGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc2hvd2RpdiwgZm9ybSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb21tZW50cyBhcmUgcHJlc2VudCBpbiBJRDogJHtpbmRleDJ9YCk7XG4gIH1cblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzaG93ZGl2LmlubmVySFRNTCArPSBgXG4gICAgPHA+JHtpdGVtLmNyZWF0aW9uX2RhdGV9ICR7aXRlbS51c2VybmFtZX06ICR7aXRlbS5jb21tZW50fTwvcD4gYDtcbiAgfSk7XG5cbiAgcG9wdXBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHNob3dkaXYsIGZvcm0pO1xuICBjb21tZW50Y291bnRlcigpO1xufTtcblxuY29uc3QgZ2V0Zm9ybXZhbHVlID0gYXN5bmMgKGluZGV4KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBpbnB1dHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0ZXh0YXJlYXZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZTtcbiAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvR3YzbjAxcE5ab2VaMFpFN25XU0QvY29tbWVudHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaW5kZXgsXG4gICAgICAgIHVzZXJuYW1lOiBpbnB1dHZhbHVlLFxuICAgICAgICBjb21tZW50OiB0ZXh0YXJlYXZhbHVlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VdGYtOCcsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB1cGRhdGVjb21tZW50cygpO1xuICAgICAgZGlzcGxheXBvcHVwKGluZGV4IC0gMSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzaG93Y29tbWVudHMsIGdldGZvcm12YWx1ZSwgdXBkYXRlY29tbWVudHMgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=