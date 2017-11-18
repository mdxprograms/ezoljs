/*
 * Ezol example:
 * var div = Ezol.div;
 * div({ className: "jello" }, "text here", [children]);
 */

// element types
var elementTypes = ["a", "div", "li", "nav", "ul"];
// @TODO: Add this when switching to module export
// var elementTypes = require("./elements.json");

// initial collection for diffing
var collection = {
  div: [],
  nav: [],
  ul: [],
  li: [],
  a: []
};

// validations
var validate = {
  attrs: function(attrs) {
    if (typeof attrs !== "object") {
      throw Error(
        "Attributes must be in object form: { className: 'my-class' }"
      );
    }
  }
};

// actions to generate properties on elements
var actions = {
  // addAttrs :: element -> attrs -> element[attributes]
  addAttrs: function(element, attrs) {
    return Object.keys(attrs).map(function(attr) {
      return (element[attr] = attrs[attr]);
    });
  }
};

// createElement :: type -> attrs -> text -> children -> newElement
var createElement = function(type, attrs, text, children) {
  var newElement = document.createElement(type.toLowerCase());

  newElement.appendChild(document.createTextNode(text));

  children.map(function(child) {
    newElement.appendChild(child);
  });

  newElement[actions.addAttrs(newElement, attrs)];

  return newElement;
};

var Ezol = function() {
  // generate elementTypes
  elementTypes.map(function(type) {
    // elementType :: attrs -> text -> children -> newElement
    Ezol[type] = function(attrs, text, children) {
      validate.attrs(attrs);

      var newEl = createElement(type, attrs, text, children);
      this.collection[type].push(newEl);

      return newEl;
    };
  });

  return {
    collection: collection,
    // attach :: element -> host -> host.appendChild(element)
    attach: function(element, host) {
      document.querySelector(host).appendChild(element);
    }
  };
};
