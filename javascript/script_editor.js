function replac() {
    let line = document.getElementById("line").value;
    let substring = document.getElementById("substring").value;
    let new_substringt = document.getElementById("new_substring").value;
    let output = document.getElementById("output");
    let result = "Немає такого підрядка";
    let new_line="";
    let index= line.indexOf(substring); 
    if(index >= 0){
        let new_line=line.replace(substring,new_substringt);
        output.innerText = new_line;
    }else{
        output.innerText = result;
    }
    
}