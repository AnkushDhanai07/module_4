(function(window) {
    var speak = "Good Bye";

    function greet(name) {
        console.log(speak + " " + name);
    }
    window.greet = greet;
})(window);