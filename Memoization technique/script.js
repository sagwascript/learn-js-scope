function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(desc);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

Function.prototype.memoized = function (key) {
    // make sure that the data store exist if not so make the empty object to store the cache
    // the empty object will be the reference of 'this' from this point
    this._values = this._values || {};
    /** The structure would be like this
        this._values = {
            key : cache // would be like this 5 : true
        };

    **/
    return this._values[key] !== undefined ?
    this._values[key]:
    this._values[key] = this.apply(this, arguments);
    // isPrime._values[key] = isPrime.apply(this, num);
    // 'this' refers to isPrime function because the memoized() is applied on isPrime as its method
    // see when it's applied in line 41
};

window.onload = function () {

    function isPrime(num) {
        var prime = num > 1; // var prime = (num > 1);this expression will return a boolean values 'true' or 'false'
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }

    assert(isPrime.memoized(5), "The function works; 5 is prime.");
    assert(isPrime._values[5], "The answer has been cached.");

};
