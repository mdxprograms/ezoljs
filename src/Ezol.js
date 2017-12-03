/*
 * Ezol example:
 * const ezol = require('ezoljs');
 *
 * const { div } = ezol;
 * div({ className: "jello" }, "text here", [children]);
 */

// element types
import elementTypes from './elements.json';

// validations
const validate = {
  attrs: test => {
    if (typeof test !== 'object') {
      throw Error(
        'Attributes must be in object form: { className: "my-class" }'
      );
    }
  }
};

// actions to generate properties on elements
const actions = {
  // addAttrs :: element -> attrs -> element[attributes]
  addAttrs: (element, attrs) => {
    return Object.keys(attrs).map(attr => {
      const attrsToAdd = (element[attr] = attrs[attr]);

      return attrsToAdd;
    });
  }
};

// createElement :: type -> attrs -> text -> children -> newElement
const createElement = (type, attrs, text, children) => {
  const newElement = document.createElement(type.toLowerCase());

  newElement.appendChild(document.createTextNode(text));

  children.map(child => {
    newElement.appendChild(child);
  });

  return newElement[actions.addAttrs(newElement, attrs)];
};

export default () => {
  let collection = {};
  let elements = {};
  // generate elementTypes

  elementTypes.map(type => {
    // elementType :: attrs -> text -> children -> newElement
    elements[type.element] = (attrs, text, children) => {
      validate.attrs(attrs);

      const newEl = createElement(type.element, attrs, text, children);

      if (collection[type.element]) {
        collection[type.element].push(newEl);
      } else {
        collection[type.element] = [newEl];
      }

      return newEl;
    };
  });

  return {
    collection,
    // attach :: element -> host -> host.appendChild(element)
    elements,
    attach: (element, host) => {
      document.querySelector(host).appendChild(element);
    }
  };
};
