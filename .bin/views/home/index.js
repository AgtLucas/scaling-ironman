var jade = require("jadum/runtime");
module.exports = function index(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/index.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("Hello Taunus!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p Hello Taunus!");
}
}