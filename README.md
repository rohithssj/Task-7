# Concepts Demonstrated in Task Manager Application

## 1. Event Propagation

Event Propagation describes how events travel through the DOM tree when an event occurs.

### Event Bubbling

In Event Bubbling, the event starts from the target element and moves upward through its ancestors.

Example:

```text
Child
↓
Parent
↓
Grandparent
```

Console Output:

```text
Child
Parent
Grandparent
```

### Event Capturing

In Event Capturing, the event starts from the outermost ancestor and travels down to the target element.

Example:

```text
Grandparent
↓
Parent
↓
Child
```

Console Output:

```text
Grandparent
Parent
Child
```

### Importance

Event Propagation is useful for implementing Event Delegation and handling events efficiently in large applications.

---

## 2. Attributes vs Properties

HTML elements contain both Attributes and Properties.

### Attributes

Attributes are defined in the HTML markup and represent the initial value of an element.

Example:

```html
<input type="text" value="Hello">
```

Using:

```javascript
input.getAttribute("value")
```

returns:

```text
Hello
```

### Properties

Properties represent the current state of an element in the DOM.

Using:

```javascript
input.value
```

returns the current value entered by the user.

### Difference

If the user changes the input value:

```text
Original HTML Value → Hello
Current Input Value → Hello World
```

Then:

```javascript
input.getAttribute("value")
```

returns:

```text
Hello
```

while

```javascript
input.value
```

returns:

```text
Hello World
```

---

## 3. Browser Rendering Pipeline

The Browser Rendering Pipeline explains how a browser converts HTML and CSS into a visible webpage.

### Step 1: HTML Parsing

The browser reads the HTML document and converts it into tokens.

### Step 2: Tokenization

HTML is broken into smaller tokens such as tags, attributes, and text content.

### Step 3: DOM Tree Creation

The browser creates a DOM (Document Object Model) Tree representing the HTML structure.

Example:

```text
html
 └── body
      ├── nav
      └── section
```

### Step 4: CSS Parsing

The browser reads the CSS file.

### Step 5: CSSOM Tree Creation

The browser converts CSS rules into a CSSOM (CSS Object Model) Tree.

### Step 6: Render Tree Creation

The browser combines:

```text
DOM Tree + CSSOM Tree
```

to create the Render Tree.

### Step 7: Layout and Paint

The browser calculates element positions and paints them on the screen.

### Flow Diagram

```text
HTML
 ↓
Parsing
 ↓
Tokenization
 ↓
DOM Tree

CSS
 ↓
CSSOM Tree

DOM Tree + CSSOM Tree
 ↓
Render Tree
 ↓
Layout
```

---

