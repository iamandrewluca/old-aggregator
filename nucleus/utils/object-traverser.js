function traverse(target, _path){
    var path = _path.slice(0);
    var maybeRes = target[path.shift()];
    if('undefined' != typeof maybeRes){
        return 'object' == typeof maybeRes ? traverse(maybeRes, path) : maybeRes;
    }
}

function deleteProp(target, _path){
    var path = _path.slice(0);
    var key = path.shift();
    if(path.length && ('undefined' != typeof target[key])){
        deleteProp(target[key], path);
    } else {
        delete target[key];
    }
}

function createDelta(_path, value){
    var path = _path.slice(0);
    var key = path.shift();
    var res = {};
    res[key] = path.length ? createDelta(path, value) : value;
    return res;
}

module.exports = {
    traverse: traverse,
    deleteProp: deleteProp,
    createDelta: createDelta
};