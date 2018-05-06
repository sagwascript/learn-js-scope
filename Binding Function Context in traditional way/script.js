function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

window.onload = function () {

    Function.prototype.bind = function () {
        var fn = this,
            args = Array.prototype.slice.call(arguments),
            object = args.shift();

        return function () {
            return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        }
    };

    var myObject = {};
    function myFunction() {
        return this == myObject;
    }

    assert(!myFunction(), "Context is not set yet.");

    var aFunction = myFunction.bind(myObject);
    assert(aFunction, "Context is set properly.");

};
