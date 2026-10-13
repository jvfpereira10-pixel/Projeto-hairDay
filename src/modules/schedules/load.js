import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
  const date = selectedDate.value;
  // busca na API pra carregar do lado direito
  hoursLoad({ date });
}
