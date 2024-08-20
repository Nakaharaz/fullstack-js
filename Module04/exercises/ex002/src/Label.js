import Component from "./Component.js";

export default class Label extends Component{
  constructor(content, forElement, reference, id) {
    super(reference = 'label', id);

    this.content = content;
    this.forElement = forElement;

    this.buildLabel()
  }

  buildLabel(){
    const label = super.build();
    label.innerText = this.content;
    label.for = this.forElement;
    this.element = label;
  }

  render(){
    return super.render(this.element)
  }
}