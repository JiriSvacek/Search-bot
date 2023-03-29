import {fieldDiv, dataArray} from './main.js'
import { Person } from "./objects";

export function drawPeople(filterString: string) {
    fieldDiv.innerHTML = "";
    filterPeople(filterString).forEach((person: any) => {
      fieldDiv.innerHTML += getBusinessCardBody(person);
    });
    fieldDiv.scrollTop = 0;
  }

function filterPeople(filterString: string): any {
    if (filterString) {
      return ((dataArray as readonly any[]) as Person[]).filter((per: Person) => per.name.includes(filterString))}
    return dataArray;
};

function getBusinessCardBody(person: Person) {
  return `<div class="card has-background-light"> 
    <div class="card-image">
    <figure class="image is-4by3">
    <img id="pic${person.id}"src="https://robohash.org/
    ${person.name}.png" alt="Robot Picture"
    onerror="this.onerror=null;this.src='src/default.png';">
    </figure>
    </div>
    <div class="card-content">
    <div class="media-content">
    <p class="title is-4 has-text-black">${person.name}</p>
    <p class="subtitle is-6 has-text-black">${person.email}</br>${person.phone}</br>
    <a href="${person.website}">${person.website}</a>
    </p>
    <p class="subtitle is-6 has-text-black">
    ${person.company.bs}</br>
    ${person.company.name}</p>
    </div>
    </div>
    </div>`;
}