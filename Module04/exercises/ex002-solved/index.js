import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component('h1', 'body', { textContent: 'Hello, world!', id: 'myTitle' });

title.render()

const form = new Form('body');

const label = new Label('Name:', form, { htmlFor: 'nameInput' })

const input = new Input(form, { id: 'nameInput', name: 'nameInput' })

form.render();
label.render();

form.addChildren(input)