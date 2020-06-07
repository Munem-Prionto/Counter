let number = parseInt(document.querySelector('#number').textContent);
const numberHOLDER = document.querySelector('#number');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');
let count = 0;


document.addEventListener('click' , e=> {
    if (e.target.textContent === 'Increase') {
        count++;

        //console.log(numberHOLDER.style.color = 'green');
    } else if (e.target.textContent === 'Decrease') {
        count--;
       // console.log(numberHOLDER.style.color = 'red');

    } else if (e.target.textContent === 'Reset') {
        count = 0;
       // console.log(numberHOLDER.style.color = 'black');

    }

    if (count > 0) {
        console.log(numberHOLDER.style.color = 'greenyellow');
        numberHOLDER.textContent = count;
    } else if (count < 0) {
        console.log(numberHOLDER.style.color = 'red');
        numberHOLDER.textContent = count;
    } else {
        console.log(numberHOLDER.style.color = 'black');
        numberHOLDER.textContent = count;

    }
    
});