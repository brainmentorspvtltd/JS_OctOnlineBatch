app.service('convertDecimalToHexaDecimal', function(){
    this.doConversion = function(num){
        return num.toString(16);
    }
})