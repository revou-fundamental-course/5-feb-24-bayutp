function calculate() {
    let celcius = document.getElementById("celcius").value;
    let label = document.getElementById("labelC").innerText
    let result = label.includes("Celcius") ? (celcius * 1.8) + 32 : (celcius-32) * 5/9
    if (validate(celcius)) {
        document.getElementById("fahrenheit").value = result;
        document.getElementById("result").value = label.includes("Celcius") ? `${celcius} C x (9/5) + 32 = ${result} F`: `(${celcius} F -32) x 5/9 = ${result} C`
    }
}

function reserve(){
    let label = document.getElementById("labelC").innerText
    label.includes("Celcius") ? isCelcius(true) : isCelcius(false)
}

function isCelcius(status) {
    if (status) {
        document.getElementById("labelC").innerHTML = "Fahrenheit (<sup>o</sup>F)"
        document.getElementById("labelF").innerHTML = "Celcius (<sup>o</sup>C)"
    } else {
        document.getElementById("labelC").innerHTML = "Celcius (<sup>o</sup>C)"
        document.getElementById("labelF").innerHTML = "Fahrenheit (<sup>o</sup>F)"
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