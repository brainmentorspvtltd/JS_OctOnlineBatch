app.filter('alternateCase', function(){
    return function(value){
        newValue = ""
        for(var i = 0; i < value.length; i++){
            var character = value[i]
            if (i%2 == 0){
                character = character.toUpperCase();
            }
            else{
                character = character.toLowerCase();
            }
            newValue += character;
        }
        return newValue;
    }
})

app.filter('representInHex', ['convertDecimalToHexaDecimal', function(convertDecimalToHexaDecimal){
    return function(num){
        return convertDecimalToHexaDecimal.doConversion(num)
    }
}])