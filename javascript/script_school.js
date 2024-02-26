//function division(){
//let input = parseInt( document.getElementById("number-first").value);
//let output = document.getElementById("output")
//let result = "";
// if(input % 2 == 0){
//     result += "divisible by two";
// } else{
//     result += "not divisible by two";
// }

//let divisible = [2,3,5,7,9,10];
//divisible.forEach(elem => {
//if(input % elem == 0){
//   result += "divisible by " + elem +" ; ";
//} else {
//     result += "not divisible by " + elem +" ; ";
// }
// });


//  output.innerText = result;
//}
function division() {
    let inputFirst = parseInt(document.getElementById("number-first1").value);
    let inputSecond = parseInt(document.getElementById("number-first2").value);
    let output = document.getElementById("output")
    let result = gcd(inputFirst, inputSecond)
    output.innerText = result;
} 

function gcd(a, b){
    if(b == 0){
        return a;
    } else{
        return gcd(b, a % b);
    }
}