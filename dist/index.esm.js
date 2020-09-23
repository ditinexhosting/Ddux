import React, { Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Ddux = /*#__PURE__*/function () {
  function Ddux() {
    _classCallCheck(this, Ddux);

    this.updateState = null;
    this.dataStore = null;
    this.methodStore = null;
  }

  _createClass(Ddux, [{
    key: "init",
    value: function init(updateState) {
      this.updateState = updateState;
    }
  }, {
    key: "initDdux",
    value: function initDdux(data) {
      this.dataStore = data;
      this.methodStore = {};
    }
  }, {
    key: "update",
    value: function update(key, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (key in this.dataStore) {
        this.dataStore[key] = value;
        if (reRender) this.updateState();
      } else throw new Error('Data Doesn\'t exists. Please initialize first.');
    }
  }, {
    key: "get",
    value: function get(key) {
      if (key in this.dataStore) return this.dataStore[key];
      throw new Error('Data Doesn\'t exists. Please initialize first.');
    }
  }, {
    key: "setMethod",
    value: function setMethod(key, value) {
      if (key in this.methodStore) {
        throw new Error('Method key already exists. Please use another name.');
      } else this.methodStore[key] = value;
    }
  }, {
    key: "unsetMethod",
    value: function unsetMethod(key) {
      if (key in this.methodStore) {
        delete this.methodStore[key];
      } else throw new Error('Method doesn\'t exists.');
    }
  }, {
    key: "callMethod",
    value: function callMethod(key) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (key in this.methodStore) {
        if (data) this.methodStore[key](data);else this.methodStore[key]();
      } else throw new Error('Method Doesn\'t exists. Please initialize first.');
    }
  }]);

  return Ddux;
}();

var Ddux$1 = new Ddux();

var DduxHOC = function DduxHOC(WrappedComponent) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    _inherits(DduxHOC, _Component);

    var _super = _createSuper(DduxHOC);

    function DduxHOC(props) {
      var _this;

      _classCallCheck(this, DduxHOC);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "init", function () {
        _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
        Ddux$1.init(_this.updateState);
      });

      _defineProperty(_assertThisInitialized(_this), "updateState", function () {
        _this.setState({
          updating: 1
        });
      });

      _this.state = {
        updating: 0
      };

      _this.init();

      return _this;
    }

    _createClass(DduxHOC, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(WrappedComponent, null);
      }
    }]);

    return DduxHOC;
  }(Component), _temp;
};

export { Ddux$1 as Ddux, DduxHOC };
