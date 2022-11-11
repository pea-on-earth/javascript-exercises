const reverseString = function(string) {
    let splitString = string.split(''); //splits string into array
    let reverseStrAray = splitString.reverse(); //reverses array
    let revStr = ''; //= reverseStrAray[0].concat(reverseStrAray[1],reverseStrAray[2],reverseStrAray[3],reverseStrAray[4]); //concats array back together.. replace w loop?

    for (i = 0; i < reverseStrAray.length; i++){
        revStr += reverseStrAray[i];
    }
    return revStr; //returns reverse string
};

// Do not edit below this line
module.exports = reverseString;
