const button = document.getElementsByClassName("item")
const btn_reset = document.getElementById("reset")
let input = document.getElementById("display")
let oprasi = ""
let angka1 = "0"
let angka2 = "0"

for (let i = 0; i < button.length; i++){

   button[i].addEventListener('click', function () {

      if (input.value === "0") {
         input.value = button[i].innerHTML
      } else {
         input.value += button[i].innerHTML
      }

      switch (button[i].innerHTML) {
         case "+":
            angka1 = input.value
            oprasi = "jumlah"
            input.value = "0"
            break;
         case "-":
            angka1 = input.value
            oprasi = "kurang"
            input.value = "0"
            break;
         case "/":
            angka1 = input.value
            oprasi = "bagi"
            input.value = "0"
            break;
         case "x":
            angka1 = input.value
            oprasi = "kali"
            input.value = "0"
            break;
         case "=":
            angka2 = input.value
            if (oprasi === "jumlah") {
               input.value = parseInt(angka1) + parseInt(angka2)
            } else if (oprasi === "kurang") {
               input.value = parseInt(angka1) - parseInt(angka2)
            } else if (oprasi === "bagi") {
               input.value = parseInt(angka1) / parseInt(angka2)
            } else if (oprasi === "kali") {
               input.value = parseInt(angka1) * parseInt(angka2)
            }
            break;
         case "C":
            input.value = "0"
            angka1 = "0"
            angka2 = "0"
            break;
      }   
})
}