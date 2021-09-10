// Notice that in babel's NPX the comma after text2 is removed
// in compiled
function testingES8(text1, text2,) {
    alert(`${text1}\n${text2}`)
};

let promise = Promise.resolve();