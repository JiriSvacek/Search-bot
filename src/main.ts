import 'bulma'
import './style.css'
import { getData, addSearchInput, showError } from './init.js'
import { drawPeople } from './people'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <div class="box">
                <div id="search" class="control"></div>
              </div>
            </div>
          </div>
          <div id="field" class="box"></div>
        </div>
      </div>
`

const dataPromise = getData();
export const dataArray = await dataPromise;

async function start(data: any) {
  if (data[0] === false) {
    showError(data[1],fieldDiv);
  } else {
    addSearchInput(document.querySelector<HTMLDivElement>("#search")!);
    drawPeople();
  }
}
export const fieldDiv = document.querySelector<HTMLInputElement>("#field")!;
start(dataArray);
