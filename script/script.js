const adviceId = document.getElementById("advice__id");
const adviceText = document.getElementById("advice__text");
const buttonGetRandomAdvice = document.getElementById(
  "button__get__random__advice"
);

buttonGetRandomAdvice.addEventListener("click", (e) => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;

      adviceId.innerText = `#${Adviceobj.id}`;
      adviceText.innerText = `"${Adviceobj.advice}"`;
    })
    .catch((error) => {
      console.log(error);
    });
}
