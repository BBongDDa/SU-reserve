const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

const number2 = document.getElementById("number2");
const increase2 = document.getElementById("increase2");
const decrease2 = document.getElementById("decrease2");

const submit = document.getElementById("submit");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  if (current > 0)
  {
  number.innerText = current - 1;
  }
  else{
      return 0;
  }
};

increase2.onclick = () => {
    const current = parseInt(number2.innerText, 10);
    number2.innerText = current + 1;
  };
  
  decrease2.onclick = () => {
    const current = parseInt(number2.innerText, 10);
    if (current > 0)
    {
    number2.innerText = current - 1;
    }
    else{
        return 0;
    }
  };

  submit.onclick = () => {
    alert('적용되었습니다');
  };
  