export default class Component {
  #reference

  constructor(reference, id) {
    this.id = id
    this.#reference = reference;

    this.build()
  }

  getReference() {
    return this.#reference;
  }

  build() {
    const component = document.createElement(this.#reference);
    component.id = this.id
    this.element = component;
    return component
  }

  render(elementToAppend = this.element) {
    const body = document.getElementsByTagName(`body`)
    body[0].appendChild(elementToAppend);
    return document.getElementById(this.id)
  }
}