

function writing(){
    let number = parseFloat(document.getElementById("number").value);
    let result = generation(number);
    output.innerText = result;
}
function generation(length){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:<>,.?/";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
}
return password;
}