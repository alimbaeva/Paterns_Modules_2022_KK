// Module
// IIFE - когда функция выполняется сразу
// приватные и глобальные переменные

const UICtr = (function () {
    let text = "hello";

    const changeText = function () {                    // приватная часть
        const element = document.querySelector("h1");
        element.textContent = text
    };

    return {
        callChangeText: function () {       //публичная часть
            changeText();
            console.log(text)
        }
    }
})();

UICtr.callChangeText()