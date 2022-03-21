(function() {
    var names = ["ankush", "kalaraam", "jason", "john", "rohit", "mohit", "Jason"];
    for (var index = 0; index < names.length; index++) {

        var firstLetter = names[index].charAt(0);
        if (firstLetter === 'j' || 'J') {
            greet(names[index]);
        } else {
            greet2(names[index]);
        }

    }
})();