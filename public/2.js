(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'deleteModal',
  data: function data() {
    return {
      isDeleing: false
    };
  },
  methods: {
    deleteTag: function deleteTag() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isDeleing = true;
                _context.next = 3;
                return _services_api__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_this.getDeleteModalObj.deleteUrl, _this.getDeleteModalObj.id);

              case 3:
                res = _context.sent;

                if (res.status === 200) {
                  _this.s(_this.getDeleteModalObj.successMsg);

                  _this.$store.commit('setDeleteModal', true);
                } else {
                  _this.swr();

                  _this.$store.commit('setDeleteModal', false);
                }

                _this.isDeleing = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    closeModal: function closeModal() {
      this.$store.commit('setDeleteModal', false);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['getDeleteModalObj']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Tag.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Tag.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_deleteModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/deleteModal */ "./resources/js/admin/components/deleteModal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({
        name: 'login'
      });
      return false;
    }

    this.fetchData();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["tags", "getDeleteModalObj"])),
  components: {
    deleteModal: _components_deleteModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tagName: "",
      id: -1,
      index: -1,
      tag_edit: false,
      modal_tag: false
    };
  },
  watch: {
    getDeleteModalObj: function getDeleteModalObj(obj) {
      if (obj.isDeleted) {
        this.$store.commit('DELETE_TAG', obj.deletingIndex);
      }
    }
  },
  methods: {
    fetchData: function fetchData() {
      this.$store.dispatch("fetch");
    },
    addTag: function addTag() {
      var _this = this;

      this.$store.dispatch("addTag", {
        name: this.tagName
      }).then(function (res) {
        _this.modal_tag = false;
        _this.tagName = "";

        _this.s("Tag has been added successfully");
      })["catch"](function (err) {
        _this.modal_tag = false;
        _this.tagName = "";

        _this.e("Tag has been added faild");
      });
    },
    updateTag: function updateTag(id) {
      var _this2 = this;

      this.$store.dispatch("updateTag", {
        name: this.tagName,
        index: this.index,
        id: this.id
      }).then(function (res) {
        _this2.tag_edit = false;

        _this2.s("Tag has been added successfully");
      })["catch"](function (err) {
        _this2.tag_edit = false;

        _this2.e("Tag has been added faild");
      });
    },
    showEditTag: function showEditTag(tag, index) {
      this.tagName = tag.name;
      this.id = tag.id;
      this.index = index;
      this.tag_edit = true;
    },
    // delete modal
    showDeletingModal: function showDeletingModal(tag, i) {
      var deleteModalObj = {
        showDeleteModal: true,
        deleteUrl: 'tag/delete',
        id: tag.id,
        deletingIndex: i,
        isDeleted: false,
        msg: 'Are you want to delete tag?'
      };
      this.$store.commit('setDeletingModalObj', deleteModalObj);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Modal",
        {
          attrs: {
            value: _vm.getDeleteModalObj.showDeleteModal,
            "mask-closable": false,
            closable: false,
            width: "360"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "ios-information-circle" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete confirmation!")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v(_vm._s(_vm.getDeleteModalObj.msg))])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "default", size: "large" },
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    loading: _vm.isDeleing,
                    disabled: _vm.isDeleing
                  },
                  on: { click: _vm.deleteTag }
                },
                [_vm._v("Delete")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fuild" }, [
      _c(
        "div",
        {
          staticClass:
            "_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
        },
        [
          _c(
            "p",
            { staticClass: "_title0" },
            [
              _vm._v("\n                Tags\n                "),
              _c(
                "Button",
                {
                  attrs: { type: "primary", ghost: "" },
                  on: {
                    click: function($event) {
                      _vm.modal_tag = true
                    }
                  }
                },
                [_c("Icon", { attrs: { type: "md-add" } }), _vm._v("Add tag")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "_overflow _table_div" }, [
            _c(
              "table",
              { staticClass: "_table" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.tags, function(tag, index) {
                  return _c("tr", { key: tag.id }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "_table_name" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(tag.name) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm._f("validateDateTime")(
                              tag.created_at,
                              tag.created_at
                            )
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "_btn _action_btn edit_btn1",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showEditTag(tag, index)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Edit\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "_btn _action_btn make_btn1",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showDeletingModal(tag, index)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Delete\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: { title: "Tag" },
              model: {
                value: _vm.modal_tag,
                callback: function($$v) {
                  _vm.modal_tag = $$v
                },
                expression: "modal_tag"
              }
            },
            [
              _c("Input", {
                attrs: { placeholder: "Add tag..." },
                on: { "on-enter": _vm.addTag },
                model: {
                  value: _vm.tagName,
                  callback: function($$v) {
                    _vm.tagName = $$v
                  },
                  expression: "tagName"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "footer" }, slot: "footer" },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: {
                        click: function($event) {
                          _vm.modal_tag = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Close\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    { attrs: { type: "primary" }, on: { click: _vm.addTag } },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: { title: "Tag" },
              model: {
                value: _vm.tag_edit,
                callback: function($$v) {
                  _vm.tag_edit = $$v
                },
                expression: "tag_edit"
              }
            },
            [
              _c("Input", {
                attrs: { placeholder: "Edit tag..." },
                on: {
                  "on-enter": function($event) {
                    return _vm.updateTag(_vm.id)
                  }
                },
                model: {
                  value: _vm.tagName,
                  callback: function($$v) {
                    _vm.tagName = $$v
                  },
                  expression: "tagName"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "footer" }, slot: "footer" },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: {
                        click: function($event) {
                          _vm.tag_edit = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Close\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.updateTag(_vm.id)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("deleteModal")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("Tag name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/deleteModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/admin/components/deleteModal.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteModal.vue?vue&type=template&id=468a3c07& */ "./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07&");
/* harmony import */ var _deleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteModal.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/deleteModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/deleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteModal.vue?vue&type=template&id=468a3c07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/deleteModal.vue?vue&type=template&id=468a3c07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteModal_vue_vue_type_template_id_468a3c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/Tag.vue":
/*!******************************************!*\
  !*** ./resources/js/admin/views/Tag.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=89ba9dea& */ "./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Tag.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/views/Tag.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=template&id=89ba9dea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Tag.vue?vue&type=template&id=89ba9dea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_89ba9dea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);