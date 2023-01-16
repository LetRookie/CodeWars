
/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

function findOdd(arr) {
//     const uniqueElements = [...new Set(arr)];

// const count = uniqueElements.map(element => [
//   element,
//   arr.filter(el => el === element).length,
// ]);
// console.log(count);


//const arr = ['one', 'one', 'one', 'two', 'two', 'three'];
// { one: 3, two: 2, three: 1 }
const count = {};

for (let index = 0; index < arr.length; index++) {
    count[arr[index]] = (count[arr[index]] || 0) + 1;
}

console.log(count);
console.log(Object.values(count));
for (const [key, value] of Object.entries(count)) {
    if(value % 2 == 1){
        console.log(`${key}`);
        //return
    }
  }

}
findOdd([1, 1, 1, 2, 2]);