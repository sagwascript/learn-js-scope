
/** The pattern **/
(function function_name() {
    alert("hey i'm iife");
})();

/** Create a Self-contained scope and private variable **/
(function () {
    var num = 0; // this variable can't be accessed from outside of this IIFE
    document.addEventListener("click", function () {
        alert(++num);
    }, false);
}());

/** Enforce arguments **/
(function (what) {
    alert(what);
})("Hey! It's invoked by IIFE");

/** It uses in jQuery **/
$ = function () { alert("Not jQuery!") }; // It's not inner the scope

(function ($) {
    $('img').on("click", function (event) {
        $(event.target).addClass('clickedOn');
    });
})(jQuery) // jQuery assigned to '$'

/** Make your code shorter **/
(function (v) {
    Object.extend(v, {
        href : v._getAttr,
        src : v._geAttr,
        type : v.getAtt
    });
})(Element.attributeTranslation.read.values)
