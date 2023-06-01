const btn = document.querySelector(".btn-dice-icon");
const adviceNumber = document.getElementById("number");
const adviceText = document.querySelector(".advice");

const fetchAdvice = async () => {
  const fetchApi = await fetch("https://api.adviceslip.com/advice");
  const data = await fetchApi.json();
  console.log(data);
  adviceNumber.innerHTML = data.slip.id;
  adviceText.innerHTML = data.slip.advice;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAdvice();
});
