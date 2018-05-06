function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

Function.prototype.memoized = function (key) {
    this._values = this._values || {};
    return this._values[key] !== undefined ?
    this._values[key] : this._values = this.apply(this, arguments);
};

Function.prototype.memoize = function () {
    var fn = this;
    // by assigning 'this' into variable, the 'fn' variable will remember the closure when memoize() is called
    // fn variable is assigned with isPrime() because the Function (as an Object) who called memoize() is isPrime()
    // why we not just give it 'this' ? because 'this' can't be included on closure. Every function has a different 'this' reference
    return function () {
        console.log(fn);
        // in this anonymous function, 'this' will refer to Window Object
        // that's why we have to assign 'this' into a variable, it's used for remember the 'this' closure when memoize() is invoked
        return fn.memoized.apply(fn, arguments);
    };
};

window.onload = function () {

    var isPrime = (function (num) {
        var prime = num > 1;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }).memoize();

    assert(isPrime(17), "17 is prime.");

};
