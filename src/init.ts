import { Person } from "./objects";
import { drawPeople } from "./people";

export async function getData() {
  return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<{ data: Array<Person> }>;
    })
    .then(data => {return data})
    .catch((error) => {
      console.error(error);
      return [false, error];
    });
}

export function addSearchInput(parElement: HTMLDivElement) {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "input is-primary");
  input.setAttribute("placeholder", "Filter robots");
  input.oninput = () => drawPeople(input.value);
  parElement.appendChild(input);
}

export function showError(message: string, field: HTMLInputElement) {
  field.style.display = "block";
  field.innerHTML = getErrorBody(message);
}

function getErrorBody(message: string) {
  return `<div class="column"></div>
<div class="column">
<div class="notification is-danger"><p>${message}</br>Please try it later!</p></div>
</div>
<div class="column"></div>`;
}