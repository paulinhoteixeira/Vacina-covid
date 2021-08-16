function getInputValue() {
  let value = document.getElementById("age").value;
  return value;
}

function addClass() {
  const CSSClass = vaccine(getInputValue()) ? "positive" : "negative";

  document.querySelector(".return").classList.add(CSSClass);
}

function innerHTML() {
  let answer = vaccine(getInputValue())
    ? "SIM! Venha se vacinar!"
    : "Ainda não. Continue se cuidando!";
  let image = vaccine(getInputValue())
    ? "icons8-seringa-50.png"
    : "icons8-protection-mask-50.svg";

  const html = `
            <p>${answer}</p>

            <img src="./assets/${image}" alt="Ícone de pessoa com máscara">

            <button class="button" onclick="Answer.close()">Verificar Novamente</button>
            `;

  document.getElementById("return").innerHTML = html;
}

function vaccine(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const Answer = {
  //APARECER A RESPOSTA
  open() {
    if (getInputValue() > 0) {
      addClass();
      innerHTML();
      document.querySelector(".return").classList.remove("inactive");

      document.querySelector(".question").classList.add("inactive");
    } else {
      document.querySelector(".error").classList.remove("inactive");
      document.getElementById("age").value = "";
    }
  },

  //RETORNAR A PERGUNTA
  close() {
    document.querySelector(".question").classList.remove("inactive");

    document.querySelector(".return").classList.add("inactive");
    document.querySelector(".error").classList.add("inactive");

    document.getElementById("age").value = "";
  },
};
