"use strict";

// Graças ao core-js, importa o que é necessário.
require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// Notice that in babel's NPX the comma after text2 is removed
// in compiled
function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
}

;
var promise = Promise.resolve();