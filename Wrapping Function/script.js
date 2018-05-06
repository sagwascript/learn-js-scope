function assert(value, desc) {
    var li = document.createElement("li"),
        txt = document.createTextNode(txt);

    li.className = value ? "pass" : "fail";
    li.appendChild(txt);
    document.getElementById("result").appendChild(li);
}

function bind(context, name) {
    return function () {
        return context[name].apply(context, arguments);
    };
}

function wrap(object, method, wrapper) {
    var fn = object[method]; // remembering the closure for later use, remember the original function

    return object[method] = function () {
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arguments)));
        // set the first argument in wrapper function as the original method
    };
}

window.onload = function () {

    if (Prototype.Browser.Opera) {
        wrap(Element.method, "readAttribute", function (original, elem, attr) {
            return attr == title ? elem.title : original(elem, attr);
        });
    }

};
