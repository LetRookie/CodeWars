/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more 
letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(string){
    let myArr = string.split(' ');
    let result = [];

    // if(myArr.length <= 1){
    //     return console.log(myArr[0]);
    // }
    
    for (let i = 0 ; i < myArr.length; i++){
        if (myArr[i].length >= 5 ) {
        let  reversed = myArr[i].split('').reverse().join('');
            result.push(reversed)
        }else{
            result.push(myArr[i]);
        }
    }

    console.log(`'${result.join(' ')}'`);
}
spinWords("Welcome dasda ddd dsdsdsds")
// myArr.forEach(element => { element.length >= 5 ? element.split('').reverse().join() : element;   
// });
//console.log(myArr);