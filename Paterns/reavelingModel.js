//  открытый модуль revealind Modul Patern

const IterCtrl = (function () {
    let data = [];

    function add(item) {
        data.push(item);
        console.log("item added ...");
    }

    function get(id) {
        return data.find((item) => {
            return item.id === id
        })
    }

    return {
        add: add,
        get: get,
    }
})()

IterCtrl.add({ id: 1, name: "kate" });
IterCtrl.add({ id: 2, name: "petya" });
IterCtrl.add({ id: 3, name: "jone" });
console.log(IterCtrl.get(1))
console.log(IterCtrl.get(2))
console.log(IterCtrl.get(3))
