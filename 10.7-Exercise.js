new Set([1,1,2,2,3,4]) // Set(4) {1,2,3,4}

[...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true); // Map(1) {Array(3) => true}
m.set([1,2,3], false); // Map(1) {Array(3) => false}

function hasDuplicate(arr){
    let checked = false;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                checked = true;
            }
        }
    }
    return checked;
}

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
            obj[lowerCasedLetter]++;
        } else {
            obj[lowerCasedLetter] = 1;
        }
        }
    });
    return obj;
}
