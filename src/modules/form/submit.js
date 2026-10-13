import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");
// Data mínima
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora!");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
