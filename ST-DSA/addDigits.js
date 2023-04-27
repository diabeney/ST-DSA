const val = 34;

function addDigits(num) {
    let acc = num;
    do {
        val = acc.toString.split('');
        result = val.reduce((acc, curr) => parseInt(acc) + parseInt(curr));
        acc = result;
    } while(acc > 9)
    return acc;
}


console.log(addDigits(38))