(function(window) {
    var speak = "hello";

    function greet2(name) {
        console.log(speak + " " + name);
    }
    window.greet2 = greet2;
})(window);