class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.name = "World";
  }

  static get observedAttributes() {
    return ["name"];
  }

  connectedCallback() {
    this.innerHTML = `<h1>Hello ${this.name}</h1>`;
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}
