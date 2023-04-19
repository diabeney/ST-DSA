const map = new Map();
const weakmaa = new WeakMap();
const obj = {
    name: 'Thanos',
    origin: 'Titan'
}
map.set('admin', {user: 'diabene', age: 34});
weakmaa.set(obj, {villain: true, threatLevel: 300}); //works like Map but uses objects as keys

// console.log(weakmaa.get(obj));


