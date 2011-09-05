(function() {
  var nodes, stylus, utils, vendor, vendorProperties;
  stylus = require("stylus");
  nodes = stylus.nodes;
  utils = stylus.utils;
  vendorProperties = {
    "user-select": {
      prefixes: "ms o webkit moz"
    }
  };
  vendor = function(prop, val) {
    var prefix, _i, _len, _ref, _results;
    _ref = vendor_properties[prop].prefixes;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      prefix = _ref[_i];
      _results.push(console.log(prefix));
    }
    return _results;
  };
}).call(this);
