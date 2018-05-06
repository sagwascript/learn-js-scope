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
        /** innerFunction closure start here. **/
        var innerValue = "samurai";
        function innerFunction() {
            assert(outerValue, "I can see the ninja.");
            assert(innerValue, "I can see the samurai");
        }
        later = innerFunction;
        /** innerFunction closure ended here. **/
    }

    outerFunction();
    later(); // so the innerValue variable still exist though innerFunction called on outer scope.

};
