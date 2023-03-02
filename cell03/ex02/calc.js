function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var result = document.getElementById("result");
    

    if (operation === "addition") {
        result.innerHTML = num1 + num2;
    } else if (operation === "soustraction") {
        result.innerHTML = num1 - num2;
    } else if (operation === "multiplication") {
        result.innerHTML = num1 * num2;
    } else if (operation === "division") {
        result.innerHTML = num1 / num2;
    } else if (operation === "nand") {
        result.innerHTML = ~(num1 & num2);
    }
    alert("Le résultat est : " + result.innerHTML);
}
