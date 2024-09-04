import Component from "./Component.js";

export default class Form extends Component {
  constructor(reference, id) {
    super(reference = 'form', id)

    this.build()
  }

  addChild(element) {
    const form = this.element;
    console.log(form)
    const child = element.render()
    form.append(child);
  }

  render() {
    return super.render(this.element)
  }
}