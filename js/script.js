var distance = prompt('Quanti kilometri vuoi percorrere?');
var age = prompt('Quanti anni hai?');
var price = distance * 0.21;

if (age <= 18) {
  discount = price * 0.2; //Se minorenni 20% di sconto;
} else if (age >= 65) {
  discount = price * 0.4; //Se over 65 40% di sconto;
}

var output = document.getElementById('result').innerHTML = 'Il prezzo è: ' + discount + '€';
