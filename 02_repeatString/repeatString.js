const repeatString = function(text,multiple) {
    
    stringMultiplied = ''
    
    for(let i=0; i < multiple; i++ ){
        stringMultiplied += text
    }

    return stringMultiplied
};

// Do not edit below this line
module.exports = repeatString;
