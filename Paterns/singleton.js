//  singleton

const Singleton = (function () {
    let instanse;

    function createInstanse() {
        const object = new Object({ name: "Pete" });
        return object;
    }

    return {
        getInstanse: function () {
            if (!instanse) {
                instanse = createInstanse();
            }
            return instanse;
        },
    };
})();

const instanseUser1 = Singleton.getInstanse();
const instanseUser2 = Singleton.getInstanse();

console.log(instanseUser1)
console.log(instanseUser2)
