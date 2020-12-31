const array = [0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0];

let maximum = 0;
let result = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
        maximum = 0;
    } else {
        maximum++;
        result = maximum > result ? maximum : result;
    }
}

console.log(result);