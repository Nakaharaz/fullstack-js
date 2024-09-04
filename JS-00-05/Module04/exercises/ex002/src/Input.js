import Component from "./Component.js";

export default class Input extends Component {

  constructor(reference, id, type, placeholder) {
    super(reference = 'input', id);

    this.type = type;
    this.placeholder = placeholder;

    this.buildInput()
  }

  buildInput() {
    const input = super.build();
    input.type = this.type;
    input.placeholder = this.placeholder;
    this.element = input;
  }

  render(){
    console.log(this.element)
    return super.render(this.element)
  }
}