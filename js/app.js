let eventName = prompt('Enter event name', 'meeting');
if (eventName) {
  let modal = document.querySelector('.modal');
  modal.classList.toggle('display');
}
function invalidData() {
  let timeRegExp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
  let name = document.getElementById('name').value;
  let time = document.getElementById('time').value;
  let place = document.getElementById('place').value;
  let input = document.querySelector('.form_input').value;
  if (name.length > 0 && time.length > 0 && place.length > 0 && input.match(/\w/)) {
    if (timeRegExp.test(time)) {
      alert(`${name} has a ${eventName} today at ${time} somewhere in ${place}`);
    } else {
      alert('Enter time in format hh:mm');
    }
  } else {
    alert('Input all data');
  }
}
function convertMoney() {
  let euro = +prompt('Please input amount of euro');
  const HRYVNA_EURO = 33.20;
  const HRYVNA_DOLLAR = 27.25;
  const HUNDRED = 100;
  if (!isNaN(euro) && euro > 0) {
    let dollar = +prompt('Please input amount of dollar'); 
    if (!isNaN(dollar) && dollar > 0) {
      let hryvnaEuro = Math.trunc(euro * HRYVNA_EURO * HUNDRED) / HUNDRED;
      let hryvnaDollar = Math.trunc(dollar * HRYVNA_DOLLAR * HUNDRED) / HUNDRED;
      alert(`${euro} euros are equal ${hryvnaEuro} hrns, ${dollar} dollars are equal ${hryvnaDollar} hrns`);
    }
  }
}