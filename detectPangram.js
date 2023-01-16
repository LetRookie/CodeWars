function solve(sentence){
    let myString = 'abcdefghigklmnopqrstuvwxyz';
    let input = sentence.toLowerCase().split('');
    let arr = [];
    let inputArr = [];
    let flag = true;
    
    for (const el of input) {
        if(el != " "){
            inputArr.push(el);
        }
    }
    //console.log(inputArr);

    for(let i = 0; i <= myString.length-1; i++ ){
        arr.push(myString[i]);
    }
    //console.log(arr);

    for(let element of arr){
        if(inputArr.includes(element)){
            flag = true;
            //console.log('yes');
        }else{
            flag = false;
            //console.log('no');
            break;
        }
    }
    return flag;
}
console.log(solve('abcdefghijklmnopqrstuvwxyz'))

let arr = [1, 2, 3, 4, 5];

arr.reduce()