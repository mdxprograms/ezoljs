import { generateElements } from "./utils/actions";

// import elementTypes used to generate collection of elements
import elementTypes from "./elements.json";

export default class Ezol {
  constructor() {
    this.collection = [];
    this.elements = generateElements(elementTypes);
  }

  attach(element, host) {
    document.querySelector(host).appendChild(element);
  }
}
