export interface Person {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
  }
  
  interface Company {
    name: string;
    bs: string
  }

  interface Props {
    [key: string]: string;
  }

  export function createElement(tagName: string, props?: Props) {
    const element: HTMLElement = document.createElement(tagName);
    for(let i in props) {
      // @ts-ignore
      element[i] = props[i]
    }
    return element
  }

export function errorBlock(message: string) {
  const parrentDiv = createElement("div", {className: "notification is-danger"});
  parrentDiv.appendChild(createElement("p", {innerHTML: `${message}</br>Please try it later!`}));
  return parrentDiv
}

export function businessCardBlock(person: Person) {
  const
    imageDiv = createElement("div", {className: "card-image"}),
    figure = createElement("figure", {className: "image is-4by3"}),
    image = createElement("img", {
      id: `pic${person.id}`, 
      src: `https://robohash.org/${person.name}.png`,
      alt: "Robot picture",
      onerrorName:"this.onerror=null;this.src='src/default.png';"});
    
  image.setAttribute("onerror","this.onerror=null;this.src='src/default.png';");
  figure.appendChild(image);

  imageDiv.appendChild(figure);

  const cardDiv = createElement("div", {className: "card-content"}),
    mediaDiv = createElement("div", {className: "media-content"}),
    nameP = createElement("p", {className: "title is-4 has-text-black", innerHTML: person.name}),
    profileInfoP = createElement("p", {
      className: "subtitle is-6 has-text-black", 
      innerHTML: `${person.email}</br>${person.phone}</br>`}),
    companyInfoP = createElement("p", {
      className: "subtitle is-6 has-text-black", 
      innerHTML: `${person.company.bs}</br>${person.company.name}`}),
    websiteA = createElement("a", {href: person.website, value: person.website});
  
  profileInfoP.appendChild(websiteA)
  mediaDiv.append(nameP, profileInfoP, companyInfoP)
  cardDiv.appendChild(mediaDiv);

  const parentDiv = createElement("div", {className: "card has-background-light"});
  parentDiv.append(imageDiv, cardDiv);
  return parentDiv
}