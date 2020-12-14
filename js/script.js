var distance = prompt('Quanti kilometri vuoi percorrere?');
var age = prompt('Quanti anni hai?');
var price = distance * 0.21;

if (age <= 18) {
  discount = (price / 100) * 20; //Se minorenni 20% di sconto;
} else if (age >= 65) {
  discount = (price / 100) * 40; //Se over 65 40% di sconto;
}

var finalPrice = price - discount;

var output = document.getElementById('result').innerHTML = 'Il prezzo è: ' + finalPrice + '€';
