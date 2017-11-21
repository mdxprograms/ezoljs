// attrs :: attributes -> maybe error
export function verifyAttrTypes(attrs) {
  if (typeof attrs !== "object") {
    throw Error("Attributes must be in object form: { className: 'my-class' }");
  }
}
