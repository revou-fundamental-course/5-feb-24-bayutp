function calculate() {
    let celcius = document.getElementById("celcius").value;
    let result = (celcius * 1.8) + 32;
    if (validate(celcius)) {
        document.getElementById("fahrenheit").value = result;
        document.getElementById("result").value = `${celcius} C x (9/5) + 32 = ${result} F`;
    }
}

function validate(data){
    if (data == ""){
        alert("Form tidak boleh kosong!")
        clear()
        return false;
    } else if (isNaN(data)){
        alert("Form ini harus berupa angka!")
        clear()
        return false
    } else {
        return true
    }
}

function clear() {
    document.getElementById("celcius").value = ""
    document.getElementById("fahrenheit").value = ""
    document.getElementById("result").value = ""
    document.getElementById("celcius").focus()
}