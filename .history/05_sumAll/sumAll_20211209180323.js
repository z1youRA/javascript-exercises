const sumAll = function(m, n) {
    if(m > n) {
        const end = m;
        const start = n;
    }
    else {
        const end = n;
        const start = m;
    }
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
