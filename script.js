// Variables to change the cvv code
let cvv = document.querySelector('.cvv');
let ctext = document.querySelector('.ctext');

// Variables to change the date
let dated = document.querySelector('.expiry');
let years = document.querySelector('.ytext');
let months = document.querySelector('.mtext');

// Variables to change the name
let names = document.querySelector('.name');
let ntext = document.querySelector('.ntext');

// Variables to change the card number
let num = document.querySelector('.num');
let numtext = document.querySelector('.numtext');
console.log(num.innerText)
setInterval(() => {
    
    // Printing the date given by the user
    if (months.value == ''&& years.value == '') {
        dated.innerText = '00/00'
    }
    else {
        if (years.value.length < 3 && months.value.length < 3) {
            dated.innerText = months.value + "/" + years.value 
        }
        else {
            years.value = years.value.substring(0,2);
            months.value = months.value.substring(0,2)
        }
    }


    // Printing the name given by the user
    if (ntext.value == '') {
        names.innerText = 'JANE FOSTER';
    } else {
        names.innerText = ntext.value.toUpperCase();
    }


    // Printing the cvv code given by the user
    if (ctext.value.length <= 3) {
        if (ctext.value == '') {
        cvv.innerText = '000';
        } else {
        cvv.innerText = ctext.value;
        }
    } else {
        ctext.value = ctext.value.substring(0, 3);
    }

    // Printing the card number
    if (numtext.value.length <= 16) {
        if (numtext.value.length == 0) {
            num.innerText = '0000 0000 0000 0000';
        }
        else {
            if (numtext.value.length % 4 == 0) {
                numtext.value += ' ';
                num.innerText = numtext.value;
                numtext.value = numtext.value.replace(/\s/g, "");
            }
            else {
                num.innerText = numtext.value;
            }
        }
    }
    else {
        numtext.value = numtext.value.substring(0,16);
    }
}, 10);
