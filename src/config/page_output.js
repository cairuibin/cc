import LoadableComponent from '../until/LoadableComponent';

let moduleFile = require.context('../page', true, /\index.js$/);
let res = moduleFile.keys().reduce((prev, item) => {
    let son = moduleFile(item).default;
    let name = item.split('/')[1][0].toLocaleUpperCase() + item.split('/')[1].slice(1);
    prev = Object.assign({}, prev, { [name]: LoadableComponent(son) })
    return prev
}, {});
console.log(res)