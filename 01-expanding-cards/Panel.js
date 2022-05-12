class Panel extends HTMLElement {
  static get observedAttributes() {
    return ["text", "seed"];
  }

  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: "open" });

    // const div = document.createElement("div");
    // const linkElem = document.createElement("link");
    // linkElem.rel = "stylesheet";
    // linkElem.href = "outstyle.css";
    // shadow.appendChild(linkElem);

    // this.textContent = this.text ? this.text : "blorp";
    // this.appendChild(div);
  }

  connectedCallback() {
    this.className = `text-white h-[90vh] rounded-[50px] bg-cover bg-center bg-no-repeat`;

    let seed = this.seed || "picsum0";
    this.style = `background-image: url('https://picsum.photos/seed/${seed}/1200/1300.webp')`;
    //this.textContent = this.text;
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}
