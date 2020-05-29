function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    
    var result = arr.filter(function isTrue(bol){
        if(bol){
            return bol;
        }
    });
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
