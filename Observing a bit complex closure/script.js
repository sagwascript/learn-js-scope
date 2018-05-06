function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

window.onload = function () {

    var outerValue = "ninja",
        later;

    function outerFunction() {
        var innerValue = "samurai";

        function innerFunction(param) {
            assert(outerValue, "I can see the ninja.");
            assert(innerValue, "I can see the samurai.");
            assert(param, "I can see the wakizashi.");
            assert(tooLate, "Inner can see the ronin.");
        }

        later = innerFunction;
    }

    assert(!tooLate, "Outer can't see the ronin.");

    var tooLate = "ronin";

    outerFunction();
    later("wakizashi");

};
