# html_codecademy

## Forms input types

### `<input>`: Range type
```
<input type="range" name="movie-rating" min="0" max="10" step="0.1">
```
A slider can be created by using the type="range" attribute on an HTML input element.

### Submittable Input
HTML `<input>` elements can have a type attribute set to submit, by adding type="submit". With this attribute included, a submit button will be rendered and, by default, will submit the `<form>` and execute its action.

The text of a submit button is set to Submit by default but can also be changed by modifying the value attribute.

### `maxlength` Attribute
`<input type="text" name="tweet" maxlength="140">`
In HTML, input fields with type text have an attribute called maxlength that specifies the maximum number of characters that can be entered into the field. The code block shows an input text field that accepts text that has a maximum length of 140 characters.

### `<input>`: Radio Button Type
HTML `<input>` elements can be given a type="radio" attribute that renders a single radio button. Multiple radio buttons of a related topic are given the same name attribute value. Only a single option can be chosen from a group of radio buttons.

The value of the selected/checked `<input>’s` name and value attribute of this element are sent as a key-value pair when the form is submitted.

### `<input>`: Checkbox Type
```
<input type="checkbox" name="breakfast" value="bacon">Bacon 🥓<br>
<input type="checkbox" name="breakfast" value="eggs">Eggs 🍳<br>
<input type="checkbox" name="breakfast" value="pancakes">Pancakes 🥞<br>
```
When using an HTML input element, the type="checkbox" attribute will render a single checkbox item. To create a group of checkboxes related to the same topic, they should all use the same name attribute. Since it’s a checkbox, multiple checkboxes can be selected for the same topic.
