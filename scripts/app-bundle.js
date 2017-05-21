define('app',['exports', 'kendo/js/kendo.datepicker'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-kendoui-bridge');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"aurelia-kendoui-bridge/datepicker/datepicker\"></require><div id=\"example\"><div class=\"demo-section k-content\"><h4>Show e-mails from:</h4><input id=\"datepicker\" ak-datepicker=\"k-value.bind:'10/10/2011'\" style=\"width:100%\"><h4 style=\"margin-top:2em\">Add to archive mail from:</h4><input id=\"monthpicker\" ak-datepicker=\"k-value.bind:'November 2011'; k-start.bind:'year'; k-depth.bind: 'year';k-format.bind:'MMMM yyyy';\" style=\"width:100%\"><p></p></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map