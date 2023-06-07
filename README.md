# 3.1 HTML FORMS
[html forms cheatsheet](https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet)

# Contents
+ [3.1 HTML Forms](#31-html-forms)
    + [Review](#review)
    + [Input validation](#input-validation)
        + [Regex](#regexmatching-a-pattern)
        + [Review Client Side Validation](#review---client-side-validation)
+ [3.2 Forms input types](#forms-input-types)
    + [`<input>`: Range type](#input-range-type)
    + [Submittable Input](#submittable-input)
    + [`maxlength` Attribute](#maxlength-attribute)
    + [`<input>`: Radio Button Type](#input-radio-button-type)
    + [`<input>`: Checkbox Type](#input-checkbox-type)
    + [`required` Attribute](#required-attribute)
    + [`<input> name` Attribute](#input-name-attribute)
    + [`min` Attribute](#min-attribute)
    + [`<input>`: Number Type](#input-number-type)
    + [HTML Form Validators](#html-form-validators)
+ [3.3 Submitting a Form](#submitting-a-form)
    + [`pattern` Attribute](#pattern-attribute)
    + [`<datalist>` Element](#datalist-element)
    + [`minlength` Attribute](#minlength-attribute)

## 3.1 HTML FORMS
[Learn HTML codecademy Section 3 Part 1 HTML Forms](https://www.codecademy.com/courses/learn-html/lessons/html-forms/resume)

### Review

In this lesson we went over:

The purpose of a `<form>` is to allow users to input information and send it.
The `<form>`‘s action attribute determines where the form’s information goes.
The `<form>`‘s method attribute determines how the information is sent and processed.
To add fields for users to input information we use the `<input>` element and set the type attribute to a field of our choosing:
- type to "text" creates a single row field for text input.
- type to "password" creates a single row field that censors text input.
- type to "number" creates a single row field for number input.
- type to "range" creates a slider to select from a range of numbers.
- type to "checkbox" creates a single checkbox that can be paired with other checkboxes.
- type to "radio" creates a radio button that can be paired with other radio buttons.
- type to "text" and adding the list attribute will pair the `<input>` with a `<datalist>` element if the list of `<input>` and the id of `<datalist>` are the same.
- type to "submit" creates a submit button.
- A `<select>` element is populated with `<option>` elements and renders a dropdown list selection.
- A `<datalist>` element is populated with `<option>` elements and works with an `<input>` to search through choices.
- A `<textarea>` element is a text input field that has a customizable area.
When a `<form>` is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.
Using the `<form>` element in conjunction with the other elements listed above allows us to create sites that take into consideration the wants and needs of our users.

### Input validation

#### Regex/matching a pattern
[Cheatsheet-Forms](https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet)
```
<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
```
> Let’s say we wanted to check for a valid credit card number (a 14 to 16 digit number). 
> We could use the regex: [0-9]{14,16} which checks that the user provided only numbers and that they entered at least 14 digits and at most 16 digits.

#### Review - client-side validation

Client-side validations happen in the browser before information is sent to a server.
Adding the required attribute to an input related element will validate that the input field has information in it.
Assigning a value to the min attribute of a number input element will validate an acceptable minimum value.
Assigning a value to the max attribute of a number input element will validate an acceptable maximum value.
Assigning a value to the minlength attribute of a text input element will validate an acceptable minimum number of characters.
Assigning a value to the maxlength attribute of a text input element will validate an acceptable maximum number of characters.
Assigning a regex to pattern matches the input to the provided regex.
If validations on a `<form>` do not pass, the user gets a message explaining why and the `<form>` cannot be submitted.
These quick checks help ensure that input data is correct and safe for our servers. It also helps give users immediate feedback on what they need to fix instead of having to wait for a server to send back that information.

## 3.2 Forms input types

### `<input>`: Range type
```
<input type="range" name="movie-rating" min="0" max="10" step="0.1">
```
A slider can be created by using the type="range" attribute on an HTML input element.

### Submittable Input
HTML `<input>` elements can have a type attribute set to submit, by adding type="submit". With this attribute included, a submit button will be rendered and, by default, will submit the `<form>` and execute its action.

The text of a submit button is set to Submit by default but can also be changed by modifying the value attribute.

### `maxlength` Attribute
```
<input type="text" name="tweet" maxlength="140">
```
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

### `required` Attribute
```
<input type="password" name="password" required >
```
The example code block shows an input field that is required. The attribute can be written as required="true" or simply required.

### `<input> name` Attribute
```
<input name="username" id="username" />
<input id="address" />
```
In order for a form to send data, it needs to be able to put it into key-value pairs. This is achieved by setting the **name attribute** of the input element. The name will become the key and the value of the input will become the value the form submits corresponding to the key.

It’s important to remember that the name is not the same as the ID in terms of form submission. The ID and the name of the input may be the same, but the value will only be submitted if the name attribute is specified.

In the code example, the first input will be submitted by the form, but the second one will not.

### `min` Attribute
```
<input type="number" name="rating" min="1" max="10">
```
In HTML, input fields with type number have an attribute called min that specifies the minimum value that can be entered into the field. The code block provided shows an input number field that accepts a number with minimum value 1.

### `<input>`: Number Type
```
<input type="number" name="balance" />
```
HTML input elements can be of type number. These input fields allow the user to enter only numbers and a few special characters inside the field.

The example code block shows an input with a type of number and a name of balance. When the input field is a part of a form, the form will receive a key-value pair with the format: name: value after form submission.

### HTML Form Validators
HTML forms allow you to specify different kinds of validation for your input fields to make sure that data is entered correctly before being submitted. HTML supports a number of different validators, including things like minimum value, minimum/maximum length, etc. The validators are specified as attributes on the input field.


## 3.3 Submitting a Form
```
<form action="/index3.html" method="PUT"></form>
```
The `action` attribute tells the form to send the information. A URL is assigned that determines the recipient of the information. The `method` attribute tells the form what to do with that information once it’s sent. An HTTP verb is assigned to the `method` attribute that determines the action to be performed.

### `pattern` Attribute
```
<form action="/action_page.php">
  Country code: 
  <input type="text" name="country_code" 
         pattern="[A-Za-z]{3}" 
         title="Three letter country code">
  <input type="submit">
</form>
```
In a `text` input element, the pattern attribute uses a regular expression to match against (or validate) the value of the `<input>`, when the form is submitted.

### `<datalist>` Element
```
<input list="ide">
  
<datalist id="ide">
  <option value="Visual Studio Code" />
  <option value="Atom" />
  <option value="Sublime Text" />
</datalist>
```
When using an HTML input, a basic search/autocomplete functionality can be achieved by pairing an `<input>` with a `<datalist>`. To pair a `<input>` with a `<datalist>` the `<input>`’s list value must match the value of the id of the `<datalist>`. The datalist element is used to store a list of `<option>`s.

The list of data is shown as a dropdown on an `input` field when a user clicks on the input field. As the user starts typing, the list will be updated to show elements that best match what has been typed into the input field. The actual list items are specified as multiple option elements nested inside the `datalist`.

### `minlength` Attribute
```
<input type="text" name="username" required minlength="6" />
```
In HTML, an input field of type text has an attribute that supports minimum length validation. To check that the input text has a minimum length, add the `minlength` attribute with the character count.

### `textarea` Element
```
<textarea rows="10" cols="30" name="comment"></textarea>
```
The `textarea` element is used when creating a text-box for multi-line input (e.g. a comment section). The element supports the `rows` and `cols` attributes which determine the height and width, respectively, of the element.

When rendered by the browser, `textarea` fields can be stretched/shrunk in size by the user, but the `rows` and `cols` attributes determine the initial size.

Unlike the `input` element, the `<textarea>` element has both opening and closing tags. The `value` of the element is the content in between these tags (much like a `<p>` element). The code block shows a `<textarea>` of size 10x30 and with a `name` of "comment".
