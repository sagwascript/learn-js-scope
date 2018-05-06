function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

/** Listing 5.4 page 117 **/

window.onload = function () {

    function Ninja() { // make a function constructor
        var feints = 0;

        this.getFeint = function () {
            return feints; // this method can access feints variable because feints is in this closure
        };

        this.feint = function () {
            feints++; // this method also can modify the feints variable because feints is in this closure
        };
    }

    var ninja = new Ninja(); // instantiate ninja object using function constructor
    ninja.feint(); // call feint method to modify the feints variable

    assert(ninja.getFeint() === 1, "We're able to access the internal feint count.");
    // ^ it can gives us the value of feints using 'getter' method
    assert(ninja.feints === undefined, "And there is no way to access feints variable from outside.");
    // ^ it can't access the feints variable inside of Ninja constructor because there is no way to access it except using 'getter' method
};
