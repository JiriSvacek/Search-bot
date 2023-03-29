import { Person, errorBlock, createElement } from "./objects";
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
  let input = createElement("input", {
  type: "text",
  className: "input is-primary",
  placeholder: "Filter robots"
  });
  // @ts-ignore
  input.oninput = () => drawPeople(input.value);
  parElement.appendChild(input);
}

export function showError(message: string, field: HTMLInputElement) {
  field.style.display = "block";
  field.appendChild(errorBlock(message))
}
