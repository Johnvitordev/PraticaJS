const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value.replace(',', '.'));
   
    const bmi = (weight / (height * height));
   
    const value = document.getElementById('value'); 
    let description = '';

    value.classList.add('attencion');

    document.getElementById('infos').classList.remove('hidden');

    value.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
        description = 'CUIDADO você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attencion');
        value.classList.add('normal')
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! você está com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! você está com obesidade severa!';
    } else {
        description = 'Cuidado! você está com obesidade mórbida!';
    }

    document.getElementById('description').textContent = description;
});
