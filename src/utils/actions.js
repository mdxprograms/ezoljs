import { verifyAttrTypes } from "./validate";

// addAttrs :: element -> attrs -> element[attributes]
const addAttrs = (element, attrs) => {
  return Object.keys(attrs).map(function(attr) {
    return (element[attr] = attrs[attr]);
  });
};

// createElement :: type -> attrs -> text -> children -> newElement
const createElement = (type, attrs, text, children) => {
  const newElement = document.createElement(type.toLowerCase());

  newElement.appendChild(document.createTextNode(text));

  children.map(function(child) {
    newElement.appendChild(child);
  });

  newElement[addAttrs(newElement, attrs)];

  return newElement;
};

const generateElements = elementTypes => {
  // generate elementTypes
  elementTypes.map(type => {
    let element = type.element;

    // elementType :: attrs -> text -> children -> newElement
    [element] = (attrs, text, children) => {
      verifyAttrTypes(attrs);
      return createElement(type.element, attrs, text, children);
    };
  });
};

export { generateElements };
