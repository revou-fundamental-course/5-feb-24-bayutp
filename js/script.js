function calculate() {
    let celcius = document.getElementById("celcius").value;
    let label = document.getElementById("labelC").innerText
    if (validate(celcius)) {
        let result = label.includes("Celcius") ? (celcius * 1.8) + 32 : (celcius-32) * 5/9
        result = Number.isInteger(result) ? result : result.toFixed(2)
        document.getElementById("fahrenheit").value = result;
        document.getElementById("result").value = label.includes("Celcius") ? `${celcius} C x (9/5) + 32 = ${result} F`: `(${celcius} F - 32) x 5/9 = ${result} C`
    }
}

function reserve(){
    let label = document.getElementById("labelC").innerText
    let celcius = document.getElementById("celcius").value;
    
    label.includes("Celcius") ? isCelcius(true) : isCelcius(false)
    if (celcius != "") {
        calculate()
    }
    removeClass()
}

function isCelcius(status) {
    if (status) {
        document.getElementById("labelC").innerHTML = "Fahrenheit (<sup>o</sup>F)"
        document.getElementById("labelF").innerHTML = "Celcius (<sup>o</sup>C)"
        document.getElementById("guide-title").innerHTML = "Fahrenheit ke Celcius"
        document.getElementById("guide-h3").innerHTML = "Cara konversi dari Fahrenheit (<sup>o</sup>F) ke Celcius(<sup>o</sup>C)"
        document.getElementById("guide-rumus").innerHTML = "Suhu S dalam derajat Celcius (<sup>o</sup>C) sama dengan S dalam derajat Fahrenheit (<sup>o</sup>F) kurang 32 kali 5/9"
        document.getElementById("guide-rumus1").innerHTML = "S<sub>(<sup>o</sup>C)</sub> = (S<sub>(<sup>o</sup>F)</sub> - 32) x 5/9"
        document.getElementById("guide-rumus2").innerHTML = "S<sub>(<sup>o</sup>C)</sub> = (S<sub>(<sup>o</sup>F)</sub> - 32) x 0.55"
        document.getElementById("title").innerHTML = "Masukkan suhu derajat Fahrenheit (<sup>o</sup>F) ke kotak dibawah, lalu klik tombol konversi dalam bentuk Celcius (<sup>o</sup>C)."
    } else {
        document.getElementById("labelC").innerHTML = "Celcius (<sup>o</sup>C)"
        document.getElementById("labelF").innerHTML = "Fahrenheit (<sup>o</sup>F)"
        document.getElementById("guide-title").innerHTML = "Celcius ke Fahrenheit"
        document.getElementById("guide-h3").innerHTML = "Cara konversi dari Celcius (<sup>o</sup>C) ke Fahrenheit(<sup>o</sup>F)"
        document.getElementById("guide-rumus").innerHTML = "Suhu S dalam derajat Fahrenheit (<sup>o</sup>F) sama dengan S dalam derajat Celcius (<sup>o</sup>C) kali 9/5 tambah 32"
        document.getElementById("guide-rumus1").innerHTML = "S<sub>(<sup>o</sup>F)</sub> = (S<sub>(<sup>o</sup>C)</sub> x 9/5) + 32"
        document.getElementById("guide-rumus2").innerHTML = "S<sub>(<sup>o</sup>F)</sub> = (S<sub>(<sup>o</sup>C)</sub> x 1.8) + 32"
        document.getElementById("title").innerHTML = "Masukkan suhu derajat Celcius (<sup>o</sup>C) ke kotak dibawah, lalu klik tombol konversi dalam bentuk Fahrenheit (<sup>o</sup>F)."
    }
}

function validate(data){
    if (data == ""){
        addClass("Form ini tidak boleh kosong!")
        return false;
    } else if (isNaN(data)){
        addClass("Form ini harus berupa angka!")
        return false
    } else {
        removeClass()
        return true
    }
}

function removeClass() {
    document.getElementById("celcius").classList.remove("error")
    document.getElementById("err_msg").classList.remove("msg_show")
}

function addClass(error_msg) {
    let field = document.getElementById("celcius");
    let msg = document.getElementById("err_msg");
    field.classList.add("error")
    msg.classList.add("msg_show")
    msg.innerText = error_msg
}