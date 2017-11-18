/*
 * Ezol example:
 * const ezol = require('ezoljs');
 *
 * const { div } = ezol;
 * div({ className: "jello" }, "text here", [children]);
 */

// element types
const elementTypes = require("./elements.json");

// validations
const validate = {
  attrs: function(attrs) {
    if (typeof attrs !== "object") {
      throw Error(
        "Attributes must be in object form: { className: 'my-class' }"
      );
    }
  }
};

// actions to generate properties on elements
const actions = {
  // addAttrs :: element -> attrs -> element[attributes]
  addAttrs: function(element, attrs) {
    return Object.keys(attrs).map(function(attr) {
      return (element[attr] = attrs[attr]);
    });
  }
};

// createElement :: type -> attrs -> text -> children -> newElement
const createElement = function(type, attrs, text, children) {
  const newElement = document.createElement(type.toLowerCase());

  newElement.appendChild(document.createTextNode(text));

  children.map(function(child) {
    newElement.appendChild(child);
  });

  newElement[actions.addAttrs(newElement, attrs)];

  return newElement;
};

var Ezol = function() {
  const self = this;
  self.collection = {};
  // generate elementTypes
  elementTypes.map(function(type) {
    // elementType :: attrs -> text -> children -> newElement
    Ezol[type.element] = function(attrs, text, children) {
      validate.attrs(attrs);

      const newEl = createElement(type.element, attrs, text, children);

      if (self.collection[type.element]) {
        self.collection[type.element].push(newEl);
      } else {
        self.collection[type.element] = [newEl];
      }

      return newEl;
    };
  });

  return {
    collection: self.collection,
    // attach :: element -> host -> host.appendChild(element)
    attach: function(element, host) {
      document.querySelector(host).appendChild(element);
    }
  };
};

module.exports = Ezol;
