const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showCost = () => {
	if(price.value == '' || people.value == '') {
		error.textContent = 'Niewystarczające dane, uzupełnij pola.';
		error.style.display = 'block';
        costInfo.style.display = 'none';
	}else {
		error.textContent = '';
        countBill();
    }
};

const countBill = () => {

    const result = (parseFloat(price.value) + (parseInt(price.value)* parseFloat(tip.value))) / parseInt(people.value);

    costInfo.style.display = 'block';
    cost.textContent = result.toFixed(2);

 }

btn.addEventListener('click', showCost);
