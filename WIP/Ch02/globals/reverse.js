process.argv.forEach((val, index) => {

    // console.log(`${index}: ${val}`);

});
var sentence = "this is my sentence now cap all first letters";
console.log(`cmd line arg reversed is...  `, reverse(process.argv[2]));
console.log(`cmd line arg Capitalized is...  `, capitalized(sentence));

function reverse(s) {
    return s.split('').reverse().join('');
}

function capitalized(s){
        var newS = s.split(' ');
        for (var i = 0; i < newS.length; i++){
            newS[i] = newS[i].split('');
            newS[i][0] = newS[i][0].toUpperCase();
            newS[i] = newS[i].join('');
        }
    return newS.join(' ');
}

module.exports = function () {


};

