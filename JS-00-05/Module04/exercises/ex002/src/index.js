import Component from "./Component.js";
import Form from "./Form.js";
import Input from "./Input.js";
import Label from "./Label.js";

const simpleComp = new Component('button', 'myButton')
simpleComp.render()

const myForm = new Form('div', 'myForm')
const birthDateLabel = new Label('Your birth date', 'myDate', 'label', 'myLabel');
const inputDate = new Input('', 'myDate', 'date', 'Your birth date');

myForm.addChild(birthDateLabel)
myForm.addChild(inputDate)

myForm.render()