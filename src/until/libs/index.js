let moduleFile = require.context('/', true, /\.js$/);

let res = moduleFile.keys().filter(v => v != './index').reduce((prev, item) => {
    let son = moduleFile(item).default;
    prev = Object.assign({}, prev, son);
    return prev
}, {});


module.exports = res;
