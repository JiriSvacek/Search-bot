import {fieldDiv, dataArray} from './main.js'
import { Person, businessCardBlock } from "./objects";

export function drawPeople(filterString: string = "") {
    fieldDiv.innerHTML = "";
    filterPeople(filterString).forEach((person: any) => {
      fieldDiv.appendChild(businessCardBlock(person));
    });
    fieldDiv.scrollTo({top: 0, behavior: "smooth"});
  }

function filterPeople(filterString: string): any {
    if (filterString) {
      return ((dataArray as readonly any[]) as Person[]).filter((per: Person) => per.name.toLowerCase().includes(filterString.toLowerCase()))}
    return dataArray;
};
