class Panel extends HTMLElement {
  static get observedAttributes() {
    return ["text", "seed"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.className = `relative transition-flex duration-50 ease-in cursor-pointer text-white h-[90vh] rounded-[30px] flex-1 bg-cover bg-center bg-no-repeat`;
    let seed = this.seed || "picsum0";
    this.style = `background-image: url('https://picsum.photos/seed/${seed}/1200/1300.webp')`;
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}
