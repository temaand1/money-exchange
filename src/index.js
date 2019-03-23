// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var bills = ['H', 'Q', 'D', 'N', 'P'];
    var coinsval = [50, 25, 10, 5, 1];

    if (!(currency > 0)){
        return result;
    }
    else if (currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        for ( var i = 0; i < coinsval.length; i++){
            var ost = Math.floor (currency/coinsval[i]);
            if (ost != 0){
                currency = currency % coinsval[i];
                result [bills[i]] = ost;
            }
        }
        return result;
    }
}
