pico-cookie - Cookie mapper in browser
===

## Overview

[pico\-cookie](//github.com/urin/pico-cookie) provides the cookie object mapping to `document.cookie`.

It is very light, 28 steps and 599 bytes on minified.

Note that any direct operations to `document.cookie` are not mapped to the object `cookie`.

## Requirement

- Chrome 73+
- Edge 79+
- Firefox 63+
- Safari 12.1+
- Opera 60+
- Internet Explorer is not supported

## Usage

```html
<script src="pico-cookie.js"></script>
```

```js
// document.cookie is mapped to cookie
document.cookie  // "SESSIONID=04ecb3d1b; APISID=ed724274d"
cookie           // { SESSIONID: "04ecb3d1b", APISID: "ed724274d" }

// Read
cookie.SESSIONID // "04ecb3d1b"
cookie.APISID    // "ed724274d"

// Update
cookie.SESSIONID = 'abcd'
cookie           // { SESSIONID: "abcd", APISID: "ed724274d" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d"

// Add
cookie.NEWKEY = 'NEWVALUE'
cookie           // { SESSIONID: "abcd", APISID: "ed724274d", NEWKEY: "NEWVALUE" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d; NEWKEY=NEWVALUE"

// Delete
delete cookie.NEWKEY
cookie           // { SESSIONID: "abcd", APISID: "ed724274d" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d"

// Attributes
cookie.put('KEY', 'VALUE', { samesite: 'strict' }) // returns cookie itself

// You can apply any methods same as plain object...
Object.keys(cookie) // ["SESSIONID", "APISID", "NEWKEY"]

for (const [key, value] of Object.entries(cookie)) {
  console.log(key, value)
}
```

## License

[MIT](/LICENSE)

## Author

[urin](//github.com/urin)

