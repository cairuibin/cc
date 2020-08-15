let { temFn, reducerTem, actionTem } = require('./template');
let storeSrc = 'src/store/OBS';
let childp=require('child_process')
var chokidar = require('chokidar'),
    fold = './src/page',
    fs = require('fs'),
    p = require('path');
watcher = chokidar.watch(fold, {
    ignored: /[\/\\]\./, persistent: true
});
let startTime = new Date().getTime();
let log = console.log.bind(console);


log(`
　 へ　　　　　／|          
　　/＼7　　∠＿/                                                                         
　 /　│　　 ／　／
　│　Z ＿,＜　／　　 /·ヽ           
　│　　　　　ヽ　　 /　　〉             
　 Y　　　　　·　 /　　/
　ｲ⭐　､　⭐　　⊂⊃〈　　/             
　()　 へ　　　　|　＼〈
　　>ｰ ､_　 ィ　 │ ／／             
　 / へ　　 /　ﾉ＜| ＼＼
　 ヽ_ﾉ　　(_／　 │／／             
　　7　　　　　　　|／
　　＞―r￣￣·ｰ―＿_ |                               
`)


// 文件添加，改变，删除 的时候执行操作
watcher.on('addDir', function (path) {
    let currentTime = new Date().getTime();
    if (currentTime > startTime + 200) {
        log('Directory', path, '文件夹内添加');
        let name = path.split('page')[1].slice(1)
        let newname = name[0].toUpperCase() + name.slice(1)

        fs.writeFileSync(p.join(__dirname, path, 'index.js'), temFn(newname))
        fs.writeFileSync(p.join(__dirname, path, 'index.scss'), '');
        // //_____________________________________________________________________
        if (!fs.existsSync(p.join(__dirname, storeSrc, name))) {
            fs.mkdirSync(p.join(__dirname, storeSrc, name));
            fs.writeFileSync(p.join(__dirname, storeSrc, name, 'action.js'), "import { AAA } from './action_type'");
            fs.writeFileSync(p.join(__dirname, storeSrc, name, 'action_type.js'), "export const AAA = 'AAA'");
            fs.writeFileSync(p.join(__dirname, storeSrc, name, 'index.js'), reducerTem(newname));
            fs.writeFileSync(p.join(__dirname, storeSrc, name, 'reducers.js'), actionTem());
        } else {
            console.log('\x1b[31m', '🐖🐖🐖🐖🐖🐖store已有文件夹🐖🐖🐖🐖🐖');
        }
    }
})
    .on('unlinkDir', function (path) {
        let name = path.split('page')[1].slice(1)
        log(name, path, '文件夹被移除');
        deleteall(p.join(__dirname, storeSrc, name));
        childp.spawn('node',['node_modules/react-app-rewired/scripts/start.js'])
    })
    .on('error', function (error) {
        log('发生错误', error);
    })
// .on('unlink', function (path) {
//     log(p.join(__dirname,path), path, '文件被移除');
// })


function deleteall(path) {
    console.log(path)
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteall(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
