const arr1 = [0,1,2];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
//...spread
//rest...
//também funciona.
const arr4 = [...arr1, ...arr2];
const arr5 = [...arr1,12 , ...arr2, ...[7,8,9]];
console.log(arr5);