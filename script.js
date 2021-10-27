// Selectors

const billAmount = document.querySelector('.bill'),
btns = document.querySelectorAll('.calc__btn'),
range = document.querySelector('.calc__tips'),
peopleAmount = document.querySelector('.people-amount')
tipAmount = document.getElementById('totalTips'),
totalAmount = document.getElementById('totalTotal'),
calculateBtn = document.querySelector('.calculate');
resetBtn = document.querySelector('.reset');
let custom = document.querySelector('.calc__btn-custom');

let proCent = 15;

// SELECT PROCENT BUTTON

range.addEventListener('click', function(e){
  btns.forEach(btn => btn.classList.remove('clicked'));
  e.target.classList.add('clicked');
  proCent = e.target.value;

  if(e.target = custom){
    custom.addEventListener('change', function(){
      proCent = custom.value;
      custom.innerText = `${proCent}%`
    })
  }
})

// BTN CALCULATE FUNCTIONALITY

calculateBtn.addEventListener('click', function(){
  let x = billAmount.value;
  let y = proCent;
  let z = peopleAmount.value

  //Tip amount per person
  let tipPerPerson = parseFloat((x*(y/100))/z).toFixed(2);
  const totalPerPerson = parseFloat(x/z + (x*(y/100))/z).toFixed(2);

  if(isFinite(tipPerPerson) || isFinite(totalPerPerson)){
    tipAmount.innerText = `$${tipPerPerson}`;
    totalAmount.innerText = `$${totalPerPerson}`;
  } else {
    alert('Please fill the correct data!', tipPerPerson);
    totalReset();
  }
})

// BTN RESET FUNCTIONALITY

resetBtn.addEventListener('click', totalReset);

function totalReset(){
  billAmount.value = "";
  peopleAmount.value = "";
  tipAmount.innerText = totalAmount.innerText = "$0.00";
  btns.forEach(btn => btn.classList.remove('clicked'))};