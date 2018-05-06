function assert(value, desc) {
    var li = document.getElementById("result"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

Function.prototype.curry = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments);

    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
};

Function.prototype.partial = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments); // arguments passed on partial method

    return function () {
        var arg = 0;

        for (var i = 0; i < args.length && arg < arguments.length; i++) {
            // here arguments.length refer to arguments.length of the new returned function that will invoke as currying function
            if (args[i] === undefined) {
                args[i] = arguments[arg++];
                // console.log(args[i]);
            }
        }
        console.log(args);
        return fn.apply(this, args);
    };
};

window.onload = function () {

    String.prototype.csv = String.prototype.split.partial(/,\s*/);

    var result = ("Raijin, Kaolin, Xin").csv();

    console.log(result[0]);

    var delay = setTimeout.partial(undefined, 10);
    delay(function () {
        assert(true, "a call to this function delayed 10 ms");
    });

    function add(a, b, c, d) {
        return (a + b + c + d);
    }

    var addSome = add.partial(2, undefined, 3, undefined);
    console.log(addSome(2,2));
};
