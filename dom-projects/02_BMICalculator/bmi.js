const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === "" || height < 0 || isNaN(height) ){
        alert('Please provide a valid height');
    }
    else if(weight === "" || weight < 0 || isNaN(weight) ){
        alert('provide a valid weight');
    }
    const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));

    if(bmi < 18.6){
        result.innerHTML = `
        <span>${bmi}</span>
        <p style = "color:red;">You are under weight</p>
        `;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `
        <span>${bmi}</span>
        <p style="color:green;">You are in normal range</p>
        `;
    }
    else if(bmi > 24.9){
        result.innerHTML = `
        <span>${bmi}</span>
        <p style="color:red;">You are over weight</p>
        `;
    }
    else{
        result.innerHTML = '';
    }
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
})